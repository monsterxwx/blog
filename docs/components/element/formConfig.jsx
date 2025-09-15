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
