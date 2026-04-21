<template>
  <section class="cta-banner">
    <div class="contain py-20">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="section-h2 mb-3">{{ c.title }}</h2>
        <p class="text-text-soft text-lg mb-8">{{ c.sub }}</p>
        <div class="flex flex-wrap gap-3 justify-center">
          <button
            v-if="isModalLink(c.primary.href)"
            class="btn-primary"
            @click="handleModalLink(c.primary.href)"
          >
            {{ c.primary.label }}
          </button>
          <a v-else :href="c.primary.href" class="btn-primary">{{ c.primary.label }}</a>

          <template v-if="c.secondary">
            <button
              v-if="isModalLink(c.secondary.href)"
              class="btn-secondary"
              @click="handleModalLink(c.secondary.href)"
            >
              {{ c.secondary.label }}
            </button>
            <a v-else :href="c.secondary.href" class="btn-secondary">
              {{ c.secondary.label }}
            </a>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useModals } from '@/composables/useModals'

defineProps({
  c: { type: Object, required: true }
})

const { openContactModal } = useModals()

function isModalLink(href) {
  return href === '/#termin' || href === '/#kontakt'
}

function handleModalLink(href) {
  openContactModal(href === '/#termin' ? 'termin' : 'kontakt')
}
</script>
