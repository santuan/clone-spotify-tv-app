<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
const store = useCounterStore()
const { guitar_mode } = storeToRefs(store)

const activeTab = ref('popular')
</script>
<template>
  <div>
    <div class="flex gap-4 p-6">
      <UButton
        @click="activeTab = 'popular'"
        color="neutral"
        :variant="activeTab === 'popular' ? 'solid' : 'soft'"
        size="xl"
        class="rounded-full focus-visible:scale-110"
        >Popular</UButton
      >
      <UButton
        @click="activeTab = 'videos'"
        color="neutral"
        :variant="activeTab === 'videos' ? 'solid' : 'soft'"
        size="xl"
        class="rounded-full focus-visible:scale-110"
        >Videos</UButton
      >
      <UButton
        @click="activeTab = 'discografia'"
        :variant="activeTab === 'discografia' ? 'solid' : 'soft'"
        size="xl"
        color="neutral"
        class="rounded-full focus-visible:scale-110"
        >Discografía</UButton
      >
      <UButton
        color="neutral"
        size="xl"
        variant="soft"
        class="rounded-full focus-visible:scale-110"
        disabled
        >Destacados</UButton
      >
      <UButton
        v-if="guitar_mode"
        @click="activeTab = 'guitar'"
        color="neutral"
        :variant="activeTab === 'guitar' ? 'solid' : 'soft'"
        size="xl"
        class="rounded-full focus-visible:scale-110"
        >Modo Guitarra</UButton
      >
    </div>
    <ArtistPopularList v-if="activeTab === 'popular'" />
    <ArtistVideoList v-if="activeTab === 'videos'" />
    <ArtistDiscographyList v-if="activeTab === 'discografia'" />
    <ArtistGuitarVideoList v-if="activeTab === 'guitar'" />
  </div>
</template>
