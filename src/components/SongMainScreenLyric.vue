<template>
  <div
    class="flex bg-emerald-950 justify-start items-start flex-col overflow-x-hidden h-screen max-h-[90vh] gap-y-8 flex-wrap gap-3"
  >
    <div
      class="grid gap-12 w-full py-0 max-w-4xl mx-auto justify-center overflow-y-auto max-h-[80vh] scroll-smooth"
      :class="isIdle ? 'opacity-80' : 'opacity-50'"
      ref="scrollContainerLyrics"
    >
      <div
        v-for="(text, index) in buttons"
        :key="index"
        class="text-center outline-none text-4xl opacity-80 hover:opacity-100 border-0! duration-300 focus-visible:opacity-100"
      >
        {{ text }}
      </div>
    </div>
    <div
      class="fixed bg-gradient-to-t from-transparent via-emerald-950/50 to-emerald-950 z-50 left-0 right-0 top-0 h-64 pointer-events-none"
    ></div>
    <div
      class="fixed bg-gradient-to-b from-transparent via-emerald-950/50 to-emerald-950 z-50 left-0 right-0 bottom-0 h-[20rem] pointer-events-none"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue'

const isIdle = inject('is_idle')

const scrollContainerLyrics = ref<HTMLDivElement | null>(null)

const buttons = [
  'Las letras son palabras',
  'Componen una canción musical',
  'Consisten en versos coros',
  'El escritor es letrista',
  'Óperas tienen libretos escritos',
  'Su autor es libretista',
  'Rap contiene letras rítmicas',
  'Con palabras que riman',
  'Se hablan no cantan',
  'Significado explícito o implícito',
  'Algunas letras son abstractas',
  'Casi ininteligibles a veces',
  'Enfatizan forma y métrica',
  'Simetría de la expresión',
]
</script>
