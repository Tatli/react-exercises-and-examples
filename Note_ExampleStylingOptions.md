# Example Styling Options

## Inline Styling

With inline styling you apply the style right where you need it.
You don't store a file in another location.

you could technically declare a variable and assign the style to an element but it would technically not be inline but Internal/Embedded CSS. It would be re-usable but not best practice.

_Important_

- You can't use Keyframes
- You can't use Media-Queries

## Emotion

### Add Emotion

https://www.npmjs.com/package/@emotion/react

Add Emotion to your project by running "pnpm add @emotion/react"

Next add "jsxImportSource": "@emotion/react","
beneath "compilerOptions":
in the tsconfig.json file.

### Naming convention

With Emotion, when you create a variable for a style. ALWAYS add name+Styles.
so myDivStyles

### Where do I write my CSS?

Outside of the function

### What is that thing on line 1 that looks like a comment?

It's an "option comment"
It goes to the jsxImportSource and uses @emotion/react.
Lukas has never questioned it and only used it because it's required.
It created some options.
He can find it out later and tell me via Slack.

## SaSS

## What is SaSS

It's a module you can use for styling which you use for next.js or react
