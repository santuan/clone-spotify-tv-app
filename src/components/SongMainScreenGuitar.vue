<script setup lang="ts">
import IconPlay from '~icons/material-symbols/play-arrow'
import { storeToRefs } from 'pinia'

import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
const { show_chords_videotutorial } = storeToRefs(store)
</script>

<template>
  <div
    class="flex-col bg-gray-950 overflow-y-auto overflow-x-hidden h-screen flex justify-center items-center flex-wrap gap-3"
  >
    <Transition name="fade" mode="out-in">
      <div
        v-if="show_chords_videotutorial === 'videotutorial'"
        class="flex justify-start h-full pt-32 items-center flex-col gap-3"
      >
        <div class="z-10 relative flex flex-col justify-start items-center gap-3">
          <UBadge>Modo guitarra</UBadge>
          <p class="text-4xl mb-2 capitalize">Videotutorial</p>
          <IconPlay class="size-9 text-white" />
        </div>
        <img
          class="h-auto w-full fixed inset-0 z-0 opacity-40! bg-cover"
          src="https://images.unsplash.com/photo-1471478331149-c72f17e33c73?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>

      <div
        v-else
        class="flex justify-start h-full items-center pt-24 pb-80 flex-col gap-8 bg-blue-950 w-full overflow-y-auto max-h-screen"
      >
        <div class="grid gap-2 w-full max-w-2xl mx-auto">
          <span class="lyric-line">
            <a class="mr-24 text-primary">LAm</a>
            <a>SOL</a>
          </span>
          <span class="lyric-line"> You're up, but you'll get down </span>
        </div>
        <div class="grid gap-2 w-full max-w-2xl mx-auto">
          <span class="lyric-line">
            <a class="">FA#</a>
          </span>
          <span class="lyric-line">And I think you said</span>
        </div>
        <div class="grid gap-2 w-full max-w-2xl mx-auto">
          <span class="lyric-line">
            <a class="mr-44">LAm</a>
            <a class="pl-2">SOL</a>
          </span>
          <span class="lyric-line"> You ll never get anything better than this </span>
        </div>
        <div class="grid gap-2 w-full max-w-2xl mx-auto">
          <span class="lyric-line">
            <a class="mr-24">LAm</a>
            <a>SOL</a>
          </span>
          <span class="lyric-line"> Cause you're going round in circle </span>
        </div>
        <div class="grid gap-2 w-full max-w-2xl mx-auto">
          <span class="lyric-line">
            <a class="mr-24">LAm</a>
            <a>SOL</a>
          </span>
          <span class="lyric-line"> You're up, but you'll get down </span>
        </div>
        <div class="grid gap-2 w-full max-w-2xl mx-auto">
          <span class="lyric-line">
            <a class="">FA#</a>
          </span>
          <span class="lyric-line">And I think you said</span>
        </div>
        <div class="grid gap-2 w-full max-w-2xl mx-auto">
          <span class="lyric-line">
            <a class="mr-24">LAm</a>
            <a>SOL</a>
          </span>
          <span class="lyric-line"> You ll never get anything better than this </span>
        </div>
        <div class="grid gap-2 w-full max-w-2xl mx-auto">
          <span class="lyric-line">
            <a class="mr-24">LAm</a>
            <a>SOL</a>
          </span>
          <span class="lyric-line"> Cause you're going round in circle </span>
        </div>
        <div class="grid gap-2 w-full max-w-2xl mx-auto">
          <span class="lyric-line">
            <a class="mr-24">LAm</a>
            <a>SOL</a>
          </span>
          <span class="lyric-line"> You're up, but you'll get down </span>
        </div>
        <div class="grid gap-2 w-full max-w-2xl mx-auto">
          <span class="lyric-line">
            <a class="">FA#</a>
          </span>
          <span class="lyric-line">And I think you said</span>
        </div>
        <div class="grid gap-2 w-full max-w-2xl mx-auto">
          <span class="lyric-line">
            <a class="mr-24">LAm</a>
            <a>SOL</a>
          </span>
          <span class="lyric-line"> You ll never get anything better than this </span>
        </div>
        <div class="grid gap-2 w-full max-w-2xl mx-auto">
          <span class="lyric-line">
            <a class="mr-24">LAm</a>
            <a>SOL</a>
          </span>
          <span class="lyric-line"> Cause you're going round in circle </span>
        </div>
        <div class="grid gap-2 w-full max-w-2xl mx-auto">
          <span class="lyric-line">
            <a class="mr-24">LAm</a>
            <a>SOL</a>
          </span>
          <span class="lyric-line"> You're up, but you'll get down </span>
        </div>
        <div class="grid gap-2 w-full max-w-2xl mx-auto">
          <span class="lyric-line">
            <a class="">FA#</a>
          </span>
          <span class="lyric-line">And I think you said</span>
        </div>
        <div class="grid gap-2 w-full max-w-2xl mx-auto">
          <span class="lyric-line">
            <a class="mr-24">LAm</a>
            <a>SOL</a>
          </span>
          <span class="lyric-line"> You ll never get anything better than this </span>
        </div>
        <div class="grid gap-2 w-full max-w-2xl mx-auto">
          <span class="lyric-line">
            <a class="mr-24">LAm</a>
            <a>SOL</a>
          </span>
          <span class="lyric-line"> Cause you're going round in circle </span>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.lyric-line {
  outline: 0 none;
  text-align: left;
  font-weight: 800;
  line-height: 1;
  text-underline-offset: 2px;
  font-size: var(--text-2xl);
  opacity: 0.7;
  border: 0 none;
  &:hover {
    opacity: 1;
  }
}
</style>
