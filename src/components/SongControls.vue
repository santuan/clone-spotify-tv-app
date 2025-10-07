<script setup lang="ts">
import IconQueue from '~icons/heroicons/queue-list'
import IconShuffle from '~icons/lucide/shuffle'
import IconDarkmode from '~icons/material-symbols-light/dark-mode-outline'
import IconVideoClip from '~icons/proicons/video-clip'
import IconMicrophone from '~icons/qlementine-icons/microphone-16'
import IconGuitarPick from '~icons/tabler/guitar-pick'
import IconPlayerSkipBackFilled from '~icons/tabler/player-skip-back-filled'
import IconPlayerSkipForwardFilled from '~icons/tabler/player-skip-forward-filled'
import TdesignMusic1 from '~icons/tdesign/music-1'
import IconRepeat from '~icons/uis/repeat'
import { ref, onUnmounted, watch } from 'vue'

import { inject } from 'vue'
const isIdle = inject('is_idle')
let progressInterval: NodeJS.Timeout | null = null

import { storeToRefs } from 'pinia'

import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
const { is_playing, song_active_screen, guitar_mode, show_chords_videotutorial, progress } =
  storeToRefs(store)
import IconPause from '~icons/material-symbols/pause'
import IconPlay from '~icons/material-symbols/play-arrow'

