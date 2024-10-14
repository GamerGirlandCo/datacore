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

[src/api/ui/views/table.tsx:52](https://github.com/blacksmithgu/datacore/blob/b2f12b09abf3864956181ba4f5c7075bc281ce27/src/api/ui/views/table.tsx#L52)
