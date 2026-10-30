# Sparsh Architecture — Next.js

موقع متعدد الصفحات لشركة هندسة معمارية، مبني بـ **Next.js 16** (App Router) و**React 19**، ويُنشر كموقع ثابت على GitHub Pages.

## المحتوى

- **الصفحات:** الرئيسية، من نحن، المشاريع (مع صفحة لكل مشروع)، الخدمات، المدونة، التواصل، طلب تقدير، وصفحات المعلومات
- **سلايدرات React:** سلايدر رئيسي وسلايدر آراء العملاء
- **قائمة جانبية** بقوائم فرعية
- **خريطة** موقع بدون مفتاح API
- **نشر تلقائي** على GitHub Pages عبر GitHub Actions عند كل push على `main`

## التشغيل

```bash
cd Architecture
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
  HeroCarousel.js    سلايدر البطل (client)
  TestimonialCarousel.js  سلايدر آراء العملاء (client)
  ContactMap.js      خريطة بصيغة iframe بدون مفتاح API (client)
public/              الأصول: img/ css/ vendor/
```
