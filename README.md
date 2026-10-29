# Sparsh Architecture — Next.js

تحويل قالب Sparsh (HTML/jQuery الثابت) إلى تطبيق **Next.js 16** باستخدام App Router.

## التشغيل

```bash
cd sparsh-next
npm install
npm run dev     # وضع التطوير على http://localhost:3000
```

للإنتاج:

```bash
npm run build
npm start
```

## البنية

```
app/                 الصفحات (App Router)
  layout.js          التخطيط الجذري + روابط الـ CSS/الخطوط + القائمة المشتركة
  page.js            الرئيسية
  about/ projects/ service/ contact/ blog/ blog-single/ elements/
components/          مكوّنات قابلة لإعادة الاستخدام (Footer, PageBanner, Portfolio, ...)
  Shell.js           يدير حالة فتح القائمة الجانبية (client)
  SideMenu.js        القائمة الجانبية + القوائم الفرعية (client)
  HeroCarousel.js    سلايدر البطل — بديل React لـ Owl Carousel (client)
  TestimonialCarousel.js  سلايدر آراء العملاء (client)
  ContactMap.js      خريطة بصيغة iframe بدون مفتاح API (client)
public/              الأصول: img/ css/ vendor/ (منسوخة من المشروع الأصلي)
```

## ملاحظات التحويل

- **القائمة / السلايدرات:** استُبدل jQuery + Owl Carousel بحالة React (`useState`) ومكوّنات عميل.
- **الخريطة:** كانت تستخدم Google Maps JS API بمفتاح مضمّن؛ استُبدلت بـ embed بدون مفتاح.
- **`niceSelect`:** استُخدمت قوائم `<select>` الأصلية (بدون تحسين jQuery).
- **الصور المفقودة:** `img/about.png` و`img/hero-3.png` غير موجودة في المشروع الأصلي
  وأُبقيت المراجع كما هي (تظهر مكسورة تماماً كما في الأصل).
- **التنسيق:** `css/style.css` وBootstrap وThemify تُحمّل كروابط `<link>` كما في الأصل،
  مع `css/overrides.css` لأنماط السلايدرات الجديدة.
```
