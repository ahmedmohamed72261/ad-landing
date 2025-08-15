"use client"

import InternalPage from "@/components/internal-page"
import { Rocket, GitBranch, Settings } from "lucide-react"

export default function Page() {
  return (
    <InternalPage
      title="مركز التحديثات"
      englishTitle="RELEASE NOTES"
      subtitle="سجل الإصدارات والتحسينات وإصلاحات الأخطاء أولًا بأول."
      breadcrumbs={[{ label: "الرئيسية", href: "/" }, { label: "مركز التحديثات" }]}
      heroIcon={Rocket}
      sections={[
        {
          title: "قنوات الإصدار",
          bullets: ["Stable: للمستخدمين كافة.", "Beta: ميزات تجريبية.", "Hotfix: إصلاحات عاجلة."],
          icon: GitBranch,
        },
        {
          title: "كيف نقرر الأولويات؟",
          paragraphs: ["مزيج من ملاحظات العملاء وتأثير العمل وقياس الأداء."],
          bullets: ["أثر على العائد.", "تجربة المستخدم.", "الاستقرار والأمان."],
          icon: Settings,
        },
      ]}
      faq={[
        { q: "كيف أقترح ميزة؟", a: "من داخل المنصة: المساعدة > اقترح ميزة، أو عبر /contact-us." },
        { q: "هل أستطيع الانضمام لـ Beta؟", a: "نعم عبر تفعيل خيار المشاركة في الإعدادات." },
      ]}
    />
  )
}
