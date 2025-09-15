<template>
  <el-table
    ref="tableRef"
    :header-cell-style="{ background: 'var(--el-fill-color-lighter)' }"
    stripe
    border
    height="100%"
    highlight-current-row
    v-bind="$attrs"
  >
    <TableColumn
      v-for="item in columns"
      :key="item.prop || item.label"
      :col="item"
    >
      <template
        v-for="slot in Object.keys($slots)"
        #[slot]="scope"
      >
        <slot
          :name="slot"
          v-bind="scope"
        />
      </template>
    </TableColumn>
  </el-table>
</template>

<script setup>
import { ref, unref } from 'vue'
import TableColumn from './TableColumn'
defineProps({
  columns: {
    type: Array,
    required: true
  }
})

const tableRef = ref(null)

// 单选
const setSingleSelect = row => {
  unref(tableRef).setCurrentRow(row)
}

defineExpose({
  tableRef,
  setSingleSelect
})

</script>

<style lang="scss" scoped>
  :deep() {
    .el-table__header th,
    .el-table__body td {
      text-align: center;
    }
  }
</style>
