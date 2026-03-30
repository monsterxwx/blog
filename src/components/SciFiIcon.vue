<template>
  <div class="scifi-icon-wrapper flex items-center justify-center">
    <!-- Article: Animated Scanlines -->
    <svg 
      v-if="type === 'article'" 
      viewBox="0 0 24 24" fill="none" class="w-full h-full stroke-current"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" stroke-width="1.5" />
      <g class="lines">
        <path d="M7 8h10" class="line-1" stroke-width="1.5" stroke-linecap="round" />
        <path d="M7 12h10" class="line-2" stroke-width="1.5" stroke-linecap="round" />
        <path d="M7 16h6" class="line-3" stroke-width="1.5" stroke-linecap="round" />
      </g>
      <path d="M21 3l-3 3M3 21l3-3" stroke-width="1" opacity="0.4" />
    </svg>

    <!-- Map: Slow Rotation -->
    <svg 
      v-else-if="type === 'map'" 
      viewBox="0 0 24 24" fill="none" class="w-full h-full stroke-current animate-slow-spin"
    >
      <circle cx="12" cy="12" r="9" stroke-width="1.5" />
      <ellipse cx="12" cy="12" rx="3" ry="9" stroke-width="1.5" />
      <ellipse cx="12" cy="12" rx="9" ry="3" stroke-width="1.5" />
      <path d="M12 3v18M3 12h18" stroke-width="1.5" opacity="0.6" />
    </svg>

    <!-- Brain: Subtle Pulse -->
    <svg 
      v-else-if="type === 'brain'" 
      viewBox="0 0 24 24" fill="none" class="w-full h-full stroke-current animate-pulse-brain"
    >
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-5 0V4.5A2.5 2.5 0 0 1 14.5 2z" stroke-width="1.5" />
      <path d="M7 7h10M7 11h10M7 15h10" stroke-width="1" opacity="0.3" stroke-dasharray="2 2" />
    </svg>

    <!-- Nav: Radar Sweep -->
    <svg 
      v-else-if="type === 'nav'" 
      viewBox="0 0 24 24" fill="none" class="w-full h-full stroke-current"
    >
      <path d="M12 2l3 7h-6zM12 22l-3-7h6zM2 12l7 3v-6zM22 12l-7-3v6z" class="cross" stroke-width="1.5" />
      <circle cx="12" cy="12" r="3" class="radar" stroke-width="1" opacity="0.5" />
    </svg>
  </div>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.scifi-icon-wrapper {
  color: inherit;
}

@keyframes slow-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-slow-spin {
  animation: slow-spin 20s linear infinite;
}

@keyframes pulse-brain {
  0%, 100% { opacity: 0.8; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
}
.animate-pulse-brain {
  animation: pulse-brain 4s ease-in-out infinite;
}

.line-1 { animation: line-scan 3s infinite alternate; }
.line-2 { animation: line-scan 3s infinite alternate 1s; }
.line-3 { animation: line-scan 3s infinite alternate 2s; }

@keyframes line-scan {
  from { opacity: 0.2; stroke-dashoffset: 20; stroke-dasharray: 20; }
  to { opacity: 1; stroke-dashoffset: 0; stroke-dasharray: 20; }
}

.radar {
  animation: radar-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes radar-pulse {
  0% { r: 1; opacity: 1; }
  100% { r: 9; opacity: 0; }
}
</style>
