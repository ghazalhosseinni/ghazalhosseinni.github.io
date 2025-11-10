<template>
  <section id="skills" class="py-10 px-4 bg-slate-900/50 mb-[100px]">
    <div class="container mx-auto">
      <!-- Section Title -->
      <div class="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4 px-4">
        <span
          class="inline-block px-12 py-3 bg-primary-500/20 text-primary-400 rounded-full text-base font-semibold mb-10"
          >{{ $t("skills.badge") }}</span
        >
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          {{ $t("skills.title") }}
          <span class="text-gradient">{{ $t("skills.titleHighlight") }}</span>
        </h2>
        <p
          class="text-sm sm:text-base text-slate-400 max-w-3xl mx-auto text-center"
        >
          {{ $t("skills.description") }}
        </p>
      </div>

      <!-- Skills Grid -->
      <div class="max-w-4xl mx-auto space-y-6 sm:space-y-8 px-4">
        <div
          v-for="(skill, index) in skills"
          :key="skill.name"
          tabindex="0"
          class="group glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 hover-lift cursor-pointer transition-all duration-500 outline-none"
          @mouseenter="handleMouseEnter(index, skill)"
          @mouseleave="handleMouseLeave"
          @focus="handleMouseEnter(index, skill)"
          @blur="handleMouseLeave"
          @touchstart.prevent="handleMouseEnter(index, skill)"
          @touchend.prevent="handleMouseLeave"
        >
          <div
            class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4"
          >
            <div class="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <div
                class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br flex items-center justify-center shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 flex-shrink-0"
                :style="{
                  backgroundImage: `linear-gradient(to bottom right, ${skill.color1}, ${skill.color2})`,
                }"
              >
                <component
                  :is="skill.icon"
                  :size="24"
                  class="sm:w-7 sm:h-7 text-white group-hover:scale-110 transition-transform"
                />
              </div>
              <div>
                <h4
                  class="font-semibold text-base sm:text-lg text-slate-200 group-hover:text-primary-400 transition-colors"
                >
                  {{ skill.name }}
                </h4>
                <p
                  class="text-xs sm:text-sm text-slate-400 group-hover:text-slate-300 transition-colors"
                >
                  {{ skill.description }}
                </p>
              </div>
            </div>
            <span
              class="text-2xl sm:text-3xl font-bold text-gradient group-hover:scale-110 transition-transform whitespace-nowrap"
              >{{ skill.percentage }}%</span
            >
          </div>

          <!-- Progress Bar -->
          <div class="relative h-4 bg-slate-800 rounded-full overflow-hidden">
            <div
              class="absolute inset-y-0 left-0 rounded-full"
              :style="{
                width: skill.percentage + '%',
                background: 'linear-gradient(to right, #8b5cf6, #6366f1)',
                boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)',
              }"
            ></div>
          </div>
        </div>
      </div>

      <!-- Technology Stack -->
      <div class="mt-20">
        <h3 class="text-2xl font-bold text-center mb-10">Technology Stack</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          <div
            v-for="tech in technologies"
            :key="tech.name"
            class="glass-effect rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover-lift hover:bg-white/10 cursor-pointer group"
          >
            <div
              class="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"
              :style="{ background: tech.color }"
            >
              <component :is="tech.icon" :size="24" class="text-white" />
            </div>
            <span class="text-xs font-medium text-slate-300">{{
              tech.name
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, nextTick, onMounted } from "vue";
import {
  Code2,
  Layout,
  Blocks,
  Palette,
  Zap,
  Smartphone,
  GitBranch,
  Wind,
  Package,
  Layers,
} from "lucide-vue-next";

/* state for hover animation */
const hoveredSkill = ref(null);
const animatedWidth = ref(0);
const rafId = ref(null);
const transitionDisabled = ref(false);

/* handle hover / focus / touch: animate from 0 -> target using requestAnimationFrame */
function handleMouseEnter(index, skill) {
  hoveredSkill.value = index;
  animatedWidth.value = 0;
  transitionDisabled.value = true;

  // cancel previous animation if exists
  if (rafId.value) {
    cancelAnimationFrame(rafId.value);
    rafId.value = null;
  }

  // ensure DOM updates first, then start animation shortly after
  nextTick(() => {
    setTimeout(() => {
      transitionDisabled.value = false;

      const target = Number(skill.percentage) || 0;
      const duration = 800; // ms
      let startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        animatedWidth.value = parseFloat((progress * target).toFixed(2));
        if (progress < 1) {
          rafId.value = requestAnimationFrame(step);
        } else {
          animatedWidth.value = target;
          rafId.value = null;
        }
      }

      rafId.value = requestAnimationFrame(step);
    }, 30);
  });
}

