<template>
  <div
    class="flex flex-col justify-start items-start overflow-y-auto overflow-x-hidden pb-20 px-6 h-[75vh] w-full"
  >
    <button>Lanzamientos populares</button>
    <div
      class="gap-4 snap-mandatory snap-x min-h-48 flex justify-start items-center p-2 max-w-fit overflow-x-auto w-full -ml-4"
    >
      <div class="w-6"></div>
      <CardSongSquare
        class="snap-center"
        @click="store.pushWithQueryAlbum"
        v-for="card in 18"
        :item="card"
        :key="card"
        title="Album"
      />
    </div>
    <h3>Albums</h3>
    <div
      class="gap-4 snap-mandatory snap-x min-h-48 flex justify-start items-center p-2 max-w-fit overflow-x-auto w-full"
    >
      <CardSongSquare
        v-for="card in 13"
        class="snap-center"
        @click="store.pushWithQueryAlbum"
        :item="card"
        :key="card"
        title="Album"
      />
    </div>
    <h3>Singles</h3>
    <div
      class="gap-4 snap-mandatory snap-x min-h-48 flex justify-start items-center p-2 max-w-fit overflow-x-auto w-full -ml-4"
    >
      <div class="w-6"></div>
      <CardSongSquare
        class="snap-center"
        @click="store.pushWithQueryDefault"
        v-for="card in 11"
        :item="card"
        :key="card"
        title="Single"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
</script>
