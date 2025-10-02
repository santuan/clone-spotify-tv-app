<script setup lang="ts">
import { storeToRefs } from 'pinia'
import ArtistMusicListPopularSongs from './ArtistMusicListPopularSongs.vue'
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
const { artist_music_active_tab } = storeToRefs(store)
</script>
<template>
  <div>
    <ArtistMusicButtonsTabs />
    <ArtistMusicListPopularSongs v-if="artist_music_active_tab === 'popular'" />
    <ArtistMusicListVideoclip v-if="artist_music_active_tab === 'videos'" />
    <ArtistMusicListDiscography v-if="artist_music_active_tab === 'discografia'" />
    <ArtistMusicListHighlight v-if="artist_music_active_tab === 'destacados'" />
    <ArtistMusicListGuitarVideo v-if="artist_music_active_tab === 'guitar'" />
  </div>
</template>