const value = ref([
  {
    label: 'Intro',
    time: 25,
  },
  {
    label: 'Estribillo',
    time: 50,
  },
  {
    label: 'Solo',
    time: 25,
  },
])

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
  <div class="dark_dim">
    <UContainer
      class="flex gap-6 items-center [transition:all_1.2s,background-color_0s] py-7"
      :class="[
        isIdle ? 'fixed bottom-8 bg-gray-950/80 backdrop-blur-xs z-50  left-0 right-0' : '',
        song_active_screen === 'videoclip' && isIdle ? 'hidden' : '',
      ]"
    >
      <button
        class="min-h-24 min-w-24 aspect-square bg-gray-600 flex justify-start items-center overflow-hidden focus-within:ring-white focus-within:ring-1 duration-300 ring-transparent focus-visible:ring-offset-4 outline-none"
        :class="isIdle ? 'ring-0! ring-offset-0! duration-100' : ''"
      ></button>
      <div class="flex justify-between w-full items-center">
        <h1 :class="[song_active_screen === 'guitar' && isIdle ? 'text-xl!' : '']" class="text-3xl">
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
    <UContainer v-if="!isIdle" class="pb-6 flex items-center gap-3">
      <button
        @click="is_playing = !is_playing"
        class="size-12 flex justify-center items-center bg-primary rounded-full focus-visible:outline-offset-8"
      >
        <IconPause v-if="is_playing" class="size-9 text-gray-900" />
        <IconPlay v-else class="size-9 text-gray-900" />
      </button>
      <div class="w-full grid gap-3 mt-3">
        <div
          v-if="song_active_screen === 'guitar' && show_chords_videotutorial === 'videotutorial'"
          class="w-full flex gap-1 mt-1"
        >
          <div
            v-for="i in value"
            :key="i.label"
            class="flex w-full flex-col gap-1 focus-within:outline-offset-2 focus-within:opacity-100 opacity-90 focus-within:outline-2 focus-within:outline-primary p-1 focus-within:z-50"
            :style="'width:' + i.time + '%'"
          >
            <button
              class="h-1 min-w-24 2 w-full flex justify-start items-center outline-0"
              :class="i.label === store.selectedValueVideoSection ? 'bg-gray-500' : 'bg-gray-700'"
              @click="store.selectVideoSection(i.label)"
            >
              <div
                v-show="i.label === store.selectedValueVideoSection"
                class="bg-primary h-1"
                :style="'width: ' + progress + '%'"
              ></div>
            </button>
            <span class="relative text-left w-full text-xs flex justify-between items-center">
              {{ i.label }}
              <span class="relative bg-gray-600 h-2 w-12"></span>
            </span>
          </div>
        </div>
        <div v-else class="grid gap-2">
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
      </div>
    </UContainer>
    <UContainer v-if="!isIdle" class="flex justify-between items-center gap-4">
      <div
        v-if="song_active_screen === 'guitar' && show_chords_videotutorial === 'videotutorial'"
        class="min-w-52 flex gap-3"
      >
        <button
          class="size-10 bg-gray-600 flex justify-center items-center rounded-full focus-visible:outline-offset-8"
        >
          <!-- <IconPlayerSkipBackFilled class="size-4" /> -->
        </button>
        <button
          class="size-10 bg-gray-600 flex justify-center items-center rounded-full focus-visible:outline-offset-8"
        >
          <!-- <IconPlayerSkipForwardFilled class="size-4" /> -->
        </button>
        <button
          class="size-10 bg-gray-600 flex justify-center items-center rounded-full focus-visible:outline-offset-8"
        >
          <!-- <IconShuffle class="size-4" /> -->
        </button>
        <button
          class="size-10 bg-gray-600 flex justify-center items-center rounded-full focus-visible:outline-offset-8"
        >
          <!-- <IconRepeat class="size-4" /> -->
        </button>
      </div>
      <div class="flex gap-3 min-w-52" v-else>
        <button
          class="size-10 bg-gray-600 flex justify-center items-center rounded-full focus-visible:outline-offset-8"
        >
          <IconPlayerSkipBackFilled class="size-4" />
        </button>
        <button
          class="size-10 bg-gray-600 flex justify-center items-center rounded-full focus-visible:outline-offset-8"
        >
          <IconPlayerSkipForwardFilled class="size-4" />
        </button>
        <button
          class="size-10 bg-gray-600 flex justify-center items-center rounded-full focus-visible:outline-offset-8"
        >
          <IconShuffle class="size-4" />
        </button>
        <button
          class="size-10 bg-gray-600 flex justify-center items-center rounded-full focus-visible:outline-offset-8"
        >
          <IconRepeat class="size-4" />
        </button>
      </div>
      <div v-if="song_active_screen === 'guitar'" class="flex gap-3">
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
          :icon="IconGuitarPick"
          :ui="{
            leadingIcon: 'size-5',
          }"
          class="rounded-full focus-visible:scale-110"
        >
          <span v-if="song_active_screen === 'guitar'">Salir</span>
          Modo guitarra</UButton
        >
        <UButton
          v-if="song_active_screen !== 'guitar'"
          @click="store.showVideoclip()"
          color="neutral"
          variant="outline"
          size="xl"
          :icon="song_active_screen === 'videoclip' ? TdesignMusic1 : IconVideoClip"
          class="rounded-full focus-visible:scale-110"
          :ui="{
            leadingIcon: 'size-4',
          }"
        >
          {{
            song_active_screen === 'videoclip' ? 'Cambiar a audio' : 'Cambiar a video musical'
          }}</UButton
        >
        <UButton
          v-if="song_active_screen !== 'guitar'"
          @click="
            song_active_screen === 'lyric'
              ? (song_active_screen = ' ')
              : (song_active_screen = 'lyric')
          "
          color="neutral"
          :icon="IconMicrophone"
          :variant="song_active_screen === 'lyric' ? 'solid' : 'outline'"
          size="xl"
          :ui="{
            leadingIcon: 'size-4',
          }"
          class="rounded-full focus-visible:scale-110"
        >
          Letras
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
            :icon="IconQueue"
            >Queue & jam</UButton
          >

          <template #body>
            <div class="grid gap-3">
              <div :key="i" v-for="i in 9" class="w-full bg-gray-800 h-12"></div>
            </div>
          </template>
        </USlideover>
        <UButton
          @click="store.showDark()"
          v-if="song_active_screen !== 'guitar'"
          :variant="song_active_screen === 'dark' ? 'solid' : 'outline'"
          color="neutral"
          size="xl"
          :icon="IconDarkmode"
          class="rounded-full focus-visible:scale-110"
          >Modo oscuro</UButton
        >
      </div>
    </UContainer>
  </div>
</template>
