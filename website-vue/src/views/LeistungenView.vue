<template>
  <!-- Page hero -->
  <section class="page-hero">
    <div class="contain">
      <p class="eyebrow mb-4">{{ c.hero.eyebrow }}</p>
      <h1 class="page-h1 mb-5">{{ c.hero.heading }}</h1>
      <p class="text-text-soft text-lg max-w-lg">{{ c.hero.subtitle }}</p>
    </div>
  </section>

  <!-- Sticky subnav -->
  <SubNav :sections="c.sections" :active-section="activeSection" />

  <!-- Leistung sections -->
  <LeistungSection
    v-for="section in c.sections"
    :key="section.id"
    :section="section"
    :points-card-heading="c.pointsCardHeading"
    :cta-button-label="c.ctaButtonLabel"
  />

  <!-- CTA -->
  <CTABanner :c="c.cta" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useHead } from '@vueuse/head'
import content from '@/contents/contents.json'
import SubNav from '@/components/leistungen/SubNav.vue'
import LeistungSection from '@/components/leistungen/LeistungSection.vue'
import CTABanner from '@/components/shared/CTABanner.vue'

const c = content.leistungenPage
const activeSection = ref(c.sections[0].id)

let observers = []

onMounted(() => {
  c.sections.forEach(section => {
    const el = document.getElementById(section.id)
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) activeSection.value = section.id
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )
    observer.observe(el)
    observers.push(observer)
  })
})

onUnmounted(() => {
  observers.forEach(o => o.disconnect())
  observers = []
})

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
