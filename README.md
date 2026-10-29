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
