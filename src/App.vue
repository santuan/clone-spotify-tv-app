<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useSpatialNavigation } from '@/composable/useNav'
import { useMediaQuery } from '@vueuse/core'
import PhTelevisionSimpleFill from '~icons/ph/television-simple-fill'
import TheHeader from './components/TheHeader.vue'

useSpatialNavigation()

const isWidthSupported = useMediaQuery('(min-width: 1023px)')
const isHeightSupported = useMediaQuery('(min-height: 550px)')

// const toaster = { position: 'top-right', duration: 10000 }
// const toast = useToast()
// function showToast() {
//   toast.add({
//     title: 'Modo guitarra',
//     description: 'Videotutoriales y partituras de guitarra de tus temas favoritos',
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
//  :toaster="toaster"
// })
</script>

<template>
  <UApp>
    <template v-if="isWidthSupported && isHeightSupported">
      <TheHeader />
      <main class="z-20 min-h-screen max-h-[85vh] overflow-y-auto bg-gray-950">
        <RouterView />
      </main>
    </template>
    <template v-else>
      <div class="flex flex-col items-center justify-center w-full h-screen gap-2">
        <PhTelevisionSimpleFill class="size-24 animate-pulse" />
        <h2 class="font-mono text-lg">Resolución no soportada</h2>
      </div>
    </template>
  </UApp>
</template>

<style scoped></style>
