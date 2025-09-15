<script setup>
import ElectronicNumber from '@/components/ElectronicNumber.vue';
import {ref,onMounted} from 'vue'
import dayjs from 'dayjs'

const currentTime = ref(null)

onMounted(() => {
  setInterval(() => {
    currentTime.value = dayjs().format('YYYY-MM-DD HH:mm:ss')
  }, 200)
})
</script>

# 电子数字屏

<div class="m-[50px_0]">
  <ElectronicNumber :numbers="currentTime" numberSize="30px" />
</div>


## props

| 属性        |    含义    |  类型  |  默认值 |
| ----------- | :--------: | :----: | ------: |
| numbers     | 显示的数字 | String |         |
| numberColor |  数字颜色  | String | 'black' |
| numberSize  |  数字大小  | String |  '1rem' |


## 代码

```vue
<template>
  <div
    class="electronic-number"
  >
    <div
      v-for="(number, numberIndex) in numbersArr"
      :key="numberIndex"
      class="electronic-number-item"
    >
      <div
        v-for="(column, columnIndex) in getShowNum(number)"
        :key="columnIndex"
        class="item-column"
      >
        <div
          v-for="(row, rowIndex) in column"
          :key="rowIndex"
          :style="rowStyle(row)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  numbers: {
    type: String
  },
  numberColor: {
    type: String,
    default: 'black'
  },
  numberSize: {
    type: String,
    default: '1rem'
  }
})

const numbersArr = computed(() => {
  if (props.numbers && props.numbers.length > 0) {
    return props.numbers.split(',')
  } else {
    return []
  }
})

const getNumber = (num) => {
  switch (num.toString()) {
    case '0':
      return [
        [1, 1, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1]
      ]
    case '1':
      return [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0]
      ]
    case '2':
      return [
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1]
      ]
    case '3':
      return [
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1]
      ]
    case '4':
      return [
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1],
        [0, 0, 1],
        [0, 0, 1]
      ]
    case '5':
      return [
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1]
      ]
    case '6':
      return [
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
      ]
    case '7':
      return [
        [1, 1, 1],
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1]
      ]
    case '8':
      return [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
      ]
    case '9':
      return [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1]
      ]
    case ':':
      return [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
      ]
    case '.':
      return [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 1, 0]
      ]
    case '/':
      return [
        [0, 0, 0],
        [0, 0, 1],
        [0, 1, 0],
        [1, 0, 0],
        [0, 0, 0]
      ]
    case '\\':
      return [
        [0, 0, 0],
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
        [0, 0, 0]
      ]
    case '+':
      return [
        [0, 0, 0],
        [0, 1, 0],
        [1, 1, 1],
        [0, 1, 0],
        [0, 0, 0]
      ]
    case '-':
      return [
        [0, 0, 0],
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
        [0, 0, 0]
      ]
    case '=':
      return [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0]
      ]
    case ' ':
      return [[0], [0], [0], [0], [0]]
    default:
      break
  }
  return []
}

const rowStyle = (row) => {
  let res = `width:calc(${props.numberSize}/5);height:calc(${props.numberSize}/5);`
  if (row === 1) {
    res += `background-color: ${props.numberColor};`
  }
  return res
}

const getShowNum = (num) => {
  num = num.toString()
  let res = []
  for (let i = 0; i < num.length; i++) {
    const temp = getNumber(num[i])
    if (num[i] !== 1) {
      for (let j = 0; j < temp.length; j++) {
        temp[j].push(0)
      }
    }
    if (res.length === 0) res = temp
    else {
      for (let j = 0; j < res.length; j++) {
        res[j] = res[j].concat(temp[j])
      }
    }
  }
  return res
}
</script>

<style lang="scss" scoped>
.electronic-number {
  display: flex;
  flex-wrap: wrap;
  .electronic-number-item {
    flex-wrap: wrap;
    .item-column {
      display: flex;
    }
  }
}
</style>

```
