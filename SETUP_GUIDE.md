# راهنمای راه‌اندازی پروژه / Setup Guide

## نصب پکیج‌ها / Install Dependencies

```bash
npm install
```

## اجرای پروژه / Run Development Server

```bash
npm run dev
```

پروژه روی آدرس `http://localhost:3000` اجرا خواهد شد.

## افزودن فایل PDF رزومه / Add Resume PDF

فایل رزومه خود را با نام `resume.pdf` در مسیر زیر قرار دهید:

```
public/resume.pdf
```

## ساختار پوشه‌ها / Folder Structure

```
protofilo/
├── public/                  # فایل‌های استاتیک
│   ├── resume.pdf          # فایل PDF رزومه شما
│   └── images/             # تصاویر
├── src/
│   ├── components/         # کامپوننت‌های Vue
│   │   ├── Header.vue      # هدر با امکانات چندزبانه و تم
│   │   ├── Hero.vue
│   │   ├── About.vue
│   │   ├── Skills.vue
│   │   ├── Resume.vue
│   │   ├── Services.vue
│   │   ├── Contact.vue
│   │   ├── Footer.vue
│   │   └── ScrollToTop.vue
│   ├── composables/        # توابع قابل استفاده مجدد
│   │   └── useTheme.js     # مدیریت تم تاریک/روشن
│   ├── i18n/               # فایل‌های ترجمه
│   │   ├── index.js
│   │   └── locales/
│   │       ├── fa.json     # ترجمه فارسی
│   │       └── en.json     # ترجمه انگلیسی
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── index-vue.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## ویژگی‌های اضافه شده / New Features

### 1. تغییر زبان / Language Switcher
- دکمه تغییر زبان در گوشه چپ بالای صفحه
- پشتیبانی کامل از فارسی و انگلیسی
- تغییر خودکار جهت متن (RTL/LTR)
- ذخیره انتخاب کاربر در LocalStorage

### 2. تغییر تم / Theme Switcher
- دکمه تغییر تم در گوشه راست بالای صفحه
- تم تاریک و روشن
- پیش‌فرض: تم تاریک و زبان فارسی
- ذخیره انتخاب کاربر در LocalStorage

### 3. دکمه دانلود رزومه / Download Resume Button
- در هدر کنار منوها
- دانلود مستقیم فایل PDF
- طراحی جذاب با افکت‌های Hover

## ویرایش محتوا / Edit Content

### تغییر متن‌های فارسی
فایل: `src/i18n/locales/fa.json`

### تغییر متن‌های انگلیسی
فایل: `src/i18n/locales/en.json`

### تغییر رنگ‌بندی
فایل: `tailwind.config.js`

## بیلد پروژه / Build for Production

```bash
npm run build
```

فایل‌های نهایی در پوشه `dist/` ایجاد می‌شوند.

## نکات مهم / Important Notes

1. **فایل رزومه**: حتما فایل PDF خود را در `public/resume.pdf` قرار دهید
2. **تصاویر**: تصاویر پروفایل را در مسیر مناسب قرار دهید
3. **اطلاعات تماس**: ایمیل و شماره تلفن را در فایل‌های ترجمه تغییر دهید
4. **لینک‌های اجتماعی**: در کامپوننت Header لینک‌ها را به‌روز کنید

## پشتیبانی از مرورگرها / Browser Support

- Chrome (آخرین نسخه)
- Firefox (آخرین نسخه)
- Safari (آخرین نسخه)
- Edge (آخرین نسخه)

## تکنولوژی‌ها / Technologies

- ✅ Vue 3 (Composition API)
- ✅ Vite
- ✅ Tailwind CSS
- ✅ Vue I18n (چندزبانه)
- ✅ Lucide Icons
- ✅ VueUse

---

ساخته شده با ❤️ توسط غزال حسینی
Built with ❤️ by Ghazal Hosseinni
