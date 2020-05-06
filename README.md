# prettier-config-udes

[![Greenkeeper badge](https://badges.greenkeeper.io/UdeS-STI/prettier-config-udes.svg)](https://greenkeeper.io/)
[![npm](https://img.shields.io/npm/v/prettier-config-udes.svg?style=flat-square)](https://www.npmjs.com/package/prettier-config-udes)

Prettier shareable config for the UdeS style guide. It can be used to format automatically these files:

- css
- html
- json
- md
- php
- scss
- yaml

## Installation

```bash
npm install prettier-config-udes
```

## Usage

Edit `package.json`:

```json
{
  "prettier": "prettier-config-udes",
  "scripts": {
    "format:prettier": "prettier --ignore-path .gitignore --write *",
    "lint:prettier": "prettier --ignore-path .gitignore --check *"
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
