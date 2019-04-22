# 开张吉祥收银插件

## 如何运行
::: tip 
1. git clone `git@code.ipaynow.cn:clean_settle/we_cashier_front.git`
2. 运行 `npm i`安装全部依赖
3. 在根目录下运行 `npm run dev`
:::

## 分支说明
::: danger 
- `生产环境分支`为`master`,`开发`时需从此分支拉取代码。
- `测试环境分支`为`opt-test`，`测试`时提醒相关人员从此分支拉取测试
:::


## 主要文件
::: danger 
- `src/main/index.js`: 主进程
- `src/render`: 渲染进程
- `src/render/components`: 公共组件
:::


## 开发注意事项
::: danger 
- `开发注意`: 每次修改`src/main/index.js`时 要重新运行`npm run dev` 不然进程不会清除, 会造成内存堆积; 要及时查看`任务管理器`, 必要时可以结束多余的`electron进程`
- `版本号`: 每次修改要在`package.json`更新版本号, 对应的字段为`version`和`description`
- `打包前`: 最好将`build目录`里面的内容删除掉
- `打包为64位`: `npm run build`
- `打包为32位`: `npm run build32`
- `上线注意事项`: 打包完成后需将`build目录`下的`electron-builder.yaml`, `latest.yml`和`开张吉祥 Setup x.x.x.exe`三个文件压缩成`zip`文件
:::

**同时阅读:** 

- [生产环境代码发布注意事项](/生产环境代码发布注意事项/必看.md)
