# Lean JavaScript Application Starter
Skip boilerplate setup and get straight to the code you care about for your next JavaScript application.

## Overview
### 🚀 Simple Setup
Follow three quick steps in the ["Getting Started" documentation](docs/getting_started.md) and get straight to coding!

### 🌙 Consistent Codebase Across Multiple Environments
Consistent JavaScript standard, webpack configuration, and dependencies no matter what environment you're building for.

| 🏄‍ Web Browser                                          | 🌐 Node.js                                              | 🖥️ Desktop                                              |
|--------------------------------------------------------|--------------------------------------------------------|--------------------------------------------------------|
| [JavaScript (ES2015)](docs/javascript_features.md)     | [JavaScript (ES2015)](docs/javascript_features.md)     | [JavaScript (ES2015)](docs/javascript_features.md)     |
| [Babel](https://babeljs.io)                            | [Babel](https://babeljs.io)                            | [Babel](https://babeljs.io)                            |
| [Flow](https://flow.org)                               | [Flow](https://flow.org)                               | [Flow](https://flow.org)                               |
| [Jest](https://jestjs.io)                              | [Jest](https://jestjs.io)                              | [Jest](https://jestjs.io)                              |
| [webpack](https://webpack.js.org)                      | [webpack](https://webpack.js.org)                      | [webpack](https://webpack.js.org)                      |
| [React](https://reactjs.org)                           | [React](https://reactjs.org)                           | [React](https://reactjs.org)                           |
| [Redux](https://redux.js.org)                          | [Redux](https://redux.js.org)                          | [Redux](https://redux.js.org)                          |
| [React Router](https://reacttraining.com/react-router) | [React Router](https://reacttraining.com/react-router) | [React Router](https://reacttraining.com/react-router) |
| [Sass](https://sass-lang.com)                          | [Sass](https://sass-lang.com)                          | [Sass](https://sass-lang.com)                          |
|                                                        | [Node.js](https://nodejs.org)                          | [Electron](https://electronjs.org)                     |
|                                                        | [Express](https://expressjs.com)                       |                                                        |
|                                                        | [MongoDB](https://mongodb.com)                         |                                                        |
|                                                        | [Mongoose](https://mongoosejs.com)                     |                                                        |

Future support for more environments and UI libraries are being considered.

### 👩‍💻 Helpful Features for Development
#### Automatic Reloading & Hot Loading

No need to manually refresh, rebuild, and rerun your apps during development. Let a script automate all of that for you so you can see your changes as soon as possible. When coding with React, take advantage of hot loading so you can tweak components in real-time without refreshing and losing state.

#### Improved Debugging

Tools, plugins, and scripts like Redux DevTools, Devtron, and many others are already setup for you to make debugging easier.

#### Server-Side Rendering Support

Render React components on the server and neatly integrate your browser and Node.js codebases together.

### 🏛️ Build For Production

Create a production ready build with one simple command.

### 🔧 Fully Customizable
If you ever need to change the configuration for anything, you can easily do so. The starting codebases are small, easy to understand, and ready to adjust to all of your needs.

## Get Started
### 🏄‍ Web Browser
#### Download

If you want to build an app for web browsers, start with the [latest `browser` release].

#### Examples

You can find some example browser apps in the following branches:

- [`todolist-frontend`](https://github.com/IsaacLean/lean-web-app-starter/tree/todolist-browser): A todo list app. Connects with mock backend API.
- [`starchan-frontend`](https://github.com/IsaacLean/lean-web-app-starter/tree/starchan-frontend): The frontend app for an anonymous text board called *\*chan* (pronounced star-chan). Requires connection with the *\*chan* backend API on the [`starchan-backend` branch](https://github.com/IsaacLean/lean-web-app-starter/tree/starchan-backend).

[Click here for documentation on building browser apps.](docs/browser/README.md)

### 🌐 Node.js
#### Downloads

If you want to build an app for Node.js, you have two options:

- [`nodejs`]: An Express, MongoDB, and Mongoose starter project
- [`nodejs-ssr`]: An Express, MongoDB, and Mongoose starter project that supports server-side rendering for React

#### Examples

You can find example Node.js apps in the following branches:

- [`starchan-backend`](https://github.com/IsaacLean/lean-web-app-starter/tree/starchan-backend): A REST API for an anonymous text board called *\*chan* (pronounced star-chan). Optionally connects with the *\*chan* frontend app on the [`starchan-frontend` branch](https://github.com/IsaacLean/lean-web-app-starter/tree/starchan-frontend).
- [`starchan-ssr`](https://github.com/IsaacLean/lean-web-app-starter/tree/starchan-ssr): A version of the *\*chan* backend that supports server-side rendering of the frontend app.

[Click here for documentation on building Node.js apps.](docs/nodejs/README.md)

### 🖥️ Desktop
#### Download

If you want to build an app for desktop, start with the [latest `desktop` release].

#### Examples

You can find an example desktop app in the following branch:

- [`todolist-desktop`](https://github.com/IsaacLean/lean-web-app-starter/tree/todolist-desktop): A todo list app ported from the browser targeted app on the [`todolist-browser` branch](https://github.com/IsaacLean/lean-web-app-starter/tree/todolist-browser).

[Click here for documentation on building desktop apps.](docs/desktop/README.md)

### 🏊 Documentation
You can dive deeper into the project by reading the [documentation](docs) which also comes included locally with each copy of your project.

## License
This open source project is licensed under the [MIT License](https://choosealicense.com/licenses/mit).