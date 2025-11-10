# مراحل آپلود پروژه به GitHub Pages

## قدم 1: ساخت مخزن در GitHub
1. به این لینک بروید: https://github.com/new
2. Repository name: `ghazalhosseinni.github.io` (دقیقاً همین نام)
3. Public را انتخاب کنید
4. **هیچ چیزی را تیک نزنید** (نه README، نه .gitignore، نه لایسنس)
5. روی Create repository کلیک کنید

## قدم 2: دستورات ترمینال را اجرا کنید

بعد از ساخت مخزن، این دستورات را در PowerShell اجرا کنید:

```powershell
# رفتن به پوشه پروژه
cd c:\Users\user1\Desktop\protofilo

# ایجاد مخزن گیت محلی
git init

# افزودن تمام فایل‌ها
git add .

# اولین commit
git commit -m "Initial commit: Portfolio with AOS animations"

# اتصال به GitHub
git remote add origin https://github.com/ghazalhosseinni/ghazalhosseinni.github.io.git

# تغییر نام branch به main
git branch -M main

# ارسال به GitHub
git push -u origin main
```

اگر Git از شما username و password خواست:
- Username: ghazalhosseinni
- Password: باید یک Personal Access Token بسازید (توضیح پایین)

## قدم 3: فعال‌سازی GitHub Pages

1. به مخزن خود بروید: https://github.com/ghazalhosseinni/ghazalhosseinni.github.io
2. بروید به: Settings (تب بالای صفحه)
3. از منوی سمت چپ: Pages را انتخاب کنید
4. در قسمت Source گزینه "GitHub Actions" را انتخاب کنید
5. ذخیره کنید

## قدم 4: منتظر Deploy بمانید

1. به تب Actions بروید
2. اولین workflow را مشاهده کنید
3. منتظر بمانید تا دایره سبز شود (2-3 دقیقه)
4. سایت شما فعال است: https://ghazalhosseinni.github.io

---

## ساخت Personal Access Token (اگر نیاز بود)

اگر Git از شما password خواست، باید Personal Access Token بسازید:

1. بروید به: https://github.com/settings/tokens
2. "Generate new token" > "Generate new token (classic)"
3. Note: بنویسید "Portfolio Deploy"
4. Expiration: 90 days یا No expiration
5. تیک بزنید روی: `repo` (تمام موارد زیر repo)
6. "Generate token" را کلیک کنید
7. توکن را کپی کنید (فقط یک بار نمایش داده می‌شود!)
8. از این توکن به جای password استفاده کنید

---

## آپدیت‌های بعدی

هر بار که تغییری دادید:
```powershell
git add .
git commit -m "توضیح تغییرات"
git push
```

✅ تمام!
