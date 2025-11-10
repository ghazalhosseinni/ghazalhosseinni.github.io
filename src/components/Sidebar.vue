<template>
  <!-- Mobile Menu Button - Removed (Now in Header) -->

  <!-- Overlay for mobile -->
  <transition
    enter-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isMobileMenuOpen"
      class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden pointer-events-none"
    ></div>
  </transition>

  <!-- Desktop Sidebar (from left) -->
  <aside
    class="hidden lg:block fixed left-4 top-1/2 -translate-y-1/2 w-72 bg-slate-900/95 dark:bg-slate-900/95 light:bg-white/95 backdrop-blur-xl border-2 border-slate-800/50 dark:border-slate-800/50 light:border-slate-300/50 rounded-2xl z-50 shadow-2xl py-6"
  >
    <!-- Navigation -->
    <nav class="px-8 py-2">
      <ul class="space-y-2">
        <li v-for="item in menuItems" :key="item.href">
          <a
            :href="item.href"
            @click="scrollToSection(item.href)"
            :class="[
              'flex items-center gap-3 py-1.5 transition-all duration-300 group relative',
              activeSection === item.href
                ? 'text-primary-400'
                : 'text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900',
            ]"
          >
            <!-- Icon -->
            <component
              :is="item.icon"
              :size="20"
              :class="[
                'transition-all duration-300',
                activeSection === item.href
                  ? 'text-primary-400'
                  : 'text-slate-500 dark:text-slate-500 light:text-slate-400 group-hover:text-primary-500',
              ]"
            />

            <span
              :class="[
                'text-base font-normal transition-colors',
                activeSection === item.href
                  ? 'font-medium text-primary-400'
                  : '',
              ]"
              >{{ $t(`nav.${item.key}`) }}</span
            >
          </a>
        </li>
      </ul>
    </nav>

    <!-- Social Links -->
    <div class="px-6 mt-4 mb-3">
      <div class="flex gap-1.5 justify-center items-center">
        <a
          href="tel:+989058207731"
          class="w-10 h-10 rounded-full bg-slate-800/50 dark:bg-slate-800/50 light:bg-slate-200/80 flex items-center justify-center hover:bg-gradient-to-br hover:from-primary-500 hover:to-purple-500 transition-all hover:scale-110 group"
          title="0905 820 7731"
        >
          <Phone
            :size="18"
            class="text-slate-400 dark:text-slate-400 light:text-slate-600 group-hover:text-white transition-colors"
          />
        </a>
        <a
          href="mailto:hosseinnighazal@gmail.com"
          class="w-10 h-10 rounded-full bg-slate-800/50 dark:bg-slate-800/50 light:bg-slate-200/80 flex items-center justify-center hover:bg-gradient-to-br hover:from-primary-500 hover:to-purple-500 transition-all hover:scale-110 group"
          title="hosseinnighazal@gmail.com"
        >
          <Mail
            :size="18"
            class="text-slate-400 dark:text-slate-400 light:text-slate-600 group-hover:text-white transition-colors"
          />
        </a>
        <a
          href="https://t.me/ghazalhosseinnii"
          target="_blank"
          class="w-10 h-10 rounded-full bg-slate-800/50 dark:bg-slate-800/50 light:bg-slate-200/80 flex items-center justify-center hover:bg-gradient-to-br hover:from-primary-500 hover:to-purple-500 transition-all hover:scale-110 group"
          title="Telegram: ghazalhosseinnii"
        >
          <svg
            class="w-5 h-5 text-slate-400 dark:text-slate-400 light:text-slate-600 group-hover:text-white transition-colors"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.155.232.171.325.016.093.036.305.02.469z"
            />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/ghazalhosseinnii"
          target="_blank"
          class="w-10 h-10 rounded-full bg-slate-800/50 dark:bg-slate-800/50 light:bg-slate-200/80 flex items-center justify-center hover:bg-gradient-to-br hover:from-primary-500 hover:to-purple-500 transition-all hover:scale-110 group"
          title="Instagram: ghazalhosseinnii"
        >
          <svg
            class="w-5 h-5 text-slate-400 dark:text-slate-400 light:text-slate-600 group-hover:text-white transition-colors"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
            />
          </svg>
        </a>
        <a
          href="https://wa.me/989058207731"
          target="_blank"
          class="w-10 h-10 rounded-full bg-slate-800/50 dark:bg-slate-800/50 light:bg-slate-200/80 flex items-center justify-center hover:bg-gradient-to-br hover:from-primary-500 hover:to-purple-500 transition-all hover:scale-110 group"
          title="WhatsApp: 0905 820 7731"
        >
          <svg
            class="w-5 h-5 text-slate-400 dark:text-slate-400 light:text-slate-600 group-hover:text-white transition-colors"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
            />
          </svg>
        </a>
      </div>
    </div>

    <!-- Language Selector -->
    <div class="px-6 mt-6">
      <div class="relative" ref="langDropdownRef">
        <!-- Language Button -->
        <button
          @click="toggleLangDropdown"
          class="w-full group relative px-4 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg flex items-center justify-between hover:bg-white/10 transition-all duration-300"
        >
          <div class="flex items-center gap-2.5">
            <Languages :size="16" class="text-white/70" />
            <span class="text-sm font-medium text-white/90">
              {{ currentLocale === "fa" ? "فارسی" : "English" }}
            </span>
          </div>
          <ChevronDown
            :size="16"
            class="text-white/50 transition-transform duration-300"
            :class="showLangDropdown ? 'rotate-180' : ''"
          />
        </button>

        <!-- Dropdown -->
        <transition
          enter-active-class="transition ease-out duration-200"
          enter-from-class="opacity-0 scale-95 -translate-y-2"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition ease-in duration-150"
          leave-from-class="opacity-100 scale-100 translate-y-0"
          leave-to-class="opacity-0 scale-95 -translate-y-2"
        >
          <div
            v-if="showLangDropdown"
            class="absolute top-full left-0 right-0 mt-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden z-50"
          >
            <!-- Persian Option -->
            <button
              @click="selectLanguage('fa')"
              class="w-full px-4 py-2.5 text-left transition-all flex items-center gap-2.5 backdrop-blur-sm"
              :class="
                currentLocale === 'fa'
                  ? 'bg-primary-500/20 text-primary-400'
                  : 'text-white/70 hover:bg-white/5 hover:text-white/90'
              "
            >
              <span class="text-lg">🇮🇷</span>
              <span class="text-sm font-medium flex-1">فارسی</span>
            </button>

            <!-- English Option -->
            <button
              @click="selectLanguage('en')"
              class="w-full px-4 py-2.5 text-left transition-all flex items-center gap-2.5 backdrop-blur-sm"
              :class="
                currentLocale === 'en'
                  ? 'bg-primary-500/20 text-primary-400'
                  : 'text-white/70 hover:bg-white/5 hover:text-white/90'
              "
            >
              <span class="text-lg">🇺🇸</span>
              <span class="text-sm font-medium flex-1">English</span>
            </button>
          </div>
        </transition>
      </div>
    </div>
  </aside>

  <!-- Mobile Sidebar (centered) -->
  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <aside
      v-if="isMobileMenuOpen"
      class="lg:hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 max-w-[90vw] bg-slate-900/95 dark:bg-slate-900/95 light:bg-white/95 backdrop-blur-xl border-2 border-slate-800/50 dark:border-slate-800/50 light:border-slate-300/50 rounded-2xl z-50 shadow-2xl py-6"
    >
      <!-- Navigation -->
      <nav class="px-8 py-2">
        <ul class="space-y-2">
          <li v-for="item in menuItems" :key="item.href">
            <a
              :href="item.href"
              @click="scrollToSection(item.href)"
              :class="[
                'flex items-center gap-3 py-1.5 transition-all duration-300 group relative',
                activeSection === item.href
                  ? 'text-primary-400'
                  : 'text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900',
              ]"
            >
              <!-- Icon -->
              <component
                :is="item.icon"
                :size="20"
                :class="[
                  'transition-all duration-300',
                  activeSection === item.href
                    ? 'text-primary-400'
                    : 'text-slate-500 dark:text-slate-500 light:text-slate-400 group-hover:text-primary-500',
                ]"
              />

              <span
                :class="[
                  'text-base font-normal transition-colors',
                  activeSection === item.href
                    ? 'font-medium text-primary-400'
                    : '',
                ]"
                >{{ $t(`nav.${item.key}`) }}</span
              >
            </a>
          </li>
        </ul>
      </nav>

      <!-- Social Links -->
      <div class="px-6 mt-4 mb-3">
        <div class="flex gap-1.5 justify-center items-center">
          <a
            href="tel:+989058207731"
            class="w-10 h-10 rounded-full bg-slate-800/50 dark:bg-slate-800/50 light:bg-slate-200/80 flex items-center justify-center hover:bg-gradient-to-br hover:from-primary-500 hover:to-purple-500 transition-all hover:scale-110 group"
            title="0905 820 7731"
          >
            <Phone
              :size="18"
              class="text-slate-400 dark:text-slate-400 light:text-slate-600 group-hover:text-white transition-colors"
            />
          </a>
          <a
            href="mailto:hosseinnighazal@gmail.com"
            class="w-10 h-10 rounded-full bg-slate-800/50 dark:bg-slate-800/50 light:bg-slate-200/80 flex items-center justify-center hover:bg-gradient-to-br hover:from-primary-500 hover:to-purple-500 transition-all hover:scale-110 group"
            title="hosseinnighazal@gmail.com"
          >
            <Mail
              :size="18"
              class="text-slate-400 dark:text-slate-400 light:text-slate-600 group-hover:text-white transition-colors"
            />
          </a>
          <a
            href="https://t.me/ghazalhosseinnii"
            target="_blank"
            class="w-10 h-10 rounded-full bg-slate-800/50 dark:bg-slate-800/50 light:bg-slate-200/80 flex items-center justify-center hover:bg-gradient-to-br hover:from-primary-500 hover:to-purple-500 transition-all hover:scale-110 group"
            title="Telegram: ghazalhosseinnii"
          >
            <svg
              class="w-5 h-5 text-slate-400 dark:text-slate-400 light:text-slate-600 group-hover:text-white transition-colors"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.155.232.171.325.016.093.036.305.02.469z"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/ghazalhosseinnii"
            target="_blank"
            class="w-10 h-10 rounded-full bg-slate-800/50 dark:bg-slate-800/50 light:bg-slate-200/80 flex items-center justify-center hover:bg-gradient-to-br hover:from-primary-500 hover:to-purple-500 transition-all hover:scale-110 group"
            title="Instagram: ghazalhosseinnii"
          >
            <svg
              class="w-5 h-5 text-slate-400 dark:text-slate-400 light:text-slate-600 group-hover:text-white transition-colors"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              />
            </svg>
          </a>
          <a
            href="https://wa.me/989058207731"
            target="_blank"
            class="w-10 h-10 rounded-full bg-slate-800/50 dark:bg-slate-800/50 light:bg-slate-200/80 flex items-center justify-center hover:bg-gradient-to-br hover:from-primary-500 hover:to-purple-500 transition-all hover:scale-110 group"
            title="WhatsApp: 0905 820 7731"
          >
            <svg
              class="w-5 h-5 text-slate-400 dark:text-slate-400 light:text-slate-600 group-hover:text-white transition-colors"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
              />
            </svg>
          </a>
        </div>
      </div>

      <!-- Language Selector -->
      <div class="px-6 mt-6">
        <div class="relative" ref="langDropdownRef">
          <!-- Language Button -->
          <button
            @click="toggleLangDropdown"
            class="w-full group relative px-4 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg flex items-center justify-between hover:bg-white/10 transition-all duration-300"
          >
            <div class="flex items-center gap-2.5">
              <Languages :size="16" class="text-white/70" />
              <span class="text-sm font-medium text-white/90">
                {{ currentLocale === "fa" ? "فارسی" : "English" }}
              </span>
            </div>
            <ChevronDown
              :size="16"
              class="text-white/50 transition-transform duration-300"
              :class="showLangDropdown ? 'rotate-180' : ''"
            />
          </button>

          <!-- Dropdown -->
          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 scale-95 -translate-y-2"
            enter-to-class="opacity-100 scale-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 scale-100 translate-y-0"
            leave-to-class="opacity-0 scale-95 -translate-y-2"
          >
            <div
              v-if="showLangDropdown"
              class="absolute top-full left-0 right-0 mt-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden z-50"
            >
              <!-- Persian Option -->
              <button
                @click="selectLanguage('fa')"
                class="w-full px-4 py-2.5 text-left transition-all flex items-center gap-2.5 backdrop-blur-sm"
                :class="
                  currentLocale === 'fa'
                    ? 'bg-primary-500/20 text-primary-400'
                    : 'text-white/70 hover:bg-white/5 hover:text-white/90'
                "
              >
                <span class="text-lg">🇮🇷</span>
                <span class="text-sm font-medium flex-1">فارسی</span>
              </button>

              <!-- English Option -->
              <button
                @click="selectLanguage('en')"
                class="w-full px-4 py-2.5 text-left transition-all flex items-center gap-2.5 backdrop-blur-sm"
                :class="
                  currentLocale === 'en'
                    ? 'bg-primary-500/20 text-primary-400'
                    : 'text-white/70 hover:bg-white/5 hover:text-white/90'
                "
              >
                <span class="text-lg">🇺🇸</span>
                <span class="text-sm font-medium flex-1">English</span>
              </button>
            </div>
          </transition>
        </div>
      </div>

      <!-- Resume Download Button -->
      <!-- <div class="px-8 mt-3">
      <a 
        href="/Modern Professional CV Resume.pdf" 
        download="Ghazal_Hosseinni_Resume.pdf"
        class="relative flex items-center justify-center gap-2 w-full px-5 py-2.5 bg-slate-700 dark:bg-slate-700 light:bg-slate-300 rounded-xl font-medium text-white dark:text-white light:text-slate-800 hover:bg-gradient-to-r hover:from-primary-600 hover:to-purple-600 hover:text-white hover:shadow-2xl hover:shadow-primary-500/50 transition-all hover:scale-105 text-sm overflow-hidden group"
      >
        <Download :size="16" />
        <span>{{ $t('nav.downloadResume') }}</span>
      </a>
    </div> -->
    </aside>
  </transition>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
