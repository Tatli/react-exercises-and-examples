# Forms with Controlled Components

## What is a Controlled Component

When you have an input field and you can set an elements value to the value of the input field(?)

## Disabling default form behavior

When someone presses Enter inside an input field inside of a form it causes the site to refresh by default because it's the default setting of HTML.

You _always_ want to prevent this behavior in react!

We can prevent this behavior inside of our form.
Every form has a unique "onSubmit()".
Inside of that onSubmit() we must pass an event and call event.preventDefault().

## Miscellanious

It's good to have a form because you can have enter to handle the submit
