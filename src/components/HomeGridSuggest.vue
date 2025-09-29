<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
const store = useCounterStore()
const { is_showing } = storeToRefs(store)
</script>

<template>
  <UContainer
    class="flex flex-col items-start justify-start w-full gap-3 pt-6 pb-10 snap-start"
    v-if="is_showing === 'todos'"
  >
    <p class="text-2xl">Recomendados</p>
    <div class="grid w-full grid-cols-4 gap-3">
      <RouterLink
        v-for="i in 4"
        :key="i"
        to="/artist/album/name"
        @focus="store.updateShowSelected(`Álbum Recomendado ${i}`)"
        @blur="store.resetShowSelected"
        class="flex items-center justify-start w-full p-3 overflow-hidden duration-300 bg-gray-600 outline-none aspect-video focus-visible:ring-white focus-visible:ring-1 focus-visible:scale-105 ring-transparent focus-visible:ring-offset-4"
      >
        Álbum Recomendado {{ i }}
      </RouterLink>
    </div>
  </UContainer>
</template>
