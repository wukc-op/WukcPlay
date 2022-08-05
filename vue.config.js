const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  configureWebpack: {
    resolve: {
      alias: {
        // 脚手架3中起别名可以用@代替src
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views'
      }
    }
  }
})
