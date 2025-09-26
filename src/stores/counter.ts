import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const guitarMode = ref(true)
  const isPlaying = ref(false)
  // const doubleCount = computed(() => count.value * 2)
  function toggleGuitar() {
    guitarMode.value = !guitarMode.value
  }

  return { count, guitarMode, toggleGuitar, isPlaying }
})
