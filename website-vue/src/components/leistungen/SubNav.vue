<template>
  <nav class="subnav" :aria-label="'Leistungen Navigation'">
    <div class="contain">
      <div class="subnav-inner">
        <a
          v-for="section in sections"
          :key="section.id"
          :href="`#${section.id}`"
          class="subnav-link"
          :class="{ active: activeSection === section.id }"
          @click.prevent="scrollTo(section.id)"
        >
          {{ section.navLabel }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  sections:      { type: Array,  required: true },
  activeSection: { type: String, default: '' }
})

function scrollTo(id) {
  const el = document.getElementById(id)
  if (!el) return
  const offset = 72 + 56 + 16 // header + subnav + buffer
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}
</script>
