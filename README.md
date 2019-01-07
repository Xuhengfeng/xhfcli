## 快速搭建项目cli工具

1. 以github的代码为模板进行拷贝项目到本地 

2. 在`index.js`中修改配置预设模板

3. 在`package.json`中修改版本号。

    `"version": "x.y.z"`

4. 运行`npm publish --access=public` 发布
    > 发布之前请先将自己的库更新到最新版本

##### 安装使用

1. 全局安装 `npm install @xuhengfeng/xhfcli -g`

2. 构建项目 `xhfcli nuxtBlog myproject`