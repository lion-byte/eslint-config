import js from '@eslint/js'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig(
  js.configs.recommended,
  tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  [
    {
      name: '@lion-byte/eslint-config',
      files: ['**/*.{js,mjs,cjs,ts,tsx,jsx}'],
      languageOptions: {
        globals: { ...globals.browser },
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
      rules: {
        'no-var': 'error',
        'object-shorthand': ['error', 'always', { avoidQuotes: true }],
        'padding-line-between-statements': [
          'error',
          {
            blankLine: 'never',
            prev: 'import',
            next: 'import',
          },
          {
            blankLine: 'always',
            prev: 'import',
            next: [
              'block-like',
              'class',
              'const',
              'export',
              'expression',
              'let',
            ],
          },
          {
            blankLine: 'always',
            prev: ['block', 'block-like', 'class', 'export'],
            next: '*',
          },
          {
            blankLine: 'always',
            prev: '*',
            next: ['block', 'block-like', 'class', 'export'],
          },
          {
            blankLine: 'always',
            prev: 'expression',
            next: ['const', 'let'],
          },
        ],
        'prefer-const': 'error',
        'sort-imports': [
          'error',
          { ignoreCase: true, ignoreDeclarationSort: true },
        ],
      },
    },
    {
      name: '@lion-byte/eslint-config',
      files: ['**/*.{js,mjs,cjs,ts}'],
      languageOptions: {
        globals: {
          ...globals.worker,
          ...globals.serviceworker,
          ...globals.node,
        },
      },
    },
    {
      name: '@lion-byte/eslint-config',
      files: ['**/*.{js,cjs,ts}'],
      languageOptions: { globals: { ...globals.commonjs } },
    },
  ],
)
