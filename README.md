# Nova

### ⭐ [Live Demo](https://nova.yawnch.com)

### 📖 [Storybook](https://yawnch.github.io/nova)

An opinionated starting point for Single Page Applications.

## Getting Started

### Install project dependencies
- Requires [NodeJS](https://nodejs.org/en/) `>= 10`. [NVM](https://github.com/nvm-sh/nvm) is recommended.
- `npm install`

### Usage

All important tasks are executed using NPM scripts. Take a look at `package.json` for a complete list. The most important scripts are detailed here.

### `npm start`

Builds the app in development mode (using Webpack) and starts a local dev server at localhost:8080.

#### `npm run deploy:<env>`

Creates a new production build and deploys it to AWS S3.

```
npm run deploy:development
npm run deploy:staging
npm run deploy:production
```

## Storybook

> [Storybook](https://storybook.js.org/) is an open source tool for developing UI components in isolation

`npm run storybook`

## Plop

You can use plop to scaffold new components automatically.

```
npx plop Component
npx plop Page
```

## Notable Features

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [React Router](https://github.com/ReactTraining/react-router)
- [Styled Components](https://www.styled-components.com/)
- [Storybook](https://storybook.js.org/)
- [Babel](https://babeljs.io/)
- [Webpack](https://webpack.js.org/)
- [Plop](https://plopjs.com/)

## Coding Style

[Standard](https://standardjs.com/)

Coding style is enforced using ESLint. You can also manually run the linter using `npm run lint:fix`.
