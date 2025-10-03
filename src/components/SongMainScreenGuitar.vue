<script setup lang="ts">
import IconPlay from '~icons/material-symbols/play-arrow'
import { storeToRefs } from 'pinia'

import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
const { show_chords_videotutorial } = storeToRefs(store)
</script>

<template>
  <div
    class="flex-col bg-gray-950 overflow-y-auto overflow-x-hidden h-screen flex justify-center items-center max-h-[80vh] flex-wrap gap-3"
  >
    <div
      v-if="show_chords_videotutorial === 'videotutorial'"
      class="z-10 relative flex justify-start h-full pt-32 items-center flex-col gap-3"
    >
      <UBadge>Modo guitarra</UBadge>
      <p class="text-4xl mb-2 capitalize">Videotutorial</p>
      <IconPlay class="size-9 text-white" />
    </div>
    <div
      v-if="show_chords_videotutorial === 'partituras'"
      class="z-10 bg-blue-950 absolute inset-0"
    >
      <div
        class="flex min-h-[80vh] justify-center items-center flex-col mt-px -translate-y-20 gap-3"
      >
        <UBadge>Modo guitarra</UBadge>
        <p class="text-4xl capitalize">Partituras</p>
        <h2>Similar al modo letra pero con acordes</h2>
      </div>
    </div>
    <img
      v-show="show_chords_videotutorial === 'videotutorial'"
      class="h-auto w-full absolute inset-0 z-0 opacity-40! bg-cover"
      src="https://images.unsplash.com/photo-1471478331149-c72f17e33c73?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
  </div>
</template>
