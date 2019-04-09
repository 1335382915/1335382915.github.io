# Checkbox

#### 多选框

React

```
<Checkbox.Group value = {this.state.value} onChange = {value => this.setState({value})} >
  <Checkbox id = {'checkbox_1'} value = {'A'} >A</Checkbox>
  <Checkbox id = {'checkbox_2'} value = {'B'} >B</Checkbox>
  <Checkbox id = {'checkbox_3'} value = {'C'} >C</Checkbox>
</Checkbox.Group>
```

ReactNative

```
<Checkbox.Group defaultValue = {['B']} >
  <Checkbox value = {'A'} >A</Checkbox>
  <Checkbox value = {'B'} >B</Checkbox>
  <Checkbox value = {'C'} >C</Checkbox>
</Checkbox.Group>
```

```jsx
/*react*/
<script>
    const Checkbox = xui.Checkbox
    export default class CheckboxEX extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                value: ['A', 'B']
            }
        }
        render() {
            return (
                <div>
                    <Checkbox.Group value = {this.state.value} onChange = {value => this.setState({value})} >
                        <Checkbox id = {'checkbox_1'} value = {'A'} >A</Checkbox>
                        <Checkbox id = {'checkbox_2'} value = {'B'} >B</Checkbox>
                        <Checkbox id = {'checkbox_3'} value = {'C'} >C</Checkbox>
                    </Checkbox.Group>
                </div>
            )
        }
    }
</script>
```

<br/>

属性 | 说明 | 类型 | 默认值
----|-----|------|------
`Checkbox.Group` defaultValue | 默认value | any | `null`
`Checkbox.Group` value | value（受控）| any | `null`
`Checkbox.Group` onChange | 多选框勾选值发生改变时的回调，将会返回新的勾选值 | function | `() => {}`
`Checkbox.Group` disabled | 是否禁用 | boolean | `false`
`Checkbox.Group` groupStyle | 自定义group容器样式 | object | `{}`
id `h5 only` | checkbox id `required` | string | `null`
value | checkbox value | any | `null`
checked | 是否勾选（受控）| boolean | `null`
checkboxColor `rn only` | 颜色 | string | `#ff4f4f`
checkboxStyle | 自定义样式 | object | `{}`
textStyle | 自定义文本样式 | object | `{}`
disabled | 是否禁用 | boolean | `false`
onChange | 每次点击时的回调，返回勾选状态（bool） | function | `() => {}`