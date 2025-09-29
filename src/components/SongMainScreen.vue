<script setup lang="ts">
import { inject } from 'vue'

const isIdle = inject('is_idle')

import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
const store = useCounterStore()
const { song_active_screen, show_chords_videotutorial } = storeToRefs(store)
import IconPlay from '~icons/material-symbols/play-arrow'
</script>

<template>
  <div
    id="hero"
    class="w-full dark_dim bg-emerald-950/40"
    :class="isIdle ? 'is_idle h-[99vh] fixed inset-0' : 'h-[50vh]'"
  >
    <UContainer
      v-if="song_active_screen === 'lyric'"
      class="flex max-w-5xl mx-auto overflow-y-auto overflow-x-hidden h-screen max-h-[70vh] gap-y-8 flex-wrap gap-3"
    >
      <div
        v-for="i in 12"
        :style="'width: ' + Math.random() * 40.2 + 'rem'"
        :key="i"
        class="min-w-32 h-8 bg-white/20 inline-block"
      ></div>
    </UContainer>
    <UContainer
      v-if="song_active_screen === 'guitar'"
      class="max-w-5xl mx-auto flex-col overflow-y-auto overflow-x-hidden h-screen flex justify-center items-center max-h-[60vh] flex-wrap gap-3"
    >
      <IconPlay v-if="show_chords_videotutorial === 'videotutorial'" class="size-9 text-white" />
      <p class="text-4xl capitalize">{{ show_chords_videotutorial }}</p>
      <h2>Modo guitarra</h2>
    </UContainer>
  </div>
</template>
