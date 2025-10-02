<script setup lang="ts">
import { watch, computed } from 'vue'
import { provide } from 'vue'
import { useIdle } from '@vueuse/core'

import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const store = useCounterStore()
const { is_playing, song_active_screen, guitar_mode, song_dark } = storeToRefs(store)

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
    class="grid overflow-y-auto relative overflow-x-hidden pt-0 bg-gray-950 gap-3"
    :class="song_dark ? 'dark-mode-active' : ''"
  >
    <SongMainScreen />
    <div class="relative bg-gradient-to-b to-gray-950 via-10% from-gray-950/50 pb-32 pt-6 z-20">
      <SongControls />
      <SongRelated />
    </div>
  </div>
</template>
