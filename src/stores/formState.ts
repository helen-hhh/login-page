import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFormStateStore = defineStore('formState', () => {
  const state = ref(0);

  function setState(newState: number) {
    state.value = newState;
  }

  return { state, setState }
})
