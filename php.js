const udesPrettierConfig = require('./index.js');

/**
 * Prettier configuration file
 */
module.exports = {
  // Extends the UdeS Prettier configuration file
  ...udesPrettierConfig,

  /**
   * Options from the the PHP plugin
   * See https://github.com/prettier/plugin-php
   */
  // Prettier will move open brace for code blocks (classes, functions and methods) onto same line
  braceStyle: '1tbs', // Default: "psr-2"

  // PHP version we are currently using
  phpVersion: '7.3', // Default: "5.4"

  // Trailing commas will be added wherever possible
  trailingCommaPHP: true, // Default: true
};
