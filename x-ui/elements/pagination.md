# Pagination

#### 分页控件

```
<Pagination
  pageTotal = {5}
  previous = {'prev'}
  next = {'next'}
  activePageColor = {'#108EE9'}
  pageColor = {'#333333'}
  previousBtnStyle = {{backgroundColor: '#108EE9', borderWidth: 0}}
  previousTextStyle = {{color: 'white'}}
  nextBtnStyle = {{backgroundColor: '#108EE9', borderWidth: 0}}
  nextTextStyle = {{color: 'white'}}
/>
```

```jsx
/*react*/
<script>
  const Pagination = xui.Pagination
  export default class PaginationEX extends React.Component {
    render() {
      return (
        <Pagination
            pageTotal = {5}
            previous = {'prev'}
            next = {'next'}
            activePageColor = {'#108EE9'}
            pageColor = {'#333333'}
            previousBtnStyle = {{backgroundColor: '#108EE9', borderWidth: 0}}
            previousTextStyle = {{color: 'white'}}
            nextBtnStyle = {{backgroundColor: '#108EE9', borderWidth: 0}}
            nextTextStyle = {{color: 'white'}}
        />
      )
    }
  }
</script>
```

<br/>


属性 | 说明 | 类型 | 默认值
----|-----|------|------
defaultPageNum | 默认页码数 | number | `null`
pageNum | 页码数 | number | `null`
pageTotal | 总页数 | number | `1`
previous | 上一页按钮文字 | string | `"上一页"`
next | 下一页按钮文字 | stirng | `"下一页"`
hidePage | 隐藏数字 | boolean | `false`
hideButton | 隐藏按钮 | boolean | `false`
disabled | 禁用分页按钮 | boolean | `false`
onChange | 页码改变时的回调 | function | `() => {}`
activePageColor | 当前页码的颜色 | string | `"#ff4f4f"`
pageColor | 数字的颜色(/pageTotal) | string | `"#333333"`
previousBtnStyle | 上一页按钮样式 | object | `{}`
nextBtnStyle | 下一页按钮样式 | object | `{}`
previousTextStyle | 上一页文字样式 | object | `{}`
nextTextStyle | 下一页文字样式 | object | `{}`