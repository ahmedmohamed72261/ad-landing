"use client"

import { useState } from "react"
import { SharedHeader } from "@/components/shared-header"
import { SharedFooter } from "@/components/shared-footer"
import { Search, Calendar, Clock, ArrowLeft, Tag } from "lucide-react"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "كيف تحقق عائد استثمار 300% من حملاتك الإعلانية",
    excerpt: "اكتشف الاستراتيجيات المتقدمة لتحسين ROAS وزيادة أرباحك من الإعلانات الرقمية مع منصة انطلاقة.",
    image: "/blog-roas-success.png",
    date: "2025-01-15",
    readTime: "5 دقائق",
    category: "تحسين الأداء",
    featured: true,
    slug: "roas-optimization-guide",
  },
  {
    id: 2,
    title: "دليل شامل لإعلانات المؤثرين في السعودية",
    excerpt: "تعرف على أفضل الممارسات للتعاون مع المؤثرين وتحقيق أقصى استفادة من حملاتك التسويقية.",
    image: "/blog-influencer-campaigns.png",
    date: "2025-01-12",
    readTime: "7 دقائق",
    category: "إعلانات المؤثرين",
    slug: "influencer-marketing-saudi",
  },
  {
    id: 3,
    title: "الذكاء الاصطناعي في الإعلانات: المستقبل هنا",
    excerpt: "كيف تستخدم تقنيات الذكاء الاصطناعي لتحسين استهداف جمهورك وزيادة معدلات التحويل.",
    image: "/blog-ai-advertising.png",
    date: "2025-01-10",
    readTime: "6 دقائق",
    category: "تكنولوجيا",
    slug: "ai-advertising-future",
  },
  {
    id: 4,
    title: "استراتيجيات التسويق عبر وسائل التواصل الاجتماعي",
    excerpt: "أحدث الطرق للوصول إلى جمهورك المستهدف عبر منصات التواصل الاجتماعي المختلفة.",
    image: "/blog-social-media-marketing.png",
    date: "2025-01-08",
    readTime: "4 دقائق",
    category: "وسائل التواصل",
    slug: "social-media-strategies",
  },
  {
    id: 5,
    title: "نمو التجارة الإلكترونية: قصص نجاح ملهمة",
    excerpt: "تعرف على قصص نجاح حقيقية لمتاجر إلكترونية حققت نمواً استثنائياً باستخدام منصة انطلاقة.",
    image: "/blog-ecommerce-growth.png",
    date: "2025-01-05",
    readTime: "8 دقائق",
    category: "قصص نجاح",
    slug: "ecommerce-success-stories",
  },
  {
    id: 6,
    title: "تحسين الحملات الإعلانية: دليل المبتدئين",
    excerpt: "خطوات عملية لتحسين أداء حملاتك الإعلانية وتقليل تكلفة الاكتساب بشكل فعال.",
    image: "/blog-campaign-optimization.png",
    date: "2025-01-03",
    readTime: "5 دقائق",
    category: "تحسين الأداء",
    slug: "campaign-optimization-guide",
  },
  {
    id: 7,
    title: "كيفية بناء استراتيجية محتوى فعالة للإعلانات",
    excerpt: "تعلم كيفية إنشاء محتوى إعلاني جذاب يحقق أهدافك التسويقية ويزيد من تفاعل جمهورك.",
    image: "/blog-content-strategy.png",
    date: "2025-01-01",
    readTime: "6 دقائق",
    category: "استراتيجية المحتوى",
    slug: "content-strategy-guide",
  },
  {
    id: 8,
    title: "تحليل المنافسين: الدليل الشامل للتفوق في السوق",
    excerpt: "اكتشف كيفية تحليل منافسيك واستخدام هذه المعلومات لتطوير استراتيجيات إعلانية متفوقة.",
    image: "/blog-competitor-analysis.png",
    date: "2024-12-28",
    readTime: "7 دقائق",
    category: "تحليل السوق",
    slug: "competitor-analysis-guide",
  },
  {
    id: 9,
    title: "الإعلانات المحلية: كيف تصل لعملائك في منطقتك",
    excerpt: "استراتيجيات فعالة للإعلانات المحلية وكيفية استهداف العملاء في منطقتك الجغرافية بدقة.",
    image: "/blog-local-advertising.png",
    date: "2024-12-25",
    readTime: "5 دقائق",
    category: "إعلانات محلية",
    slug: "local-advertising-strategies",
  },
  {
    id: 10,
    title: "مستقبل التسويق الرقمي في المملكة العربية السعودية",
    excerpt: "نظرة على الاتجاهات الناشئة في التسويق الرقمي والفرص المتاحة في السوق السعودي.",
    image: "/blog-digital-marketing-future.png",
    date: "2024-12-22",
    readTime: "8 دقائق",
    category: "اتجاهات السوق",
    slug: "digital-marketing-future-saudi",
  },
]

const categories = [
  "الكل",
  "تحسين الأداء",
  "إعلانات المؤثرين",
  "تكنولوجيا",
  "وسائل التواصل",
  "قصص نجاح",
  "استراتيجية المحتوى",
  "تحليل السوق",
  "إعلانات محلية",
  "اتجاهات السوق",
]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("الكل")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "الكل" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-black text-white" dir="rtl">
      <SharedHeader currentPage="blog" />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              مدونة <span className="text-teal-400">انطلاقة</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              اكتشف أحدث الاتجاهات والاستراتيجيات في عالم الإعلانات الرقمية والتسويق الإلكتروني
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="relative flex-1">
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="ابحث في المقالات..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded-xl px-12 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 transition-colors"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? "bg-teal-400 text-black font-semibold"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && selectedCategory === "الكل" && !searchTerm && (
        <section className="px-4 mb-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-teal-400">المقال المميز</h2>
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-teal-400 text-black px-3 py-1 rounded-full text-sm font-semibold">مميز</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString("ar-SA")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4" />
                      <span>{featuredPost.category}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-teal-400 transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <a
                    href={`/blog/${featuredPost.slug}`}
                    className="bg-teal-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-teal-300 transition-colors flex items-center gap-2 inline-flex"
                  >
                    اقرأ المقال
                    <ArrowLeft className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">
            {searchTerm ? `نتائج البحث (${filteredPosts.length})` : "أحدث المقالات"}
          </h2>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">لم يتم العثور على مقالات تطابق بحثك</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-gray-900 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className="relative h-48">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm">{post.category}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString("ar-SA")}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-teal-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <a
                      href={`/blog/${post.slug}`}
                      className="text-teal-400 font-semibold hover:text-teal-300 transition-colors flex items-center gap-2"
                    >
                      اقرأ المزيد
                      <ArrowLeft className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <SharedFooter />
    </div>
  )
}
