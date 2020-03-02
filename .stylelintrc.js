module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-sass-guidelines',
    'stylelint-config-recommended',
    'stylelint-config-styled-components'
  ],
  rules: {
    'color-hex-length': null,
    'max-nesting-depth': null,
    'length-zero-no-unit': null,
    'shorthand-property-no-redundant-values': null,
    'order/properties-alphabetical-order': null,
    'declaration-property-value-blacklist': null,
    'color-named': null,
    'color-hex-case': null,
    'rule-empty-line-before': null,
  }
}
