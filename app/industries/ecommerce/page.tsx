import InternalPage from "@/components/internal-page"
import { ShoppingBag, Sparkles, Repeat2, Gauge } from "lucide-react"

export default function Page() {
  return (
    <InternalPage
      title="التجارة الإلكترونية"
      englishTitle="ECOMMERCE"
      subtitle="نمو المبيعات عبر تحسين القنوات وإبداع يحفّز التحويل."
      breadcrumbs={[{ label: "الرئيسية", href: "/" }, { label: "التجارة الإلكترونية" }]}
      heroIcon={ShoppingBag}
      sections={[
        {
          title: "ما الذي نركّز عليه؟",
          bullets: ["زرع الثقة.", "تحسين صفحات المنتج.", "استراتيجيات إعادة الاستهداف."],
          icon: Sparkles,
        },
        {
          title: "الاحتفاظ والتكرار",
          bullets: ["قوائم إعادة التسويق.", "تقسيم حسب سلوك الشراء.", "عروض مخصصة لعملاء سابقين."],
          icon: Repeat2,
        },
        {
          title: "قياس الأداء",
          bullets: ["قيمة الطلب.", "معدل التحويل.", "ROAS حسب القناة."],
          icon: Gauge,
        },
      ]}
      cta={{ label: "اطلب خطة نمو", href: "/contact-us" }}
    />
  )
}
