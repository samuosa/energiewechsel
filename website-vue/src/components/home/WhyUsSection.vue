<template>
  <section class="why-section section-py">
    <div class="contain">

      <!-- Section head -->
      <div class="mb-14">
        <p class="eyebrow mb-3">{{ c.eyebrow }}</p>
        <h2 class="section-h2">{{ c.heading }}</h2>
      </div>

      <!-- Why items -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
        <div v-for="item in c.items" :key="item.title" class="flex flex-col gap-4">

          <!-- Icon placeholder -->
          <div
            class="w-14 h-14 rounded flex items-center justify-center"
            style="border: 1px solid var(--color-border-accent); background: rgba(133,167,4,0.06);"
            aria-hidden="true"
          >
            <span class="text-accent font-bold text-xl">✓</span>
          </div>

          <h3
            class="font-bold text-text-near-black"
            style="font-size: var(--font-size-why-title); line-height: var(--line-height-heading-mid);"
          >
            {{ item.title }}
          </h3>

          <p class="text-text-soft leading-relaxed" style="font-size: 15px;">
            {{ item.text }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
defineProps({
  c: { type: Object, required: true }
})
</script>
