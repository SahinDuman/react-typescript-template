const errorLevel = process.env.NODE_ENV === 'production' ? 'error' : 'warn'

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
  },
  extends: [
    'react-app',
    'react-app/jest',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint', // Disables ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier (eslint-config-prettier)
  ],
  settings: {},
  rules: {
    // ESLINT-PLUGIN-IMPORT RULES //

    // Split dependencies import/require statements in groups
    'import/order': [
      errorLevel,
      {
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent'],
          ['sibling', 'index'],
        ],
        'newlines-between': 'always',
      },
    ],

    // Prevent default exports
    'import/no-default-export': errorLevel,

    // ESLINT OFFICIAL RULES //

    'no-implicit-coercion': errorLevel,
    'no-new-wrappers': errorLevel,
    'no-extra-boolean-cast': errorLevel,
    'no-new-object': errorLevel,
    'object-shorthand': errorLevel,
    'no-array-constructor': errorLevel,
    'no-new-func': errorLevel,
    'no-eval': errorLevel,
    'no-implied-eval': errorLevel,
    'consistent-return': errorLevel,
    eqeqeq: errorLevel,
    radix: errorLevel,

    // REACT RULES //

    // Prevent strings in markup
    'react/jsx-no-literals': [errorLevel, { allowedStrings: ['.'] }],

    // Prevent extra closing tags for components without children
    'react/self-closing-comp': [
      errorLevel,
      {
        component: true,
        html: true,
      },
    ],

    // Ensures using function declarations for components only
    'react/function-component-definition': [
      errorLevel,
      {
        namedComponents: 'function-declaration',
      },
    ],

    // TYPESCRIPT RULES //

    // Prevent usage of interface
    '@typescript-eslint/consistent-type-definitions': [errorLevel, 'type'],

    // Prevent boolean variables without prefix
    '@typescript-eslint/naming-convention': [
      errorLevel,
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'has', 'should'],
      },
    ],

    // Enforces consistent usage of type imports
    '@typescript-eslint/consistent-type-imports': errorLevel,

    // Enforce the use of the record type for objects
    '@typescript-eslint/consistent-indexed-object-style': errorLevel,

    // DISABLED RULES //
    'jest/no-mocks-import': ['off'],
    '@typescript-eslint/no-var-requires': 'off',

    // Disable check for React import
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    // Disable component display name check
    'react/display-name': ['off'],

    // Disables explicit types for all functions (i.e. components)
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // Disbles no non-null assertions check
    '@typescript-eslint/no-non-null-assertion': 'off',

  },
}
