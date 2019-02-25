# 运营后台

## 如何运行
::: tip 
1. git clone `git@code.ipaynow.cn:operation_center/operation_frontend.git`
2. 运行 `npm i`安装全部依赖
3.  [下载此处的文件](https://github.com/Leeesin/ipaynow-change-modules/archive/master.zip)替换`node_module`中`gulp-rev-collector`、`gulp-rev`文件(修复无法打版本号的问题)
4. 在根目录下的`server.js`文件运行 `node server.js`（不再使用`nginx`进行代理，采用`node.js`代理)
5. 运行`gulp run`
:::


##  分支说明
::: danger 
- `生产环境分支`为`develop`,`开发`时需从此分支拉取代码。
- `测试环境分支`为`feature/opt-test`，`测试`时提醒相关人员从此分支拉取测试,
:::




## 主要文件
::: danger 
- `common/components/basic`:基础组件,与业务无关
- `common/components/business`:业务组件,基于基础组件封装而成
- `common/views/menu.html`: 新加的页面需要到这里增加菜单
- `common/controllers/controllers.js`:二级域名定义
:::

## 功能参考页面
::: tip 
- `图片上传`:mchInputCom
:::




## 开发注意事项
::: danger 
- 开发项目时切记运行 `gulp run`，这会将路由编译到`all.route.config.js`,否则需要在`all.route.config.js`内创建路由，
因为该文件内代码较多，不建议直接在此文件新增路由。
:::

**同时阅读:** 

- [生产环境代码发布注意事项](/生产环境代码发布注意事项/必看.md)

- server.js文件
```js



var fallback = require('express-history-api-fallback')

var express = require('express');
var proxyMiddleWare = require("http-proxy-middleware");
var fallback = require('express-history-api-fallback')

var app = express();
var root = __dirname + '/';
app.use(express.static(root));
var path = {   // 反向代理路径
  'main': 'http://192.168.51.60:18880',  //登录 权限
  'tc': 'http://192.168.101.13:8085',  //交易中心
  'settle': 'http://192.168.99.61:8080', //分账系统 、计费中心
  'crm': 'http://192.168.99.61:8080', //赏金猎人
  'app_center': 'http://192.168.101.13:8085', //应用中心
  'tradeModel': 'http://192.168.99.54:8380', // 业务管理
  'bill': 'http://192.168.99.61:8080', //金融平台
  'mch': 'http://192.168.99.61:8080', // 商户中心
  'auth_sms': 'http://192.168.99.60:8080', //鉴权和短信
  'interpay_boss': 'http://192.168.99.54:8580', //跨境
  'agg_acc_web_op': 'http://192.168.0.51:18050', //聚合账户
}


app.use('/main', proxyMiddleWare({
  target: path.main,
  changeOrigoin: true
}))
app.use('/tc', proxyMiddleWare({
  target: path.tc,
  changeOrigoin: true
}))
app.use('/settle', proxyMiddleWare({
  target: path.settle,
  changeOrigoin: true
}))
app.use('/app_center', proxyMiddleWare({
  target: path.app_center,
  changeOrigoin: true
}))
app.use('/tradeModel', proxyMiddleWare({
  target: path.tradeModel,
  changeOrigoin: true
}))
app.use('/bill', proxyMiddleWare({
  target: path.bill,
  changeOrigoin: true
}))
app.use('/mch', proxyMiddleWare({
  target: path.mch,
  changeOrigoin: true
}))
app.use('/auth-sms', proxyMiddleWare({
  target: path.auth_sms,
  changeOrigoin: true
}))
app.use('/interpay_boss', proxyMiddleWare({
  target: path.interpay_boss,
  changeOrigoin: true
}))
app.use('/agg_acc_web_op', proxyMiddleWare({
  target: path.agg_acc_web_op,
  changeOrigoin: true
}))
app.use('/agg_acc_web_op', proxyMiddleWare({
  target: path.agg_acc_web_op,
  changeOrigoin: true
}))

app.use(fallback('index.html', { root: root }));

app.listen(9001, () => {
  console.log('open http://localhost:9001');
});

```

