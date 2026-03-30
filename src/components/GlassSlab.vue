<template>
  <div
    class="glass-slab-wrapper group relative w-full h-full cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
    :class="isDark ? 'dark' : 'light'"
    @mousemove="handleMouseMove"
    @mouseleave="resetTransform"
    @click="$emit('navigate')"
  >
    <!-- Border Glow -->
    <div 
      class="absolute inset-0 rounded-2xl border transition-all duration-500 opacity-40 group-hover:opacity-100"
      :class="isDark ? 'border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.15)]' : 'border-emerald-600 shadow-[0_0_15px_rgba(2,44,34,0.1)]'"
    />
    
    <!-- Top HUD Bar -->
    <div 
      class="absolute top-0 inset-x-4 h-[1px] transition-opacity duration-500"
      :class="isDark ? 'bg-emerald-500/30' : 'bg-emerald-600/10'"
    />

    <!-- HUD Corners -->
    <div 
      class="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 transition-colors duration-500 rounded-tl-sm z-20"
      :class="isDark ? 'border-emerald-500/60' : 'border-emerald-600/30'"
    />
    <div 
      class="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 transition-colors duration-500 rounded-br-sm z-20"
      :class="isDark ? 'border-emerald-500/60' : 'border-emerald-600/30'"
    />

    <!-- Type Identifier -->
    <div 
      class="absolute top-2 right-4 text-[8px] font-mono tracking-widest opacity-30 group-hover:opacity-100 transition-opacity"
      :class="isDark ? 'text-emerald-400' : 'text-emerald-900'"
    >
      {{ slabId || 'NODE_0x1' }}
    </div>

    <!-- Glass Background -->
    <div 
      class="absolute inset-0 rounded-2xl backdrop-blur-xl backdrop-saturate-200 border transition-all duration-500"
      :class="isDark ? 'bg-[#022c22]/60 border-emerald-500/20 group-hover:bg-[#022c22]/80 shadow-[inset_0_0_30px_rgba(16,185,129,0.05)]' : 'bg-black/[0.02] border-black/5 group-hover:bg-black/[0.05]'"
    />

    <!-- Main Content -->
    <div 
      class="relative z-10 p-6 flex flex-col items-center justify-center text-center transition-transform duration-500 ease-out"
      :style="contentStyle"
    >
      <div 
        class="mb-4 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center transition-all duration-700 group-hover:scale-110"
        :class="isDark ? 'text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'text-emerald-700'"
      >
        <slot name="icon" />
      </div>

      <div class="space-y-1">
        <h3 
          class="text-lg font-black tracking-widest uppercase transition-colors"
          :class="isDark ? 'text-emerald-50 text-shadow-glow' : 'text-slate-900'"
        >
          {{ title }}
        </h3>
        <p 
          class="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] opacity-40 transition-opacity group-hover:opacity-80"
          :class="isDark ? 'text-emerald-500' : 'text-emerald-900'"
        >
          {{ subTitle }}
        </p>
      </div>

      <!-- Scanline Overlay -->
      <div class="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl overflow-hidden">
        <div class="w-full h-full bg-[linear-gradient(transparent_50%,rgba(16,185,129,0.1)_50%)] bg-[size:100%_8px] animate-scan" />
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent translate-y-[-100%] animate-sweep" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  title: String,
  subTitle: String,
  slabId: String,
  isDark: Boolean
})

const rotateX = ref(0)
const rotateY = ref(0)

const handleMouseMove = (e) => {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  
  rotateX.value = (centerY - y) / 10
  rotateY.value = (x - centerX) / 10
}

const resetTransform = () => {
  rotateX.value = 0
  rotateY.value = 0
}

const contentStyle = computed(() => ({
  transform: `perspective(1000px) rotateX(${rotateX.value}deg) rotateY(${rotateY.value}deg)`
}))
</script>

<style scoped>
.glass-slab-wrapper {
  perspective: 1000px;
}

.text-shadow-glow {
  text-shadow: 0 0 10px rgba(16, 185, 129, 0.4);
}

@keyframes scan {
  from { background-position: 0 0; }
  to { background-position: 0 100%; }
}

.animate-scan {
  animation: scan 10s linear infinite;
}
</style>
