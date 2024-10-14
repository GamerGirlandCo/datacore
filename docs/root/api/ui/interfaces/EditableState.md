# Interface: EditableState\<T\>

Core state for tracking an editable object.

## Type Parameters

• **T**

the type of the value being edited

## Properties

### content

> **content**: `T`

The current (arbitrary) content of the editable.

#### Defined in

[src/ui/fields/editable.tsx:29](https://github.com/GamerGirlandCo/datacore/blob/73f36550e501eb29175b69b6a097ff3d4401efc7/src/ui/fields/editable.tsx#L29)

***

### inline?

> `optional` **inline**: `boolean`

Whether the editor is being rendered inline in a paragraph or not.

#### Defined in

[src/ui/fields/editable.tsx:33](https://github.com/GamerGirlandCo/datacore/blob/73f36550e501eb29175b69b6a097ff3d4401efc7/src/ui/fields/editable.tsx#L33)

***

### isEditing?

> `optional` **isEditing**: `boolean`

Whether the value is currently being edited.

#### Defined in

[src/ui/fields/editable.tsx:27](https://github.com/GamerGirlandCo/datacore/blob/73f36550e501eb29175b69b6a097ff3d4401efc7/src/ui/fields/editable.tsx#L27)

***

### updater()

> **updater**: (`val`: `T`) => `unknown`

Callback whenever the editable value is changed.

#### Parameters

• **val**: `T`

#### Returns

`unknown`

#### Defined in

[src/ui/fields/editable.tsx:31](https://github.com/GamerGirlandCo/datacore/blob/73f36550e501eb29175b69b6a097ff3d4401efc7/src/ui/fields/editable.tsx#L31)
