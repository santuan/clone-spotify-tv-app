<template>
  <!-- <UApp :toaster="toaster"> -->
  <UApp>
    <NotSupported v-if="!isWidthSupported && !isHeightSupported" />
    <template v-else>
      <TheHeader />
      <main class="z-20 min-h-screen max-h-[85vh] overflow-y-auto bg-gray-950">
        <RouterView />
      </main>
    </template>
  </UApp>
</template>

<script setup lang="ts">
// @ts-expect-error External library js-spatial-navigation
import { useSpatialNavigation } from '@/composable/useNav'
import { RouterView } from 'vue-router'
import { useMediaQuery } from '@vueuse/core'
import TheHeader from './components/TheHeader.vue'

useSpatialNavigation()

const isWidthSupported = useMediaQuery('(min-width: 1023px)')
const isHeightSupported = useMediaQuery('(min-height: 550px)')

/*
//
// Para crear una notificación a los 5 segundos.
//

import { onMounted } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
const store = useCounterStore()
const { guitar_mode } = storeToRefs(store)
const toaster = { position: 'top-right', duration: 10000 }
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
