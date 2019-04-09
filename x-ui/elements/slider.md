# Slider

#### 滑块

```
<Slider
  progress = {1}
  minValue = {1}
  maxValue = {99}
  onChange = {val => this.setState({value2: val})}
/>
```

```jsx
/*react*/
<script>
  const Slider = xui.Slider
  export default class SliderEX extends React.Component {
    render() {
      return (
        <Slider
            progress = {1}
            minValue = {1}
            maxValue = {99}
            onChange = {val => this.setState({value2: val})}
        />
      )
    }
  }
</script>
```

<br/>

属性 | 说明 | 类型 | 默认值
----|-----|------|------
width | 滑块宽度 | number | `150 => rn`, `300 => h5(px)`
progress | 当前value值 | number | `0`
minValue | 滑块最小值 | number | `0`
maxValue | 滑块最大值 | number | `100`
barColor | 轨道颜色 | string | `"#d5d3d3"`
ballColor | 圆形按钮颜色 | string | `"#108ee9"`
crossColor | 已经过的轨道的颜色 | string | `"#108ee9"`
disabled | 是否禁用 | boolean | `false`
onChange | value发生改变时的回调 | function | `() => {}`
getValue() `static` | 外部获取滑块值 | function | |