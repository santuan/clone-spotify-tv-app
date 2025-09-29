<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
const store = useCounterStore()
const { guitar_mode, is_showing, home_show_selected, scrollContainer } = storeToRefs(store)
</script>

<template>
  <div class="h-[35vh] pt-14 flex justify-center flex-col items-start bg-gray-800">
    <UContainer>
      <h1 class="text-4xl font-bold tracking-tight text-pretty text-highlighted">
        {{ home_show_selected }}
      </h1>
    </UContainer>
  </div>
  <div
    ref="scrollContainer"
    class="bg-gray-900 overflow-y-auto h-[65vh] snap-y snap-proximity flex justify-start flex-col items-start"
  >
    <UContainer class="flex flex-col items-start justify-start gap-3 py-6 pt-6 pb-20 snap-start">
      <div class="flex w-full gap-3">
        <UButton
          size="lg"
          :color="is_showing === 'todos' ? 'primary' : 'neutral'"
          @click="store.changeShowing('todos')"
          @focus="store.updateShowSelected(`Mi colección`)"
          @blur="store.resetShowSelected"
          class="font-bold transition-transform duration-300 rounded-full focus-visible:scale-110"
          >Mostrar todo
        </UButton>
        <UButton
          size="lg"
          :color="is_showing === 'musica' ? 'primary' : 'neutral'"
          @click="store.changeShowing('musica')"
          @focus="store.updateShowSelected(`Música`)"
          @blur="store.resetShowSelected"
          class="font-bold transition-transform duration-300 rounded-full focus-visible:scale-110"
          >Música</UButton
        >
        <UButton
          size="lg"
          :color="is_showing === 'podcasts' ? 'primary' : 'neutral'"
          @click="store.changeShowing('podcasts')"
          @focus="store.updateShowSelected(`Podcasts`)"
          @blur="store.resetShowSelected"
          class="font-bold transition-transform duration-300 rounded-full focus-visible:scale-110"
          >Podcasts</UButton
        >
      </div>
      <div class="grid w-full grid-cols-4 gap-3">
        <template v-if="is_showing === 'todos'">
          <RouterLink
            to="/artist/name"
            v-for="i in 8"
            :key="i"
            @focus="store.updateShowSelected(`Artista destacado ${i}`)"
            @blur="store.resetShowSelected"
            class="flex items-center justify-start w-full h-16 overflow-hidden duration-300 bg-gray-800 outline-none focus-visible:ring-white focus-visible:scale-105 ring-transparent focus-visible:ring-offset-4 ring"
          >
            <div class="bg-gray-600 min-h-16 aspect-square"></div>
            <div class="flex items-center justify-start w-full h-16 px-3">
              Artista
              {{ i }}
            </div>
          </RouterLink>
        </template>
        <template v-if="is_showing === 'musica'">
          <RouterLink
            to="/artist/album/name"
            v-for="i in 8"
            :key="i"
            @focus="store.updateShowSelected(`Album destacado ${i}`)"
            @blur="store.resetShowSelected"
            class="flex items-center justify-start w-full h-16 overflow-hidden duration-300 bg-gray-800 outline-none focus-visible:ring-white focus-visible:scale-105 ring-transparent focus-visible:ring-offset-4 ring"
          >
            <div class="bg-gray-600 min-h-16 aspect-square"></div>
            <div class="flex items-center justify-start w-full h-16 px-3">
              Album
              {{ i }}
            </div>
          </RouterLink>
        </template>
        <template v-if="is_showing === 'podcasts'">
          <RouterLink
            v-for="i in 8"
            :key="i"
            to="/artist/album/name"
            @focus="store.updateShowSelected(`Podcast destacado ${i}`)"
            @blur="store.resetShowSelected"
            class="flex items-center justify-start w-full h-16 overflow-hidden duration-300 bg-gray-800 outline-none focus-visible:ring-white focus-visible:scale-105 ring-transparent focus-visible:ring-offset-4 ring"
          >
            <div class="bg-gray-600 min-h-16 aspect-square"></div>
            <div class="flex items-center justify-start w-full h-16 px-3">Podcast {{ i }}</div>
          </RouterLink>
        </template>
      </div>
    </UContainer>

    <UContainer
      class="flex min-h-[60vh] flex-col items-start justify-start w-full gap-3 pt-6 pb-20 snap-start"
      v-if="is_showing === 'todos'"
    >
      <p class="text-2xl">Recomendados</p>
      <div class="grid w-full grid-cols-4 gap-3">
        <RouterLink
          v-for="i in 4"
          :key="i"
          to="/artist/album/name"
          @focus="store.updateShowSelected(`Álbum Recomendado ${i}`)"
          @blur="store.resetShowSelected"
          class="flex items-center justify-start w-full p-3 overflow-hidden duration-300 bg-gray-600 outline-none aspect-video focus-visible:ring-white focus-visible:ring-1 focus-visible:scale-105 ring-transparent focus-visible:ring-offset-4"
        >
          Álbum Recomendado {{ i }}
        </RouterLink>
      </div>
    </UContainer>

    <UContainer
      v-if="is_showing === 'musica' || is_showing === 'todos'"
      class="flex flex-col min-h-[60vh] items-start justify-start w-full gap-3 pt-6 pb-20 snap-start"
    >
      <p class="w-64 text-2xl">Artistas</p>
      <div class="grid w-full grid-cols-8 gap-3">
        <RouterLink
          to="/artist/name"
          v-for="i in 16"
          :key="i"
          @focus="store.updateShowSelected(`Artista Popular ${i}`)"
          @blur="store.resetShowSelected"
          class="flex items-center justify-start p-3 overflow-hidden duration-300 bg-gray-600 outline-none aspect-square focus-visible:ring-white focus-visible:ring-1 focus-visible:scale-105 ring-transparent focus-visible:ring-offset-4"
        >
          Artista {{ i }}
        </RouterLink>
      </div>
    </UContainer>

    <UContainer
      v-if="is_showing === 'todos' && guitar_mode"
      class="min-h-[80vh] gap-3 w-full flex flex-col snap-start justify-start pt-6 items-start"
    >
      <p class="text-2xl w-96">Videotutorial Modo guitarra</p>
      <div class="grid w-full grid-cols-4 gap-3 pt-2">
        <button
          @click="store.pushWithQueryVideo"
          v-for="i in 4"
          :key="i"
          @focus="store.updateShowSelected(`Videotutorial ${i}`)"
          @blur="store.resetShowSelected"
          class="flex items-center justify-start w-full p-3 overflow-hidden text-left duration-300 bg-gray-600 outline-none aspect-video focus-visible:ring-white focus-visible:ring-1 ring-transparent ring-offset-4"
        >
          Videotutorial {{ i }}
        </button>
      </div>
      <p class="w-64 pt-2 text-2xl">Con partituras</p>
      <div class="grid w-full grid-cols-8 gap-3 pb-40">
        <button
          v-for="i in 8"
          :key="i"
          @click="store.pushWithQueryChords"
          @focus="store.updateShowSelected(`Canción con partitura ${i}`)"
          @blur="store.resetShowSelected"
          class="flex items-center justify-start p-3 overflow-hidden text-left duration-300 bg-gray-600 outline-none aspect-square focus-visible:ring-white focus-visible:ring-1 ring-transparent ring-offset-4"
        >
          Partituras {{ i }}
        </button>
      </div>
    </UContainer>

    <UContainer
      v-if="is_showing === 'podcasts' || is_showing === 'todos'"
      class="min-h-[80vh] gap-3 w-full flex flex-col snap-start justify-start items-start pt-6"
    >
      <p class="w-64 text-2xl">Podcasts</p>
      <div class="grid w-full grid-cols-8 gap-3">
        <RouterLink
          to="/artist/name"
          v-for="card in 8"
          :key="card"
          @focus="store.updateShowSelected(`Podcast ${card}`)"
          @blur="store.resetShowSelected"
          class="flex items-center justify-start w-full p-3 overflow-hidden duration-300 bg-gray-600 outline-none aspect-square focus-visible:ring-white focus-visible:ring-1 ring-transparent ring-offset-4"
        >
          Podcasts {{ card }}
        </RouterLink>
      </div>
    </UContainer>
  </div>
</template>
