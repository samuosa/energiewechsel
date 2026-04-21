<template>
  <section class="section-py pt-0" style="padding-top: calc(var(--header-h) + 96px);">
    <div class="contain">
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-14 lg:gap-20 items-start">

        <!-- Content -->
        <div>
          <p class="eyebrow mb-5">{{ c.eyebrow }}</p>

          <h1 class="about-h1 mb-8">
            {{ c.heading }}<br>
            <em class="not-italic text-gold">{{ c.headingEm }}</em>
          </h1>

          <p class="leading-relaxed max-w-xl" style="font-size: 17px; color: var(--color-text-body); line-height: 1.7;">
            {{ c.body }}
          </p>
        </div>

        <!-- Portrait -->
        <div class="hidden lg:block">
          <div
            class="portrait-placeholder overflow-hidden relative"
            style="aspect-ratio: 3/4; border-radius: var(--radius);"
            :aria-label="c.portrait.ariaLabel"
          >
            <img
              v-if="portraitLoaded"
              :src="c.portrait.src"
              :alt="c.portrait.ariaLabel"
              class="w-full h-full object-cover"
            />
            <div v-else class="w-full h-full flex items-center justify-center text-secondary text-sm p-8 text-center">
              {{ c.portrait.label }}
            </div>

            <div
              class="absolute bottom-0 left-0 right-0 p-4"
              style="background: linear-gradient(0deg, rgba(0,0,0,0.4) 0%, transparent 100%);"
            >
              <p class="text-white font-bold text-sm">{{ c.portrait.caption }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

defineProps({
  c: { type: Object, required: true }
})

const portraitLoaded = ref(false)
onMounted(() => {
  const img = new Image()
  img.onload = () => { portraitLoaded.value = true }
  img.src = '/assets/images/beraterbild.png'
})
</script>
