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
    <div class="flex justify-start items-center gap-3">
      <p class="text-2xl">Modo guitarra</p>
      <UBadge size="md">Nuevo!</UBadge>
    </div>
    <div class="grid w-full grid-cols-8 gap-3">
      <CardSongVideo
        v-for="i in 4"
        title="Videotutorial"
        @click="store.pushWithQueryGuitarVideo"
        @focus="store.updateShowSelected(`Videotutorial ${i}`)"
        @blur="store.resetShowSelected"
        :item="i"
        :key="i"
        class="col-span-2"
      />
      <CardSongSquare
        v-for="i in 8"
        title="Partituras"
        @click="store.pushWithQueryGuitarChords"
        @focus="store.updateShowSelected(`Canción con partitura ${i}`)"
        @blur="store.resetShowSelected"
        :key="i"
        :item="i"
      />
    </div>
    <p class="pt-2 text-lg">Más partituras</p>
    <div class="grid w-full grid-cols-8 gap-3">
      <CardSongSquare
        v-for="i in 8"
        title="Más canciones con partitura"
        @click="store.pushWithQueryGuitarChords"
        @focus="store.updateShowSelected(`Canción con partitura ${i}`)"
        @blur="store.resetShowSelected"
        :key="i"
        :item="i"
      />
    </div>
  </UContainer>
</template>
