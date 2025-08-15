"use client"

import InternalPage from "@/components/internal-page"
import { Monitor, Rocket, Gauge } from "lucide-react"

export default function Page() {
  return (
    <InternalPage
      title="المنتجات الرقمية"
      englishTitle="DIGITAL PRODUCTS"
      subtitle="من الإطلاق إلى التوسّع عبر قنوات عالية الكفاءة."
      breadcrumbs={[{ label: "الرئيسية", href: "/" }, { label: "المنتجات الرقمية" }]}
      heroIcon={Monitor}
      sections={[
        {
          title: "محاور العمل",
          bullets: ["حملات بحث وأداء.", "صفحات هبوط قوية.", "قياس دقيق للتحويلات."],
          icon: Rocket,
        },
        {
          title: "التحسين المستمر",
          bullets: ["محتوى بحسب شريحة.", "تجزئة كلمات.", "تحويل الميزانية حسب الأداء."],
          icon: Gauge,
        },
      ]}
      cta={{ label: "ابدأ إطلاقك", href: "/contact-us" }}
    />
  )
}
