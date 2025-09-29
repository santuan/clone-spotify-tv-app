<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
const store = useCounterStore()
const { guitar_mode } = storeToRefs(store)

const activeTab = ref('popular')
</script>
<template>
  <div class="grid grid-cols-12 pl-10 px-6 max-w-full gap-1 pt-20">
    <div class="col-span-4 w-96 ml-auto pl-4 pt-64">
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
    <div class="col-span-8">
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
        class="col-span-3 grid gap-6 max-w-3xl overflow-y-auto overflow-x-hidden pb-6 px-6 h-[75vh] w-full"
      >
        <button
          @click="store.pushWithQueryDefault"
          v-for="card in 8"
          :key="card"
          class="flex items-center justify-start w-full gap-6 overflow-hidden duration-300 bg-gray-800 outline-none size-28 focus-within:ring-white focus-within:ring-1 focus-within:scale-105 ring-transparent focus-visible:ring-offset-4"
        >
          <span
            class="flex items-center justify-center p-3 font-mono text-xs font-bold bg-gray-600 size-28 outline-0"
          >
            Canción popular 0{{ card }}
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
        </button>
      </div>
      <div
        v-if="activeTab === 'videos'"
        class="col-span-3 grid gap-6 max-w-3xl overflow-y-auto overflow-x-hidden pb-6 px-6 h-[75vh] w-full"
      >
        <button
          @click="store.pushWithQueryDefault"
          v-for="card in 8"
          :key="card"
          class="h-40 gap-3 w-full bg-gray-800 flex justify-start items-center overflow-hidden focus-within:ring-white focus-within:ring-1 focus-within:scale-[1.02] duration-300 ring-transparent focus-visible:ring-offset-4 outline-none"
        >
          <div
            class="flex items-center justify-center h-40 font-mono text-xs bg-gray-600 aspect-video outline-0"
          >
            Videos 0{{ card }}
          </div>
        </button>
      </div>
      <div
        v-if="activeTab === 'discografia'"
        class="flex flex-col justify-start items-start overflow-y-auto overflow-x-hidden pb-20 px-6 h-[75vh] w-full"
      >
        <button>Lanzamientos populares</button>
        <div
          class="gap-4 snap-mandatory snap-x min-h-48 flex justify-start items-center p-2 max-w-fit overflow-x-auto w-full -ml-4"
        >
          <div class="w-6"></div>
          <RouterLink
            to="/artist/album/name"
            v-for="card in 18"
            :key="card"
            class="size-40 shrink-0 scroll-mx-6 aspect-square snap-start bg-gray-600 flex justify-center items-center p-3 focus-within:ring-white focus-within:ring-1 duration-300 ring-transparent focus-visible:ring-offset-4 outline-none"
          >
            Album {{ card }}
          </RouterLink>
        </div>
        <h3>Albums</h3>
        <div
          class="gap-4 snap-mandatory snap-x min-h-48 flex justify-start items-center p-2 max-w-fit overflow-x-auto w-full"
        >
          <RouterLink
            to="/artist/album/name"
            v-for="card in 3"
            :key="card"
            class="size-40 shrink-0 scroll-mx-6 aspect-square snap-start bg-gray-600 flex justify-center items-center p-3 focus-within:ring-white focus-within:ring-1 duration-300 ring-transparent focus-visible:ring-offset-4 outline-none"
          >
            Album {{ card }}
          </RouterLink>
        </div>
        <h3>Singles</h3>
        <div
          class="gap-4 snap-mandatory snap-x min-h-48 flex justify-start items-center p-2 max-w-fit overflow-x-auto w-full -ml-4"
        >
          <div class="w-6"></div>
          <RouterLink
            to="/artist/album/name"
            v-for="card in 11"
            :key="card"
            class="size-40 shrink-0 scroll-mx-6 aspect-square snap-start bg-gray-600 flex justify-center items-center p-3 focus-within:ring-white focus-within:ring-1 duration-300 ring-transparent focus-visible:ring-offset-4 outline-none"
          >
            Single {{ card }}
          </RouterLink>
        </div>
      </div>
      <div
        v-if="activeTab === 'guitar'"
        class="col-span-3 grid gap-6 max-w-3xl overflow-y-auto overflow-x-hidden pb-6 px-6 h-[75vh] w-full"
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
  </div>
</template>
