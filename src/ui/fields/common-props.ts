import { LiteralType } from "expression/literal";
import { InlineField } from "index/import/inline-field";

export interface FieldControlProps<T> extends BaseFieldProps<T> {
	field: InlineField;
	value: T;
	file: string;
	updater?: (val: T) => unknown
}
export interface BaseFieldProps<T> {
	type: LiteralType;
	defaultValue?: T | (() => T);
	renderAs?: "progress" | "rating" | "select" | "raw";
	// TODO: type this better
	config?: Record<string, any>
}