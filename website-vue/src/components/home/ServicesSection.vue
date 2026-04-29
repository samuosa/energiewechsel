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
          class="service-card group flex flex-col relative"
        >
          <!-- Edge-to-edge top image -->
          <div class="relative h-48 w-full overflow-hidden" v-if="item.image">
            <img :src="item.image" :alt="item.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <!-- Gradient overlay for subtle transition -->
            <div class="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
          </div>

          <div class="flex-1 flex flex-col p-8" :class="{'pt-4': item.image}">
            <div class="flex justify-between items-center mb-4">
              <span class="eyebrow" style="font-size: var(--font-size-xs);">{{ item.n }}</span>
              <component :is="item.icon" v-if="item.icon" class="w-6 h-6 text-accent" />
            </div>

            <h3 class="font-bold mb-3" style="font-size: var(--font-size-service-title); line-height: var(--line-height-heading-mid);">
              {{ item.title }}
            </h3>

            <p class="text-text-soft leading-relaxed mb-5 flex-grow" style="font-size: 15px;">
              {{ item.text }}
            </p>

            <RouterLink
              :to="item.href"
              class="text-accent mt-auto font-bold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all duration-200"
              style="letter-spacing: 0.02em;"
            >
              {{ c.linkLabel }}
              <span aria-hidden="true">→</span>
            </RouterLink>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { Zap, Sun, ThermometerSun, ClipboardCheck } from 'lucide-vue-next'

defineProps({
  c: { type: Object, required: true }
})
</script>
