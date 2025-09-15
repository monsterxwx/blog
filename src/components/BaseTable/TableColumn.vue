<template>
  <el-table-column
    v-if="col.type==='selection'"
    type="selection"
    align="center"
    width="60"
    v-bind="col"
  />
  <el-table-column
    v-else-if="col.type==='index'"
    type="index"
    label="序号"
    align="center"
    width="80"
    v-bind="col"
  />
  <el-table-column
    v-else-if="!col.children"
    :label="col.label"
    :prop="col.prop || ''"
    v-bind="col"
  >
    <!-- 自定义 header -->
    <template
      #header
      v-if="col.header"
    >
      <component
        :is="col.header"
        :row="col"
      />
    </template>
    <template #default="scope">
      <component
        v-if="col.render"
        :is="col.render"
        :row="scope.row"
      />
      <slot
        v-else
        :name="col.slotName || col.prop"
        :row="scope.row"
      >
        <span>
          {{ scope.row[col.prop] }}
        </span>
      </slot>
    </template>
  </el-table-column>

  <el-table-column
    v-else
    :label="col.label"
  >
    <template
      #header
      v-if="col.header"
    >
      <component
        :is="col.header"
        :row="col"
      />
    </template>
    <TableColumn
      v-for="t in col.children"
      :key="t.prop || t.label"
      :col="t"
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
  </el-table-column>
</template>

<script setup>
defineProps({
  col: {
    type: Object,
    default: () => {}
  }
})

</script>
<script>
export default {
  name: 'TableColumn'
}
</script>

<style lang="scss" scoped>

</style>
