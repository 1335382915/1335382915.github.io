# Toast

#### 小型提示框

```
<Button onPress = {() => this.toast.show({
  content: '取消遮罩层',
  mask: false
})} >取消遮罩层</Button>
<Toast ref = {toast => this.toast = toast} />
```

```jsx
/*react*/
<script>

  const Toast = xui.Toast
  const Button = xui.Button
  export default class ToastEX extends React.Component {
    render() {
        return (
            <div>
                <Button onPress = {() => this.toast.show({
                    content: '取消遮罩层',
                    mask: false
                })} >取消遮罩层</Button>
                <Toast ref = {toast => this.toast = toast} />
            </div> 
        )
    }
  }
</script>
```
<br>

#### 全局提示

React

```
//根js
componentDidMount() {
  window.addEventListener('showToast', e => {
    this.rootToast.show(window.toastConfig);
  })
}
render() {
  return (
    <div>
      <Router history={hashHistory} routes = {routerConfig} />
        <Toast ref = {toast => this.rootToast = toast} />
    </div>
  )
}

//子组件
<Button onPress = {() => {
  window.toastConfig = {
    content: '全局提示',
    mask: false
  }
  window.dispatchEvent(new Event('showToast'))
}} >全局提示</Button>
```

ReactNative

```
//根js
componentDidMount() {
  DeviceEventEmitter.addListener('showToast', (config) => {
    this.rootToast.show(config);
  })
}
render() {
  return (
    <View style = {{flex: 1}} >
      <Navigator />
      <Toast ref = {toast => this.rootToast = toast} />
    </View>
  );
}

//子组件
<Button 
  onPress = {() => DeviceEventEmitter.emit('showToast', {
    content: '全局提示',
    mask: false
})} >全局
```

<br/>

配置项 | 说明 | 类型
----|-----|------
content | 提示信息 | string
duration | 持续时间 | number (ms)
mask | 是否使用遮罩层，默认为true，使用遮罩层的话在toast显示期间无法对屏幕进行任何操作 | boolean