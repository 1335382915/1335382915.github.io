# 1335382915.github.io
总想要写点什么......

```jsx
/*react*/
<desc>
</desc>
<style>
  .author {
    color: #ff0000cc;
  }
</style>
<script>
  const Counter = xui.Counter
  const DrawerLayout = xui.DrawerLayout
  export default class Application extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        color: 'blue'
      }
      this.globalVariable = globalVariable
    }
    render() {
      return (
        <div>
          <div className='wrapper' ref={el => this.el = el}>
            <div>
            <p class='author'>author: {this.globalVariable}</p>
            <Counter></Counter>
            <button style={{color: this.state.color}} className='test' onClick={e => this.dr.openDrawer()}>test</button>
            </div>
            <DrawerLayout drawerPosition={xui.DRAWER_POSITION.RIGHT} ref={dr => this.dr = dr}/>
          </div>
        </div>
      )
    }
  }
</script>
```