# Interface: VanillaColumn\<T, V\>

A simple column definition which allows for custom renderers and titles.

## Type Parameters

• **T**

the type of each row

• **V** = [`Literal`](../../expressions/type-aliases/Literal.md)

the type of the value in this column

## Properties

### editable?

> `optional` **editable**: `boolean`

whether this column is editable or not

#### Defined in

[src/api/ui/views/table.tsx:38](https://github.com/GamerGirlandCo/datacore/blob/73f36550e501eb29175b69b6a097ff3d4401efc7/src/api/ui/views/table.tsx#L38)

***

### editor()?

> `optional` **editor**: (`value`: `V`, `object`: `T`, `dispatch`: `Dispatch`\<`EditableAction`\<`V`\>\>) => `Element`

Rendered when editing the column

#### Parameters

• **value**: `V`

• **object**: `T`

• **dispatch**: `Dispatch`\<`EditableAction`\<`V`\>\>

#### Returns

`Element`

#### Defined in

[src/api/ui/views/table.tsx:41](https://github.com/GamerGirlandCo/datacore/blob/73f36550e501eb29175b69b6a097ff3d4401efc7/src/api/ui/views/table.tsx#L41)

***

### id

> **id**: `string`

The unique ID of this table column; you cannot have multiple columns with the same ID in a given table.

#### Defined in

[src/api/ui/views/table.tsx:23](https://github.com/GamerGirlandCo/datacore/blob/73f36550e501eb29175b69b6a097ff3d4401efc7/src/api/ui/views/table.tsx#L23)

***

### onUpdate()?

> `optional` **onUpdate**: (`value`: `V`, `object`: `T`) => `unknown`

Called when the column value updates.

#### Parameters

• **value**: `V`

• **object**: `T`

#### Returns

`unknown`

#### Defined in

[src/api/ui/views/table.tsx:44](https://github.com/GamerGirlandCo/datacore/blob/73f36550e501eb29175b69b6a097ff3d4401efc7/src/api/ui/views/table.tsx#L44)

***

### render()?

> `optional` **render**: (`value`: `V`, `object`: `T`) => [`Literal`](../../expressions/type-aliases/Literal.md) \| `VNode`\<`object`\>

Called to render the given column value. Can depend on both the specific value and the row object.

#### Parameters

• **value**: `V`

• **object**: `T`

#### Returns

[`Literal`](../../expressions/type-aliases/Literal.md) \| `VNode`\<`object`\>

#### Defined in

[src/api/ui/views/table.tsx:35](https://github.com/GamerGirlandCo/datacore/blob/73f36550e501eb29175b69b6a097ff3d4401efc7/src/api/ui/views/table.tsx#L35)

***

### title?

> `optional` **title**: `string` \| `VNode`\<`object`\> \| () => `string` \| `VNode`\<`object`\>

The title which will display at the top of the column if present.

#### Defined in

[src/api/ui/views/table.tsx:26](https://github.com/GamerGirlandCo/datacore/blob/73f36550e501eb29175b69b6a097ff3d4401efc7/src/api/ui/views/table.tsx#L26)

***

### value()

> **value**: (`object`: `T`) => `V`

Value function which maps the row to the value being rendered.

#### Parameters

• **object**: `T`

#### Returns

`V`

#### Defined in

[src/api/ui/views/table.tsx:32](https://github.com/GamerGirlandCo/datacore/blob/73f36550e501eb29175b69b6a097ff3d4401efc7/src/api/ui/views/table.tsx#L32)

***

### width?

> `optional` **width**: `string`

If present, the CSS width to apply to the column. 'minimum' will set the column size to it's smallest possible value, while 'maximum' will do the opposite.

#### Defined in

[src/api/ui/views/table.tsx:29](https://github.com/GamerGirlandCo/datacore/blob/73f36550e501eb29175b69b6a097ff3d4401efc7/src/api/ui/views/table.tsx#L29)