import { useTheme } from "../composables/useTheme";
import {
  Home,
  User,
  TrendingUp,
  FileText,
  Briefcase,
  Mail,
  Phone,
  Download,
  Menu,
  X,
  Languages,
  ChevronDown,
  Building2,
} from "lucide-vue-next";

const isMobileMenuOpen = ref(false);
const showLangDropdown = ref(false);
const langDropdownRef = ref(null);

const { locale } = useI18n();
const { isDark, toggleTheme: toggleThemeFunc, loadTheme } = useTheme();

const activeSection = ref("#hero");
const currentLocale = computed(() => locale.value);

const menuItems = [
  { href: "#hero", key: "home", icon: Home },
  { href: "#about", key: "about", icon: User },
  { href: "#skills", key: "skills", icon: TrendingUp },
  { href: "#resume", key: "resume", icon: FileText },
  { href: "#experience", key: "experience", icon: Building2 },
  // { href: "#services", key: "services", icon: Briefcase },
  { href: "#contact", key: "contact", icon: Mail },
];

const toggleLangDropdown = () => {
  showLangDropdown.value = !showLangDropdown.value;
};

const selectLanguage = (lang) => {
  locale.value = lang;
  localStorage.setItem("locale", lang);
  document.documentElement.setAttribute("dir", lang === "fa" ? "rtl" : "ltr");
  showLangDropdown.value = false;
};

