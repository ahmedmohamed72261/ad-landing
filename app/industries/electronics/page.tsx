"use client"

import InternalPage from "@/components/internal-page"
import { Cpu, ShieldCheck, ClipboardList } from "lucide-react"

export default function Page() {
  return (
    <InternalPage
      title="الإلكترونيات"
      englishTitle="ELECTRONICS"
      subtitle="تفاصيل تقنية مُبسّطة مع عروض تحفّز القرار."
      breadcrumbs={[{ label: "الرئيسية", href: "/" }, { label: "الإلكترونيات" }]}
      heroIcon={Cpu}
      sections={[
        {
          title: "محاور النجاح",
          bullets: ["شرح القيمة بوضوح.", "مقارنات ذكية.", "إبراز الضمان وخدمات ما بعد البيع."],
          icon: ClipboardList,
        },
        {
          title: "الثقة والضمان",
          bullets: ["سياسات استرجاع واضحة.", "ضمانات مُعلنة.", "مراكز خدمة معتمدة."],
          icon: ShieldCheck,
        },
      ]}
      cta={{ label: "ارفع مبيعاتك", href: "/contact-us" }}
    />
  )
}
