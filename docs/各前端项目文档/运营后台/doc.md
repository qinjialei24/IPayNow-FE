# 运营后台
## 目录结构


::: danger 注意
- `线上分支`为`develop`,开发时需从此分支拉取代码。
- `测试分支`为`feature/opt-test`
:::

- `common/js/directive.js`: 用于存放自定义组件，可以来这里看组件的api使用方法。
- `common/views/menu.html`: 新加的页面需要到这里增加菜单
- `common/controllers/controllers.js`:二级域名定义


::: warning 注意
开发项目时切记运行 `gulp run`，这会将路由编译到`all.route.config.js`,否则需要在`all.route.config.js`内创建路由，
因为该文件内代码较多，不建议直接在此文件新增路由。
:::

**同时阅读:** 

- [线上代码发布注意事项](/线上代码发布注意事项/必看.md)

```
├─aggregation
│  ├─controllers
│  │  ├─account
│  │  └─twoAccount
│  └─views
│      ├─account
│      └─twoAccount
├─app-center
│  ├─controllers
│  │  └─appBizCenter
│  └─views
│      └─appBizCenter
├─auth-sms
│  ├─controllers
│  │  ├─authentication
│  │  └─noteManagement
│  └─views
│      ├─authentication
│      └─noteManagement
├─common                公共模块文件(公共组件、二级域名定义、菜单配置、全局方法)
│  ├─controllers
│  │  └─accountCenter
│  ├─datacenter
│  ├─dialog                 弹框组件
│  ├─js
│    ├─factory.js             全局方法
│    ├─directive.js           公共组件   
│  ├─css
│  ├─style
│  │  ├─css
│  │  │  └─min
│  │  ├─fonts
│  │  ├─images
│  │  ├─js
│  │  │  ├─min
│  │  │  └─skin
│  │  │      └─default
│  │  └─plugins
│  │      ├─datetimepicker
│  │      ├─layer
│  │      │  └─skin
│  │      │      └─default
│  │      ├─scrollbar
│  │      ├─upload
│  │      ├─validate
│  │      └─viewer
│  └─views
│      └─accountCenter
├─hunter
│  ├─controllers
│  │  └─mchActivity
│  └─views
│      └─mchActivity
├─interpay
│  ├─controllers
│  │  └─transaction
│  └─views
│      └─transaction
├─oa
│  ├─controllers
│  │  └─task
│  └─views
│      └─task
├─op-sam-charge
│  ├─controllers
│  │  ├─bc
│  │  └─settleManager
│  └─views
│      ├─bc
│      └─settleManager
├─op-sam-mch
│  ├─controllers
│  │  └─mchManager
│  └─views
│      └─mchManager
│          └─protocol
├─op-sam-recon
│  ├─controllers
│  │  ├─billManager
│  │  ├─financeManager
│  │  ├─financialPlatform
│  │  └─p2p
│  └─views
│      ├─billManager
│      ├─financeManager
│      ├─financialPlatform
│      └─p2p
├─payForOther
│  ├─controllers
│  │  ├─deal
│  │  ├─payConfigure
│  │  └─refundManage
│  └─views
│      ├─deal
│      ├─payConfigure
│      └─refundManage
├─pratAccount
│  ├─controllers
│  └─views
├─project
│  ├─controllers
│  │  └─projectManage
│  └─views
│      └─projectManage
├─rc
│  ├─controllers
│  │  └─riskManager
│  └─views
│      └─riskManager
├─tc                    交易管理
│  ├─controllers
│  │  └─tradeCenter
│  └─views
│      └─tradeCenter
├─trade-model           业务管理
│  ├─controllers
│  │  ├─collection
│  │  ├─datacenter
│  │  │  ├─analysis
│  │  │  └─finance
│  │  ├─stopCar
│  │  └─terminalManage
│  └─views
│      ├─collection
│      ├─datacenter
│      │  ├─admin
│      │  ├─analysis
│      │  └─finance
│      ├─stopCar
│      └─terminalManage
└─wap
    ├─css
    │  └─iconfont
    ├─images
    └─js

```
