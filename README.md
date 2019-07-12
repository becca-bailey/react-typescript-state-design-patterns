# State Management with React and Typescript

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

# Workshop notes

## State Management

When we talk about state management, we are talking about two things.

### Local

Local state management is the state of one individual component. For example, a menu might be open or closed. A form might use state to keep track of its current values. Each of the strategies in this workshop can be used to manage local state.

### Global

Global state is available throughout an entire application. We often use tools like Redux for this, though most of the strategies we’ are covering in this workshop can also be used for global state management. This might be used for shared state like the current logged-in user, visible alerts, cached API response data, or more complex component interactions.

### When should I use local or global state?

My rule of thumb is typically to use local state until you need global state. Components that keep track of their own state are easier to test, and in my opinion, more straightforward to use when they aren’t reliant on any external logic in order to be functional. We can also use strategies like compound components (a set of components that go together share state) to share state between multiple components without making their state globally available.

## Typescript

Typescript is a superset of JavaScript that provides static types and interfaces.

[TypeScript - JavaScript that scales.](https://www.typescriptlang.org)

## React

While this workshop uses React-specific patterns, the basic principles of state management are the same in any JavaScript framework.

## Redux?

Some of us might have used redux (or similar tools) for managing state in our applications. Redux is great, and it solves some real problems. But for a lot of smaller use cases, you probably don’t need redux.

## Other Tools

### Jest + React Testing Library

[GitHub - testing-library/react-testing-library: 🐐 Simple and complete React DOM testing utilities that encourage good testing practices.](https://github.com/testing-library/react-testing-library)

## Overview

### React state

React provides a state variable in class components. This is the most basic way to get and set state, and is going to be used under the hood in all of these examples.

#### Pros

- Simplicity

#### Cons

- Repetition for commonly-used components like modals, alerts, etc.
- Can only be used in class components

### Render props

This design pattern has gained a lot of popularity over the past few years as a way to pass state from a parent to a child component. It can be implemented in a couple of different ways, but in all cases involves rendering children via a function to pass down props.

For greenfield projects in 2019, render props are largely being replaced with hooks, but it’s still a great idea to understand this pattern.

Example: https://codesandbox.io/s/dank-cache-50nymw58rk

#### Pros

- Dependency Inversion
- Less repetition

#### Cons

- Render prop hell

### Hooks

Hooks are React’s coolest new toy, but I promise I didn’t include them here just to make this workshop seem hip and trendy. The Hooks API is React’s answer to some of the cons of class-based component state and render prop hell.

For the purpose of this workshop, we are going to use the state, effect, and context hooks.

[Introducing Hooks – React](https://reactjs.org/docs/hooks-intro.html)

#### Pros

- Can be used with functional components

#### Cons

- Must follow the rules — we can only use them in the top level of functional components
- May require a React upgrade for established projects

Example: https://codesandbox.io/s/modal-with-state-hook-bmjb9

### Context

The Context API provides a way for individual components to access shared state. Context is a great solution to the problem of prop drilling, or passing a prop down through multiple layers of nesting to access it in a child component. Instead, context allows us to create a provider component (the parent component that sets the state) and consumer components (child components that can access the state).

We can use Context globally to share state with the entire application, or we can use it in a single view to create compound components, as we will see in this example.

[Context – React](https://reactjs.org/docs/context.html)

#### Pros

- No prop drilling
- Straightforward API
- Compatible with hooks and render props

#### Cons

- It might be an overkill for a lot of scenarios
- May require a React upgrade for established projects

Example: https://codesandbox.io/s/cool-noether-xo4x32o74z
