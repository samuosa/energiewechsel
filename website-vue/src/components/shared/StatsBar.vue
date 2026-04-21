<template>
  <section class="stats-bar" :aria-label="c.stats.ariaLabel">
    <div class="contain py-14">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        <div
          v-for="(item, i) in c.stats.items"
          :key="i"
          class="text-center md:text-left md:border-l md:first:border-l-0 md:pl-8 md:first:pl-0"
          style="border-color: var(--color-border-medium);"
        >
          <div class="kpi-num">{{ item.num }}</div>
          <div class="text-secondary text-sm leading-tight mt-1">{{ item.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import content from '@/contents/contents.json'
const c = content.shared
</script>
