export default {
  extends: 'stylelint-config-standard-scss',
  rules: {
    'alpha-value-notation': 'number',
    'at-rule-empty-line-before': null,
    'at-rule-no-unknown': null,
    'color-function-notation': 'legacy',
    'media-feature-range-notation': 'prefix',
    'scss/no-global-function-names': null,
    'scss/at-extend-no-missing-placeholder': null,
    'selector-class-pattern': null,
  },
  ignoreFiles: ['static/vendor/*', 'public', 'resources'],
}