function handleMouseLeave() {
  // stop animation and revert to normal state (shows skill.percentage because hoveredSkill will be null)
  if (rafId.value) {
    cancelAnimationFrame(rafId.value);
    rafId.value = null;
  }
  hoveredSkill.value = null;
  animatedWidth.value = 0;
  transitionDisabled.value = false;
}

/* rest of component data */
const isVisible = ref(false);

const skills = [
  {
    name: "HTML/CSS",
    description: "Semantic HTML5 & Modern CSS3",
    percentage: 95,
    icon: Code2,
    color1: "#f06529",
    color2: "#264de4",
  },
  {
    name: "JavaScript",
    description: "ES6+, DOM manipulation",
    percentage: 70,
    icon: Zap,
    color1: "#f7df1e",
    color2: "#e6b800",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS",
    percentage: 85,
    icon: Wind,
    color1: "#38bdf8",
    color2: "#0ea5e9",
  },
  {
    name: "Responsive Web Design",
    description: "Mobile-first approach",
    percentage: 85,
    icon: Smartphone,
    color1: "#0ea5e9",
    color2: "#06b6d4",
  },
  {
    name: "Git",
    description: "Version control",
    percentage: 80,
    icon: GitBranch,
    color1: "#f05032",
    color2: "#c9513f",
  },
  {
    name: "Vue.js",
    description: "Progressive framework",
    percentage: 75,
    icon: Package,
    color1: "#42b883",
    color2: "#35495e",
  },
  {
    name: "Nuxt.js",
    description: "Vue meta-framework",
    percentage: 70,
    icon: Layers,
    color1: "#00dc82",
    color2: "#00c58e",
  },
];

const technologies = [
  {
    name: "HTML5",
    icon: Code2,
    color: "linear-gradient(135deg, #f06529 0%, #e44d26 100%)",
  },
  {
    name: "CSS3",
    icon: Palette,
    color: "linear-gradient(135deg, #264de4 0%, #2965f1 100%)",
  },
  {
    name: "JavaScript",
    icon: Zap,
    color: "linear-gradient(135deg, #f7df1e 0%, #e6b800 100%)",
  },
  {
    name: "Vue",
    icon: Package,
    color: "linear-gradient(135deg, #42b883 0%, #35495e 100%)",
  },
  {
    name: "React",
    icon: Blocks,
    color: "linear-gradient(135deg, #61dafb 0%, #0088cc 100%)",
  },
  {
    name: "Bootstrap",
    icon: Layout,
    color: "linear-gradient(135deg, #7952b3 0%, #563d7c 100%)",
  },
  {
    name: "Tailwind",
    icon: Palette,
    color: "linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%)",
  },
  {
    name: "Figma",
    icon: Layers,
    color: "linear-gradient(135deg, #f24e1e 0%, #a259ff 100%)",
  },
  {
    name: "Responsive",
    icon: Smartphone,
    color: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
  },
];

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 300);
});
</script>

<style scoped>
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* شاین فقط یک بار اجرا می‌شود */
.animate-shimmer {
  animation: shimmer 1.2s linear 1 forwards;
}

/* optional: make focused card more visible for keyboard users */
div[tabindex="0"]:focus {
  box-shadow: 0 6px 24px rgba(99, 102, 241, 0.12);
  transform: translateY(-2px);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}
</style>
