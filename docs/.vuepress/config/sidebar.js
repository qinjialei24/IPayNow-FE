module.exports = {
    sidebar: [
        {
            title: '现在支付前端团队组件库(Vue)',
            collapsable: true,
            children: [
                '/sync-date-picker'
            ]
        },
        {
            title: 'mixins',
            collapsable: true,
            children: [
                '/mixins/loading'
            ]
        },
        {
            title: '技术文章精选',
            collapsable: true,
            children: [
                '/技术文章精选/200行代码实现简版react.md',
                '/技术文章精选/Promise实现详解.md',
                '/技术文章精选/利用Vue原理实现一个mini版的MVVM框架.md',
            ]
        },
        {
            title: 'electron踩坑',
            collapsable: true,
            children: [
                encodeURI('/electron踩坑/设置透明窗口时的兼容性问题')//vuepress 不支持中文文件名 先解码一下 
            ]
        },

    ]
}