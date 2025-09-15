<script  setup>
import BaseForm from '@/components/BaseForm.vue';
import { ElButton } from 'element-plus'
import formConfig from './formConfig.jsx'
import { ref } from 'vue'
const formRef = ref(null)
const formData = ref({
  test1: '',
  test2: 15,
  test3: '',
  test4: [],
  test5: [],
  test6: '',
  test7: '',
  test8: '',
  tests: ''
})

const add = async () => {
  try {
    await formRef.value.validate()
    console.log('校验成功')
  } catch (error) {
    console.log('校验失败')
  }
}
const reset = () => {
  formRef.value.resetFields()
}
const confim = () => {
  console.log(formData.value)
}

</script>

# el-form

<div class="p-20px border border-#eee border-solid border-rd-4px">
    <BaseForm
        label-width="90px"
        label-position="right"
        ref="formRef"
        v-model="formData"
        v-bind="formConfig"
        @validate="confim"
    >
        <template #tests>
        <el-button>ee</el-button>
        </template>
    </BaseForm>
    <el-button @click="add">
        提交
    </el-button>
    <el-button @click="reset">
        重置
    </el-button>
</div>

::: details 查看代码

`main.vue`

```vue
<script  setup>
import BaseForm from '@/components/BaseForm.vue';
import { ElButton } from 'element-plus'
import formConfig from './formConfig.jsx'
import { ref } from 'vue'
const formRef = ref(null)
const formData = ref({
  test1: '',
  test2: 15,
  test3: '',
  test4: [],
  test5: [],
  test6: '',
  test7: '',
  test8: '',
  tests: ''
})

const add = async () => {
  try {
    await formRef.value.validate()
    console.log('校验成功')
  } catch (error) {
    console.log('校验失败')
  }
}
const reset = () => {
  formRef.value.resetFields()
}
const confim = () => {
  console.log(formData.value)
}

</script>

<template>
    <BaseForm
        label-width="90px"
        label-position="right"
        ref="formRef"
        v-model="formData"
        v-bind="formConfig"
        @validate="confim"
    >
        <template #tests>
        <el-button>ee</el-button>
        </template>
    </BaseForm>
    <el-button @click="add">
        提交
    </el-button>
    <el-button @click="reset">
        重置
    </el-button>
</template>    
```


`formConfig.js`

```js
import { ElButton } from 'element-plus'
const formConfig = {
  formList: [
    {
      type: 'input',
      prop: 'test1',
      label: '测试1',
      rules: [
        {
          required: true,
          message: 'Please select Activity count',
          trigger: 'blur'
        }
      ],
      col: {
        span: 12
      }
    },
    {
      type: 'slider',
      prop: 'test2',
      label: '测试2',
      col: {
        span: 12
      }
    },
    {
      type: 'slider',
      prop: 'test222',
      label: '测试222',
      col: {
        span: 12
      }
    },
    {
      type: 'radio',
      props: {
        data: [
          {
            value: '1',
            label: '11'
          },
          {
            value: '2',
            label: '22'
          }
        ]
      },
      prop: 'test3',
      label: '测试3',
      col: {
        span: 12
      }
    },
    {
      type: 'checkbox',
      props: {
        data: [
          {
            value: '1',
            label: '11'
          },
          {
            value: '2',
            label: '22'
          }
        ]
      },
      prop: 'test4',
      label: '测试4'
    },
    {
      type: 'date',
      dateType: 'daterange',
      prop: 'test5',
      label: '测试5',
      props: {
        'start-placeholder': 'Start date',
        'end-placeholder': 'End date',
        'range-separator': 'To'
      },
      col: {
        span: 12
      }
    },
    {
      type: 'time',
      prop: 'test6',
      label: '测试6'
    },
    {
      type: 'switch',
      prop: 'test7',
      label: '测试7'
    },
    {
      type: 'slot',
      prop: 'tests',
      label: 'slot'
    },
    {
      type: 'render',
      render: () => {
        return (
        <ElButton>render</ElButton>
        )
      },
      label: 'render'
    },
    {
      type: 'select',
      prop: 'test8',
      label: '测试8',
      props: {
        data: [
          {
            value: '1',
            label: '11'
          },
          {
            value: '2',
            label: '22'
          }
        ]
      }
    }
  ]

}
export default formConfig


```

:::

## 基本使用

::: tip 

### 功能介绍

使用JSON形式构建表单，传入 `formList` 数组。 内部支持`el-input`、`el-slider`、`el-radio`、`el-checkbox`、`el-date-picker`、`el-time-select`、`el-switch`、`el-select` 和 `slot` 。

### 一般配置

通过 `type` 选择组件名称，可选 `input`,`slider`,`radio`,`checkbox`,`date`,`time`,`switch`,`select`，通过 `prop` 设置字段名，通过 `label` 设置显示的名称。

```js
{
  type: 'input',
  prop: 'test1',
  label: '测试1',
}
```

### 表单校验

通过 `rules` 属性传入,使用方式跟element原始使用方式一样，支持数组或对象

```js
{
  type: 'input',
  prop: 'test1',
  label: '测试1',  
  rules: [
    {
      required: true,
      message: 'Please select Activity count',
      trigger: 'blur'
    }
  ],
}

```

### 控制表单子项的长短

通过 `col` 属性设置，使用方式跟 `el-col` 一样,总长度为24，12则表示一般宽度

```js
{
  col: {
    span: 12
  }
}

```

### 对子组件的参数透

使用 `props` 进行透传，需要注意的是要修改`el-radio-group` 和 `el-checkbox-group` 的属性通过字段 `groupProps` 传入修改。有列表数据的组件统一使用 `data` 字段传入需要的数据数组，比如 `radio` 和 `select` 组件

```js
{
  type: 'radio',
  props: {
    data: [
      {
        value: '1',
        label: '11'
      },
      {
        value: '2',
        label: '22'
      }
    ]
  },
},
{
  type: 'date',
  props: {
    'start-placeholder': 'Start date',
    'end-placeholder': 'End date',
    'range-separator': 'To'
  }
}
```

### 使用render渲染

会返回 `{ item, formData, formList }` 这些数据给内部使用

```js
{
  type: 'render',
  render: ({item ,formData,formList}) => {
    return (
    <ElButton>render</ElButton>
    )
  },
  label: 'render'
}
```

:::

## 事件

组件内部导出三个事件,`validate` 用于校验,`clearValidate` 用于清除校验,`resetFields` 用于重置表单，通过组件的`ref`获取这些事件

```js
formRef.value.validate()
```