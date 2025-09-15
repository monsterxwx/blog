import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  title: 'Monster-Blog',
  outDir: './dist',
  base: '/blog/',
  lastUpdated: true,
  // 覆盖默认主题组件
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPSwitchAppearance\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/vp-theme-apperence.vue', import.meta.url)
          )
        }
      ]
    }
  },
  head: [
    [
      'link', { rel: 'icon', href: '/blog/favicon.ico' }
    ]
  ],
  themeConfig: {
    outline: {
      level: 'deep',
    },
    outlineTitle: '本页目录',
    siteTitle: '',
    logo: { light: '/images/logo/logo.png', dark: '/images/logo/logo_black.png' },
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/monsterxwx/uv-ui' },
      {
        icon: {
          svg: '<svg t="1670828084087" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1923" width="32" height="32"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="1924"></path></svg>',
        },
        link: 'https://gitee.com/monsterwx/uv-ui',
      },
    ],
    nav: [
      {
        text: '导航', link: '/docs/nav/index',
        activeMatch: '/docs/nav/'
      },
      { text: '旅行地图', link: '/docs/map' },
      {
        text: '文章',
        link: '/docs/article/数组常用方法总结',
        activeMatch: '/docs/article/',
      },
      {
        text: '面试题',
        link: '/docs/interview/html',
        activeMatch: '/docs/interview/',
      },
      {
        text: '组件',
        activeMatch: '/docs/components/',
        items: [
          {
            text: '自定义组件',
            activeMatch: '/docs/components/custom',
            link: '/docs/components/custom/ElectronicNumber',
          },
          {
            text: 'element-plus封装',
            activeMatch: '/docs/components/element',
            link: '/docs/components/element/el-table',
          },
        ],
      },
      {
        text: '个人作品',
        items: [
          {
            text: 'UV-UI组件库',
            link: 'https://monsterwx.gitee.io/uv-ui/',
          },
          {
            text: 'vue3-element-admin模板',
            link: 'https://monsterwx.gitee.io/vue3-element-plus-admin',
          },
          {
            text: 'vue3-uniapp模板',
            link: 'https://monsterwx.gitee.io/uniapp-vite-treasure-box',
          },

        ]
      }
    ],
    sidebar: {
      '/docs/travel/': [
        {
          text: '旅行',
          items: [
            { text: '广州动物园', link: '/docs/travel/广州动物园' },
            { text: '广东珠海', link: '/docs/travel/广东珠海' },
            { text: '湖南长沙', link: '/docs/travel/湖南长沙' },
          ],
        },
      ],
      '/docs/article/': [
        {
          text: '随笔',
          items: [
            { text: '数组常用方法总结', link: '/docs/article/数组常用方法总结' },
            { text: '字符串方法总结', link: '/docs/article/字符串方法总结' },
            { text: '数组去重', link: '/docs/article/数组去重' },
            { text: '常用工具函数', link: '/docs/article/常用工具函数' },
            { text: '大屏比例缩放方案', link: '/docs/article/大屏比例缩放方案' },
            { text: 'el-table表格列合并', link: '/docs/article/el-table表格列合并' },
            { text: '.gitignore无效解决方案', link: '/docs/article/.gitignore无效解决方案' },
            { text: 'vue常用hooks', link: '/docs/article/vue常用hooks' },
          ],
        },
        {
          text: '工具库使用',
          items: [
            { text: 'pnpm的使用', link: '/docs/article/pnpm的使用' },
            { text: 'Day.js使用', link: '/docs/article/Day.js使用' },
            { text: 'Git使用', link: '/docs/article/Git使用' },
            { text: 'scss的基本用法', link: '/docs/article/scss的基本用法' },
            { text: '使用vite-plugin-svg-icons', link: '/docs/article/使用vite-plugin-svg-icons' },
            { text: '天地图使用', link: '/docs/article/天地图使用' },
            { text: 'px转vw插件使用', link: '/docs/article/px转vw插件使用' },
            { text: '代码高亮组件实现', link: '/docs/article/代码高亮组件实现' },
            { text: '前端页面导出下载实现', link: '/docs/article/前端页面导出下载实现' },
            { text: '使用codeMirror编辑JSON', link: '/docs/article/使用codeMirror编辑JSON' },
            { text: 'axios封装和使用', link: '/docs/article/axios封装和使用' },
          ],
        },
      ],
      '/docs/interview/': [
        {
          text: '基础',
          items: [
            { text: 'HTML', link: '/docs/interview/html' },
            { text: 'CSS', link: '/docs/interview/css' },
            { text: 'JavaScript', link: '/docs/interview/javascript' },
          ],
        },
        {
          text: '进阶',
          items: [
            { text: 'Vue', link: '/docs/interview/vue' },
            { text: '网络', link: '/docs/interview/网络' },
            { text: '性能优化', link: '/docs/interview/性能优化' },
            { text: '安全', link: '/docs/interview/安全' },
          ],
        },
      ],
      '/docs/components/': [
        {
          text: '自定义组件',
          link: '/docs/components/custom/',
          items: [
            { text: '电子数字屏', link: '/docs/components/custom/ElectronicNumber' },
            { text: 'hover提示', link: '/docs/components/custom/TriggerTips' },
            { text: '彩虹渐变文字', link: '/docs/components/custom/GradientText' },
            { text: '打印机效果', link: '/docs/components/custom/TypewriterText' },
            { text: '进度条', link: '/docs/components/custom/Process' },
            { text: '红心动效', link: '/docs/components/custom/ToggleHeart' },
            { text: '炫光特效', link: '/docs/components/custom/GlareEffect' },
          ],
        },
        {
          text: 'element-plus封装',
          link: '/docs/components/element/',
          items: [
            { text: 'el-table', link: '/docs/components/element/el-table' },
            { text: 'el-form', link: '/docs/components/element/el-form' }
          ],
        },
      ],
    },
  },
})
