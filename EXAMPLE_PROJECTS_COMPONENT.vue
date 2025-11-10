<template>
  <section id="projects" class="py-20 px-4 bg-slate-900/50">
    <div class="container mx-auto max-w-6xl">
      <!-- عنوان -->
      <div class="text-center mb-16">
        <span class="inline-block px-6 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm font-semibold mb-4">
          پروژه‌ها
        </span>
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          نمونه کارهای من
        </h2>
        <p class="text-slate-400 max-w-2xl mx-auto">
          مجموعه‌ای از پروژه‌های وب که با Vue.js و تکنولوژی‌های مدرن ساخته شده‌اند
        </p>
      </div>

      <!-- گرید پروژه‌ها -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a
          v-for="project in projects"
          :key="project.id"
          :href="project.link"
          target="_blank"
          class="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-primary-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-500/20"
        >
          <!-- تصویر پروژه (اگر دارید) -->
          <div v-if="project.image" class="aspect-video bg-slate-900 overflow-hidden">
            <img 
              :src="project.image" 
              :alt="project.name"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            >
          </div>
          
          <!-- محتوا -->
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors">
              {{ project.name }}
            </h3>
            
            <p class="text-slate-400 text-sm mb-4">
              {{ project.description }}
            </p>

            <!-- تگ‌های تکنولوژی -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="px-2 py-1 bg-slate-700/50 text-xs rounded text-slate-300"
              >
                {{ tech }}
              </span>
            </div>

            <!-- دکمه -->
            <div class="flex items-center text-primary-400 text-sm font-medium">
              <span class="group-hover:translate-x-2 transition-transform">
                مشاهده پروژه
              </span>
              <svg 
                class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </div>

          <!-- Badge جدید (اختیاری) -->
          <div 
            v-if="project.isNew" 
            class="absolute top-4 right-4 bg-gradient-to-r from-primary-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full"
          >
            جدید
          </div>
        </a>
      </div>

      <!-- پیام اگر پروژه‌ای نیست -->
      <div v-if="projects.length === 0" class="text-center text-slate-400 py-12">
        <p class="text-lg">به زودی پروژه‌های جدید اضافه می‌شود...</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// لیست پروژه‌ها - اینجا پروژه‌های خودتون رو اضافه کنید
const projects = ref([
  {
    id: 1,
    name: 'Todo App',
    description: 'یک برنامه مدیریت کارها با قابلیت افزودن، حذف و ویرایش وظایف',
    link: 'https://ghazalhosseinni.github.io/todo-app',
    image: '/projects/todo-app.jpg', // اختیاری
    technologies: ['Vue 3', 'Tailwind CSS', 'Vite'],
    isNew: true
  },
  {
    id: 2,
    name: 'Calculator',
    description: 'ماشین حساب پیشرفته با رابط کاربری زیبا و عملکرد کامل',
    link: 'https://ghazalhosseinni.github.io/calculator',
    technologies: ['Vue 3', 'JavaScript', 'CSS3'],
    isNew: false
  },
  {
    id: 3,
    name: 'Weather App',
    description: 'برنامه هواشناسی با استفاده از API و نمایش اطلاعات دقیق',
    link: 'https://ghazalhosseinni.github.io/weather-app',
    technologies: ['Vue 3', 'API', 'Axios'],
    isNew: false
  },
  // پروژه‌های بیشتر...
])
</script>

<style scoped>
/* استایل‌های اضافی در صورت نیاز */
</style>
