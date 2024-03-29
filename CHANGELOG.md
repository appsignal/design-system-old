# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [unreleased]

### Added
- Popover positioning to show components relative to a parent.
- XS variation of the buttons: `.c-button--xs`

### Changed
- Consolidated the white and gray buttons into one button
- Filters are now made from (chained) butons

### Removed
- `c-button--gray` is removed in favour of `c-button--white`
- The family of `c-filter` has been removed. No alternative created.
- Explicit grid related classes have been removed

## [0.0.1-alpha.2] - 2019-12-16

### Changed
- Changed `c-toggle-text` to properly indicate BEM style (Childs have been renamed)

## [0.0.1-alpha.2] - 2019-12-16

### Fixed
- Removed `content` file from main CSS (Was preventing a proper build)

## [0.0.1-alpha.1] - 2019-12-16

### Changed
- `.c-message--note` and `.c-message--dark` have been renamed

### Removed
- `c-bar-label` has been removed
- `c-content` has been removed in favour of `c-markdown`

## [0.0.1-alpha.0] - 2019-12-02

### Added
- Initial release

[unreleased]: https://github.com/appsignal/design-system/compare/v0.0.1-alpha.2...HEAD
[0.0.1-alpha.2]: https://github.com/appsignal/design-system/releases/tag/v0.0.1-alpha.2
[0.0.1-alpha.1]: https://github.com/appsignal/design-system/releases/tag/v0.0.1-alpha.1
[0.0.1-alpha.0]: https://github.com/appsignal/design-system/releases/tag/v0.0.1-alpha.0
