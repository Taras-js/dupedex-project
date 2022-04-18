module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  ignorePatterns: ['.eslintrc*', '*config.ts', '*d.ts'],
  rules: {
    'import/prefer-default-export': 'off',
    'max-len': 'off',
    'react/require-default-props': 0,
    'react/button-has-type': 0,
    'react/function-component-definition': 0,
  },
};
