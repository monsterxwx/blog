<script setup>
import Process from '@/components/Process.vue';
</script>

# 进度条

<div class="m-[50px_0]">
  <Process num="80" />
</div>

## 代码

```vue
<template>
  <div class="line-content">
    <div
      class="line-progress"
      :style="{width:num+'%'}"
    />
  </div>
</template>

<script setup>
defineProps({
  num: {
    type: [String, Number],
    value: 0
  }
})
</script>

<style lang="scss" scoped>
    .line-content {
      position: relative;
      width: 100%;
      height: 24px;
      border-radius: 4px;
      background: #2e527b;
      .line-progress {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        border-radius: 4px;
        background-image: repeating-linear-gradient(
          120deg,
          #1a87d2 0%,
          #1a87d2 1%,
          #2f91d4 1%,
          #2f91d4 2%
        );
        background-position: -2% 0;
        background-size: 400%;
        animation: slider 12s linear infinite;
      }

      @keyframes slider {
        100% {
          background-position: -100% 0;
        }
      }
    }
</style>

```