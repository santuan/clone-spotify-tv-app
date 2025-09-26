// composables/useSpatialNavigation.js
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

export function useSpatialNavigation(options = {}) {
  const isInitialized = ref(false)
  const currentFocusedElement = ref(null)

  const defaultOptions = {
    selector: 'a, button, .focusable,input, button.focusable, input.focusable',
    straightOnly: false,
    straightOverlapThreshold: 0.5,
    rememberSource: false,
    disabled: false,
    defaultElement: null,
    enterTo: 'last-focused',
    leaveFor: null,
    restrict: 'self-first',
    tabIndexIgnoreList: 'a, input, select, textarea, button, iframe, [contentEditable=true]',
    navigableFilter: null,
    scrollOptions: {
      behavior: 'smooth',
      block: 'center',
    },
    ...options
  }

  // Verificar si SpatialNavigation está disponible
  const checkSpatialNavigation = () => {
    return typeof window !== 'undefined' && window.SpatialNavigation
  }

  // Inicializar la navegación espacial
  const init = async () => {
    if (!checkSpatialNavigation()) {
      console.warn('SpatialNavigation no está disponible. Asegúrate de incluir la librería.')
      return false
    }

    try {
      // Esperar a que el DOM esté listo
      await nextTick()

      // Inicializar SpatialNavigation
      window.SpatialNavigation.init()

      // Agregar elementos navegables con configuración
      window.SpatialNavigation.add(defaultOptions)

      // Hacer elementos focusables
      window.SpatialNavigation.makeFocusable()

      // Enfocar elemento por defecto o el primero
      if (defaultOptions.defaultElement) {
        const element = document.querySelector(defaultOptions.defaultElement)
        if (element) {
          window.SpatialNavigation.focus(element)
        } else {
          window.SpatialNavigation.focus()
        }
      } else {
        window.SpatialNavigation.focus()
      }

      isInitialized.value = true
      console.log('SpatialNavigation inicializado correctamente')
      return true
    } catch (error) {
      console.error('Error al inicializar SpatialNavigation:', error)
      return false
    }
  }

  // Destruir la navegación espacial
  const destroy = () => {
    if (checkSpatialNavigation() && isInitialized.value) {
      try {
        window.SpatialNavigation.uninit()
        isInitialized.value = false
        currentFocusedElement.value = null
        console.log('SpatialNavigation destruido')
      } catch (error) {
        console.error('Error al destruir SpatialNavigation:', error)
      }
    }
  }

  // Actualizar elementos navegables
  const refresh = async () => {
    if (checkSpatialNavigation() && isInitialized.value) {
      await nextTick()
      try {
        window.SpatialNavigation.makeFocusable()
        console.log('SpatialNavigation actualizado')
      } catch (error) {
        console.error('Error al actualizar SpatialNavigation:', error)
      }
    }
  }

  // Enfocar un elemento específico
  const focusElement = (selector) => {
    if (checkSpatialNavigation() && isInitialized.value) {
      try {
        const element = typeof selector === 'string'
          ? document.querySelector(selector)
          : selector

        if (element) {
          window.SpatialNavigation.focus(element)
          currentFocusedElement.value = element
          return true
        }
        return false
      } catch (error) {
        console.error('Error al enfocar elemento:', error)
        return false
      }
    }
    return false
  }

  // Obtener el elemento actualmente enfocado
  const getCurrentFocusedElement = () => {
    if (checkSpatialNavigation() && isInitialized.value) {
      try {
        return window.SpatialNavigation.getCurrentFocusedElement()
      } catch (error) {
        console.error('Error al obtener elemento enfocado:', error)
        return null
      }
    }
    return null
  }

  // Mover el foco en una dirección específica
  const move = (direction) => {
    if (checkSpatialNavigation() && isInitialized.value) {
      const validDirections = ['left', 'right', 'up', 'down']
      if (validDirections.includes(direction)) {
        try {
          window.SpatialNavigation.move(direction)
          currentFocusedElement.value = getCurrentFocusedElement()
          return true
        } catch (error) {
          console.error(`Error al mover en dirección ${direction}:`, error)
          return false
        }
      }
    }
    return false
  }

  // Agregar nuevos elementos navegables dinámicamente
  const addNavigableElement = async (selector, config = {}) => {
    if (checkSpatialNavigation() && isInitialized.value) {
      await nextTick()
      try {
        window.SpatialNavigation.add({
          selector,
          ...config
        })
        window.SpatialNavigation.makeFocusable()
        return true
      } catch (error) {
        console.error('Error al agregar elemento navegable:', error)
        return false
      }
    }
    return false
  }

  // Pausar/reanudar la navegación
  const pause = () => {
    if (checkSpatialNavigation() && isInitialized.value) {
      try {
        window.SpatialNavigation.pause()
        return true
      } catch (error) {
        console.error('Error al pausar SpatialNavigation:', error)
        return false
      }
    }
    return false
  }

  const resume = () => {
    if (checkSpatialNavigation()) {
      try {
        window.SpatialNavigation.resume()
        return true
      } catch (error) {
        console.error('Error al reanudar SpatialNavigation:', error)
        return false
      }
    }
    return false
  }

  // Event listeners personalizados
  const addEventListener = (eventName, callback) => {
    if (checkSpatialNavigation() && isInitialized.value) {
      try {
        window.SpatialNavigation.on(eventName, callback)
        return true
      } catch (error) {
        console.error(`Error al agregar listener ${eventName}:`, error)
        return false
      }
    }
    return false
  }

  const removeEventListener = (eventName, callback) => {
    if (checkSpatialNavigation() && isInitialized.value) {
      try {
        window.SpatialNavigation.off(eventName, callback)
        return true
      } catch (error) {
        console.error(`Error al remover listener ${eventName}:`, error)
        return false
      }
    }
    return false
  }

  // Configurar teclas personalizadas
  const setKeyMap = (keyMap) => {
    if (checkSpatialNavigation()) {
      try {
        window.SpatialNavigation.setKeyMap(keyMap)
        return true
      } catch (error) {
        console.error('Error al configurar teclas:', error)
        return false
      }
    }
    return false
  }

  // Lifecycle hooks automáticos
  onMounted(() => {
    // Pequeño delay para asegurar que todo esté cargado
    setTimeout(init, 100)
  })

  onUnmounted(() => {
    destroy()
  })

  // API pública del composable
  return {
    // Estados
    isInitialized,
    currentFocusedElement,

    // Métodos principales
    init,
    destroy,
    refresh,

    // Navegación
    focusElement,
    getCurrentFocusedElement,
    move,

    // Gestión de elementos
    addNavigableElement,

    // Control
    pause,
    resume,

    // Eventos
    addEventListener,
    removeEventListener,

    // Configuración
    setKeyMap,

    // Utilidades
    checkSpatialNavigation
  }
}

