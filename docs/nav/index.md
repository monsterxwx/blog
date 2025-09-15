---
layout: doc
layoutClass: m-nav-layout
---

<script setup>
import { navData } from './data'
import NavList from '@/components/NavList.vue';
</script>

<style lang="scss">
.m-nav-layout {
    --vp-layout-max-width: 1660px;
    .container {
      max-width: 1660px !important;
    }
    .content-container,
    .content {
      max-width: 100% !important;
    }

    /* aside 样式 */
    .aside {
      padding-left: 0;
      max-width: 224px;
    }
    .content .copyright {
      display: none;
    }

    /* tip */
    .tip {
      .custom-block-title {
        display: none;
      }
      p {
        margin: 0;
      }
    }
    .vp-doc h2 {
      margin-top: 24px;
    }
}
</style>


# 前端导航

<NavList v-for="(item,index) in navData" :title="item.title" :items="item.items" :key="index"></NavList>
