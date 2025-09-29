<template>
  <UApp>
    <!-- Show NotSupported component if either width or height requirements are not met -->
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
import { useSpatialNavigation } from '@/composable/useNav'
import { RouterView } from 'vue-router'
import { useMediaQuery } from '@vueuse/core'
import { computed } from 'vue'
import TheHeader from './components/TheHeader.vue'
import NotSupported from './components/NotSupported.vue'

// Initialize spatial navigation
useSpatialNavigation()

// Media query checks for minimum supported dimensions
const isWidthSupported = useMediaQuery('(min-width: 123px)')
const isHeightSupported = useMediaQuery('(min-height: 550px)')

// Combined check - both dimensions must be supported
const isSizeSupported = computed(() => {
  return isWidthSupported.value && isHeightSupported.value
})

/*
//
// Toast notification example (commented out)
// To create a notification after 5 seconds
//

import { onMounted } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
import { useToast } from '#components' // or your toast composable

const store = useCounterStore()
const { guitar_mode } = storeToRefs(store)
const toast = useToast()

function showToast() {
  toast.add({
    title: 'Modo guitarra',
    description: 'Videotutoriales y partituras de guitarra de tus temas favoritos',
    actions: [
      {
        label: 'Activar',
        color: 'primary',
        variant: 'outline',
        onClick: (e) => {
          e?.stopPropagation()
          guitar_mode.value = true
        },
      },
    ],
  })
}

onMounted(() => {
  setTimeout(showToast, 5000)
})
*/
</script>

<style scoped>
/* Add any component-specific styles here if needed */
</style>
