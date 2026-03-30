<script  setup>
import {ElSwitch,ElButton} from 'element-plus'
import BaseTable from '@/components/BaseTable/index.vue';
import tableConfig from  './tableConfig.jsx'

const list = Array.from({ length: 20 }).map((item, index) => {
  return {
    name: 'test' + index,
    realname: index * 2,
    cellphone: index * 3,
    enable: true,
    createAt: '2022-03-' + index,
    updateAt: '2022-04-30答复奇偶的叫法欧舒丹即佛爱圣诞节佛山',
    test1: 'test1',
    test2: 'test2',
    test3: 'test3',
    more: 'more'
  }
})

</script>

# el-table

<div class="w-100% h-500px">
  <BaseTable class="vp-raw" :data="list" v-bind="tableConfig">
    <template #status="scope">
          <el-switch v-model="scope.row.enable" />
    </template>
    <template #handler>
      <el-button>
        hh
      </el-button>
    </template>
  </BaseTable>
</div>

::: code-group

```vue [main.vue]
<script  setup>
import {ElSwitch,ElButton} from 'element-plus'
import BaseTable from '@/components/BaseTable/index.vue';
import tableConfig from  './tableConfig.jsx'

const list = Array.from({ length: 20 }).map((item, index) => {
  return {
    name: 'test' + index,
    realname: index * 2,
    cellphone: index * 3,
    enable: true,
    createAt: '2022-03-' + index,
    updateAt: '2022-04-30答复奇偶的叫法欧舒丹即佛爱圣诞节佛山',
    test1: 'test1',
    test2: 'test2',
    test3: 'test3',
    more: 'more'
  }
})

</script>

<template>
    <div class="w-100% h-500px">
      <BaseTable :data="list" v-bind="tableConfig">
        <template #status="scope">
              <el-switch v-model="scope.row.enable" />
        </template>
        <template #handler>
          <el-button>
            hh
          </el-button>
        </template>
      </BaseTable>
    </div>
</template>    

```

```jsx [tableConfig.jsx]
import { ElButton, ElMessage } from 'element-plus'
const tableConfig = {
  columns: [
    {
      type: 'selection'
    },
    {
      type: 'index'
    },
    {
      prop: 'name',
      label: '用户名'

    },
    {
      prop: 'realname',
      label: '真实姓名',
      render: (scope) => {
        return (
          <ElButton
            type="primary"
            onClick={() => {
              console.log(scope)
              ElMessage.success('我是自定义内容')
            }}
          >
            {scope.row.realname}
          </ElButton>
        )
      }
    },
    {
      prop: 'cellphone',
      label: '手机号码'
    },
    {
      prop: 'enable',
      label: '状态',
      slotName: 'status'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      slotName: 'createAt',
      minWidth: '120'
    },
    {
      prop: 'more',
      minWidth: '130',
      header: (scope) => {
        return (
          <ElButton>自定义表头</ElButton>
        )
      }
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      slotName: 'updateAt',
      'show-overflow-tooltip': true
    },
    {
      label: '多级表头',
      header: (scope) => {
        return (
          <ElButton>自定义多级表头</ElButton>
        )
      },
      children: [
        {
          prop: 'test1',
          label: 'State',
          width: '120'
        }, {
          prop: 'test2',
          label: 'City',
          width: '120'
        }, {
          prop: 'test3',
          label: 'City2',
          width: '120'
        }
      ]
    },
    {
      label: '操作',
      slotName: 'handler',
      fixed: 'right'
    }
  ]
}

export default tableConfig


```

:::

## 使用

### 功能介绍

支持插槽，多级表头，render渲染，数据通过props中的`data`传入，表格列配置使用`columns`传入

举例：

```js
{
  data:[
    {
      name:'111'
    }
  ],
  columns: [
      {
        prop: 'name',
        label: '用户名'
      }
  ]
}
```

### columns配置参数

显示选择`selection`列

```js
{
  type: 'selection'
}
```

显示`index`列

```js
{
  type: 'index'
}
```

正常使用`prop`作为字段名,`label`作为名称

```js
{
  prop: 'name',
  label: '用户名'
}
```

`render`字段可以使用render函数

```js
render: (scope) => {
  return (
    <ElButton
      type="primary"
      onClick={() => {
        console.log(scope)
        ElMessage.success('我是自定义内容')
      }}
    >
      {scope.row.realname}
    </ElButton>
  )
}
```

自定义标题使用 `header`字段

```js
{
  prop: 'more',
  minWidth: '130',
  header: (scope) => {
    return (
      <ElButton>自定义表头</ElButton>
    )
  }
}
```

`slotName`用于定义插槽名称，`show-overflow-tooltip`用于开启过长省略

多级表头写法为`children`字段

```js
{
  prop: 'updateAt',
  label: '更新时间',
  slotName: 'updateAt',
  'show-overflow-tooltip': true
  children: [
    {
      prop: 'test1',
      label: 'State',
      width: '120'
    }
  ]
}

```

```html
<BaseTable :data="list" v-bind="tableConfig">
  <template #status="scope">
        <el-switch v-model="scope.row.enable" />
  </template>
  <template #handler>
    <el-button>
      hh
    </el-button>
  </template>
</BaseTable>
```

## 组件代码

::: code-group

```vue [components/BaseTable/index.vue]
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

```

```vue [components/BaseTable/el-table-column.vue]
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
    v-bind="col"
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


```

:::
