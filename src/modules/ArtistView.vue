<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
const store = useCounterStore()
const { guitarMode, guitar } = storeToRefs(store)

const activeTab = ref('popular')
</script>
<template>
  <UContainer class="grid grid-cols-5 pt-20 gap-12">
    <div class="col-span-2 pt-64">
      <h1 class="text-2xl">Artist</h1>
      <div class="flex justify-start gap-6 items-center">
        <div
          class="w-24 mt-12 h-5 bg-gray-800 flex justify-start items-center overflow-hidden focus-within:ring-white focus-within:ring-1 focus-within:scale-[1.02] duration-300 ring-transparent focus-visible:ring-offset-4 outline-none"
        ></div>
        <div
          class="w-5 mt-12 h-5 bg-gray-800 flex justify-start items-center overflow-hidden focus-within:ring-white focus-within:ring-1 focus-within:scale-[1.02] duration-300 ring-transparent focus-visible:ring-offset-4 outline-none"
        ></div>
      </div>
      <div class="flex justify-start gap-6 items-center">
        <div
          class="w-32 mt-12 h-5 bg-gray-800 flex justify-start items-center overflow-hidden focus-within:ring-white focus-within:ring-1 focus-within:scale-[1.02] duration-300 ring-transparent focus-visible:ring-offset-4 outline-none"
        ></div>
        <div
          class="w-44 mt-12 h-5 bg-gray-800 flex justify-start items-center overflow-hidden focus-within:ring-white focus-within:ring-1 focus-within:scale-[1.02] duration-300 ring-transparent focus-visible:ring-offset-4 outline-none"
        ></div>
      </div>
    </div>
    <div class="col-span-3 w-full">
      <div class="flex gap-4 p-6">
        <UButton
          @click="activeTab = 'popular'"
          :color="activeTab === 'popular' ? 'primary' : 'neutral'"
          size="xl"
          class="rounded-full focus-visible:scale-110"
          >Popular</UButton
        >
        <UButton color="neutral" size="xl" disabled class="rounded-full focus-visible:scale-110"
          >Videos</UButton
        >
        <UButton
          @click="activeTab = 'discografia'"
          color="neutral"
          size="xl"
          class="rounded-full focus-visible:scale-110"
          >Discografía</UButton
        >
        <UButton color="neutral" size="xl" class="rounded-full focus-visible:scale-110" disabled
          >Destacados</UButton
        >
        <UButton
          v-if="guitarMode"
          @click="activeTab = 'guitar'"
          :color="activeTab === 'guitar' ? 'primary' : 'neutral'"
          size="xl"
          class="rounded-full focus-visible:scale-110"
          >Modo Guitarra</UButton
        >
      </div>
      <div
        v-if="activeTab === 'popular'"
        class="col-span-3 grid gap-6 overflow-y-auto overflow-x-hidden py-6 px-6 h-[75vh] w-full"
      >
        <RouterLink
          to="/artist/album/song/name"
          v-for="card in 8"
          :key="card"
          class="size-24 w-full bg-gray-800 flex justify-start items-center overflow-hidden focus-within:ring-white focus-within:ring-1 focus-within:scale-[1.02] duration-300 ring-transparent focus-visible:ring-offset-4 outline-none"
        >
          <div
            class="size-24 bg-gray-600 flex outline-0 justify-center items-center font-mono text-xs"
          >
            Canción {{ card }}
          </div>
        </RouterLink>
      </div>
      <div
        v-if="activeTab === 'discografia'"
        class="col-span-3 grid gap-6 overflow-y-auto overflow-x-hidden py-6 px-6 h-[75vh] w-full"
      >
        <RouterLink
          to="/artist/album/name"
          v-for="card in 8"
          :key="card"
          class="size-24 w-full bg-gray-800 flex justify-start items-center overflow-hidden focus-within:ring-white focus-within:ring-1 focus-within:scale-[1.02] duration-300 ring-transparent focus-visible:ring-offset-4 outline-none"
        >
          <div
            class="size-24 bg-gray-600 flex outline-0 justify-center items-center font-mono text-xs"
          >
            Album {{ card }}
          </div>
        </RouterLink>
      </div>
      <div
        v-if="activeTab === 'guitar'"
        class="col-span-3 grid-cols-2 grid gap-6 overflow-y-auto overflow-x-hidden py-6 px-6 h-[75vh] w-full"
      >
        <button
          @click="guitar = true"
          v-for="card in 8"
          :key="card"
          class="w-full h-44 bg-gray-800 flex justify-start items-center overflow-hidden focus-within:ring-white focus-within:ring-1 focus-within:scale-[1.02] duration-300 ring-transparent focus-visible:ring-offset-4 outline-none"
        >
          <div
            class="h-44 w-full bg-gray-600 flex outline-0 justify-center items-center font-mono text-xs"
          >
            Guitar {{ card }}
          </div>
        </button>
      </div>
    </div>
  </UContainer>
</template>
