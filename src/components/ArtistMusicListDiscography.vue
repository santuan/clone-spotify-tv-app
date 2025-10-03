<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
</script>

<template>
  <div
    class="flex flex-col justify-start items-start overflow-y-auto overflow-x-hidden pb-20 pl-6 h-[75vh] w-full"
  >
    <button class="pl-1">Lanzamientos populares</button>
    <div
      class="gap-4 snap-mandatory scroll-px-2 snap-x min-h-48 flex justify-start items-center p-2 max-w-fit overflow-x-auto w-full"
    >
      <CardSongSquare
        class="shrink-0 snap-start"
        @click="store.pushWithQueryAlbum"
        v-for="card in 18"
        :item="card"
        :key="card"
        title="Album"
      />
    </div>
    <h3 class="pl-1">Albums</h3>
    <div
      class="gap-4 snap-mandatory scroll-px-2 snap-x min-h-48 flex justify-start items-center p-2 max-w-fit overflow-x-auto w-full"
    >
      <CardSongSquare
        v-for="card in 13"
        class="shrink-0 snap-start"
        @click="store.pushWithQueryAlbum"
        :item="card"
        :key="card"
        title="Album"
      />
    </div>
    <h3 class="pl-1">Singles</h3>
    <div
      class="gap-4 snap-mandatory scroll-px-2 snap-x min-h-48 flex justify-start items-center p-2 max-w-fit overflow-x-auto w-full"
    >
      <CardSongSquare
        class="shrink-0 snap-start"
        @click="store.pushWithQueryDefault"
        v-for="card in 11"
        :item="card"
        :key="card"
        title="Single"
      />
    </div>
  </div>
</template>
