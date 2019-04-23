#### 七、 Px2rem
`vue-app-cli`会自动完成px至rem的转换工作，比如：
```
<template>
    <p class="rem-text">px2rem</p>
</template>
<script>...</script>  
<style>
    .rem-text {
        font-size: 37.5px;
    }
</style>
```

最终转换后的样式为：`.rem-text{font-size:1rem;}`

* 默认的基准值为37.5px（75px / 2dpi），与flexible的`root-font-size`保持一致。如果与设计稿的基准值有偏差，可以在`config.js`中修改。