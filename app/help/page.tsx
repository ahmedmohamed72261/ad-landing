import InternalPage from "@/components/internal-page"
import { HelpCircle, Search, PlugZap, Gauge, Shield } from "lucide-react"

export default function Page() {
  return (
    <InternalPage
      title="مركز المساعدة"
      englishTitle="HELP CENTER"
      subtitle="دليل شامل للإعداد والاستكشاف وإصلاح الأخطاء وقياس الأداء."
      breadcrumbs={[{ label: "الرئيسية", href: "/" }, { label: "مركز المساعدة" }]}
      heroIcon={HelpCircle}
      sections={[
        {
          title: "انطلق بسرعة",
          paragraphs: ["اتبع الخطوات الثلاث التالية لإطلاق حملتك الأولى خلال دقائق."],
          bullets: ["ربط القنوات (OAuth).", "تعريف الهدف (مبيعات/زيارات/ن Leads).", "إنشاء المواد الإعلانية وإطلاق."],
          icon: PlugZap,
        },
        {
          title: "استكشاف الأخطاء",
          paragraphs: ["أكثر الحالات شيوعًا وطريقة حلها بسرعة."],
          bullets: [
            "عدم ظهور الإعلانات: راجع حدود الميزانية والموافقة الإعلانية.",
            "قياس ناقص: تأكد من تثبيت وسوم التتبع وربط التحويلات.",
            "رفض إعلان: طابق النصوص مع صفحة الهبوط وأزل كلمات حساسة.",
          ],
          icon: Shield,
        },
        {
          title: "تحليل النتائج",
          paragraphs: ["اقرأ ROAS وCPA وCTR بشكل صحيح واتخذ قرارات مدروسة."],
          bullets: ["تجزئة حسب القناة.", "تحديد أفضل الشرائح.", "تحويل الميزانية حسب الأداء."],
          icon: Gauge,
        },
        {
          title: "البحث في قاعدة المعرفة",
          paragraphs: ["ابحث عن المقالات حسب الكلمة المفتاحية أو المجال."],
          bullets: ["سياسات القنوات.", "إعداد التتبّع.", "تحسين المحتوى."],
          icon: Search,
        },
      ]}
      faq={[
        { q: "أين أجد وسوم التتبّع؟", a: "من لوحة المنصة > الإعدادات > القياس والتتبّع." },
        { q: "هل تدعمون CM360/GA4؟", a: "نعم، عبر تكاملات جاهزة موثّقة." },
      ]}
      cta={{ label: "لا زلت تحتاج مساعدة؟ تواصل معنا", href: "/contact-us" }}
    />
  )
}
