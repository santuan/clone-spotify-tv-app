<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
const store = useCounterStore()
const { guitar_mode, is_showing } = storeToRefs(store)
</script>

<template>
  <UContainer
    v-if="is_showing === 'todos' && guitar_mode"
    class="gap-3 w-full flex flex-col snap-start justify-start pt-6 pb-20 items-start"
  >
    <p class="text-2xl">Videotutorial Modo guitarra</p>
    <div class="grid w-full grid-cols-4 gap-3 pt-2">
      <button
        @click="store.pushWithQueryVideo"
        v-for="i in 4"
        :key="i"
        @focus="store.updateShowSelected(`Videotutorial ${i}`)"
        @blur="store.resetShowSelected"
        class="flex items-center justify-start w-full p-3 overflow-hidden text-left duration-300 bg-gray-600 outline-none aspect-video focus-visible:ring-white focus-visible:ring-1 ring-transparent ring-offset-4"
      >
        Videotutorial {{ i }}
      </button>
    </div>
    <p class="pt-2 text-2xl">Con partituras</p>
    <div class="grid w-full grid-cols-8 gap-3">
      <button
        v-for="i in 8"
        :key="i"
        @click="store.pushWithQueryChords"
        @focus="store.updateShowSelected(`Canción con partitura ${i}`)"
        @blur="store.resetShowSelected"
        class="flex items-center justify-start p-3 overflow-hidden text-left duration-300 bg-gray-600 outline-none aspect-square focus-visible:ring-white focus-visible:ring-1 ring-transparent ring-offset-4"
      >
        Partituras {{ i }}
      </button>
    </div>
  </UContainer>
</template>
