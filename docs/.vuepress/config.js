const { sidebar } = require('./config/sidebar')
const { nav } = require('./config/nav')

module.exports = {
    title: 'IPayNow-FE',  // 设置网站标题
    description: '现在支付前端团队文档',
    dest: 'docs/.vuepress/dist',    // 设置输出目录
    base: '/IPayNow-FE/', // 项目名称
    repo: 'https://leeesin/github.io/IPayNow-FE', // 添加 github 链接
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        repo: 'Leeesin/IPayNow-FE',
        repoLabel: '查看源码',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新', // string | boolean
        nav,//导航栏
        sidebar,//侧边栏
        sidebarDepth: 2
    },

}