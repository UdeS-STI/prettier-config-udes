module.exports = {
  '*.js': (filenames) => `eslint --fix ${filenames.join(' ')}`,
  '*.php': (filenames) => `prettier --config=index.js --write ${filenames.join(' ')}`,
};
