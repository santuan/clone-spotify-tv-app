<script setup lang="ts">
import { ref, onUnmounted, watch } from 'vue'
import TablerPlayerSkipForwardFilled from '~icons/tabler/player-skip-forward-filled'
import TablerPlayerSkipBackFilled from '~icons/tabler/player-skip-back-filled'
import LucideShuffle from '~icons/lucide/shuffle'
import UisRepeat from '~icons/uis/repeat'
const progress = ref(0)
import { inject } from 'vue'

const isIdle = inject('is_idle')
let progressInterval: NodeJS.Timeout | null = null

import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
const store = useCounterStore()
const { is_playing, song_active_screen, guitar_mode, show_chords_videotutorial, song_dark } =
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

onUnmounted(() => {
  stopProgress()
})

const handleProgressChange = (value: number | undefined) => {
  if (value !== undefined) {
    progress.value = value
  }
}
</script>

<template>
  <div>
    <UContainer
      class="flex gap-6 items-center"
      :class="isIdle ? 'absolute bottom-8 bg-gray-950/90 backdrop-blur-xs p-3 left-0 right-0' : ''"
    >
      <button
        class="min-h-24 min-w-24 aspect-square dark_dim bg-gray-600 flex justify-start items-center overflow-hidden focus-within:ring-white focus-within:ring-1 duration-300 ring-transparent focus-visible:ring-offset-4 outline-none"
        :class="isIdle ? 'ring-0! ring-offset-0! duration-100' : ''"
      ></button>
      <div class="flex justify-between w-full items-center">
        <h1
          :class="[song_active_screen === 'guitar' && isIdle ? 'text-2xl!' : '']"
          class="text-4xl"
        >
          Nombre canción
        </h1>
        <div v-if="song_active_screen === 'guitar' && isIdle">Próximos acordes...</div>
      </div>
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
      <div class="w-full grid gap-3 mt-3">
        <USlider
          :model-value="progress"
          @update:model-value="handleProgressChange"
          :ui="{
            track: 'h-1',
            thumb:
              'focus-visible:ring-2 focus-visible:ring-offset-0  focus-visible:bg-white focus-visible:ring-white',
          }"
        />
        <div class="flex justify-between items-center w-full">
          <div class="h-2 w-10 bg-gray-700"></div>
          <div class="h-2 w-10 bg-gray-700"></div>
        </div>
      </div>
    </UContainer>
    <UContainer v-if="!isIdle" class="flex dark_dim justify-between items-center gap-4">
      <div class="flex gap-3">
        <button
          class="size-10 bg-gray-600 flex justify-center items-center rounded-full focus-visible:outline-offset-8"
        >
          <TablerPlayerSkipBackFilled class="size-4" />
        </button>
        <button
          class="size-10 bg-gray-600 flex justify-center items-center rounded-full focus-visible:outline-offset-8"
        >
          <TablerPlayerSkipForwardFilled class="size-4" />
        </button>
        <button
          class="size-10 bg-gray-600 flex justify-center items-center rounded-full focus-visible:outline-offset-8"
        >
          <LucideShuffle class="size-4" />
        </button>
        <button
          class="size-10 bg-gray-600 flex justify-center items-center rounded-full focus-visible:outline-offset-8"
        >
          <UisRepeat class="size-4" />
        </button>
      </div>
      <div v-if="song_active_screen === 'guitar'" class="flex gap-3 pr-10">
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
          @click="store.activateGuitar()"
          color="neutral"
          :variant="song_active_screen === 'guitar' ? 'solid' : 'outline'"
          size="xl"
          class="rounded-full focus-visible:scale-110"
        >
          <span v-if="song_active_screen === 'guitar'">Salir</span>
          Modo guitarra</UButton
        >
        <UButton
          v-if="song_active_screen !== 'guitar'"
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
            v-if="song_active_screen !== 'guitar'"
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
          @click="song_dark = !song_dark"
          v-if="song_active_screen !== 'guitar'"
          :variant="song_dark ? 'solid' : 'outline'"
          color="neutral"
          size="xl"
          class="rounded-full focus-visible:scale-110"
          >Modo oscuro</UButton
        >
      </div>
    </UContainer>
  </div>
</template>
