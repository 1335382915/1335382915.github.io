#### 十、 真机调试

使用`hbuilder`真机调试时我们会发现，控制台会将所有日志`string`化，例如：

`console.log({type: 'object'})`
其输出结果为：
`[object Object]`

我们可以将其`json`化然后再输出到控制台，这种方案在绝大多数情况下是适用的。但是面对如下情形，这种方案则不再适用：

1. 复杂变量中包含了函数，在`json`化后会转换为`undefined`
2. 期望能够详细看到对象的原型链
3. 过于复杂的对象、数组，`json`化后导致控制台输出大量信息，不直观

针对以上问题，`vue-app-cli`在**1.3.0**版本中引入了[vconsole](https://github.com/1335382915/vConsole/blob/dev/README_CN.md)，能够像体验`chrome dev tool`般调试真机。该功能默认是开启的，位于`config.js`中，请在发布时将其关闭。

```
console.log({
  type: 'object',
  arr: [0,1,2,3,4,5],
  func: function() {
    return this
  }
})
```

![](https://upload-images.jianshu.io/upload_images/1495096-f31711aa6cf005d8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://upload-images.jianshu.io/upload_images/1495096-b09aa21ce2ef0666.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)