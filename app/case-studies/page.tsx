"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  ShoppingBag,
  Utensils,
  Sparkles,
  Smartphone,
  Dumbbell,
  GraduationCap,
  TrendingUp,
  Users,
  Target,
} from "lucide-react"
import Link from "next/link"
import { getCaseStudiesByCategory } from "@/lib/case-studies-data"
import { motion } from "framer-motion"
import StatsMetricCard from "@/components/stats-metric-card"
import { useState } from "react"
import { AutoScrollContainer } from "@/components/auto-scroll-container" // Add this import
import { SharedHeader } from "@/components/shared-header"
import { SharedFooter } from "@/components/shared-footer"

// Industry-specific icons and colors
const industryConfig = {
  "التجارة الإلكترونية": {
    icon: ShoppingBag,
    gradient: "from-blue-500/20 to-purple-500/20",
    accentColor: "text-blue-400",
    bgPattern: "🛍️",
    borderColor: "border-blue-500/30",
  },
  "المطاعم والضيافة": {
    icon: Utensils,
    gradient: "from-orange-500/20 to-red-500/20",
    accentColor: "text-orange-400",
    bgPattern: "🍽️",
    borderColor: "border-orange-500/30",
  },
  "الصحة والجمال": {
    icon: Sparkles,
    gradient: "from-pink-500/20 to-rose-500/20",
    accentColor: "text-pink-400",
    bgPattern: "💄",
    borderColor: "border-pink-500/30",
  },
  "الإلكترونيات والتقنية": {
    icon: Smartphone,
    gradient: "from-cyan-500/20 to-blue-500/20",
    accentColor: "text-cyan-400",
    bgPattern: "💻",
    borderColor: "border-cyan-500/30",
  },
  "الصحة واللياقة": {
    icon: Dumbbell,
    gradient: "from-green-500/20 to-emerald-500/20",
    accentColor: "text-green-400",
    bgPattern: "🏃‍♂️",
    borderColor: "border-green-500/30",
  },
  "التعليم والتدريب": {
    icon: GraduationCap,
    gradient: "from-indigo-500/20 to-purple-500/20",
    accentColor: "text-indigo-400",
    bgPattern: "🎓",
    borderColor: "border-indigo-500/30",
  },
}

