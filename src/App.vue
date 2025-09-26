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

const spatialNav = useSpatialNavigation()
import PhTelevisionSimpleFill from '~icons/ph/television-simple-fill'
import { useMediaQuery } from '@vueuse/core'

const isWidthSupported = useMediaQuery('(min-width: 1023px)')
const isHeightSupported = useMediaQuery('(min-height: 550px)')

import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
const store = useCounterStore()
const { guitarMode, isPlaying } = storeToRefs(store)
</script>

<template>
  <UApp>
    <template v-if="isWidthSupported && isHeightSupported">
      <div
        class="bg-transparent hover:opacity-100 opacity-70 duration-500 border-0 z-30 focus-within:opacity-100 fixed top-0 left-0 right-0"
      >
        <div
          class="max-w-(--ui-container) mx-auto w-full flex items-center relative justify-center h-16"
        >
          <div class="absolute left-7 top-3">
            <RouterLink to="/" v-if="!isPlaying" class="flex outline-offset-4">
              <LogosSpotify class="h-10 w-auto" />
              TV
            </RouterLink>
            <RouterLink
              to="/artist/album/song/name"
              v-else
              class="w-64 h-10 flex justify-start gap-3 bg-gray-800 items-center text-sm"
            >
              <div class="h-10 w-12 bg-primary"></div>
              <div class="w-full grid">
                <span>Nombre canción</span>
                <span class="text-xs animate-pulse text-primary">Escuchando ahora</span>
              </div>
            </RouterLink>
          </div>

          <div class="flex gap-12">
            <RouterLink
              :to="item.to"
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
              <USlideover>
                <button
                  class="size-8 flex justify-center items-center rounded-full outline-offset-4"
                  color="neutral"
                  variant="subtle"
                >
                  <LucideSettings class="size-6" />
                </button>

                <template #content>
                  <div class="p-3">
                    <h3 class="mb-6 text-2xl">Configuraciones</h3>
                    <USwitch
                      v-model="guitarMode"
                      size="xl"
                      default-value
                      label="Modo guitarra"
                      description="Activa o desactiva el módulo según preferencias personales."
                    />
                  </div>
                </template>
              </USlideover>
              <USlideover>
                <button
                  class="size-8 flex justify-center items-center rounded-full outline-offset-4"
                  color="neutral"
                  variant="subtle"
                >
                  <LucideUser class="size-6" />
                </button>

                <template #content>
                  <div class="p-3">
                    <h3 class="mb-6 text-2xl">Usuario</h3>
                    <div class="w-full px-1">
                      <UUser
                        name="Nombre Apellido"
                        description="Plan premium"
                        :avatar="{
                          src: 'https://github.com/benjamincanac.png',
                        }"
                      />
                    </div>
                  </div>
                </template>
              </USlideover>
            </div>
          </div>
        </div>
      </div>
      <main class="fixed inset-0 z-20 pt-16 min-h-screen bg-gray-950">
        <RouterView />
      </main>
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
