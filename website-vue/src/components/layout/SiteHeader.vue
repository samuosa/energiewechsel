<template>
  <header class="site-header">
    <div class="header-accent-bar"></div>

    <div class="contain header-inner">
      <!-- Brand -->
      <RouterLink :to="'/'" class="brand" :aria-label="c.nav.brand.ariaLabel">
        <img :src="`${base}assets/images/logo.png`" :alt="c.nav.brand.name" width="32" height="32" />
        <div>
          <span class="brand-name">{{ c.nav.brand.name }}</span>
          <small class="brand-tagline">{{ c.nav.brand.tagline }}</small>
        </div>
      </RouterLink>

      <!-- Primary nav -->
      <nav :aria-label="c.nav.primaryNavAriaLabel" class="primary-nav">
        <RouterLink
          v-for="(link, key) in c.nav.links"
          :key="key"
          :to="link.href"
          class="nav-link"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <!-- CTA -->
      <button class="btn-primary nav-cta text-sm ml-6" @click="openContactModal('termin')">
        {{ c.nav.ctaButton.label }}
      </button>

      <!-- Mobile hamburger -->
      <button
        class="mobile-toggle"
        @click="menuOpen = !menuOpen"
        :aria-label="c.nav.menuAriaLabel"
        :aria-expanded="menuOpen"
      >
        <span :class="{ 'rotate-45 translate-y-[7px]': menuOpen }"></span>
        <span :class="{ 'opacity-0': menuOpen }"></span>
        <span :class="{ '-rotate-45 -translate-y-[7px]': menuOpen }"></span>
      </button>
    </div>

    <!-- Mobile nav drawer -->
    <Transition name="slide">
      <div
        v-if="menuOpen"
        class="mobile-nav"
        :aria-label="c.nav.mobileNavAriaLabel"
      >
        <RouterLink
          v-for="(link, key) in c.nav.links"
          :key="key"
          :to="link.href"
          class="mobile-nav-link"
          @click="menuOpen = false"
        >
          {{ link.label }}
        </RouterLink>
        <button
          class="btn-primary mobile-cta"
          @click="openContactModal('termin'); menuOpen = false"
        >
          {{ c.nav.ctaButton.label }}
        </button>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import content from '@/contents/contents.json'
import { useModals } from '@/composables/useModals'

const base = import.meta.env.BASE_URL
const c = content.shared
const menuOpen = ref(false)
const router = useRouter()
const { openContactModal } = useModals()

router.afterEach(() => { menuOpen.value = false })
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s cubic-bezier(.2,.7,.2,1);
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
