<template>
  <section class="cta-banner">
    <div class="contain py-20">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="section-h2 mb-3">{{ c.title }}</h2>
        <p class="text-text-soft text-lg mb-8">{{ c.sub }}</p>
        <div class="flex flex-wrap gap-3 justify-center">
          <a :href="c.primary.href" class="btn-primary">{{ c.primary.label }}</a>
          <a
            v-if="c.secondary"
            :href="c.secondary.href"
            class="btn-secondary"
          >
            {{ c.secondary.label }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  c: {
    type: Object,
    required: true
  }
})
</script>
