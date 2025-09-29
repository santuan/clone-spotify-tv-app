<script setup lang="ts"></script>

<template>
  <UContainer class="pb-6 pt-32">
    <UInput
      icon="i-lucide-search"
      size="xl"
      color="neutral"
      variant="outline"
      placeholder="Search..."
      class="w-full"
    />
    <div class="w-64 h-8 mt-6 bg-gray-600 block"></div>
  </UContainer>
  <UContainer
    class="grid grid-cols-8 gap-3 overflow-y-auto overflow-x-hidden max-h-[60vh] font-mono p-3 pt-6"
  >
    <RouterLink
      to="/search"
      v-for="card in 96"
      :key="card"
      class="aspect-square w-full bg-gray-800 flex justify-center items-center overflow-hidden focus-visible:ring-white focus-visible:ring-1 ring-transparent focus-visible:ring-offset-4 outline-none"
    >
      {{ card }}
    </RouterLink>
  </UContainer>
</template>
