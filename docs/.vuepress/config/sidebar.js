module.exports = {
    sidebar: [
        {
            title: '开发规范',
            collapsable: false,
            children: [
                '/开发规范/网页head标签规范.md',
                '/开发规范/js开发规范.md',
                '/开发规范/css开发规范.md',
                '/开发规范/html开发规范.md',
                '/开发规范/Vue开发规范.md',
                '/开发规范/接口开发规范.md',
            ]
        },
        {
            title: '项目文档',
            collapsable: false,
            children: [
                encodeURI('/各前端项目文档/运营后台/doc.md'),//vuepress 不支持中文文件名 先解码一下 
                encodeURI('/各前端项目文档/商户后台/doc.md'),//vuepress 不支持中文文件名 先解码一下 
                encodeURI('/各前端项目文档/易售云小程序/doc.md'),//vuepress 不支持中文文件名 先解码一下 
                encodeURI('/各前端项目文档/易售云后台管理系统/doc.md'),//vuepress 不支持中文文件名 先解码一下 
                encodeURI('/各前端项目文档/开张吉祥收银插件/doc.md'),
            ]
        },
        {
            title: '生产环境代码发布注意事项',
            collapsable: false,
            children: [
                '/生产环境代码发布注意事项/必看',
            ]
        },
        {
            title: 'JS工具函数',
            collapsable: false,
            children: [
                encodeURI('/JS工具函数/COPY.md'),
                encodeURI('/JS工具函数/轮询函数.md'),
            ]
        },
        {
            title: 'Vue组件库',
            collapsable: false,
            children: [
                '/Vue组件库/two-fields-date-picker.md',
                '/Vue组件库/分页组件.md',
                '/Vue组件库/权限树组件.md',
                '/Vue组件库/v-card.md',
            ]
        },
        {
            title: 'Vue进阶',
            collapsable: false,
            children: [
                encodeURI('/Vue基础与进阶/进阶/使用mixin复用业务逻辑.md'),
            ]
        },
        {
            title: '小程序组件库',
            collapsable: false,
            children: [
                '/小程序组件库/模态框'
            ]
        },
        {
            title: 'electron踩坑',
            collapsable: false,
            children: [
                encodeURI('/electron踩坑/设置透明窗口时的兼容性问题')//vuepress 不支持中文文件名 先解码一下 
            ]
        },
        {
            title: '小程序踩坑',
            collapsable: false,
            children: [
                encodeURI('/小程序踩坑/禁止再次分享.md'),//vuepress 不支持中文文件名 先解码一下 
                '/小程序踩坑/小程序授权解决方案总结.md',
            ]
        },
        {
            title: '技术文章精选',
            collapsable: false,
            children: [
                '/技术文章精选/vue源码解析.md',
                '/技术文章精选/200行代码实现简版react.md',
                '/技术文章精选/Promise实现详解.md',
                '/技术文章精选/利用Vue原理实现一个mini版的MVVM框架.md',
            ]
        },
        {
            title: '前端九部',
            collapsable: false,
            children: [
                '/前端九部/doc.md',
            ]
        },
    ]
}