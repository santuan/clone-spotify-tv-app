<template>
  <div
    class="col-span-3 grid gap-6 max-w-3xl overflow-y-auto overflow-x-hidden pt-3 pb-6 px-6 h-[75vh] w-full"
  >
    <CardSongVideoFull
      @click="store.pushWithQueryGuitarVideo"
      v-for="card in 8"
      :key="card"
      :item="card"
      title="Videotutorial"
    />
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
</script>
