import Head from "next/head"
import { Button } from "@/components/ui/button"
import {
  CheckCircle2,
  TrendingUp,
  Target,
  BarChart3,
  Zap,
  Users,
  Globe,
  Smartphone,
  Monitor,
  ArrowLeft,
  Award,
  Sparkles,
} from "lucide-react"
import { SharedHeader } from "@/components/shared-header"
import { SharedFooter } from "@/components/shared-footer"

export default function ServicesPage() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="min-h-screen bg-black text-white font-tajawal" dir="rtl">
        <SharedHeader currentPage="خدماتنا" />

        <main>
          {/* Hero Section */}
          <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black">
            <div className="container mx-auto px-4 text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-500/20 px-4 py-2 text-teal-400">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">خدماتنا الإعلانية المتميزة</span>
              </div>

              <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                خدمات إعلانية
                <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                  {" "}
                  متكاملة
                </span>
              </h1>

              <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-300 md:text-xl">
                نقدم لك مجموعة شاملة من الخدمات الإعلانية المتطورة لتحقيق أهدافك التسويقية وزيادة مبيعاتك بأفضل النتائج
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button className="rounded-full bg-teal-500 px-8 py-3 text-white transition-colors hover:bg-teal-600">
                  ابدأ حملتك الآن
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-2 border-gray-600 bg-transparent px-8 py-3 text-white transition-colors hover:bg-gray-800"
                >
                  تواصل مع خبرائنا
                </Button>
              </div>
            </div>
          </section>

          {/* Main Services */}
          <section className="relative overflow-hidden bg-gray-950 py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="mb-16 text-center">
                <h2 className="mb-6 text-4xl font-bold md:text-5xl">خدماتنا الأساسية</h2>
                <p className="mx-auto max-w-3xl text-lg text-gray-300">
                  نوفر لك كل ما تحتاجه لإنشاء وإدارة حملات إعلانية ناجحة عبر جميع المنصات الرقمية
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Service 1 */}
                <div className="group rounded-2xl bg-gray-900/50 p-8 transition-all duration-300 hover:bg-gray-900/80 hover:scale-105">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-500/20">
                    <Target className="h-8 w-8 text-teal-400" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">إدارة الحملات الإعلانية</h3>
                  <p className="mb-6 text-gray-300">
                    إدارة شاملة لحملاتك الإعلانية عبر جوجل، فيسبوك، إنستغرام، وتويتر مع تحسين مستمر للأداء
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-teal-400" />
                      إعداد وتحسين الحملات
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-teal-400" />
                      استهداف دقيق للجمهور
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-teal-400" />
                      تقارير أداء مفصلة
                    </li>
                  </ul>
                </div>

                {/* Service 2 */}
                <div className="group rounded-2xl bg-gray-900/50 p-8 transition-all duration-300 hover:bg-gray-900/80 hover:scale-105">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/20">
                    <BarChart3 className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">تحليل البيانات والأداء</h3>
                  <p className="mb-6 text-gray-300">
                    تحليل متقدم لبيانات حملاتك مع رؤى قابلة للتنفيذ لتحسين العائد على الاستثمار
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-blue-400" />
                      تتبع التحويلات
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-blue-400" />
                      تحليل سلوك العملاء
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-blue-400" />
                      تقارير ROI مفصلة
                    </li>
                  </ul>
                </div>

                {/* Service 3 */}
                <div className="group rounded-2xl bg-gray-900/50 p-8 transition-all duration-300 hover:bg-gray-900/80 hover:scale-105">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/20">
                    <Zap className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">تحسين معدل التحويل</h3>
                  <p className="mb-6 text-gray-300">
                    تحسين صفحات الهبوط وتجربة المستخدم لزيادة معدلات التحويل وتحقيق أفضل النتائج
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-purple-400" />
                      اختبار A/B للصفحات
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-purple-400" />
                      تحسين تجربة المستخدم
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-purple-400" />
                      زيادة معدل التحويل
                    </li>
                  </ul>
                </div>

                {/* Service 4 */}
                <div className="group rounded-2xl bg-gray-900/50 p-8 transition-all duration-300 hover:bg-gray-900/80 hover:scale-105">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/20">
                    <Users className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">إدارة وسائل التواصل</h3>
                  <p className="mb-6 text-gray-300">
                    إدارة شاملة لحساباتك على وسائل التواصل الاجتماعي مع محتوى إبداعي وتفاعل مستمر
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400" />
                      إنشاء محتوى إبداعي
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400" />
                      جدولة المنشورات
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400" />
                      إدارة التفاعل
                    </li>
                  </ul>
                </div>

                {/* Service 5 */}
                <div className="group rounded-2xl bg-gray-900/50 p-8 transition-all duration-300 hover:bg-gray-900/80 hover:scale-105">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/20">
                    <Globe className="h-8 w-8 text-orange-400" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">تحسين محركات البحث</h3>
                  <p className="mb-6 text-gray-300">
                    تحسين موقعك ومحتواك لمحركات البحث لزيادة الظهور العضوي وجذب المزيد من العملاء
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-orange-400" />
                      تحسين الكلمات المفتاحية
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-orange-400" />
                      تحسين المحتوى
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-orange-400" />
                      بناء الروابط
                    </li>
                  </ul>
                </div>

                {/* Service 6 */}
                <div className="group rounded-2xl bg-gray-900/50 p-8 transition-all duration-300 hover:bg-gray-900/80 hover:scale-105">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/20">
                    <Smartphone className="h-8 w-8 text-red-400" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">التسويق عبر الجوال</h3>
                  <p className="mb-6 text-gray-300">
                    استراتيجيات تسويقية متخصصة للأجهزة المحمولة مع تحسين التطبيقات والإعلانات المحمولة
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-red-400" />
                      إعلانات التطبيقات
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-red-400" />
                      تحسين للجوال
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-red-400" />
                      حملات SMS
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="relative overflow-hidden bg-gray-900 py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="mb-16 text-center">
                <h2 className="mb-6 text-4xl font-bold md:text-5xl">لماذا تختار انطلاقة؟</h2>
                <p className="mx-auto max-w-3xl text-lg text-gray-300">
                  نتميز بخبرة واسعة وفريق متخصص يضمن لك تحقيق أفضل النتائج في حملاتك الإعلانية
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal-500/20">
                    <Award className="h-8 w-8 text-teal-400" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">خبرة متميزة</h3>
                  <p className="text-gray-400">أكثر من 5 سنوات في مجال الإعلانات الرقمية</p>
                </div>

                <div className="text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20">
                    <TrendingUp className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">نتائج مضمونة</h3>
                  <p className="text-gray-400">معدل نجاح 95% في تحقيق أهداف العملاء</p>
                </div>

                <div className="text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/20">
                    <Users className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">فريق متخصص</h3>
                  <p className="text-gray-400">خبراء معتمدون في جميع منصات الإعلان</p>
                </div>

                <div className="text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
                    <Monitor className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">تقنيات متطورة</h3>
                  <p className="text-gray-400">أحدث الأدوات والتقنيات في التسويق الرقمي</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-blue-600 py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
              <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">جاهز لبدء رحلتك الإعلانية؟</h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
                تواصل معنا اليوم واحصل على استشارة مجانية لتحديد أفضل استراتيجية إعلانية لعملك
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button className="rounded-full bg-white px-8 py-3 text-teal-600 transition-colors hover:bg-gray-100">
                  احصل على استشارة مجانية
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-2 border-white bg-transparent px-8 py-3 text-white transition-colors hover:bg-white/10"
                >
                  تصفح أعمالنا
                </Button>
              </div>
            </div>
          </section>
        </main>

        {/* Footer - Replaced custom footer with SharedFooter component */}
        <SharedFooter />
      </div>
    </>
  )
}
