module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-order'],
  rules: {
    'no-empty-source': null,
    // 支持 v-deep
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
  },
};
