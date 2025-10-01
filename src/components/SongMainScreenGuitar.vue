<template>
  <div
    class="flex-col bg-gray-950 overflow-y-auto overflow-x-hidden h-screen flex justify-center items-center max-h-[80vh] flex-wrap gap-3"
  >
    <div class="relative z-10 flex justify-center items-center flex-col gap-3">
      <IconPlay v-if="show_chords_videotutorial === 'videotutorial'" class="size-9 text-white" />
      <div v-if="show_chords_videotutorial === 'partituras'">
        <UBadge>Similar al modo letra</UBadge>
      </div>
      <p class="text-4xl capitalize">{{ show_chords_videotutorial }}</p>
      <h2>Modo guitarra</h2>
    </div>
    <img
      v-if="show_chords_videotutorial === 'videotutorial'"
      class="h-auto w-full absolute inset-0 z-0 opacity-80 bg-cover"
      src="https://images.unsplash.com/photo-1471478331149-c72f17e33c73?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
  </div>
</template>

<script setup lang="ts">
import IconPlay from '~icons/material-symbols/play-arrow'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const store = useCounterStore()
const { show_chords_videotutorial } = storeToRefs(store)
</script>
