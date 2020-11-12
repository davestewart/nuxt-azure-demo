module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [],
  rules: {
    // allow if/else on separate lines
    'brace-style': ['error', 'stroustrup'],

    // allow comma dangle
    'comma-dangle': ['error', 'only-multiline'],
  }
}
