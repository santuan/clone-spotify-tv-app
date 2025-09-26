<script setup lang="ts">
import { ref, nextTick } from 'vue'

const ShowSelected = ref('Artista 1')
const scrollContainer = ref<HTMLElement | null>(null)

const updateShowSelected = async (title: string) => {
  ShowSelected.value = title

  // Esperar a que el DOM se actualice
  await nextTick()

  // Buscar el elemento enfocado y centrarlo
  const focusedElement = document.activeElement as HTMLElement
  if (focusedElement && scrollContainer.value) {
    const containerRect = scrollContainer.value.getBoundingClientRect()
    const elementRect = focusedElement.getBoundingClientRect()

    // Verificar si el elemento está completamente visible
    const isCompletelyVisible =
      elementRect.top >= containerRect.top && elementRect.bottom <= containerRect.bottom

    // Solo hacer scroll si el elemento NO está completamente visible
    if (!isCompletelyVisible) {
      // Calcular la posición para centrar el elemento
      const containerCenter = containerRect.height / 2
      const elementCenter = elementRect.top - containerRect.top + elementRect.height / 2
      const scrollOffset = elementCenter - containerCenter

      // Hacer scroll suave al elemento centrado
      scrollContainer.value.scrollBy({
        top: scrollOffset,
        behavior: 'smooth',
      })
    }
  }
}

const resetShowSelected = () => {
  ShowSelected.value = 'Música'
}
</script>

<template>
  <div class="h-[35vh] py-6 flex justify-center flex-col items-start bg-gray-700">
    <UContainer>
      <h1 class="text-4xl text-pretty tracking-tight font-bold text-highlighted">
        <!-- <Transition name="fade" mode="out-in">
          <span :key="ShowSelected">
            {{ ShowSelected }}
          </span>
        </Transition> -->
        {{ ShowSelected }}
      </h1>
    </UContainer>
  </div>
  <div
    ref="scrollContainer"
    class="bg-gray-900 overflow-y-auto h-[65vh] snap-y snap-proximity flex justify-start flex-col items-start"
  >
    <UContainer class="py-6 gap-3 flex snap-center pb-20 flex-col justify-start pt-6 items-start">
      <div class="flex gap-3 w-full">
        <UButton
          size="lg"
          color="neutral"
          @focus="updateShowSelected(`Mi coleccion`)"
          @blur="resetShowSelected"
          class="font-bold focus-visible:scale-110 duration-300 transition-transform rounded-full"
          >Mostrar todo
        </UButton>
        <UButton
          size="lg"
          color="neutral"
          @focus="updateShowSelected(`Música`)"
          @blur="resetShowSelected"
          class="font-bold focus-visible:scale-110 duration-300 transition-transform rounded-full"
          >Música</UButton
        >
        <UButton
          size="lg"
          color="neutral"
          @focus="updateShowSelected(`Podcasts`)"
          @blur="resetShowSelected"
          class="font-bold focus-visible:scale-110 duration-300 transition-transform rounded-full"
          >Podcasts</UButton
        >
        <UButton
          size="lg"
          to="/guitarmode"
          @focus="updateShowSelected(`Modo guitarra`)"
          @blur="resetShowSelected"
          class="font-bold focus-visible:scale-110 duration-300 transition-transform rounded-full"
          >Modo guitarra
        </UButton>
      </div>
      <div class="grid grid-cols-4 gap-3 w-full">
        <RouterLink
          to="/artist/name"
          v-for="card in 8"
          :key="card"
          @focus="updateShowSelected(`Artista ${card}`)"
          @blur="resetShowSelected"
          class="h-16 w-full bg-gray-800 flex justify-start items-center overflow-hidden focus-visible:ring-white focus-visible:scale-105 duration-300 ring-transparent focus-visible:ring-offset-4 outline-none ring"
        >
          <div class="h-16 text-xs min-w-16 bg-gray-600 flex justify-center items-center font-mono">
            Artista
          </div>
          <div class="h-16 px-3 flex justify-start items-center w-full">
            <div class="h-6 w-20 bg-gray-600" />
          </div>
        </RouterLink>
      </div>
    </UContainer>

    <UContainer class="gap-3 w-full flex snap-center flex-col justify-start pb-20 items-start">
      <p class="text-2xl">Recomendados</p>
      <div class="grid grid-cols-4 gap-3 w-full">
        <RouterLink
          to="/artist/album/name"
          v-for="card in 4"
          :key="card"
          @focus="updateShowSelected(`Álbum Recomendado ${card}`)"
          @blur="resetShowSelected"
          class="h-32 w-full bg-gray-800 flex justify-start items-center overflow-hidden focus-visible:ring-white focus-visible:ring-1 focus-visible:scale-105 duration-300 ring-transparent focus-visible:ring-offset-4 outline-none"
        >
          <div class="h-32 w-full bg-gray-600 flex justify-center items-center font-mono">
            Álbum Recomendado {{ card }}
          </div>
        </RouterLink>
      </div>
    </UContainer>

    <UContainer class="gap-3 w-full flex flex-col snap-center justify-start pb-20 items-start">
      <p class="text-2xl w-64">Artistas</p>
      <div class="grid grid-cols-8 pt-2 w-full gap-3">
        <RouterLink
          to="/artist/name"
          v-for="card in 8"
          :key="card"
          @focus="updateShowSelected(`Artista Popular ${card}`)"
          @blur="resetShowSelected"
          class="h-32 w-full bg-gray-800 flex justify-start items-center overflow-hidden focus-visible:ring-white focus-visible:ring-1 focus-visible:scale-105 duration-300 ring-transparent focus-visible:ring-offset-4 outline-none"
        >
          <div class="h-32 w-full bg-gray-600 flex justify-center items-center font-mono">
            {{ card }}
          </div>
        </RouterLink>
      </div>
    </UContainer>

    <UContainer
      class="min-h-[80vh] gap-3 w-full flex flex-col snap-center justify-start pt-6 items-start"
    >
      <p class="text-2xl w-64">Modo guitarra</p>
      <div class="grid grid-cols-4 pt-2 w-full gap-3">
        <RouterLink
          to="/artist/name"
          v-for="card in 4"
          :key="card"
          @focus="updateShowSelected(`Videotutorial guitarra destacado ${card}`)"
          @blur="resetShowSelected"
          class="h-32 w-full bg-gray-800 flex justify-start items-center overflow-hidden focus-visible:ring-white focus-visible:ring-1 duration-300 ring-transparent ring-offset-4 outline-none"
        >
          <div class="h-32 w-full bg-gray-600 flex justify-center items-center font-mono">
            {{ card }}
          </div>
        </RouterLink>
      </div>
      <div class="grid grid-cols-8 w-full py-16 gap-3">
        <RouterLink
          to="/artist/name"
          v-for="card in 8"
          :key="card"
          @focus="updateShowSelected(`Canción con acordes ${card}`)"
          @blur="resetShowSelected"
          class="h-32 w-full bg-gray-800 flex justify-start items-center overflow-hidden focus-visible:ring-white focus-visible:ring-1 duration-300 ring-transparent ring-offset-4 outline-none"
        >
          <div class="h-32 w-full bg-gray-600 flex justify-center items-center font-mono">
            {{ card }}
          </div>
        </RouterLink>
      </div>
    </UContainer>
  </div>
</template>
