<template>
  <section class="section-py">
    <div class="contain">

      <!-- Section head -->
      <div class="mb-3">
        <p class="eyebrow mb-3">{{ c.eyebrow }}</p>
        <h2 class="section-h2">{{ c.heading }}</h2>
      </div>

      <!-- Placeholder badge -->
      <p
        class="mb-10 text-xs font-bold tracking-widest uppercase px-3 py-1.5 inline-block rounded"
        style="color: var(--color-gold-start); background: rgba(177,132,50,0.08); border: 1px solid rgba(177,132,50,0.2);"
      >
        {{ c.placeholderBadge }}
      </p>

      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article
          v-for="item in c.items"
          :key="item.name"
          class="testimonial-card"
        >
          <!-- Quote mark -->
          <div
            class="text-accent mb-4 leading-none select-none"
            style="font-size: 56px; line-height: 1; font-family: Georgia, serif;"
            aria-hidden="true"
          >
            "
          </div>

          <blockquote class="text-text-body leading-relaxed mb-6" style="font-size: 15px;">
            {{ item.quote }}
          </blockquote>

          <footer class="flex items-center justify-between gap-4">
            <div>
              <p class="font-bold text-sm text-text-near-black">{{ item.name }}</p>
              <p class="text-secondary text-xs mt-0.5">{{ item.role }}</p>
            </div>
            <span
              class="font-bold text-sm px-3 py-1 rounded shrink-0"
              style="color: var(--color-accent); background: rgba(133,167,4,0.08); font-size: 13px;"
              :aria-label="`Ersparnis: ${item.savings}`"
            >
              {{ item.savings }}
            </span>
          </footer>
        </article>
      </div>

    </div>
  </section>
</template>

<script setup>
defineProps({
  c: { type: Object, required: true }
})
</script>
