# Radio

#### 单选框

React

```
<Radio.Group value = {this.state.value} onChange = {value => this.setState({value})} >
  <Radio id = {'radio_1'} value = {'A'} >A</Radio>
  <Radio id = {'radio_2'} value = {'B'} >B</Radio>
  <Radio id = {'radio_3'} value = {'C'} >C</Radio>
</Radio.Group>
```

ReactNative

```
<Radio.Group defaultValue = {'B'} >
  <Radio value = {'A'} >A</Radio>
  <Radio value = {'B'} >B</Radio>
  <Radio value = {'C'} >C</Radio>
</Radio.Group>
```

```jsx
/*react*/
<script>
  const Radio = xui.Radio
  export default class RadioEX extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            vale: ''
        }
    }
    render() {
      return (
        <Radio.Group value = {this.state.value} onChange = {value => this.setState({value})} >
            <Radio id = {'radio_1'} value = {'A'} >A</Radio>
            <Radio id = {'radio_2'} value = {'B'} >B</Radio>
            <Radio id = {'radio_3'} value = {'C'} >C</Radio>
        </Radio.Group>
      )
    }
  }
</script>
```

<br/>



属性 | 说明 | 类型 | 默认值
----|-----|------|------
`Radio.Group` defaultValue | 默认值 | any | `null`
`Radio.Group` value | value --> 受控 | any | `null`
`Radio.Group` onChange | group value更改时的回调，返回当前value | function | `() => {}`
`Radio.Group` disabled | 是否禁用 | boolean | `false`
`Radio.Group` groupStyle | 自定义group容器样式 | object | `{}`
id `h5 only` | radio id `required` | string | `null`
value | radio value | any | `null`
checked | 是否勾选（受控）| boolean | `null`
radioColor `rn only` | radio颜色 | string | `"#ff4f4f"`
radioStyle | 自定义radio样式 | object | `{}`
textStyle | 自定义文本样式 | object | `{}`
disabled | 是否禁用 | boolean | `false`