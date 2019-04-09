# Search

#### 搜索框，一般放置于头部导航下方，用于搜索信息，支持弹出层。

React

```
<Search
  defaultValue = {'test'}
  placeholder = {'输入任何内容'}
  showCancelButton
/>
```

ReactNative

```
<Search
  defaultValue = {'test'}
  value = {this.state.value}
  onChange = {(value) => {this.setState({value})}}
  showModal
  modalComponent = {
    <View style = {styles.component} >
      <Text style = {{fontSize: 16}} >您自己的组件</Text>
    </View>
  }
/>
```

```jsx
/*react*/
<script>
  const Search = xui.Search
  export default class SearchEX extends React.Component {
    render() {
      return (
        <Search
            defaultValue = {'test'}
            placeholder = {'输入任何内容'}
            showCancelButton
        />
      )
    }
  }
</script>
```

<br/>

属性 | 说明 | 类型 | 默认值
----|-----|------|------
defaultValue | 默认值 | string | `""`
value | value（受控）| string | `""`
placeholder | 提示信息 | string | `"搜索"`
cancelText | “取消”按钮的文本 | string | `"取消"`
touchableOpacity `rn only` | 触摸透明度 | number | `0.8`
onChange | 搜索框内容发生改变时触发 | function | `() => {}`
onSubmit | 提交时触发 | function | `() => {}`
onFocus | 聚焦时触发 | function | `() => {}`
onBlur | 失焦时触发 | function | `() => {}`
onCancel | 点击“取消”时触发 | function | `() => {}`
showModal | 是否启动modal模式 | boolean | `false`
showCancelButton | 是否始终显示“取消”按钮 | boolean | `false`
disabled | 是否禁用 | boolean | `false`
modalComponent | 如果开启了modal模式，使用该属性定义Modal组件内的子元素 | element | `null`