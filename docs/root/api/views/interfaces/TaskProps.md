# Interface: TaskProps

Props passed to the task list component.

## Extends

- [`ListState`](ListState.md)\<[`MarkdownTaskItem`](../../indexables/classes/MarkdownTaskItem.md) \| [`MarkdownListItem`](../../indexables/classes/MarkdownListItem.md)\>

## Properties

### additionalStates?

> `optional` **additionalStates**: `string`[]

task states to cycle through, if specified

#### Defined in

[src/api/ui/views/task.tsx:33](https://github.com/GamerGirlandCo/datacore/blob/73f36550e501eb29175b69b6a097ff3d4401efc7/src/api/ui/views/task.tsx#L33)

***

### displayedFields?

> `optional` **displayedFields**: [`BaseFieldProps`](../../ui/interfaces/BaseFieldProps.md)\<[`Literal`](../../expressions/type-aliases/Literal.md)\> & `object`[]

fields to display under each item in this task list

#### Defined in

[src/api/ui/views/task.tsx:35](https://github.com/GamerGirlandCo/datacore/blob/73f36550e501eb29175b69b6a097ff3d4401efc7/src/api/ui/views/task.tsx#L35)

***

### paging?

> `optional` **paging**: `number` \| `boolean`

Controls whether paging is enabled for this element. If true, uses default page size. If a number, paging is enabled with the given page size.

#### Inherited from

[`ListState`](ListState.md).[`paging`](ListState.md#paging)

#### Defined in

[src/api/ui/views/list.tsx:29](https://github.com/GamerGirlandCo/datacore/blob/73f36550e501eb29175b69b6a097ff3d4401efc7/src/api/ui/views/list.tsx#L29)

***

### renderer()?

> `optional` **renderer**: (`element`: [`MarkdownTaskItem`](../../indexables/classes/MarkdownTaskItem.md) \| [`MarkdownListItem`](../../indexables/classes/MarkdownListItem.md), `index`: `number`) => `undefined` \| `null` \| `string` \| `number` \| `bigint` \| `boolean` \| `object` \| `Function` \| [`Link`](../../expressions/classes/Link.md) \| `DateTime` \| `Duration` \| [`Literal`](../../expressions/type-aliases/Literal.md)[] \| [`DataObject`](../../expressions/type-aliases/DataObject.md) \| `VNode`\<`any`\>

Custom render function to use for rendering each element. Can produce either JSX or a plain value which will be
rendered as a literal.

#### Parameters

• **element**: [`MarkdownTaskItem`](../../indexables/classes/MarkdownTaskItem.md) \| [`MarkdownListItem`](../../indexables/classes/MarkdownListItem.md)

• **index**: `number`

#### Returns

`undefined` \| `null` \| `string` \| `number` \| `bigint` \| `boolean` \| `object` \| `Function` \| [`Link`](../../expressions/classes/Link.md) \| `DateTime` \| `Duration` \| [`Literal`](../../expressions/type-aliases/Literal.md)[] \| [`DataObject`](../../expressions/type-aliases/DataObject.md) \| `VNode`\<`any`\>

#### Inherited from

[`ListState`](ListState.md).[`renderer`](ListState.md#renderer)

#### Defined in

[src/api/ui/views/list.tsx:35](https://github.com/GamerGirlandCo/datacore/blob/73f36550e501eb29175b69b6a097ff3d4401efc7/src/api/ui/views/list.tsx#L35)

***

### rows?

> `optional` **rows**: ([`MarkdownTaskItem`](../../indexables/classes/MarkdownTaskItem.md) \| [`MarkdownListItem`](../../indexables/classes/MarkdownListItem.md))[]

The full collection of elements in the list.

#### Inherited from

[`ListState`](ListState.md).[`rows`](ListState.md#rows)

#### Defined in

[src/api/ui/views/list.tsx:26](https://github.com/GamerGirlandCo/datacore/blob/73f36550e501eb29175b69b6a097ff3d4401efc7/src/api/ui/views/list.tsx#L26)

***

### type?

> `optional` **type**: `"ordered"` \| `"unordered"` \| `"none"`

Whether the list should be ordered (ol), unordered (ul), or have no special markup (none).

Lists with no special markup just have each element rendered directly as-is without any wrapping
inside of a single div.

#### Inherited from

[`ListState`](ListState.md).[`type`](ListState.md#type)

#### Defined in

[src/api/ui/views/list.tsx:23](https://github.com/GamerGirlandCo/datacore/blob/73f36550e501eb29175b69b6a097ff3d4401efc7/src/api/ui/views/list.tsx#L23)
