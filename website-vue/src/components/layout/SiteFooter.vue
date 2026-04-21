<template>
  <footer class="site-footer" aria-label="Seitenfu&szlig;">
    <div class="contain py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

        <!-- Brand column -->
        <div class="md:col-span-1">
          <RouterLink to="/" class="brand mb-4 inline-flex">
            <img src="/assets/images/logo.png" :alt="c.footer.brand.name" width="36" height="36" />
            <div class="ml-3">
              <span class="brand-name">{{ c.footer.brand.name }}</span>
            </div>
          </RouterLink>
          <p class="text-secondary text-sm leading-relaxed mt-3 max-w-[220px]">
            {{ c.footer.brand.tagline }}
          </p>
        </div>

        <!-- Contact -->
        <div>
          <p class="eyebrow mb-4">Kontakt</p>
          <ul class="space-y-2 text-sm text-secondary leading-relaxed" style="list-style:none;padding:0;margin:0;">
            <li>{{ c.footer.address.company }}</li>
            <li>{{ c.footer.address.street }}</li>
            <li>
              <a :href="c.footer.address.emailHref" class="hover:text-accent transition-colors duration-200">
                {{ c.footer.address.email }}
              </a>
            </li>
            <li>
              <a :href="c.footer.address.phoneHref" class="hover:text-accent transition-colors duration-200">
                {{ c.footer.address.phone }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Leistungen -->
        <div>
          <p class="eyebrow mb-4">{{ c.footer.colLeistungen.heading }}</p>
          <ul class="space-y-2" style="list-style:none;padding:0;margin:0;">
            <li v-for="link in c.footer.colLeistungen.links" :key="link.href">
              <RouterLink
                :to="link.href"
                class="text-sm text-secondary hover:text-accent transition-colors duration-200"
              >
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Rechtliches -->
        <div>
          <p class="eyebrow mb-4">{{ c.footer.colRechtliches.heading }}</p>
          <ul class="space-y-2" style="list-style:none;padding:0;margin:0;">
            <li v-for="link in c.footer.colRechtliches.links" :key="link.href">
              <RouterLink
                :to="link.href"
                class="text-sm text-secondary hover:text-accent transition-colors duration-200"
              >
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="gold-divider mb-6"></div>
      <div class="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-secondary">
        <span>{{ c.footer.copyright }}</span>
        <span>{{ c.footer.tagline }}</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import content from '@/contents/contents.json'
const c = content.shared
</script>
