<script setup lang="ts">
import { ref } from 'vue'

const groups = ref([
  {
    id: 'users',
    label: 'Users',
    items: [
      {
        label: 'Benjamin Canac',
        suffix: 'benjamincanac',
        avatar: {
          src: 'https://github.com/benjamincanac.png',
        },
      },
      {
        label: 'Sylvain Marroufin',
        suffix: 'smarroufin',
        avatar: {
          src: 'https://github.com/smarroufin.png',
        },
      },
      {
        label: 'Sébastien Chopin',
        suffix: 'atinux',
        avatar: {
          src: 'https://github.com/atinux.png',
        },
      },
      {
        label: 'Romain Hamel',
        suffix: 'romhml',
        avatar: {
          src: 'https://github.com/romhml.png',
        },
      },
      {
        label: 'Haytham A. Salama',
        suffix: 'Haythamasalama',
        avatar: {
          src: 'https://github.com/Haythamasalama.png',
        },
      },
      {
        label: 'Daniel Roe',
        suffix: 'danielroe',
        avatar: {
          src: 'https://github.com/danielroe.png',
        },
      },
      {
        label: 'Neil Richter',
        suffix: 'noook',
        avatar: {
          src: 'https://github.com/noook.png',
        },
      },
    ],
  },
])
const value = ref({})
</script>

<template>
  <UContainer class="pb-6 pt-32">
    <!-- <UInput
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
      to="/artist/name"
      v-for="card in 96"
      :key="card"
      class="aspect-square w-full bg-gray-600 flex justify-center items-center overflow-hidden focus-visible:ring-white focus-visible:ring-1 ring-transparent focus-visible:ring-offset-4 outline-none"
    >
      {{ card }}
    </RouterLink> -->

    <UCommandPalette v-model="value" :groups="groups" class="flex-1" />
  </UContainer>
</template>
