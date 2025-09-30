<template>
  <div
    class="fixed inset-0 flex justify-center items-center"
    :class="isIdle ? 'opacity-80' : 'opacity-50'"
  >
    <video
      autoplay
      loop
      muted
      playsinline
      class="object-cover w-full h-screen absolute top-0 left-0 object-right z-0 md:object-center"
      poster="https://res.cloudinary.com/srcouto/video/upload/c_scale,q_auto:eco,w_763/v1628508273/encoder/herohdsantuan0001-0250_wpgean.webp"
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

<script setup lang="ts">
import { inject } from 'vue'

const isIdle = inject('is_idle')
</script>
