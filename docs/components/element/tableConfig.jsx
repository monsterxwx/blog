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
