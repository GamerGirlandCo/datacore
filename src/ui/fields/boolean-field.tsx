import { useEditableDispatch } from "ui/editable";
import { FieldControlProps } from "./common-props";
import { TargetedEvent } from "preact/compat";
import { useStableCallback } from "ui/hooks";

export function BooleanField(props: FieldControlProps<boolean>) {
	const [state, dispatch] = useEditableDispatch<boolean>({
		content: props.value ?? props.defaultValue,
		updater: props.updater!
	})
	const onChange = useStableCallback((evt: TargetedEvent<HTMLInputElement> & MouseEvent) => {
		let newValue = !evt.currentTarget.hasClass("is-enabled")
		dispatch({type: "content-changed", newValue});
		dispatch({type: "commit", newValue })
	}, [state.content, state, props.value]);

	return <div onClick={onChange} className={`checkbox-container${state.content ? " is-enabled" : ""}`}>
		<input type="checkbox"/>
	</div>
}