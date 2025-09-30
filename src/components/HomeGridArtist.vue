<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
const store = useCounterStore()
const { is_showing } = storeToRefs(store)
</script>

<template>
  <UContainer
    v-if="is_showing === 'musica' || is_showing === 'todos'"
    class="flex flex-col items-start justify-start w-full gap-3 pt-6 pb-10 snap-start"
  >
    <p class="w-64 text-2xl">Artistas</p>
    <div class="grid w-full grid-cols-8 gap-3">
      <CardSongSquare
        :item="i"
        title="Artista"
        @focus="store.updateShowSelected(`Artista Popular ${i}`)"
        @blur="store.resetShowSelected"
        @click="store.pushWithQueryArtist"
        v-for="i in 16"
        :key="i"
      />
    </div>
  </UContainer>
</template>
