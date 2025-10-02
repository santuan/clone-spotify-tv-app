<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
const store = useCounterStore()
const { guitar_mode, artist_music_active_tab } = storeToRefs(store)
</script>
<template>
  <div class="flex gap-4 p-6">
    <UButton
      @click="artist_music_active_tab = 'popular'"
      color="neutral"
      :variant="artist_music_active_tab === 'popular' ? 'solid' : 'soft'"
      size="xl"
      class="rounded-full focus-visible:scale-110"
      >Popular</UButton
    >
    <UButton
      @click="artist_music_active_tab = 'videos'"
      color="neutral"
      :variant="artist_music_active_tab === 'videos' ? 'solid' : 'soft'"
      size="xl"
      class="rounded-full focus-visible:scale-110"
      >Videos</UButton
    >
    <UButton
      @click="artist_music_active_tab = 'discografia'"
      :variant="artist_music_active_tab === 'discografia' ? 'solid' : 'soft'"
      size="xl"
      color="neutral"
      class="rounded-full focus-visible:scale-110"
      >Discografía</UButton
    >
    <UButton
      color="neutral"
      @click="artist_music_active_tab = 'destacados'"
      :variant="artist_music_active_tab === 'destacados' ? 'solid' : 'soft'"
      size="xl"
      class="rounded-full focus-visible:scale-110"
      >Destacados</UButton
    >
    <UButton
      v-if="guitar_mode"
      @click="artist_music_active_tab = 'guitar'"
      color="neutral"
      :variant="artist_music_active_tab === 'guitar' ? 'solid' : 'soft'"
      size="xl"
      class="rounded-full focus-visible:scale-110"
      >Modo Guitarra</UButton
    >
  </div>
</template>
