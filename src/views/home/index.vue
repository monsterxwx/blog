<template>
  <div
    class="relative w-full  home-class flex justify-center"
    :style="{background:`url(${homeBgUrl})`}"
  >
    <div class="absolute top-50% title-classs w-100% text-center">
      <TextWrite />
    </div>
    <div class="w-full z-100 absolute left-0 bottom-0">
      <WaveIcon />
    </div>
  </div>
</template>

<script setup>
import WaveIcon from '@/components/WaveIcon.vue'
import TextWrite from '@/components/TextWrite.vue'
import { homeBgUrl } from '@/hooks/useHomeBg'
</script>

<style lang="scss" scoped>
.home-class {
  overflow: hidden;
  height: calc(100vh - 64px);
  background:  no-repeat;
  background-position: center;
}
.title-classs {
  transform: translateY(-50%);
}
</style>
