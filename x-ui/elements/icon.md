# Icon

#### 字体图标，基于`Ionicons`。

React

```
<Icon name = {'ios-analytics'} size = {20} color = {'#ff4f4f'} />
```

```jsx
/*react*/
<script>
  const Icon = xui.Icon
  export default class IconEX extends React.Component {
    render() {
      return (
        <Icon name = {'ios-analytics'} size = {20} color = {'#ff4f4f'} />
      )
    }
  }
</script>
```

<br/>

属性 | 说明 | 类型 | 默认值
----|-----|------|------
name | icon名字，参考`iconMap.json` | string | `"ios-add"`
size | icon大小 | number | `15 => rn`, `30 => h5(px)`
color | icon颜色 | string | `"#666666"`
iconStyle | 自定义icon样式 | object | `{}`