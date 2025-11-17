import DefaultTheme from 'vitepress/theme'
import 'virtual:uno.css'
import '../../gloalStyle.scss'
// 使用异步导入避免 SSR 时的 CSS 加载问题
if (typeof document !== 'undefined') {
  import('element-plus/dist/index.css')
}
import { h } from 'vue'
import { useData } from 'vitepress'

export default Object.assign({}, DefaultTheme, {
  Layout: () => {
    const props = {}
    const { frontmatter } = useData()

    // 添加自定义class
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }
    return h(DefaultTheme.Layout, props)
  },
  enhanceApp({ app }) {
  },
})