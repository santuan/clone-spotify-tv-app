import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const guitar_mode = ref(true)
  const guitar = ref(false)
  const is_playing = ref(false)
  const song_active_screen = ref()
  const show_chords_videotutorial = ref("partituras")

  function toggleGuitar() {
    guitar_mode.value = !guitar_mode.value
  }

  return { guitar_mode, toggleGuitar, is_playing, guitar, song_active_screen, show_chords_videotutorial }
})
