# راهنمای استقرار پورتفولیو در GitHub Pages

## ✅ کارهایی که انجام شده است:

### 1. نصب و پیکربندی AOS (Animate On Scroll)
- کتابخانه AOS نصب شد
- AOS طوری تنظیم شده که بعد از لودر شروع به کار می‌کند
- انیمیشن‌ها به بخش‌های Hero، About و Skills اضافه شدند

### 2. افزودن آیکون GitHub به Sidebar
- آیکون GitHub با لینک https://github.com/ghazalhosseinni به Sidebar اضافه شد
- هم در نسخه دسکتاپ و هم موبایل قابل مشاهده است

### 3. پیکربندی برای GitHub Pages
- فایل GitHub Actions برای deploy خودکار ایجاد شد
- تنظیمات Vite برای GitHub Pages آماده شد

---

## 📋 مراحل استقرار پروژه اصلی در GitHub Pages

### مرحله 1: آماده‌سازی گیت در پروژه
```bash
# در پوشه پروژه این دستورات را اجرا کنید
cd c:\Users\user1\Desktop\protofilo

# ایجاد مخزن گیت (اگر قبلاً ایجاد نکرده‌اید)
git init

# افزودن همه فایل‌ها
git add .

# کامیت اولیه
git commit -m "Initial commit: Portfolio project with AOS animations"
```

### مرحله 2: ایجاد مخزن در GitHub
1. به https://github.com/ghazalhosseinni بروید
2. روی دکمه **"New"** یا **"+"** (بالا سمت راست) کلیک کنید
3. نام مخزن را دقیقاً `ghazalhosseinni.github.io` بگذارید
4. Public را انتخاب کنید
5. **هیچ فایلی (README, .gitignore, license) اضافه نکنید**
6. روی **"Create repository"** کلیک کنید

### مرحله 3: اتصال پروژه به GitHub
```bash
# اضافه کردن remote
git remote add origin https://github.com/ghazalhosseinni/ghazalhosseinni.github.io.git

# تغییر نام برنچ به main (اگر master است)
git branch -M main

# ارسال کد به GitHub
git push -u origin main
```

### مرحله 4: فعال‌سازی GitHub Pages
1. به مخزن خود در GitHub بروید
2. به **Settings** > **Pages** بروید
3. در قسمت **Source** گزینه **"GitHub Actions"** را انتخاب کنید
4. کار تمام است! GitHub Actions به طور خودکار پروژه را build و deploy می‌کند

### مرحله 5: بررسی وضعیت Deploy
1. به تب **Actions** در GitHub بروید
2. اولین workflow را مشاهده کنید
3. منتظر بمانید تا دایره سبز شود (حدود 2-3 دقیقه)
4. سایت شما در https://ghazalhosseinni.github.io فعال می‌شود

---

## 📁 استقرار پروژه‌های Vue دیگر در مسیرهای فرعی

برای قرار دادن پروژه‌های دیگر در مسیرهایی مثل:
- https://ghazalhosseinni.github.io/projects/project1
- https://ghazalhosseinni.github.io/projects/project2

### روش 1: استفاده از پوشه‌های جداگانه در همان مخزن

#### برای هر پروژه Vue:

1. **در پروژه Vue خود این تنظیمات را انجام دهید:**

فایل `vite.config.js` یا `vue.config.js`:
```javascript
export default defineConfig({
  plugins: [vue()],
  base: '/projects/اسم-پروژه/',  // مثال: /projects/todo-app/
})
```

2. **پروژه را build کنید:**
```bash
npm run build
```

3. **پوشه dist را کپی کنید:**
- پوشه `dist` پروژه را به مسیر زیر در پروژه اصلی کپی کنید:
```
protofilo/
  public/
    projects/
      todo-app/        <- محتویات dist را اینجا بگذارید
      calculator/      <- پروژه دوم
      weather-app/     <- پروژه سوم
```

4. **تغییرات را commit و push کنید:**
```bash
cd c:\Users\user1\Desktop\protofilo
git add .
git commit -m "Add new Vue project: todo-app"
git push
```

### روش 2: استفاده از مخازن جداگانه (پیشنهادی‌تر)

برای هر پروژه Vue:

#### مرحله 1: آماده‌سازی پروژه
```bash
# در پوشه پروژه Vue
cd path/to/your/vue-project

# تنظیم base در vite.config.js
# base: '/projects/اسم-پروژه/'
```

#### مرحله 2: ایجاد مخزن GitHub
1. یک مخزن جدید در GitHub بسازید (مثلاً `todo-app`)
2. مخزن را Public نگه دارید

#### مرحله 3: آپلود کد
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/ghazalhosseinni/todo-app.git
git branch -M main
git push -u origin main
```

#### مرحله 4: Deploy با GitHub Actions
فایل `.github/workflows/deploy.yml` را ایجاد کنید:
```yaml
name: Deploy Project

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

#### مرحله 5: تنظیم GitHub Pages
1. Settings > Pages
2. Source: **GitHub Actions**
3. منتظر deploy بمانید

#### مرحله 6: لینک در پروژه اصلی
سپس در پروژه اصلی (`ghazalhosseinni.github.io`) یک صفحه projects ایجاد کنید که به این پروژه‌ها لینک دهد.

---

## 🔄 آپدیت کردن پروژه

هر بار که تغییری در کد دادید:
```bash
# در پوشه پروژه
git add .
git commit -m "توضیح تغییرات"
git push

# GitHub Actions به طور خودکار سایت را آپدیت می‌کند
```

---

## ❓ مشکلات رایج و راه‌حل‌ها

### سایت بعد از deploy کار نمی‌کند
- منتظر بمانید 5-10 دقیقه
- cache مرورگر را پاک کنید (Ctrl + Shift + R)
- به Actions > workflow جدید بروید و خطاها را بررسی کنید

### فایل‌های CSS/JS لود نمی‌شوند
- مطمئن شوید `base: '/'` در `vite.config.js` درست است
- برای پروژه‌های فرعی: `base: '/projects/اسم-پروژه/'`

### انیمیشن‌های AOS کار نمی‌کنند
- Console مرورگر را باز کنید و خطاها را بررسی کنید
- مطمئن شوید که بعد از لودر صفحه را رفرش کرده‌اید

---

## 📞 نکات مهم

1. **همیشه قبل از push، کد را تست کنید:**
```bash
npm run dev
```

2. **برای build محلی:**
```bash
npm run build
npm run preview
```

3. **تغییرات GitHub Pages تا 10 دقیقه طول می‌کشد**

4. **پوشه `dist` را به git اضافه نکنید** (در .gitignore است)

---

## 🎉 تبریک!

پروژه شما آماده است! سایت شما در:
- **سایت اصلی:** https://ghazalhosseinni.github.io
- **پروژه‌های فرعی:** https://ghazalhosseinni.github.io/projects/[نام-پروژه]

موفق باشید! 🚀
