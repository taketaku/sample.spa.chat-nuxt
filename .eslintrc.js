module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    'airbnb-base',
    'typescript',
    'plugin:vue/recommended',
  ],
  plugins: [
    'vue',
  ],
  settings: {
    'import/resolver': {
      'alias': [
        ['~', __dirname], // ルートディレクトリのエイリアス
      ],
    },
    'import/core-modules': [
      'vue', // vueはnuxtが抱えているため明記する必要がある
    ],
  },
  globals: {},
  rules: {},
}
