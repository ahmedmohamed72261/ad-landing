import InternalPage from "@/components/internal-page"
import { Heart, Sparkles, Users } from "lucide-react"

export default function Page() {
  return (
    <InternalPage
      title="الصحة والجمال"
      englishTitle="BEAUTY & WELLNESS"
      subtitle="محتوى ملهم وإثباتات اجتماعية ترفع الثقة والمبيعات."
      breadcrumbs={[{ label: "الرئيسية", href: "/" }, { label: "الصحة والجمال" }]}
      heroIcon={Heart}
      sections={[
        {
          title: "أساليب فعّالة",
          bullets: ["مراجعات وتقييمات.", "قبل/بعد بإذن.", "عروض موسمية ومجموعات."],
          icon: Sparkles,
        },
        {
          title: "التعاون مع المؤثرين",
          bullets: ["اختيار مناسب.", "رموز خصم.", "القياس عبر الروابط."],
          icon: Users,
        },
      ]}
      cta={{ label: "خطتك للقطاع", href: "/contact-us" }}
    />
  )
}
