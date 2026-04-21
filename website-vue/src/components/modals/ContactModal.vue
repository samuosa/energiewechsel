<template>
  <ModalShell
    :open="state.contactOpen"
    :title="modalTitle"
    @close="closeAll"
  >
    <form class="space-y-5" @submit.prevent="handleSubmit" novalidate>

      <!-- Anfrage -->
      <div class="form-group">
        <label class="form-label">
          {{ c.anfrageLabel }}<span class="required-mark" aria-hidden="true">*</span>
        </label>
        <Select
          v-model="anfrage"
          :options="c.anfrageOptions"
          optionLabel="label"
          :placeholder="c.anfragePlaceholder"
          :pt="{
            root:     { class: 'form-input flex items-center justify-between cursor-pointer h-auto min-h-[48px] py-0', style: 'background: var(--input-bg);' },
            label:    { class: 'flex-1 py-3' },
            dropdown: { class: 'flex items-center px-3', style: 'color: var(--color-secondary);' },
          }"
        >
          <template #dropdownicon>
            <ChevronDown :size="16" />
          </template>
        </Select>
      </div>

      <!-- Telefon -->
      <div class="form-group">
        <label class="form-label" for="contact-telefon">
          {{ c.telefonLabel }}<span class="required-mark" aria-hidden="true">*</span>
        </label>
        <input
          id="contact-telefon"
          v-model="telefon"
          type="tel"
          class="form-input"
          :placeholder="c.telefonPlaceholder"
          autocomplete="tel"
        />
      </div>

      <!-- E-Mail -->
      <div class="form-group">
        <label class="form-label" for="contact-email">{{ c.emailLabel }}</label>
        <input
          id="contact-email"
          v-model="email"
          type="email"
          class="form-input"
          :placeholder="c.emailPlaceholder"
          autocomplete="email"
        />
      </div>

      <!-- Nachricht -->
      <div class="form-group">
        <label class="form-label" for="contact-nachricht">{{ c.nachrichtLabel }}</label>
        <textarea
          id="contact-nachricht"
          v-model="nachricht"
          class="form-textarea"
          :placeholder="c.nachrichtPlaceholder"
          rows="4"
        />
      </div>

      <!-- Dateianhang -->
      <div class="form-group">
        <label class="form-label">{{ c.anhangLabel }}</label>
        <p class="text-xs" style="color: var(--color-secondary);">{{ c.anhangHint }}</p>
        <label class="file-upload-btn">
          <Paperclip :size="15" aria-hidden="true" />
          <span>{{ fileLabel }}</span>
          <input
            type="file"
            multiple
            class="sr-only"
            @change="onFileSelect"
          />
        </label>
      </div>

      <!-- Submit -->
      <div class="pt-2">
        <p class="text-xs mb-3" style="color: var(--color-secondary);">
          <span aria-hidden="true" style="color: var(--color-accent);">*</span> {{ c.requiredHint }}
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
import Select from 'primevue/select'
import { ChevronDown, Paperclip } from 'lucide-vue-next'
import ModalShell from './ModalShell.vue'
import { useModals } from '@/composables/useModals'
import content from '@/contents/contents.json'

const { state, closeAll } = useModals()
const c = content.contactForm

const anfrage  = ref(null)
const telefon  = ref('')
const email    = ref('')
const nachricht = ref('')
const anhaenge = ref([])

// Preselect Anfrage when modal opens with a hint
watch(
  () => state.contactPreselect,
  (val) => {
    if (val) {
      anfrage.value = c.anfrageOptions.find(o => o.value === val) ?? null
    }
  }
)

// Reset form when modal closes
watch(
  () => state.contactOpen,
  (open) => {
    if (!open) {
      telefon.value   = ''
      email.value     = ''
      nachricht.value = ''
      anhaenge.value  = []
    }
  }
)

const modalTitle = computed(() =>
  state.contactMode === 'termin' ? c.titleTermin : c.titleKontakt
)

const isValid = computed(() =>
  anfrage.value !== null && telefon.value.trim().length > 0
)

const fileLabel = computed(() =>
  anhaenge.value.length
    ? `${anhaenge.value.length} Datei${anhaenge.value.length > 1 ? 'en' : ''} ausgewählt`
    : 'Datei auswählen'
)

function onFileSelect(event) {
  anhaenge.value = Array.from(event.target.files ?? [])
}

function handleSubmit() {
  if (!isValid.value) return
  console.log({
    anfrage:  anfrage.value,
    telefon:  telefon.value,
    email:    email.value,
    nachricht: nachricht.value,
    anhaenge: anhaenge.value,
  })
  closeAll()
}
</script>
