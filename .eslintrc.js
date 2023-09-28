module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
    ],
    rules: {
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        indent: [2, 4],
        'no-shadow': 'off',
        'no-underscore-dangle': 'off',
        'no-unused-vars': 'warn',
        'react/function-component-definition': 'off',
        'react/jsx-filename-extension': [2, {extensions: ['.js', '.jsx', '.tsx']}],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-props-no-spreading': 'warn',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'i18next/no-literal-string': ['error', {markupOnly: true}],
    },
    globals: {
        __IS_DEV__: true,
    },
};
