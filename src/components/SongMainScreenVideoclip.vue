<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { inject, ref, watchEffect } from 'vue'

import { useCounterStore } from '@/stores/counter'

const isIdle = inject('is_idle')
const store = useCounterStore()
const { is_playing } = storeToRefs(store)

const videoRef = ref<HTMLVideoElement | null>(null)

watchEffect(() => {
  if (videoRef.value) {
    if (is_playing.value) {
      videoRef.value.play()
    } else {
      videoRef.value.pause()
    }
  }
})
</script>

<template>
  <div
    class="fixed inset-0 flex justify-center items-center"
    :class="isIdle ? 'opacity-80' : 'opacity-50'"
  >
    <video
      ref="videoRef"
      loop
      muted
      playsinline
      class="object-cover w-full h-screen absolute top-0 left-0 object-right z-0 md:object-center"
    >
      <source
        src="https://res.cloudinary.com/srcouto/video/upload/q_auto:eco/v1628057438/encoder/herohdsantuan0001-0250_wpgean.mp4"
        type="video/mp4"
      />
      <source
        src="https://res.cloudinary.com/srcouto/video/upload/q_auto:eco/v1628057438/encoder/herohdsantuan0001-0250_wpgean.webm"
        type="video/webm"
      />
      <source
        src="https://res.cloudinary.com/srcouto/video/upload/q_auto:low/v1628128970/encoder/herohdsantuan0001-0250_wpgean.ogv"
        type="video/ogg"
      />
    </video>
  </div>
</template>
