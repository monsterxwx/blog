<template>
  <div
    class="home-container relative w-full min-h-screen overflow-x-hidden transition-colors duration-500"
    :class="isDark ? 'bg-[#020617] text-slate-200' : 'bg-slate-50 text-slate-800'"
    @mousemove="onMouseMove"
  >
    <!-- Aurora Background Blobs -->
    <div class="aurora-blobs fixed inset-0 overflow-hidden pointer-events-none">
      <div
        class="blob blob-1 absolute w-[800px] h-[800px] blur-[120px] rounded-full transition-all duration-700 ease-out"
        :class="isDark ? 'bg-emerald-500/10' : 'bg-emerald-400/20'"
        :style="blob1Style"
      />
      <div
        class="blob blob-2 absolute w-[600px] h-[600px] blur-[100px] rounded-full transition-all duration-1000 ease-out"
        :class="isDark ? 'bg-teal-400/5 shadow-[0_0_100px_rgba(16,185,129,0.1)]' : 'bg-teal-300/15'"
        :style="blob2Style"
      />
      <div
        class="blob blob-3 absolute w-[700px] h-[700px] blur-[140px] rounded-full transition-all duration-500 ease-out"
        :class="isDark ? 'bg-green-600/10' : 'bg-green-200/30'"
        :style="blob3Style"
      />
    </div>

    <!-- Hero Section -->
    <section class="hero-section relative z-10 flex flex-col items-center justify-center min-h-[90vh] px-4">
      <div
        class="hero-content text-center transition-all duration-1000 ease-out"
        :class="showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      >
        <TextWrite />
        <p 
          class="mt-6 text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide leading-relaxed opacity-80"
          :class="isDark ? 'text-emerald-100' : 'text-slate-600'"
        >
          探索前沿技术，记录成长足迹，在逻辑与创意之间寻找平衡点。
        </p>

        <!-- Scroll Down Hint -->
        <div
          class="mt-16 animate-bounce cursor-pointer inline-flex flex-col items-center gap-2 group"
          @click="scrollToFeatured"
        >
          <span 
            class="text-xs uppercase tracking-[0.3em] font-medium transition-colors"
            :class="isDark ? 'text-emerald-500/40 group-hover:text-emerald-400' : 'text-emerald-600/40 group-hover:text-emerald-600'"
          >Discover</span>
          <div 
            class="w-6 h-10 border-2 rounded-full flex justify-center pt-2 transition-colors"
            :class="isDark ? 'border-emerald-500/20 group-hover:border-emerald-500/40' : 'border-emerald-600/20 group-hover:border-emerald-600/40'"
          >
            <div class="w-1.5 h-2.5 bg-emerald-500 rounded-full animate-[scroll_2s_infinite]" />
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Modules Section -->
    <section
      id="featured"
      class="featured-section relative z-10 w-full max-w-6xl mx-auto px-6 py-24"
    >
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-300"
        :class="showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'"
      >
        <HomeCard
          v-for="(card, index) in cards"
          :key="index"
          v-bind="card"
          @click="navigateTo(card.link)"
        >
          <template #icon>
            <span>{{ card.icon }}</span>
          </template>
        </HomeCard>
      </div>
    </section>

    <!-- Stats/Quote Section -->
    <section 
      class="relative z-10 w-full py-20 border-y transition-colors duration-500"
      :class="isDark ? 'bg-emerald-950/20 border-emerald-500/5 backdrop-blur-sm' : 'bg-emerald-50/30 border-emerald-200/20 backdrop-blur-sm'"
    >
      <div class="max-w-4xl mx-auto text-center px-6">
        <blockquote 
          class="text-2xl md:text-3xl font-light italic leading-snug"
          :class="isDark ? 'text-emerald-100/80' : 'text-slate-700'"
        >
          "Code is like humor. When you have to explain it, it’s bad."
        </blockquote>
        <p class="mt-4 text-emerald-500/60 uppercase tracking-widest text-sm font-semibold">— Cory House</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, computed } from 'vue'
import { useData } from 'vitepress'
import TextWrite from '@/components/TextWrite.vue'
import HomeCard from '@/components/HomeCard.vue'

const { isDark } = useData()
const showContent = ref(false)
const mouse = reactive({ x: 0, y: 0 })

const cards = [
  {
    title: '文章专栏',
    description: '深入浅出的技术干货，记录成长的点点滴滴。',
    icon: '📝',
    link: '/blog/docs/article/数组常用方法总结'
  },
  {
    title: '旅行足迹',
    description: '代码之外的世界，那些走过的山川与湖海。',
    icon: '🗺️',
    link: '/blog/docs/map'
  },
  {
    title: '面试宝典',
    description: '系统化的面试知识库，助力斩获心仪 Offer。',
    icon: '💡',
    link: '/blog/docs/interview/html'
  }
]

onMounted(() => {
  setTimeout(() => {
    showContent.value = true
  }, 100)
})

const onMouseMove = (e) => {
  mouse.x = (e.clientX / window.innerWidth - 0.5) * 2
  mouse.y = (e.clientY / window.innerHeight - 0.5) * 2
}

const blob1Style = computed(() => ({
  transform: `translate(${mouse.x * 60}px, ${mouse.y * 60}px)`,
  left: '-10%',
  top: '10%'
}))

const blob2Style = computed(() => ({
  transform: `translate(${mouse.x * -40}px, ${mouse.y * -40}px)`,
  right: '5%',
  bottom: '10%'
}))

const blob3Style = computed(() => ({
  transform: `translate(${mouse.x * 30}px, ${mouse.y * -50}px)`,
  left: '40%',
  top: '40%'
}))

const scrollToFeatured = () => {
  document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' })
}

const navigateTo = (link) => {
  window.location.href = link
}
</script>

<style scoped>
.home-container {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.blob {
  will-change: transform;
}

@keyframes scroll {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(12px); opacity: 0; }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: #10b98133;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #10b98166;
}
</style>
