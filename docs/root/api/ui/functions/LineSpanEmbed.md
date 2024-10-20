# Function: LineSpanEmbed()

> **LineSpanEmbed**(`__namedParameters`: `object`): `Element`

An embed of an arbitrary span of lines in a Markdown file. Operates by asynchronously loading the file and pulling
out the given [start, end) line span.

Note that it's possible for the file on disk to be different than it was when you first loaded the [start, end) line span
- generally, datacore will asynchronously reload these files in the background and fix it's index, but you may have some
strange artifacts otherwise.

## Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.end**: `number`

• **\_\_namedParameters.explain?**: `string`

• **\_\_namedParameters.path**: `string`

• **\_\_namedParameters.showExplain?**: `boolean` = `true`

• **\_\_namedParameters.start**: `number`

## Returns

`Element`

## Defined in

[src/api/ui/embed.tsx:90](https://github.com/GamerGirlandCo/datacore/blob/73f36550e501eb29175b69b6a097ff3d4401efc7/src/api/ui/embed.tsx#L90)
