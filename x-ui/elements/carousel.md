# Carousel

#### 轮播图，用于图片切换展示。

React

```
const imgArr = ['./image/1.jpg', './image/2.jpg', './image/3.jpg', './image/4.jpg'];
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
```
ReactNative

```
const style = {width: utils.window.width, height: 200}
<Carousel 
  carouselStyle = {{marginBottom: 20}} 
  width = {utils.window.width} 
  height = {200} 
  autoPlay = {false} 
  index = {2} 
  onIndexChanged = {(index) => console.log(index)}
>
  <Image source = {require('../../image/scenery.jpg')} style = {style } />
  <Image source = {require('../../image/carousel1.jpg')} style = {style} />
  <Image source = {require('../../image/swiper-bk.jpg')} style = {style} />
  <Image source = {require('../../image/carousel2.jpg')} style = {style} />
</Carousel>
```

```jsx
/*react*/
<script>
    const Carousel = xui.Carousel
    export default class CarouselEx extends React.Component {
        render() {
            const imgArr = ['../image/1.jpeg', '../image/2.jpeg', '../image/3.jpeg'];
            return (
                <div>
                    <Carousel
                        width = { '50vw' }
                        height = { '50vw' }
                        autoPlay = {false} 
                        index = {2} 
                        onIndexChanged = {(index) => console.log(index)}
                    >
                        {
                            imgArr && imgArr.map((url, index) =>
                            <img key = { index } src = { url }/>)
                        }
                    </Carousel>
                </div>
            )
        }
    }
</script>
```

<br/>

属性 | 说明 | 类型 | 默认值
----|-----|------|------
index | 当前索引值 | number | `0`
width | 轮播图宽度 `required` | number `rn`, any `h5` | `null`
height | 轮播图高度 `required` | number `rn`, any `h5` | `null`
autoPlay | 是否自动播放 | boolean | `true`
autoPlayTimeout | 自动播放时每张图片的切换时间 | number | `3000 => ms`
showDot | 是否展示圆点 | boolean | `true`
dotColor | 圆点的颜色 | string | `"#666666"`
activeDotColor | 激活圆点的颜色 | string | `"#68b1ed"`
dotWidth | 圆点的宽度 | number | `10 => rn`, `20 => h5(px)`
dotBottomOffset `rn only` | 原点距离轮播图底部的距离，默认为圆点的宽度 | number | `dotWidth`
onIndexChanged | 索引值发生改变时的回调 | function | `() => {}`
carouselStyle `rn only` | 轮播图样式 | object | `{}` 