<script setup lang="ts">
import { inject } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
const isIdle = inject('is_idle')
const store = useCounterStore()
const { song_active_screen, show_chords_videotutorial } = storeToRefs(store)
</script>

<template>
  <UContainer class="dark_dim" v-if="!isIdle">
    <div v-show="song_active_screen !== 'guitar'" class="grid grid-cols-4 gap-6 pb-6 pt-10 w-full">
      <RouterLink
        to="/artist/album/name"
        v-for="card in 3"
        :key="card"
        class="size-24 w-full bg-gray-800 flex justify-start items-center overflow-hidden focus-within:ring-white focus-within:ring-1 focus-within:scale-[1.02] ring-transparent focus-visible:ring-offset-4 outline-none"
      >
        <div
          class="size-24 bg-gray-600 flex outline-0 justify-center items-center font-mono text-xs"
        >
          Album {{ card }}
        </div>
      </RouterLink>
    </div>
    <div v-show="song_active_screen !== 'guitar'" class="grid grid-cols-2 gap-6 py-6 w-full">
      <RouterLink
        to="/artist/album/name"
        v-for="card in 1"
        :key="card"
        class="w-full h-96 bg-gray-800 grid grid-cols-2 overflow-hidden focus-within:ring-white focus-within:ring-1 focus-within:scale-[1.02] ring-transparent focus-visible:ring-offset-4 outline-none"
      >
        <div class="bg-gray-600 flex outline-0 justify-center items-center font-mono text-xs">
          Album {{ card }}
        </div>
      </RouterLink>
    </div>
    <div
      v-if="song_active_screen === 'guitar' && show_chords_videotutorial === 'videotutorial'"
      class="py-6 w-full flex items-start justify-start flex-col"
    >
      <h2>Secciones de la canción</h2>
      <div class="grid grid-cols-4 gap-3 w-full">
        <a
          href="#hero"
          class="w-full h-36 bg-gray-800 grid grid-cols-2 overflow-hidden focus-within:ring-white focus-within:ring-1 focus-within:scale-[1.02] ring-transparent focus-visible:ring-offset-4 outline-none"
        >
          <div class="bg-gray-600 flex outline-0 justify-center items-center font-mono text-xs">
            Intro
          </div>
        </a>
        <a
          href="#hero"
          class="w-full h-36 bg-gray-800 grid grid-cols-2 overflow-hidden focus-within:ring-white focus-within:ring-1 focus-within:scale-[1.02] ring-transparent focus-visible:ring-offset-4 outline-none"
        >
          <div class="bg-gray-600 flex outline-0 justify-center items-center font-mono text-xs">
            Estribillo
          </div>
        </a>
        <a
          href="#hero"
          class="w-full h-36 bg-gray-800 grid grid-cols-2 overflow-hidden focus-within:ring-white focus-within:ring-1 focus-within:scale-[1.02] ring-transparent focus-visible:ring-offset-4 outline-none"
        >
          <div class="bg-gray-600 flex outline-0 justify-center items-center font-mono text-xs">
            Solo
          </div>
        </a>
      </div>
    </div>
    <div
      v-if="song_active_screen === 'guitar' && show_chords_videotutorial === 'partituras'"
      class="py-6 w-full flex items-start justify-start flex-col"
    >
      <h2>Acordes en esta canción</h2>
      <div class="grid grid-cols-8 gap-3 w-full">
        <a
          href="#hero"
          class="w-full h-36 bg-gray-800 flex justify-center items-center overflow-hidden focus-within:ring-white focus-within:ring-1 focus-within:scale-[1.02] ring-transparent focus-visible:ring-offset-4 outline-none"
        >
          LaM
        </a>
        <a
          href="#hero"
          class="w-full h-36 bg-gray-800 flex justify-center items-center overflow-hidden focus-within:ring-white focus-within:ring-1 focus-within:scale-[1.02] ring-transparent focus-visible:ring-offset-4 outline-none"
        >
          Sol
        </a>
        <a
          href="#hero"
          class="w-full h-36 bg-gray-800 flex justify-center items-center overflow-hidden focus-within:ring-white focus-within:ring-1 focus-within:scale-[1.02] ring-transparent focus-visible:ring-offset-4 outline-none"
        >
          FA#
        </a>
      </div>
    </div>
  </UContainer>
</template>