// Hook específico para navegación en listas/grids
export function useSpatialNavigationGrid(gridSelector, itemSelector) {
  const spatialNav = useSpatialNavigation({
    selector: `${gridSelector} ${itemSelector}`
  })

  const navigateToItem = (row, col) => {
    const items = document.querySelectorAll(`${gridSelector} ${itemSelector}`)
    const grid = document.querySelector(gridSelector)

    if (grid && items.length > 0) {
      // Calcular las dimensiones de la grilla
      const gridStyle = window.getComputedStyle(grid)
      const columns = gridStyle.gridTemplateColumns.split(' ').length

      const targetIndex = (row * columns) + col
      const targetItem = items[targetIndex]

      if (targetItem) {
        return spatialNav.focusElement(targetItem)
      }
    }
    return false
  }

  return {
    ...spatialNav,
    navigateToItem
  }
}

// Ejemplo de uso en un componente:
/*
<script setup>
import { useSpatialNavigation } from '@/composables/useSpatialNavigation'

const spatialNav = useSpatialNavigation({
  selector: '.my-focusable-elements',
  defaultElement: '#first-element'
})

// Usar métodos del composable
const handleCustomNavigation = () => {
  spatialNav.move('right')
}

// Agregar elementos dinámicamente
const addDynamicElement = () => {
  spatialNav.addNavigableElement('.dynamic-element')
}
</script>
*/