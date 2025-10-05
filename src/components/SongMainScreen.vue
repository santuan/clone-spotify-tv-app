<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { inject } from 'vue'

import { useCounterStore } from '@/stores/counter'

const isIdle = inject('is_idle')
const store = useCounterStore()
const { song_active_screen } = storeToRefs(store)
</script>

<template>
  <div
    class="w-full h-screen fixed inset-0 z-10"
    :class="[isIdle ? 'is_idle h-[99vh]' : 'h-[50vh]']"
  >
    <Transition name="fade" mode="out-in">
      <SongMainScreenDefault v-if="song_active_screen === ' '" />
      <SongMainScreenLyric v-else-if="song_active_screen === 'lyric'" />
      <SongMainScreenGuitar v-else-if="song_active_screen === 'guitar'" />
      <div v-else-if="song_active_screen === 'dark'" />
      <SongMainScreenVideoclip v-else />
    </Transition>
  </div>
</template>
