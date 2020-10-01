# prettier-config-udes

[![npm](https://img.shields.io/npm/v/prettier-config-udes.svg?style=flat-square)](https://www.npmjs.com/package/prettier-config-udes)
[![Known Vulnerabilities](https://snyk.io/test/github/UdeS-STI/prettier-config-udes/badge.svg)](https://snyk.io/test/github/UdeS-STI/prettier-config-udes)

Prettier shareable config for the UdeS style guide. It can be used to format automatically these files:

- css
- html
- js
- json
- md
- php
- scss
- yaml

## Installation

```bash
npm install prettier prettier-config-udes --save-dev
```

## Usage

Edit `package.json`:

```json
{
  "prettier": "prettier-config-udes",
  "scripts": {
    "format:prettier": "prettier --ignore-path .gitignore --write '**/*.{css,html,js,json,md,scss,yaml,yml}'",
    "lint:prettier": "prettier --ignore-path .gitignore --check '**/*.{css,html,js,json,md,scss,yaml,yml}'"
  }
}
```

If you don't have all these extensions files, you should adjust the extension list for you project.
Else, Prettier will output an error:

```
[error] No files matching the pattern were found: "**/*.css".
```

### PHP

If you want to be able to format **PHP** files, you must extends our PHP Prettier configuration by editing your
package.json:

```json
{
  "prettier": "prettier-config-udes/php",
  "scripts": {
    "format:prettier": "prettier --ignore-path .gitignore --write '**/*.{css,html,js,json,md,scss,yaml,yml}'",
    "lint:prettier": "prettier --ignore-path .gitignore --check '**/*.{css,html,js,json,md,scss,yaml,yml}'"
  }
}
```

## Publish

Increment the `version` defined in the `package.json` file and run the command below to publish the module in the
registry:

```bash
# Dry run
npm publish --dry-run

# For real (are you really sure?)
npm publish
```

## License

The [MIT License][1] (MIT)

[1]: https://opensource.org/licenses/MIT
