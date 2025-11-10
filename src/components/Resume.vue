<template>
  <section id="resume" class="py-10 sm:py-16 lg:py-20 px-4 mb-[100px]">
    <div class="container mx-auto">
      <!-- Section Title -->
      <div
        class="text-center mb-10 sm:mb-12 lg:mb-16 space-y-3 sm:space-y-4 animate-slide-up"
      >
        <span
          class="inline-block px-12 py-3 bg-primary-500/20 text-primary-400 rounded-full text-base font-semibold mb-10"
        >
          {{ $t("resume.badge") }}
        </span>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          {{ $t("resume.title") }}
          <span class="text-gradient">{{ $t("resume.titleHighlight") }}</span>
        </h2>
        <p class="text-slate-400 max-w-3xl mx-auto">
          {{ $t("resume.description") }}
        </p>
      </div>

      <div class="max-w-5xl mx-auto">
        <!-- Projects -->
        <div class="mb-16">
          <div class="flex items-center gap-3 mb-8">
            <div
              class="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center"
            >
              <Briefcase :size="24" class="text-white" />
            </div>
            <h3
              class="text-3xl font-bold text-primary-300 duration-700 hover:text-purple-300"
            >
              {{ $t("resume.projectsTitle") }}
            </h3>
          </div>

          <div class="space-y-6">
            <div
              v-for="(project, index) in projects"
              :key="index"
              class="glass-effect rounded-2xl p-6 hover-lift group cursor-pointer"
            >
              <div
                class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4"
              >
                <div class="flex items-start gap-4">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                  >
                    <component
                      :is="project.icon"
                      :size="24"
                      class="text-primary-400"
                    />
                  </div>
                  <div>
                    <h4
                      class="text-xl font-bold text-slate-200 mb-1 group-hover:text-primary-400 transition-colors"
                    >
                      {{ project.title }}
                    </h4>
                    <span class="text-sm text-slate-400">{{
                      project.year
                    }}</span>
                  </div>
                </div>
                <a
                  :href="project.link"
                  target="_blank"
                  class="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary-500/20 hover:bg-primary-500/30 rounded-lg text-sm font-semibold text-primary-400 transition-all group-hover:scale-105"
                  @click.stop
                >
                  <span> {{ $t("resume.viewProject") }}</span>
                  <ExternalLink :size="16" />
                </a>
              </div>
              <p class="text-slate-300">{{ project.description }}</p>
            </div>
          </div>
        </div>

        <!-- Certifications -->
        <div class="mb-16">
          <div class="flex items-center gap-3 mb-8">
            <div
              class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center"
            >
              <Award :size="24" class="text-white" />
            </div>
            <h3
              class="text-3xl font-bold text-primary-300 duration-700 hover:text-purple-300"
            >
              {{ $t("resume.certificationsTitle") }}
            </h3>
          </div>

          <div class="space-y-6">
            <div
              v-for="(cert, index) in certifications"
              :key="index"
              class="glass-effect rounded-2xl p-6 hover-lift group"
            >
              <div class="flex flex-col md:flex-row md:items-start gap-6">
                <!-- QR Code -->
                <div
                  v-if="cert.qrCode"
                  class="flex-shrink-0 w-24 h-24 bg-white rounded-xl p-2 group-hover:scale-110 transition-transform"
                >
                  <img
                    :src="cert.qrCode"
                    :alt="`${cert.title} QR Code`"
                    class="w-full h-full object-contain"
                  />
                </div>

                <div class="flex-1 space-y-3">
                  <div
                    class="flex flex-col md:flex-row md:items-start md:justify-between gap-4"
                  >
                    <div>
                      <h4
                        class="text-xl font-bold text-slate-200 group-hover:text-primary-400 transition-colors mb-2"
                      >
                        {{ cert.title }}
                      </h4>
                      <span class="text-sm text-slate-400 whitespace-nowrap">{{
                        cert.year
                      }}</span>
                    </div>
                    <a
                      v-if="cert.certificateUrl"
                      :href="cert.certificateUrl"
                      target="_blank"
                      class="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/20 hover:bg-primary-500/30 rounded-lg text-sm font-semibold text-primary-400 transition-all group-hover:scale-105"
                    >
                      <span>{{ $t("resume.viewCertificate") }}</span>
                      <ExternalLink :size="16" />
                    </a>
                  </div>

                  <div class="flex items-center gap-2 text-primary-400">
                    <GraduationCap :size="18" />
                    <span class="font-semibold">{{ cert.institution }}</span>
                    <a
                      :href="cert.institutionUrl"
                      target="_blank"
                      class="hover:scale-110 transition-transform"
                    >
                      <ExternalLink :size="16" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Work Experience -->
        <div id="experience">
          <div class="flex items-center gap-3 mb-8">
            <div
              class="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center"
            >
              <Building2 :size="24" class="text-white" />
            </div>
            <h3
              class="text-3xl font-bold text-primary-300 duration-700 hover:text-purple-300"
            >
              {{ $t("resume.experienceTitle") }}
            </h3>
          </div>

          <div class="space-y-6">
            <div
              v-for="(exp, index) in experiences"
              :key="index"
              class="glass-effect rounded-2xl p-6 hover-lift group cursor-pointer"
              @click="exp.website ? window.open(exp.website, '_blank') : null"
            >
              <div
                class="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-8 sm:mb-4"
              >
                <div class="flex items-start gap-4">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                  >
                    <component
                      :is="exp.icon"
                      :size="24"
                      class="text-primary-400"
                    />
                  </div>
                  <div>
                    <h4
                      class="text-xl font-bold text-slate-200 mb-1 group-hover:text-primary-400 transition-colors"
                    >
                      {{ exp.position }}
                    </h4>
                    <p class="text-slate-300 font-semibold mb-1">
                      {{ exp.company }}
                    </p>
                    <div
                      class="flex items-center gap-3 text-sm text-slate-400 mb-6"
                    >
                      <span>{{ exp.duration }}</span>
                      <span class="text-slate-600">•</span>
                      <span class="text-primary-300 font-semibold">{{
                        exp.yearsOfWork
                      }}</span>
                    </div>
                  </div>
                </div>
                <a
                  v-if="exp.website"
                  :href="exp.website"
                  target="_blank"
                  class="inline-flex justify-center items-center gap-2 px-4 py-2 bg-primary-500/20 hover:bg-primary-500/30 rounded-lg text-sm font-semibold text-primary-400 transition-all group-hover:scale-105"
                  @click.stop
                >
                  <span>{{ $t("resume.visitWebsite") }}</span>
                  <ExternalLink :size="16" />
                </a>
              </div>

              <div class="flex items-center gap-2 text-slate-400 mb-6">
                <MapPin :size="16" />
                <span class="text-sm">{{ exp.location }}</span>
              </div>

              <p class="text-slate-300 mb-4">{{ exp.description }}</p>

              <!-- Technologies/Skills -->
              <div v-if="exp.technologies" class="flex flex-wrap gap-2">
                <span
                  v-for="(tech, techIndex) in exp.technologies"
                  :key="techIndex"
                  class="px-3 py-1 bg-slate-700/50 hover:bg-slate-700 rounded-full text-xs text-slate-300 transition-colors"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import {
  Briefcase,
  Award,
  ExternalLink,
  GraduationCap,
  ShoppingBag,
  Store,
  Home,
  Sparkles,
  Building2,
  MapPin,
  Code,
  Laptop,
} from "lucide-vue-next";

