# Design System

## Install

1. Add the design systen to your app: `$ yarn add appsignal/design-system#master`
2. Add the CSS bundle to your Webpack entry point: `import "@appsignal/design-system"`
3. Done

## Development

When you're working on the design system it is usually nice to see the changes
that you made right away without having to push to GitHub first. You can do so
with [`yarn link`](https://yarnpkg.com/lang/en/docs/cli/link/).

1. Clone the design system repo to your machine and cd to the folder
2. Run `yarn install`
3. Run `yarn link`

The package is now available to be linked in other applications:

1. Go to the project where you want to link this package in
2. Run `yarn link @appsignal/design-system`

When you make changes to the design system, you need to build a new version so
the projects that consume this package can actually use this.

While developing, the easiest way to build a new version is by running `yarn build:watch`.
If you only want to build, but not watch for changes you can use `yarn build`.
