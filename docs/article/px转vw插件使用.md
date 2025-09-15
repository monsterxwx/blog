## 安装

```Shell
pnpm install postcss-px-to-viewport
```
## 配置

方式1：放在根目录：`postcss.config.js`

```JavaScript
import createPlugin from 'postcss-px-to-viewport'

export default {
  plugins: [
    createPlugin({
      // Options...
      unitToConvert: 'px',
      viewportWidth: 1920,
      unitPrecision: 2,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 2,
      mediaQuery: false,
      replace: true,
      exclude: undefined,
      include: undefined,
      landscape: false,
      landscapeUnit: 'vh',
      landscapeWidth: 568,
    }),
  ],
}
```


方式2：放在`vite.config.js`

```JavaScript
import pxtovw from 'postcss-px-to-viewport'


const big_screen_pxtovw = pxtovw({
    unitToConvert: 'px', // 要转化的单位
    viewportWidth: 1920, // UI设计稿的宽度
    unitPrecision: 6, // 转换后的精度，即小数点位数
    propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
    viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
    fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
    selectorBlackList: [], // 指定不转换为视窗单位的类名，
    minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
    mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
    replace: true, // 是否转换后直接更换属性值
    exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
    landscape: false // 是否处理横屏情况
})

export default defineConfig({
  plugins: [vue()],
  server:{
    port: 3000
  },
  css:{
    postcss:{
      plugins:[big_screen_pxtovw]
    }
  }
})
```

## xy-postcss-px-to-viewport

支持`include`字段，原先的没有更新至最新版

`postcss.config.js`

```JavaScript
module.exports = {
    plugins: {
        'xy-postcss-px-to-viewport': {
            unitToConvert: 'px', // 要转化的单位
            viewportWidth: 1920, // UI设计稿的宽度
            unitPrecision: 6, // 转换后的精度，即小数点位数
            propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
            viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
            fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
            selectorBlackList: [], // 指定不转换为视窗单位的类名，
            minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
            mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
            replace: true, // 是否转换后直接更换属性值
            include: [/\\src\\views\\statisticalView\\/i],
            landscape: false // 是否处理横屏情况
        }
    }
}
```


