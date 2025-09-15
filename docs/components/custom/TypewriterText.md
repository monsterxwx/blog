<script setup>
import TypewriterText from '@/components/TypewriterText.vue';

</script>

# 打印机效果

<div class="m-[50px_0]">
  <TypewriterText color="#32c5ff" :delSpeed="1" :list="['大家好','给大家拜年了']" />
</div>


## props

| 属性       |                   含义                    |  类型   |    默认值 |
| ---------- | :---------------------------------------: | :-----: | --------: |
| color      |                 字体颜色                  | String  | '#389e0d' |
| fontSize   |                 字体大小                  | String  |    '46px' |
| fontWeight |                 字体粗细                  | String  |     '700' |
| maxSpeed   |               最大输入速度                | Number  |       150 |
| minSpeed   |               最小输入速度                | Number  |        50 |
| list       | 显示文字列表，如['大家好','给大家拜年了'] |  Array  |        [] |
| delSpeed   |               删除文字速度                | Number  |         2 |
| cursorText |                 光标文字                  | String  |         ' | ' |
| wait       |        文字输入完成后等待时间删除         | Number  |      2000 |
| waitInput  |            等待n毫秒后开始输入            | Number  |         0 |
| isStop     |                 是否停止                  | Boolean |     false |

## 代码

```vue
<template>
  <div class="typewriter-text">
    <p>
      <span
        :style="{color:color,fontSize:fontSize,fontWeight:fontWeight}"
      >
        {{ currentValue }}
      </span>
    </p>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'

const props = defineProps({
  color: {
    type: String, // 字体颜色
    default: '#389e0d'
  },
  fontSize: {
    type: String, // 字体大小
    default: '46px'
  },
  fontWeight: {
    type: String, // 字体粗细
    default: '700'
  },
  maxSpeed: { // 最大输入速度
    type: Number,
    default: 150
  },
  minSpeed: {
    type: Number, // 最小输入速度
    default: 50
  },
  list: {
    type: Array,
    default: () => ([])
  },
  delSpeed: {
    type: Number, // 删除文字速度
    default: 2
  },
  cursorText: {
    type: String, // 光标文字
    default: '|'
  },
  wait: {
    type: Number, // 文字输入完成后等待时间删除
    default: 2000
  },
  waitInput: {
    type: Number, // 等待n毫秒后开始输入
    default: 0
  },
  isStop: { // 是否停止
    type: Boolean,
    default: false
  }
})

const state = reactive({
  listIndex: 0, // 列表的索引
  text: '', // 当前显示的句子文字
  indexes: 0, // 光标索引
  tempText: '', // 临时句子截取文字
  timer: null // 定时器
})

const cleanTimer = () => { // 清除定时器
  if (state.timer) return
  clearTimeout(state.timer)
  state.timer = null
}

const getRanSpeed = () => { // 获取随机停止时间
  return Math.floor(Math.random() * (props.maxSpeed - props.minSpeed + 1)) + props.minSpeed
}

const getNowText = (i) => { // 设置并获取当前文字
  state.indexes = typeof i === 'number' ? i : state.indexes
  const tempText = state.text.substr(0, state.indexes)
  return tempText
}

const waiting = (ms) => { // 等待函数
  return new Promise((resolve, reject) => {
    cleanTimer()
    state.timer = setTimeout(resolve, ms)
  })
}

const currentValue = ref()
const render = (hc) => { // 设置 显示文字
  // 等待的时候 变量hc为true 所以不会显示光标 css里面加了光标闪烁效果
  currentValue.value = getNowText() + (hc ? '' : props.cursorText)
}

const backspace = () => { // 循环删除
  if (state.indexes > 0) {
    waiting(props.delSpeed).then(() => { // 删除
      state.indexes--
      render()
      backspace()
    })
  } else { // 删除完成
    if (state.listIndex >= props.list.length) state.listIndex = 0
    state.text = props.list[state.listIndex]
    state.listIndex++
    waiting(props.waitInput).then(loop)// 等待输入
  }
}

const loop = () => {
  if (!state.text) return
  if (state.text.length <= state.indexes) { // 当前文字打完了
    render(true)// 输出完成
    waiting(props.wait).then(backspace)// 等待删除
  } else {
    state.indexes++ // 设置下一次显示的文字索引
    render()// 显示到页面
    waiting(getRanSpeed()).then(loop)// 等待删除
  }
}

const start = () => { // 开始
  backspace()
}

onMounted(() => {
  start()
})
</script>

<style lang="scss" scoped>
.typewriter-text {
  --cursorText: "|";
  p {
    width: 500px;
    font-size: 46px;
    font-weight: 700;
    color: #333333;
    span::after {
      content: var(--cursorText);
      animation: blink 1s infinite;
      animation-timing-function: step-end;
    }
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
}

</style>


```