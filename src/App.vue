<template>
  <!-- Loader -->
  <Loader />

  <div
    class="min-h-screen transition-colors duration-300 dark:bg-slate-950 light:bg-slate-50"
  >
    <!-- Background Effects -->
    <div class="fixed inset-0 -z-10">
      <div
        class="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/20 dark:bg-primary-500/20 light:bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"
      ></div>
      <div
        class="absolute bottom-0 right-1/2 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/20 light:bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"
        style="animation-delay: 2s"
      ></div>
      <div
        class="absolute top-1/2 right-1/3 w-96 h-96 bg-pink-500/10 dark:bg-pink-500/10 light:bg-pink-500/5 rounded-full blur-3xl animate-pulse-slow"
        style="animation-delay: 4s"
      ></div>
    </div>

    <!-- Fixed Left Sidebar -->
    <Sidebar />

    <!-- Theme & Language Controls -->
    <ThemeLanguageControls />

    <!-- Main Content Area (with left margin for sidebar on desktop) -->
    <div class="lg:ml-80">
      <main>
        <Hero />
        <About />
        <Skills />
        <Resume />
        <!-- <Services /> -->
        <Contact />
      </main>

      <!-- Footer -->
      <Footer />
    </div>

    <!-- Scroll to Top Button -->
    <ScrollToTop />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
import Loader from "./components/Loader.vue";
import Sidebar from "./components/Sidebar.vue";
import ThemeLanguageControls from "./components/MobileMenu.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Resume from "./components/Resume.vue";
import Services from "./components/Services.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import ScrollToTop from "./components/ScrollToTop.vue";

const { locale } = useI18n();

// Set text direction based on language on initial load
onMounted(() => {
  const savedLocale = localStorage.getItem("locale") || "fa";
  locale.value = savedLocale;
  document.documentElement.setAttribute(
    "dir",
    savedLocale === "fa" ? "rtl" : "ltr"
  );
  document.documentElement.setAttribute("lang", savedLocale);
});
</script>
