module.exports = {
  parser: '@typescript-eslint/parser',
  root: true,
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.ts', '.json', '.js'
        ]
      }
    },
    'import/extensions': ['.ts', '.js']
  },
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'airbnb-base'],
  rules: {
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/interface-name-prefix': ['error', 'always'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    'import/no-cycle': ['off'],
    'import/prefer-default-export': ['off'],
    'linebreak-style': ['off'],
    'max-len': ['error', 200],
    'no-console': ['off']
  }
};
