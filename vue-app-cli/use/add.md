#### 二、 添加新页面
在命令行中输入`vue-app add user`，之后再一次运行`npm start`，启动项目，将url中的`home`改为`user`

![](https://upload-images.jianshu.io/upload_images/1495096-bb1ccea0ce3739f7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](https://upload-images.jianshu.io/upload_images/1495096-9ef97e7398b24d03.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


看似简单的操作，但实质上user的相关文件和配置已经自动生成
```
├── components
│   ├── home
│   │   └── index.vue
│   └── user
│       └── index.vue
├── entry
│   ├── home.js
│   └── user.js
├── pages
│   ├── home.html
│   └── user.html
```