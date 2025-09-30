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
    class="h-40 gap-3 w-full bg-gray-800 flex justify-start items-center overflow-hidden focus-within:ring-white focus-within:ring-1 focus-within:scale-[1.02] duration-300 ring-transparent focus-visible:ring-offset-4 outline-none"
  >
    <div
      class="flex items-center justify-center h-40 font-mono text-sm bg-gray-600 aspect-video outline-0"
    >
      {{ props.title }} {{ props.item }}
    </div>
  </button>
</template>
