# 嗖嗖短信后台管理系统

## 如何运行
::: tip 
1. git clone `git@code.ipaynow.cn:npaccount/sms-merchant-www.git`
2. sms-merchant-www 目录下 打开命令行 输入 http-server
3. 打包测试上线 gulp run dev
:::

## 分支说明
::: danger 
- `生产环境分支`为`master`,`开发`时需从此分支拉取代码。
- `测试环境分支`为`develop`，`测试`时将代码合并到此分支上。
- `开发环境分支`命名格式为 wo190101  名字+日期格式   时间一般以项目开始日期为准
:::



## 主要文件
::: danger 注意
- `/js/router`: 整个项目的路由。
- `/js/filter`: angular全局过滤器。
- `/js/factory`: angular全局公共方法，例如 http请求 图片上传等。
- `/js/directive`: angular自定义组件。
- `/js/controller`: 整个项目的公共组件js文件，例如 侧边栏，登录 首页等等。
- `/page`: 整个项目的html页面，下级文件夹代表每个模块下的所有html及js
- `/page/menu`: 整个项目的公共路由html页面  侧边栏
:::




**同时阅读:** 

- [线上代码发布注意事项](/线上代码发布注意事项/必看.md)