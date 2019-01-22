# 易售云小程序

## 如何运行
::: tip 
1. git clone `git@code.ipaynow.cn:yishouyun/yishouyun-miniprogram.git`
2. 使用[小程序开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)打开
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
- `生产环境分支`为`master`,开发时需从此分支拉取代码。
- `测试环境分支`为`dev`
:::

**同时阅读:** 

- [线上代码发布注意事项](/线上代码发布注意事项/必看.md)