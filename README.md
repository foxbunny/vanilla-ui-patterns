# Vanilla JavaScript patterns

This repository contains examples of typical front-end UI patterns 
implemented using JavaScript with no libraries.

These examples do not include any SSR. For a general SSR pattern, see 
[this repository](https://github.com/foxbunny/vanilla-ssr).

## Running the examples

All examples are "run" by opening the `index.html` file located in the 
example folder. Alternatively, some editors and IDEs support previews which 
are effective for these examples. 

Development server can be used but not needed. If you wish to use one, the
project root contains an `index.html` file that links to the individual 
examples.

## Examples

Each example is a sub-folder within this repository. The following examples are 
available:

### `form-submission`

Example of trapping form submission with custom validation, accessible password 
demasking, and conversion of form data to JSON.

### `tabbed-interface`

An example of a classic tab interface.

### `table-sorting-filtering`

An example of DOM-infused state to facilitate sorting and filtering of a table.

## Concepts

The following concepts are applied in the examples.

### DOM-infused state

The technique of using the DOM itself as the single source of truth for the 
application. For a (relatively) small performance overhead, we gain the ability
to specify application state using just HTML without requiring expensive state
conversion during initialization.

### Delegated event handling

The technique of attaching event handlers to a single common ancestor rather 
than multiple individual elements. This technique is employed for one of two 
reasons:

- To simplify event handling in cases where the concrete element on which 
  the event was triggered does not matter.
- To allow for additional children to be added without having to attach 
  event listeners to them.
