# Interface: GroupingConfig\<T\>

Metadata for configuring how groupings in the data should be handled.

## Type Parameters

• **T**

## Properties

### render()?

> `optional` **render**: (`key`: [`Literal`](../../expressions/type-aliases/Literal.md), `rows`: [`Grouping`](../../expressions/type-aliases/Grouping.md)\<`T`\>) => [`Literal`](../../expressions/type-aliases/Literal.md) \| `VNode`\<`object`\>

How a grouping with the given key and set of rows should be handled.

#### Parameters

• **key**: [`Literal`](../../expressions/type-aliases/Literal.md)

• **rows**: [`Grouping`](../../expressions/type-aliases/Grouping.md)\<`T`\>

#### Returns

[`Literal`](../../expressions/type-aliases/Literal.md) \| `VNode`\<`object`\>

#### Defined in

[src/api/ui/views/table.tsx:52](https://github.com/blacksmithgu/datacore/blob/7b0c019def7e079c43dc5dbea32d9f610e95285b/src/api/ui/views/table.tsx#L52)
