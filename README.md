# Design System

## Requirements

In order to properly use this in your projects you need to install a couple of
dependencies:

```sh
  $ yarn install tailwindcss tailwindcss-grid --dev
```

## Make fonts work

We currently have no way to properly load fonts in a relative manner. Because of
this you would need to copy `css/defaults/fonts.css` over to the project this
module is used in, and the paths of the fonts should be updated to reflect the
actual path to the design system repo.

..todo create proper readme..
