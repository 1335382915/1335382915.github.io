# List

#### 列表，用于数据列表展示、基本内容呈现。

React

```
<List
  title = {'控制左右内容的对齐方式'}
  showRightIcon = {false}
  leftContent = {contacts}
  rightContent = {<span className = {'list-third-text'} >12:00</span>}
  rightContentFlex = {'flex-start'}
>
  <p className = {'list-second-text'} >左侧内容居中于List</p>
  <p className = {'list-third-text'} >右侧内容上对齐于List</p>
</List>
```

ReactNative

```
<List
  title = {'灰色置顶'}
  listStyle = {{marginBottom: 20}}
  showRightIcon = {false}
  btnConfig = {[{
    text: '置顶',
    width: 60,
    backgroundColor: 'gray',
    onPress: () => alert('您点击了置顶按钮')
  }, {
    text: '提醒',
    width: 60,
    backgroundColor: '#c4af00',
    onPress: () => alert('您点击了提醒按钮')
  }, {
    text: '删除',
    width: 60,
    onPress: () => alert('您点击了删除按钮')
  }]}
>
  <Text style = {{fontSize: 15}} >黄色提醒</Text>
  <Text style = {{fontSize: 14}} >红色删除</Text>
</List>
```

```jsx
/*react*/
<script>
  const List = xui.List
  export default class ListEX extends React.Component {
    render() {
      return (
        <List
            title = {'控制左右内容的对齐方式'}
            showRightIcon = {false}
            rightContent = {<span className = {'list-third-text'} >12:00</span>}
            rightContentFlex = {'flex-start'}
            >
            <p className = {'list-second-text'} >左侧内容居中于List</p>
            <p className = {'list-third-text'} >右侧内容上对齐于List</p>
        </List>
      )
    }
  }
</script>
```

<br/>

属性 | 说明 | 类型 | 默认值
----|-----|------|------
listStyle | list最顶层的样式，一般用于margin和padding | object | `{}`
contentStyle `rn only` | list内容样式，不包括按钮 | object | `{}`
title | 列表标题 | string | `""`
titleStyle | 自定义标题样式 | object | `{}`
rightContent | list右侧内容 | element | `null`
rightIcon | 右侧icon | element | `<Image/> => rn`, `<img/> => h5`
showRightIcon | 是否显示右侧icon | boolean | `false`
leftContent | list左侧内容 | element | `null`
leftContentFlex | 左侧内容的垂直布局 | string, flex-justify-content | `"center"`
rightContentFlex | 右侧内容的垂直布局 | string, flex-justify-content | `"center"`
onPress | list点击时的回调 | function | `() => {}`
touchOpacity `rn only` | list点击时的透明度 | number | `1`
showLine | 是否显示底部分割线 | boolean | `false`
lineMargin | 底部分割线的margin | number | `15 => rn`, `30 => h5(px)`
btnConfig `rn only` | 左滑显示出的按钮, `//[], {text, color, fontSize, backgroundColor, width}` | array | `[]`