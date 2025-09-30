<script setup lang="ts">
const props = defineProps<{
  item: number
  title: string
}>()

const emit = defineEmits<{
  (e: 'pushWithQuery'): void
}>()
</script>

<template>
  <button
    @click="emit('pushWithQuery')"
    class="flex items-center justify-start w-full p-3 overflow-hidden duration-300 bg-gray-600 outline-none aspect-video focus-visible:ring-white focus-visible:ring-1 focus-visible:scale-105 text-sm font-bold ring-transparent focus-visible:ring-offset-4"
  >
    {{ props.title }}
    0{{ props.item }}
  </button>
</template>
