#### 六、 自定义配置（webpack.config.js）
1. 指定通用模块

通用模块在开发环境下会生成到虚拟内存中：`/vendor.__bundle.js`，在生产环境下会生成到`build/vendor_[8位hash].bundle.js`中。

```
//默认的通用模块
var commonModule1 = path.resolve(__dirname, customConfig.jsCommonDir + '/app');
//添加新的通用模块
var commonModule2 = path.resolve(__dirname, customConfig.jsCommonDir + '/myModule');

var entry = {
    vendor: [commonModule1, commonModule2]
};
```
通过以上配置，`common/app.js`和`common/myModule.js`均会被打包至vendor中。

2. 开发环境下修改自动打开的页面
```
var customConfig = {
    htmlDir: 'pages',
    htmlEntry: 'index.html',
    jsDir: 'entry',
    jsCommonDir: 'common',
    jsEntry: 'main.js',
    serverEntryDir: 'home', //将其修改为user即可自动打开user页面
    devServerPort: 3000
};
```