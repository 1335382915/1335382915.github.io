#### 十、 单独提取通用css文件
我们可以使用`extract-text-webpack-plugin`将所有模块导入的css单独提取成一个css文件，然而这会导致生成的css文件有可能存在彼此重复的部分：
```
//home/main.js
import '../../css/basic.scss';
import '../../css/home.scss';
//user/main.js
import '../../css/basic.scss';
import '../../css/user.scss';

//打包后
//home/main_[8位hash].bundle.css和home/main_[8位hash].bundle.css均含有basic.scss的内容，重复！
```
如何在这基础上将通用的样式单独提取是一个难题，我目前的解决方案是将`basic.scss`作为公共模块的一部分：
```
//common/app.js
//将basic.scss作为公共模块，
import '../css/basic.scss';
...js逻辑
```
由于`app.js`被配置成了公共模块，`CommonsChunkPlugin`会将其单独打包，引入的css也会被`extract-text-webpack-plugin`抽取成单独的`vendor_[8位hash].bundle.css`。

如果你有更好的解决方案，欢迎提供`issue`。
