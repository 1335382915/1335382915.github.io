#### 五、 发布
即便`vue-app-cli`不区分环境，但当你准备部署到服务器或者打包成app时，仍然需要额外做一些操作：
* 可能你注意到~~`build`文件夹下有很多`.map`结尾的文件，这些文件的存在使得我们在调试错误时仍然可以将错误定位到原始文件中。这些文件占据了一定的存储空间，一般在线上不会用到。你需要做的就是将`build`文件夹删除，然后~~打包后的文件比较庞大，这是因为`vue-app-cli`实现了源码映射来帮助你更好地调试代码，在线上我们不会用到它，所以请在发布时将`config.js`中的`isDevelopment`设置为false，然后重新启动项目即可。
* 较大的图片会生成到`build/images`下，在发布时请将该图片文件夹删除。