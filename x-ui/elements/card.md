# Card

#### 卡片视图，用于详细信息的展示。

React

```
<Card cardStyle = {margin15Ver} >
  <Card.Header>
    <p className = {'intro-text'} >这是一个标题</p>
  </Card.Header>
  <Card.Body>
    <p className = {'intro-text'} >这是一个同时使用到了Card.Header、Card.Body、Card.Footer的卡片。</p>
  </Card.Body>
  <Card.Footer>
    <p className = {'intro-text'} >底部左侧</p>
    <p className = {'intro-text'} >底部右侧</p>
  </Card.Footer>
</Card>
```

ReactNative

```
<Card cardStyle = {{marginHorizontal: 15, borderRadius: 8}} >
  <Card.Header>
    <Text style = {{color: '#333333', fontSize: 16, fontWeight: 'bold'}} >标题</Text>
  </Card.Header>
  <Card.Body>
    <Text style = {{color: '#666666'}} >考虑到卡片的样式因需求的不同而不同，我们没有规定卡片所嵌套的组件的样式，这需要您自己定制。</Text>
  </Card.Body>
  <Card.Footer footerStyle = {{paddingVertical: 10}} >
    <Text style = {{color: '#68b1ed'}} >喜欢</Text>
    <Text style = {{color: '#68b1ed'}} >更多</Text>
  </Card.Footer>
</Card>
```

```jsx
/*react*/
<script>
    const Card = xui.Card;
    export default class CardEx extends React.Component {
    render() {
      return (
        <div>
            <Card cardStyle = {{margin: '15px'}} >
                <Card.Header>
                    <p className = {'intro-text'} >这是一个标题</p>
                </Card.Header>
                <Card.Body>
                    <p className = {'intro-text'} >这是一个同时使用到了Card.Header、Card.Body、Card.Footer的卡片。</p>
                </Card.Body>
                <Card.Footer>
                    <p className = {'intro-text'} >底部左侧</p>
                    <p className = {'intro-text'} >底部右侧</p>
                </Card.Footer>
            </Card>
        </div>
      )
    }
  }
</script>
```

<br/>

属性 | 说明 | 类型 | 默认值
----|-----|------|------
`Card` cardStyle | 卡片基本样式 | object | `{}`
`Card.Header` headerStyle | 头部样式 | object | `{}`
`Card.Body` bodyStyle | 主要内容体样式 | object | `{}`
`Card.Footer` footerStyle | 底部样式 | object | `{}`