# Interface: EditableProps\<T\>

## Type Parameters

• **T**

the type of the value being edited

## Properties

### defaultRender?

> `optional` **defaultRender**: `VNode`\<`object`\>

Backup default renderer for this object.

#### Defined in

[src/ui/fields/editable.tsx:44](https://github.com/blacksmithgu/datacore/blob/b2f12b09abf3864956181ba4f5c7075bc281ce27/src/ui/fields/editable.tsx#L44)

***

### dispatch

> **dispatch**: `Dispatch`\<`EditableAction`\<`T`\>\>

Dispatcher for controlling the edit state, tracking updates, commits, and so on.

#### Defined in

[src/ui/fields/editable.tsx:48](https://github.com/blacksmithgu/datacore/blob/b2f12b09abf3864956181ba4f5c7075bc281ce27/src/ui/fields/editable.tsx#L48)

***

### editor

> **editor**: `ComponentChild`

Node which points to the actual editor.

#### Defined in

[src/ui/fields/editable.tsx:46](https://github.com/blacksmithgu/datacore/blob/b2f12b09abf3864956181ba4f5c7075bc281ce27/src/ui/fields/editable.tsx#L46)

***

### sourcePath?

> `optional` **sourcePath**: `string`

Source file from which the editable value originates.

#### Defined in

[src/ui/fields/editable.tsx:42](https://github.com/blacksmithgu/datacore/blob/b2f12b09abf3864956181ba4f5c7075bc281ce27/src/ui/fields/editable.tsx#L42)

***

### state

> **state**: [`EditableState`](EditableState.md)\<`T`\>

The current state of the editor.

#### Defined in

[src/ui/fields/editable.tsx:50](https://github.com/blacksmithgu/datacore/blob/b2f12b09abf3864956181ba4f5c7075bc281ce27/src/ui/fields/editable.tsx#L50)
