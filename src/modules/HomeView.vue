<script setup lang="ts">
import { ref, nextTick } from 'vue'

const ShowSelected = ref('Artista 1')
const scrollContainer = ref<HTMLElement | null>(null)

const updateShowSelected = async (title: string) => {
  ShowSelected.value = title

  await nextTick()

  const focusedElement = document.activeElement as HTMLElement
  if (focusedElement && scrollContainer.value) {
    const containerRect = scrollContainer.value.getBoundingClientRect()
    const elementRect = focusedElement.getBoundingClientRect()

    const isCompletelyVisible =
      elementRect.top >= containerRect.top && elementRect.bottom <= containerRect.bottom

    if (!isCompletelyVisible) {
      const containerCenter = containerRect.height / 2
      const elementCenter = elementRect.top - containerRect.top + elementRect.height / 2
      const scrollOffset = elementCenter - containerCenter

      scrollContainer.value.scrollBy({
        top: scrollOffset,
        behavior: 'smooth',
      })
    }
  }
}

const resetShowSelected = () => {
  ShowSelected.value = 'Música'
}

import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
const store = useCounterStore()
const { guitar_mode, song_active_screen, show_chords_videotutorial } = storeToRefs(store)

const isShowing = ref('Mostrar todos')

function changeShowing(i: string) {
  console.log(i)
  isShowing.value = i
}

import { useRouter } from 'vue-router'

const router = useRouter()

function pushWithQueryVideo() {
  song_active_screen.value = 'guitar'
  show_chords_videotutorial.value = 'videotutorial'
  router.push('/artist/album/song/name')
}

function pushWithQueryChords() {
  song_active_screen.value = 'guitar'
  show_chords_videotutorial.value = 'partituras'
  router.push('/artist/album/song/name')
}
</script>

