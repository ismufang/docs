/**
 * docs: https://vuepress.vuejs.org/zh/config/
 */
const path = require('path')

module.exports = {
  base: '/',
  title: 'Docs',
  description: 'Everything about life',
  port: 7788,
  dest: 'dist',
  markdown: {
    lineNumbers: false,
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'public', 'assets'),
      },
    },
  },
  themeConfig: {
    sidebarDepth: 3,
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    nav: [
      { text: '概览', link: '/' },
      { text: '指南', link: '/guide/' },
    ],
    sidebar: [
      {
        title: '指南',
        path: 'guide/',
      },
      {
        title: 'Tips',
        path: 'tips/',
      },
    ],
  },
}
