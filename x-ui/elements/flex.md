# Flex

#### 基于flex实现的栅格系统。

React

```
<Flex flexStyle = {{marginBottom: '0.4rem'}} >
  <Flex.Item>
    <div className = {'flex-item'} style = {{backgroundColor: '#108EE9'}} >
      <p className = {'flex-text'} >50%</p>
    </div>
  </Flex.Item>
  <Flex.Item>
    <div className = {'flex-item'} style = {{backgroundColor: '#4badf3'}} >
      <p className = {'flex-text'} >50%</p>
    </div>
  </Flex.Item>
</Flex>
```

ReactNative

```
<Flex 
  justify = {'flex-end'} 
  align = {'flex-end'} 
  flexStyle = {{marginBottom: 20}} 
>
  {
    (function() {
      return [1,2,3].map((item, index) => {
        let secondViewStyle = {};
        if(index == 1) {
          secondViewStyle = {
            height: 20
          }
        }
        return (
          <View 
            key = {index} 
            style = {[styles.wrapStyle, secondViewStyle, {marginLeft: 10, marginRight: 0}, {backgroundColor: '#8c62f9'}]} 
          >
            <Text style = {styles.flexText} >修改次轴</Text>
          </View>
        )
      })
    })()
  }
</Flex>
```

```jsx
/*react*/
<script>
  const Flex = xui.Flex
  export default class FlexEX extends React.Component {
    render() {
      return (
        <Flex flexStyle = {{marginBottom: '0.4rem'}} >
            <Flex.Item>
                <div className = {'flex-item'} style = {{backgroundColor: '#108EE9'}} >
                <p className = {'flex-text'} >50%</p>
                </div>
            </Flex.Item>
            <Flex.Item>
                <div className = {'flex-item'} style = {{backgroundColor: '#4badf3'}} >
                <p className = {'flex-text'} >50%</p>
                </div>
            </Flex.Item>
        </Flex>
      )
    }
  }
</script>
```

<br/>

属性 | 说明 | 类型 | 默认值
----|-----|------|------
justify | 主轴对齐方式 | string, flex-justify-conent | `"flex-start"`
align | 次轴对齐方式 | string, flex-align-items (`h5`比`rn`多了`stretch`和`baseline`) | `"flex-start"`
wrap| 折行方式 | string, flex-wrap | `"wrap"`
flexStyle | 容器样式 | object | `{}`
`Flex.Item` flex | 空间分配比例 | number | `1`
`Flex.Item` flexItemStyle | flexItem样式 | object | `{}` 