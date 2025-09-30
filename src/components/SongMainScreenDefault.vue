<template>
  <div
    class="w-full h-screen flex justify-center items-center"
    :class="isIdle ? 'opacity-80' : 'opacity-50'"
  >
    <p class="-mt-64">[Imagen del disco]</p>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const isIdle = inject('is_idle')
</script>
