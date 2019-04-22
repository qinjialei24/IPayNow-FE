# 易售云小程序

## 如何运行
::: tip 
1. git clone `git@code.ipaynow.cn:yishouyun/yishouyun-miniprogram.git`
2. 使用[小程序开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)打开
:::

## 分支说明
::: danger 
- `生产环境分支`为`master`,`开发`时需从此分支拉取代码。
- `测试环境分支`为`dev`，`测试`时提醒相关人员从此分支拉取测试
:::



## 主要文件
::: danger 注意
- `/pages`: 主包
- `/sub-package`: 分包
- `/wxApi`: 将微信`回调风格`的 api 封装成 `promise风格`,方便异步处理
- `/utils/async-runtime.js`: 使用async必须引入这个库
- `/dist`: 第三方组件库
- `/components`: 存放通用组件
- `/business-components`: 存放业务组件
- `/business-components/delivery-way`: 配送方式组件
- `/business-components/list-item`: 所有分类中的 左侧显示商品大类 右侧显示商品且左右联动的组件
- `/business-components/select-size`: 封装 规格选择组件
- `/business-components/order-item`: 封装订单组件
:::


## 开发注意事项
::: danger 注意
- 异步流程较为复杂的时候推荐使用`async`
- 小程序`wx.login`必须在`wx.getUserInfo`之前调用
> 把`wx.login`和`wx.getUserInfo`绑定起来使用，认为如果我要获取用户信息(`getUserInfo`)，就必须要登录。这其实是微信官方之前的一个设计缺陷，也是官方实例中的一个误导（而且官方文档中并没有说明）。 
:::

## 项目总结
::: tip 如下
### wxs文件格式化和高亮<br>
小程序无法在模板内调用函数,这种情况下必须使用`wxs`，但是`wxs`文件格式化和高亮目前编辑器的支持不太好，建议使用`src`属性从外部引用,同时将`wxs`文件的文件类型设置为`js`
### 组件化开发<br>
小程序目前的`组件化能力`相较于之前的版本有很大的提升，强烈推荐`组件化`开发，同时组件最好分为`基础组件`和`业务组件`。
- 基础组件
   - 例如`button`,`loading`,`input`等组件,这类组件的特点是
     1. 不携带业务逻辑，和业务不耦合
     2. 粒度较小，无法继续细分
- 业务组件
  - 例如本项目的`business-components`内就是封装了很多业务组件，这类组件的特点是
    1. 和业务耦合，依赖于后端特定的数据结构     
    2. 封装大量业务逻辑，因此能显著降低代码的重复率，提升开发效率。
### 小程序授权<br>
建议新建一个授权页面,而不是在首页编写授权相关的逻辑，这样做的好处是：
- 首页可以减少不必要的授权逻辑，可以减少代码量，专注于首页的业务逻辑编写
### 小程序开发者工具使用技巧<br>
- 添加编译模式<br>
添加后，再次点击编译按钮，页面将会停留在当前页面，不用手动切换页面，并且可以设置`启动参数`
- 小程序体验跑分<br>
在调试面板，点击`Audits`,即可运行体验评分,在小程序运行过程中实时检查，分析出一些可能导致体验不好的地方，并且定位哪里有问题，以及给出一些代码层面的优化建议。
:::




**同时阅读:** 

- [生产环境代码发布注意事项](/生产环境代码发布注意事项/必看.md)
