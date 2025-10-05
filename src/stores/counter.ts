import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { ref, nextTick } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const router = useRouter()
  const guitar_mode = ref(true)
  const guitar_modal = ref(false)
  const is_playing = ref(false)
  const home_show_selected = ref('Artista 1')
  const song_active_screen = ref(' ')
  const show_chords_videotutorial = ref('partituras')
  const is_showing = ref('todos')
  const artist_music_active_tab = ref('popular')

  function pushWithQueryAlbum() {
    router.push('/artist/album/name')
  }

  function pushWithQueryArtist() {
    router.push('/artist/name')
  }

  function pushWithQueryVideoclip() {
    is_playing.value = true
    song_active_screen.value = 'videoclip'
    show_chords_videotutorial.value = ''
    router.push('/artist/album/song/name')
  }

  function pushWithQueryGuitarVideo() {
    is_playing.value = true
    song_active_screen.value = 'guitar'
    show_chords_videotutorial.value = 'videotutorial'
    router.push('/artist/album/song/name')
  }

  function pushWithQueryGuitarChords() {
    is_playing.value = true
    song_active_screen.value = 'guitar'
    show_chords_videotutorial.value = 'partituras'
    router.push('/artist/album/song/name')
  }

  function pushWithQueryDefault() {
    song_active_screen.value = ' '
    is_playing.value = true
    router.push('/artist/album/song/name')
  }


  function changeShowing(i: string) {
    is_showing.value = i
  }


  const scrollContainer = ref<HTMLElement | null>(null)

  const updateShowSelected = async (title: string) => {
    home_show_selected.value = title
    await nextTick()
    const focusedElement = document.activeElement as HTMLElement
    if (focusedElement && scrollContainer.value) {
      const containerRect = scrollContainer.value.getBoundingClientRect()
      const elementRect = focusedElement.getBoundingClientRect()
      const isCompletelyVisible =
        elementRect.top >= containerRect.top && elementRect.bottom <= containerRect.bottom
      if (!isCompletelyVisible) {
        const containerCenter = containerRect.height / 2
        const elementCenter = elementRect.top - containerRect.top + elementRect.height / 2
        const scrollOffset = elementCenter - containerCenter
        scrollContainer.value.scrollBy({
          top: scrollOffset,
          behavior: 'smooth',
        })
      }
    }
  }

  const resetShowSelected = () => {
    home_show_selected.value = 'Música'
  }

  const activateGuitar = () => {
    if (song_active_screen.value === 'guitar') {
      song_active_screen.value = ' '
    } else {
      song_active_screen.value = 'guitar'
      show_chords_videotutorial.value = 'videotutorial'
    }
  }

  const showVideoclip = () => {
    if (song_active_screen.value === 'videoclip') {
      return song_active_screen.value = ' '
    }
    song_active_screen.value = 'videoclip'
  }

  const showDark = () => {
    if (song_active_screen.value === 'dark') {
      return song_active_screen.value = ' '
    }
    song_active_screen.value = 'dark'
  }

  return {
    scrollContainer,
    guitar_mode,
    guitar_modal,
    is_playing,
    is_showing,
    song_active_screen,
    show_chords_videotutorial,
    home_show_selected,
    artist_music_active_tab,
    activateGuitar,
    changeShowing,
    pushWithQueryDefault,
    pushWithQueryAlbum,
    pushWithQueryArtist,
    pushWithQueryGuitarVideo,
    pushWithQueryGuitarChords,
    pushWithQueryVideoclip,
    resetShowSelected,
    showVideoclip,
    showDark,
    updateShowSelected,
  }
})
