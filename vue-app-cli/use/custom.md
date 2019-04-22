#### 七、 自定义配置（webpack.config.js）
配置项位于`config.js`中，目前仅支持配置环境和通用代码块（新增rem基准值配置）：
```
module.exports = {
	isDevelopment: true,
	commonModule: ["./js/common.js"],
	remUnit: 37.5,
	//开启vconsole，详见“真机调试”
	vconsole: true
}
```