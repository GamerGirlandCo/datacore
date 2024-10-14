# Interface: FrontmatterEntry

An entry in the frontmatter; includes the raw value, parsed value, and raw key (before lower-casing).

## Properties

### key

> **key**: `string`

The actual string in frontmatter with exact casing.

#### Defined in

[src/index/types/markdown.ts:715](https://github.com/blacksmithgu/datacore/blob/7b0c019def7e079c43dc5dbea32d9f610e95285b/src/index/types/markdown.ts#L715)

***

### raw

> **raw**: `string`

The raw value of the frontmatter entry before parsing; generally a string or number.

#### Defined in

[src/index/types/markdown.ts:719](https://github.com/blacksmithgu/datacore/blob/7b0c019def7e079c43dc5dbea32d9f610e95285b/src/index/types/markdown.ts#L719)

***

### value

> **value**: [`Literal`](../../expressions/type-aliases/Literal.md)

The parsed value of the frontmatter entry (date, duration, etc.).

#### Defined in

[src/index/types/markdown.ts:717](https://github.com/blacksmithgu/datacore/blob/7b0c019def7e079c43dc5dbea32d9f610e95285b/src/index/types/markdown.ts#L717)
