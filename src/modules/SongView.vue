<script setup lang="ts">
import { ref, onUnmounted, watch, computed } from 'vue'
const progress = ref(50)
const dark = ref(false)
const lyric = ref(false)
let progressInterval: NodeJS.Timeout | null = null

import { useIdle } from '@vueuse/core'

const { idle } = useIdle(3000)

const isIdle = computed(() => {
  if (isPlaying.value === false) {
    return false
  }
  if (idle.value) {
    return true
  }
  return false
})
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
const store = useCounterStore()
const { isPlaying, guitar } = storeToRefs(store)
import IconPlay from '~icons/material-symbols/play-arrow'
import IconPause from '~icons/material-symbols/pause'

// Simulate song progress
const startProgress = () => {
  if (progressInterval) clearInterval(progressInterval)

  progressInterval = setInterval(() => {
    progress.value += 0.5 // Increment by 0.5% every 500ms (simulates a ~3.3 minute song)

    // Reset to 0 when reaching 100%
    if (progress.value >= 100) {
      progress.value = 0
      // Optionally pause when song ends
      // isPlaying.value = false
    }
  }, 500)
}

const stopProgress = () => {
  if (progressInterval) {
    clearInterval(progressInterval)
    progressInterval = null
  }
}

// Watch for play/pause changes
watch(
  isPlaying,
  (newValue) => {
    if (newValue) {
      startProgress()
    } else {
      stopProgress()
    }
  },
  { immediate: true },
)

// Cleanup on component unmount
onUnmounted(() => {
  stopProgress()
})

// Allow manual progress control
const handleProgressChange = (value: number) => {
  progress.value = value
}
</script>

<template>
  <div
    class="grid overflow-y-auto overflow-x-hidden bg-gray-900"
    :class="dark ? 'dark-mode-active' : ''"
  >
    <button
      class="w-full bg-emerald-950/40"
      :class="isIdle ? 'h-[99vh] fixed inset-0' : 'h-[50vh]'"
    >
      <UContainer
        v-if="lyric"
        class="flex max-w-5xl mx-auto overflow-y-auto overflow-x-hidden h-screen max-h-[60vh] !gap-y-8 flex-wrap gap-3"
      >
        <div
          v-for="i in 12"
          :style="'width: ' + Math.random() * 40.2 + 'rem'"
          :key="i"
          class="min-w-32 h-8 bg-white/20 inline-block"
        ></div>
      </UContainer>
    </button>
    <div class="bg-gray-950 pt-6 pb-12 w-full">
      <UContainer
        class="flex gap-6 items-center"
        :class="isIdle ? 'fixed bottom-8 bg-gray-950/80 backdrop-blur-xs p-3 left-0 right-0' : ''"
      >
        <button
          class="size-24 pt-24 bg-gray-600 flex justify-start items-center overflow-hidden focus-within:ring-white focus-within:ring-1 focus-within:scale-[1.02] duration-300 ring-transparent focus-visible:ring-offset-4 outline-none"
        ></button>
        <h1 class="text-4xl">Nombre canción</h1>
        <div class="flex ml-auto justify-center gap-6 items-center">
          <UButton
            color="neutral"
            disabled
            variant="outline"
            size="xl"
            v-if="!isIdle"
            class="rounded-full focus-visible:scale-110"
            >Guardar</UButton
          >
        </div>
      </UContainer>
      <UContainer v-if="!isIdle" class="py-6 flex items-center gap-3">
        <button
          @click="isPlaying = !isPlaying"
          class="size-12 flex justify-center items-center bg-primary rounded-full focus-visible:outline-offset-8"
        >
          <IconPause v-if="isPlaying" class="size-9 text-gray-900" />
          <IconPlay v-else class="size-9 text-gray-900" />
        </button>
        <USlider
          :model-value="progress"
          @update:model-value="handleProgressChange"
          color="neutral"
        />
        <!-- <div class="h-3 w-full bg-gray-500 rounded-full overflow-hidden">
          <div class="h-6 w-96 bg-white" />
        </div> -->
      </UContainer>
      <UContainer v-if="!isIdle" class="flex justify-between items-center gap-4">
        <div class="flex gap-3">
          <button
            class="w-12 h-10 bg-gray-600 rounded-full focus-visible:outline-offset-8"
          ></button>
          <button
            class="w-12 h-10 bg-gray-600 rounded-full focus-visible:outline-offset-8"
          ></button>
          <button
            class="w-12 h-10 bg-gray-600 rounded-full focus-visible:outline-offset-8"
          ></button>
          <button
            class="w-12 h-10 bg-gray-600 rounded-full focus-visible:outline-offset-8"
          ></button>
        </div>
        <div class="flex gap-4">
          <UButton
            @click="guitar = true"
            color="neutral"
            :variant="guitar ? 'solid' : 'outline'"
            size="xl"
            class="rounded-full focus-visible:scale-110"
            >Modo guitarra</UButton
          >
          <UButton
            @click="lyric = !lyric"
            color="neutral"
            :variant="lyric ? 'solid' : 'outline'"
            size="xl"
            class="rounded-full focus-visible:scale-110"
            >Letras
          </UButton>

          <USlideover
            title="Queue"
            :close="{
              color: 'primary',
              variant: 'outline',
            }"
          >
            <UButton
              color="neutral"
              variant="outline"
              size="xl"
              class="rounded-full focus-visible:scale-110"
              >Queue & jam</UButton
            >

            <template #body>
              <div class="grid gap-3">
                <div :key="i" v-for="i in 9" class="w-full bg-gray-800 h-12"></div>
              </div>
            </template>
          </USlideover>
          <UButton
            @click="dark = !dark"
            :variant="dark ? 'solid' : 'outline'"
            color="neutral"
            size="xl"
            class="rounded-full focus-visible:scale-110"
            >Modo oscuro</UButton
          >
        </div>
      </UContainer>
      <UContainer v-if="!isIdle">
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
          </RouterLink>
        </div>
      </UContainer>
    </div>
  </div>
</template>
