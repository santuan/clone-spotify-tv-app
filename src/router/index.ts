import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/modules/HomeView.vue'
import SearchView from '@/modules/SearchView.vue'
import MyLibrary from '@/modules/MyLibrary.vue'
import ArtistView from '@/modules/ArtistView.vue'
import AlbumView from '@/modules/AlbumView.vue'
import SongView from '@/modules/SongView.vue'
import GuitarView from '@/modules/GuitarView.vue'
import ArtistGuitarView from '@/modules/ArtistGuitarView.vue'

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
