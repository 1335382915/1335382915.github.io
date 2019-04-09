#### 八、 按需加载
angular-m-cli为你提供了按需加载功能，你只需要在相应的页面动态引入模块即可。
```
//home.js
//按需加载
$scope.getAsyncModule = function() {
    import('../../common/async.js').then(data => console.log(data))
 }
```
按需加载的模块在开发环境下会打包到`entry\[module_id]_bundle.js`，在生产环境下会打包到`build/[module_id]_[8位hash].js`。
