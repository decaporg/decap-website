import neostandard from 'neostandard'
import globals from 'globals'

export default neostandard({
  ignores: ['static/vendor/*', 'public'],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
  },
  globals: {
    ...globals.browser,
  },
})
