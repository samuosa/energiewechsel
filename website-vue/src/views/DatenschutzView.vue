<template>
  <section class="page-hero">
    <div class="contain">
      <h1 class="page-h1">{{ c.hero.heading }}</h1>
    </div>
  </section>

  <section class="section-py" style="padding-top: 56px;">
    <div class="contain">
      <div class="max-w-2xl space-y-10">
        <div v-for="section in c.sections" :key="section.heading">
          <h2
            class="font-bold mb-3"
            style="font-size: var(--font-size-why-title); color: var(--color-text-primary);"
          >
            {{ section.heading }}
          </h2>
          <p
            class="leading-relaxed"
            style="color: var(--color-text-body); white-space: pre-line;"
          >
            {{ section.content }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useHead } from '@vueuse/head'
import content from '@/contents/contents.json'

const c = content.datenschutzPage

useHead({
  title: c.meta.title,
  meta: [
    { name: 'description', content: c.meta.description },
  ],
})
</script>
