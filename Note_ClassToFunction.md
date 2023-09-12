# Manually convert a class to a functional component

## Class Component

Before Function Components everything in React was written in Class Components.
They have a _different syntax_

Now _ONLY_ Function Components are written so DON
T THINK ABOUT EVER USING CLASS COMPONENTS.

Only when looking for solutions to a problem and being confronted with a Class Component in StackOverflow use this method to transform them into Function Components.

## Why not to use Classes

Some newer things don't support Class Components so stick to Function Components.

## Things that changed

Function Components introduces Hooks which are way more convenient.

# How to convert Class Components into Function Components

There is an extension called glean, which will help you converting Class Components into Function Components by highlighting the Class and Clicking on "Convert Class to Function Component", next to the lightbulb.

## Things that are not perfect

In our example we get help with alot of states but we don't use the useRef state and in our Button the onClick is empty.

- replace state with Hooks
- remove all this.state this.setState
