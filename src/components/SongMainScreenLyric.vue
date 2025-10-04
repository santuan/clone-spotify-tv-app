<template>
  <div
    class="flex bg-gray-800 justify-start relative items-start flex-col h-screen max-h-screen gap-y-8 flex-wrap gap-3 overflow-hidden"
  >
    <div
      class="grid gap-4 w-full py-64 pt-44 max-w-3xl mx-auto z-10 justify-center overflow-y-auto h-screen scroll-smooth"
      :class="isIdle ? 'opacity-80' : 'opacity-50'"
      ref="scrollContainerLyrics"
    >
      <span
        v-for="(text, index) in buttons"
        :key="index"
        class="lyric-line text-left outline-none font-extrabold leading-none hover:underline underline-offset-2 text-3xl opacity-70 hover:opacity-100 border-0! focus-visible:opacity-100"
      >
        {{ text }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue'

const isIdle = inject('is_idle')

const scrollContainerLyrics = ref<HTMLDivElement | null>(null)

const buttons = [
  "You're up, but you'll get down",
  '',
  "You're never running from this town",
  '',
  'And I think you said',
  '',
  'You ll never get anything better than this',
  '',
  "Cause you're going round in circles",
  '',
  "And everyone knows you're trouble",
  '',
  'Cause you read it in a big book',
  '',
  "And now you're giving me the look, look",
  '',
  'But just remember how we shook, shook',
  '',
  'And all the things we took, took',
  '♪',
  "This town's the oldest friend of mine",
  '♪',
  '♪',
  'We get up and we get down',
  '',
  "We're always running 'round this town",
  '',
  'And to think they said',
  '',
  "We'd never make anything better than this",
  '',
  "'Cause we're always in small circles",
  '',
  "And everyone thinks we're trouble",

  "We didn't read it in a big book",
  '',
  "(We didn't read it in a big book, big book, big book)",
  '',
  "And now we're giving you the look, look",
  '',
  '(Giving you the look, ah, giving you the look, ah-ah)',
  '',
  'But just remember how we shook, shook',
  '',
  '(Shook, shook, shook, shook)',
  '',
  'And all the things we took, took',
  '',
  '(Took, took, took, took)',
  '',
  '(This town, this town)',
  '',
  "This town's the oldest friend of mine",
]
</script>
