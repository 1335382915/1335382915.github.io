# Badge

#### 角标，用于消息数量的显示以及一般的小型徽标。当含有子组件时，角标悬浮在自组件右上角，num生效，text失效；当不含自组件时，角标作为单独的徽标，text失效，num生效。

React

```
const boxContainer = <div className = {'badge-box'} ></div>
<Badge num = {1} style = {{marginRight: '0.8rem'}} >{boxContainer}</Badge>
<Badge text = {'券'} defaultBackColor = {'#f19736'} />
```

ReactNative

```
const containerBox = {
  width: 30,
  height: 30,
  backgroundColor: 'gray'
}
<Badge num = {1} style = {{marginRight: 30}} >
  <View style = {containerBox} ></View>
</Badge>
```

```jsx
/*react*/
<script>
  const Badge = xui.Badge
  export default class BadgeEX extends React.Component {
    render() {
    const boxContainer = <div className = {'badge-box'} ></div>
      return (
        <div>
            <Badge num = {1} style = {{marginRight: '0.8rem'}} >{boxContainer}</Badge>
            <Badge text = {'券'} defaultBackColor = {'#f19736'} />
        </div>
      )
    }
  }
</script>
```

<br/>

属性 | 说明 | 类型 | 默认值
----|-----|------|------
num | 角标数字 | number | `0`
defaultBackColor | 角标背景色 | string | `"#ff4f4f"`
fontColor | 角标文字颜色 | string | `"white"`
text | 自定义角标内容 | string | `""`
style | 自定义角标样式 | object | `{}`