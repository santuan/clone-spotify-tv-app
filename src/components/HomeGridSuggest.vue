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
      <CardSongVideo
        v-for="i in 4"
        title="Álbum Recomendado"
        @click="store.pushWithQueryAlbum"
        @focus="store.updateShowSelected(`Álbum Recomendado ${i}`)"
        @blur="store.resetShowSelected"
        :item="i"
        :key="i"
      />
    </div>
  </UContainer>
</template>
