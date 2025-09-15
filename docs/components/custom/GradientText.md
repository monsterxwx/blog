<script setup>
import GradientText from '@/components/GradientText.vue';

</script>

# 彩虹渐变文字

<div class="m-[50px_0]">
  <GradientText text="节日活动比平时参与高3~5倍哦！！" />
</div>


## props

| 属性 |    含义    |  类型  | 默认值 |
| ---- | :--------: | :----: | -----: |
| text | 显示的文字 | String |        |


## 代码

```vue
<template>
  <div class="gradient-text">
    {{ text }}
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>
.gradient-text {
  display: inline-block;
  color: transparent;
  background: linear-gradient(30deg, #32c5ff 25%, #b620e0 50%, #f7b500 75%, #20e050 100%);
  background-size: auto;
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientText 300s infinite linear;
  user-select: none;

  @keyframes gradientText {
    0% {
      background-position: 0;
    }
    100% {
      background-position: 28000px;
    }
  }
}

</style>

```