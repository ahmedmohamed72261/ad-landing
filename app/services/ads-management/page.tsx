import Head from "next/head"
import { Button } from "@/components/ui/button"
import {
  CheckCircle2,
  Target,
  BarChart3,
  Users,
  Globe,
  Smartphone,
  Monitor,
  ArrowLeft,
  Settings,
  Eye,
  DollarSign,
  Clock,
} from "lucide-react"
import { SharedHeader } from "@/components/shared-header"
import { SharedFooter } from "@/components/shared-footer"

export default function AdsManagementPage() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="min-h-screen bg-black text-white font-tajawal" dir="rtl">
        <SharedHeader currentPage="إدارة الحملات الإعلانية" />

        <main>
          {/* Hero Section */}
          <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black">
            <div className="container mx-auto px-4 text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-500/20 px-4 py-2 text-teal-400">
                <Target className="h-4 w-4" />
                <span className="text-sm font-medium">إدارة الحملات الإعلانية المتقدمة</span>
              </div>

              <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                إدارة حملاتك
                <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                  {" "}
                  الإعلانية
                </span>
              </h1>

              <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-300 md:text-xl">
                نقدم لك خدمات إدارة شاملة لحملاتك الإعلانية عبر جميع المنصات الرقمية مع تحسين مستمر للأداء وتحقيق أفضل
                عائد على الاستثمار
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
                  احصل على استشارة مجانية
                </Button>
              </div>
            </div>
          </section>

          {/* Campaign Management Services */}
          <section className="relative overflow-hidden bg-gray-950 py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="mb-16 text-center">
                <h2 className="mb-6 text-4xl font-bold md:text-5xl">خدمات إدارة الحملات</h2>
                <p className="mx-auto max-w-3xl text-lg text-gray-300">
                  نوفر لك إدارة متكاملة لحملاتك الإعلانية من التخطيط والإعداد إلى التحسين والتقارير
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Service 1 */}
                <div className="group rounded-2xl bg-gray-900/50 p-8 transition-all duration-300 hover:bg-gray-900/80 hover:scale-105">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-500/20">
                    <Settings className="h-8 w-8 text-teal-400" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">إعداد وتحسين الحملات</h3>
                  <p className="mb-6 text-gray-300">إعداد احترافي لحملاتك الإعلانية مع تحسين مستمر للأداء والاستهداف</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-teal-400" />
                      إعداد الحملات الاحترافي
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-teal-400" />
                      تحسين الكلمات المفتاحية
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-teal-400" />
                      ضبط الميزانيات
                    </li>
                  </ul>
                </div>

                {/* Service 2 */}
                <div className="group rounded-2xl bg-gray-900/50 p-8 transition-all duration-300 hover:bg-gray-900/80 hover:scale-105">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/20">
                    <Target className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">استهداف دقيق للجمهور</h3>
                  <p className="mb-6 text-gray-300">
                    تحديد واستهداف الجمهور المناسب لعملك لضمان وصول إعلاناتك للعملاء المحتملين
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-blue-400" />
                      تحليل الجمهور المستهدف
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-blue-400" />
                      استهداف جغرافي دقيق
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-blue-400" />
                      استهداف الاهتمامات والسلوكيات
                    </li>
                  </ul>
                </div>

                {/* Service 3 */}
                <div className="group rounded-2xl bg-gray-900/50 p-8 transition-all duration-300 hover:bg-gray-900/80 hover:scale-105">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/20">
                    <BarChart3 className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">تقارير أداء مفصلة</h3>
                  <p className="mb-6 text-gray-300">تقارير شاملة ومفصلة عن أداء حملاتك مع تحليل البيانات والتوصيات</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-purple-400" />
                      تقارير يومية وأسبوعية
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-purple-400" />
                      تحليل ROI و ROAS
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-purple-400" />
                      توصيات للتحسين
                    </li>
                  </ul>
                </div>

                {/* Service 4 */}
                <div className="group rounded-2xl bg-gray-900/50 p-8 transition-all duration-300 hover:bg-gray-900/80 hover:scale-105">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/20">
                    <Eye className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">مراقبة مستمرة</h3>
                  <p className="mb-6 text-gray-300">
                    مراقبة مستمرة لأداء حملاتك على مدار الساعة مع تدخل فوري عند الحاجة
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400" />
                      مراقبة 24/7
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400" />
                      تنبيهات فورية
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400" />
                      تدخل سريع للتحسين
                    </li>
                  </ul>
                </div>

                {/* Service 5 */}
                <div className="group rounded-2xl bg-gray-900/50 p-8 transition-all duration-300 hover:bg-gray-900/80 hover:scale-105">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/20">
                    <DollarSign className="h-8 w-8 text-orange-400" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">تحسين الميزانية</h3>
                  <p className="mb-6 text-gray-300">إدارة ذكية للميزانية لضمان الحصول على أفضل عائد على الاستثمار</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-orange-400" />
                      توزيع الميزانية الأمثل
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-orange-400" />
                      تحسين تكلفة النقرة
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-orange-400" />
                      زيادة العائد على الاستثمار
                    </li>
                  </ul>
                </div>

                {/* Service 6 */}
                <div className="group rounded-2xl bg-gray-900/50 p-8 transition-all duration-300 hover:bg-gray-900/80 hover:scale-105">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/20">
                    <Clock className="h-8 w-8 text-red-400" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">إدارة الوقت المثلى</h3>
                  <p className="mb-6 text-gray-300">جدولة وتوقيت الحملات للحصول على أفضل النتائج في الأوقات المناسبة</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-red-400" />
                      جدولة الحملات
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-red-400" />
                      تحليل أفضل الأوقات
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-red-400" />
                      تحسين التوقيت
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Platforms We Manage */}
          <section className="relative overflow-hidden bg-gray-900 py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="mb-16 text-center">
                <h2 className="mb-6 text-4xl font-bold md:text-5xl">المنصات التي ندير حملاتها</h2>
                <p className="mx-auto max-w-3xl text-lg text-gray-300">
                  نقوم بإدارة حملاتك الإعلانية عبر جميع المنصات الرقمية الرئيسية
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20">
                    <Globe className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Google Ads</h3>
                  <p className="text-gray-400">إعلانات البحث والعرض وYouTube</p>
                </div>

                <div className="text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20">
                    <Users className="h-8 w-8 text-blue-300" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Facebook & Instagram</h3>
                  <p className="text-gray-400">إعلانات الشبكات الاجتماعية</p>
                </div>

                <div className="text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-black/20">
                    <Monitor className="h-8 w-8 text-gray-300" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Twitter (X)</h3>
                  <p className="text-gray-400">إعلانات تويتر المتقدمة</p>
                </div>

                <div className="text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20">
                    <Smartphone className="h-8 w-8 text-red-400" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">TikTok & Snapchat</h3>
                  <p className="text-gray-400">إعلانات المنصات الناشئة</p>
                </div>
              </div>
            </div>
          </section>

          {/* Process Steps */}
          <section className="relative overflow-hidden bg-gray-950 py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="mb-16 text-center">
                <h2 className="mb-6 text-4xl font-bold md:text-5xl">عملية إدارة الحملات</h2>
                <p className="mx-auto max-w-3xl text-lg text-gray-300">
                  نتبع منهجية علمية مدروسة لضمان نجاح حملاتك الإعلانية
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal-500 text-white font-bold">
                    1
                  </div>
                  <h3 className="mb-2 text-xl font-bold">التحليل والتخطيط</h3>
                  <p className="text-gray-400">دراسة السوق والمنافسين ووضع الاستراتيجية</p>
                </div>

                <div className="text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                    2
                  </div>
                  <h3 className="mb-2 text-xl font-bold">الإعداد والإطلاق</h3>
                  <p className="text-gray-400">إعداد الحملات وإطلاقها على المنصات المختارة</p>
                </div>

                <div className="text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-500 text-white font-bold">
                    3
                  </div>
                  <h3 className="mb-2 text-xl font-bold">المراقبة والتحسين</h3>
                  <p className="text-gray-400">مراقبة مستمرة وتحسين الأداء</p>
                </div>

                <div className="text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white font-bold">
                    4
                  </div>
                  <h3 className="mb-2 text-xl font-bold">التقارير والتطوير</h3>
                  <p className="text-gray-400">تقارير مفصلة وخطط التطوير المستقبلية</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-blue-600 py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
              <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">جاهز لإدارة حملاتك الإعلانية؟</h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
                تواصل معنا اليوم واحصل على استشارة مجانية لبدء إدارة حملاتك الإعلانية بطريقة احترافية
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button className="rounded-full bg-white px-8 py-3 text-teal-600 transition-colors hover:bg-gray-100">
                  ابدأ إدارة حملاتك الآن
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-2 border-white bg-transparent px-8 py-3 text-white transition-colors hover:bg-white/10"
                >
                  تواصل مع خبرائنا
                </Button>
              </div>
            </div>
          </section>
        </main>

        <SharedFooter />
      </div>
    </>
  )
}
