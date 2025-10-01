<template>
  <div
    class="w-full h-screen flex justify-center items-center"
    :class="isIdle ? 'opacity-80' : 'opacity-50'"
  >
    <!-- <p class="-mt-64">[Imagen del disco]</p> -->
    <img
      class="h-auto w-full bg-cover"
      src="https://images.unsplash.com/photo-1471478331149-c72f17e33c73?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const isIdle = inject('is_idle')
</script>
