import prettierPlugin from 'eslint-plugin-prettier'
import js from '@eslint/js'

const config = [
  js.configs.recommended,

  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      quotes: 'off',
      'prettier/prettier': ['error', { singleQuote: true }],
      semi: ['error', 'never'],
      'no-unused-vars': 'warn',
    },
  },
]

export default config
