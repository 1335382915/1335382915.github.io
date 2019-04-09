#### 七、 开发原生 app
`vue-app-cli`可以很容易地集成到`hbuilder`中，只需要以下几步：
1. 在`hbuilder`中创建`移动app`项目，建议选择`mui项目`模板，我们为该项目命名为`vueApp2`
![](https://upload-images.jianshu.io/upload_images/1495096-4d884b66a656140b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

2. 将`vueApp`的所有文件复制到`vueApp2`中
3. 在`manifest.json`中配置`unpackage`选项来忽略`node_modules`。或者将`node_modules`文件夹移动到`vueApp2`的外层目录中，否则`node_modules`也会作为项目的一部分，极大降低app打包速度。
最终的目录结构：

![](https://upload-images.jianshu.io/upload_images/1495096-42b9e615cae1d79e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://upload-images.jianshu.io/upload_images/1495096-fb437cf5420832b0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)