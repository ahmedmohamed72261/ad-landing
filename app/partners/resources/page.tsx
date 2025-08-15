"use client"

import InternalPage from "@/components/internal-page"
import { FolderDown, Presentation, FileText } from "lucide-react"

export default function Page() {
  return (
    <InternalPage
      title="موارد الشركاء"
      englishTitle="PARTNER RESOURCES"
      subtitle="ملفات وقوالب قابلة للاستخدام الفوري في حملاتك."
      breadcrumbs={[{ label: "الرئيسية", href: "/" }, { label: "موارد الشركاء" }]}
      heroIcon={FolderDown}
      sections={[
        {
          title: "المحتوى المتاح",
          bullets: ["شرائح عروض.", "دليل إعداد الحملات.", "قوالب ميزانيات.", "شعارات وأصول بصرية."],
          icon: Presentation,
        },
        {
          title: "دليل الهوية",
          paragraphs: ["استخدم الهوية البصرية وفق القواعد التالية للحفاظ على تناسق العلامة."],
          bullets: ["ألوان.", "هوامش.", "الاستخدامات المسموحة."],
          icon: FileText,
        },
      ]}
    />
  )
}
