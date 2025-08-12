import InternalPage from "@/components/internal-page"
import { Utensils, MapPin, CalendarClock } from "lucide-react"

export default function Page() {
  return (
    <InternalPage
      title="المطاعم والمقاهي"
      englishTitle="RESTAURANTS"
      subtitle="حملات محلية تقود الطلبات والزيارات."
      breadcrumbs={[{ label: "الرئيسية", href: "/" }, { label: "المطاعم والمقاهي" }]}
      heroIcon={Utensils}
      sections={[
        {
          title: "تكتيكات فعّالة",
          bullets: ["عروض وقت الذروة.", "استهداف مواقع.", "محتوى بصري شهي."],
          icon: CalendarClock,
        },
        {
          title: "التتبع",
          bullets: ["طلبات التوصيل.", "زيارات الفروع.", "استخدام الأكواد الترويجية."],
          icon: MapPin,
        },
      ]}
      cta={{ label: "ارفع طلباتك", href: "/contact-us" }}
    />
  )
}