const { t, locale } = useI18n();

// Convert numbers to Persian digits
const toPersianDigits = (num) => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return num.toString().replace(/\d/g, (digit) => persianDigits[digit]);
};

// Calculate months since Khordad 1404 (June 2025)
const calculateMonthsSince = (startMonth, startYear) => {
  const now = new Date();
  const currentMonth = now.getMonth() + 1; // 0-indexed
  const currentYear = now.getFullYear();

  // Convert Persian date to Gregorian (Khordad 1404 = June 2025)
  const startGregorianYear = 2025;
  const startGregorianMonth = 6; // June

  const monthsDiff =
    (currentYear - startGregorianYear) * 12 +
    (currentMonth - startGregorianMonth);
  return monthsDiff > 0 ? monthsDiff : 0;
};

const monthsWorked = computed(() => {
  const months = calculateMonthsSince(6, 2025);
  return locale.value === "fa" ? toPersianDigits(months) : months;
});

const experiences = computed(() => [
  {
    position: t("resume.experience.frontendDev.position"),
    company: t("resume.experience.frontendDev.company"),
    duration: t("resume.experience.frontendDev.duration"),
    yearsOfWork: t("resume.experience.frontendDev.yearsOfWork", {
      months: monthsWorked.value,
    }),
    location: t("resume.experience.frontendDev.location"),
    website: "https://hoodadtech.com/",
    description: t("resume.experience.frontendDev.description"),
    icon: Code,
    technologies: ["Vue.js", "Nuxt", "Tailwind CSS", "JavaScript", "HTML/CSS"],
  },
  // Add more experiences here as needed
  // {
  //   position: t('resume.experience.JOBNAME.position'),
  //   company: t('resume.experience.JOBNAME.company'),
  //   duration: t('resume.experience.JOBNAME.duration'),
  //   yearsOfWork: t('resume.experience.JOBNAME.yearsOfWork'),
  //   location: t('resume.experience.JOBNAME.location'),
  //   website: "https://company-website.com",
  //   description: t('resume.experience.JOBNAME.description'),
  //   icon: Laptop, // or any other icon
  //   technologies: ["Tech1", "Tech2", "Tech3"],
  // },
]);

const projects = computed(() => [
  {
    title: "To-Do List",
    year: "2025",
    link: "./Nice-Shop/index.html",
    icon: Sparkles,
    description: t("resume.projects.todolist"),
  },
  {
    title: "Weather App",
    year: "2025",
    link: "./Nike-Store/nike-store.html",
    icon: Sparkles,
    description: t("resume.projects.weatherApp"),
  },
  {
    title: "Admin-Dashboard",
    year: "2025",
    link: "./Rooka/index.html",
    icon: Sparkles,
    description: t("resume.projects.AdminDashboard"),
  },
  {
    title: "MetaYar",
    year: "2025",
    link: "./HOMAY/index.html",
    icon: Sparkles,
    description: t("resume.projects.metaYar"),
  },
  {
    title: "Modern Form",
    year: "2025",
    link: "./Naderi-Website/index.html",
    icon: Sparkles,
    description: t("resume.projects.formSwip"),
  },
]);

const certifications = [
  {
    title: "Web Design Level 1, 2, 3",
    institution: "Mftmirdamad",
    institutionUrl: "https://mftmirdamad.com/",
    year: "2024 - 2025",
    certificateUrl:
      "https://drive.google.com/file/d/1qkiAIMxA-aPMjDxT-NTY7Be4MqpHXasz/view?usp=sharing",
    qrCode: null,
  },
];
</script>
