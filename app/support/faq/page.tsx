"use client"
import { useState } from "react"
import { SharedHeader } from "@/components/shared-header"
import { SharedFooter } from "@/components/shared-footer"
import { ChevronDown, ChevronUp, Search, HelpCircle, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const faqData = [
  {
    category: "الحملات الإعلانية",
    questions: [
      {
        q: "كم يستغرق إعداد حملة إعلانية جديدة؟",
        a: "عادة ما يستغرق إعداد حملة إعلانية جديدة من 3-5 أيام عمل، وذلك يشمل البحث والتحليل وإعداد المحتوى والإطلاق.",
      },
      {
        q: "ما هي المنصات الإعلانية المدعومة؟",
        a: "ندعم جميع المنصات الرئيسية: جوجل أدز، فيسبوك، إنستغرام، تويتر، لينكد إن، تيك توك، سناب شات، ويوتيوب.",
      },
      {
        q: "هل يمكنني إيقاف الحملة في أي وقت؟",
        a: "نعم، يمكنك إيقاف أو تعديل أي حملة في أي وقت من خلال لوحة التحكم، أو التواصل مع فريق الدعم.",
      },
      {
        q: "كيف يتم تحديد الميزانية المناسبة؟",
        a: "نحدد الميزانية بناءً على أهدافك التسويقية، حجم السوق المستهدف، والمنافسة. نبدأ عادة بميزانية تجريبية ثم نقوم بالتحسين.",
      },
    ],
  },
  {
    category: "الفوترة والدفع",
    questions: [
      {
        q: "ما هي طرق الدفع المتاحة؟",
        a: "نقبل الدفع عبر البطاقات الائتمانية، التحويل البنكي، مدى، وأبل باي. جميع المدفوعات آمنة ومشفرة.",
      },
      {
        q: "متى يتم خصم رسوم الخدمة؟",
        a: "يتم خصم رسوم الخدمة شهرياً في بداية كل شهر، أو حسب الاتفاق المبرم معك.",
      },
      {
        q: "هل يمكنني الحصول على فاتورة ضريبية؟",
        a: "نعم، نصدر فواتير ضريبية معتمدة لجميع العملاء وفقاً لأنظمة هيئة الزكاة والضريبة والجمارك.",
      },
      {
        q: "ما هي سياسة الاسترداد؟",
        a: "نقدم ضمان استرداد جزئي إذا لم تحقق حملتك الأهداف المتفق عليها خلال الشهر الأول، وفقاً لشروط الضمان.",
      },
    ],
  },
  {
    category: "التقارير والنتائج",
    questions: [
      {
        q: "كيف يمكنني تتبع أداء حملاتي؟",
        a: "نوفر لوحة تحكم شاملة تتيح لك تتبع جميع مؤشرات الأداء في الوقت الفعلي، بالإضافة إلى تقارير أسبوعية وشهرية مفصلة.",
      },
      {
        q: "ما هي المؤشرات التي يتم قياسها؟",
        a: "نقيس جميع المؤشرات المهمة مثل ROAS، CPA، CTR، معدل التحويل، الوصول، التفاعل، وتكلفة النقرة.",
      },
      {
        q: "هل يمكنني تصدير التقارير؟",
        a: "نعم، يمكنك تصدير جميع التقارير بصيغ مختلفة مثل PDF، Excel، أو CSV من لوحة التحكم.",
      },
    ],
  },
  {
    category: "الدعم الفني",
    questions: [
      {
        q: "ما هي ساعات عمل الدعم الفني؟",
        a: "فريق الدعم متاح من الأحد إلى الخميس من 9 صباحاً حتى 6 مساءً. للحالات العاجلة، يمكنك التواصل عبر واتساب.",
      },
      {
        q: "كم يستغرق الرد على الاستفسارات؟",
        a: "نرد على جميع الاستفسارات خلال 24 ساعة كحد أقصى. الحالات العاجلة يتم التعامل معها في نفس اليوم.",
      },
      {
        q: "هل تقدمون تدريب على استخدام المنصة؟",
        a: "نعم، نقدم جلسات تدريبية مجانية لجميع العملاء الجدد، بالإضافة إلى مكتبة شاملة من الفيديوهات التعليمية.",
      },
    ],
  },
]

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const filteredFAQ = faqData
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (item) =>
          item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.a.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0)

  return (
    <div className="min-h-screen bg-black text-white" dir="rtl">
      <SharedHeader currentPage="الأسئلة الشائعة" />

      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-500/20 px-4 py-2 text-teal-400">
              <HelpCircle className="h-4 w-4" />
              <span className="text-sm font-medium">مركز المساعدة</span>
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
              الأسئلة
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent"> الشائعة</span>
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-300 md:text-xl">
              إجابات شاملة على أكثر الأسئلة شيوعاً حول خدماتنا ومنصتنا الإعلانية
            </p>

            {/* Search Bar */}
            <div className="mx-auto max-w-md">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="ابحث في الأسئلة الشائعة..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-full bg-gray-900/50 border-gray-700 py-3 pr-12 text-white placeholder:text-gray-400"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            {filteredFAQ.length > 0 ? (
              <div className="mx-auto max-w-4xl space-y-12">
                {filteredFAQ.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h2 className="mb-6 text-2xl font-bold text-teal-400 md:text-3xl">{category.category}</h2>
                    <div className="space-y-4">
                      {category.questions.map((item, itemIndex) => {
                        const itemId = `${categoryIndex}-${itemIndex}`
                        const isOpen = openItems.includes(itemId)

                        return (
                          <div
                            key={itemIndex}
                            className="rounded-lg border border-gray-800 bg-gray-950/50 transition-colors hover:bg-gray-950/70"
                          >
                            <button
                              onClick={() => toggleItem(itemId)}
                              className="flex w-full items-center justify-between p-6 text-right"
                            >
                              <h3 className="text-lg font-semibold text-white">{item.q}</h3>
                              {isOpen ? (
                                <ChevronUp className="h-5 w-5 text-teal-400 flex-shrink-0 mr-4" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0 mr-4" />
                              )}
                            </button>
                            {isOpen && (
                              <div className="border-t border-gray-800 px-6 pb-6">
                                <p className="pt-4 text-gray-300 leading-relaxed">{item.a}</p>
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mx-auto max-w-md text-center">
                <div className="mb-4 text-6xl">🔍</div>
                <h3 className="mb-2 text-xl font-semibold">لم نجد نتائج</h3>
                <p className="text-gray-400">جرب البحث بكلمات مختلفة أو تصفح الأقسام أدناه</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-gray-950 py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">لم تجد إجابة لسؤالك؟</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
              فريق الدعم جاهز لمساعدتك في أي استفسار. تواصل معنا وسنرد عليك خلال 24 ساعة
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button className="rounded-full bg-teal-500 px-8 py-3 text-white transition-colors hover:bg-teal-600">
                <MessageCircle className="ml-2 h-5 w-5" />
                تواصل معنا
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-2 border-gray-600 bg-transparent px-8 py-3 text-white transition-colors hover:bg-gray-800"
              >
                <Phone className="ml-2 h-5 w-5" />
                طلب مكالمة
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SharedFooter />
    </div>
  )
}
