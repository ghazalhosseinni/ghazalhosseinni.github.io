<template>
  <section id="about" class="py-10 px-4 bg-slate-900/50 mb-[100px]">
    <div class="container mx-auto">
      <!-- Section Title -->
      <div class="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4 px-4" data-aos="fade-up">
        <span
          class="inline-block px-12 py-3 bg-primary-500/20 text-primary-400 rounded-full text-base font-semibold mb-10"
        >
          {{ $t("about.badge") }}
        </span>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          {{ $t("about.title") }}
          <span class="text-gradient">{{ $t("about.titleHighlight") }}</span>
        </h2>
      </div>

      <!-- Content -->
      <div class="max-w-4xl mx-auto space-y-10 sm:space-y-12 px-4" data-aos="fade-up" data-aos-delay="100">
        <!-- Personal Info -->
        <div class="space-y-4 text-slate-300 leading-relaxed">
          <p>{{ $t("about.description1") }}</p>
          <p>{{ $t("about.description2") }}</p>
          <p>{{ $t("about.description3") }}</p>
          <p>{{ $t("about.description4") }}</p>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-3 gap-4" data-aos="fade-up" data-aos-delay="200">
          <div
            v-for="(stat, index) in stats"
            :key="stat.label"
            @mousemove="updateStatBoxPosition(index, $event)"
            class="relative glass-effect rounded-xl p-4 text-center hover:bg-white/10 transition-all hover:-translate-y-1 cursor-pointer group overflow-hidden"
          >
            <span
              class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              :style="statBoxSpotlightStyle[index]"
            ></span>
            <div
              class="text-3xl font-bold text-gradient mb-1 group-hover:scale-110 transition-transform relative z-10 text-center"
            >
              {{ stat.value }}
            </div>
            <div class="text-xs text-slate-400 relative z-10 text-center">
              {{ stat.label }}
            </div>
          </div>
        </div>

        <!-- Details -->
        <div class="grid md:grid-cols-2 gap-4">
          <div
            v-for="(detail, index) in details"
            :key="detail.label"
            @mousemove="updateDetailPosition(index, $event)"
            class="relative glass-effect rounded-xl p-4 hover:bg-white/10 transition-all hover-lift overflow-hidden group"
          >
            <span
              class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              :style="detailSpotlightStyle[index]"
            ></span>
            <div class="text-sm text-slate-400 mb-1 relative z-10 text-center">
              {{ detail.label }}
            </div>
            <div class="font-semibold text-slate-200 relative z-10 text-center">
              {{ detail.value }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { Mail, Phone, MapPin, Sparkles } from "lucide-vue-next";

const birthYear = 2004;
const currentYear = new Date().getFullYear();
const age = computed(() => currentYear - birthYear);

const { t } = useI18n();

const stats = computed(() => [
  { value: "5+", label: t("about.stats.projects") },
  { value: `${currentYear - 2024}+`, label: t("about.stats.experience") },
  { value: "100%", label: t("about.stats.satisfaction") },
]);

const details = computed(() => [
  {
    label: t("about.details.specialization"),
    value: t("about.details.specializationValue"),
  },
  { label: t("about.details.level"), value: t("about.details.levelValue") },
  {
    label: t("about.details.education"),
    value: t("about.details.educationValue"),
  },
  {
    label: t("about.details.languages"),
    value: t("about.details.languagesValue"),
  },
]);

// Spotlight positions
const contactPositions = ref([
  { x: 0, y: 0 },
  { x: 0, y: 0 },
]);
const statBoxPositions = ref([
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
]);
const detailPositions = ref([
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
]);

const contactSpotlightStyle = computed(() => [
  {
    background: `radial-gradient(circle 120px at ${contactPositions.value[0].x}px ${contactPositions.value[0].y}px, rgba(59, 130, 246, 0.25), transparent)`,
    pointerEvents: "none",
  },
  {
    background: `radial-gradient(circle 120px at ${contactPositions.value[1].x}px ${contactPositions.value[1].y}px, rgba(59, 130, 246, 0.25), transparent)`,
    pointerEvents: "none",
  },
]);

const statBoxSpotlightStyle = computed(() => [
  {
    background: `radial-gradient(circle 100px at ${statBoxPositions.value[0].x}px ${statBoxPositions.value[0].y}px, rgba(59, 130, 246, 0.25), transparent)`,
    pointerEvents: "none",
  },
  {
    background: `radial-gradient(circle 100px at ${statBoxPositions.value[1].x}px ${statBoxPositions.value[1].y}px, rgba(59, 130, 246, 0.25), transparent)`,
    pointerEvents: "none",
  },
  {
    background: `radial-gradient(circle 100px at ${statBoxPositions.value[2].x}px ${statBoxPositions.value[2].y}px, rgba(59, 130, 246, 0.25), transparent)`,
    pointerEvents: "none",
  },
]);

const detailSpotlightStyle = computed(() => [
  {
    background: `radial-gradient(circle 120px at ${detailPositions.value[0].x}px ${detailPositions.value[0].y}px, rgba(59, 130, 246, 0.25), transparent)`,
    pointerEvents: "none",
  },
  {
    background: `radial-gradient(circle 120px at ${detailPositions.value[1].x}px ${detailPositions.value[1].y}px, rgba(59, 130, 246, 0.25), transparent)`,
    pointerEvents: "none",
  },
  {
    background: `radial-gradient(circle 120px at ${detailPositions.value[2].x}px ${detailPositions.value[2].y}px, rgba(59, 130, 246, 0.25), transparent)`,
    pointerEvents: "none",
  },
  {
    background: `radial-gradient(circle 120px at ${detailPositions.value[3].x}px ${detailPositions.value[3].y}px, rgba(59, 130, 246, 0.25), transparent)`,
    pointerEvents: "none",
  },
]);

const updateContactPosition = (index, e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  contactPositions.value[index] = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
};

const updateStatBoxPosition = (index, e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  statBoxPositions.value[index] = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
};

const updateDetailPosition = (index, e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  detailPositions.value[index] = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
};

const handleImageError = (e) => {
  e.target.src =
    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23334155" width="400" height="400"/%3E%3Ctext fill="%2394a3b8" font-family="Arial" font-size="48" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EGH%3C/text%3E%3C/svg%3E';
};
</script>
