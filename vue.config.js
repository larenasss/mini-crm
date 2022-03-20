const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/mini-crm/dist'
    : '/',
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      title: 'Mini Crm'
    }
  }
});
