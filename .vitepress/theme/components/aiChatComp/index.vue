<template>
  <div class="ai-chat-widget">
    <!-- 悬浮按钮 -->
    <div 
      class="ai-button"
      :class="{ 'ai-button-active': showDialog }"
      @click="toggleDialog"
    >
      <div class="ai-button-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
          <circle cx="12" cy="12" r="3" fill="currentColor"/>
        </svg>
      </div>
      <span class="ai-button-text">AI助手</span>
      <div class="ai-button-pulse"></div>
    </div>

    <!-- 弹窗 -->
    <transition name="dialog-fade">
      <div v-if="showDialog" class="ai-dialog-overlay" @click="handleOverlayClick">
        <div class="ai-dialog" @click.stop>
          <div class="ai-dialog-header">
            <div class="ai-dialog-title">
              <div class="ai-icon-small">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
                  <circle cx="12" cy="12" r="3" fill="currentColor"/>
                </svg>
              </div>
              <span>AI智能问答</span>
            </div>
            <button class="ai-dialog-close" @click="closeDialog">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor"/>
              </svg>
            </button>
          </div>
          
          <div class="ai-dialog-content">
           <content></content>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import content from "./content.vue";

const showDialog = ref(false)


const toggleDialog = () => {
  showDialog.value = !showDialog.value
}

const closeDialog = () => {
  showDialog.value = false
}

const handleOverlayClick = () => {
  closeDialog()
}

</script>

<style lang="scss" scoped>
.ai-chat-widget {
  position: fixed;
  right: 80px;
  bottom: 50px;
  z-index: 1000;
}

// 悬浮按钮样式
.ai-button {
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 25px;
  color: #2f855a;
  background: linear-gradient(135deg, #d4f1d4 0%, #b8e6b8 100%);
  box-shadow: 0 4px 15px rgb(212 241 212 / 40%);
  transition: all 0.3s ease;
  gap: 8px;
  cursor: pointer;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgb(212 241 212 / 60%);
  }
  &:active {
    transform: translateY(0);
  }
  &-active {
    background: linear-gradient(135deg, #b8e6b8 0%, #d4f1d4 100%);
  }
  &-icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-text {
    font-weight: 600;
  }

  // 脉冲动画
  &-pulse {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    background: rgb(255 255 255 / 20%);
    animation: pulse 2s infinite;
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

// 弹窗遮罩
.ai-dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgb(0 0 0 / 50%);
  backdrop-filter: blur(5px);
}

// 弹窗容器
.ai-dialog {
  position: absolute;
  top: 30px;
  bottom: 30px;
  display: flex;
  overflow: hidden;
  width: 95%;
  max-width: 800px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 20px 60px rgb(0 0 0 / 30%);
  animation: dialogSlideUp 0.3s ease-out;
  flex-direction: column;
}

@keyframes dialogSlideUp {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

// 弹窗头部
.ai-dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  color: #2f855a;
  background: linear-gradient(135deg, #d4f1d4 0%, #b8e6b8 100%);
}
.ai-dialog-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
}
.ai-icon-small {
  display: flex;
  justify-content: center;
  align-items: center;
}
.ai-dialog-close {
  padding: 4px;
  border: none;
  border-radius: 4px;
  color: #2f855a;
  background: none;
  transition: background 0.2s;
  cursor: pointer;
  &:hover {
    background: rgb(47 133 90 / 10%);
  }
}

// 弹窗内容
.ai-dialog-content {
  width: 100%;
  min-height: 0;
  flex: 1 0;
}


// 过渡动画
.dialog-fade-enter-active,
.dialog-fade-leave-active {
  transition: all 0.3s ease;
}
.dialog-fade-enter-from,
.dialog-fade-leave-to {
  opacity: 0;
}
.dialog-fade-enter-from .ai-dialog,
.dialog-fade-leave-to .ai-dialog {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

</style>