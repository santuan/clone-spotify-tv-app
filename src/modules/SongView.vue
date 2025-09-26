<script setup lang="ts">
import { ref } from 'vue'

const dark = ref(false)
const lyric = ref(false)
const guitar = ref(false)
import LucideX from '~icons/lucide/x'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
const store = useCounterStore()
const { guitarMode, isPlaying } = storeToRefs(store)
import IconPlay from '~icons/material-symbols/play-arrow'
import IconPause from '~icons/material-symbols/pause'
</script>

<template>
  <div class="grid overflow-y-auto overflow-x-hidden" :class="dark ? 'opacity-20' : ''">
    <button
      @click="lyric = !lyric"
      class="min-h-[40vh] w-full bg-gray-900"
      :class="lyric ? 'h-[90vh]' : ''"
    >
      <UContainer
        v-if="lyric"
        class="flex max-w-5xl mx-auto overflow-y-auto overflow-x-hidden max-h-[90vh] !gap-y-8 flex-wrap gap-3"
      >
        <div
          v-for="i in 66"
          :style="'width: ' + Math.random() * 20.2 + 'rem'"
          :key="i"
          class="min-w-64 h-8 bg-gray-700 flex justify-start items-center overflow-hidden focus-within:ring-white focus-within:ring-1 focus-within:scale-[1.02] duration-300 ring-transparent focus-visible:ring-offset-4 outline-none"
        ></div>
      </UContainer>
    </button>
    <div class="min-h-[60vh] max-h-[60vh] pt-6 pb-20 w-full">
      <UContainer
        class="flex gap-6 items-center"
        :class="lyric ? 'fixed bottom-8  bg-gray-800/80 backdrop-blur-xs p-3 left-0 right-0' : ''"
      >
        <button
          @click="lyric = !lyric"
          class="size-24 pt-24 bg-gray-600 flex justify-start items-center overflow-hidden focus-within:ring-white focus-within:ring-1 focus-within:scale-[1.02] duration-300 ring-transparent focus-visible:ring-offset-4 outline-none"
        ></button>
        <h1 class="text-4xl">Song</h1>
        <div v-if="!lyric" class="flex ml-auto justify-center gap-6 items-center">
          <button
            class="w-24 h-8 bg-gray-800 flex justify-start items-center overflow-hidden focus-within:ring-white focus-within:ring-1 focus-within:scale-[1.02] duration-300 ring-transparent focus-visible:ring-offset-4 outline-none"
          ></button>
        </div>
      </UContainer>
      <UContainer v-if="!lyric" class="py-6 flex items-center gap-3">
        <button
          @click="isPlaying = !isPlaying"
          class="size-12 flex justify-center items-center bg-primary rounded-full"
        >
          <IconPause v-if="isPlaying" class="size-9 text-gray-900" />
          <IconPlay v-else class="size-9 text-gray-900" />
        </button>
        <div class="h-3 w-full bg-gray-500 rounded-full overflow-hidden">
          <div class="h-6 w-96 bg-white" />
        </div>
      </UContainer>
      <UContainer v-if="!lyric" class="flex justify-between items-center gap-4">
        <div class="flex gap-3">
          <button class="size-8 bg-gray-800 rounded-full"></button>
          <button class="size-8 bg-gray-800 rounded-full"></button>
          <button class="size-8 bg-gray-800 rounded-full"></button>
          <button class="size-8 bg-gray-800 rounded-full"></button>
        </div>
        <div class="flex gap-4">
          <UButton
            @click="lyric = !lyric"
            color="neutral"
            size="xl"
            class="rounded-full focus-visible:scale-110"
            >Letras
          </UButton>
          <UButton color="neutral" size="xl" class="rounded-full focus-visible:scale-110"
            >Queue & jam</UButton
          >
          <UButton
            @click="dark = !dark"
            color="neutral"
            size="xl"
            class="rounded-full focus-visible:scale-110"
            >Dark Mode</UButton
          >

          <UModal
            v-model="guitar"
            :transition="false"
            fullscreen
            title="Modo Guitarra para una sola canción"
          >
            <UButton
              v-if="guitarMode"
              color="primary"
              size="xl"
              class="rounded-full focus-visible:scale-110"
              >Modo Guitarra</UButton
            >
            <template #body>
              <div class="flex justify-center items-center h-full text-4xl">
                Canción & Tablatura
              </div>
            </template>
          </UModal>
        </div>
      </UContainer>
      <UContainer v-if="!lyric">
        <div class="grid grid-cols-4 gap-6 pb-6 pt-10 w-full">
          <RouterLink
            to="/artist/album/name"
            v-for="card in 3"
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
        <div class="grid grid-cols-2 gap-6 py-6 w-full">
          <RouterLink
            to="/artist/album/name"
            v-for="card in 1"
            :key="card"
            class="w-full h-96 bg-gray-800 grid grid-cols-2 overflow-hidden focus-within:ring-white focus-within:ring-1 focus-within:scale-[1.02] duration-300 ring-transparent focus-visible:ring-offset-4 outline-none"
          >
            <div class="bg-gray-600 flex outline-0 justify-center items-center font-mono text-xs">
              Album {{ card }}
            </div>
            <div></div>
          </RouterLink>
        </div>
      </UContainer>
    </div>

    <!-- <Teleport to="body">
      <div
        v-if="guitar"
        class="fixed inset-0 z-[51] bg-black flex justify-center items-center text-4xl flex-col gap-3"
      >
        <button class="fixed right-0 m-6 top-0" @click="guitar = false">
          <LucideX class="size-8" />
        </button>
      </div>
    </Teleport> -->
  </div>
</template>
