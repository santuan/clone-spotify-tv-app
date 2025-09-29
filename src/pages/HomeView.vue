<script setup lang="ts">
import HomeGridArtist from '@/components/HomeGridArtist.vue'
import HomeGridGuitar from '@/components/HomeGridGuitar.vue'
import HomeGridHighlight from '@/components/HomeGridHighlight.vue'
import HomeGridPodcasts from '@/components/HomeGridPodcasts.vue'
import HomeGridSuggest from '@/components/HomeGridSuggest.vue'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
const store = useCounterStore()
const { home_show_selected, scrollContainer } = storeToRefs(store)
</script>

<template>
  <div class="h-[35vh] pt-14 flex justify-center flex-col items-start bg-gray-800">
    <UContainer>
      <h1 class="text-4xl font-bold tracking-tight text-pretty text-highlighted">
        {{ home_show_selected }}
      </h1>
    </UContainer>
  </div>
  <div
    ref="scrollContainer"
    class="bg-gray-900 overflow-y-auto h-[65vh] snap-y snap-proximity flex justify-start flex-col items-start"
  >
    <HomeGridHighlight />
    <HomeGridSuggest />
    <HomeGridArtist />
    <HomeGridGuitar />
    <HomeGridPodcasts />
  </div>
</template>
