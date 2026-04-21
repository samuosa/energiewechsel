<template>
  <HeroSection :c="c.hero" />
  <GoldDivider />
  <StatsBar />
  <GoldDivider />
  <ServicesSection :c="c.services" />
  <GoldDivider />
  <WhyUsSection :c="c.whyUs" />
  <GoldDivider />
  <TestimonialsSection :c="c.testimonials" />
  <CTABanner :c="c.cta" />
</template>

<script setup>
import { useHead } from '@vueuse/head'
import content from '@/contents/contents.json'
import HeroSection from '@/components/home/HeroSection.vue'
import ServicesSection from '@/components/home/ServicesSection.vue'
import WhyUsSection from '@/components/home/WhyUsSection.vue'
import TestimonialsSection from '@/components/home/TestimonialsSection.vue'
import StatsBar from '@/components/shared/StatsBar.vue'
import CTABanner from '@/components/shared/CTABanner.vue'
import GoldDivider from '@/components/shared/GoldDivider.vue'

const c = content.homePage

useHead({
  title: c.meta.title,
  meta: [
    { name: 'description',        content: c.meta.description },
    { property: 'og:title',       content: c.meta.title },
    { property: 'og:description', content: c.meta.description },
    { property: 'og:type',        content: 'website' },
    { name: 'twitter:card',       content: 'summary' },
    { name: 'twitter:title',      content: c.meta.title },
    { name: 'twitter:description',content: c.meta.description }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: content.shared.footer.brand.name,
        description: c.meta.description,
        address: {
          '@type': 'PostalAddress',
          streetAddress: content.shared.footer.address.street
        },
        telephone: content.shared.footer.address.phone,
        email: content.shared.footer.address.email,
        areaServed: 'Rhein-Main Gebiet',
        serviceType: 'Energieberatung'
      })
    }
  ]
})
</script>
