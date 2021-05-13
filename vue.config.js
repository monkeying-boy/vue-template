// eslint-disable-next-line
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
// 开启文件压缩，必须 Nginx 需开启 gzip_static 功能
const CompressionWebpackPlugin = require('compression-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, dir);
}

const config = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  lintOnSave: process.env.NODE_ENV === 'development',
  transpileDependencies: ['axios'],
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  configureWebpack(configs) {
    if (isProd) {
      // 配置webpack 压缩
      configs.plugins.push(
        new CompressionWebpackPlugin({
          test: /\.js$|\.html$|\.css$/,
          // 超过4kb压缩
          threshold: 4096,
        }),
      );
    }

    Object.assign(configs, {
      name: 'vue项目通用摸板',
      resolve: {
        alias: {
          '@': resolve('src'),
        },
      },
    });
  },
  // 扩展 webpack 配置
  // eslint-disable-next-line no-shadow
  chainWebpack(config) {
    // 5kb 以下打包成 base64
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap((options) => Object.assign(options, { limit: 5000 }))
      .end();

    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .add(resolve('src/icons'))
      .end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end();

    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap((options) => {
        options.compilerOptions.preserveWhitespace = true;
        return options;
      })
      .end();
  },
};
module.exports = config;
