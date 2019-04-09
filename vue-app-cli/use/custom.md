#### 六、 自定义配置（webpack.config.js）
配置项位于`config.js`中，目前仅支持配置环境和通用代码块：
```
module.exports = {
	isDevelopment: true,
	commonModule: ["./js/common.js"]
}
```