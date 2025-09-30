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
    class="w-auto h-full aspect-square bg-gray-600 flex justify-center items-center p-3 focus-within:ring-white focus-within:ring-1 duration-300 ring-transparent text-sm font-bold focus-visible:ring-offset-4 outline-none"
  >
    {{ props.title }}
    0{{ props.item }}
  </button>
</template>
