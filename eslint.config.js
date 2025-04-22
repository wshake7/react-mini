import antfu from '@antfu/eslint-config'
import { tanstackConfig } from '@tanstack/eslint-config'

export default antfu({
  ... tanstackConfig,
  ignores: ['dist', 'locales', 'src/components/ui'],
  formatters: true,
  react: true,
  isInEditor: false,
  lessOpinionated: true,
  
  rules: {
    'prefer-template': 'off',
    'style/max-statements-per-line': 'off',
    'eslint-comments/no-unlimited-disable': 'off'
  },
})
