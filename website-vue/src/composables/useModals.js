import { reactive, readonly } from 'vue'

const state = reactive({
  contactOpen:      false,
  contactMode:      'kontakt', // 'kontakt' | 'termin'
  contactPreselect: null,      // matches anfrageOptions[].value
  bewertungOpen:    false,
})

export function useModals() {
  function openContactModal(mode = 'kontakt', preselectedAnfrage = null) {
    state.contactMode      = mode
    state.contactPreselect = preselectedAnfrage
    state.contactOpen      = true
    state.bewertungOpen    = false
  }

  function openBewertungModal() {
    state.bewertungOpen = true
    state.contactOpen   = false
  }

  function closeAll() {
    state.contactOpen   = false
    state.bewertungOpen = false
  }

  return {
    state: readonly(state),
    openContactModal,
    openBewertungModal,
    closeAll,
  }
}
