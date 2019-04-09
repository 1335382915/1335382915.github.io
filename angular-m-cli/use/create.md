#### 一、 创建工程

在命令行中输入`ng init NGApp`，等待片刻

![](http://upload-images.jianshu.io/upload_images/1495096-04c154cffc6bd046.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

进入到`NGApp`文件夹下，安装依赖`cd NGApp && npm i`

完成依赖安装后，我们需要先在命令行输入`npm run dll`生成`dll`文件（每个项目只需运行一次即可）。使用它的目的在于能够加快`webpack`的打包速度。之后，我们就可以使用`npm start`启动项目啦

![angular-m-cli](http://upload-images.jianshu.io/upload_images/1495096-517c77cb15a48c40?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

访问3005端口即可进入`mock`服务的配置页面

![](http://upload-images.jianshu.io/upload_images/1495096-80206821e105aba0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

下面我们来看一下目录结构

![](https://upload-images.jianshu.io/upload_images/1495096-c81c0fda847c73eb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



* `common`存放通用的js代码块
* `css`存放每个页面的样式文件，默认只有`home.scss`和全局样式`basic.scss`

* `doc`存放mock文档
* `entry`存放每个页面的入口js文件，例如：home页的入口文件为`entry/home/main.js`

```
import angular from 'angular';
import { instruction } from '../../common/app';
import '../../css/home.scss';

const homeCtrl = $scope => {
    $scope.pageInfo = 'Hello Angular';
}
const helloNG = () => ({
    restrict:'EACM',
    template:`<p class="home-title">{{pageInfo}}</p>`
});

angular.module('home', [])
    .controller('homeCtrl',['$scope', 
        $scope => homeCtrl($scope)
    ])
    .directive('helloNg', helloNG)
    .directive('ngText', instruction);
```

*使用es6去书写ng代码，能够大幅提高代码可读性和组织性
* `image`存放项目图片
* `mock2easy`
*   `node_modules`
* `pages`存放页面html，目录结构与entry一致，例如：home页的html文件为`pages/home/index.html`

```
<!DOCTYPE html>
<html ng-app="home">
<head>
    <title>Home</title>
    <script type="text/javascript" src="https://cdn.bootcss.com/angular.js/1.6.6/angular.min.js"></script>
    <script type="text/javascript" src="/entry/angular.dll.js"></script>
</head>
<body ng-controller="homeCtrl" ng-cloak>
    <div class="container" >
        <img src="../../image/angular.jpg"/>
    </div>
    <hello-ng></hello-ng>
    <ng-text></ng-text>
    <script type="text/javascript" src="/vendor.__bundle.js"></script>
    <script type="text/javascript" src="/home/main.__bundle.js"></script>
</body>
</html>
```

`angular.dll.js`就是之前`npm run dll`后生成的文件，`angular`的代码均被打包至此，并且作为静态文件存储。
最下面的两个 `script`标签引入的是虚拟内存中的文件。
以上三个标签均只在开发环境中使用。
* `package.json`
* `postcss.config.js`配置postcss，实现css前缀自动补齐
* `webpack_dll.config.js`配置`dll`，加快打包速度
* `webpack.config.js`