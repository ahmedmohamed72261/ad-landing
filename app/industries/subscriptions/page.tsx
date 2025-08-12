import InternalPage from "@/components/internal-page"
import { BadgePercent, RefreshCcw, TrendingUp } from "lucide-react"

export default function Page() {
  return (
    <InternalPage
      title="الخدمات والاشتراكات"
      englishTitle="SUBSCRIPTIONS"
      subtitle="استراتيجيات اكتساب واحتفاظ محسّنة للدورات الشهرية."
      breadcrumbs={[{ label: "الرئيسية", href: "/" }, { label: "الخدمات والاشتراكات" }]}
      heroIcon={BadgePercent}
      sections={[
        {
          title: "المؤشرات الرئيسية",
          bullets: ["تقليل CAC.", "رفع LTV.", "تقليل الإلغاء (Churn)."],
          icon: TrendingUp,
        },
        {
          title: "حملات احتفاظ",
          bullets: ["إيميلات تذكير.", "عروض ترقية.", "محتوى تعليمي داخل المنتج."],
          icon: RefreshCcw,
        },
      ]}
      cta={{ label: "حسّن نمو الاشتراكات", href: "/contact-us" }}
    />
  )
}
