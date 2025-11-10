# 📚 راهنمای افزودن پروژه‌های Vue به Resume

## روش افزودن پروژه جدید

### مرحله 1: ویرایش فایل Resume.vue

فایل را باز کنید: `src/components/Resume.vue`

### مرحله 2: پیدا کردن بخش projects

خط ۱۴۰ تا ۱۶۵ را پیدا کنید:

```javascript
const projects = [
  {
    title: 'Nice Shop',
    year: '2025',
    link: './Nice-Shop/index.html',
    icon: ShoppingBag,
    description: 'Modern e-commerce platform...'
  },
  // ... سایر پروژه‌ها
]
```

### مرحله 3: افزودن پروژه جدید

پروژه جدید را به آرایه اضافه کنید:

```javascript
const projects = [
  // پروژه‌های موجود...
  
  {
    title: 'نام پروژه شما',
    year: '2025',
    link: './مسیر-پروژه/index.html',  // یا لینک آنلاین
    icon: Briefcase,  // یا هر آیکون دیگری
    description: 'توضیحات پروژه به فارسی یا انگلیسی'
  }
]
```

### مرحله 4: انتخاب آیکون مناسب

آیکون‌های موجود از lucide-vue-next:

```javascript
// در بالای فایل import کنید:
import { 
  Briefcase,    // کیف کار
  ShoppingBag,  // فروشگاه
  Store,        // مغازه
  Sparkles,     // درخشش
  Home,         // خانه
  Code,         // کد
  Layout,       // لی‌اوت
  Globe,        // جهانی
  Smartphone,   // موبایل
  // ... هر آیکون دیگری
} from 'lucide-vue-next'
```

## مثال کامل

```javascript
const projects = [
  {
    title: 'پروژه Vue Todo App',
    year: '2025',
    link: 'https://my-vue-todo.netlify.app',
    icon: Code,
    description: 'یک اپلیکیشن Todo با Vue 3, Composition API و Tailwind CSS'
  },
  {
    title: 'Dashboard Admin Panel',
    year: '2025',
    link: './projects/admin-panel/index.html',
    icon: Layout,
    description: 'پنل ادمین مدرن با نمودارها و آمار لحظه‌ای'
  },
  {
    title: 'پروژه فروشگاه آنلاین',
    year: '2024',
    link: './projects/online-shop/index.html',
    icon: ShoppingBag,
    description: 'فروشگاه آنلاین کامل با سبد خرید و درگاه پرداخت'
  }
]
```

## نکات مهم

### 1. لینک پروژه
- **لینک آنلاین**: مستقیم URL وارد کنید
  ```javascript
  link: 'https://my-project.com'
  ```

- **فایل لوکال**: مسیر نسبی از root پروژه
  ```javascript
  link: './my-project/index.html'
  ```

### 2. ساختار فولدر برای پروژه‌های لوکال

```
protofilo/
├── public/
│   └── projects/          ← پروژه‌ها را اینجا بگذارید
│       ├── nice-shop/
│       │   └── index.html
│       ├── todo-app/
│       │   ├── index.html
│       │   ├── css/
│       │   └── js/
│       └── admin-panel/
│           └── index.html
```

سپس لینک را اینجور بنویسید:
```javascript
link: '/projects/todo-app/index.html'
```

### 3. ترجمه فارسی/انگلیسی

برای نمایش متن به دو زبان، می‌توانید از i18n استفاده کنید.

در `src/i18n/locales/fa.json`:
```json
{
  "projects": {
    "todoApp": {
      "title": "اپلیکیشن Todo",
      "desc": "مدیریت کارها با Vue"
    }
  }
}
```

در `src/i18n/locales/en.json`:
```json
{
  "projects": {
    "todoApp": {
      "title": "Todo Application",
      "desc": "Task management with Vue"
    }
  }
}
```

در Resume.vue:
```javascript
{
  title: this.$t('projects.todoApp.title'),
  description: this.$t('projects.todoApp.desc'),
  // ...
}
```

## خلاصه مراحل

1. ✅ فایل `src/components/Resume.vue` را باز کنید
2. ✅ بخش `const projects = [...]` را پیدا کنید
3. ✅ پروژه جدید را به آرایه اضافه کنید
4. ✅ آیکون مناسب را import و استفاده کنید
5. ✅ ذخیره کنید - تغییرات خودکار اعمال می‌شود!

## مثال سریع (Copy-Paste)

```javascript
// در بالای فایل اضافه کنید:
import { YourIcon } from 'lucide-vue-next'

// در آرایه projects اضافه کنید:
{
  title: 'پروژه من',
  year: '2025',
  link: '/projects/my-project/index.html',
  icon: YourIcon,
  description: 'توضیحات پروژه'
}
```

---

**تمام!** پروژه شما الان در بخش Resume نمایش داده می‌شود 🎉
