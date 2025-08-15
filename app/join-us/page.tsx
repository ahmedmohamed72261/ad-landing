"use client"

import InternalPage from "@/components/internal-page"
import { Briefcase, UserCheck, Rocket, GraduationCap, Crown, ClipboardCheck } from "lucide-react"

export default function Page() {
  return (
    <InternalPage
      title="انضم لفريق انطلاقة"
      englishTitle="JOIN US"
      subtitle="ابنِ معنا منصة الإعلانات الرائدة في المنطقة. نبحث عن المواهب الشغوفة بالتأثير."
      breadcrumbs={[{ label: "الرئيسية", href: "/" }, { label: "انضم لفريق انطلاقة" }]}
      heroIcon={Briefcase}
      highlights={[
        { label: "أنواع التوظيف", value: "دوام/عقود" },
        { label: "نمط العمل", value: "هجين/عن بعد" },
        { label: "النمو المهني", value: "سريع" },
      ]}
      sections={[
        {
          title: "ثقافتنا",
          paragraphs: ["ثقافة ملكية ونتائج. نعمل بتركيز عالٍ على العميل، ونجرب بسرعة، ونقيس كل شيء."],
          bullets: ["أثر سريع.", "شفافية.", "تعلّم مستمر."],
          icon: Rocket,
        },
        {
          title: "أدوار مطلوبة",
          paragraphs: ["نبحث عن متخصصين في التسويق والأداء والهندسة والتصميم. إن لم تجد وظيفتك، قدّم كمرشح عام."],
          bullets: [
            "Performance Marketing Manager.",
            "Full‑Stack Engineer (Next.js/Node).",
            "Product Designer (UX/UI).",
            "Creative Strategist (Ads).",
          ],
          icon: UserCheck,
        },
        {
          title: "عملية التوظيف",
          paragraphs: ["سريعة وواضحة وتركّز على الملاءمة والمهارة العملية."],
          bullets: ["تقديم السيرة وروابط الأعمال.", "مقابلة أولية.", "مهمة مصغّرة مدفوعة.", "مقابلة نهائية وعرض."],
          icon: ClipboardCheck,
        },
        {
          title: "المزايا",
          bullets: ["رواتب تنافسية.", "عُطل مرنة.", "بدل تعلّم وشهادات.", "معدات عمل.", "تأمين صحي."],
          icon: Crown,
        },
        {
          title: "التطوير المهني",
          paragraphs: ["نقدّم ميزانية لتطويرك وشهادات تخصصية في منصات الإعلانات والبيانات."],
          bullets: ["Google/Meta Certifications.", "دورات بيانات وقياس.", "Mentorship داخلي."],
          icon: GraduationCap,
        },
      ]}
      faq={[
        { q: "هل العمل عن بعد متاح؟", a: "نعم حسب الدور والفريق. نوفر نموذج هجين مرن." },
        { q: "هل المهمة المصغّرة مدفوعة؟", a: "نعم، نعتمد سياسة أتعاب رمزية للمهمات القصيرة." },
      ]}
      cta={{ label: "قدّم الآن", href: "/contact-us" }}
    />
  )
}
