module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2020,
    requireConfigFile: false,
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-console': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector:
          "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
        message: 'Unexpected property on console object was called',
      },
    ],
    'vue/no-v-html': 0,
    'nuxt/no-globals-in-created': 0,

    // [
    //   'warning',
    //   {
    //     ignores: ['default', '/pages/*'],
    //   },
    // ],
  },
}
