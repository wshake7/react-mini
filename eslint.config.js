import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: ['dist', 'locales', 'src/components/ui'],
  formatters: true,
  react: true,
  isInEditor: false,
  lessOpinionated: true,

  rules: {
  },
})
