<template>
  <UApp :toaster="toaster">
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
import { useCounterStore } from '@/stores/counter'

const toaster = { position: 'top-right' as const, expand: false }
const store = useCounterStore()
store.ToastIntro()
useSpatialNavigation()

const isWidthSupported = useMediaQuery('(min-width: 1230px)')
const isHeightSupported = useMediaQuery('(min-height: 550px)')

const isSizeSupported = computed(() => {
  return isWidthSupported.value && isHeightSupported.value
})
</script>
