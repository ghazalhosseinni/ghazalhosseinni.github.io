# 🚀 راهنمای اضافه کردن پروژه‌های فرعی

این راهنما به شما کمک می‌کنه پروژه‌های Vue یا وب دیگه رو در مسیرهای فرعی سایت اصلیتون قرار بدید.

**مثال:**
- سایت اصلی: `https://ghazalhosseinni.github.io`
- پروژه 1: `https://ghazalhosseinni.github.io/todo-app`
- پروژه 2: `https://ghazalhosseinni.github.io/calculator`

---

## 🎯 روش 1: Repository جداگانه (پیشنهادی ⭐)

این روش حرفه‌ای‌تر و مدیریت آسان‌تری داره.

### مرحله 1: آماده‌سازی پروژه

#### گام 1-1: تنظیم Base Path در پروژه Vue

در پروژه Vue خودتون، فایل `vite.config.js` یا `vue.config.js` رو باز کنید:

**برای Vite:**
```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/todo-app/',  // نام پروژه رو اینجا بنویسید
  server: {
    port: 3000,
    open: true
  }
})
```

**برای Vue CLI:**
```javascript
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/todo-app/'
    : '/'
}
```

⚠️ **مهم:** `/todo-app/` رو با نام پروژه خودتون عوض کنید!

#### گام 1-2: تست محلی
```powershell
npm run build
npm run preview
```

مطمئن بشید که همه چیز درست کار می‌کنه.

---

### مرحله 2: آپلود به GitHub

#### گام 2-1: ساخت Repository جدید
1. به GitHub برید: https://github.com/new
2. نام repository: `todo-app` (همون نامی که در base گذاشتید)
3. Public را انتخاب کنید
4. **هیچی رو تیک نزنید**
5. Create repository

#### گام 2-2: Push کردن کد
```powershell
# در پوشه پروژه
cd مسیر\پروژه

# ساخت .gitignore
# (محتوای .gitignore رو از فایل اصلی کپی کنید)

git init
git add .
git commit -m "Initial commit: Todo app project"
git remote add origin https://github.com/ghazalhosseinni/todo-app.git
git branch -M main
git push -u origin main
```

---

### مرحله 3: فعال‌سازی GitHub Pages

#### گام 3-1: تنظیمات Pages
1. به repository برید: https://github.com/ghazalhosseinni/todo-app
2. Settings > Pages
3. **Source:** Deploy from a branch
4. **Branch:** main
5. **Folder:** / (root)
6. Save

#### گام 3-2: منتظر Deploy بمانید
- حدود 2-5 دقیقه طول می‌کشه
- صفحه رو refresh کنید
- وقتی آماده شد می‌نویسه:
  ```
  Your site is live at https://ghazalhosseinni.github.io/todo-app/
  ```

---

## 🎯 روش 2: استفاده از GitHub Actions (حرفه‌ای‌تر)

این روش خودکار‌تر هست و build رو در GitHub انجام میده.

### مرحله 1: ساخت Workflow فایل

در پروژه خودتون، این فایل رو بسازید:
`.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### مرحله 2: Push و فعال‌سازی

1. کد رو push کنید
2. Settings > Pages > Source: **GitHub Actions**
3. منتظر بمانید تا workflow اجرا بشه

---

## 📝 مرحله 4: لینک دادن از سایت اصلی

حالا باید در سایت اصلیتون (`ghazalhosseinni.github.io`) یک صفحه یا بخش Projects بسازید که به این پروژه‌ها لینک بده.

### روش 1: افزودن به صفحه اصلی

در فایل `src/components/Projects.vue` (یا هر جای دیگه که می‌خواید):

```vue
<template>
  <section id="projects" class="py-20 px-4">
    <div class="container mx-auto">
      <h2 class="text-4xl font-bold text-center mb-12">
        پروژه‌های من
      </h2>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- پروژه 1 -->
        <a
          href="https://ghazalhosseinni.github.io/todo-app"
          target="_blank"
          class="group relative bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all"
        >
          <h3 class="text-xl font-bold mb-2">Todo App</h3>
          <p class="text-slate-400 mb-4">
            یک برنامه مدیریت کارها با Vue.js
          </p>
          <span class="text-primary-400 group-hover:translate-x-2 transition-transform inline-block">
            مشاهده پروژه →
          </span>
        </a>

        <!-- پروژه 2 -->
        <a
          href="https://ghazalhosseinni.github.io/calculator"
          target="_blank"
          class="group relative bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all"
        >
          <h3 class="text-xl font-bold mb-2">Calculator</h3>
          <p class="text-slate-400 mb-4">
            ماشین حساب ساده با Vue.js
          </p>
          <span class="text-primary-400 group-hover:translate-x-2 transition-transform inline-block">
            مشاهده پروژه →
          </span>
        </a>

        <!-- پروژه‌های بیشتر... -->
      </div>
    </div>
  </section>
