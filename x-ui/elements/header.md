# Header

#### 头部导航

React

```
<Header
  title = {'导航栏'}
  containerStyle = {{backgroundColor: '#01DD9B'}}
  rightBtn = {<span className = {'header-text'} style = {{color: 'white'}} >更多</span>}
/>
```

ReactNative

```
const rightBtn = (
  <TouchableOpacity onPress = {() => alert('更多')} >
    <Text style = {styles.more} >更多</Text>
  </TouchableOpacity>
)
<Header
  title = {'头部'}
  leftBtn = {rightBtn}
  containerStyle = {{backgroundColor: '#f0eded'}}
  titleStyle = {{color: '#333333'}}
/>
```

```jsx
/*react*/
<script>
  const Header = xui.Header
  export default class HeaderEX extends React.Component {
    render() {
      return (
        <Header
            title = {'导航栏'}
            containerStyle = {{backgroundColor: '#01DD9B'}}
            rightBtn = {<span className = {'header-text'} style = {{color: 'white'}} >更多</span>}
        />
      )
    }
  }
</script>
```

<br/>

属性 | 说明 | 类型 | 默认值
----|-----|------|------
containerStyle | 容器样式 | object | `{}`
title | 标题 | string | `""`
titleStyle | 标题样式 | object | `{}`
leftBtn | 自定义左侧按钮 | element | `null`
rightBtn | 自定义右侧按钮 | element | `null`