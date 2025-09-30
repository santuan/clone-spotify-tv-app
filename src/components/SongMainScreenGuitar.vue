<template>
  <div
    class="bg-blue-950 flex-col overflow-y-auto overflow-x-hidden h-screen flex justify-center items-center max-h-[80vh] flex-wrap gap-3"
  >
    <IconPlay v-if="show_chords_videotutorial === 'videotutorial'" class="size-9 text-white" />
    <p class="text-4xl capitalize">{{ show_chords_videotutorial }}</p>
    <h2>Modo guitarra</h2>
  </div>
</template>

<script setup lang="ts">
import IconPlay from '~icons/material-symbols/play-arrow'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const store = useCounterStore()
const { show_chords_videotutorial } = storeToRefs(store)
</script>
