<template>
  <section
    id="hero"
    class="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 max-sm:pt-20 lg:pt-8 pb-32 sm:pb-40 relative overflow-hidden sm:mt-20"
  >
    <!-- Animated Background Circles -->
    <div class="absolute inset-0 -z-10">
      <div
        class="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float"
      ></div>
      <div
        class="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"
        style="animation-delay: 2s"
      ></div>
    </div>

    <div class="container mx-auto">
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <!-- Left Content -->
        <div
          class="space-y-10 sm:space-y-6 animate-fade-in text-center lg:text-left order-2 lg:order-1"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <div class="space-y-2 sm:space-y-4">
            <h1
            
              class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-center lg:text-left"
            >
              {{ $t("hero.greeting") }}
            </h1>
            <h2
              class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-300 flex items-center justify-center lg:justify-start gap-1 relative"
              style="min-height: 2.5rem"
            >
              <!-- Invisible placeholder for longest text to prevent layout shift -->

              <span>{{ typedText }}</span>
              <span class="animate-pulse">|</span>
            </h2>

            <p
              class="text-base sm:text-lg lg:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0"
            >
              {{ $t("hero.description") }}
            </p>
          </div>

          <!-- 3 تا دکمه -->
          <div
            class="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start items-center"
          >
            <!-- View My Work -->
            <a
              href="#resume"
              @mousemove="updateMousePosition"
              class="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 rounded-xl font-semibold text-white hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2.5 overflow-hidden w-full sm:w-auto backdrop-blur-xl"
            >
              <span
                class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></span>
              <span
                class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                :style="spotlightStyle"
              ></span>
              <span class="relative z-10">{{ $t("hero.viewWork") }}</span>
              <ArrowRight
                :size="20"
                class="relative z-10 group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>

            <!-- Get In Touch -->
            <a
              href="#contact"
              @mousemove="updateMousePosition2"
              class="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 rounded-xl font-semibold text-white hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2.5 overflow-hidden w-full sm:w-auto backdrop-blur-xl"
            >
              <span
                class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></span>
              <span
                class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                :style="spotlightStyle2"
              ></span>
              <span class="relative z-10">{{ $t("hero.getInTouch") }}</span>
            </a>

            <!-- Download Resume -->
            <a
              href="/Resume.pdf"
              download="Ghazal_Hosseinni_Resume.pdf"
              @mousemove="updateResumeMousePosition"
              class="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 rounded-xl font-semibold text-white hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2.5 overflow-hidden w-full sm:w-auto cursor-pointer backdrop-blur-xl"
            >
              <span
                class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></span>
              <span
                class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                :style="resumeSpotlightStyle"
              ></span>
              <Download
                :size="18"
                class="relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
              />
              <span class="relative z-10">{{ $t("nav.downloadResume") }}</span>
            </a>
          </div>
        </div>

        <!-- Right Content - Profile Image -->
        <div
          class="flex justify-center lg:justify-end animate-scale-in mt-8 lg:mt-0 order-1 lg:order-2"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div class="relative group">
            <!-- Glowing Border Effect -->
            <div
              class="absolute -inset-1 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-opacity animate-gradient bg-[length:200%_200%]"
            ></div>

            <!-- Image Container -->
            <div
              class="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-slate-800"
            >
              <img
                src="/img/profile/my-picture.jpg.png"
                alt="Ghazal Hosseinni"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                @error="handleImageError"
              />
            </div>

            <!-- Floating Icons - Sequential Hover -->
            <div
              class="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-primary-500/50 animate-float group-hover:from-purple-600 group-hover:to-purple-700 group-hover:scale-125 group-hover:rotate-12"
              style="transition: all 0.5s ease 0s"
            >
              <Code2 :size="28" :class="['text-white', 'sm:w-8 sm:h-8']" />
            </div>
            <div
              class="absolute top-1/4 -right-6 w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-pink-500/50 animate-float group-hover:from-purple-600 group-hover:to-purple-700 group-hover:scale-125 group-hover:rotate-180"
              style="animation-delay: 2s; transition: all 0.5s ease 0.2s"
            >
              <Sparkles :size="28" class="text-white" />
            </div>
            <div
              class="absolute bottom-1/4 -left-6 w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/50 animate-float group-hover:from-purple-600 group-hover:to-purple-700 group-hover:scale-125 group-hover:-rotate-45"
              style="animation-delay: 1.5s; transition: all 0.5s ease 0.4s"
            >
              <Zap :size="28" class="text-white" />
            </div>
            <div
              class="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/50 animate-float group-hover:from-purple-600 group-hover:to-purple-700 group-hover:scale-125 group-hover:-rotate-12"
              style="animation-delay: 1s; transition: all 0.5s ease 0.6s"
            >
              <Palette :size="32" class="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <a
      href="#about"
      class="absolute -bottom-16 sm:-bottom-20 left-1/2 -translate-x-1/2 animate-bounce group cursor-pointer hover:scale-110 transition-all duration-300"
    >
      <div
        class="relative p-2 rounded-full hover:shadow-2xl hover:shadow-primary-500/50 transition-all"
      >
        <ChevronDown
          :size="32"
          class="text-primary-400 group-hover:text-primary-300 transition-colors"
        />
        <div
          class="absolute inset-0 rounded-full bg-primary-500/0 group-hover:bg-primary-500/20 blur-xl transition-all duration-300"
        ></div>
      </div>
    </a>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useI18n } from "vue-i18n";
