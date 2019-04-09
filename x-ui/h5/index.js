import Counter from './component/counter'
import ActionSheet from './component/actionSheet'
import Badge from './component/badge'
import Button, { BUTTON_SIZE, BUTTON_TYPE } from './component/button'
import Card from './component/card'
import Carousel from './component/carousel'
import Checkbox from './component/checkbox'
import Collapse from './component/collapse'
import DrawerLayout, { DRAWER_POSITION } from './component/drawerLayout'
import Flex from './component/flex'
import Header from './component/header'
import Icon from './component/icon'
import List from './component/list'
import Pagination from './component/pagination'
import Radio from './component/radio'
import Search from './component/search'
import Slider from './component/slider'
import Switch from './component/switch'
import TabBar from './component/tabBar'
import Toast from './component/toast'

import React from 'react' 
import ReactDOM from 'react-dom'


window.xui = {
    Counter,
    ActionSheet,
    Badge,
    Button,
    BUTTON_SIZE,
    BUTTON_TYPE,
    Card,
    Carousel,
    Checkbox,
    Collapse,
    DrawerLayout,
    DRAWER_POSITION,
    Flex,
    Header,
    Icon,
    List,
    Pagination,
    Radio,
    Search,
    Slider,
    Switch,
    TabBar,
    Toast
}


// import React from 'react' 
// import ReactDOM from 'react-dom'
class Application extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const imgArr = ['../image/1.jpeg', '../image/2.jpeg', '../image/3.jpeg'];
        return (
            <div>
                    <Carousel
                        width = { '100vw' }
                        height = { '30vh' }
                        autoPlay = {false} 
                        index = {2} 
                        onIndexChanged = {(index) => console.log(index)}
                    >
                        {
                            imgArr && imgArr.map((url, index) =>
                            <img key = { index } src = { url }/>)
                        }
                    </Carousel>
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



ReactDOM.render(<Application/>, document.getElementById('app'));