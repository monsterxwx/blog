## 安装

```Shell
pnpm install vditor
```

## 使用

```vue
<template>
  <div class="w-full h-full editor">
    <div id="vditor"></div>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch, onMounted } from 'vue';
  import Vditor from 'vditor';
  import 'vditor/dist/index.css';

  const emist = defineEmits(['blur', 'addPic']);
  const props = defineProps({
    content: {
      type: String,
      default: '',
    },
  });
  const vditor = ref<Vditor | null>(null);

  watch(
    () => props.content,
    async () => {
      vditor.value!.setValue(props.content);
    },
  );
  onMounted(() => {
    vditor.value = new Vditor('vditor', {
      after: () => {
        if (props.content) {
          vditor.value!.setValue(props.content);
        }
      },
      mode: 'wysiwyg',
      preview: {
        markdown: {
          toc: false,
          footnotes: false,
        },
        actions: [],
      },
      toolbar: [
        {
          name: 'headings',
          tipPosition: 's',
        },
        {
          name: 'bold',
          tipPosition: 's',
        },
        {
          name: 'italic',
          tipPosition: 's',
        },
        {
          name: 'strike',
          tipPosition: 's',
        },
        {
          name: '|',
        },
        {
          name: 'list',
          tipPosition: 's',
        },
        {
          name: 'ordered-list',
          tipPosition: 's',
        },
        {
          name: 'check',
          tipPosition: 's',
        },
        {
          name: 'outdent',
          tipPosition: 's',
        },
        {
          name: 'indent',
          tipPosition: 's',
        },
        {
          name: '|',
        },
        {
          name: 'pic',
          tip: '图片',
          tipPosition: 's',
          icon: '<svg t="1756109084515" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2919" width="200" height="200"><path d="M938.666667 553.92V768c0 64.8-52.533333 117.333333-117.333334 117.333333H202.666667c-64.8 0-117.333333-52.533333-117.333334-117.333333V256c0-64.8 52.533333-117.333333 117.333334-117.333333h618.666666c64.8 0 117.333333 52.533333 117.333334 117.333333v297.92z m-64-74.624V256a53.333333 53.333333 0 0 0-53.333334-53.333333H202.666667a53.333333 53.333333 0 0 0-53.333334 53.333333v344.48A290.090667 290.090667 0 0 1 192 597.333333a286.88 286.88 0 0 1 183.296 65.845334C427.029333 528.384 556.906667 437.333333 704 437.333333c65.706667 0 126.997333 16.778667 170.666667 41.962667z m0 82.24c-5.333333-8.32-21.130667-21.653333-43.648-32.917333C796.768 511.488 753.045333 501.333333 704 501.333333c-121.770667 0-229.130667 76.266667-270.432 188.693334-2.730667 7.445333-7.402667 20.32-13.994667 38.581333-7.68 21.301333-34.453333 28.106667-51.370666 13.056-16.437333-14.634667-28.554667-25.066667-36.138667-31.146667A222.890667 222.890667 0 0 0 192 661.333333c-14.464 0-28.725333 1.365333-42.666667 4.053334V768a53.333333 53.333333 0 0 0 53.333334 53.333333h618.666666a53.333333 53.333333 0 0 0 53.333334-53.333333V561.525333zM320 480a96 96 0 1 1 0-192 96 96 0 0 1 0 192z m0-64a32 32 0 1 0 0-64 32 32 0 0 0 0 64z"  p-id="2920"></path></svg>',
          click: () => {
            emist('addPic');
          },
        },
        {
          name: 'table',
          tipPosition: 's',
        },
        {
          name: '|',
        },
        {
          name: 'quote',
          tipPosition: 's',
        },
        {
          name: 'line',
          tipPosition: 's',
        },
        {
          name: 'code',
          tipPosition: 's',
        },
        {
          name: 'inline-code',
          tipPosition: 's',
        },
        {
          name: 'insert-before',
          tipPosition: 's',
        },
        {
          name: 'insert-after',
          tipPosition: 's',
        },
        {
          name: '|',
        },
        {
          name: 'undo',
          tipPosition: 's',
        },
        {
          name: 'redo',
          tipPosition: 's',
        },
        {
          name: '|',
        },
        {
          name: 'fullscreen',
          tipPosition: 's',
        },
      ],
      toolbarConfig: { hide: false, pin: true },
      blur: (value) => {
        emist('blur', value);
      },
    });
  });

  const getVditorValue = () => {
    if (vditor.value) {
      return vditor.value.getValue();
    }
    return '';
  };
  const setVditorValue = (e) => {
    if (vditor.value) {
      vditor.value.insertValue(e);
    }
  };
  defineExpose({
    getVditorValue,
    setVditorValue,
  });
</script>

<style lang="scss" scoped>
  .editor {
    overflow-y: visible;

    :deep() {
      h1::before,
      h2::before,
      h3::before,
      h4::before,
      h5::before,
      h6::before {
        display: none !important;
      }

      .selected-highlight {
        background-color: #f0f0f0;
      }

      /* 隐藏工具栏 */
      // .vditor-toolbar {
      //   display: none !important;
      // }

      /* 移除编辑器所有边框 */
      .vditor {
        border: none !important;
        box-shadow: none !important;
      }

      .vditor-reset {
        border: none !important;
        background-color: white !important;
      }

      /* 移除编辑区域边框（所见即所得模式） */
      .vditor-wysiwyg {
        border: none !important;
        outline: none !important;
        background-color: #fff;
      }

      /* 移除分栏模式下的边框 */
      .vditor-sv {
        border: none !important;
      }

      .vditor-preview {
        border: none !important;
      }

      /* 移除底部状态栏 */
      .vditor-status {
        display: none !important;
      }
    }
  }
</style>

```
