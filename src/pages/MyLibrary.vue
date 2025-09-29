<template>
  <div class="max-h-screen overflow-y-auto overflow-x-hidden">
    <UContainer class="pt-24 grid gap-3">
      <h1 class="text-2xl">Lista de reproducción</h1>
      <h2 class="text-7xl">Mi librería</h2>
      <div class="h-4 w-96 bg-gray-500 mt-6"></div>
    </UContainer>
    <UContainer class="grid gap-2 grid-cols-6 mt-6" v-for="section in 5" :key="section">
      <h3 v-if="section !== 1" class="col-span-6 mt-6 text-2xl">Sección {{ section }}</h3>
      <RouterLink
        to="/artist/name"
        v-for="i in 5"
        :key="i"
        class="aspect-square bg-gray-500 mt-6 flex justify-center items-center"
        >Sección {{ section }} - {{ i }}</RouterLink
      >
      <button class="aspect-square bg-gray-800 mt-6 flex justify-center items-center">+</button>
    </UContainer>
  </div>
</template>
