# DrawerLayout

#### 抽屉视图，用于左右侧弹出的菜单。

```
import DrawerLayout, {DRAWER_POSITION, DRAWER_LOCK_MODE, KEYBOARD_DISMISS_MODE} from './component/drawerLayout'
```

React

```
const drawerView = (
  <div>
    <List title = {'前往商城'} showLine />
    <List title = {'个人中心'} showLine />
    <List title = {'设置'} showLine />
    <p className = {'margin-15 header-text'}>I'm in the Drawer!</p>
  </div>
)
<Button 
  onPress = {() => this.drawer.openDrawer()} 
>打开右侧抽屉</Button>
<DrawerLayout 
  drawerPosition = {DRAWER_POSITION.RIGHT} 
  renderNavigationView = {() => drawerView} 
  ref = {drawer => this.drawer = drawer} 
/>
```

ReactNative

```
const navigationView = (
  <View style={{flex: 1, backgroundColor: '#fff'}} >
    <List title = {'前往商城'} />
    <List title = {'个人中心'} />
    <List title = {'设置'} />
    <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
  </View>
)
<DrawerLayout
  drawerWidth = {200}
  renderNavigationView = {() => navigationView}
  onDrawerOpen = {() => console.log('opend')}
  onDrawerClose = {() => console.log('closed')}
  onDrawerSlide = {() => console.log('sliding')}
  ref = {drawer => this.Drawer = drawer}
>
  <View style = {styles.container} >
    <Text style = {styles.introduction} >一个纯JavaScript实现的抽屉组件，具有和React Native的DrawerLayoutAndroid相同的api。我们舍弃了使用率较低的onDrawerStateChanged，并将所有枚举类型单独提取出来。</Text>
    <Button buttonColor = {'#108EE9'} onPress = {() => this.Drawer.openDrawer()} >打开抽屉</Button>
  </View>
</DrawerLayout>
```

```jsx
/*react*/
<script>
  const DrawerLayout = xui.DrawerLayout
  const Button = xui.Button
  const List = xui.List
  const DRAWER_POSITION = xui.DRAWER_POSITION
  export default class DrawerLayoutEX extends React.Component {
        render() {
        const drawerView = (
            <div>
                <List title = {'前往商城'} showLine />
                <List title = {'个人中心'} showLine />
                <List title = {'设置'} showLine />
                <p className = {'margin-15 header-text'}>I'm in the Drawer!</p>
            </div>
        )
        return (
            <div>
                <Button 
                    onPress = {() => this.drawer.openDrawer()} 
                >打开右侧抽屉</Button>
                <DrawerLayout 
                    drawerPosition = {DRAWER_POSITION.RIGHT} 
                    renderNavigationView = {() => drawerView} 
                    ref = {drawer => this.drawer = drawer} 
                />
            </div>
        )
    }
  }
</script>
```

<br/>

属性 | 说明 | 类型 | 默认值
----|-----|------|------
drawerWidth `rn only` | 抽屉宽度 | number | `200`
renderNavigationView | 抽屉内容 | function | `() => {}`
drawerPosition | 抽屉位置 | DRAWER_POSITION |`DRAWER_POSITION.LEFT`
drawerLockMode `rn only` | 抽屉状态 | DRAWER_LOCK_MODE | `DRAWER_LOCK_MODE.UNLOCKED`
keyboardDismissMode `rn only` | 键盘关闭模式 | KEYBOARD_DISMISS_MODE | `KEYBOARD_DISMISS_MODE.NONE`
onDrawerOpen | 抽屉打开时的回调 | function | `() => {}`
onDrawerClose | 抽屉关闭时的回调 | function | `() => {}`
onDrawerSlide `rn only` | 抽屉滑动时的回调 | function | `() => {}`
openDrawer() `static` | 外部打开抽屉 | function | |
closeDrawer() `static` | 外部关闭抽屉 | function | |