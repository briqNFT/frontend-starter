module.exports = {
    env: {
        browser: true,
        node: true,
        'vue/setup-compiler-macros': true,
    },
    root: true,
    parser: "vue-eslint-parser",
    parserOptions: {
        ecmaVersion: 'latest',
        parser: "@typescript-eslint/parser",
        sourceType: "module",
    },
    ignorePatterns: ["dist/"],
    rules: {
        "vue/script-indent": ["error", 4, { "baseIndent": 1 }],
        "vue/html-indent": ["error", 4, { "baseIndent": 1 }],

        "vue/singleline-html-element-content-newline": ["off"],
        "vue/max-attributes-per-line": ["off"],
    },
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
          'eslint:recommended',
          'plugin:vue/vue3-strongly-recommended',
          'plugin:@typescript-eslint/recommended',
    ],
};
