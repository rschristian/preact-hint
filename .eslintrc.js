module.exports = {
    env: {
        browser: true,
        amd: true,
        node: true,
        jest: true,
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
        'prettier/react',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            pragma: 'h',
            version: 'detect',
        },
    },
    rules: {
        'react/no-unknown-property': ['error', { ignore: ['class'] }],
        '@typescript-eslint/quotes': ['warn', 'single'],
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    },
    overrides: [
        {
            files: ['*.js'],
            rules: {
                '@typescript-eslint/explicit-module-boundary-types': 'off',
                '@typescript-eslint/no-var-requires': 'off',
                '@typescript-eslint/explicit-function-return-type': 'off',
            },
        },
        {
            files: ['*.ts'],
            rules: {
                '@typescript-eslint/triple-slash-reference': 'off',
            }
        }
    ],
};