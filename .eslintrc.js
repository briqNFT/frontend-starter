module.exports = {
    env: {
        browser: true,
        node: true,
        'vue/setup-compiler-macros': true,
    },
    root: true,
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    ignorePatterns: ['dist/'],
    rules: {},
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-strongly-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
};
