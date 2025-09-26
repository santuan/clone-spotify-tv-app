<script setup lang="ts">
import { RouterView } from 'vue-router'
import type { NavigationMenuItem } from '@nuxt/ui'
import { computed } from 'vue'
import LogosSpotify from '~icons/logos/spotify'
import { useSpatialNavigation } from '@/composable/useNav'
import LucideSearch from '~icons/lucide/search'
import LucideHouse from '~icons/lucide/house'
import LucideLibrary from '~icons/lucide/library'
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
</script>

<template>
  <UApp>
    <template v-if="isWidthSupported && isHeightSupported">
      <UHeader
        class="bg-transparent hover:opacity-100 opacity-70 duration-500 border-0 z-30 focus-within:opacity-100 top-0 left-0 right-0"
      >
        <template #title>
          <LogosSpotify class="h-10 w-auto" />
          TV
        </template>

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

        <template #right>
          <div class="flex gap-3">
            <div class="size-8 bg-gray-800 rounded-full"></div>
            <div class="size-8 bg-gray-800 rounded-full"></div>
          </div>
        </template>

        <template #body>
          <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
        </template>
      </UHeader>
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
