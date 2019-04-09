#### 二、 添加新页面
在命令行中输入`ng add user`，我们再一次启动项目，将url中的`home`改为`user`

![](http://upload-images.jianshu.io/upload_images/1495096-491d9bfd3203d6f3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](http://upload-images.jianshu.io/upload_images/1495096-ffb8cdc36c6c96ad.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


看似简单的操作，但实质上user的相关文件和配置已经自动生成
```
├── css
│   ├── basic.scss
│   ├── home.scss
│   └── user.scss
├── entry
│   ├── home
│   │   └── main.js
│   └── user
│       └── main.js
├── pages
│   ├── home
│   │   └── index.html
│   └── user
│       └── index.html
└── common
```
