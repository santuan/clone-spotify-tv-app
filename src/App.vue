<script setup lang="ts">
import { RouterView } from 'vue-router'
import type { NavigationMenuItem } from '@nuxt/ui'
import { computed } from 'vue'
import LogosSpotify from '~icons/logos/spotify'
import { useSpatialNavigation } from '@/composable/useNav'
import LucideSearch from '~icons/lucide/search'
import LucideHouse from '~icons/lucide/house'
import LucideLibrary from '~icons/lucide/library'
import LucideSettings from '~icons/lucide/settings'
import LucideUser from '~icons/lucide/user'
const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Inicio',
    to: '/',
    icon: LucideHouse,
  },
  {
    label: 'Buscar',
    to: '/search',
    icon: LucideSearch,
  },
  {
    label: 'Mi librería',
    icon: LucideLibrary,
    to: '/my-library',
  },
])

useSpatialNavigation()
import PhTelevisionSimpleFill from '~icons/ph/television-simple-fill'
import { useMediaQuery } from '@vueuse/core'

const isWidthSupported = useMediaQuery('(min-width: 1023px)')
const isHeightSupported = useMediaQuery('(min-height: 550px)')

import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
const store = useCounterStore()
const { guitar_mode, is_playing } = storeToRefs(store)

// const toaster = { position: 'top-right', duration: 10000 }
// const toast = useToast()
// function showToast() {
//   toast.add({
//     title: 'Modo guitarra',
//     description: 'Videotutoriales y acordes de guitarra de tus temas favoritos',
//     actions: [
//       {
//         label: 'Activar',
//         color: 'primary',
//         variant: 'outline',
//         onClick: (e) => {
//           e?.stopPropagation()
//           guitar_mode.value = true
//         },
//       },
//     ],
//   })
// }

// onMounted(() => {
//   setTimeout(showToast, 5000)
// :toaster="toaster"
// })
</script>

<template>
  <UApp>
    <template v-if="isWidthSupported && isHeightSupported">
      <div
        class="bg-black main_header hover:opacity-100 opacity-70 duration-500 border-0 z-30 focus-within:opacity-100 fixed top-0 left-0 right-0"
      >
        <div
          class="max-w-(--ui-container) mx-auto w-full flex items-center relative justify-center h-16"
        >
          <div class="absolute left-7 top-3">
            <RouterLink to="/" v-if="!is_playing" class="flex outline-offset-4">
              <LogosSpotify class="h-10 w-auto" />
              TV
            </RouterLink>
            <RouterLink
              to="/artist/album/song/name"
              v-else
              class="w-64 h-10 flex justify-start overflow-hidden outline-offset-4 gap-3 bg-gray-800 items-center text-sm"
            >
              <div class="h-10 w-12 bg-primary"></div>
              <div class="w-full grid">
                <span>Nombre canción</span>
                <span class="text-xs animate-pulse text-primary">Escuchando ahora</span>
              </div>
            </RouterLink>
          </div>
          <!-- <UButton label="Show toast" color="neutral" variant="outline" @click="showToast" /> -->

          <div class="flex gap-12">
            <RouterLink
              :to="`${item.to}`"
              class="flex items-center justify-center text-lg gap-2 outline-offset-8"
              v-for="item in items"
              :key="item.label"
            >
              <component :is="item.icon" class="size-5" />
              {{ item.label }}
            </RouterLink>
          </div>

          <div class="absolute right-7 top-4">
            <div class="flex gap-3">
              <USlideover title="Configuraciones">
                <button
                  class="size-8 flex justify-center items-center rounded-full outline-offset-4"
                  color="neutral"
                  variant="subtle"
                >
                  <LucideSettings class="size-6" />
                </button>

                <template #body>
                  <div class="grid mb-6 gap-3">
                    <div class="w-full bg-gray-800 h-20"></div>
                  </div>
                  <USwitch
                    v-model="guitar_mode"
                    size="xl"
                    default-value
                    label="Modo guitarra"
                    description="Activa o desactiva el módulo según preferencias personales."
                  />
                  <div class="grid mt-6 gap-3">
                    <div :key="i" v-for="i in 5" class="w-full bg-gray-800 h-20"></div>
                  </div>
                </template>
              </USlideover>
              <USlideover title="Usuario">
                <button
                  class="size-8 flex justify-center items-center rounded-full outline-offset-4"
                  color="neutral"
                  variant="subtle"
                >
                  <LucideUser class="size-6" />
                </button>

                <template #body>
                  <div class="w-full px-1">
                    <UUser
                      name="Nombre Apellido"
                      description="Plan premium"
                      :avatar="{
                        src: 'https://avatars.githubusercontent.com/u/4934532?v=4&size=64',
                      }"
                    />
                  </div>
                  <div class="grid gap-3 mt-12">
                    <div :key="i" v-for="i in 9" class="w-full bg-gray-800 h-12"></div>
                  </div>
                </template>
              </USlideover>
            </div>
          </div>
        </div>
      </div>
      <main class="z-20 min-h-screen max-h-[85vh] overflow-y-auto bg-gray-950">
        <RouterView />
      </main>
      <!-- <UModal
        v-model:open="guitar"
        :transition="false"
        fullscreen
        title="Modo Guitarra para una sola canción"
      >
        <template #body>
          <div class="flex justify-center items-center h-full text-4xl text-center leading-relaxed">
            Canción & Tablatura
            <br />
            Videotutorial del artista?
          </div>
        </template>
      </UModal> -->
    </template>
    <template v-else>
      <div class="h-screen w-full flex justify-center items-center flex-col gap-2">
        <PhTelevisionSimpleFill class="size-24 animate-pulse" />
        <h2 class="font-mono text-lg">Resolución no soportada</h2>
      </div>
    </template>
  </UApp>
</template>

<style scoped></style>
