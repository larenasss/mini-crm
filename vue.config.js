const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/mini-jira/dist/',
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      title: 'Mini Jira'
    }
  }
});
