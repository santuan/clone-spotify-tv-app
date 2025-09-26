<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
const store = useCounterStore()
const { guitar_mode, song_active_screen } = storeToRefs(store)

const activeTab = ref('popular')

import { useRouter } from 'vue-router'

const router = useRouter()

function pushWithQuery() {
  song_active_screen.value = 'guitar'
  router.push('/artist/album/song/name')
}
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
          class="size-28 w-full gap-6 bg-gray-800 flex justify-start items-center overflow-hidden focus-within:ring-white focus-within:ring-1 focus-within:scale-105 duration-300 ring-transparent focus-visible:ring-offset-4 outline-none"
        >
          <span
            class="size-28 bg-gray-600 p-3 flex outline-0 justify-center items-center font-mono text-xs font-bold"
          >
            Cancion popular 0{{ card }}
          </span>
          <div>
            <div
              :style="'width: ' + Math.random() * 80.2 + 'rem'"
              class="min-w-64 max-w-96 h-6 bg-gray-400"
            ></div>
            <div class="flex mt-2 justify-start items-center gap-2">
              <span
                v-if="card === 4 || card === 2"
                class="w-4 h-4 text-xs bg-gray-400 flex justify-center items-center font-bold text-gray-800"
                >E</span
              >
              <template v-if="guitar_mode">
                <span
                  v-if="card === 2 || card === 3 || card === 5"
                  class="w-4 h-4 text-xs bg-primary flex justify-center items-center font-bold text-gray-800"
                  >A</span
                >
              </template>
              <span class="w-12 h-4 bg-gray-400"></span>
              <span class="w-20 h-4 bg-gray-400"></span>
              <span class="w-14 h-4 bg-gray-400"></span>
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
            class="h-40 aspect-video bg-gray-600 flex outline-0 justify-center items-center font-mono text-xs"
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
            class="size-24 bg-gray-600 flex outline-0 justify-center items-center font-mono text-xs"
          >
            Album 0{{ card }}
          </div>
        </RouterLink>
      </div>
      <div
        v-if="activeTab === 'guitar'"
        class="col-span-3 grid gap-6 overflow-y-auto overflow-x-hidden py-6 px-6 h-[75vh] w-full"
      >
        <button
          @click="pushWithQuery()"
          v-for="card in 8"
          :key="card"
          class="h-40 gap-3 w-full bg-gray-800 flex justify-start items-center overflow-hidden focus-within:ring-white focus-within:ring-1 focus-within:scale-[1.02] duration-300 ring-transparent focus-visible:ring-offset-4 outline-none"
        >
          <div
            class="h-40 aspect-video bg-gray-600 flex outline-0 justify-center items-center font-mono text-xs"
          >
            Videoturorial Guitarra 0{{ card }}
          </div>
        </button>
      </div>
    </div>
  </UContainer>
</template>
