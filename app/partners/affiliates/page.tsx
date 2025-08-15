"use client"

import InternalPage from "@/components/internal-page"
import { Link2, Coins, BarChart3 } from "lucide-react"

export default function Page() {
  return (
    <InternalPage
      title="انضم كمسوّق بالعمولة"
      englishTitle="AFFILIATE PROGRAM"
      subtitle="اكسب عمولات على كل متجر أو حملة تحيلها."
      breadcrumbs={[{ label: "الرئيسية", href: "/" }, { label: "انضم كمسوّق بالعمولة" }]}
      heroIcon={Link2}
      sections={[
        {
          title: "كيف تعمل؟",
          bullets: ["سجل حسابك.", "احصل على رابط إحالة.", "تابع العمولات من لوحة التقارير."],
          icon: Coins,
        },
        {
          title: "ما الذي نقيسه؟",
          bullets: ["زيارات الإحالة.", "طلبات الاشتراك.", "الحملات المفعلة.", "عمولات صافية."],
          icon: BarChart3,
        },
      ]}
      cta={{ label: "ابدأ الآن", href: "/contact-us" }}
    />
  )
}
