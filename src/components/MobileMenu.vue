<template>
  <!-- Mobile Menu Button -->
  <button 
    @click="toggleMobileMenu"
    class="lg:hidden fixed top-4 left-4 z-50 p-3 bg-slate-900/95 dark:bg-slate-900/95 light:bg-white/95 backdrop-blur-xl border-2 border-slate-800/50 dark:border-slate-800/50 light:border-slate-300/50 rounded-xl hover:bg-slate-800/95 transition-all hover:scale-105 shadow-xl"
  >
    <Menu v-if="!isMobileMenuOpen" :size="20" class="text-slate-300" />
    <X v-else :size="20" class="text-primary-400" />
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  // Emit event to Sidebar component
  window.dispatchEvent(new CustomEvent('toggle-mobile-menu', { 
    detail: { isOpen: isMobileMenuOpen.value } 
  }))
}

// Listen for sidebar close events
const handleSidebarClosed = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('sidebar-closed', handleSidebarClosed)
})

onUnmounted(() => {
  window.removeEventListener('sidebar-closed', handleSidebarClosed)
})
</script>
