# Functional Components

A functional component consists of the function
`function FunctionName(){}`

and the component inside of its return statement
`return (<>...component...</>)`

The function returns the code block inside of the return statement.

## Using functional components inside other functional components

Don't use functional components inside other functional components.

It could mess up everything.
Whenever you create a component it should be either outside or in a separate file

## Using props to make your Components dynamic

In order to make your Components dynamic you need to pass props to them when you instantiate (creates an object) them.

To make the relation between the passed argument "user" and the Component you need to add a parameter to your Component.
In this case we name it props.
Add {props.user} after "name: " so it can be used as a variable and is not hard coded

## Destructuring vs props

You can choose to either use specific props or access values by using "props.propname"

When you have 300+ lines of code you want to know where your values come from.
It can be confusing to read {user}, {message}, {whatever-propname} in the middle of your code and find out where it comes from.

That's why it'd be advisable to use the `functionname(props)` method instead of the `functionname({prop1}, {prop2}, {prop-n})` variant.

Essentially it's the same data, so you can either use props as an object or destructure it.

The _props come from the arguments passed when instantiating the component_.

## Things to keep in mind

_React doesn't render all types!_

Shown:

- Strings
- Number (including NaN)
- Array (will be rendered as a String `[1,2,3,4,5]  -> 12345`)
  > To use/render an array, you will have to use .map

Not shown:

- Boolean
- Null
- Undefined
- _Objects_

Be careful to _not pass an Object to props_
