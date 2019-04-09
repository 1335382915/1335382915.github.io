# Switch

#### 开关，用于设置两个相互斥的选项。

```
<Switch
  tintColor = {'gray'}
  onTintColor = {'#f75b25'}
  thumbTintColor = {'#68b1ed'}
  tintBorderColor = {'gray'}
  onTintBorderColor = {'#f75b25'}
  thumbBorderColor = {'#68b1ed'}
  value = {this.state.value}
  onValueChange = {value => this.setState({value: value})}
/>
```

```jsx
/*react*/
<script>
  const Switch = xui.Switch
  export default class SwitchEX extends React.Component {
      constructor(props) {
          super(props)
          this.state = {
              value: false
          } 
      }
    render() {
      return (
        <Switch
            tintColor = {'gray'}
            onTintColor = {'#f75b25'}
            thumbTintColor = {'#68b1ed'}
            tintBorderColor = {'gray'}
            onTintBorderColor = {'#f75b25'}
            thumbBorderColor = {'#68b1ed'}
            value = {this.state.value}
            onValueChange = {value => this.setState({value: value})}
        />
      )
    }
  }
</script>
```

<br/>

属性 | 说明 | 类型 | 默认值
----|-----|------|------
value | 开关值（true or false）| boolean | `false`
onValueChange | value发生改变时的回调 | function | `() => {}`
onTintColor | 开关打开时背景色 | string | `"#00b247"`
tintColor | 开关关闭时背景色 | string | `"white"`
thumbTintColor | 圆形按钮背景色 | string | `"white"`
onTintBorderColor | 开关打开时边框颜色 | string | `"#eeeeee"`
tintBorderColor | 开关关闭时边框颜色 | string | `"#eeeeee"`
thumbBorderColor | 圆形按钮边框颜色 | string | `"#eeeeee"`