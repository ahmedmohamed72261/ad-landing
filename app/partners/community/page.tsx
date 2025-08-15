"use client"

import InternalPage from "@/components/internal-page"
import { Users, CalendarCheck, BookOpen } from "lucide-react"

export default function Page() {
  return (
    <InternalPage
      title="مجتمع شركاء الإعلانات"
      englishTitle="PARTNER COMMUNITY"
      subtitle="تعلم وتبادل الخبرات مع شبكة من المحترفين."
      breadcrumbs={[{ label: "الرئيسية", href: "/" }, { label: "مجتمع شركاء الإعلانات" }]}
      heroIcon={Users}
      sections={[
        {
          title: "ما الذي ستحصل عليه؟",
          bullets: ["جلسات شهرية.", "مكتبة موارد.", "مجموعات نقاش مباشرة."],
          icon: BookOpen,
        },
        {
          title: "الفعاليات",
          bullets: ["ورش أداء.", "تحسين المحتوى.", "مقارنات أدوات."],
          icon: CalendarCheck,
        },
      ]}
    />
  )
}
