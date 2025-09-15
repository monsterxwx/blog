<template>
  <h2
    :id="formatTitle"
    tabindex="-1"
  >
    {{ title }}
    <a
      class="header-anchor"
      :href="`#${formatTitle}`"
      aria-hidden="true"
    />
  </h2>
  <div class="m-nav-links">
    <template
      v-for="item in items"
      :key="item.title"
    >
      <a
        v-if="item.link"
        class="m-nav-link"
        :href="item.link"
        target="_blank"
        rel="noreferrer"
      >
        <article class="box">
          <div class="box-header">
            <div class="icon">
              <img :src="item.icon">
            </div>
            <h5
              v-if="item.title"
              class="title"
            >
              {{ item.title }}
            </h5>
          </div>
          <p
            v-if="item.desc"
            class="desc"
          >{{ item.desc }}</p>
        </article>
      </a>
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { slugify } from '@mdit-vue/shared'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  items: {
    type: Array,
    default: () => []
  }
})

const formatTitle = computed(() => {
  return slugify(props.title)
})
</script>

<style lang="scss" scoped>
.m-nav-links {
  --m-nav-gap: 10px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-gap: var(--m-nav-gap) var(--m-nav-gap);
  grid-auto-flow: row dense;
  justify-content: center;
  margin-top: var(--m-nav-gap);
}

@each $media, $size in (500px: 140px, 640px: 155px, 768px: 175px, 960px: 200px, 1440px: 240px) {
  @media (min-width: $media) {
    .m-nav-links {
      grid-template-columns: repeat(auto-fill, minmax($size, 1fr));
    }
  }
}

@media (width >= 960px) {
  .m-nav-links {
    --m-nav-gap: 20px;
  }
}
.m-nav-link {
  --m-nav-icon-box-size: 40px;
  --m-nav-icon-size: 24px;
  --m-nav-box-gap: 12px;

  display: block;
  height: 100%;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  transition: all 0.25s;
  &:hover {
    border-color: var(--vp-c-brand);
    text-decoration: initial;
    background-color: var(--vp-c-bg-soft-up);
    box-shadow: var(--vp-shadow-2);
  }
  .box {
    position: relative;
    display: flex;
    padding: var(--m-nav-box-gap);
    height: 100%;
    color: var(--vp-c-text-1);
    flex-direction: column;
    &.has-badge {
      padding-top: calc(var(--m-nav-box-gap) + 2px);
    }
    &-header {
      display: flex;
      align-items: center;
    }
  }
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: calc(var(--m-nav-box-gap) - 2px);
    width: var(--m-nav-icon-box-size);
    height: var(--m-nav-icon-box-size);
    font-size: var(--m-nav-icon-size);
    border-radius: 6px;
    background-color: var(--vp-c-divider);
    transition: background-color 0.25s;
    :deep(svg) {
      width: var(--m-nav-icon-size);
      fill: currentcolor;
    }
    :deep(img) {
      width: var(--m-nav-icon-size);
      border-radius: 4px;
    }
  }
  .title {
    overflow: hidden;
    font-size: 16px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex-grow: 1;
    &:not(.no-icon) {
      line-height: var(--m-nav-icon-box-size);
    }
  }
  .badge {
    position: absolute;
    top: 2px;
    right: 0;
    transform: scale(0.8);
  }
  .desc {
    display: -webkit-box;
    overflow: hidden;
    margin: calc(var(--m-nav-box-gap) - 2px) 0 0;
    font-size: 12px;
    text-overflow: ellipsis;
    color: var(--vp-c-text-2);
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    flex-grow: 1;
    line-height: 1.5;
  }
}

@media (width <= 960px) {
  .m-nav-link {
    --m-nav-icon-box-size: 36px;
    --m-nav-icon-size: 20px;
    --m-nav-box-gap: 8px;
    .title {
      font-size: 14px;
    }
  }
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
