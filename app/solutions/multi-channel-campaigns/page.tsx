import InternalPage from "@/components/internal-page"
import { LayoutGrid, BarChart3, Rocket, Palette, Puzzle, Gauge } from "lucide-react"

export default function Page() {
  return (
    <InternalPage
      title="إدارة الحملات متعددة المنصات"
      englishTitle="MULTI‑CHANNEL CAMPAIGNS"
      subtitle="لوحة واحدة لإطلاق موحّد، تقارير مركزية، وتخصيص تلقائي للمحتوى عبر القنوات."
      breadcrumbs={[
        { label: "الرئيسية", href: "/" },
        { label: "الحلول", href: "/solutions/multi-channel-campaigns" },
      ]}
      heroIcon={LayoutGrid}
      highlights={[
        { label: "تكاملات مباشرة", value: "7+" },
        { label: "وقت الإطلاق", value: "~10 دقائق" },
        { label: "تحسين تلقائي", value: "مستمر" },
      ]}
      sections={[
        {
          title: "إطلاق موحّد",
          paragraphs: ["أنشئ الحملة مرة واحدة، والنظام يوزّعها على القنوات وفق متطلباتها تلقائيًا."],
          bullets: ["قوالب جاهزة.", "أهداف واضحة.", "رفع تلقائي للأصول."],
          icon: Rocket,
        },
        {
          title: "تقارير مركزية",
          paragraphs: ["ROAS وCPA وCTR في مكان واحد مع إمكانية الحفر حسب القناة أو المجموعة الإعلانية."],
          bullets: ["تقسيم متقدم.", "مرشحات ذكية.", "تصدير CSV/Sheets."],
          icon: BarChart3,
        },
        {
          title: "تخصيص المحتوى",
          paragraphs: ["نصوص وصور تتكيّف مع كل منصة لرفع الملاءمة والنقرات دون تكرار يدوي."],
          bullets: ["تحويل مقاسات تلقائي.", "تحسين لغوي بسيط.", "اختبارات A/B سريعة."],
          icon: Palette,
        },
        {
          title: "التكامل",
          paragraphs: ["ربط بسيط مع متجرك وأدوات القياس ووسوم التحويل."],
          bullets: ["OAuth آمن.", "Webhooks.", "API للتكاملات الخاصة."],
          icon: Puzzle,
        },
        {
          title: "التحسين",
          paragraphs: ["تعديل الميزانية والمحتوى آليًا حسب الأداء وحدودك."],
          bullets: ["قواعد تلقائية.", "حدود تكلفة.", "تحويل ميزانية ديناميكي."],
          icon: Gauge,
        },
      ]}
      faq={[
        { q: "هل أحتاج حسابًا بكل منصة؟", a: "نعم، ثم تربطه مرة واحدة داخل المنصة لتفعيل التكامل." },
        { q: "هل يمكن ضبط ميزانية لكل قناة؟", a: "نعم؛ يدويًا أو تلقائيًا حسب الأداء." },
      ]}
      cta={{ label: "ابدأ حملة متعددة القنوات", href: "/contact-us" }}
    />
  )
}
