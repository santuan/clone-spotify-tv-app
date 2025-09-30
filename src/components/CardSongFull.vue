<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
const store = useCounterStore()
const { guitar_mode } = storeToRefs(store)

const props = defineProps<{
  item: number
}>()

const emit = defineEmits<{
  (e: 'pushWithQuery'): void
}>()
</script>

<template>
  <button
    @click="emit('pushWithQuery')"
    class="flex items-center justify-start w-full gap-6 overflow-hidden duration-300 bg-gray-800 outline-none size-28 focus-within:ring-white focus-within:ring-1 focus-within:scale-105 ring-transparent focus-visible:ring-offset-4"
  >
    <span
      class="flex items-center justify-center p-3 font-mono text-sm font-bold bg-gray-600 size-28 outline-0"
    >
      Canción <br />
      0{{ props.item }}
    </span>
    <div>
      <div
        :style="'width: ' + Math.random() * 80.2 + 'rem'"
        class="h-6 bg-gray-400 min-w-64 max-w-96"
      ></div>
      <div class="flex items-center justify-start gap-2 mt-2">
        <span
          v-if="props.item === 4 || props.item === 2"
          class="flex items-center justify-center w-4 h-4 text-xs font-bold text-gray-800 bg-gray-400"
          >E</span
        >
        <template v-if="guitar_mode">
          <span
            v-if="props.item === 2 || props.item === 3 || props.item === 5"
            class="flex items-center justify-center w-4 h-4 text-xs font-bold text-gray-800 bg-primary"
            >G</span
          >
        </template>
        <span class="w-12 h-4 bg-gray-400"></span>
        <span class="w-20 h-4 bg-gray-400"></span>
        <span class="h-4 bg-gray-400 w-14"></span>
      </div>
    </div>
  </button>
</template>
