import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBackgroundStore = defineStore('background', () => {
  const state = ref(false);

  function setState(newState: boolean) {
    state.value = newState;
  }

  return { state, setState }
})
