module.exports = {
  '*.{js,json,md}': (filenames) => `eslint --fix ${filenames.join(' ')}`,
  '*.{js,json,md,yml}': (filenames) => `prettier --config=index.js --write ${filenames.join(' ')}`,
};
