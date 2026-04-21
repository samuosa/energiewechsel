<template>
  <section class="hero-section" aria-label="Hero">
    <div class="hero-glow" aria-hidden="true"></div>

    <div class="contain">
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-center">

        <!-- Content -->
        <div>
          <p class="eyebrow mb-5">{{ c.eyebrow }}</p>

          <h1 class="hero-h1 mb-7">
            <span class="text-gold">{{ c.line1 }}</span><br>
            {{ c.line2 }}<br>
            {{ c.line3 }}
          </h1>

          <p class="text-text-soft text-lg leading-relaxed mb-8 max-w-xl">
            {{ c.subtitle }}
          </p>

          <div class="flex flex-wrap gap-3 mb-5">
            <a :href="c.ctaPrimary.href" class="btn-primary">
              {{ c.ctaPrimary.label }}
            </a>
            <RouterLink :to="c.ctaSecondary.href" class="btn-secondary">
              {{ c.ctaSecondary.label }}
            </RouterLink>
          </div>

          <p class="text-secondary" style="font-size: var(--font-size-xs); letter-spacing: 0.06em;">
            {{ c.availabilityNote }}
          </p>
        </div>

        <!-- Portrait -->
        <div class="relative hidden lg:block">
          <div
            class="portrait-placeholder aspect-[4/5] flex items-end overflow-hidden"
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

            <!-- Caption -->
            <div class="absolute bottom-0 left-0 right-0 p-5"
                 style="background: linear-gradient(0deg, rgba(0,0,0,0.45) 0%, transparent 100%);">
              <p class="text-white font-bold text-sm leading-tight">{{ c.portrait.caption1 }}</p>
              <p class="text-white/70 text-xs mt-0.5">{{ c.portrait.caption2 }}</p>
            </div>
          </div>

          <!-- Decorative dot -->
          <div
            class="absolute -bottom-3 -right-3 w-3 h-3 rounded-full bg-accent"
            style="box-shadow: var(--shadow-dot-accent);"
            aria-hidden="true"
          ></div>
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
  // Only show image if it resolves (not a placeholder path)
  const img = new Image()
  img.onload = () => { portraitLoaded.value = true }
  img.src = '/assets/images/beraterbild.png'
})
</script>
