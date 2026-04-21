<template>
  <a href="#main-content" class="skip-link">{{ c.skipLink }}</a>
  <SiteHeader />
  <main id="main-content">
    <RouterView />
  </main>
  <SiteFooter />
</template>

<script setup>
import { useHead } from '@vueuse/head'
import SiteHeader from '@/components/layout/SiteHeader.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import content from '@/contents/contents.json'

const c = content.shared

useHead({
  htmlAttrs: { lang: 'de' },
  meta: [
    { name: 'theme-color', content: '#85a704' }
  ]
})
</script>
