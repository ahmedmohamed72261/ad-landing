import InternalPage from "@/components/internal-page"
import { Layers3, Gift, Medal } from "lucide-react"

export default function Page() {
  return (
    <InternalPage
      title="برامج الشراكة الإعلانية"
      englishTitle="PARTNER PROGRAMS"
      subtitle="مستويات متعددة بامتيازات تراكمية حسب الأداء."
      breadcrumbs={[{ label: "الرئيسية", href: "/" }, { label: "برامج الشراكة الإعلانية" }]}
      heroIcon={Layers3}
      sections={[
        {
          title: "المستويات",
          bullets: ["Partner.", "Premier.", "Elite."],
          icon: Medal,
        },
        {
          title: "الامتيازات",
          bullets: ["حوافز شهرية.", "ظهور تسويقي.", "أولوية في الميزات.", "دعم مخصّص."],
          icon: Gift,
        },
      ]}
    />
  )
}
