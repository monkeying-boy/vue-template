const prodPlugins = [];
if (process.env.NODE_ENV === 'production') {
  prodPlugins.push([
    'transform-remove-console',
    {
      // 保留
      exclude: ['info'],
    },
  ]);
}

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    ...prodPlugins,
  ],
};
