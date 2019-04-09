# Button

#### 按钮，支持块级、内联级、全填充、边框填充、大小等设置。

```
import Button, {BUTTON_SIZE, BUTTON_TYPE} from './component/button'

<Button
  inline
  size = {BUTTON_SIZE.SMALL}
  type = {BUTTON_TYPE.GHOST}
  icon = {<Icon name = {'ios-close-circle'} color = {'white'} size = {14} />}
  onPress = {() => alert('button')}
>small</Button>
```

```jsx
/*react*/
<script>
    const Button = xui.Button
    const Icon = xui.Icon
      const BUTTON_SIZE = xui.BUTTON_SIZE
      const BUTTON_TYPE = xui.BUTTON_TYPE
  export default class ButtonEX extends React.Component {
    render() {
      return (
        <div>
            <Button
                inline
                size = {BUTTON_SIZE.SMALL}
                type = {BUTTON_TYPE.GHOST}
                icon = {<Icon name = {'ios-close-circle'} size = {14} />}
                onPress = {() => alert('button')}
            >small</Button>
        </div>
      )
    }
  }
</script>
```

<br/>

属性 | 说明 | 类型 | 默认值
----|-----|------|------
activeOpacity `rn only` | 按钮点击时的按钮透明度 | number | `0.6`
inline | 是否是行内按钮 | boolean | `false`
buttonColor | 按钮背景色 | string | `"#ff4f4f"`
buttonStyle | 自定义按钮样式 | object | `{}`
size | 按钮大小 | BUTTON_SIZE| `BUTTON_SIZE.MIDDLE`
type | 按钮类型 | BUTTON_TYPE| `BUTTON_TYPE.FILL`
textStyle | 文本样式 | object | `{}`
disabled | 是否禁用 | boolean | `false`
loading `rn only` | 是否显示loading圈 | boolean | `false`
loadingColor `rn only` | loading圈的颜色 | string | `"white"`
icon | 按钮小图标, 如果loading为true，则icon无效 | element | `null`
onPress | 触摸函数 | function | `() => {}` 