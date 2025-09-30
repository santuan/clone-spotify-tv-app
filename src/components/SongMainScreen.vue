<script setup lang="ts">
import { inject } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const isIdle = inject('is_idle')
const store = useCounterStore()
const { song_active_screen } = storeToRefs(store)
</script>

<template>
  <div id="hero" class="w-full z-10 dark_dim" :class="isIdle ? 'is_idle h-[99vh]' : 'h-[50vh]'">
    <SongMainScreenDefault v-show="song_active_screen === ' '" />
    <SongMainScreenLyric v-show="song_active_screen === 'lyric'" />
    <SongMainScreenGuitar v-show="song_active_screen === 'guitar'" />
    <SongMainScreenVideoclip v-show="song_active_screen === 'videoclip'" />
  </div>
</template>
