# Counter

#### 计数器，数字选择框。

```
<Counter defaultValue = {5} stepNum = {2} minValue = {1} maxValue = {9} />
```

```jsx
/*react*/
<script>
  const Counter = xui.Counter
  export default class CounterEX extends React.Component {
    render() {
      return (
        <Counter defaultValue = {5} stepNum = {2} minValue = {1} maxValue = {9} />
      )
    }
  }
</script>
```

<br/>

属性 | 说明 | 类型 | 默认值
----|-----|------|------
defaultValue | 计数器默认值 | number | `null`
value | 计数器的值 | number | `null`
maxValue | 最大值 | number | `99`
minValue | 最小值 | number | `0`
stepNum | 跨度值 | number | `1`
btnWidth `rn only` | 按钮宽度 | number | `35`
containerHeight `rn only` | 总高度 | number | `30`
inputWidth `rn only` | 输入框宽度 | number | `40`
borderColor | 边框颜色 | string | `"#d5d3d3"`
btnColor | 按钮颜色 | string | `"#eeeeee"`
onChange | value发生改变时的回调 | function | `() => {}`
disabled | 是否禁用 | boolean | `false`
getValue() `static` | 外部获取计数值 | function | | 