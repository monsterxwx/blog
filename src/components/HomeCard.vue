<template>
  <div
    class="home-card group relative overflow-hidden transition-all duration-500 ease-out hover:scale-105"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <!-- Glass Background -->
    <div class="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl transition-all group-hover:bg-white/10" />
    
    <!-- Hover Glow -->
    <div
      class="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl"
      :style="glowStyle"
    />

    <!-- Content -->
    <div class="relative z-10 p-6 flex flex-col items-center text-center">
      <div class="mb-4 text-4xl transform transition-transform group-hover:scale-110 duration-500">
        <slot name="icon" />
      </div>
      <h3 class="mb-2 text-xl font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">
        {{ title }}
      </h3>
      <p class="text-sm text-gray-400 leading-relaxed font-light">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  title: String,
  description: String
})

const mouseX = ref(0)
const mouseY = ref(0)
const isHovering = ref(false)

const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect()
  mouseX.value = e.clientX - rect.left
  mouseY.value = e.clientY - rect.top
  isHovering.value = true
}

const handleMouseLeave = () => {
  isHovering.value = false
}

const glowStyle = computed(() => {
  if (!isHovering.value) return {}
  return {
    background: `radial-gradient(600px circle at ${mouseX.value}px ${mouseY.value}px, rgba(16, 185, 129, 0.15), transparent 40%)`
  }
})
</script>

<style scoped>
.home-card {
  min-height: 180px;
  cursor: pointer;
}
</style>
