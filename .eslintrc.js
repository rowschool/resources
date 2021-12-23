// https://github.com/yannickcr/eslint-plugin-react#configuration
module.exports = {
    globals: {
      __PATH_PREFIX__: true,
    },
    root: true,
    settings: {
        react: {
            version: 'detect',
        },
    },
    env: {
        browser: true,
        es2021: true,
    },
    parser: '@babel/eslint-parser',

    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 8,
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    globals: {
        console: true,
        document: true,
        module: true,
        window: true,
        require: true,
        __dirname: true,
        process: true,
    },
    rules: {
        indent: [
            'error',
            4,
        ],
        'linebreak-style': [
            'error',
            'unix',
        ],
        quotes: [
            'error',
            'single',
        ],
        semi: [
            'error',
            'always',
        ],
        'react/jsx-no-bind': [ 'error', {
            allowArrowFunctions: true,
            allowBind: true,
            ignoreRefs: true,
        } ],

        // Possible Errors
        'for-direction': 2,
        'getter-return': 2,
        'no-async-promise-executor': 2,
        'no-await-in-loop': 2,
        'no-compare-neg-zero': 2,
        'no-cond-assign': 2,
        'no-constant-condition': 2,
        'no-control-regex': 2,
        'no-debugger': 1,
        'no-dupe-args': 2,
        'no-dupe-else-if': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-empty-character-class': 2,
        'no-ex-assign': 2,
        'no-extra-boolean-cast': 2,
        'no-extra-parens': [ 2, 'functions' ],
        'no-extra-semi': 2,
        'no-func-assign': 2,
        'no-import-assign': 2,
        'no-inner-declarations': [ 2, 'functions' ],
        'no-invalid-regexp': 2,
        'no-irregular-whitespace': 2,
        'no-loss-of-precision': 2,
        'no-misleading-character-class': 2,
        'no-obj-calls': 2,
        'no-promise-executor-return': 2,
        'no-prototype-builtins': 0, // Incompatible with our style guides.
        'no-regex-spaces': 2,
        'no-setter-return': 2,
        'no-sparse-arrays': 2,
        'no-template-curly-in-string': 2,
        'no-unexpected-multiline': 2,
        'no-unreachable': 2,
        'no-unreachable-loop': 2,
        'no-unsafe-finally': 2,
        'no-unsafe-negation': 2,
        'no-unsafe-optional-chaining': 2,

        // 'no-unused-private-class-members': 2,
        'no-useless-backreference': 2,
        'require-atomic-updates': 2,
        'use-isnan': 2,
        'valid-typeof': 2,

        // Best Practices
        'accessor-pairs': 2,
        complexity: [ 2, 500 ],
        curly: 2,
        'default-case': 2,
        'default-case-last': 2,
        'dot-location': 0, // Do not enforce newlines before/after dot.
        'dot-notation': 2,
        eqeqeq: 2,
        'grouped-accessor-pairs': [ 2, 'getBeforeSet' ],
        'guard-for-in': 2,
        'max-classes-per-file': 0, // We aren't concerned about this.
        'no-caller': 2,
        'no-case-declarations': 2,
        'no-constructor-return': 2,
        'no-div-regex': 2,
        'no-else-return': 2,
        'no-empty-pattern': 2,
        'no-eq-null': 2,
        'no-eval': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        'no-extra-label': 2,
        'no-fallthrough': 2,
        'no-floating-decimal': 2,
        'no-global-assign': 2,
        'no-implicit-coercion': 2,
        'no-implicit-globals': 2,
        'no-implied-eval': 2,
        'no-invalid-this': 0, // Use this extensively.
        'no-iterator': 2,
        'no-labels': 2,
        'no-lone-blocks': 2,
        'no-loop-func': 2,

        // 'no-magic-numbers': [ 2, {
        //     ignore: [ -1, 0, 1, 2, 3, 10, 60, 100, 250, 500, 1000 ],
        // } ],
        'no-multi-spaces': 2,
        'no-multi-str': 2,
        'no-new': 2,
        'no-new-func': 2,
        'no-new-wrappers': 2,
        'no-nonoctal-decimal-escape': 2,
        'no-octal': 2,
        'no-octal-escape': 2,

        'no-proto': 2,

        'no-restricted-properties': 2,

        'no-return-await': 2,
        'no-script-url': 2,
        'no-self-assign': 2,
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-throw-literal': 2,
        'no-unmodified-loop-condition': 2,
        'no-unused-expressions': 2,
        'no-unused-labels': 2,
        'no-useless-call': 2,
        'no-useless-catch': 2,
        'no-useless-concat': 2,
        'no-useless-escape': 2,
        'no-useless-return': 2,
        'no-void': 2,
        'no-warning-comments': [ 0, {
            terms: [ 'todo', 'fixme', 'xxx' ],
            location: 'start',
        } ],
        'no-with': 2,
        'prefer-named-capture-group': 0,
        'prefer-promise-reject-errors': 2,
        'prefer-regex-literals': 2,

        'vars-on-top': 0, // Allow defining vars where needed.
        'wrap-iife': [ 2, 'outside' ],
        yoda: [ 2, 'never' ],

        // Strict Mode
        strict: [ 2, 'global' ],

        // Variables
        'init-declarations': 2,
        'no-delete-var': 2,
        'no-label-var': 2,
        'no-restricted-globals': 2,

        // 'no-shadow': 2,
        'no-shadow-restricted-names': 2,

        'no-undef': 2,
        'no-undef-init': 2,

        'no-unused-vars': 2,

        // 'no-use-before-define': 2,

        // Stylistic Issues
        'array-bracket-newline': [ 2, 'consistent' ],
        'array-bracket-spacing': [ 2, 'always' ],
        'array-element-newline': [ 2, 'consistent' ],
        'block-spacing': 2,
        'brace-style': [ 2, 'stroustrup' ],
        camelcase: 0,
        'comma-dangle': [ 2, 'always-multiline' ],
        'comma-spacing': 2,
        'comma-style': 2,
        'computed-property-spacing': 2,
        'eol-last': 2,
        'func-call-spacing': 2,
        'func-name-matching': 2,
        'func-names': 0, // Allow anonymous functions.
        'func-style': 0, // Use both styles.
        'function-call-argument-newline': [ 2, 'consistent' ],
        'function-paren-newline': [ 2, 'consistent' ],
        'id-denylist': 0, // Unneeded denylist, currently no restricted identifiers.
        // 'id-length': [ 'error', {
        //     min: 2,
        //     exceptions: [ 'i', 'j', 'k' ],
        // } ],
        'id-match': 0, // Unneeded regex id matching; we are fine with camelCase.
        'implicit-arrow-linebreak': 0, // Incompatible with current style guidelines.
        // 'indent': [ 'error', 4, {
        //     'SwitchCase': 1,
        //     'VariableDeclarator': 'first',
        //     'MemberExpression': 1,
        //     'FunctionDeclaration': {
        //         'parameters': 'first',
        //     },
        //     'FunctionExpression': {
        //         'parameters': 'first',
        //     },
        //     'CallExpression': {
        //         'arguments': 'first',
        //     },
        //     'ArrayExpression': 'first',
        //     'ObjectExpression': 'first',
        //     'ImportDeclaration': 'first',
        //     'flatTernaryExpressions': true,
        //     'ignoredNodes': [ 'CallExpression > ObjectExpression' ],
        // } ],
        'jsx-quotes': 0, // JSX quotes do not allow escaped quotes inside string literal.
        'key-spacing': 2,
        'keyword-spacing': [ 'error', {
            overrides: {
                this: {
                    before: false,
                },
            },
        } ],
        'line-comment-position': 0, // We don't mind where the comments go.
        'lines-around-comment': [ 2, {
            allowBlockStart: true,
            beforeBlockComment: true,
            beforeLineComment: true,
        } ],
        'lines-between-class-members': 2,
        'max-depth': [ 2, 5 ],

        // 'max-len': [ 'error', {
        //     code: 140,
        //     tabWidth: 4,
        //     comments: 140,
        //     ignoreComments: true,
        //     ignoreRegExpLiterals: true,
        //     ignoreStrings: true,
        //     ignoreTemplateLiterals: true,
        //     ignoreTrailingComments: true,
        //     ignoreUrls: true,
        // } ],
        'max-lines': 0, // We have very large files.
        'max-lines-per-function': 0,
        'max-nested-callbacks': [ 2, 6 ],
        'max-params': 0, // Why restrict this?
        'max-statements': [ 0, 10 ], // Do not limit statements in a function.
        'max-statements-per-line': 2,
        'multiline-comment-style': [ 0, 'bare-block' ],
        'multiline-ternary': [ 2, 'always-multiline' ],

        // 'new-cap': [ 2, {
        //     newIsCapExceptions: [
        //         'htmlSafe',
        //     ],
        //     capIsNewExceptions: [
        //         'Queue',
        //     ],
        // } ],
        'new-parens': 2,
        'newline-per-chained-call': 0,
        'no-array-constructor': 2,
        'no-bitwise': 2,
        'no-continue': 0, // Allow continue to save on loop iterations.
        'no-inline-comments': 0, // Allow inline comments for readability.
        'no-lonely-if': 2,
        'no-mixed-operators': [ 0, { allowSamePrecedence: true } ], // Does not match out style guidelines.
        'no-mixed-spaces-and-tabs': 2,

        'no-multi-assign': 2,
        'no-multiple-empty-lines': [ 2, {
            max: 2,
            maxEOF: 1,
        } ],

        // 'no-negated-condition': 2,
        'no-nested-ternary': 2,
        'no-new-object': 2,
        'no-plusplus': 0, // Allow ++ and --
        'no-restricted-syntax': 0, // List restricted syntax here.
        // 'no-tabs': 2,
        'no-ternary': 0, // Ternary can be cleaner code.
        'no-trailing-spaces': 2,

        'no-unneeded-ternary': 2,
        'no-whitespace-before-property': 2,
        'nonblock-statement-body-position': 2,
        'object-curly-newline': [ 2, { consistent: true } ],
        'object-curly-spacing': [ 2, 'always' ],
        'object-property-newline': [ 2, { allowAllPropertiesOnSameLine: true } ],
        'one-var': [ 2, 'never' ], // Each var, let, const should get it's own line.
        'one-var-declaration-per-line': 2,
        'operator-assignment': [ 2, 'always' ],
        'operator-linebreak': [ 2, 'after' ],
        'padded-blocks': [ 2, 'never', { allowSingleLineBlocks: true } ],
        'padding-line-between-statements': 2,
        'prefer-exponentiation-operator': 2,
        'prefer-object-spread': 2,
        'quote-props': [ 2, 'as-needed' ],

        // 'quotes': [ 2, 'single' ],
        // 'semi': 2,
        'semi-spacing': 2,
        'semi-style': 2,
        'sort-keys': 0, // TODO: unlikely
        'sort-vars': 2,
        'space-before-blocks': 2,
        'space-before-function-paren': [ 2, 'never' ],
        'space-in-parens': 2,
        'space-infix-ops': 2,
        'space-unary-ops': [ 2, {
            words: true,
            nonwords: false,
        } ],
        'spaced-comment': [ 2, 'always', {
            line: {
                markers: [ '/' ],
                exceptions: [ '-', '+' ],
            },
            block: {
                markers: [ '!' ],
                exceptions: [ '*' ],
            },
        } ],
        'switch-colon-spacing': 2,
        'template-tag-spacing': 2,
        'unicode-bom': 2,
        'wrap-regex': 2,

        // ECMAScript 6*
        'arrow-body-style': 2,
        'arrow-parens': [ 2, 'as-needed' ],
        'arrow-spacing': 2,
        'constructor-super': 2,
        'generator-star-spacing': [ 2, 'after' ],
        'no-class-assign': 2,
        'no-confusing-arrow': [ 'error', { allowParens: true } ],
        'no-const-assign': 2,
        'no-dupe-class-members': 2,
        'no-duplicate-imports': 2,
        'no-new-symbol': 2,
        'no-restricted-exports': 2,
        'no-restricted-imports': 2,
        'no-this-before-super': 2,
        'no-useless-computed-key': 2,
        'no-useless-constructor': 2,
        'no-useless-rename': 2,
        'no-var': 2,
        'object-shorthand': [ 2, 'properties' ],
        'prefer-arrow-callback': 2,
        'prefer-const': 2,
        'prefer-destructuring': 0, // No real benefit; seems to create inconsistent access.
        'prefer-numeric-literals': 2,
        'prefer-rest-params': 0, // Does not play nice with this._super(...arguments)
        'prefer-spread': 2,
        'prefer-template': 2,
        'require-yield': 2,
        'rest-spread-spacing': 2,
        'sort-imports': [ 'off', {
            ignoreCase: true,
        } ],
        'symbol-description': 2,
        'template-curly-spacing': 2,
        'yield-star-spacing': 2,

        'react/no-did-update-set-state': 'error',
        'react/no-unknown-property': 'error',
        'react/no-unused-prop-types': 'error',
        'react/react-in-jsx-scope': 'error',
        'react/prop-types': 0,
    },
};