const toggleTheme = () => {
  toggleThemeFunc();
};

const scrollToSection = (href) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    activeSection.value = href;
    isMobileMenuOpen.value = false;
    // Notify button to sync state
    window.dispatchEvent(new Event("sidebar-closed"));
  }
};

const setActive = (href) => {
  activeSection.value = href;
  isMobileMenuOpen.value = false;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  // Notify button to sync state
  if (!isMobileMenuOpen.value) {
    window.dispatchEvent(new Event("sidebar-closed"));
  }
};

const handleClickOutside = (event) => {
  if (langDropdownRef.value && !langDropdownRef.value.contains(event.target)) {
    showLangDropdown.value = false;
  }
};

const handleScroll = () => {
  const sections = menuItems
    .map((item) => ({
      id: item.href,
      element: document.querySelector(item.href),
    }))
    .filter((s) => s.element);

  // Use top of viewport + a small offset for detection
  const triggerPoint = window.scrollY + 200;

  // Find the current section based on scroll position
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i];
    const sectionTop = section.element.offsetTop;

    // If we've scrolled past the start of this section
    if (triggerPoint >= sectionTop) {
      activeSection.value = section.id;
      return;
    }
  }

  // Default to first section if nothing matches
  if (sections.length > 0) {
    activeSection.value = sections[0].id;
  }
};

onMounted(() => {
  loadTheme();
  document.documentElement.setAttribute(
    "dir",
    locale.value === "fa" ? "rtl" : "ltr"
  );
  document.addEventListener("click", handleClickOutside);
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Initial check

  // Listen for mobile menu toggle from ThemeLanguageControls
  window.addEventListener("toggle-mobile-menu", (e) => {
    isMobileMenuOpen.value = e.detail.isOpen;
  });
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
  window.removeEventListener("scroll", handleScroll);
});
</script>