export default function CaseStudiesPage() {
  const caseStudiesByCategory = getCaseStudiesByCategory()
  const [selectedCategory, setSelectedCategory] = useState<string>("الكل")

  const filteredCategories =
    selectedCategory === "الكل"
      ? caseStudiesByCategory
      : { [selectedCategory]: caseStudiesByCategory[selectedCategory] || [] }

  const categories = ["الكل", ...Object.keys(caseStudiesByCategory)]

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white font-tajawal"
      dir="rtl"
    >
      {/* Shared Header */}
      <SharedHeader currentPage="أعمالنا" />

      <main>
        {/* Hero Section - Same gradient and style as main site */}
        <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-16 md:px-8 md:py-24">
          {/* Background effects - Same as main site */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/20 via-gray-900 to-black" />
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          <div className="absolute left-10 top-20 h-72 w-72 animate-pulse rounded-full bg-teal-500/10 blur-3xl" />
          <div className="absolute bottom-20 right-10 h-96 w-96 animate-pulse rounded-full bg-blue-500/10 blur-3xl delay-1000" />

          <div className="container relative z-10 mx-auto px-4 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-gradient-to-r from-teal-500/20 to-blue-500/20 px-6 py-2 backdrop-blur-sm"
            >
              <span className="text-sm font-medium text-teal-300">قصص نجاح حقيقية</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
            >
              حالات النجاح
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mb-12 max-w-4xl text-xl font-light text-gray-300 md:text-2xl"
            >
              اكتشف كيف ساعدنا عملاءنا في تحقيق نتائج استثنائية وتنمية أعمالهم بشكل مذهل
            </motion.p>

            {/* Stats - Same style as main site */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              // Removed grid classes from here
            >
              <AutoScrollContainer
                className="mx-auto flex justify-center gap-12" // Use flex and gap for AutoScrollContainer
                itemClassName="w-[80%] sm:w-auto flex-shrink-0" // Control item width on mobile
              >
                <StatsMetricCard
                  Icon={TrendingUp}
                  value={340}
                  label="متوسط نمو المبيعات"
                  formatValue={(v) => `${v}%`}
                  delay={0}
                />
                <StatsMetricCard Icon={Users} value={500} label="عميل راضي" formatValue={(v) => `${v}+`} delay={150} />
                <StatsMetricCard
                  Icon={Target}
                  value={95}
                  label="معدل نجاح الحملات"
                  formatValue={(v) => `${v}%`}
                  delay={300}
                />
              </AutoScrollContainer>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="relative py-8">
          <div className="container relative z-10 mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`
                    rounded-full px-6 py-2 text-sm font-medium transition-all duration-300
                    ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/25 scale-105"
                        : "border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-teal-400 hover:text-teal-300"
                    }
                  `}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies by Category */}
        <section className="relative overflow-hidden py-16 md:py-24 bg-black">
          {/* Background effects */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/20 via-gray-900 to-black" />
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

          <div className="container relative z-10 mx-auto px-4">
            {Object.entries(filteredCategories).map(([category, studies], categoryIndex) => {
              const config = industryConfig[category as keyof typeof industryConfig]
              const IconComponent = config?.icon || TrendingUp

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                  className="mb-20"
                >
                  {/* Category Header with Icon */}
                  <div className="flex items-center justify-center gap-4 mb-12">
                    <div
                      className={`p-3 rounded-full bg-gradient-to-r ${config?.gradient || "from-teal-500/20 to-purple-500/20"} border ${config?.borderColor || "border-teal-500/30"}`}
                    >
                      <IconComponent className={`h-8 w-8 ${config?.accentColor || "text-teal-400"}`} />
                    </div>
                    <h2 className="text-4xl font-bold text-white">{category}</h2>
                  </div>

                  {/* Grid: Cards side by side - 1 on mobile, 2 on tablet, 3 on desktop */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {studies.map((study, index) => (
                      <motion.div
                        key={study.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <Card className="h-full bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group hover:scale-[1.02] hover:shadow-2xl hover:shadow-teal-500/10">
                          <CardHeader className="pb-4">
                            {/* Industry-specific visual header */}
                            <div
                              className={`aspect-video bg-gradient-to-br ${config?.gradient || "from-teal-500/20 to-purple-500/20"} rounded-lg mb-4 flex items-center justify-center border ${config?.borderColor || "border-white/10"} relative overflow-hidden`}
                            >
                              {/* Background pattern */}
                              <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-2 right-2 text-2xl">{config?.bgPattern || "📈"}</div>
                                <div className="absolute bottom-2 left-2 text-xl opacity-50">
                                  {config?.bgPattern || "📈"}
                                </div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl opacity-20">
                                  {config?.bgPattern || "📈"}
                                </div>
                              </div>

                              {/* Main icon */}
                              <div
                                className={`relative z-10 p-4 rounded-full bg-gradient-to-r ${config?.gradient || "from-teal-500/30 to-blue-500/30"} border ${config?.borderColor || "border-white/20"}`}
                              >
                                <IconComponent className={`h-12 w-12 ${config?.accentColor || "text-teal-400"}`} />
                              </div>

                              {/* Floating metrics */}
                              <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                                <span className={`text-xs font-bold ${config?.accentColor || "text-teal-400"}`}>
                                  {study.results[0]?.value}
                                </span>
                              </div>
                            </div>

                            <CardTitle
                              className={`text-xl leading-tight group-hover:${config?.accentColor || "text-teal-300"} transition-colors text-white`}
                            >
                              {study.title}
                            </CardTitle>
                            <p className={`text-sm ${config?.accentColor || "text-teal-300"} font-medium`}>
                              {study.company}
                            </p>
                          </CardHeader>

                          <CardContent className="pt-0">
                            <p className="text-sm text-gray-300 mb-6 line-clamp-3 leading-relaxed">
                              {study.description}
                            </p>

                            {/* Key Results */}
                            <div className="space-y-3 mb-6">
                              {study.results.slice(0, 2).map((result, index) => (
                                <div
                                  key={index}
                                  className={`flex items-center justify-between text-sm bg-gradient-to-r ${config?.gradient || "from-white/5 to-white/10"} rounded-lg p-3 border ${config?.borderColor || "border-white/10"}`}
                                >
                                  <span className="text-gray-300">{result.metric}</span>
                                  <span className={`${config?.accentColor || "text-teal-400"} font-bold text-lg`}>
                                    {result.value}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                              {study.tags.slice(0, 3).map((tag) => (
                                <Badge
                                  key={tag}
                                  className={`text-xs bg-gradient-to-r ${config?.gradient || "from-teal-500/20 to-blue-500/20"} ${config?.accentColor || "text-teal-300"} border ${config?.borderColor || "border-teal-500/30"} hover:opacity-80`}
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>

                            <Link href={`/case-studies/${study.id}`}>
                              <Button
                                className={`w-full bg-gradient-to-r ${config?.gradient?.replace("/20", "") || "from-teal-500 to-teal-600"} hover:opacity-90 text-white font-medium border ${config?.borderColor || "border-teal-500/50"}`}
                              >
                                اقرأ التفاصيل
                                <ArrowRight className="mr-2 h-4 w-4" />
                              </Button>
                            </Link>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* CTA Section - Same style as main site */}
        <section className="relative overflow-hidden py-20 bg-black">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-purple-500/20" />
          <div className="container relative z-10 mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-white">جاهز لتحقيق نجاح مماثل؟</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                انضم لعملائنا الناجحين وابدأ رحلتك نحو تحقيق نتائج استثنائية
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="transform rounded-full bg-gradient-to-r from-teal-500 to-teal-600 px-10 py-4 text-lg text-white shadow-2xl shadow-teal-500/25 transition-all duration-300 hover:scale-105 hover:from-teal-600 hover:to-teal-700"
                >
                  ابدأ حملتك الآن
                  <ArrowRight className="mr-2 h-5 w-5" />
                </Button>
                <a
                  href="https://api.whatsapp.com/send/?phone=966560431575&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%2B%D8%A3%D8%B1%D9%8A%D8%AF%2B%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%2B%D8%B9%D9%86%2B%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%2B%D8%A7%D9%86%D8%B7%D9%84%D8%A7%D9%82%D8%A9%2B%D8%A7%D9%84%D8%A5%D8%B9%D9%84%D8%A7%D9%86%D9%8A%D8%A9&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border-2 border-gray-600 bg-transparent px-10 py-4 text-lg text-white transition-all duration-300 hover:border-gray-500 hover:bg-gray-800"
                  >
                    تحدث مع خبير
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Shared Footer */}
      <SharedFooter />
    </div>
  )
}
