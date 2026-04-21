<template>
  <section
    :id="section.id"
    class="leistung-section"
    :aria-labelledby="`${section.id}-heading`"
  >
    <div class="contain">
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">

        <!-- Main content -->
        <div>
          <p class="eyebrow mb-4"
             style="font-size: var(--font-size-sm); letter-spacing: 0.16em;">
            {{ section.eyebrow }}
          </p>

          <h2
            :id="`${section.id}-heading`"
            class="section-h2 mb-8"
          >
            {{ section.heading }}
          </h2>

          <div class="space-y-5 mb-8">
            <p
              v-for="(para, i) in section.body"
              :key="i"
              class="leading-relaxed"
              style="font-size: 16px; color: var(--color-text-body);"
            >
              {{ para }}
            </p>
          </div>

          <!-- Tags (Photovoltaik) -->
          <div v-if="section.tags" class="flex gap-2 flex-wrap mb-8">
            <span v-for="tag in section.tags" :key="tag" class="tag-badge">
              {{ tag }}
            </span>
          </div>

          <!-- CTA button -->
          <button
            class="btn-primary inline-flex"
            @click="openContactModal('kontakt', section.id)"
          >
            {{ ctaButtonLabel }}
          </button>
        </div>

        <!-- Sidebar -->
        <div class="space-y-5">

          <!-- Points card -->
          <div class="points-card">
            <h3
              class="font-bold mb-4"
              style="font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-secondary);"
            >
              {{ pointsCardHeading }}
            </h3>
            <ul class="space-y-3 list-none p-0 m-0">
              <li
                v-for="point in section.points"
                :key="point"
                class="points-item"
              >
                <span class="points-check" aria-hidden="true">✓</span>
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>

          <!-- Info box (Energieaudit) -->
          <div v-if="section.info" class="info-box">
            <p
              class="font-bold mb-3"
              style="font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-secondary);"
            >
              Gilt für
            </p>
            <div
              v-for="([key, val]) in section.info"
              :key="key"
              class="flex justify-between gap-3 text-sm py-1.5"
              style="border-bottom: 1px solid var(--color-border-soft);"
            >
              <span class="font-bold text-text-near-black">{{ key }}</span>
              <span class="text-text-soft text-right">{{ val }}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useModals } from '@/composables/useModals'

defineProps({
  section:          { type: Object, required: true },
  pointsCardHeading:{ type: String, required: true },
  ctaButtonLabel:   { type: String, required: true }
})

const { openContactModal } = useModals()
</script>
