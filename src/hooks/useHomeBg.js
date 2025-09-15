import { computed, ref } from 'vue'

export const homeBgUrlList = [
  'https://monster-image.oss-cn-shenzhen.aliyuncs.com/monster/bg_1.webp',
  'https://monster-image.oss-cn-shenzhen.aliyuncs.com/monster/bg_2.webp',
  'https://monster-image.oss-cn-shenzhen.aliyuncs.com/monster/bg_3.webp',
  'https://monster-image.oss-cn-shenzhen.aliyuncs.com/monster/bg_4.webp',
  'https://monster-image.oss-cn-shenzhen.aliyuncs.com/monster/bg_5.webp'
]
export const homeBgIndex = ref(
  Math.floor(Math.random() * homeBgUrlList.length)
)

export const homeBgUrl = computed(() => homeBgUrlList[homeBgIndex.value])

export function toggleBgIndex () {
  homeBgIndex.value = Math.floor(Math.random() * homeBgUrlList.length)
}
