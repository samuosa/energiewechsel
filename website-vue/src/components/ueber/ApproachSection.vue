<template>
  <section class="section-py" style="background: var(--color-bg-subtle); border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
    <div class="contain">
      <div class="max-w-2xl">
        <h2 class="section-h2 mb-8">{{ c.heading }}</h2>
        <div class="space-y-5">
          <p
            v-for="(para, i) in c.paragraphs"
            :key="i"
            class="leading-relaxed"
            style="font-size: 17px; color: var(--color-text-near-black); line-height: 1.7;"
          >
            {{ para }}
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
