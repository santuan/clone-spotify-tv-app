<script setup lang="ts">
import { ref, onUnmounted, watch, computed } from 'vue'

const progress = ref(0)
const dark = ref(false)

let progressInterval: NodeJS.Timeout | null = null

import { useIdle } from '@vueuse/core'

const { idle } = useIdle(5000)

const isIdle = computed(() => {
  if (is_playing.value === false) {
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
const { is_playing, song_active_screen, guitar_mode, show_chords_videotutorial } =
  storeToRefs(store)
import IconPlay from '~icons/material-symbols/play-arrow'
import IconPause from '~icons/material-symbols/pause'

// Simulate song progress
const startProgress = () => {
  if (progressInterval) clearInterval(progressInterval)

  progressInterval = setInterval(() => {
    progress.value += 0.15

    if (progress.value >= 100) {
      progress.value = 0
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
  is_playing,
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
const handleProgressChange = (value: number | undefined) => {
  if (value !== undefined) {
    progress.value = value
  }
}

const activateGuitar = () => {
  if (song_active_screen.value === 'guitar') {
    song_active_screen.value = ' '
  } else {
    song_active_screen.value = 'guitar'
    show_chords_videotutorial.value = 'videotutorial'
  }
}
</script>

<template>
  <div
    class="grid overflow-y-auto overflow-x-hidden bg-gray-900"
    :class="dark ? 'dark-mode-active' : ''"
  >
    <div
      class="w-full dark_dim bg-emerald-950/40"
      :class="isIdle ? 'is_idle h-[99vh] fixed inset-0' : 'h-[50vh]'"
    >
      <UContainer
        v-if="song_active_screen === 'lyric'"
        class="flex max-w-5xl mx-auto overflow-y-auto overflow-x-hidden h-screen max-h-[60vh] gap-y-8 flex-wrap gap-3"
      >
        <div
          v-for="i in 12"
          :style="'width: ' + Math.random() * 40.2 + 'rem'"
          :key="i"
          class="min-w-32 h-8 bg-white/20 inline-block"
        ></div>
      </UContainer>
      <UContainer
        v-if="song_active_screen === 'guitar'"
        class="max-w-5xl mx-auto flex-col overflow-y-auto overflow-x-hidden h-screen flex justify-center items-center max-h-[60vh] flex-wrap gap-3"
      >
        <h2>Modo guitarra</h2>
        <p class="text-4xl capitalize">{{ show_chords_videotutorial }}</p>
      </UContainer>
    </div>
    <div class="bg-gradient-to-b to-gray-950 from-gray-950/50 pt-6 pb-12 w-full">
      <UContainer
        class="flex gap-6 items-center duration-1000"
        :class="
          isIdle ? 'absolute bottom-8 bg-gray-950/80 backdrop-blur-xs p-3 left-0 right-0' : ''
        "
      >
        <button
          class="size-24 dark_dim pt-24 bg-gray-600 flex justify-start items-center overflow-hidden focus-within:ring-white focus-within:ring-1 focus-within:scale-[1.02] duration-300 ring-transparent focus-visible:ring-offset-4 outline-none"
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
      <UContainer v-if="!isIdle" class="py-6 dark_dim flex items-center gap-3">
        <button
          @click="is_playing = !is_playing"
          class="size-12 flex justify-center items-center bg-primary rounded-full focus-visible:outline-offset-8"
        >
          <IconPause v-if="is_playing" class="size-9 text-gray-900" />
          <IconPlay v-else class="size-9 text-gray-900" />
        </button>
        <USlider
          :model-value="progress"
          @update:model-value="handleProgressChange"
          :ui="{
            thumb:
              'focus-visible:ring-2 focus-visible:ring-offset-0  focus-visible:bg-white focus-visible:ring-white',
          }"
        />
      </UContainer>
      <UContainer v-if="!isIdle" class="flex dark_dim justify-between items-center gap-4">
        <div class="flex gap-3" v-if="song_active_screen !== 'guitar'">
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
        <div v-else class="flex gap-3">
          <UButton
            v-if="guitar_mode"
            @click="show_chords_videotutorial = 'videotutorial'"
            color="neutral"
            :variant="show_chords_videotutorial === 'videotutorial' ? 'solid' : 'outline'"
            size="xl"
            class="rounded-full focus-visible:scale-110"
            >Videotutorial</UButton
          >
          <UButton
            v-if="guitar_mode"
            @click="show_chords_videotutorial = 'partituras'"
            color="neutral"
            :variant="show_chords_videotutorial === 'partituras' ? 'solid' : 'outline'"
            size="xl"
            class="rounded-full focus-visible:scale-110"
            >Partituras</UButton
          >
        </div>
        <div class="flex gap-4">
          <UButton
            v-if="guitar_mode"
            @click="activateGuitar()"
            color="neutral"
            :variant="song_active_screen === 'guitar' ? 'solid' : 'outline'"
            size="xl"
            class="rounded-full focus-visible:scale-110"
            >Modo guitarra</UButton
          >
          <UButton
            @click="
              song_active_screen === 'lyric'
                ? (song_active_screen = ' ')
                : (song_active_screen = 'lyric')
            "
            color="neutral"
            :variant="song_active_screen === 'lyric' ? 'solid' : 'outline'"
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
      <UContainer class="dark_dim" v-if="!isIdle">
        <div
          v-show="song_active_screen !== 'guitar'"
          class="grid grid-cols-4 gap-6 pb-6 pt-10 w-full"
        >
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
        <div v-show="song_active_screen !== 'guitar'" class="grid grid-cols-2 gap-6 py-6 w-full">
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
