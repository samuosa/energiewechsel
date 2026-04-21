<template>
  <section
    class="section-py"
    style="background: var(--color-bg-subtle); border-top: 1px solid var(--color-border);"
  >
    <div class="contain">
      <div class="max-w-xl">
        <h2 class="section-h2 mb-5">{{ c.heading }}</h2>
        <p
          class="leading-relaxed"
          style="font-size: 17px; color: var(--color-text-body); line-height: 1.7;"
        >
          {{ c.body }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  c: { type: Object, required: true }
})
</script>
