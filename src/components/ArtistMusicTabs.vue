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
        :color="activeTab === 'popular' ? 'primary' : 'neutral'"
        size="xl"
        class="rounded-full focus-visible:scale-110"
        >Popular</UButton
      >
      <UButton
        @click="activeTab = 'videos'"
        :color="activeTab === 'videos' ? 'primary' : 'neutral'"
        size="xl"
        class="rounded-full focus-visible:scale-110"
        >Videos</UButton
      >
      <UButton
        @click="activeTab = 'discografia'"
        :color="activeTab === 'discografia' ? 'primary' : 'neutral'"
        size="xl"
        class="rounded-full focus-visible:scale-110"
        >Discografía</UButton
      >
      <UButton color="neutral" size="xl" class="rounded-full focus-visible:scale-110" disabled
        >Destacados</UButton
      >
      <UButton
        v-if="guitar_mode"
        @click="activeTab = 'guitar'"
        :color="activeTab === 'guitar' ? 'primary' : 'neutral'"
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
