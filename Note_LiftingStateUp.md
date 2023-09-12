# Lifting State Up

When you have multiple children components of a parent component, the children components "cant communicate" with each other.

You cannot pass information from one child component to the other if the state is not lifted up.

They have to be passed through the parent component

## Parent Component passes props

The props of the components are passed inside of the parent components children component instantiation.

## When would you use destructuring vs props?

When passing variables to your Components you can use two methods:

### By props

Pass the variables/variableChangingMethod by using props.stateName or props.stateManipulatingMethodName

### By Destructuring

Passes the props with their specific name. Can be used when you know exactly what kind of props there are.

## So which one do you choose?

It's up to you which one you use. Each of them has their advantage.

### Props

With props you know exactly which variables are coming from props and which are coming from inside the function.

### Destructuring

When you destructure your props, you don't have to write "props." before every prop, which is convenient.
