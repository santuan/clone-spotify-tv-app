<template>
  <UContainer class="grid grid-cols-5">
    <div class="col-span-2 pt-10">
      <div class="bg-gray-700 size-96 mb-6"></div>
      <h1 class="text-2xl">Album</h1>
    </div>
    <div class="col-span-3 overflow-y-auto overflow-x-hidden py-3 p-6 h-[80vh] w-full">
      <div class="grid gap-6 mt-6">
        <RouterLink to="/artist/album/song/name" v-for="card in 8" :key="card"
          class="size-28 w-full gap-6 bg-gray-800 flex justify-start items-center overflow-hidden focus-within:ring-white focus-within:ring-1 focus-within:scale-105 duration-300 ring-transparent focus-visible:ring-offset-4 outline-none ">
          <span class="size-28 bg-gray-600 flex outline-0 justify-center items-center font-mono text-xs">
            {{ card }}
          </span>
          <div>
            <div :style="'width: ' + Math.random() * 80.2 + 'rem'" class="min-w-64 max-w-96 h-6 bg-gray-400"></div>
            <div class="flex mt-2 justify-start items-center gap-2">
              <span
                class="w-4 h-4 text-xs bg-gray-400 flex justify-center items-center font-bold text-gray-800">E</span>
              <span v-if="card === 2 || card === 3 || card === 5"
                class="w-4 h-4 text-xs bg-primary flex justify-center items-center font-bold text-gray-800">A</span>
              <span class="w-12 h-4 bg-gray-400"></span>
              <span class="w-20 h-4 bg-gray-400"></span>
              <span class="w-14 h-4 bg-gray-400"></span>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </UContainer>
</template>
