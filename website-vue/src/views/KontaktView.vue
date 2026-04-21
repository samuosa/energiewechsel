<template>
  <KontaktHero :c="c.hero" @open-modal="openContactModal('kontakt', 'allgemein')" />
  <GoldDivider />
  <KontaktInfo :c="c.info" />
  <GoldDivider />
  <CTABanner :c="c.cta" />
</template>

<script setup>
import { useHead } from '@vueuse/head'
import content from '@/contents/contents.json'
import KontaktHero from '@/components/kontakt/KontaktHero.vue'
import KontaktInfo from '@/components/kontakt/KontaktInfo.vue'
import CTABanner from '@/components/shared/CTABanner.vue'
import GoldDivider from '@/components/shared/GoldDivider.vue'
import { useModals } from '@/composables/useModals'

const c = content.kontaktPage
const { openContactModal } = useModals()

useHead({
  title: c.meta.title,
  meta: [
    { name: 'description',        content: c.meta.description },
    { property: 'og:title',       content: c.meta.title },
    { property: 'og:description', content: c.meta.description },
    { property: 'og:type',        content: 'website' },
  ],
})
</script>
