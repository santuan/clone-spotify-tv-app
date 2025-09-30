<template>
  <div
    class="col-span-3 grid gap-6 max-w-3xl overflow-y-auto overflow-x-hidden pb-6 px-6 h-[75vh] w-full"
  >
    <CardSongFull @click="store.pushWithQueryDefault" v-for="card in 12" :key="card" :item="card" />
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
</script>
