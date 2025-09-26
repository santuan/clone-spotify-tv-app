<script setup lang="ts"></script>

<template>
  <UContainer class="py-6">
    <UInput
      icon="i-lucide-search"
      size="xl"
      color="neutral"
      variant="outline"
      placeholder="Search..."
      class="w-full"
    />
  </UContainer>
  <UContainer
    class="grid grid-cols-4 gap-3 overflow-y-auto overflow-x-hidden max-h-[80vh] font-mono py-3"
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
