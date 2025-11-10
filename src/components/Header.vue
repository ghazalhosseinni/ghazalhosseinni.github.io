<template>
  <header
    :class="[
      'fixed top-16 md:top-20 left-0 right-0 z-40 transition-all duration-300',
      isScrolled
        ? 'glass-effect shadow-lg shadow-primary-500/10'
        : 'bg-transparent',
    ]"
  >
    <nav
      class="container mx-auto px-4 py-4"
      :dir="currentLocale === 'fa' ? 'rtl' : 'ltr'"
    >
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <a
          href="#hero"
          class="text-2xl font-bold text-gradient hover:scale-110 transition-transform"
        >
          {{ currentLocale === "fa" ? "غزل" : "Ghazal" }}
        </a>

        <!-- Desktop Menu -->
        <ul class="hidden md:flex items-center gap-8">
          <li v-for="item in menuItems" :key="item.href">
            <a
              :href="item.href"
              @click="setActive(item.href)"
              :class="[
                'flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 relative overflow-hidden group',
                'hover:bg-primary-500/20 hover:text-primary-400 hover:scale-105 hover:-translate-y-0.5',
                activeSection === item.href
                  ? 'text-primary-400 bg-primary-500/10 shadow-lg shadow-primary-500/20'
                  : 'text-slate-300',
              ]"
            >
              <component :is="item.icon" :size="18" />
              <span>{{ $t(`nav.${item.key}`) }}</span>
            </a>
          </li>
        </ul>

        <!-- Actions -->
        <div class="hidden md:flex items-center gap-3">
          <!-- Download Resume Button -->
          <a
            href="/Modern Professional CV Resume.pdf"
            download="Ghazal_Hosseinni_Resume.pdf"
            @mousemove="updateResumeMousePosition"
            class="relative flex items-center gap-2 px-4 py-2 glass-effect rounded-lg font-semibold hover:shadow-2xl hover:shadow-primary-500/50 hover:-translate-y-2 transition-all duration-300 overflow-hidden group cursor-pointer"
          >
            <span
              class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              :style="resumeSpotlightStyle"
            ></span>
            <Download
              :size="18"
              class="relative z-10 group-hover:text-primary-400 group-hover:scale-125 transition-all duration-300"
            />
            <span
              class="relative z-10 group-hover:text-primary-400 transition-colors duration-300"
              >{{ $t("nav.downloadResume") }}</span
            >
          </a>
          <a
            href="https://www.instagram.com/ghazalhosseinnii"
            target="_blank"
            class="p-2 rounded-lg bg-white/5 hover:bg-primary-500/20 hover:scale-110 transition-all duration-300"
          >
            <Instagram :size="20" />
          </a>
          <a
            href="mailto:hosseinnighazal@gmail.com"
            class="p-2 rounded-lg bg-white/5 hover:bg-primary-500/20 hover:scale-110 transition-all duration-300"
          >
            <Mail :size="20" />
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useI18n } from "vue-i18n";
import {
  Home,
  User,
  TrendingUp,
  FileText,
  Briefcase,
  Mail,
  Instagram,
  Download,
} from "lucide-vue-next";

const { locale } = useI18n();

const isScrolled = ref(false);
const activeSection = ref("#hero");
const currentLocale = computed(() => locale.value);

const resumeMouseX = ref(0);
const resumeMouseY = ref(0);

const resumeSpotlightStyle = computed(() => ({
  background: `radial-gradient(circle 120px at ${resumeMouseX.value}px ${resumeMouseY.value}px, rgba(139, 92, 246, 0.3), transparent)`,
  pointerEvents: "none",
}));

const updateResumeMousePosition = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  resumeMouseX.value = e.clientX - rect.left;
  resumeMouseY.value = e.clientY - rect.top;
};

const menuItems = [
  { href: "#hero", key: "home", icon: Home },
  { href: "#about", key: "about", icon: User },
  { href: "#skills", key: "skills", icon: TrendingUp },
  { href: "#resume", key: "resume", icon: FileText },
  { href: "#services", key: "services", icon: Briefcase },
  { href: "#contact", key: "contact", icon: Mail },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const setActive = (href) => {
  activeSection.value = href;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  document.documentElement.setAttribute(
    "dir",
    locale.value === "fa" ? "rtl" : "ltr"
  );
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
