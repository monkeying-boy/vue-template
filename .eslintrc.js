module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
  ],
  settings: {
    // https://github.com/benmosher/eslint-plugin-import
    // https://cli.vuejs.org/guide/webpack.html#inspecting-the-project-s-webpack-config
    'import/resolver': {
      webpack: {
        config: 'node_modules/@vue/cli-service/webpack.config.js',
      },
    },
  },
  // https://cloud.tencent.com/developer/section/1135580
  rules: {
    'linebreak-style': 0,
    'no-console': 0,
    'no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ],
    'no-param-reassign': ['error', { props: false }],
  },
};
