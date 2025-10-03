<script setup lang="ts">
import IconPlay from '~icons/material-symbols/play-arrow'

import CardSongFull from '@/components/CardSongFull.vue'
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
</script>
<template>
  <UContainer class="grid grid-cols-5 pt-20 gap-20">
    <div class="col-span-2 pt-12">
      <div class="bg-gray-700 mx-auto size-64 mb-6"></div>
      <h1 class="text-2xl">Album</h1>
      <div class="flex justify-end items-start mt-3 w-full">
        <RouterLink
          to="/artist/album/song/name"
          class="size-12 flex justify-center items-center bg-primary rounded-full focus-visible:outline-offset-8"
        >
          <IconPlay class="size-9 text-gray-900" />
        </RouterLink>
      </div>
    </div>
    <div class="col-span-3 overflow-y-auto pt-12 overflow-x-hidden py-3 p-6 h-[87vh] w-full">
      <div class="grid gap-6">
        <CardSongFull
          @click="store.pushWithQueryDefault"
          v-for="card in 7"
          :key="card"
          :item="card"
        />
      </div>
    </div>
  </UContainer>
</template>
