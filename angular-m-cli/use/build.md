#### 四、 生产环境
在命令行中输入`npm run build`，构建成功后我们可以看到目录中新产生了一个`build`文件夹：
```
├── build
│   ├── home
│   │   ├── index.html
│   │   ├── main_be2d1a1f.bundle.js //打包后的home所需js
│   │   └── main_be2d1a1f.bundle.css //打包后的home所需css
│   ├── user
│   │   ├── index.html 
│   │   ├── main_da36e4e0.bundle.js //打包后的user所需js
│   │   └── main_da36e4e0.bundle.css //打包后的user所需css
│   ├── 0_79ea9f41.bundle.js //按需加载的模块（如果你使用了按需加载的话）
│   ├── vendor_79ea9f41.bundle.css //打包后的通用css
│   └── vendor_79ea9f41.bundle.js //打包后的通用js
```

下一步，你并不需要手动将打包后的文件引入到`index.html`中，因为这个工作已经由angular-m-cli自动帮你完成，~~你只需要将`build`文件夹中的每个页面的~~
```
<script type="text/javascript" src="/entry/angular.dll.js"></script>
<script type="text/javascript" src="/vendor.__bundle.js"></script>
<script type="text/javascript" src="/pageName/main.__bundle.js">
```
~~删除即可。~~

~~`pageName`为你的页面名~~

更新说明：针对上述手动删除代码的问题编写了[del-dev-assets](https://github.com/1335382915/del-dev-assets)插件，实现了自动删除功能并集成到了该脚手架中，无需手动操作。

现在，你可以将`build`、`image`这两个文件夹存放至服务器了（如果你没有其他外部引入的资源）。

![](http://upload-images.jianshu.io/upload_images/1495096-3d572613e6e6c3b5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
