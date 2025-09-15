<script setup>
import TriggerTips from '@/components/TriggerTips.vue';
import {ElButton} from 'element-plus'
</script>

# hover 提示

<div class="m-[80px_0]">
  <TriggerTips content="测试内容">
     <el-button>鼠标放上来试试</el-button>
  </TriggerTips>
</div>

## 代码

```vue
<template>
  <div class="trigger-tips">
    <slot />
    <div class="trigger-tips-content">
      <div>
        <div class="trigger-tips-content-warpper">
          <slot name="content">
            {{ content }}
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  content: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>
.trigger-tips {
  --default-padding: 10px;
  --default-border-radius: 5px;
  --default-color: #ffffff;
  --default-font-size: 14px;
  --default-bg-color: rgb(0 0 0 / 65%);
  --default-max-width: 250px;
  --default-margin-top: 10px;
  --default-transition-time: 0.3s;
  &:hover .trigger-tips-content {
    grid-template-rows: 1fr;
  }
  .trigger-tips-content {
    position: absolute;
    display: grid;
    overflow: hidden;
    margin-top: var(--default-margin-top);
    max-width: var(--default-max-width);
    font-size: var(--default-font-size);
    border-radius: var(--default-border-radius);
    color: var(--default-color);
    background-color: var(--default-bg-color);
    transition: var(--default-transition-time);
    grid-template-rows: 0fr;
    & > * {
      padding: 0 var(--default-padding);
      min-height: 0;
    }
    .trigger-tips-content-warpper {
      padding: var(--default-padding);
    }
  }
}

</style>


```