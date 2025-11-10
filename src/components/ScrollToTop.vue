<template>
  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="transform scale-0 opacity-0"
    enter-to-class="transform scale-100 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="transform scale-100 opacity-100"
    leave-to-class="transform scale-0 opacity-0"
  >
    <button
      v-if="isVisible"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 w-14 h-14 glass-effect backdrop-blur-xl rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all z-50 group border-2 border-slate-700/30 dark:border-slate-700/30 light:border-slate-300/50"
      aria-label="Scroll to top"
    >
      <ArrowUp
        :size="24"
        class="text-primary-100 dark:text-primary-400 light:text-primary-600 group-hover:-translate-y-1 group-hover:text-primary-400 transition-all"
      />
    </button>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { ArrowUp } from "lucide-vue-next";

const isVisible = ref(false);

const handleScroll = () => {
  isVisible.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
