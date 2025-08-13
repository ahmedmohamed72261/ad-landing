"use client"
import { Button } from "@/components/ui/button"
import {
  CheckCircle2,
  Target,
  LinkIcon,
  Zap,
  Store,
  TrendingUp,
  Megaphone,
  BarChart3,
  DollarSign,
  Eye,
  MousePointer,
} from "lucide-react"
import { AutoScrollContainer } from "@/components/auto-scroll-container"
import { SharedFooter } from "@/components/shared-footer"
import { motion } from "framer-motion"
import StatsMetricCard from "@/components/stats-metric-card"
import { SharedHeader } from "@/components/shared-header"
import Image from "next/image"
import { lazy, Suspense } from "react"

const CampaignPerformanceSection = lazy(() => import("@/components/campaign-performance-section"))
const GCCSuccessSection = lazy(() => import("@/components/gcc-success-section"))
const LaunchCompact = lazy(() => import("@/components/launch-compact"))
const TestimonialsSection = lazy(() => import("@/components/testimonials-section"))
const SocialMediaGrowthSection = lazy(() => import("@/components/social-media-growth-section"))

const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=966560431575&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%2B%D8%A3%D8%B1%D9%8A%D8%AF%2B%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%2B%D8%B9%D9%86%2B%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%2B%D8%A7%D9%86%D8%B7%D9%84%D8%A7%D9%82%D8%A9%2B%D8%A7%D9%84%D8%A5%D8%B9%D9%84%D8%A7%D9%86%D9%8A%D8%A9&type=phone_number&app_absent=0"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white" dir="rtl">
      {/* Header */}
      <SharedHeader currentPage="الرئيسية" />

       <main>
        {/* Hero */}
        <section className="relative flex min-h-[100vh] items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black">
          {/* Background effects */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/20 via-gray-900 to-black" />
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          <div className="absolute left-10 top-20 h-72 w-72 animate-pulse rounded-full bg-teal-500/10 blur-3xl" />
          <div className="absolute bottom-20 right-10 h-96 w-96 animate-pulse rounded-full bg-blue-500/10 blur-3xl delay-1000" />

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-gradient-to-r from-teal-500/20 to-blue-500/20 px-4 sm:px-6 py-2 backdrop-blur-sm">
              <Zap className="h-4 w-4 sm:h-4 sm:w-4 text-teal-400" />
              <span className="text-sm sm:text-sm font-medium text-teal-300">
                منصة الإعلانات الذكية الرائدة في المنطقة
              </span>
            </div>

            {/* Title */}
            <h1 className="mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-white">
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                أطلق حملتك
              </span>
              <br />
              <span className="bg-gradient-to-r from-teal-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
                الإعلانية الاحترافية
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mb-12 max-w-2xl lg:max-w-4xl text-lg md:text-xl lg:text-2xl font-light text-gray-300 leading-relaxed">
              ابدأ مع انطلاقة اليوم - أطلق حملتك الإعلانية،
              <br />
              عرّف العملاء بمتجرك، وزد مبيعاتك
              <br />
              بخطوات سهلة ونتائج مضمونة
            </p>

            {/* CTAs */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 mb-16">
              <Button
                className="w-full sm:w-auto transform rounded-full bg-gradient-to-r from-teal-500 to-teal-600 px-8 sm:px-10 py-4 sm:py-4 text-lg font-semibold text-white shadow-2xl shadow-teal-500/25 transition-all duration-300 hover:scale-105 hover:from-teal-600 hover:to-teal-700"
                onClick={() => window.open(whatsappUrl, "_blank")}
              >
                <Zap className="mr-2 h-5 w-5" />
                ابدأ حملتك الآن
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto rounded-full border-2 border-gray-600 bg-transparent px-8 sm:px-10 py-4 sm:py-4 text-lg font-semibold text-white transition-all duration-300 hover:border-gray-500 hover:bg-gray-800"
                onClick={() => window.open(whatsappUrl, "_blank")}
              >
                شاهد العرض التوضيحي
              </Button>
            </div>

            {/* Trust indicators */}
            <AutoScrollContainer className="flex items-center justify-start gap-6 sm:gap-6 lg:gap-8 text-gray-400 sm:justify-center overflow-x-auto">
              <motion.div
                className="flex items-center gap-2 whitespace-nowrap"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <CheckCircle2 className="h-5 w-5 sm:h-5 sm:w-5 text-teal-400 flex-shrink-0" />
                <span className="text-sm sm:text-sm">أكثر من 10,000 متجر نشط</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 whitespace-nowrap"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <CheckCircle2 className="h-5 w-5 sm:h-5 sm:w-5 text-teal-400 flex-shrink-0" />
                <span className="text-sm sm:text-sm">40 مليون ريال مبيعات</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 whitespace-nowrap"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <CheckCircle2 className="h-5 w-5 sm:h-5 sm:w-5 text-teal-400 flex-shrink-0" />
                <span className="text-sm sm:text-sm">دعم 24/7</span>
              </motion.div>
            </AutoScrollContainer>
          </div>

          {/* Scroll indicator */}
          <div className="absolute -translate-x-1/2 animate-bounce left-1/2 bottom-4 sm:bottom-8">
            <div className="flex h-8 w-5 sm:h-10 sm:w-6 justify-center rounded-full border-2 border-gray-600">
              <div className="mt-1 sm:mt-2 h-2 w-1 sm:h-3 sm:w-1 animate-pulse rounded-full bg-teal-400" />
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="relative overflow-hidden bg-gray-900 py-16 md:py-24">
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h2 className="mb-12 text-4xl font-bold md:text-5xl">
              أكبر منصة سعودية للتجارة الإلكترونية في الشرق الأوسط
            </h2>
            <p className="mx-auto mb-12 max-w-3xl text-lg text-gray-300 md:text-xl">
              أنشئ متجرك اليوم وانضم لعشرات الآلاف من الأفراد والمؤسسات والشركات الناجحة مع سلة
            </p>
            <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <StatsMetricCard
                Icon={Megaphone}
                value={10000}
                label="حملة إعلانية ناجحة"
                formatValue={(v) => "+" + v.toLocaleString("ar-EG")}
                delay={0}
              />
              <StatsMetricCard
                Icon={Store}
                value={4000}
                label="متجر نديره الآن"
                formatValue={(v) => v.toLocaleString("ar-EG")}
                delay={150}
              />
              <StatsMetricCard
                Icon={TrendingUp}
                value={40}
                label="مليون ر.س مبيعات المنصة"
                formatValue={(v) => v.toLocaleString("ar-EG")}
                delay={300}
              />
              <StatsMetricCard
                Icon={TrendingUp}
                value={25}
                label="عائد مضمون شهرياً %"
                formatValue={(v) => "%" + v.toLocaleString("ar-EG")}
                delay={450}
              />
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black via-gray-950 to-black" />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <span className="mb-4 inline-block rounded-full bg-gray-800 px-4 py-1 text-sm text-gray-300">المشكلة</span>
            <h2 className="mb-8 text-center text-4xl font-bold md:text-5xl">تحديات تواجه المعلنين</h2>
            <AutoScrollContainer className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center rounded-lg border border-gray-800 bg-gray-900 p-6 text-center shadow-lg">
                <Target className="mb-4 h-12 w-12 text-teal-400" />
                <p className="text-lg font-semibold">كل منصة تتطلب إعدادات مختلفة</p>
              </div>
              <div className="flex flex-col items-center rounded-lg border border-gray-800 bg-gray-900 p-6 text-center shadow-lg">
                <LinkIcon className="mb-4 h-12 w-12 text-teal-400" />
                <p className="text-lg font-semibold">لا يوجد ربط مباشر بين المتجر والحملة</p>
              </div>
              <div className="flex flex-col items-center rounded-lg border border-gray-800 bg-gray-900 p-6 text-center shadow-lg">
                <BarChart3 className="mb-4 h-12 w-12 text-teal-400" />
                <p className="text-lg font-semibold">صعوبة قياس العائد على الاستثمار (ROI)</p>
              </div>
            </AutoScrollContainer>
          </div>
        </section>

        {/* AI Features */}
        <section className="relative overflow-hidden bg-gray-950 py-16 md:py-24">
          <div className="container relative z-10 mx-auto px-4">
            <h2 className="mb-8 text-center text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              قوة الإعلانات… تختصر المسافة نحو هدفك
            </h2>
            <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-300 md:text-xl">
              مع انطلاقة، تصل مباشرة لعملائك الأكثر قيمة، وتضاعف فرص نجاحك بعائد استثمار قد يتجاوز 30% في الشهر الأول.
            </p>

            <div className="mb-16">
              <h3 className="mb-8 text-center text-2xl font-bold text-white md:text-3xl">أرقام تتحدث عنك</h3>
              <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
                <div className="rounded-lg border border-teal-500/30 bg-gradient-to-br from-teal-500/10 to-blue-500/10 p-4 text-center backdrop-blur-sm">
                  <div className="mb-2 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-teal-400" />
                  </div>
                  <div className="text-2xl font-bold text-teal-400">↑ 19.8%</div>
                  <div className="text-sm text-gray-300">دقة الاستهداف</div>
                </div>
                <div className="rounded-lg border border-teal-500/30 bg-gradient-to-br from-teal-500/10 to-blue-500/10 p-4 text-center backdrop-blur-sm">
                  <div className="mb-2 flex items-center justify-center">
                    <MousePointer className="h-6 w-6 text-teal-400" />
                  </div>
                  <div className="text-2xl font-bold text-teal-400">↑ 15.4%</div>
                  <div className="text-sm text-gray-300">نسبة النقر CTR</div>
                </div>
                <div className="rounded-lg border border-teal-500/30 bg-gradient-to-br from-teal-500/10 to-blue-500/10 p-4 text-center backdrop-blur-sm">
                  <div className="mb-2 flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-teal-400" />
                  </div>
                  <div className="text-2xl font-bold text-teal-400">↓ 13.6%</div>
                  <div className="text-sm text-gray-300">تكلفة الاكتساب CPA</div>
                </div>
                <div className="rounded-lg border border-teal-500/30 bg-gradient-to-br from-teal-500/10 to-blue-500/10 p-4 text-center backdrop-blur-sm">
                  <div className="mb-2 flex items-center justify-center">
                    <Eye className="h-6 w-6 text-teal-400" />
                  </div>
                  <div className="text-2xl font-bold text-teal-400">↑ 40.2%</div>
                  <div className="text-sm text-gray-300">مرات الظهور</div>
                </div>
              </div>
            </div>

            <div className="mb-16 text-center">
              <h3 className="mb-6 text-2xl font-bold text-white md:text-3xl">نجاحك لا يبدأ صدفة</h3>
              <p className="mx-auto max-w-2xl text-lg text-gray-300">
                كل تعديل محسوب يعني جمهور أدق، تكلفة أقل، وفرص أكبر لتحقيق أهدافك التسويقية.
              </p>
            </div>

            <AutoScrollContainer className="mx-auto grid max-w-4xl grid-cols-1 items-start gap-12 md:grid-cols-2">
              <div className="space-y-4 text-center md:text-right">
                <div className="mb-4 flex items-center justify-center gap-4 md:justify-end">
                  <div className="rounded-full bg-teal-500/20 p-3">
                    <BarChart3 className="h-8 w-8 text-teal-400" />
                  </div>
                  <h3 className="text-3xl font-bold">تحسين الأداء بلا توقف</h3>
                </div>
                <p className="text-gray-300">
                  في انطلاقة، ندير حملتك بخبرة وابتكار، ونعززها باستراتيجيات دقيقة للمحتوى والكلمات المفتاحية لضمان أفضل
                  النتائج.
                </p>
              </div>
              <div className="space-y-4 text-center md:text-right">
                <div className="mb-4 flex items-center justify-center gap-4 md:justify-end">
                  <div className="rounded-full bg-blue-500/20 p-3">
                    <Target className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-3xl font-bold">حتى لو البداية ما كانت مثالية</h3>
                </div>
                <p className="text-gray-300">
                  مع كل تحسين، نزيد فرص ظهور إعلانك للجمهور المناسب، ونرفع احتمالية تحقق أهدافك بأقل تكلفة ممكنة.
                </p>
              </div>
            </AutoScrollContainer>
          </div>
        </section>

        {/* Launch section */}
        <section className="relative overflow-hidden bg-black py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Suspense fallback={<div className="h-96 animate-pulse bg-gray-800 rounded-lg" />}>
              <LaunchCompact />
            </Suspense>
          </div>
        </section>

        {/* Categories */}
        <Suspense fallback={<div className="h-96 animate-pulse bg-gray-800 rounded-lg" />}>
          <SocialMediaGrowthSection />
        </Suspense>
        <Suspense fallback={<div className="h-96 animate-pulse bg-gray-800 rounded-lg" />}>
          <GCCSuccessSection />
        </Suspense>
        <Suspense fallback={<div className="h-96 animate-pulse bg-gray-800 rounded-lg" />}>
          <CampaignPerformanceSection />
        </Suspense>
        <Suspense fallback={<div className="h-96 animate-pulse bg-gray-800 rounded-lg" />}>
          <TestimonialsSection />
        </Suspense>

        <section className="relative overflow-hidden bg-gray-950 py-16 md:py-24">
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">شركاء النجاح</h2>
            <p className="mb-12 text-lg text-gray-300">يثق بنا أكثر من 4000 متجر وعلامة تجارية رائدة في المنطقة</p>
            <AutoScrollContainer className="flex justify-center">
              <div className="flex gap-8 shrink-0">
                <div className="flex h-16 w-24 items-center justify-center rounded-lg bg-white p-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:h-20 sm:w-28 md:h-24 md:w-32">
                  <Image
                    src="/kdc-kingdom-dates.png"
                    alt="شركة تمور المملكة - KDC Kingdom Dates"
                    width={128}
                    height={96}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                  />
                </div>
                <div className="flex h-16 w-24 items-center justify-center rounded-lg bg-white p-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:h-20 sm:w-28 md:h-24 md:w-32">
                  <Image
                    src="/reeq-alnahl.png"
                    alt="شركة ريق النحل - Reeq Alnahl"
                    width={128}
                    height={96}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                  />
                </div>
                <div className="flex h-16 w-24 items-center justify-center rounded-lg bg-white p-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:h-20 sm:w-28 md:h-24 md:w-32">
                  <Image
                    src="/naseel.png"
                    alt="شركة نسيل - Naseel"
                    width={128}
                    height={96}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                  />
                </div>
                <div className="flex h-16 w-24 items-center justify-center rounded-lg bg-white p-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:h-20 sm:w-28 md:h-24 md:w-32">
                  <Image
                    src="/geometric-logo.png"
                    alt="شريك تجاري - Partner Company"
                    width={128}
                    height={96}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                  />
                </div>
                <div className="flex h-16 w-24 items-center justify-center rounded-lg bg-white p-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:h-20 sm:w-28 md:h-24 md:w-32">
                  <Image
                    src="/desar.png"
                    alt="شركة ديسار - Desar"
                    width={128}
                    height={96}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                  />
                </div>
                <div className="flex h-16 w-24 items-center justify-center rounded-lg bg-white p-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:h-20 sm:w-28 md:h-24 md:w-32">
                  <Image
                    src="/tmoor.png"
                    alt="مؤسسة تمور للخدمات الإنسانية - Tmoor Humanitarian Services"
                    width={128}
                    height={96}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                  />
                </div>
                <div className="flex h-16 w-24 items-center justify-center rounded-lg bg-white p-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:h-20 sm:w-28 md:h-24 md:w-32">
                  <Image
                    src="/hair-stars.png"
                    alt="صالون هير ستارز - Hair Stars Salon"
                    width={128}
                    height={96}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                  />
                </div>
                <div className="flex h-16 w-24 items-center justify-center rounded-lg bg-white p-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:h-20 sm:w-28 md:h-24 md:w-32">
                  <Image
                    src="/naass-menswear.png"
                    alt="ناس للأزياء الرجالية - NAASS Men's Wear"
                    width={128}
                    height={96}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                  />
                </div>
                <div className="flex h-16 w-24 items-center justify-center rounded-lg bg-white p-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:h-20 sm:w-28 md:h-24 md:w-32">
                  <Image
                    src="/flip.png"
                    alt="شركة فليب - Flip"
                    width={128}
                    height={96}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                  />
                </div>
                <div className="flex h-16 w-24 items-center justify-center rounded-lg bg-white p-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:h-20 sm:w-28 md:h-24 md:w-32">
                  <Image
                    src="/amazon-logo.png"
                    alt="أمازون - Amazon"
                    width={128}
                    height={96}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                  />
                </div>
                <div className="flex h-16 w-24 items-center justify-center rounded-lg bg-white p-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:h-20 sm:w-28 md:h-24 md:w-32">
                  <Image
                    src="/google-logo.png"
                    alt="جوجل - Google"
                    width={128}
                    height={96}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                  />
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex gap-8 shrink-0" aria-hidden="true">
                <div className="flex h-16 w-24 items-center justify-center rounded-lg bg-white p-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:h-20 sm:w-28 md:h-24 md:w-32">
                  <Image
                    src="/kdc-kingdom-dates.png"
                    alt=""
                    width={128}
                    height={96}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                  />
                </div>
                <div className="flex h-16 w-24 items-center justify-center rounded-lg bg-white p-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:h-20 sm:w-28 md:h-24 md:w-32">
                  <Image
                    src="/reeq-alnahl.png"
                    alt=""
                    width={128}
                    height={96}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                  />
                </div>
                <div className="flex h-16 w-24 items-center justify-center rounded-lg bg-white p-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:h-20 sm:w-28 md:h-24 md:w-32">
                  <Image
                    src="/naseel.png"
                    alt=""
                    width={128}
                    height={96}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                  />
                </div>
                <div className="flex h-16 w-24 items-center justify-center rounded-lg bg-white p-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:h-20 sm:w-28 md:h-24 md:w-32">
                  <Image
                    src="/geometric-logo.png"
                    alt=""
                    width={128}
                    height={96}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                  />
                </div>
                <div className="flex h-16 w-24 items-center justify-center rounded-lg bg-white p-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:h-20 sm:w-28 md:h-24 md:w-32">
                  <Image
                    src="/desar.png"
                    alt=""
                    width={128}
                    height={96}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                  />
                </div>
                <div className="flex h-16 w-24 items-center justify-center rounded-lg bg-white p-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:h-20 sm:w-28 md:h-24 md:w-32">
                  <Image
                    src="/tmoor.png"
                    alt=""
                    width={128}
                    height={96}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                  />
                </div>
                <div className="flex h-16 w-24 items-center justify-center rounded-lg bg-white p-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:h-20 sm:w-28 md:h-24 md:w-32">
                  <Image
                    src="/hair-stars.png"
                    alt=""
                    width={128}
                    height={96}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                  />
                </div>
                <div className="flex h-16 w-24 items-center justify-center rounded-lg bg-white p-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:h-20 sm:w-28 md:h-24 md:w-32">
                  <Image
                    src="/naass-menswear.png"
                    alt=""
                    width={128}
                    height={96}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                  />
                </div>
                <div className="flex h-16 w-24 items-center justify-center rounded-lg bg-white p-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:h-20 sm:w-28 md:h-24 md:w-32">
                  <Image
                    src="/flip.png"
                    alt=""
                    width={128}
                    height={96}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                  />
                </div>
                <div className="flex h-16 w-24 items-center justify-center rounded-lg bg-white p-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:h-20 sm:w-28 md:h-24 md:w-32">
                  <Image
                    src="/amazon-logo.png"
                    alt=""
                    width={128}
                    height={96}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                  />
                </div>
                <div className="flex h-16 w-24 items-center justify-center rounded-lg bg-white p-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:h-20 sm:w-28 md:h-24 md:w-32">
                  <Image
                    src="/google-logo.png"
                    alt=""
                    width={128}
                    height={96}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                  />
                </div>
              </div>
            </AutoScrollContainer>
          </div>
        </section>
      </main>

      <SharedFooter />
    </div>
  )
}
