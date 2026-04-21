<template>
  <section class="section-py">
    <div class="contain">
      <h2 class="section-h2 mb-10">{{ c.heading }}</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

        <!-- Contact info list -->
        <div>
          <div
            v-for="item in c.items"
            :key="item.label"
            class="kontakt-info-item"
          >
            <component
              :is="icons[item.icon]"
              :size="20"
              class="kontakt-info-icon"
              aria-hidden="true"
            />
            <div>
              <p
                class="font-bold mb-0.5"
                style="font-size: var(--font-size-caption); letter-spacing: 0.08em; text-transform: uppercase; color: var(--color-secondary);"
              >
                {{ item.label }}
              </p>
              <a
                v-if="item.href"
                :href="item.href"
                class="hover:text-accent transition-colors duration-200"
                style="font-size: var(--font-size-nav-primary); color: var(--color-text-body);"
              >
                {{ item.value }}
              </a>
              <p
                v-else
                style="font-size: var(--font-size-nav-primary); color: var(--color-text-body);"
              >
                {{ item.value }}
              </p>
            </div>
          </div>
        </div>

        <!-- Map placeholder -->
        <div class="map-placeholder">
          <span>{{ c.mapPlaceholder }}</span>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { MapPin, Phone, Mail, Clock } from 'lucide-vue-next'

defineProps({
  c: { type: Object, required: true },
})

const icons = { MapPin, Phone, Mail, Clock }
</script>
