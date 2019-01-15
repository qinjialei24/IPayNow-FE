const { sidebar } = require('./config/sidebar')
const { nav } = require('./config/nav')

module.exports = {
    title: 'Right-Now-FE',  // 设置网站标题
    description: '现在支付前端团队文档',
    dest: 'docs/.vuepress/dist',    // 设置输出目录
    base: '/Right-Now-FE/', // 项目名称
    repo: 'https://leeesin/github.io/Right-Now-FE', // 添加 github 链接
    themeConfig: {
        lastUpdated: '上次更新', // string | boolean
        nav,//导航栏
        sidebar,//侧边栏
        sidebarDepth: 2
    },
    plugins: [
        require('./plugins/watch-file/index.js')
    ]
}