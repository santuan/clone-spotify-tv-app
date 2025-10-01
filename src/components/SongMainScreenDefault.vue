<template>
  <div
    class="w-full h-screen flex justify-center items-center"
    :class="isIdle ? 'opacity-80' : 'opacity-50'"
  >
    <!-- <p class="-mt-64">[Imagen del disco]</p> -->
    <img
      class="h-auto w-full bg-cover"
      src="https://res.cloudinary.com/srcouto/image/upload/v1759287181/rjkhpoxqmvgywe1gzjg9.webp"
    />
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const isIdle = inject('is_idle')
</script>
