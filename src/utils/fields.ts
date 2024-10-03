import { Field } from "expression/field";
import { Literal, Literals } from "expression/literal";
import { setInlineField } from "index/import/inline-field";
import { MarkdownTaskItem } from "index/types/markdown";
import { App } from "obsidian";
import { Dispatch, useCallback, useContext } from "preact/hooks";
import { APP_CONTEXT, DATACORE_CONTEXT } from "ui/markdown";
import { rewriteTask } from "./task";
import { EditableAction } from "ui/fields/editable";
import { Datacore } from "index/datacore";

export async function rewriteFieldInFile(field: Field, newValue: Literal, app: App, core: Datacore) {
    switch (field.provenance?.type) {
			case "frontmatter": {
					const tFile = app.vault.getFileByPath(field.provenance.file);
            if (!tFile) return;
            await app.fileManager.processFrontMatter(tFile, (fm) => {
                fm[field.key] = newValue;
            });
						core.reload(tFile);
            break;
        }
        case "inline-field": {
            const tFile = app.vault.getFileByPath(field.provenance.file);
            if (!tFile) return;
            const content = await app.vault.read(tFile);
            const lines = content.split(/\r?\n?/);
            const line = lines[field.provenance.line];
            const newLine = setInlineField(line, field.key, Literals.toString(newValue));
            lines[field.provenance.line] = newLine;
            await app.vault.modify(tFile, lines.join("\n"));
						core.reload(tFile);
						break;
        }
    }
}

export function useSetField<T extends Literal>(field: Field, onChange?: (newValue: T) => void) {
    const app = useContext(APP_CONTEXT);
		const core = useContext(DATACORE_CONTEXT);
    return useCallback(
        (newValue: T) => {
            rewriteFieldInFile(field, newValue, app, core).then(() => {
                if (onChange) onChange(newValue);
            });
        },
        [field, onChange]
    );
}
export async function setTaskText(app: App, core: Datacore, text: string, item: MarkdownTaskItem) {
    let withFields = `${text}${Object.keys(item.$infields).length ? " " : ""}`;
    for (let field in item.$infields) {
        withFields = setInlineField(withFields, field, item.$infields[field].raw);
    }
    await rewriteTask(app.vault, core, item, item.$status, withFields);
}
export function useFinalizer<T>(newValue: T, dispatch: Dispatch<EditableAction<T>>) {
    return async function () {
        dispatch({
            type: "content-changed",
            newValue: newValue,
        });
        dispatch({
            type: "editing-toggled",
            newValue: false,
        });
    };
}
