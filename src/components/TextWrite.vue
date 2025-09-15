<template>
  <div class="text-write">
    <h1>Coding is <span /></h1>
  </div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue'
const words = ['like Art', 'Life', 'the Future', 'Everything']

let wordIndex = 0
let charIndex = 1
let isDeleting = false

onMounted(() => {
  typingEffect()
})

const timer = ref(null)

function typingEffect () {
  const dynamicText = document.querySelector('h1 span')
  const currentWord = words[wordIndex] // 当前展示的单词组
  const currentChar = currentWord.substring(0, charIndex) // 当前显示的字符

  /** 元素设置字符的同时，添加停止闪烁类名 */
  dynamicText.textContent = currentChar
  dynamicText.classList.add('stop-blinking')

  /** 1. 每个单词组播放 */
  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++

    timer.value = setTimeout(typingEffect, 200)
  } else if (isDeleting && charIndex > 0) {
    /**
     * 3. 设置删除每个字符的效果
     */
    charIndex--

    timer.value = setTimeout(typingEffect, 200)
  } else {
    /**
     * 2.设置当前需要删除的单词组或下一个要播放的单词组:
    */
    isDeleting = !isDeleting
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex

    dynamicText.classList.remove('stop-blinking')
    timer.value = setTimeout(typingEffect, 200)
  }
}
onBeforeUnmount(() => {
  clearTimeout(timer.value)
})
</script>

<style lang="scss" scoped>
.text-write {
  --primary-color: var(--vp-c-bg);
  --second-color: #bd53ed;
  h1 {
    font-size: 50px;
    color: var(--primary-color);
  }
  h1 span {
    position: relative;
    color: var(--second-color);
  }
  h1 span::before {
    position: absolute;
    top: 50%;
    right: -8px;
    width: 2px;
    height: 30px;
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

</style>
