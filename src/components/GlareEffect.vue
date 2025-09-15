<template>
  <div class="glare-effect">
    <div class="effect-item" />
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.glare-effect {
  position: relative;
  width: 200px;
  height: 100px;
  background-color: rgb(0 0 0 / 50%);
  animation: breathe 3s linear infinite;
}

@keyframes breathe {
  0% {
    opacity: 1;
  }
  50% {
    filter: brightness(150%) saturate(140%);
  }
  100% {
    opacity: 1;
  }
}
.effect-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 100px;
  content: "";
  background: linear-gradient(45deg, transparent 40%, rgb(255 255 255 / 15%) 50%, transparent 60%);
  background-size: 300% 100%;
  animation: shine 15s linear infinite;
}

@keyframes shine {
  0% {
    background-position-x: 400%;
  }
  50% {
    background-position-x: 0%;
  }
  100% {
    background-position-x: -400%;
  }
}
</style>
