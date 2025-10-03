<template>
  <UApp>
    <NotSupported v-if="!isSizeSupported" />
    <template v-else>
      <TheHeader />
      <main class="z-20 min-h-screen max-h-[85vh] overflow-y-auto bg-gray-950">
        <RouterView />
      </main>
    </template>
  </UApp>
</template>

<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
import { computed } from 'vue'
import { RouterView } from 'vue-router'

import { useSpatialNavigation } from '@/composable/useNav'

import NotSupported from './components/NotSupported.vue'
import TheHeader from './components/TheHeader.vue'

useSpatialNavigation()

const isWidthSupported = useMediaQuery('(min-width: 1230px)')
const isHeightSupported = useMediaQuery('(min-height: 550px)')

const isSizeSupported = computed(() => {
  return isWidthSupported.value && isHeightSupported.value
})
</script>
