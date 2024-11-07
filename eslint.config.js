import pluginJs from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import pluginReact from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default [
  { files: ['**/*.{js,ts,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    settings: {
      'import/resolver': {
        oxc: true,
      },
      react: {
        version: 'detect',
      },
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
];
