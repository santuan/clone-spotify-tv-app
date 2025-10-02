<template>
  <div
    class="flex gap-6 flex-wrap max-w-3xl overflow-y-auto overflow-x-hidden pt-3 pb-6 px-6 h-[75vh] w-full"
  >
    <CardSongSquare
      @click="store.pushWithQueryVideoclip"
      v-for="card in 24"
      :key="card"
      :item="card"
      title="Canción destacada"
      class="size-36!"
    />
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
</script>
