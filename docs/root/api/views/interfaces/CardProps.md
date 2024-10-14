# Interface: CardProps\<T\>

Props for the card component

## Type Parameters

• **T**

## Properties

### centerTitle?

> `optional` **centerTitle**: `boolean`

If true, the title will be rendered centered.

#### Defined in

[src/api/ui/views/cards.tsx:29](https://github.com/GamerGirlandCo/datacore/blob/73f36550e501eb29175b69b6a097ff3d4401efc7/src/api/ui/views/cards.tsx#L29)

***

### content

> **content**: [`Literal`](../../expressions/type-aliases/Literal.md) \| (`val`: `T`) => Literal \| VNode\<\{\}\>

The raw content of the card.

#### Defined in

[src/api/ui/views/cards.tsx:23](https://github.com/GamerGirlandCo/datacore/blob/73f36550e501eb29175b69b6a097ff3d4401efc7/src/api/ui/views/cards.tsx#L23)

***

### footer?

> `optional` **footer**: [`Literal`](../../expressions/type-aliases/Literal.md) \| (`val`: `T`) => Literal \| VNode\<\{\}\>

optional footer (because why not?)

#### Defined in

[src/api/ui/views/cards.tsx:26](https://github.com/GamerGirlandCo/datacore/blob/73f36550e501eb29175b69b6a097ff3d4401efc7/src/api/ui/views/cards.tsx#L26)

***

### title

> **title**: [`Literal`](../../expressions/type-aliases/Literal.md) \| (`val`: `T`) => Literal \| VNode\<\{\}\>

The title of the card.

#### Defined in

[src/api/ui/views/cards.tsx:20](https://github.com/GamerGirlandCo/datacore/blob/73f36550e501eb29175b69b6a097ff3d4401efc7/src/api/ui/views/cards.tsx#L20)

***

### value

> **value**: `T`

the actual value held in this card.

#### Defined in

[src/api/ui/views/cards.tsx:17](https://github.com/GamerGirlandCo/datacore/blob/73f36550e501eb29175b69b6a097ff3d4401efc7/src/api/ui/views/cards.tsx#L17)
