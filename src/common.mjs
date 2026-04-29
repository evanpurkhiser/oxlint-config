const common = {
  plugins: ['eslint', 'typescript', 'unicorn', 'oxc', 'import', 'react'],

  rules: {
    // Best practices
    'array-callback-return': ['warn'],
    'consistent-return': ['warn'],
    'no-caller': ['warn'],
    'no-else-return': ['error', {allowElseIf: false}],
    'no-extra-label': ['error'],
    'no-implied-eval': ['error'],
    'no-lone-blocks': ['error'],
    'no-self-compare': ['error'],
    'no-sequences': ['error'],
    'no-useless-call': ['warn'],
    'no-useless-concat': ['warn'],
    'no-useless-return': ['warn'],
    'require-await': ['warn'],
    curly: ['error'],
    eqeqeq: ['error'],
    radix: ['warn'],

    // ECMAScript
    'no-var': ['error'],
    'prefer-const': ['error'],
    'prefer-destructuring': ['off'],
    'prefer-numeric-literals': ['warn'],
    'prefer-rest-params': ['warn'],
    'prefer-spread': ['warn'],
    'prefer-template': ['warn'],
    'arrow-body-style': ['error', 'as-needed'],

    // Correctness
    'no-template-curly-in-string': ['error'],
    'no-throw-literal': ['error'],
    'default-case-last': ['error'],
    'prefer-promise-reject-errors': ['error'],

    // Style cleanup
    'object-shorthand': ['warn'],
    'no-useless-rename': ['warn'],
    'no-unneeded-ternary': ['warn'],
    'prefer-object-spread': ['warn'],
    'prefer-object-has-own': ['warn'],

    // Disabled for TypeScript
    'no-unused-expressions': ['off'],

    // TypeScript
    'typescript/explicit-function-return-type': ['off'],
    'typescript/no-use-before-define': ['off'],
    'typescript/no-explicit-any': ['off'],
    'typescript/no-non-null-assertion': ['off'],
    'typescript/explicit-module-boundary-types': ['off'],
    'typescript/no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
    'typescript/no-unused-expressions': ['error'],
    'typescript/no-useless-constructor': ['error'],
    'typescript/array-type': ['error', {default: 'array-simple'}],
    'typescript/consistent-type-imports': ['error'],
    'typescript/no-import-type-side-effects': ['error'],
    'typescript/no-non-null-asserted-optional-chain': ['error'],
    'typescript/prefer-as-const': ['error'],

    // Imports
    'import/no-duplicates': ['error'],
    'import/no-self-import': ['error'],

    // Unicorn
    'unicorn/prefer-node-protocol': ['error'],
    'unicorn/prefer-string-slice': ['warn'],
    'unicorn/no-useless-undefined': ['warn'],
  },
};

export {common};
