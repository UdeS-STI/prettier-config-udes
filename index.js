/**
 * Prettier configuration file
 */
module.exports = {
  /**
   * Options from Prettier
   * https://prettier.io/docs/en/options.html
   */
  arrowParens: 'always', // Default: always

  // Print spaces between brackets in object literals
  bracketSpacing: true, // Default: true

  // Ensure all end of line are "Line Feed only (\n)"
  endOfLine: 'lf', // Default: "lf"

  // Specify the line length that the printer will wrap on
  printWidth: 120, // Default: 80

  // If at least one property in an object requires quotes, quote all properties
  quoteProps: 'consistent', // Default: "as-needed"

  // Print semicolons at the ends of statements
  semi: true, // Default: true

  // Use single quotes instead of double quotes
  singleQuote: true, // Default: false

  // Specify the number of spaces per indentation-level
  tabWidth: 2, // Default: 2, use 2 to be consistent with ESLint configuration

  // Trailing commas wherever possible (including function arguments)
  trailingComma: 'all', // Default: "es5"

  // Indent lines with tabs instead of spaces
  useTabs: false, // Default: false

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
