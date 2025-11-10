<template>
  <section
    id="services"
    class="py-12 sm:py-16 lg:py-20 px-4 bg-slate-900/50 mb-[100px]"
  >
    <div class="container mx-auto">
      <div class="text-center mb-10 sm:mb-12 lg:mb-16 space-y-3 sm:space-y-4">
        <span
          class="inline-block px-12 py-3 bg-primary-500/20 text-primary-400 rounded-full text-xs sm:text-base font-semibold mb-10"
          >{{ $t("services.badge") }}</span
        >
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          {{ $t("services.title") }}
          <span class="text-gradient">{{ $t("services.titleHighlight") }}</span>
        </h2>
        <p
          class="text-sm sm:text-base text-slate-400 max-w-3xl mx-auto px-4 text-center"
        >
          {{ $t("services.description") }}
        </p>
      </div>

      <div
        class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto"
      >
        <div
          v-for="(service, index) in services"
          :key="service.title"
          class="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 hover-lift group cursor-pointer transition-all duration-500 hover:scale-105 flex flex-col h-full relative overflow-hidden"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <!-- Page Flip Corner - Removed (Clean fold effect) -->
          <div
            class="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-r-[30px] border-t-transparent border-r-slate-800/30 transition-all duration-500 group-hover:border-r-transparent group-hover:border-t-transparent"
          ></div>
          <div
            class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg"
            :style="{
              backgroundImage: `linear-gradient(to bottom right, ${service.color1}, ${service.color2})`,
            }"
          >
            <component
              :is="service.icon"
              :size="32"
              class="text-white group-hover:scale-110 transition-transform"
            />
          </div>
          <h3
            class="text-xl font-bold mb-3 group-hover:text-primary-400 transition-colors duration-300"
          >
            {{ service.title }}
          </h3>
          <p
            class="text-slate-400 flex-grow group-hover:text-slate-300 transition-colors"
          >
            {{ service.description }}
          </p>
          <div
            class="mt-4 pt-4 border-t border-slate-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <span class="text-primary-400 text-sm flex items-center gap-2">
              Learn More
              <svg
                class="w-4 h-4 group-hover:translate-x-2 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  Palette,
  Layout,
  TrendingUp,
  Code,
  Users,
  Wrench,
} from "lucide-vue-next";

const services = [
  {
    title: "Creative Branding",
    description: "Building modern websites using HTML, CSS, and JavaScript.",
    icon: Palette,
    color1: "#f06529",
    color2: "#e44d26",
  },
  {
    title: "Design Systems",
    description: "Creating responsive designs for all devices.",
    icon: Layout,
    color1: "#7952b3",
    color2: "#563d7c",
  },
  {
    title: "Performance Optimization",
    description: "Optimizing speed, SEO, and user experience.",
    icon: TrendingUp,
    color1: "#10b981",
    color2: "#059669",
  },
  {
    title: "Digital Platforms",
    description: "Designing clean and modern UI/UX interfaces.",
    icon: Code,
    color1: "#0ea5e9",
    color2: "#0284c7",
  },
  {
    title: "Team Collaboration",
    description: "Working with teams to turn ideas into reality.",
    icon: Users,
    color1: "#8b5cf6",
    color2: "#7c3aed",
  },
  {
    title: "Maintenance & Support",
    description: "Website maintenance and technical support.",
    icon: Wrench,
    color1: "#f59e0b",
    color2: "#d97706",
  },
];
</script>
