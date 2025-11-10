# ⚡ راهنمای سریع Git & GitHub

## 🆕 پروژه جدید (اولین بار)

```powershell
# 1. رفتن به پوشه پروژه
cd مسیر\پروژه

# 2. ساخت .gitignore (فقط یک بار)
# فایل .gitignore رو دستی بسازید و node_modules و dist رو اضافه کنید

# 3. دستورات Git
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/repo-name.git
git branch -M main
git push -u origin main
```

---

## 🔄 آپدیت پروژه (تغییرات بعدی)

```powershell
git add .
git commit -m "توضیح تغییرات"
git push
```

---

## 🛠️ دستورات پرکاربرد

```powershell
# بررسی وضعیت
git status

# دیدن تاریخچه
git log --oneline

# لغو تغییرات
git checkout -- نام-فایل

# دیدن remote
git remote -v

# Pull (دریافت تغییرات از GitHub)
git pull
```

---

## 🔑 ساخت Personal Access Token

1. GitHub > Settings > Developer settings
2. Personal access tokens > Tokens (classic)
3. Generate new token (classic)
4. تیک بزنید: **repo**
5. Generate و کپی کنید

---

## 📋 مثال‌های پیام Commit خوب

✅ درست:
- `"Add navbar component"`
- `"Fix responsive design issues"`
- `"Update dependencies"`
- `"Remove unused code"`

❌ اشتباه:
- `"Update"`
- `"Changes"`
- `"Fix bug"`

---

## ⚠️ نکات مهم

- ✅ همیشه .gitignore بسازید
- ✅ پیام commit واضح بنویسید
- ❌ node_modules رو push نکنید
- ❌ فایل .env رو push نکنید

---

برای جزئیات بیشتر: `HOW_TO_PUSH_TO_GITHUB.md` را بخوانید.
