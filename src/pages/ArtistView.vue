<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
const store = useCounterStore()
const { guitar_mode } = storeToRefs(store)

const activeTab = ref('popular')
</script>
<template>
  <UContainer class="grid grid-cols-5 gap-12 pt-20">
    <div class="col-span-2 pt-64">
      <h1 class="text-2xl">Artista</h1>
      <div class="flex items-center justify-start gap-6">
        <div
          class="w-24 mt-12 h-5 bg-gray-800 flex justify-start items-center overflow-hidden focus-within:ring-white focus-within:ring-1 focus-within:scale-[1.02] duration-300 ring-transparent focus-visible:ring-offset-4 outline-none"
        ></div>
        <div
          class="w-5 mt-12 h-5 bg-gray-800 flex justify-start items-center overflow-hidden focus-within:ring-white focus-within:ring-1 focus-within:scale-[1.02] duration-300 ring-transparent focus-visible:ring-offset-4 outline-none"
        ></div>
      </div>
      <div class="flex items-center justify-start gap-6">
        <div
          class="w-32 mt-12 h-5 bg-gray-800 flex justify-start items-center overflow-hidden focus-within:ring-white focus-within:ring-1 focus-within:scale-[1.02] duration-300 ring-transparent focus-visible:ring-offset-4 outline-none"
        ></div>
        <div
          class="w-44 mt-12 h-5 bg-gray-800 flex justify-start items-center overflow-hidden focus-within:ring-white focus-within:ring-1 focus-within:scale-[1.02] duration-300 ring-transparent focus-visible:ring-offset-4 outline-none"
        ></div>
      </div>
    </div>
    <div class="w-full col-span-3">
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
      <div
        v-if="activeTab === 'popular'"
        class="col-span-3 grid gap-6 overflow-y-auto overflow-x-hidden py-6 px-6 h-[75vh] w-full"
      >
        <RouterLink
          to="/artist/album/song/name"
          v-for="card in 8"
          :key="card"
          class="flex items-center justify-start w-full gap-6 overflow-hidden duration-300 bg-gray-800 outline-none size-28 focus-within:ring-white focus-within:ring-1 focus-within:scale-105 ring-transparent focus-visible:ring-offset-4"
        >
          <span
            class="flex items-center justify-center p-3 font-mono text-xs font-bold bg-gray-600 size-28 outline-0"
          >
            Cancion popular 0{{ card }}
          </span>
          <div>
            <div
              :style="'width: ' + Math.random() * 80.2 + 'rem'"
              class="h-6 bg-gray-400 min-w-64 max-w-96"
            ></div>
            <div class="flex items-center justify-start gap-2 mt-2">
              <span
                v-if="card === 4 || card === 2"
                class="flex items-center justify-center w-4 h-4 text-xs font-bold text-gray-800 bg-gray-400"
                >E</span
              >
              <template v-if="guitar_mode">
                <span
                  v-if="card === 2 || card === 3 || card === 5"
                  class="flex items-center justify-center w-4 h-4 text-xs font-bold text-gray-800 bg-primary"
                  >A</span
                >
              </template>
              <span class="w-12 h-4 bg-gray-400"></span>
              <span class="w-20 h-4 bg-gray-400"></span>
              <span class="h-4 bg-gray-400 w-14"></span>
            </div>
          </div>
        </RouterLink>
      </div>
      <div
        v-if="activeTab === 'videos'"
        class="col-span-3 grid gap-6 overflow-y-auto overflow-x-hidden py-6 px-6 h-[75vh] w-full"
      >
        <RouterLink
          to="/artist/album/name"
          v-for="card in 8"
          :key="card"
          class="h-40 gap-3 w-full bg-gray-800 flex justify-start items-center overflow-hidden focus-within:ring-white focus-within:ring-1 focus-within:scale-[1.02] duration-300 ring-transparent focus-visible:ring-offset-4 outline-none"
        >
          <div
            class="flex items-center justify-center h-40 font-mono text-xs bg-gray-600 aspect-video outline-0"
          >
            Videos 0{{ card }}
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
            class="flex items-center justify-center font-mono text-xs bg-gray-600 size-24 outline-0"
          >
            {{ card }}
          </div>
          <span class="p-3">Album</span>
        </RouterLink>
      </div>
      <div
        v-if="activeTab === 'guitar'"
        class="col-span-3 grid gap-6 overflow-y-auto overflow-x-hidden py-6 px-6 h-[75vh] w-full"
      >
        <button
          @click="store.pushWithQueryVideo()"
          v-for="card in 8"
          :key="card"
          class="h-40 gap-3 w-full bg-gray-800 flex justify-start items-center overflow-hidden focus-within:ring-white focus-within:ring-1 focus-within:scale-[1.02] duration-300 ring-transparent focus-visible:ring-offset-4 outline-none"
        >
          <div
            class="flex items-center justify-center h-40 font-mono text-xs bg-gray-600 aspect-video outline-0"
          >
            Videotutorial 0{{ card }}
          </div>
        </button>
      </div>
    </div>
  </UContainer>
</template>
