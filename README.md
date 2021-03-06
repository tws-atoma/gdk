# GDK

[![CircleCI](https://circleci.com/gh/geeksterio/gdk.svg?style=svg)](https://circleci.com/gh/geeksterio/gdk)
![GitHub](https://img.shields.io/github/license/geeksterio/gdk)

Geekster Development Kit is a development toolkit using nx monorepo, stenciljs, storybook, angular, react etc.

- [Install](#install)
- [Generate an application](#generate-an-application)
- [Generate a library](#generate-a-library)
- [Development server](#development-server)
- [Code scaffolding](#code-scaffolding)
- [Build](#Build)
- [Running linter](#running-linter)
- [Running unit tests](#running-unit-tests)
- [Running end-to-end tests](#running-end-to-end-tests)
- [Understand your workspace](#understand-your-workspace)
- [Further help](#further-help)

## Install

Run `npm install` to install dependencies and generate the stencil distribution.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate a react application.

Run `nx g @nrwl/angular:app my-app` to generate an angular application.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a react library.

Run `nx g @nrwl/angular:lib my-lib` to generate an angular library.

Run `nx workspace-schematic st-library` to generate a stencil library.

They can be imported from `@gdk/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the app source files.

Run `nx serve st-ui` for a stencil dev server. Navigate to http://localhost:3300/. The app will automatically reload if you change any of the st-ui source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=ra-ui` to generate a react component.

Run `nx g @nrwl/angular:component my-component --project=ng-ui` to generate an angular component.

Run `nx workspace-schematic st-component my-component` to generate a stencil component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Run `nx build st-ui` to build the web components. The build artifacts will be stored in the `dist/` directory.

## Running linter

Run `nx lint my-app` to lint my-app.

Run `nx affected:lint` to execute the lint affected by a change.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

Visit the [Stencil Documentation](https://stenciljs.com) to learn more.
