# Interface: VanillaTableProps\<T\>

All available props for a vanilla table.

## Type Parameters

• **T**

## Properties

### columns

> **columns**: [`VanillaColumn`](VanillaColumn.md)\<`T`, [`Literal`](../../expressions/type-aliases/Literal.md)\>[]

The columns to render in the table.

#### Defined in

[src/api/ui/views/table.tsx:60](https://github.com/blacksmithgu/datacore/blob/7b0c019def7e079c43dc5dbea32d9f610e95285b/src/api/ui/views/table.tsx#L60)

***

### groupings?

> `optional` **groupings**: [`GroupingConfig`](GroupingConfig.md)\<`T`\> \| [`GroupingConfig`](GroupingConfig.md)\<`T`\>[] \| (`key`: [`Literal`](../../expressions/type-aliases/Literal.md), `rows`: [`Grouping`](../../expressions/type-aliases/Grouping.md)\<`T`\>) => [`Literal`](../../expressions/type-aliases/Literal.md) \| `VNode`\<`object`\>

Allows for grouping header columns to be overridden with custom rendering/logic.

#### Defined in

[src/api/ui/views/table.tsx:66](https://github.com/blacksmithgu/datacore/blob/7b0c019def7e079c43dc5dbea32d9f610e95285b/src/api/ui/views/table.tsx#L66)

***

### paging?

> `optional` **paging**: `number` \| `boolean`

If set to a boolean - enables or disables paging.
If set to a number, paging will be enabled with the given number of rows per page.

#### Defined in

[src/api/ui/views/table.tsx:72](https://github.com/blacksmithgu/datacore/blob/7b0c019def7e079c43dc5dbea32d9f610e95285b/src/api/ui/views/table.tsx#L72)

***

### rows

> **rows**: [`Grouping`](../../expressions/type-aliases/Grouping.md)\<`T`\>

The rows to render; may potentially be grouped or just a plain array.

#### Defined in

[src/api/ui/views/table.tsx:63](https://github.com/blacksmithgu/datacore/blob/7b0c019def7e079c43dc5dbea32d9f610e95285b/src/api/ui/views/table.tsx#L63)

***

### scrollOnPaging?

> `optional` **scrollOnPaging**: `number` \| `boolean`

Whether the view will scroll to the top automatically on page changes. If true, will always scroll on page changes.
If a number, will scroll only if the number is greater than the current page size.

#### Defined in

[src/api/ui/views/table.tsx:78](https://github.com/blacksmithgu/datacore/blob/7b0c019def7e079c43dc5dbea32d9f610e95285b/src/api/ui/views/table.tsx#L78)
