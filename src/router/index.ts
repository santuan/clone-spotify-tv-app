import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/HomeView.vue'
import SearchView from '@/pages/SearchView.vue'
import MyLibrary from '@/pages/MyLibrary.vue'
import ArtistView from '@/pages/ArtistView.vue'
import AlbumView from '@/pages/AlbumView.vue'
import SongView from '@/pages/SongView.vue'
import GuitarView from '@/pages/GuitarView.vue'
import ArtistGuitarView from '@/pages/ArtistGuitarView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/search', component: SearchView },
    { path: '/my-library', component: MyLibrary },
    { path: '/artist/name', component: ArtistView },
    { path: '/artist/guitarmode', component: ArtistGuitarView },
    { path: '/artist/album/name', component: AlbumView },
    { path: '/artist/album/song/name', component: SongView },
    { path: '/guitarmode', component: GuitarView },
  ]
})

export default router
