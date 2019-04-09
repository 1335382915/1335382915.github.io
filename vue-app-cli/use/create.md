#### 一、 创建工程

在命令行中输入`vue-app init vueApp`，等待片刻

![](https://upload-images.jianshu.io/upload_images/1495096-76414d4eddee68ce.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


进入到`vueApp`文件夹下，安装依赖`cd vueApp && npm i`，之后使用`npm start`启动项目，双击`pages/home.html`

![vue-app-cli](https://upload-images.jianshu.io/upload_images/1495096-a98647dfbb9fff11.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


下面我们来看一下目录结构

![](https://upload-images.jianshu.io/upload_images/1495096-16283bf9c5cd55cd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

* `build`存放构建好的js和css
* `components`存放每个页面的根组件，你可以在每个文件夹内部扩展其他组件
* `css`存放页面样式，建议将通用样式和框架样式放入其中，页面自己的样式写入到`.vue`中
* `entry`存放每个页面的入口js文件，例如：home页的入口文件为`entry/home.js`
* `images`存放图片
* `js`存放页面逻辑，建议将通用逻辑和框架js放入其中，页面自己的逻辑写入到`.vue`中
* `pages`存放页面