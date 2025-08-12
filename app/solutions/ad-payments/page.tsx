import InternalPage from "@/components/internal-page"
import { CreditCard, ReceiptText, ShieldCheck } from "lucide-react"

export default function Page() {
  return (
    <InternalPage
      title="المدفوعات الإعلانية"
      englishTitle="AD PAYMENTS"
      subtitle="فواتير شفافة وتتبّع تكاليف دقيق عبر القنوات."
      breadcrumbs={[{ label: "الرئيسية", href: "/" }, { label: "المدفوعات الإعلانية" }]}
      heroIcon={CreditCard}
      sections={[
        {
          title: "ما الذي نوفره؟",
          bullets: ["تقارير تكلفة موحّدة.", "طرق دفع متعددة.", "تنبيهات ميزانية وقيود أمان."],
          icon: ReceiptText,
        },
        {
          title: "الأمان والالتزام",
          bullets: ["بوابات دفع معتمدة.", "تشفير وحماية بيانات.", "سجلات تدقيق واضحة."],
          icon: ShieldCheck,
        },
      ]}
      cta={{ label: "رتّب دفعاتك", href: "/contact-us" }}
    />
  )
}