<template>
  <div class="h-[35vh] pt-14 flex justify-center flex-col items-start bg-gray-700">
    <UContainer>
      <h1 class="text-4xl text-pretty tracking-tight font-bold text-highlighted">
        {{ ShowSelected }}
      </h1>
    </UContainer>
  </div>
  <div
    ref="scrollContainer"
    class="bg-gray-900 overflow-y-auto h-[65vh] snap-y snap-proximity flex justify-start flex-col items-start"
  >
    <UContainer class="py-6 gap-3 flex snap-center pb-20 flex-col justify-start pt-6 items-start">
      <div class="flex gap-3 w-full">
        <UButton
          size="lg"
          :color="isShowing === 'Mostrar todos' ? 'primary' : 'neutral'"
          @click="changeShowing('Mostrar todos')"
          @focus="updateShowSelected(`Mi coleccion`)"
          @blur="resetShowSelected"
          class="font-bold focus-visible:scale-110 duration-300 transition-transform rounded-full"
          >Mostrar todo
        </UButton>
        <UButton
          size="lg"
          :color="isShowing === 'musica' ? 'primary' : 'neutral'"
          @click="changeShowing('musica')"
          @focus="updateShowSelected(`Música`)"
          @blur="resetShowSelected"
          class="font-bold focus-visible:scale-110 duration-300 transition-transform rounded-full"
          >Música</UButton
        >
        <UButton
          size="lg"
          :color="isShowing === 'podcasts' ? 'primary' : 'neutral'"
          @click="changeShowing('podcasts')"
          @focus="updateShowSelected(`Podcasts`)"
          @blur="resetShowSelected"
          class="font-bold focus-visible:scale-110 duration-300 transition-transform rounded-full"
          >Podcasts</UButton
        >
        <!-- <UButton
          size="lg"
          v-if="guitar_mode"
          color="neutral"
          to="/guitarmode"
          @click="changeShowing('modo-guitarra')"
          @focus="updateShowSelected(`Modo guitarra`)"
          @blur="resetShowSelected"
          class="font-bold focus-visible:scale-110 duration-300 transition-transform rounded-full"
          >Ir a home de modo guitarra
        </UButton> -->
      </div>
      <div class="grid grid-cols-4 gap-3 w-full">
        <RouterLink
          to="/artist/name"
          v-for="card in 8"
          :key="card"
          @focus="updateShowSelected(`Destacado ${card}`)"
          @blur="resetShowSelected"
          class="h-16 w-full bg-gray-800 flex justify-start items-center overflow-hidden focus-visible:ring-white focus-visible:scale-105 duration-300 ring-transparent focus-visible:ring-offset-4 outline-none ring"
        >
          <div class="h-16 text-xs min-w-16 bg-gray-600 flex justify-center items-center font-mono">
            <!-- <template v-if="isShowing === 'Mostrar todos'"> Artista </template>
            <template v-else-if="isShowing === 'musica'"> musica </template>
            <template v-else-if="isShowing === 'podcasts'"> Podcasts </template> -->
            Artista
          </div>
          <div class="h-16 px-3 flex justify-start items-center w-full">
            <div class="h-6 w-20 bg-gray-600" />
          </div>
        </RouterLink>
      </div>
    </UContainer>

    <UContainer
      v-if="isShowing === 'Mostrar todos'"
      class="gap-3 w-full flex snap-center flex-col justify-start pb-20 items-start"
    >
      <p class="text-2xl">Recomendados</p>
      <div class="grid grid-cols-4 gap-3 w-full">
        <RouterLink
          to="/artist/album/name"
          v-for="card in 4"
          :key="card"
          @focus="updateShowSelected(`Álbum Recomendado ${card}`)"
          @blur="resetShowSelected"
          class="h-32 w-full bg-gray-800 flex justify-start items-center overflow-hidden focus-visible:ring-white focus-visible:ring-1 focus-visible:scale-105 duration-300 ring-transparent focus-visible:ring-offset-4 outline-none"
        >
          <div class="h-32 w-full bg-gray-600 flex justify-center items-center font-mono">
            Álbum Recomendado 0{{ card }}
          </div>
        </RouterLink>
      </div>
    </UContainer>

    <UContainer
      v-if="isShowing === 'musica'"
      class="gap-3 w-full flex flex-col snap-center justify-start pb-20 items-start"
    >
      <p class="text-2xl w-64">Artistas</p>
      <div class="grid grid-cols-8 w-full gap-3">
        <RouterLink
          to="/artist/name"
          v-for="card in 24"
          :key="card"
          @focus="updateShowSelected(`Artista Popular ${card}`)"
          @blur="resetShowSelected"
          class="h-32 w-full bg-gray-800 flex justify-start items-center overflow-hidden focus-visible:ring-white focus-visible:ring-1 focus-visible:scale-105 duration-300 ring-transparent focus-visible:ring-offset-4 outline-none"
        >
          <div class="h-32 w-full bg-gray-600 flex justify-center p-3 items-center font-mono">
            Artista Popular 0{{ card }}
          </div>
        </RouterLink>
      </div>
    </UContainer>

    <UContainer
      v-if="isShowing === 'Mostrar todos'"
      class="min-h-[80vh] gap-3 w-full flex flex-col snap-center justify-start pt-6 items-start"
    >
      <p class="text-2xl w-64">Modo guitarra</p>
      <div class="grid grid-cols-4 pt-2 w-full gap-3">
        <button
          @click="pushWithQueryVideo"
          v-for="card in 4"
          :key="card"
          @focus="updateShowSelected(`Videotutorial guitarra  ${card}`)"
          @blur="resetShowSelected"
          class="h-32 w-full bg-gray-800 flex justify-start items-center overflow-hidden focus-visible:ring-white focus-visible:ring-1 duration-300 ring-transparent ring-offset-4 outline-none"
        >
          <div class="h-32 w-full bg-gray-600 flex justify-center items-center font-mono">
            Videotutorial guitarra 0{{ card }}
          </div>
        </button>
      </div>
      <p class="text-2xl w-64 pt-2">Modo guitarra</p>
      <div class="grid grid-cols-8 w-full pb-40 gap-3">
        <button
          v-for="card in 8"
          :key="card"
          @click="pushWithQueryChords"
          @focus="updateShowSelected(`Canción con partituras ${card}`)"
          @blur="resetShowSelected"
          class="h-32 w-full bg-gray-800 flex justify-start items-center overflow-hidden focus-visible:ring-white focus-visible:ring-1 duration-300 ring-transparent ring-offset-4 outline-none"
        >
          <div class="h-32 w-full bg-gray-600 flex justify-center items-center font-mono">
            Canción con partituras 0{{ card }}
          </div>
        </button>
      </div>
    </UContainer>

    <UContainer
      v-if="isShowing === 'podcasts'"
      class="min-h-[80vh] gap-3 w-full flex flex-col snap-center justify-start items-start"
    >
      <p class="text-2xl w-64">Podcasts</p>
      <div class="grid grid-cols-8 w-full gap-3">
        <RouterLink
          to="/artist/name"
          v-for="card in 8"
          :key="card"
          @focus="updateShowSelected(`Mas podcasts ${card}`)"
          @blur="resetShowSelected"
          class="h-32 w-full bg-gray-800 flex justify-start items-center overflow-hidden focus-visible:ring-white focus-visible:ring-1 duration-300 ring-transparent ring-offset-4 outline-none"
        >
          <div class="h-32 p-3 w-full bg-gray-600 flex justify-center items-center font-mono">
            Mas podcasts 0{{ card }}
          </div>
        </RouterLink>
      </div>
    </UContainer>
  </div>
</template>
