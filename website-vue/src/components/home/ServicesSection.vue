<template>
  <section class="section-py" id="leistungen">
    <div class="contain">

      <!-- Section head -->
      <div class="mb-14">
        <p class="eyebrow mb-3">{{ c.eyebrow }}</p>
        <h2 class="section-h2 mb-4">{{ c.heading }}</h2>
        <p class="text-text-soft text-lg max-w-xl">{{ c.lede }}</p>
      </div>

      <!-- Cards grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div
          v-for="item in c.items"
          :key="item.n"
          class="service-card group"
        >
          <span
            class="eyebrow mb-4 block"
            style="font-size: var(--font-size-xs);"
          >{{ item.n }}</span>

          <span class="gold-bar mb-5"></span>

          <h3
            class="font-bold mb-3"
            style="font-size: var(--font-size-service-title); line-height: var(--line-height-heading-mid);"
          >
            {{ item.title }}
          </h3>

          <p class="text-text-soft leading-relaxed mb-5" style="font-size: 15px;">
            {{ item.text }}
          </p>

          <RouterLink
            :to="item.href"
            class="text-accent font-bold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all duration-200"
            style="letter-spacing: 0.02em;"
          >
            {{ c.linkLabel }}
            <span aria-hidden="true">→</span>
          </RouterLink>
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
