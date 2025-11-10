# ⚡ راهنمای سریع: Deploy پروژه فرعی

## 📝 خلاصه 3 قدمی

### قدم 1: در پروژه خودتون
```javascript
// vite.config.js
export default defineConfig({
  plugins: [vue()],
  base: '/todo-app/',  // نام پروژه
})
```

### قدم 2: Push به GitHub
```powershell
cd مسیر\پروژه
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/ghazalhosseinni/todo-app.git
git branch -M main
git push -u origin main
```

### قدم 3: فعال‌سازی Pages
1. GitHub > Settings > Pages
2. Branch: main, Folder: / (root)
3. Save

✅ سایت: `https://ghazalhosseinni.github.io/todo-app`

---

## 🔗 لینک دادن از سایت اصلی

در سایت اصلی (`ghazalhosseinni.github.io`):

```vue
<a href="https://ghazalhosseinni.github.io/todo-app">
  مشاهده پروژه Todo App
</a>
```

---

## 📋 چک لیست سریع

- [ ] `base: '/نام-پروژه/'` در vite.config.js
- [ ] Build تست کنید: `npm run build && npm run preview`
- [ ] Repository در GitHub بسازید
- [ ] Push کنید
- [ ] Pages فعال کنید
- [ ] لینک در سایت اصلی اضافه کنید

---

برای جزئیات بیشتر: `HOW_TO_ADD_SUB_PROJECTS.md` را بخوانید.
