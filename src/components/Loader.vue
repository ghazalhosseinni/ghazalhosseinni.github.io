<template>
  <div v-show="isLoading" class="fixed inset-0 z-[9999] bg-slate-950 flex items-center justify-center transition-opacity duration-1000" :class="{ 'opacity-0 pointer-events-none': isHiding }">
      <!-- Animated Background like Hero -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style="animation-delay: 2s;"></div>
      </div>

      <!-- Loader Content -->
      <div class="relative z-10 text-center space-y-8 animate-fade-in px-4">
        <!-- Animated Logo Circle -->
        <div class="relative mx-auto w-32 h-32 sm:w-40 sm:h-40">
          <!-- Rotating Border -->
          <div class="absolute inset-0 rounded-full border-4 border-transparent border-t-primary-500 border-r-purple-500 animate-spin"></div>
          <div class="absolute inset-2 rounded-full border-4 border-transparent border-b-primary-400 border-l-purple-400 animate-spin-slow"></div>
          
          <!-- Inner Circle with Initials -->
          <div class="absolute inset-4 rounded-full bg-white flex items-center justify-center shadow-2xl shadow-white/20">
            <span class="text-4xl sm:text-5xl font-bold text-slate-900 animate-pulse-slow">GH</span>
          </div>
        </div>

        <!-- Name with Typing Effect -->
        <div class="space-y-3 sm:space-y-4 min-h-[120px]">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide flex items-center justify-center gap-1" dir="ltr">
            <span class="inline-block">{{ displayedName }}</span>
            <span v-if="showNameCursor" class="inline-block animate-pulse">|</span>
          </h1>
          <h2 v-if="showTitle" class="text-xl sm:text-2xl md:text-3xl font-bold text-purple-400 animate-slide-up-fade text-center" dir="ltr">
            <span>Frontend Developer</span>
          </h2>
        </div>

        <!-- Loading Bar -->
        <div class="max-w-xs mx-auto" dir="ltr">
          <div class="h-2 bg-slate-800 rounded-full overflow-hidden">
            <div class="h-full bg-gradient-to-r from-primary-500 via-purple-500 to-primary-500 rounded-full animate-loading-bar"></div>
          </div>
          <p class="text-sm text-slate-400 mt-4 animate-pulse text-center">Loading...</p>
        </div>
      </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isLoading = ref(true)
const displayedName = ref('')
const showNameCursor = ref(true)
const showTitle = ref(false)
const fullName = 'Ghazal Hosseinni'

const isHiding = ref(false)

onMounted(() => {
  // Typing animation for name
  let index = 0
  const typingInterval = setInterval(() => {
    if (index < fullName.length) {
      displayedName.value += fullName[index]
      index++
    } else {
      clearInterval(typingInterval)
      showNameCursor.value = false
      
      // Show title after name is done
      setTimeout(() => {
        showTitle.value = true
        
        // Hide loader after showing title
        setTimeout(() => {
          isHiding.value = true
          setTimeout(() => {
            isLoading.value = false
            // Emit event to initialize AOS after loader finishes
            window.dispatchEvent(new Event('loader-finished'))
          }, 1000)
        }, 800)
      }, 300)
    }
  }, 80)
})
</script>

<style scoped>
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 3s linear infinite;
}

@keyframes loading-bar {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-loading-bar {
  animation: loading-bar 1.5s ease-in-out infinite;
}

@keyframes slide-up-fade {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up-fade {
  animation: slide-up-fade 0.6s ease-out forwards;
}
</style>
