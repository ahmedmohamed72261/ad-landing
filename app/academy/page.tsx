import dynamic from 'next/dynamic'
import { GraduationCap, BookOpen, Presentation } from "lucide-react"

// Dynamically import the InternalPage component with SSR disabled to improve build time
const InternalPage = dynamic(() => import("@/components/internal-page"), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-black flex items-center justify-center text-white">جاري التحميل...</div>
})

export default function Page() {
  return (
    <InternalPage
      title="أكاديمية الإعلانات"
      englishTitle="ACADEMY"
      subtitle="مسارات تعليمية قصيرة وعملية لرفع أدائك الإعلاني بسرعة."
      breadcrumbs={[{ label: "الرئيسية", href: "/" }, { label: "أكاديمية الإعلانات" }]}
      heroIcon={GraduationCap}
      highlights={[
        { label: "الدورات", value: "12+" },
        { label: "الشهادات", value: "Google/Meta" },
        { label: "المدة", value: "1–3 أسابيع" },
      ]}
      sections={[
        {
          title: "المسارات",
          bullets: ["أساسيات الحملات متعددة القنوات.", "تحسين الأداء وقياس العائد.", "الإبداع الإعلاني للمبيعات."],
          icon: BookOpen,
        },
        {
          title: "التطبيق العملي",
          paragraphs: ["مشاريع قصيرة واقعية مع بيانات حقيقية ولوحة تقييم واضحة."],
          bullets: ["Brief حقيقي.", "تسليم إعلان.", "مراجعة أداء."],
          icon: Presentation,
        },
      ]}
      faq={[
        { q: "هل الدورات مجانية؟", a: "هناك دورات مجانية ومدفوعة. التفاصيل في صفحة كل دورة." },
        { q: "هل توجد شهادة؟", a: "نعم بعد إتمام المسار ونجاح المشروع النهائي." },
      ]}
      cta={{ label: "اطلع على الدورات", href: "/blog" }}
    />
  )
}
