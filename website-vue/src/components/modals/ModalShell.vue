<template>
  <Teleport to="body">
    <!-- Overlay -->
    <Transition name="modal-fade">
      <div
        v-if="open"
        class="modal-overlay"
        aria-hidden="true"
        @click="emit('close')"
      />
    </Transition>

    <!-- Panel -->
    <Transition name="modal-slide">
      <div
        v-if="open"
        class="modal-panel"
        role="dialog"
        :aria-modal="true"
        :aria-label="title"
        @click.stop
      >
        <div class="modal-header">
          <span class="modal-title">{{ title }}</span>
          <button
            type="button"
            class="modal-close-btn"
            aria-label="Schließen"
            @click="emit('close')"
          >
            <X :size="18" />
          </button>
        </div>

        <div class="modal-body">
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { X } from 'lucide-vue-next'

defineProps({
  open:  { type: Boolean, required: true },
  title: { type: String,  required: true },
})

const emit = defineEmits(['close'])
</script>
