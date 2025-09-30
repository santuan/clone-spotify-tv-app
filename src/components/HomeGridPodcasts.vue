<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
const store = useCounterStore()
const { is_showing } = storeToRefs(store)
</script>

<template>
  <UContainer
    v-if="is_showing === 'podcasts' || is_showing === 'todos'"
    class="gap-3 w-full flex flex-col snap-start justify-start items-start pt-6 pb-64"
  >
    <p class="w-64 text-2xl">Podcasts</p>
    <div class="grid w-full grid-cols-8 gap-3">
      <CardSongSquare
        @click="store.pushWithQueryArtist"
        @focus="store.updateShowSelected(`Podcast ${card}`)"
        @blur="store.resetShowSelected"
        v-for="card in 8"
        :key="card"
        :item="card"
        title="Podcast"
      />
    </div>
  </UContainer>
</template>
