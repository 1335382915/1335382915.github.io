# ActionSheet

#### 底部弹出框，多用于分享、图片下载等操作。

React

```
<ActionSheet
  ref = {o => this.ActionSheet = o}
  options = {[
    'option1',
    <span className = {'header-text text-blue-color'} >{'option2'}</span>,
    <span className = {'intro-title main-text-color'} >{'删除'}</span>
  ]}
  title = {'自定义组件'}
  backdropPressToClose = {true}
  cancelButtonColor = {'#ff4f4f'}
  onPress = {() => alert(index)}
/>
<button onClick = {() => this.ActionSheet.show()} >open</button>
```

ReactNative

```
<ActionSheet
  ref = {o => this.ActionSheet = o}
  options = {[
    'option1',
    <Text style = {{color: '#108EE9', fontSize: 18}} >{'option2'}</Text>,
    <Text style = {{color: '#ff4f4f', fontSize: 20}} >{'删除'}</Text>
  ]}
  title = {'自定义组件'}
/>
<Button title = {'open'} onPress = {() => this.ActionSheet.show()} />
```

```jsx
/*react*/
<script>
  const ActionSheet = xui.ActionSheet
  const Button = xui.Button
  export default class ActionSheetEX extends React.Component {
    render() {
      return (
        <div>
          <ActionSheet
            ref = {o => this.ActionSheet = o}
            options = {[
                'option1',
                <span className = {'header-text text-blue-color'} >{'option2'}</span>,
                <span className = {'intro-title main-text-color'} >{'删除'}</span>
            ]}
            title = {'自定义组件'}
            backdropPressToClose = {true}
            cancelButtonColor = {'#ff4f4f'}
            onPress = {() => alert(index)}
            />
            <Button onPress = {() => this.ActionSheet.show()} >open</Button>
        </div>
      )
    }
  }
</script>
```
<br/>

属性 | 说明 | 类型 | 默认值
----|-----|------|------
title | 标题 | string | `""`
options | 按钮配置项 | array | `[]`
showCancelButton | 是否显示取消按钮 | boolean | `true`
cancelButtonTitle | “取消”按钮的标题 | string | `"取消"`
cancelButtonColor | “取消”按钮的颜色 | string | `"#108EE9"`
backdropPressToClose | 点击遮罩层时是否关闭ActionSheet | boolean | `false`
onPress | ActionSheet点击事件，会返回每个options的索引 | function | `() => {}`
show() `static` | 外部打开actionsheet | function | |
hide()  `static` | 外部关闭actionsheet | function | |