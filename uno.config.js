import { presetMini, presetAttributify, presetIcons, defineConfig } from 'unocss'

export default defineConfig({
  presets: [presetAttributify(), presetMini(), presetIcons()],
  rules: [
    [
      'ellipsis',
      {
        overflow: 'hidden',
        'text-overflow': 'ellipsis',
        'white-space': 'nowrap'
      }
    ],
    [/^ellipsis-(\d+)$/, ([, d]) => ({
      'word-break': 'break-all',
      'text-overflow': 'ellipsis',
      display: '-webkit-box',
      '-webkit-box-orient': 'vertical',
      '-webkit-line-clamp': d,
      overflow: 'hidden'
    })],
    [
      'object-contain',
      {
        'object-fit': 'contain'
      }
    ],
    [
      'object-cover',
      {
        'object-fit': 'cover'
      }
    ],
    [
      'object-fill',
      {
        'object-fit': 'fill'
      }
    ]
  ]
})
