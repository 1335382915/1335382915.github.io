# Collapse

#### 折叠面板，信息的展开与收起。

React

```
<Collapse
  accordion = {true}
  onChange = {(activeKey) => activeKey && alert(activeKey)}
  style = {{marginBottom: '0.4rem'}}
  activeKey = {'panel2'}
>
  <Collapse.Panel title = {'标题1'} panelKey = {'panel1'} >
    <p className = {'panel-margin'} >这是一个含有回调函数的手风琴模式的面板子组件</p>
  </Collapse.Panel>
  <Collapse.Panel title = {'标题2'} panelKey = {'panel2'} >
    <p className = {'panel-margin'} >这是一个含有回调函数的手风琴模式的面板子组件</p>
  </Collapse.Panel>
  <Collapse.Panel title = {'标题3'} panelKey = {'panel3'} >
    <p className = {'panel-margin'} >这是一个含有回调函数的手风琴模式的面板子组件</p>
  </Collapse.Panel>
</Collapse>
```

ReactNative

```
<Collapse
  accordion = {true}
  onChange = {(activeKey) => activeKey && ToastAndroid.show(activeKey, ToastAndroid.SHORT)}
  style = {{marginBottom: 20}}
>
  <Collapse.Panel title = {'标题1'} panelKey = {'panel1'} >
    <Text style= {styles.panel} >这是一个含有回调函数的手风琴模式的面板子组件</Text>
  </Collapse.Panel>
  <Collapse.Panel title = {'标题2'} panelKey = {'panel2'} >
    <Text style= {styles.panel} >这是一个含有回调函数的手风琴模式的面板子组件</Text>
  </Collapse.Panel>
  <Collapse.Panel title = {'标题3'} panelKey = {'panel3'} >
    <Text style= {styles.panel} >这是一个含有回调函数的手风琴模式的面板子组件</Text>
  </Collapse.Panel>
</Collapse>
```

```jsx
/*react*/
<script>
    const Collapse = xui.Collapse
    export default class CollapseEx extends React.Component {
        constructor(props) {
            super(props)
        }
        render() {
            return (
                <div>
                    <Collapse
                        accordion = {true}
                        onChange = {(activeKey) => activeKey && alert(activeKey)}
                        style = {{marginBottom: '0.4rem'}}
                        activeKey = {'panel2'}
                    >
                        <Collapse.Panel title = {'标题1'} panelKey = {'panel1'} >
                            <p className = {'panel-margin'} >这是一个含有回调函数的手风琴模式的面板子组件</p>
                        </Collapse.Panel>
                        <Collapse.Panel title = {'标题2'} panelKey = {'panel2'} >
                            <p className = {'panel-margin'} >这是一个含有回调函数的手风琴模式的面板子组件</p>
                        </Collapse.Panel>
                        <Collapse.Panel title = {'标题3'} panelKey = {'panel3'} >
                            <p className = {'panel-margin'} >这是一个含有回调函数的手风琴模式的面板子组件</p>
                        </Collapse.Panel>
                    </Collapse>
                </div>
            )
        }
    }
</script>
```

<br/>

属性 | 说明 | 类型 | 默认值
----|-----|------|------
activityKey | 当前激活项 | string, number | `""`
onChange | 任意一个折叠面板的折叠状态发生改变时的回调，返回当前激活项（string or JSON.stringify(stringArray)） | function | `() => {}`
accordion | 是否开启手风琴模式 | boolean | `false`
style | 自定义样式 | object | `{}`
`Collapse.Panel` key | id | string, number | `""`
`Collapse.Panel` title | 标题 | string, number | `""`