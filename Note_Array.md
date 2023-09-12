# Array.map

## What does .map() it do

- creates a new array from an original array with exactly the same length
- doesn't change the length of the array
- behaves as a loop over the array

## Save the new array for further use

`const mappedAnimals = arrayname.map((element) => { return <div>{element}</div>})`

## Change the original array

You can change the original array by using arrayname.push();

## Unique Key property of the element

React uses keys to identify which items have changes, been added, or removed from a list of elements, when it performs reconciliation. (the process of updating the DOM to match the virtual DOM)

For every loop, the map() method needs a key value which has to be unique.
You should use template literals such as `key={`user-${user.id}`}` instead of only `<div key={user.id}>}`

In our animals example, we have an array which doesn't contain a unique identifier (id), or an index for its elements so only extending our key by the "animal-div-" prefix won't suffice, for making the key unique.
If we had "tiger" twice in our array, both would still have the key "animal-div-tiger" and therefore be the same and not be unique.

In order to achieve a unique key in our key property we would have to extend our map() method with another index property. (See commented code)

Resources
https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md

https://eslint.org/docs/latest/rules/no-restricted-syntax

## Miscellanious important things

### Array methods oftenly used

You should check out the most common array methods such as:

- find()
- filter()
- findIndex()
- join()
- map()
- push()
- shift()
- slice()

````

```

```

```

```
````
