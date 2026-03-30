<template>
  <div class="text-write">
    <h1><span /></h1>
  </div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue'
const words = ['Logic Meets Creativity', 'Art is Code', 'Future is Built', 'Exploring Frontiers']

let wordIndex = 0
let charIndex = 1
let isDeleting = false

onMounted(() => {
  typingEffect()
})

const timer = ref(null)

function typingEffect () {
  const dynamicText = document.querySelector('h1 span')
  if (!dynamicText) return
  const currentWord = words[wordIndex] // 当前展示的单词组
  const currentChar = currentWord.substring(0, charIndex) // 当前显示的字符

  /** 元素设置字符的同时，添加停止闪烁类名 */
  dynamicText.textContent = currentChar
  dynamicText.classList.add('stop-blinking')

  /** 1. 每个单词组播放 */
  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++

    timer.value = setTimeout(typingEffect, 120)
  } else if (isDeleting && charIndex > 0) {
    /**
     * 3. 设置删除每个字符的效果
     */
    charIndex--

    timer.value = setTimeout(typingEffect, 80)
  } else {
    /**
     * 2.设置当前需要删除的单词组或下一个要播放的单词组:
    */
    isDeleting = !isDeleting
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex

    dynamicText.classList.remove('stop-blinking')
    timer.value = setTimeout(typingEffect, isDeleting ? 2500 : 400)
  }
}
onBeforeUnmount(() => {
  clearTimeout(timer.value)
})
</script>

<style lang="scss" scoped>
.text-write {
  --second-color: #10b981;
  h1 {
    font-size: 64px;
    font-weight: 900;
    letter-spacing: -0.05em;
    color: var(--vp-c-text-1);
    text-shadow: 0 0 30px rgba(16, 185, 129, 0.4);
  }
  h1 span {
    position: relative;
    color: var(--second-color);
  }
  h1 span::before {
    position: absolute;
    top: 50%;
    right: -12px;
    width: 3px;
    height: 36px;
    background-color: var(--second-color);
    content: "";
    transform: translateY(-50%);
    animation: blink .7s infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
  h1 span.stop-blinking::before {
    animation: none;
  }
}

@media (max-width: 768px) {
  .text-write h1 {
    font-size: 32px;
  }
}
</style>
