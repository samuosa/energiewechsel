<template>
  <ModalShell
    :open="state.bewertungOpen"
    :title="c.title"
    @close="closeAll"
  >
    <form class="space-y-5" @submit.prevent="handleSubmit" novalidate>

      <!-- Sterne-Bewertung -->
      <div class="form-group">
        <label class="form-label">
          {{ c.sterneLabel }}<span class="required-mark" aria-hidden="true">*</span>
        </label>
        <div
          class="star-rating"
          role="group"
          :aria-label="c.sterneLabel"
        >
          <button
            v-for="n in 5"
            :key="n"
            type="button"
            class="star-btn"
            :class="{ filled: n <= (hoverSterne || sterne) }"
            @mouseenter="hoverSterne = n"
            @mouseleave="hoverSterne = 0"
            @click="sterne = n"
            :aria-label="`${n} ${n === 1 ? 'Stern' : 'Sterne'}`"
            :aria-pressed="n <= sterne"
          >
            <Star
              :size="28"
              :fill="n <= (hoverSterne || sterne) ? 'currentColor' : 'none'"
              stroke-width="1.5"
            />
          </button>
        </div>
        <p class="text-xs" style="color: var(--color-secondary);">{{ c.sterneHint }}</p>
      </div>

      <!-- Nickname -->
      <div class="form-group">
        <label class="form-label" for="bew-nickname">
          {{ c.nicknameLabel }}<span class="required-mark" aria-hidden="true">*</span>
        </label>
        <input
          id="bew-nickname"
          v-model="nickname"
          type="text"
          class="form-input"
          :placeholder="c.nicknamePlaceholder"
          autocomplete="nickname"
        />
      </div>

      <!-- E-Mail -->
      <div class="form-group">
        <label class="form-label" for="bew-email">
          {{ c.emailLabel }}<span class="required-mark" aria-hidden="true">*</span>
        </label>
        <input
          id="bew-email"
          v-model="emailVal"
          type="email"
          class="form-input"
          :placeholder="c.emailPlaceholder"
          autocomplete="email"
        />
        <p class="text-xs" style="color: var(--color-secondary);">{{ c.emailHint }}</p>
      </div>

      <!-- Organisation -->
      <div class="form-group">
        <label class="form-label" for="bew-org">{{ c.organisationLabel }}</label>
        <input
          id="bew-org"
          v-model="organisation"
          type="text"
          class="form-input"
          :placeholder="c.organisationPlaceholder"
        />
      </div>

      <!-- Rolle -->
      <div class="form-group">
        <label class="form-label" for="bew-rolle">{{ c.rolleLabel }}</label>
        <input
          id="bew-rolle"
          v-model="rolle"
          type="text"
          class="form-input"
          :placeholder="c.rollePlaceholder"
        />
      </div>

      <!-- Überschrift -->
      <div class="form-group">
        <label class="form-label" for="bew-ueberschrift">
          {{ c.ueberschriftLabel }}<span class="required-mark" aria-hidden="true">*</span>
        </label>
        <input
          id="bew-ueberschrift"
          v-model="ueberschrift"
          type="text"
          class="form-input"
          :placeholder="c.ueberschriftPlaceholder"
        />
      </div>

      <!-- Beschreibung -->
      <div class="form-group">
        <label class="form-label" for="bew-beschreibung">{{ c.beschreibungLabel }}</label>
        <textarea
          id="bew-beschreibung"
          v-model="beschreibung"
          class="form-textarea"
          :placeholder="c.beschreibungPlaceholder"
          rows="4"
        />
      </div>

      <!-- Submit -->
      <div class="pt-2">
        <p class="text-xs mb-3" style="color: var(--color-secondary);">
          <span aria-hidden="true" style="color: var(--color-accent);">*</span> Pflichtfelder
        </p>
        <button
          type="submit"
          class="btn-primary w-full"
          :class="{ 'btn-submit-disabled': !isValid }"
          :disabled="!isValid"
        >
          {{ c.submitLabel }}
        </button>
      </div>
    </form>
  </ModalShell>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { Star } from 'lucide-vue-next'
import ModalShell from './ModalShell.vue'
import { useModals } from '@/composables/useModals'
import content from '@/contents/contents.json'

const { state, closeAll } = useModals()
const c = content.bewertungForm

const sterne       = ref(0)
const hoverSterne  = ref(0)
const nickname     = ref('')
const emailVal     = ref('')
const organisation = ref('')
const rolle        = ref('')
const ueberschrift = ref('')
const beschreibung = ref('')

// Reset on close
watch(
  () => state.bewertungOpen,
  (open) => {
    if (!open) {
      sterne.value       = 0
      hoverSterne.value  = 0
      nickname.value     = ''
      emailVal.value     = ''
      organisation.value = ''
      rolle.value        = ''
      ueberschrift.value = ''
      beschreibung.value = ''
    }
  }
)

const isValid = computed(() =>
  sterne.value > 0 &&
  nickname.value.trim().length > 0 &&
  emailVal.value.trim().length > 0 &&
  ueberschrift.value.trim().length > 0
)

function handleSubmit() {
  if (!isValid.value) return
  console.log({
    sterne:       sterne.value,
    nickname:     nickname.value,
    email:        emailVal.value,
    organisation: organisation.value,
    rolle:        rolle.value,
    ueberschrift: ueberschrift.value,
    beschreibung: beschreibung.value,
  })
  closeAll()
}
</script>
