import Head from "next/head"
import { Button } from "@/components/ui/button"
import {
  CheckCircle2,
  Target,
  BarChart3,
  Users,
  TrendingUp,
  ArrowLeft,
  Zap,
  Eye,
  DollarSign,
  Settings,
  PieChart,
} from "lucide-react"
import { SharedHeader } from "@/components/shared-header"
import { SharedFooter } from "@/components/shared-footer"

export default function ROASOptimizationPage() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="min-h-screen bg-black text-white font-tajawal" dir="rtl">
        <SharedHeader currentPage="تحسين ROAS" />

        <main>
          {/* Hero Section */}
          <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black">
            <div className="container mx-auto px-4 text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-500/20 px-4 py-2 text-teal-400">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm font-medium">تحسين العائد على الإنفاق الإعلاني</span>
              </div>

              <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                تحسين العائد على
                <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                  {" "}
                  الإنفاق الإعلاني
                </span>
              </h1>

              <p className="mx-auto mb-8 max-w-4xl text-lg text-gray-300 md:text-xl leading-relaxed">
                في انطلاقة، هدفنا مش بس إدارة حملتك الإعلانية، لكن تعظيم أرباحك وتحويل كل ريال تصرفه إلى عوائد مضاعفة.
                بخبرتنا واستراتيجياتنا المتقدمة، نقدر نوصل معك لعائد استثمار يصل إلى 30x خلال 6 أشهر.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button className="rounded-full bg-teal-500 px-8 py-3 text-white transition-colors hover:bg-teal-600">
                  ابدأ تحسين ROAS الآن
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-2 border-gray-600 bg-transparent px-8 py-3 text-white transition-colors hover:bg-gray-800"
                >
                  احصل على تحليل مجاني
                </Button>
              </div>
            </div>
          </section>

          {/* How We Achieve It Section */}
          <section className="relative overflow-hidden bg-gray-950 py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="mb-16 text-center">
                <h2 className="mb-6 text-4xl font-bold md:text-5xl flex items-center justify-center gap-3">
                  <Zap className="h-10 w-10 text-teal-400" />
                  كيف نحقق ذلك؟
                </h2>
              </div>

              <div className="grid gap-8 lg:gap-12">
                {/* Step 1 */}
                <div className="group rounded-2xl bg-gray-900/50 p-8 transition-all duration-300 hover:bg-gray-900/80">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-500/20">
                        <BarChart3 className="h-8 w-8 text-teal-400" />
                      </div>
                      <div className="mt-4 text-center">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-white font-bold">
                          1
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-4 text-2xl font-bold">تحليل شامل للبيانات</h3>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                          <span>دراسة السوق والمنافسين بدقة</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                          <span>تحليل أداء الحملات السابقة لمعرفة نقاط القوة والضعف</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                          <span>تحديد الجمهور الأكثر قيمة لعلامتك التجارية</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="group rounded-2xl bg-gray-900/50 p-8 transition-all duration-300 hover:bg-gray-900/80">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/20">
                        <Target className="h-8 w-8 text-blue-400" />
                      </div>
                      <div className="mt-4 text-center">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                          2
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-4 text-2xl font-bold">تحسين الاستهداف</h3>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>استخدام تقنيات Hyper Targeting للوصول للعملاء الأكثر احتمالية للشراء</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>تقسيم الجمهور إلى شرائح دقيقة لتخصيص الرسائل الإعلانية</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="group rounded-2xl bg-gray-900/50 p-8 transition-all duration-300 hover:bg-gray-900/80">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/20">
                        <Eye className="h-8 w-8 text-purple-400" />
                      </div>
                      <div className="mt-4 text-center">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-white font-bold">
                          3
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-4 text-2xl font-bold">صياغة إعلانات عالية التحويل</h3>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                          <span>نصوص إعلانية جاذبة ومبنية على علم الإقناع</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                          <span>تصميمات مرئية احترافية تلائم الهوية البصرية</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                          <span>اختبار A/B مستمر لاختيار النسخة الأكثر تحقيقًا للنتائج</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="group rounded-2xl bg-gray-900/50 p-8 transition-all duration-300 hover:bg-gray-900/80">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/20">
                        <Settings className="h-8 w-8 text-green-400" />
                      </div>
                      <div className="mt-4 text-center">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white font-bold">
                          4
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-4 text-2xl font-bold">تحسين مستمر للحملات (Optimization)</h3>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>مراجعة يومية للبيانات وضبط الميزانية تلقائيًا نحو الإعلانات الأعلى أداءً</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>إيقاف الإعلانات الضعيفة فورًا وتوجيه الاستثمار للإعلانات الرابحة</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="group rounded-2xl bg-gray-900/50 p-8 transition-all duration-300 hover:bg-gray-900/80">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/20">
                        <Users className="h-8 w-8 text-orange-400" />
                      </div>
                      <div className="mt-4 text-center">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white font-bold">
                          5
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-4 text-2xl font-bold">بناء قمع مبيعات قوي (Sales Funnel)</h3>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                          <span>جذب العملاء المحتملين</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                          <span>إعادة استهداف المهتمين</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                          <span>تحويل العملاء الحاليين إلى مشترين دائمين</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="group rounded-2xl bg-gray-900/50 p-8 transition-all duration-300 hover:bg-gray-900/80">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/20">
                        <PieChart className="h-8 w-8 text-red-400" />
                      </div>
                      <div className="mt-4 text-center">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white font-bold">
                          6
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-4 text-2xl font-bold">تتبع وقياس النتائج بدقة</h3>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                          <span>لوحات تحكم تفاعلية Live Dashboard لعرض الأداء في أي وقت</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                          <span>تقارير شهرية شفافة توضح معدل العائد على الاستثمار (ROAS) بدقة</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Expected Results Section */}
          <section className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-blue-600 py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="text-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-white">
                  <DollarSign className="h-5 w-5" />
                  <span className="text-sm font-medium">النتيجة المتوقعة</span>
                </div>

                <h2 className="mb-8 text-4xl font-bold text-white md:text-5xl">النتيجة المتوقعة</h2>

                <div className="mx-auto max-w-4xl rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
                  <p className="text-xl text-white leading-relaxed">
                    مع تطبيق استراتيجياتنا، تقدر توصل إلى <span className="font-bold text-yellow-300">30x ROAS</span>{" "}
                    خلال 6 أشهر أو أقل، مع زيادة مستمرة في المبيعات وتقليل تكلفة الاكتساب (CAC).
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Button className="rounded-full bg-white px-8 py-3 text-teal-600 transition-colors hover:bg-gray-100">
                    ابدأ تحسين ROAS الآن
                    <ArrowLeft className="mr-2 h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full border-2 border-white bg-transparent px-8 py-3 text-white transition-colors hover:bg-white/10"
                  >
                    احصل على تحليل مجاني
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <SharedFooter />
      </div>
    </>
  )
}
