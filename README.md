# React Starter

## Getting Started

### Install project dependencies
- `npm install`

### Usage

All important tasks are executed using NPM scripts. Checkout `package.json` for a complete list. The most important scripts are detailed here.

### `npm run start`

Builds the app in development mode (using Webpack) and starts a local dev server. Keeps Webpack running in watchmode and updates the app automatically using HMR. Starts nodemon with the `--inspect` flag, allowing developers to debug the server logs using the Chrome Dev Tools (Navigate Chrome to `chrome://inspect/#devices`).

### `npm run deploy`

Creates a new production build and deploys it.

## Plop

You can use plop to scaffold new components automatically.

`npx plop`

## Notable Features
- React
- Redux
- React Router
- Styled Components
- Babel
- Webpack
- Plop

## Coding Style

[Standard](https://standardjs.com/)

Coding style is enforced using eslint. Eslint is run with the `--fix` option on each commit (via Husky pre-commit hooks). You can also manually run the linter using `npm run lint:fix`.
