<template>
  <div
    class="glass-prism-container relative w-full transition-all duration-700 overflow-x-hidden"
    :class="isDark ? 'bg-[#000] text-emerald-50' : 'bg-[#fff] text-emerald-950'"
    @mousemove="handleMouseMove"
  >
    <!-- Background Texture: Fine Grain -->
    <div class="fixed inset-0 pointer-events-none opacity-[0.03] z-50 mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

    <!-- Grid Environment -->
    <div
      class="absolute inset-0 pointer-events-none transition-opacity duration-1000"
      :class="isDark ? 'opacity-[0.1]' : 'opacity-[0.05]'"
    >
      <div
        class="w-full h-full"
        :style="gridStyle"
      />
    </div>

    <!-- Data HUD: Scrolling Hex Streams -->
    <div class="absolute top-0 right-10 h-full w-20 pointer-events-none opacity-20 font-mono text-[8px] overflow-hidden hidden md:block">
      <div class="animate-flow-vertical space-y-2 py-4">
        <div
          v-for="i in 50"
          :key="i"
          class="text-emerald-500"
        >
          数据流_0x{{ (i * 1234).toString(16).toUpperCase() }}
        </div>
      </div>
    </div>

    <!-- Scanning Sweep Line -->
    <div class="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      <div class="w-[1px] h-full bg-emerald-400/20 blur-[2px] animate-sweep-horizontal shadow-[0_0_20px_rgba(16,185,129,0.2)]" />
    </div>

    <!-- Main HUD Dashboard Content -->
    <main class="relative z-10 w-full min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-4 py-12 md:px-8 md:py-0">
      <!-- Prismatic Header -->

      <!-- Symmetrical Glass Dashboard -->
      <div class="relative w-full max-w-5xl transition-all duration-1000">
        <!-- Center Axis Decoration (Fixed position) -->
        <div class="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none hidden md:block">
          <div class="w-full h-[1px] bg-emerald-500/10" />
        </div>
        <div class="absolute inset-y-0 left-1/2 -translate-x-1/2 pointer-events-none hidden md:block">
          <div class="h-full w-[1px] bg-emerald-500/10" />
        </div>
        <!-- Center Hub Node -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 border border-emerald-500/20 rotate-45 pointer-events-none hidden md:flex items-center justify-center bg-black/80 backdrop-blur-sm z-30">
          <div class="w-1.5 h-1.5 bg-emerald-500/40 rounded-full animate-pulse" />
        </div>

        <!-- 2x2 Symmetrical Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 h-auto">
          <GlassSlab
            v-for="(panel, index) in panels"
            :key="panel.title"
            v-bind="panel"
            :slab-id="panel.id"
            :is-dark="isDark"
            class="h-[180px] md:h-[220px]"
            @navigate="navigateTo(panel.link)"
          >
            <template #icon>
              <SciFiIcon :type="panel.iconType" />
            </template>
          </GlassSlab>
        </div>
      </div>

      <!-- HUD UI Accents -->
      <div class="fixed bottom-8 left-8 space-y-1 font-mono text-[8px] md:text-[10px] uppercase opacity-40 hidden md:block">
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 border border-emerald-500 rounded-px" />
          <span>光标_X: {{ mouse.x.toFixed(4) }}</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 border border-emerald-500 rounded-px" />
          <span>光标_Y: {{ mouse.y.toFixed(4) }}</span>
        </div>
      </div>

      <div class="fixed top-1/2 -right-4 -translate-y-1/2 flex flex-col gap-4 opacity-20 hidden md:flex">
        <div
          v-for="i in 10"
          :key="i"
          class="w-8 h-[1px] bg-emerald-500"
        />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, computed } from 'vue'
import { useData } from 'vitepress'
import GlassSlab from '@/components/GlassSlab.vue'
import SciFiIcon from '@/components/SciFiIcon.vue'

const { isDark } = useData()
const showContent = ref(false)
const mouse = reactive({ x: 0, y: 0 })

const panels = [
  {
    title: '技术专栏',
    id: '文_ARTICLE_01',
    iconType: 'article',
    link: '/blog/docs/article/数组常用方法总结'
  },
  {
    title: '世界地图',
    id: '迹_TRACE_02',
    iconType: 'map',
    link: '/blog/docs/map'
  },
  {
    title: '面试宝典',
    id: '宝_INDEX_03',
    iconType: 'brain',
    link: '/blog/docs/interview/html'
  },
  {
    title: '资源导览',
    id: '导_PORTAL_04',
    iconType: 'nav',
    link: '/blog/docs/nav/index'
  }
]

const handleMouseMove = (e) => {
  mouse.x = (e.clientX / window.innerWidth - 0.5) * 2
  mouse.y = (e.clientY / window.innerHeight - 0.5) * 2
}

const gridStyle = computed(() => ({
  background: `linear-gradient(to right, ${isDark.value ? '#10b981' : '#022c22'} 1px, transparent 1px), 
               linear-gradient(to bottom, ${isDark.value ? '#10b981' : '#022c22'} 1px, transparent 1px)`,
  backgroundSize: '40px 40px',
  transform: `translate(${mouse.x * 20}px, ${mouse.y * 20}px)`
}))

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  setTimeout(() => {
    showContent.value = true
  }, 100)
})

const navigateTo = (link) => {
  window.location.href = link
}
</script>

<style scoped>
.glass-prism-container {
  overflow-y: hidden;
  width: 100%;

  /* 桌面端高度固定，移动端自适应 */
  height: calc(100vh - 64px);
  font-family: Inter, -apple-system, sans-serif;
}

@media (width <= 768px) {
  .glass-prism-container {
    overflow-y: auto;
    height: auto;
    min-height: calc(100vh - 64px);
  }
}
.text-shadow-hologram {
  position: relative;
  text-shadow:
    -2px 0 #10b98155,
    2px 0 #34d39944,
    0 0 20px rgb(16 185 129 / 40%);
}

@keyframes glitch {
  0% { transform: translate(0) skew(0); }
  20% { transform: translate(-2px, 2px) skew(2deg); }
  40% { transform: translate(-2px, -2px) skew(-2deg); }
  60% { transform: translate(2px, 2px) skew(10deg); }
  80% { transform: translate(2px, -2px) skew(-10deg); }
  100% { transform: translate(0) skew(0); }
}
.glitch:hover {
  animation: glitch 0.3s infinite;
}

@keyframes sweep-horizontal {
  0% { transform: translateX(-100vw); }
  100% { transform: translateX(100vw); }
}
.animate-sweep-horizontal {
  animation: sweep-horizontal 12s linear infinite;
}

@keyframes flow-vertical {
  from { transform: translateY(0); }
  to { transform: translateY(-50%); }
}
.animate-flow-vertical {
  animation: flow-vertical 20s linear infinite;
}
:deep(.VPNavBar) {
  border-bottom: 1px solid rgb(16 185 129 / 10%) !important;
  background: transparent !important;
  backdrop-filter: none !important;
}

@media (width <= 768px) {
  .text-shadow-hologram {
    font-size: 2.2rem;
  }
}
</style>
