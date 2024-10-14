# Interface: FrontmatterEntry

An entry in the frontmatter; includes the raw value, parsed value, and raw key (before lower-casing).

## Properties

### key

> **key**: `string`

The actual string in frontmatter with exact casing.

#### Defined in

[src/index/types/markdown.ts:715](https://github.com/GamerGirlandCo/datacore/blob/73f36550e501eb29175b69b6a097ff3d4401efc7/src/index/types/markdown.ts#L715)

***

### raw

> **raw**: `string`

The raw value of the frontmatter entry before parsing; generally a string or number.

#### Defined in

[src/index/types/markdown.ts:719](https://github.com/GamerGirlandCo/datacore/blob/73f36550e501eb29175b69b6a097ff3d4401efc7/src/index/types/markdown.ts#L719)

***

### value

> **value**: [`Literal`](../../expressions/type-aliases/Literal.md)

The parsed value of the frontmatter entry (date, duration, etc.).

#### Defined in

[src/index/types/markdown.ts:717](https://github.com/GamerGirlandCo/datacore/blob/73f36550e501eb29175b69b6a097ff3d4401efc7/src/index/types/markdown.ts#L717)
