<template>
  <footer
    class="bg-slate-900/50 border-t border-slate-800 py-12 px-4 overflow-hidden"
  >
    <div class="container mx-auto max-w-6xl px-4">
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-20 mb-8"
      >
        <div class="text-center md:text-right">
          <h3
            class="text-2xl font-bold text-primary-300 mb-4 transition-all duration-700 hover:text-purple-300"
          >
            {{ $t("footer.titleName") }}
          </h3>
          <p class="text-slate-400 mb-4 break-words">
            {{ $t("footer.description") }}
          </p>
          <div class="flex gap-3 justify-center md:justify-start">
            <a
              href="tel:+989058207731"
              class="w-10 h-10 bg-white/5 hover:bg-gradient-to-br hover:from-primary-500/30 hover:to-purple-500/30 rounded-lg flex items-center justify-center hover:scale-110 transition-all"
              ><Phone :size="20"
            /></a>
            <a
              href="mailto:hosseinnighazal@gmail.com"
              class="w-10 h-10 bg-white/5 hover:bg-gradient-to-br hover:from-primary-500/30 hover:to-purple-500/30 rounded-lg flex items-center justify-center hover:scale-110 transition-all"
              ><Mail :size="20"
            /></a>
            <a
              href="https://t.me/ghazalhosseinnii"
              target="_blank"
              class="w-10 h-10 bg-white/5 hover:bg-gradient-to-br hover:from-primary-500/30 hover:to-purple-500/30 rounded-lg flex items-center justify-center hover:scale-110 transition-all"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.155.232.171.325.016.093.036.305.02.469z"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/ghazalhosseinnii"
              target="_blank"
              class="w-10 h-10 bg-white/5 hover:bg-gradient-to-br hover:from-primary-500/30 hover:to-purple-500/30 rounded-lg flex items-center justify-center hover:scale-110 transition-all"
              ><Instagram :size="20"
            /></a>
            <a
              href="https://wa.me/989058207731"
              target="_blank"
              class="w-10 h-10 bg-white/5 hover:bg-gradient-to-br hover:from-primary-500/30 hover:to-purple-500/30 rounded-lg flex items-center justify-center hover:scale-110 transition-all"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                />
              </svg>
            </a>
          </div>
        </div>

        <div class="text-center md:text-right">
          <h4
            class="font-bold mb-4 text-primary-300 duration-700 hover:text-purple-300 text-xl"
          >
            {{ $t("footer.services") }}
          </h4>
          <ul class="space-y-2 text-slate-400">
            <li
              v-for="service in services"
              :key="service"
              class="hover:text-primary-300 transition-colors cursor-pointer flex items-center gap-2 justify-center md:justify-start"
            >
              <ChevronRight :size="16" />
              <span>{{ service }}</span>
            </li>
          </ul>
        </div>

        <div class="text-center md:text-right">
          <h4
            class="font-bold mb-4 text-primary-300 duration-700 hover:text-purple-300 text-xl"
          >
            {{ $t("footer.contactInfo") }}
          </h4>
          <div class="space-y-3 text-slate-400">
            <p
              class="flex items-start gap-2 hover:text-primary-300 transition-colors justify-center md:justify-start"
            >
              <Phone :size="18" class="mt-0.5 flex-shrink-0" />
              <span dir="rtl" class="break-all">{{
                $t("footer.phoneValue")
              }}</span>
            </p>
            <p
              class="flex items-start gap-2 hover:text-primary-300 transition-colors justify-center md:justify-start"
            >
              <Mail :size="18" class="mt-0.5 flex-shrink-0" />
              <span dir="ltr" class="break-all">hosseinnighazal@gmail.com</span>
            </p>
          </div>
        </div>
      </div>

      <div class="border-t border-slate-800 pt-8 text-center text-slate-400">
        <div class="flex flex-col items-center justify-center gap-2">
          <p class="text-center break-words max-w-full px-4">
            &copy; 2025
            <strong
              class="text-primary-300 mb-4 transition-all duration-700 hover:text-purple-300"
              >{{ $t("footer.titleName") }}</strong
            >. {{ $t("footer.rights") }}
          </p>
          <p class="text-sm text-center break-words max-w-full px-4">
            {{ $t("footer.tagline") }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { Instagram, Mail, ChevronRight, MapPin, Phone } from "lucide-vue-next";

const { t } = useI18n();

const services = computed(() => [
  t("footer.servicesList.frontend"),
  t("footer.servicesList.responsive"),
  t("footer.servicesList.vue"),
  t("footer.servicesList.performance"),
  t("footer.servicesList.javascript"),
  t("footer.servicesList.tailwind"),
]);
</script>
