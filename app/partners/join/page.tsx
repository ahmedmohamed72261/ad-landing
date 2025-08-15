"use client"

import InternalPage from "@/components/internal-page"
import { Handshake, Megaphone, Coins, ShieldCheck } from "lucide-react"

export default function Page() {
  return (
    <InternalPage
      title="انضم كشريك إعلانات"
      englishTitle="PARTNER WITH US"
      subtitle="قدّم قيمة لعملائك عبر منصة موحّدة ومؤشرات واضحة."
      breadcrumbs={[
        { label: "الرئيسية", href: "/" },
        { label: "شركاء الإعلانات", href: "/partners/join" },
      ]}
      heroIcon={Handshake}
      highlights={[
        { label: "العمولات", value: "تنافسية" },
        { label: "لوحة الشريك", value: "مخصّصة" },
        { label: "الدعم", value: "أولوية" },
      ]}
      sections={[
        {
          title: "مزايا الشراكة",
          bullets: ["عمولات مجزية.", "لوحات وتقارير.", "مواد تسويقية جاهزة.", "دعم فني موجّه."],
          icon: Coins,
        },
        {
          title: "المتطلبات",
          bullets: ["خبرة في الحملات.", "التزام بالسياسات.", "حجم عمل شهري مستقر."],
          icon: ShieldCheck,
        },
        {
          title: "كيف نبدأ؟",
          bullets: ["قدم الطلب.", "مراجعة واعتماد.", "تفعيل لوحة الشريك.", "بدء الإحالات والحملات."],
          icon: Megaphone,
        },
      ]}
      cta={{ label: "قدّم كشريك", href: "/partners/programs" }}
    />
  )
}
