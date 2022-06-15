const { defineConfig } = require('@vue/cli-service');
let path = require('path');

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  // 设置@
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@components', resolve('src/components'))
      .set('@view', resolve('src/view'))
      .set('@assets', resolve('src/assets'))
      .set('@img', resolve('src/assets/img'))
      .set('@config', resolve('src/config'))
      .set('@modules', resolve('src/modules'))
      .set('@style', resolve('src/assets/style'));
  },

  // 设置scss全局变量
})


