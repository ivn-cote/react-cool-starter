# Not Bad React Starter

This repository consists of a modern technical stack for a frontend tier. A combination of the technologies presented here addresses your need in a reliable scalable isomorphic application based on Javascript. Server-side part is hosted on Express, SPA part is bundled with Webpack.

This project is a fork of WellyShen's [React Cool Starter](https://github.com/wellyshen/react-cool-starter). Main ideas behind the separation are: simplification, migration for another solutions, and preparation for real-life CI/CD.

## Not Bad Technical React Stack

* [React Router v4](https://reacttraining.com/react-router/)
* [Redux](https://github.com/reactjs/redux)
* [React Hot Loader v3](https://github.com/gaearon/react-hot-loader)
* [redux-thunk](https://github.com/gaearon/redux-thunk)
* [react-router-redux v5 (alpha)](https://github.com/reactjs/react-router-redux)
* [react-helmet](https://github.com/nfl/react-helmet)
* [webpack-isomorphic-tools](https://github.com/halt-hammerzeit/webpack-isomorphic-tools)
* [Webpack Dev Middleware](https://github.com/webpack/webpack-dev-middleware)
* [Webpack Hot Middleware](https://github.com/glenjamin/webpack-hot-middleware)
* [morgan](https://github.com/expressjs/morgan)
* support of [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension)
* [Express v4](https://expressjs.com/)
* [Webpack v2](https://webpack.js.org/)
* [Babel v6](https://babeljs.io/)
* [nodemon](https://nodemon.io/)
* [axios](https://github.com/mzabriskie/axios)
* [Flow](https://flowtype.org/)
* [ESLint](http://eslint.org/)
* [StyleLint](http://stylelint.io/)
* CSS and SASS support with [PostCSS](https://github.com/postcss/postcss-loader)
* [CSS modules](https://github.com/css-Modules/css-Modules)
* [Jest](https://facebook.github.io/jest/) with [enzyme](https://github.com/airbnb/enzyme)
* support of [Yarn](https://yarnpkg.com/lang/en/)

## Requirements

* [node](https://nodejs.org/en/) >= 5.0, < 8.0
* [npm](https://www.npmjs.com/) >= 3.0, < 5.0

## Getting Started

**1. Clone the repository**

**2. Install all the dependencies**

```bash
yarn install
```
or
```bash
npm i
```

**3. Start the app in production mode**

```bash
npm run start
```
It will trigger building the bundle and running a server.

### Development
Server with hot reloading:
```bash
npm run build && npm run start:dev
```

Development in offline mode:
```bash
USE_MOCKS=true npm run start:dev
```
If you prefer working with mocks only, set it in `config/default.js`.

Run tests check:
```bash
npm test
```

Please see `package.json` for other npm sripts useful in development.

## App Structure

```
.
├── build                             # Webpack bundled files will be placed into it
│   └── public                        # The Express server static path
│       └── favicon.ico               # Favicon is placed in the same path with the main HTML page
├── src                               # App source code
│   ├── config                        # App configuration settings, used with `config` npm package
│   ├── components                    # Reusable components (including scss/testing files)
│   ├── containers                    # Container components (including assets/action/reducer/scss/testing files)
│   ├── utils                         # App-wide utils
│   ├── redux                         # Redux related setups
│   │   ├── reducers.js               # The root reducer (registry and injection)
│   │   └── store.js                  # Configure and instrument Redux store
│   ├── theme                         # App-wide style and vendor CSS framework
│   ├── types                         # Flow types for actions, reducers and more
│   ├── client.js                     # App bootstrap and rendering (webpack entry)
│   ├── routes.js                     # Routes configuration for both client and server side
│   └── server.js                     # Express server (with webpack dev/hot middlewares)
├── tools                             # Project related configurations (testing/build etc.)
│   ├── flow                          # Flow types, interface, module aliasing definitions
│   ├── openBrowser                   # Utility for opening Google Chrome
│   ├── jest                          # Jest CSS modules and assets mocks settings
│   ├── webpack                       # Webpack configuration settings
│   │   ├── config.js                 # Configuration for CSS modules, vendor registering
│   │   ├── webpack.client.babel.js   # Webpack configuration for client
│   │   ├── webpack.server.babel.js   # Webpack configuration for server
│   │   └── WIT.config.js             # Webpack Isomorphic Tools configuration file
└── index.js                          # App entry point
```


## Server Side Security and Performance

Concerning to the security and performance for Express in production, WellyShen already setup some middlewares for you:

* [helmet](https://github.com/helmetjs/helmet) - Helps secure Express server with various HTTP headers.
* [hpp](https://github.com/analog-nico/hpp) - Express middleware to protect against HTTP Parameter Pollution attacks.
* [compression](https://github.com/expressjs/compression) - Gzip compression support for speeding up Express server responses.

Note: It's just a basic protected mechanism for your app, you can see the [security best practices](https://expressjs.com/en/advanced/best-practice-security.html) for more advanced configuration.
