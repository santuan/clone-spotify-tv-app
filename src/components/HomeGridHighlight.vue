<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
const { is_showing } = storeToRefs(store)
</script>

<template>
  <UContainer class="flex flex-col items-start justify-start gap-3 py-6 pt-6 pb-20 snap-start">
    <div class="flex w-full gap-3">
      <UButton
        size="lg"
        :color="is_showing === 'todos' ? 'primary' : 'neutral'"
        @click="store.changeShowing('todos')"
        @focus="store.updateShowSelected(`Mi colección`)"
        @blur="store.resetShowSelected"
        class="font-bold transition-transform duration-300 rounded-full focus-visible:scale-110"
        >Mostrar todo
      </UButton>
      <UButton
        size="lg"
        :color="is_showing === 'musica' ? 'primary' : 'neutral'"
        @click="store.changeShowing('musica')"
        @focus="store.updateShowSelected(`Música`)"
        @blur="store.resetShowSelected"
        class="font-bold transition-transform duration-300 rounded-full focus-visible:scale-110"
        >Música</UButton
      >
      <UButton
        size="lg"
        :color="is_showing === 'podcasts' ? 'primary' : 'neutral'"
        @click="store.changeShowing('podcasts')"
        @focus="store.updateShowSelected(`Podcasts`)"
        @blur="store.resetShowSelected"
        class="font-bold transition-transform duration-300 rounded-full focus-visible:scale-110"
        >Podcasts</UButton
      >
    </div>
    <div class="grid w-full grid-cols-4 gap-3">
      <template v-if="is_showing === 'todos'">
        <RouterLink
          to="/artist/name"
          v-for="i in 8"
          :key="i"
          @focus="store.updateShowSelected(`Artista destacado ${i}`)"
          @blur="store.resetShowSelected"
          class="flex items-center justify-start w-full h-16 overflow-hidden duration-300 bg-gray-800 outline-none focus-visible:ring-white focus-visible:scale-105 ring-transparent focus-visible:ring-offset-4 ring"
        >
          <div class="bg-gray-600 min-h-16 aspect-square"></div>
          <div class="flex items-center justify-start w-full h-16 px-3">
            Artista
            {{ i }}
          </div>
        </RouterLink>
      </template>
      <template v-if="is_showing === 'musica'">
        <RouterLink
          to="/artist/album/name"
          v-for="i in 8"
          :key="i"
          @focus="store.updateShowSelected(`Album destacado ${i}`)"
          @blur="store.resetShowSelected"
          class="flex items-center justify-start w-full h-16 overflow-hidden duration-300 bg-gray-800 outline-none focus-visible:ring-white focus-visible:scale-105 ring-transparent focus-visible:ring-offset-4 ring"
        >
          <div class="bg-gray-600 min-h-16 aspect-square"></div>
          <div class="flex items-center justify-start w-full h-16 px-3">
            Album
            {{ i }}
          </div>
        </RouterLink>
      </template>
      <template v-if="is_showing === 'podcasts'">
        <RouterLink
          v-for="i in 8"
          :key="i"
          to="/artist/album/name"
          @focus="store.updateShowSelected(`Podcast destacado ${i}`)"
          @blur="store.resetShowSelected"
          class="flex items-center justify-start w-full h-16 overflow-hidden duration-300 bg-gray-800 outline-none focus-visible:ring-white focus-visible:scale-105 ring-transparent focus-visible:ring-offset-4 ring"
        >
          <div class="bg-gray-600 min-h-16 aspect-square"></div>
          <div class="flex items-center justify-start w-full h-16 px-3">Podcast {{ i }}</div>
        </RouterLink>
      </template>
    </div>
  </UContainer>
</template>
