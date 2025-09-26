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
    class="grid grid-cols-4 gap-3 overflow-y-auto overflow-x-hidden max-h-[60vh] font-mono p-3"
  >
    <RouterLink
      to="/search"
      v-for="card in 96"
      :key="card"
      class="h-32 w-full bg-gray-800 flex justify-start items-center overflow-hidden focus-visible:ring-white focus-visible:ring-1 ring-transparent focus-visible:ring-offset-4 outline-none"
    >
      <div class="h-32 min-w-32 bg-gray-600 pl-0.5 text-gray-800">
        {{ card }}
      </div>
      <div class="h-32 p-3 w-full">
        <div class="h-6 w-20 bg-gray-600" />
      </div>
    </RouterLink>
  </UContainer>
</template>
