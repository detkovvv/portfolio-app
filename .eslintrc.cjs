module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: ['./tsconfig.json'],
        alwaysTryTypes: true,
      },
    },
    alias: {
      map: [['@', './src']],
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    node: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    // parser: '@babel/eslint-parser',
  },
  plugins: [
    'react',
    'react-hooks',
    'prettier',
    'import',
    '@typescript-eslint',
    '@typescript-eslint/recommended-type-checked',
  ],
  rules: {
    'import/extensions': [
      'warn',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        svg: 'always',
        css: 'always',
        json: 'always',
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
        distinctGroup: false,
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/no-relative-parent-imports': 'off',
    'import/default': 2,
    'react/prop-types': 0,
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react/jsx-tag-spacing': [
      'error',
      {
        beforeSelfClosing: 'always',
      },
    ],
    'no-restricted-exports': [
      'warn',
      {
        restrictDefaultExports: {
          direct: true,
        },
      },
    ],
    'react/react-in-jsx-scope': 'off',
    camelcase: 'error',
    'spaced-comment': 'error',
    quotes: ['error', 'single'],
    'no-duplicate-imports': 'error',
    'no-unused-vars': 'off',
    'react/jsx-sort-props': 'error',
    'react/jsx-filename-extension': [0],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: true,
        fixStyle: 'inline-type-imports',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '_',
        argsIgnorePattern: '_',
        ignoreRestSiblings: true,
      },
    ],
  },
  ignorePatterns: ['dist', 'node-modules', 'coverage', 'eslint.config.cjs'],
}
