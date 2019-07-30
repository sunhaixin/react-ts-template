module.exports = {
  'env': {
    'node': true,
    'browser': true,
    'commonjs': true,
    'es6': true,
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'parser': 'babel-eslint',
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'class-methods-use-this': ['off', {
      exceptMethods: [],
    }],

    'guard-for-in': 'off',
    'no-alert': 'warn',
    'no-div-regex': 'off',
    'no-else-return': ['off', { allowElseIf: true }],
    'no-implicit-globals': 'off',
    'no-loop-func': 'warn',
    'no-script-url': 'off',
    'no-console': 'warn',
    'no-var': 'error',
    'no-constant-condition': 'error',

    'prefer-arrow-callback': ['off', {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    }],

    'prefer-const': ['off', {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    }],

    'callback-return': 'off',
    'strict': ['off', 'never'],

    'indent': ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,

      FunctionDeclaration: {
        parameters: 1,
        body: 1,
      },

      FunctionExpression: {
        parameters: 1,
        body: 1,
      },

      CallExpression: {
        arguments: 1,
      },

      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoredNodes: ['JSXElement', 'JSXElement *'],
    }],

    'jsx-quotes': ['warn', 'prefer-double'],

    'keyword-spacing': ['warn', {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true },
      }
    }],

    'linebreak-style': ['error', 'unix'],

    'lines-around-comment': 'off',

    'max-depth': ['off', 4],

    'max-len': ['off', 100, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    'max-lines': ['off', {
      max: 300,
      skipBlankLines: true,
      skipComments: true,
    }],

    'max-nested-callbacks': 'off',
    'max-params': ['warn', 10],
    'max-statements': ['off', 10],
    'max-statements-per-line': ['off', { max: 1 }],
    'multiline-comment-style': ['off', 'starred-block'],
    'no-lonely-if': 'off',
    'quotes': ['error', 'single', { avoidEscape: true }],
    'semi-style': ['error', 'last'],
    'semi': ['error', 'never'],

    'comma-dangle': ['error', {
      'arrays': 'only-multiline',
      'objects': 'only-multiline',
      'imports': 'only-multiline',
      'exports': 'only-multiline',
      'functions': 'ignore',
    }],

    'object-shorthand': ['off', 'always', {
      ignoreConstructors: false,
      avoidQuotes: true,
    }],

    'arrow-parens': ['off', 'as-needed', {
      requireForBlockBody: true,
    }],

    'arrow-body-style': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-unresolved': 'off',
    'prefer-template': 'off',
    'prefer-rest-params': 'off',
    'radix': 'off',
    'no-mixed-operators': 'off',
    'object-curly-newline': 'off',
    'object-curly-spacing': 'off',
    'prefer-destructuring': 'off',
    'no-restricted-globals': 'off',
    'no-restricted-syntax': 'off',
    'no-prototype-builtins': 'off',
    'func-names': 'off',
    'no-underscore-dangle': 'off',
    'global-require': 'off',
    'array-callback-return': 'off',
    'quote-props': 'off',
    'no-continue': 'off',
    'space-before-function-paren': ['error', 'always'],

    'complexity': ['error', { max: 20 }],
    'no-nested-ternary': 0,
    'no-multiple-empty-lines': ['error', {
      'max': 1,
      'maxEOF': 1,
    }],
    'no-new': 0,
    'react/no-children-prop': 0,
    'no-unused-expressions': 0,
    'react/no-unescaped-entities': 0,
    'no-console': 0
  }
};