import {
  Code2,
  Palette,
  ArrowRight,
  ArrowDown,
  Sparkles,
  Zap,
  ChevronDown,
  Download,
} from "lucide-vue-next";

const { locale } = useI18n();
const currentLocale = computed(() => locale.value);

const typedText = ref("");
const texts = computed(() => [
  locale.value === "fa" ? "توسعه‌دهنده Front-end" : "Front-end Developer",
  locale.value === "fa" ? "طراح UI" : "UI Designer",
  locale.value === "fa" ? "توسعه‌دهنده Vue.js" : "Vue.js Developer",
]);
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

const projectsCount = ref(5);
const yearsExperience = ref(2);

const mouseX = ref(0);
const mouseY = ref(0);
const mouseX2 = ref(0);
const mouseY2 = ref(0);
const resumeMouseX = ref(0);
const resumeMouseY = ref(0);

// Stats spotlight positions
const statPositions = ref([
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
]);

const spotlightStyle = computed(() => ({
  background: `radial-gradient(circle 150px at ${mouseX.value}px ${mouseY.value}px, rgba(139, 92, 246, 0.3), transparent)`,
  pointerEvents: "none",
}));

const spotlightStyle2 = computed(() => ({
  background: `radial-gradient(circle 150px at ${mouseX2.value}px ${mouseY2.value}px, rgba(139, 92, 246, 0.2), transparent)`,
  pointerEvents: "none",
}));

const resumeSpotlightStyle = computed(() => ({
  background: `radial-gradient(circle 150px at ${resumeMouseX.value}px ${resumeMouseY.value}px, rgba(139, 92, 246, 0.3), transparent)`,
  pointerEvents: "none",
}));

const statSpotlightStyle = computed(() => [
  {
    background: `radial-gradient(circle 120px at ${statPositions.value[0].x}px ${statPositions.value[0].y}px, rgba(59, 130, 246, 0.25), transparent)`,
    pointerEvents: "none",
  },
  {
    background: `radial-gradient(circle 120px at ${statPositions.value[1].x}px ${statPositions.value[1].y}px, rgba(59, 130, 246, 0.25), transparent)`,
    pointerEvents: "none",
  },
  {
    background: `radial-gradient(circle 120px at ${statPositions.value[2].x}px ${statPositions.value[2].y}px, rgba(59, 130, 246, 0.25), transparent)`,
    pointerEvents: "none",
  },
]);

const updateMousePosition = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  mouseX.value = e.clientX - rect.left;
  mouseY.value = e.clientY - rect.top;
};

const updateMousePosition2 = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  mouseX2.value = e.clientX - rect.left;
  mouseY2.value = e.clientY - rect.top;
};

const updateResumeMousePosition = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  resumeMouseX.value = e.clientX - rect.left;
  resumeMouseY.value = e.clientY - rect.top;
};

const updateStatPosition = (index, e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  statPositions.value[index] = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
};

const typeText = () => {
  const currentText = texts.value[textIndex];

  if (isDeleting) {
    typedText.value = currentText.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    typedText.value = currentText.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100;
  }

  if (!isDeleting && charIndex === currentText.length) {
    typingSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.value.length;
    typingSpeed = 500;
  }

  setTimeout(typeText, typingSpeed);
};

const handleImageError = (e) => {
  // Fallback if image doesn't load
  e.target.src =
    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23334155" width="400" height="400"/%3E%3Ctext fill="%2394a3b8" font-family="Arial" font-size="48" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EGH%3C/text%3E%3C/svg%3E';
};

onMounted(() => {
  typeText();
});
</script>

<style scoped></style>
