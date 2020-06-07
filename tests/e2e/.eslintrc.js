module.exports = {
  plugins: ['cypress', 'prettier'],
  env: {
    mocha: true,
    'cypress/globals': true
  },
  rules: {
    strict: 'off',
    'prettier/prettier': [
      'error',
      {
        printWidth: 140,
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        arrowParens: 'always',
      },
    ],
  }
};
