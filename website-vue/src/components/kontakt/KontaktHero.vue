<template>
  <section class="page-hero" style="padding-bottom: 80px;">
    <div class="contain">
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-center">

        <!-- Content -->
        <div>
          <p class="eyebrow mb-4">{{ c.eyebrow }}</p>
          <h1 class="page-h1 mb-6">{{ c.heading }}</h1>
          <p
            class="mb-8 leading-relaxed max-w-xl"
            style="font-size: var(--font-size-body-lg); color: var(--color-text-soft);"
          >
            {{ c.subtitle }}
          </p>
          <button class="btn-primary" @click="emit('open-modal')">
            {{ c.ctaLabel }}
          </button>
        </div>

        <!-- Portrait -->
        <div class="hidden lg:block">
          <div
            class="portrait-placeholder relative"
            style="aspect-ratio: 3/4; overflow: hidden;"
          >
            <img
              v-if="imgLoaded"
              :src="c.portrait.src"
              :alt="c.portrait.ariaLabel"
              class="absolute inset-0 w-full h-full object-cover"
            />
            <div v-else class="absolute inset-0 flex items-center justify-center p-4">
              <span
                class="text-center"
                style="font-size: var(--font-size-xs); letter-spacing: 0.1em; color: var(--color-secondary); opacity: 0.7;"
              >
                {{ c.portrait.label }}
              </span>
            </div>
          </div>
          <p
            class="text-center mt-3"
            style="font-size: var(--font-size-caption); color: var(--color-secondary);"
          >
            {{ c.portrait.caption }}
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  c: { type: Object, required: true },
})

const emit = defineEmits(['open-modal'])

const imgLoaded = ref(false)

onMounted(() => {
  const img = new Image()
  img.onload = () => { imgLoaded.value = true }
  img.src = props.c.portrait.src
})
</script>
