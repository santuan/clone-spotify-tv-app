<script setup lang="ts">
import { useIdle } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { watch, computed } from 'vue'
import { provide } from 'vue'

import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
const { guitar_mode, is_playing, song_active_screen, song_dark } = storeToRefs(store)

const { idle } = useIdle(4000)

const isIdle = computed(() => {
  if (is_playing.value === false) {
    return false
  }
  if (idle.value) {
    return true
  }
  return false
})
provide('is_idle', isIdle)

watch(
  guitar_mode,
  (newValue) => {
    if (!newValue) {
      song_active_screen.value = ' '
    }
  },
  { immediate: true },
)
</script>

<template>
  <div
    class="grid overflow-y-auto relative overflow-x-hidden min-h-screen pt-0 bg-gray-950 gap-3"
    :class="song_dark ? 'dark-mode-active' : ''"
  >
    <SongMainScreen />
    <div
      class="relative bg-gradient-to-b duration-500 mt-80 from-transparent via-30% via-gray-950/90 to-gray-950 pb-6 pt-6 z-20"
      :class="isIdle && song_active_screen === 'videoclip' ? 'opacity-20' : ''"
    >
      <SongControls />
      <SongRelated />
    </div>
  </div>
</template>
