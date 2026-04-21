<template>
  <IntroSection :c="c.intro" />
  <GoldDivider />
  <StatsBar />
  <GoldDivider />
  <ApproachSection :c="c.approach" />
  <PrinciplesSection :c="c.principles" />
  <TeamSection :c="c.team" />
  <CTABanner :c="c.cta" />
</template>

<script setup>
import { useHead } from '@vueuse/head'
import content from '@/contents/contents.json'
import IntroSection from '@/components/ueber/IntroSection.vue'
import ApproachSection from '@/components/ueber/ApproachSection.vue'
import PrinciplesSection from '@/components/ueber/PrinciplesSection.vue'
import TeamSection from '@/components/ueber/TeamSection.vue'
import StatsBar from '@/components/shared/StatsBar.vue'
import CTABanner from '@/components/shared/CTABanner.vue'
import GoldDivider from '@/components/shared/GoldDivider.vue'

const c = content.ueberMichPage

useHead({
  title: c.meta.title,
  meta: [
    { name: 'description',        content: c.meta.description },
    { property: 'og:title',       content: c.meta.title },
    { property: 'og:description', content: c.meta.description },
    { property: 'og:type',        content: 'website' }
  ]
})
</script>
