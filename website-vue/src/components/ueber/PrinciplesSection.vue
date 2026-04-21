<template>
  <section class="section-py">
    <div class="contain">
      <h2 class="section-h2 mb-14">{{ c.heading }}</h2>

      <div class="space-y-0 divide-y" style="border-color: var(--color-border);">
        <div
          v-for="item in c.items"
          :key="item.n"
          class="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-10 py-12 first:pt-0"
        >
          <!-- Number -->
          <div class="principle-num" aria-hidden="true">{{ item.n }}</div>

          <!-- Content -->
          <div>
            <h3
              class="font-bold mb-3"
              style="font-size: var(--font-size-principle-h3); line-height: var(--line-height-heading-mid); color: var(--color-text-primary);"
            >
              {{ item.title }}
            </h3>
            <p
              class="leading-relaxed max-w-xl"
              style="font-size: 16px; color: var(--color-text-body); line-height: 1.65;"
            >
              {{ item.text }}
            </p>
          </div>
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
