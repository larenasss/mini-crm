const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      title: 'Mini Crm'
    }
  }
});
