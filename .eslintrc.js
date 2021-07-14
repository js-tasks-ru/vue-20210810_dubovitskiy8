module.exports = {
  root: true,

  ignorePatterns: ['**/vendor/*.js'],

  env: {
    browser: true,
    node: true,
    es2020: true,
  },

  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/prettier'],

  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2020,
  },

  rules: {
    // Basic
    'no-unused-vars': 'off', // For task start code
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-var': 'error',
    // Vue / Priority A: Essential Essential
    'vue/no-unused-components': 'off', // For task start code
    'vue/valid-template-root': 'off', // For task start code
    // Vue / Priority B: Strongly Recommended
    'vue/v-bind-style': 'error',
    'vue/v-on-style': 'error',
    'vue/v-slot-style': 'error',
    'vue/require-explicit-emits': 'error',
    'vue/mustache-interpolation-spacing': 'warn',
    'vue/no-template-shadow': 'warn',
    // Vue / Priority C: Recommended
    'vue/attributes-order': process.env.TASK_DEV ? 'error' : 'warn',
    'vue/order-in-components': process.env.TASK_DEV ? 'error' : 'warn',
    'vue/new-line-between-multi-line-property': process.env.TASK_DEV ? 'error' : 'off',
    'vue/this-in-template': 'error',
    // Vue / Uncategorized
    'vue/match-component-file-name': 'error',
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/no-restricted-call-after-await': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/padding-line-between-blocks': 'error',
    'vue/v-for-delimiter-style': 'error',
    'vue/valid-next-tick': 'error',
  },

  overrides: [
    {
      files: ['**/__tests__/*.js?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
