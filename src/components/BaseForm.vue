<template>
  <div class="base-form">
    <el-form
      :model="formData"
      :rules="rules"
      ref="formRef"
      v-bind="$attrs"
    >
      <el-row v-bind="row">
        <el-col
          v-for="item in formList"
          :key="item.prop"
          v-bind="item.col"
        >
          <el-form-item
            :label="item.label"
            :prop="item.prop"
            v-bind="item"
          >
            <!-- 输入框 -->
            <el-input
              v-if="item.type === 'input'"
              v-model="formData[item.prop]"
              v-bind="item.props"
            />
            <!-- 滑块 -->
            <el-slider
              v-if="item.type === 'slider'"
              v-model="formData[item.prop]"
              v-bind="item.props"
            />
            <!-- 单选 -->
            <el-radio-group
              v-if="item.type === 'radio'"
              v-model="formData[item.prop]"
              v-bind="item.groupProps"
            >
              <template
                v-for="ra in item.props?.data || []"
                :key="ra.value"
              >
                <el-radio-button
                  v-if="item.radioType==='radio-button'"
                  :label="ra.value"
                  v-bind="item.props"
                >
                  {{ ra.label }}
                </el-radio-button>
                <el-radio
                  v-else
                  :label="ra.value"
                  v-bind="item.props"
                >
                  {{ ra.label }}
                </el-radio>
              </template>
            </el-radio-group>
            <!-- 复选框 -->
            <el-checkbox-group
              v-if="item.type === 'checkbox'"
              v-model="formData[item.prop]"
              v-bind="item.groupProps"
            >
              <el-checkbox
                v-for="ch in item.props?.data || []"
                :label="ch.value"
                :key="ch.value"
                v-bind="item.props"
              >
                {{ ch.label }}
              </el-checkbox>
            </el-checkbox-group>
            <!-- 日期  日期时间 起止时间 -->
            <el-date-picker
              v-if="item.type === 'date'"
              :type="item.dateType || 'date'"
              v-model="formData[item.prop]"
              v-bind="item.props"
            />
            <!-- 时间 -->
            <el-time-select
              v-if="item.type === 'time'"
              v-model="formData[item.prop]"
              v-bind="item.props"
            />
            <!-- 开关 -->
            <el-switch
              v-if="item.type === 'switch'"
              v-model="formData[item.prop]"
              v-bind="item.props"
            />
            <!-- 下拉框 -->
            <el-select
              v-if="item.type === 'select'"
              v-model="formData[item.prop]"
              v-bind="item.props"
            >
              <el-option
                v-for="op in item.props?.data || []"
                :label="op.label"
                :value="op.value"
                :key="op.value"
              >
                {{ op.label }}
              </el-option>
            </el-select>
            <template v-if="item.type==='slot'">
              <slot
                :name="item.prop"
                v-bind="{ item, formData, formList }"
              />
            </template>
            <template v-if="item.type==='render'">
              <component
                :is="item.render"
                v-bind="{ item, formData, formList }"
              />
            </template>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
const prop = defineProps({
  formList: {
    type: Array,
    default: () => ([])
  },
  row: {
    type: Object
  },
  modelValue: {
    type: Object,
    default: () => ({})
  }
})
const emit = defineEmits(['validate', 'update:modelValue'])

const formData = ref({})
watch(() => prop.modelValue, (newValue) => {
  formData.value = newValue
}, { immediate: true })

watch(formData, (newValue) => {
  emit('update:modelValue', newValue)
})

const rules = computed(() => {
  const rules = prop.formList.reduce((map, i) => {
    if (i.rules) {
      map[i.prop] = i.rules
    }
    return map
  }, {})
  return rules
})

const formRef = ref(null)
// 验证表单

const validate = () => {
  return formRef.value.validate()
}
// 重置表单
const resetFields = () => {
  formRef.value.resetFields()
}
// 重置验证结果
const clearValidate = () => {
  formRef.value.clearValidate()
}
defineExpose({
  validate,
  clearValidate,
  resetFields
})
</script>

<style lang="scss" scoped>

</style>