</template>
```

### روش 2: با Array و Loop

```vue
<template>
  <section id="projects" class="py-20 px-4">
    <div class="container mx-auto">
      <h2 class="text-4xl font-bold text-center mb-12">
        پروژه‌های من
      </h2>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a
          v-for="project in projects"
          :key="project.name"
          :href="project.link"
          target="_blank"
          class="group relative bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all"
        >
          <h3 class="text-xl font-bold mb-2">{{ project.name }}</h3>
          <p class="text-slate-400 mb-4">{{ project.description }}</p>
          <span class="text-primary-400 group-hover:translate-x-2 transition-transform inline-block">
            مشاهده پروژه →
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    name: 'Todo App',
    description: 'یک برنامه مدیریت کارها با Vue.js',
    link: 'https://ghazalhosseinni.github.io/todo-app'
  },
  {
    name: 'Calculator',
    description: 'ماشین حساب ساده با Vue.js',
    link: 'https://ghazalhosseinni.github.io/calculator'
  },
  {
    name: 'Weather App',
    description: 'برنامه هواشناسی با API',
    link: 'https://ghazalhosseinni.github.io/weather-app'
  }
]
</script>
```

---

## 📋 چک لیست برای هر پروژه جدید

- [ ] در `vite.config.js` تنظیم `base: '/نام-پروژه/'`
- [ ] Build و test محلی: `npm run build && npm run preview`
- [ ] ساخت repository جدید در GitHub
- [ ] Push کردن کد
- [ ] فعال‌سازی GitHub Pages
- [ ] افزودن لینک در سایت اصلی

---

## 🎯 مثال کامل: یک پروژه Todo App

### 1. در پروژه Todo App:

**vite.config.js:**
```javascript
export default defineConfig({
  plugins: [vue()],
  base: '/todo-app/',
})
```

### 2. Build و Push:
```powershell
cd C:\Projects\todo-app
npm run build
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/ghazalhosseinni/todo-app.git
git branch -M main
git push -u origin main
```

### 3. GitHub Pages:
- Settings > Pages > Deploy from branch: main
- منتظر بمانید...
- سایت: https://ghazalhosseinni.github.io/todo-app

### 4. در سایت اصلی:
لینک اضافه کنید:
```vue
<a href="https://ghazalhosseinni.github.io/todo-app">
  Todo App
</a>
```

---

## ⚠️ نکات مهم

### 1. Base Path
همیشه `base` رو در `vite.config.js` تنظیم کنید، وگرنه فایل‌های CSS/JS لود نمی‌شن!

### 2. نام Repository = نام در Base
نام repository باید با نامی که در `base` گذاشتید یکی باشه:
- Repository: `todo-app`
- Base: `/todo-app/`

### 3. تست قبل از Deploy
همیشه با `npm run preview` تست کنید که build درست کار می‌کنه.

### 4. حافظه GitHub
GitHub Pages برای هر repository محدودیت حجم داره (حدود 1GB).

---

## 🎉 تبریک!

حالا می‌تونید پروژه‌های مختلف رو در آدرس‌های جداگانه داشته باشید و همه رو از یک سایت اصلی مدیریت کنید!

**ساختار نهایی:**
```
https://ghazalhosseinni.github.io/          ← سایت اصلی (پورتفولیو)
https://ghazalhosseinni.github.io/todo-app  ← پروژه 1
https://ghazalhosseinni.github.io/calculator ← پروژه 2
https://ghazalhosseinni.github.io/weather   ← پروژه 3
```

موفق باشید! 🚀
