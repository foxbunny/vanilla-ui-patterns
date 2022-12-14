# Vanilla JavaScript patterns

This repository contains examples of typical front-end UI patterns 
implemented using JavaScript with no libraries.

These examples do not include any SSR. For a general SSR pattern, see 
[this repository](https://github.com/foxbunny/vanilla-ssr).

## Running the examples

All examples are "run" by opening the `index.html` file located in the 
example folder. Alternatively, some editors and IDEs support previews which 
are effective for these examples. 

## Benchmarks

The project includes some benchmarks. They are all located within the 
`benchmarks` folder with `index.html` containing their listing.

Running benchmarks is a simple matter of following the links. Links open in 
a new tab because that's how they are intended to run. You should not have 
devtools open while the benchmarks are running because devtools can skew the 
results.

## Why are these pages so ugly??

In order to reduce distraction, the amount of code is kept to the bare 
essentials needed to demonstrate the concepts. The styling of the pages is 
left mostly stock except for the styling that is relevant for the demonstration. 
The goal of this repository is not to impress you with the design and sell 
you something you don't want or need. 😉

## Examples

Each example is a sub-folder within this repository. The explanations are in 
the comments within the sources.

The following examples are available:

### [`dark-mode`](./dark-mode)

Example of a dark mode toggle with `localStorage` persistence and CSS variables.

### [`form-submission`](./form-submission)

Example of trapping form submission with custom validation, accessible password 
demasking, and conversion of form data to JSON.

### [`modal-dialog`](./modal-dialog)

Example of a modal dialog with click-trap.

### [`tabbed-interface`](./tabbed-interface)

An example of a classic tab interface.

### [`table-sorting-filtering`](./table-sorting-filtering)

An example of DOM-infused state to facilitate sorting and filtering of a table.

### [`toasts`](./toasts)

Example of accessible toasts (alerts).

## Concepts

The following concepts are applied in the examples.

### DOM-infused state

The technique of using the DOM itself as the single source of truth for the 
application. For a (relatively) small performance overhead, we gain the ability
to specify application state using just HTML without requiring expensive state
conversion during initialization. 

When doing SSR, the client-side application and the server generating the HTML 
can share the state by encoding it in HTML.

### Delegated event handling

The technique of attaching event handlers to a single common ancestor rather 
than multiple individual elements. This technique is employed for one of two 
reasons:

- To simplify event handling in cases where the concrete element on which 
  the event was triggered does not matter.
- To allow for additional children to be added without having to attach 
  event listeners to them.

### Blocks

In all JavaScript files, you will see 
[blocks](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block) 
enclosing the entire script. They look like this:

```javascript
{
  'use strict'
  
  // code
}
```

Using blocks and `let` keyword (instead of `var`) within them, we prevent 
variables from leaking into the global scope and avoid their reassignment by a 
foreign script.
