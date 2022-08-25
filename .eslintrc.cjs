module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    parser: "@typescript-eslint/parser",
  },
  extends: [
    "standard",
    "plugin:@typescript-eslint/recommended",
    "plugin:nuxt/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
    "plugin:vuejs-accessibility/recommended",
  ],
  plugins: ["@typescript-eslint", "vue", "vuejs-accessibility"],
  rules: {
    "vue/script-setup-no-uses-vars": "off",
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["index"],
      },
    ],
  },
};
