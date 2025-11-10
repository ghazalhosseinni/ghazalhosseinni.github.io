<template>
  <section id="contact" class="py-10 sm:py-16 lg:py-20 px-4 mb-[100px]">
    <div class="container mx-auto">
      <div class="text-center mb-10 sm:mb-12 lg:mb-16 space-y-3 sm:space-y-4">
        <span
          class="inline-block px-12 py-3 bg-primary-500/20 text-primary-400 rounded-full text-xs sm:text-base font-semibold mb-10"
          >{{ $t("contact.badge") }}</span
        >
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          {{ $t("contact.title") }}
          <span class="text-gradient">{{ $t("contact.titleHighlight") }}</span>
        </h2>
        <p class="text-slate-400 max-w-3xl mx-auto">
          {{ $t("contact.description") }}
        </p>
      </div>
      <!-- بخش راست  -->
      <div class="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
        <div class="lg:col-span-2 space-y-6">
          <div class="glass-effect rounded-2xl p-8">
            <h3
              class="text-2xl font-bold mb-6 text-primary-300 duration-700 hover:text-purple-300"
            >
              {{ $t("contact.info.title") }}
            </h3>
            <div class="space-y-4">
              <a
                v-for="info in contactInfo"
                :key="info.label"
                :href="info.link || '#'"
                target="_blank"
                class="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-500 group cursor-pointer hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  class="w-12 h-12 bg-gradient-to-br rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg"
                  :style="{
                    backgroundImage: `linear-gradient(to bottom right, ${info.color1}, ${info.color2})`,
                  }"
                >
                  <component
                    v-if="!info.svg"
                    :is="info.icon"
                    :size="20"
                    class="text-white"
                  />
                  <svg
                    v-else-if="info.label === 'WhatsApp'"
                    class="w-5 h-5 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                    />
                  </svg>
                  <svg
                    v-else-if="info.label === 'Telegram'"
                    class="w-5 h-5 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.155.232.171.325.016.093.036.305.02.469z"
                    />
                  </svg>
                  <svg
                    v-else-if="info.label === 'Instagram'"
                    class="w-5 h-5 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    />
                  </svg>
                </div>
                <div class="space-y-1">
                  <p class="text-sm text-slate-400">{{ info.label }}</p>
                  <p class="text-white font-medium text-sm" dir="ltr">
                    {{ info.value }}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <!-- بخش ایمیل فرستادن  -->
        <div class="lg:col-span-3">
          <form
            @submit.prevent="handleSubmit"
            class="glass-effect rounded-2xl p-8 space-y-6"
          >
            <h3
              class="text-2xl font-bold mb-6 text-primary-300 duration-700 hover:text-purple-300"
            >
              {{ $t("contact.form.title") }}
            </h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  v-model="form.name"
                  type="text"
                  :placeholder="$t('contact.form.name')"
                  required
                  class="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                />
              </div>
              <div>
                <input
                  v-model="form.email"
                  type="email"
                  :placeholder="$t('contact.form.email')"
                  required
                  class="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                />
              </div>
            </div>
            <div>
              <input
                v-model="form.subject"
                type="text"
                :placeholder="$t('contact.form.subject')"
                required
                class="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
              />
            </div>
            <div>
              <textarea
                v-model="form.message"
                rows="6"
                :placeholder="$t('contact.form.message')"
                required
                class="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              :disabled="isSubmitting"
              class="group relative w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 rounded-lg font-semibold hover:shadow-2xl hover:shadow-primary-500/50 hover:scale-105 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 overflow-hidden"
            >
              <Send :size="20" />
              <span>{{
                isSubmitting
                  ? $t("contact.form.sending")
                  : $t("contact.form.send")
              }}</span>
            </button>
            <p
              v-if="submitMessage"
              :class="[
                'text-center text-sm',
                submitSuccess ? 'text-green-400' : 'text-red-400',
              ]"
            >
              {{ submitMessage }}
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { MapPin, Phone, Mail, Send } from "lucide-vue-next";

const { t } = useI18n();

const form = ref({ name: "", email: "", subject: "", message: "" });
const isSubmitting = ref(false);
const submitMessage = ref("");
const submitSuccess = ref(false);

const contactInfo = computed(() => [
  {
    label: t("contact.info.phone"),
    value: t("contact.info.phoneValue"),
    icon: Phone,
    color1: "#10b981",
    color2: "#059669",
    link: "tel:+989058207731",
  },
  {
    label: t("contact.info.email"),
    value: "hosseinnighazal@gmail.com",
    icon: Mail,
    color1: "#f59e0b",
    color2: "#d97706",
    link: "mailto:hosseinnighazal@gmail.com",
  },
  {
    label: "WhatsApp",
    value: t("contact.info.whatsapp"),
    icon: Phone,
    color1: "#25D366",
    color2: "#128C7E",
    link: "https://wa.me/989058207731",
    svg: true,
  },
  {
    label: "Telegram",
    value: "@ghazalhosseinnii",
    icon: Mail,
    color1: "#0088cc",
    color2: "#005f8c",
    link: "https://t.me/ghazalhosseinnii",
    svg: true,
  },
  {
    label: "Instagram",
    value: "@ghazalhosseinnii",
    icon: Mail,
    color1: "#E4405F",
    color2: "#C13584",
    link: "https://www.instagram.com/ghazalhosseinnii",
    svg: true,
  },
]);

const handleSubmit = async () => {
  isSubmitting.value = true;
  submitMessage.value = "";

  // Create mailto link
  const mailtoLink = `mailto:hosseinnighazal@gmail.com?subject=${encodeURIComponent(
    form.value.subject
  )}&body=${encodeURIComponent(
    `Name: ${form.value.name}\nEmail: ${form.value.email}\n\nMessage:\n${form.value.message}`
  )}`;

  // Open email client
  window.location.href = mailtoLink;

  setTimeout(() => {
    isSubmitting.value = false;
    submitSuccess.value = true;
    submitMessage.value = t("contact.form.success");
    form.value = { name: "", email: "", subject: "", message: "" };

    setTimeout(() => {
      submitMessage.value = "";
      submitSuccess.value = false;
    }, 5000);
  }, 500);
};
</script>
