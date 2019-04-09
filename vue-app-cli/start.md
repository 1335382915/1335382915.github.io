### 起步
*由于工程使用到了`sass`，请确保您的电脑已经安装了`python`

方法一：你需要将该项目克隆到本地，安装相关依赖
```
git clone https://github.com/1335382915/vue-app-cli.git
//进入到vue-app-cli目录下
npm i
```

除此之外，你还需要将该工程链接到全局执行环境中，方便全局使用
```
npm link
```

方法二：`npm i vue-app-cli -g`

现在，我们随便进入一个文件夹，输入`vue-app`命令，看看是否可以全局使用了

![](https://upload-images.jianshu.io/upload_images/1495096-29a6e471537ccb32.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


* -v | --version：查看vue-app-cli版本
* -h | --help：查看帮助
* init | i  <projectName>：创建一个新的项目
* add | a  <pageName>：添加新的页面
* list | l ：列举出所有页面
* delete | d <pageName>：删除指定页面