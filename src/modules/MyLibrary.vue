<template>
  <div class="max-h-screen overflow-y-auto overflow-x-hidden">
    <UContainer class="pt-24 grid gap-3">
      <h1 class="text-2xl">Lista de reproducción</h1>
      <h2 class="text-7xl">Mi librería</h2>
      <div class="h-4 w-96 bg-gray-500 mt-6"></div>
    </UContainer>
    <UContainer class="grid gap-2 grid-cols-6 mt-6" v-for="i in 5" :key="i">
      <div class="col-span-6" v-if="i !== 1">
        <div class="h-8 w-64 bg-gray-600"></div>
      </div>
      <button v-for="i in 5" class="aspect-square bg-gray-500 mt-6"></button>
      <button class="aspect-square bg-gray-800 mt-6"></button>
    </UContainer>
  </div>
</template>
