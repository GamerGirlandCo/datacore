import { Literal, Literals } from "expression/literal";
import { Indexable } from "./indexable";

/** The source of a field, used when determining what files to overwrite and how. */
export type Provenance = { type: "frontmatter"; file: string; key: string; raw: string } | { type: "intrinsic" };

/** General definition for a field. Provides the field key, value, as well as information on it's source and how it can be edited. */
export interface Field {
    /** The canonical key name for the field (i.e., as it actually shows up in the data structure). */
    key: string;
    /** The value of the field. */
    value: Literal;
    /** The raw value of the field before parsing, if relevant. */
    raw?: string;
    /** If present, describes where the field came from in precise detail, allowing the field to be edited. */
    provenance?: Provenance;
}

/** Metadata for objects which are annotated with fields. */
export const FIELDBEARING_TYPE = "fields";
export interface Fieldbearing {
    /** Return a list of all fields. This may be computed eagerly, so cache this value for repeated operations. */
    fields: Field[];

    /** Fetch a field with the given name if it is present on this object. */
    field(key: string): Field | undefined;
}

/** Constant for the intrinsic provenance.  */
const INTRINSIC_TYPE: Provenance = { type: "intrinsic" };

/**
 * Generic function which extract fields. If no argument is provided, it should return all fields; otherwise,
 * it should return the field matching the given key.
 */
export type FieldExtractor<T extends Fieldbearing> = (object: T, key?: string) => Field[];

/** Quick utilities for generating fields and doing searches over them. */
export namespace Extractors {
    /** Generate a list of fields for the given object, returning them as a list. */
    export function intrinsics<T extends Fieldbearing>(except?: Set<string>): FieldExtractor<T> {
        return (object: T, key?: string) => {
            if (key == null) {
                const fields: Field[] = [];

                for (const key of Object.keys(object)) {
                    // Don't allow recursion on 'fields', and skip any ignored.
                    if (key === "fields" || except?.has(key)) continue;

                    // No functions, only use actual values.
                    const value = (object as any)[key];
                    if (Literals.isFunction(value)) continue;

                    fields.push({
                        key,
                        value,
                        provenance: INTRINSIC_TYPE,
                    });
                }

                return fields;
            } else {
                if (key === "fields" || except?.has(key)) return [];

                if (key in object) {
                    return [
                        {
                            key,
                            value: (object as any)[key],
                            provenance: INTRINSIC_TYPE,
                        },
                    ] as Field[];
                } else {
                    return [];
                }
            }
        };
    }

    /** Field extractor which extracts frontmatter fields. */
    export function frontmatter<T extends Fieldbearing & Indexable>(
        front: (object: T) => Record<string, Literal> | undefined,
        raw: (object: T) => Record<string, any> | undefined
    ): FieldExtractor<T> {
        return (object: T, key?: string) => {
            const frontmatter = front(object);
            const raws = raw?.(object) ?? {};

            if (!frontmatter) return [];

            if (key == null) {
                const fields: Field[] = [];

                for (const key of Object.keys(frontmatter)) {
                    const value = frontmatter[key];
                    const raw = raws[key];

                    fields.push({
                        key,
                        value,
                        raw,
                        provenance: { type: "frontmatter", file: object.$file!, key, raw },
                    });
                }

                return fields;
            } else {
                if (!(key in frontmatter)) return [];

                const value = frontmatter[key];
                const raw = raws[key];

                return [
                    {
                        key,
                        value,
                        raw,
                        provenance: { type: "frontmatter", file: object.$file!, key, raw },
                    },
                ];
            }
        };
    }

    /** Merge multiple field extractors into one; if multiple extractors produce identical keys, keys from the earlier extractor will be preferred. */
    export function merge<T extends Fieldbearing>(...extractors: FieldExtractor<T>[]): FieldExtractor<T> {
        return (object: T, key?: string) => {
            if (key == null) {
                const used = new Set<string>();

                const fields: Field[] = [];
                for (const extractor of extractors) {
                    for (const field of extractor(object, undefined)) {
                        if (used.has(field.key)) continue;

                        used.add(field.key);
                        fields.push(field);
                    }
                }
                return fields;
            } else {
                for (const extractor of extractors) {
                    const field = extractor(object, key);
                    if (field && field.length > 0) return field;
                }

                return [];
            }
        };
    }
}