#### 八、 自定义配置（webpack.config.js）
配置项位于`config.js`中：
```
module.exports = {
	isDevelopment: true,
	commonModule: ["./js/common.js"],
	remUnit: 37.5,
	//开启vconsole，详见“真机调试”
	vconsole: true
}
```

无论更改哪一项，均需要重新`npm start`才能生效

<!--
5月初放开，晚些更新
module.exports = {
	isDevelopment: true,
	devtoolService: false,
	commonModule: ["./js/common.js"],
	remUnit: 37.5,
	//开启vconsole，详见“真机调试”
	vconsole: true
}
-->