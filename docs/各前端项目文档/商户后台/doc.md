# 商户后台

## 如何运行
::: tip 
1. git clone `git@code.ipaynow.cn:npaccount/aggplatWWW.git`
1. 运行 `npm i`安装全部依赖
1. [下载此处的文件](https://github.com/Leeesin/ipaynow-change-modules/archive/master.zip)替换`node_module`中`gulp-rev-collector`、`gulp-rev`文件(修复无法打版本号的问题)
1. 在根目录下的`server.js`文件运行 `node server.js`（不再使用`nginx`进行代理，采用`node.js`代理)
:::


## 分支说明
::: danger 
- `生产环境分支`为`master`,`开发`时需从此分支拉取代码。
- `测试环境分支`为`本人开发分支`，`测试`时提醒相关人员从此分支拉取测试
:::

## 主要文件
::: danger 
- `/page`: 存放所有页面的html文件
- `/page/transMenu`: 存放所有页面的菜单,`权限值`也是在此配置
- `public/components/angular`:angular自定义组件
- `js\route\router.js`:路由配置
:::


## 组件API
::: tip 
- 分页组件
  - 使用
  ```html
    <pagination conf="paginationConf"></pagination>
  ```
  ```js
   $scope.paginationConf = {
        currentPage: 1,//当前页
        itemsPerPage: 1,//每页条数
        totalItems:1//必须给定该值 不然分页无法显示
    }
  ```
:::

<!-- ## 开发注意事项
::: danger 


::: -->

**同时阅读:** 

- [生产环境代码发布注意事项](/生产环境代码发布注意事项/必看.md)
