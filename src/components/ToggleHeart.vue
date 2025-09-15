<template>
  <div>
    <input
      id="toggle-heart"
      type="checkbox"
    >
    <label for="toggle-heart">❤</label>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
[id="toggle-heart"] {
  position: absolute;
  left: -100vw;
}
[id="toggle-heart"]:checked + label {
  color: #e2264d;
  filter: none;
  will-change: font-size;
  animation: heart 1s cubic-bezier(0.17, 0.89, 0.32, 1.49);
}
[id="toggle-heart"]:checked + label::before, [id="toggle-heart"]:checked + label::after {
  animation: inherit;
  animation-timing-function: ease-out;
}
[id="toggle-heart"]:checked + label::before {
  will-change: transform, border-width, border-color;
  animation-name: bubble;
}
[id="toggle-heart"]:checked + label::after {
  will-change: opacity, box-shadow;
  animation-name: sparkles;
}
[id="toggle-heart"]:focus + label {
  text-shadow: 0 0 3px white,  0 1px 1px white, 0 -1px 1px white,  1px 0 1px white, -1px 0 1px white;
}
[for="toggle-heart"] {
  position: relative;
  font-size: 2em;
  color: #888888;
  filter: grayscale(1);
  align-self: center;
  user-select: none;
  cursor: pointer;
}
[for="toggle-heart"]::before, [for="toggle-heart"]::after {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
  border-radius: 50%;
  content: "";
}
[for="toggle-heart"]::before {
  margin: -2.25rem;
  width: 4.5rem;
  height: 4.5rem;
  border: solid 2.25rem #e2264d;
  box-sizing: border-box;
  transform: scale(0);
}
[for="toggle-heart"]::after {
  margin: -0.1875rem;
  width: 0.375rem;
  height: 0.375rem;
  box-shadow: 0.3248rem -3rem 0 -0.1875rem #ff8080, -0.3248rem -2.625rem 0 -0.1875rem #ffed80, 2.548rem -1.6166rem 0 -0.1875rem #ffed80, 1.8498rem -1.8906rem 0 -0.1875rem #a4ff80, 2.8525rem 0.9842rem 0 -0.1875rem #a4ff80, 2.6315rem 0.2675rem 0 -0.1875rem #80ffc8, 1.0091rem 2.8438rem 0 -0.1875rem #80ffc8, 1.4315rem 2.2241rem 0 -0.1875rem #80c8ff, -1.5943rem 2.562rem 0 -0.1875rem #80c8ff, -0.8464rem 2.506rem 0 -0.1875rem #a480ff, -2.9971rem 0.351rem 0 -0.1875rem #a480ff, -2.4869rem 0.9007rem 0 -0.1875rem #ff80ed, -2.1430rem -2.1244rem 0 -0.1875rem #ff80ed, -2.2548rem -1.3828rem 0 -0.1875rem #ff8080;
}

@keyframes heart {
  0%, 17.5% {
    font-size: 0;
  }
}

@keyframes heart {
  0%, 17.5% {
    font-size: 0;
  }
}

@keyframes bubble {
  15% {
    border-width: 2.25rem;
    border-color: #cc8ef5;
    transform: scale(1);
  }
  30%, 100% {
    border-width: 0;
    border-color: #cc8ef5;
    transform: scale(1);
  }
}

@keyframes bubble {
  15% {
    border-width: 2.25rem;
    border-color: #cc8ef5;
    transform: scale(1);
  }
  30%, 100% {
    border-width: 0;
    border-color: #cc8ef5;
    transform: scale(1);
  }
}

@keyframes sparkles {
  0%, 20% {
    opacity: 0;
  }
  25% {
    opacity: 1;
    box-shadow: 0.3248rem -2.4375rem 0 0 #ff8080, -0.3248rem -2.0625rem 0 0 #ffed80, 2.1082rem -1.2659rem 0 0 #ffed80, 1.4100rem -1.5399rem 0 0 #a4ff80, 2.3041rem 0.8590rem 0 0 #a4ff80, 2.0831rem 0.1423rem 0 0 #80ffc8, 0.765rem 2.3370rem 0 0 #80ffc8, 1.1875rem 1.7173rem 0 0 #80c8ff, -1.3502rem 2.0552rem 0 0 #80c8ff, -0.6023rem 1.9992rem 0 0 #a480ff, -2.4487rem 0.2258rem 0 0 #a480ff, -1.9385rem 0.7756rem 0 0 #ff80ed, -1.7032rem -1.7737rem 0 0 #ff80ed, -1.8150rem -1.0320rem 0 0 #ff8080;
  }
}

@keyframes sparkles {
  0%, 20% {
    opacity: 0;
  }
  25% {
    opacity: 1;
    box-shadow: 0.3248rem -2.4375rem 0 0 #ff8080, -0.3248rem -2.0625rem 0 0 #ffed80, 2.1082rem -1.2659rem 0 0 #ffed80, 1.4100rem -1.5399rem 0 0 #a4ff80, 2.3041rem 0.8590rem 0 0 #a4ff80, 2.0831rem 0.1423rem 0 0 #80ffc8, 0.765rem 2.3370rem 0 0 #80ffc8, 1.1875rem 1.7173rem 0 0 #80c8ff, -1.3502rem 2.0552rem 0 0 #80c8ff, -0.6023rem 1.9992rem 0 0 #a480ff, -2.4487rem 0.2258rem 0 0 #a480ff, -1.9385rem 0.7756rem 0 0 #ff80ed, -1.7032rem -1.7737rem 0 0 #ff80ed, -1.8150rem -1.0320rem 0 0 #ff8080;
  }
}
</style>
