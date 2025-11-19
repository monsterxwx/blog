<template>
  <el-select
    v-model="currentValue"
    :style="{ width: width }"
    @change="change"
    placeholder="请选择数据"
    v-bind="$attrs"
  >
    <el-option
      v-for="item in list"
      :key="item[value]"
      :label="label ? item[label] : item[value]"
      :value="item[value]"
    />
  </el-select>
</template>

<script setup>
import { ref, watch } from 'vue'
const props = defineProps({
  modelValue: {
    type: [String, Number, Array]
  },
  list: {
    type: Array,
    default: () => []
  },
  label: {
    type: String,
    default: 'label'
  },
  value: {
    type: String,
    default: 'value'
  },
  width: {
    type: String,
    default: '100%'
  }
})

const currentValue = ref('')

watch(() => props.modelValue, (newValue) => {
  currentValue.value = newValue
}, { immediate: true })

const emits = defineEmits(['update:modelValue'])
const change = (e) => {
  emits('update:modelValue', e)
}

</script>

<style lang="scss" scoped></style>
