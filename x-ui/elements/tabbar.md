# Tabbar

#### 选项卡，位于页面最底部，用于页面切换。

React

```
import {Home, Active, Timer, Settings} from './container';

constructor(props) {
  super(props);
  this.state = {
    currentTab: 'active'
  };
}
setTabItem(name, title, icon) {
  return (
    <TabBar.Item 
      changeTab = {(tab) => this.setState({currentTab: tab})}
      title = {title}
      name = {name}
      icon = {<Icon name = {icon} size = {25} color = {'#666666'} />}
      selectedIcon = {<Icon name = {icon} size = {25} color = {'#ff4f4f'} />}
    />
  )
}
setTabComponent(name, component) {
  return (
    <TabBar.Component name = {name} >
      {component}
    </TabBar.Component>
  )
}
renderTabItem() {
  let tabItems = [];
  tabItems.push(this.setTabItem('home', '首页', 'ios-home'));
  tabItems.push(this.setTabItem('active', '激活', 'ios-bulb'));
  tabItems.push(this.setTabItem('timer', '定时器', 'ios-clock'));
  tabItems.push(this.setTabItem('settings', '设置', 'ios-settings'));
  return tabItems;
}
renderTabComponents() {
  let tabComponents = [];
  tabComponents.push(this.setTabComponent('home', <Home/>));
  tabComponents.push(this.setTabComponent('active', <Active/>));
  tabComponents.push(this.setTabComponent('timer', <Timer/>));
  tabComponents.push(this.setTabComponent('settings', <Settings/>));
  return tabComponents;
}
render() {
  return (
    <TabBar 
      selectedTab = {this.state.currentTab} 
      items = {this.renderTabItem()} 
      components = {this.renderTabComponents()} 
    />
  )
}
```

ReactNative

```
import {Home, Active, Timer, Settings} from './container';
constructor(props) {
  super(props);
  this.state = {
    currentTab: 'active'
  }
}
renderTabItem(name, title, icon, component) {
  return (
    <TabBar.Item
      selected = {this.state.currentTab === name}
      changeTab = {(tab) => this.setState({currentTab: tab})}
      title = {title}
      name = {name}
      icon = {<Icon name = {icon} size = {25} color = {'#666666'} />}
      selectedIcon = {<Icon name = {icon} size = {25} color = {'#ff4f4f'} />}
      titleStyle = {{fontSize: 12, color: '#666666'}}
      selectedTitleStyle = {{fontSize: 12}}
    >
      {component}
    </TabBar.Item>
  )
}
render() {
  return (
    <TabBar hidesTabTouch>
      {this.renderTabItem('home', '首页', 'ios-home', <Home/>)}
      {this.renderTabItem('active', '激活', 'ios-bulb', <Active/>)}
      {this.renderTabItem('timer', '定时器', 'ios-clock', <Timer/>)}
      {this.renderTabItem('settings', '设置', 'ios-settings', <Settings/>)}
    </TabBar>
  )
}
```

```jsx
/*react*/
<script>

  const TabBar = xui.TabBar
  const Icon = xui.Icon
  class Home extends React.Component {
      render() {
          return (
              <div style={{width: '100%',height:'5rem',background: 'red'}}>Home</div>
          )
      }
  }
  class Active extends React.Component {
      render() {
          return (
              <div style={{width: '100%',height:'5rem',background: 'green'}}>Home</div>
          )
      }
  }
  class Timer extends React.Component {
      render() {
          return (
              <div style={{width: '100%',height:'5rem',background: 'yellow'}}>Home</div>
          )
      }
  }
  class Settings extends React.Component {
      render() {
          return (
              <div style={{width: '100%',height:'5rem',background: 'blue'}}>Home</div>
          )
      }
  }
  export default class TabbarEX extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
            currentTab: 'active'
        };
    }
    setTabItem(name, title, icon) {
        return (
            <TabBar.Item 
                changeTab = {(tab) => this.setState({currentTab: tab})}
                title = {title}
                name = {name}
                icon = {<Icon name = {icon} size = {25} color = {'#666666'} />}
                selectedIcon = {<Icon name = {icon} size = {25} color = {'#ff4f4f'} />}
            />
        )
    }
    setTabComponent(name, component) {
        return (
            <TabBar.Component name = {name} >
            {component}
            </TabBar.Component>
        )
    }
    renderTabItem() {
        let tabItems = [];
        tabItems.push(this.setTabItem('home', '首页', 'ios-home'));
        tabItems.push(this.setTabItem('active', '激活', 'ios-bulb'));
        tabItems.push(this.setTabItem('timer', '定时器', 'ios-clock'));
        tabItems.push(this.setTabItem('settings', '设置', 'ios-settings'));
        return tabItems;
    }
    renderTabComponents() {
        let tabComponents = [];
        tabComponents.push(this.setTabComponent('home', <Home/>));
        tabComponents.push(this.setTabComponent('active', <Active/>));
        tabComponents.push(this.setTabComponent('timer', <Timer/>));
        tabComponents.push(this.setTabComponent('settings', <Settings/>));
        return tabComponents;
    }
    render() {
        return (
            <div style={{width:'100%',height: '5rem',position:'relative'}}>
                <TabBar 
                    selectedTab = {this.state.currentTab} 
                    items = {this.renderTabItem()} 
                    components = {this.renderTabComponents()} 
                />
            </div>
        )
    }
  }
</script>
```

<br/>

属性`rn` | 说明 | 类型 | 默认值
----|-----|------|------
tabBarStyle | 自定义tabBar容器样式 | object | `{}`
tabBarShadowStyle | 自定义tabBar最上方的分割线的样式 | object | `{}`
hidesTabTouch | 指定为true时，touchableOpacity将变为1 | boolean | `false`
`TabBar.Item` selected | 是否被选中 | boolean | `false`
`TabBar.Item` titleStyle | 自定义默认（未选中）时的文本样式 | object | `{}`
`TabBar.Item` selectedTitleStyle | 自定义选中时的文本样式 | object | `{}`
`TabBar.Item` title | 标题 | string | `""`
`TabBar.Item` name | 指定一个key | string | `""`
`TabBar.Item` tabStyle | 自定义每个TabBar.Item的容器样式 | object | `{}`
`TabBar.Item` icon | 未选中时的图标 | element | `null`
`TabBar.Item` selectedIcon | 选中时的图标 | element | `null`
`TabBar.Item` changeTab | 切换时触发，返回选中状态的item的name（key）| function | `() => {}`

属性`h5` | 说明 | 类型 | 默认值
----|-----|------|------
tabBarStyle | 自定义tabBar容器样式 | object | `{}`
tabBarShadowStyle | 自定义tabBar最上方的分割线的样式 | object | `{}`
items | tabbarItems | array | `[]`
components | tabbarComponents | array | `[]`
selectedTab | 选中的tab的name | string | `""`
`TabBar.Item` titleStyle | 自定义默认（未选中）时的文本样式 | object | `{}`
`TabBar.Item` selectedTitleStyle | 自定义选中时的文本样式 | object | `{}`
`TabBar.Item` title | 标题 | string | `""`
`TabBar.Item` name | 指定一个key | string | `""`
`TabBar.Item` tabStyle | 自定义每个TabBar.Item的容器样式 | object | `{}`
`TabBar.Item` icon | 未选中时的图标 | element | `null`
`TabBar.Item` selectedIcon | 选中时的图标 | element | `null`
`TabBar.Item` changeTab | 切换时触发，返回选中状态的item的name（key）| function | `() => {}`