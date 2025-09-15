## 安装vite-plugin-svg-icons

```Shell
pnpm i vite-plugin-svg-icons -D
```

## `vite-config.js`配置

```JavaScript
import path from 'path'
// 自动导入svg图标
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineConfig({
  plugins: [
    vue(),
    ...
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]'
    })
  ]
})

```

## `main.js`中导入即可使用

```Shell
import 'virtual:svg-icons-register'
```


## 封装`SvgIcon.vue`

```Vue
<template>
  <svg
    class="svg-icon"
    :style="{width:size+'px',height:size+'px'}"
    aria-hidden="true"
  >
    <use
      :href="symbolId"
      :fill="color"
    />
  </svg>
</template>

<script setup>
import { computed, toRefs } from 'vue'

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon'
  },
  name: {
    type: String,
    required: true
  },
  size: {
    type: [String, Number],
    default: '16'
  },
  color: { // 颜色不生效删除svg中的fill属性即可
    type: String
  }
})

const { prefix, name } = toRefs(props)

const symbolId = computed(() => `#${prefix.value}-${name.value}`)
</script>

<style lang="scss" scoped>
  .svg-icon {
    vertical-align: middle;
    fill: currentcolor;
    object-fit: contain;
  }
</style>

```

## 使用

```Vue
<template>
  <div>
          <SvgIcon
            size="20"
            name="test"
            color="red"
          />
  </div>
</template>

<script setup>
import SvgIcon from '@/components/SvgIcon.vue'
</script>

<style lang="scss" scoped>

</style>
```

svg存放目录与`vite.config.js`配置的路径`src/assets/icons`相同即可

