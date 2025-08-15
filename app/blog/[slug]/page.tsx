"use client"

import { SharedHeader } from "@/components/shared-header"
import { SharedFooter } from "@/components/shared-footer"
import { Calendar, Clock, ArrowRight, Share2, Tag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getBlogBySlug } from "@/lib/blog-service"

// Fallback blog data in case API fails
const fallbackBlogPosts = {
  "roas-optimization-guide": {
    id: 1,
    title: "كيف تحقق عائد استثمار 300% من حملاتك الإعلانية",
    excerpt: "اكتشف الاستراتيجيات المتقدمة لتحسين ROAS وزيادة أرباحك من الإعلانات الرقمية مع منصة انطلاقة.",
    image: "/blog-roas-success.png",
    date: "2025-01-15",
    readTime: "5 دقائق",
    category: "تحسين الأداء",
    featured: true,
    content: `
      <h2>مقدمة</h2>
      <p>في عالم الإعلانات الرقمية اليوم، يعتبر تحقيق عائد استثمار مرتفع (ROAS) الهدف الأساسي لكل مسوق. مع منصة انطلاقة، يمكنك تحقيق عائد استثمار يصل إلى 300% من خلال تطبيق الاستراتيجيات المتقدمة التي سنشاركها معك في هذا المقال.</p>
      
      <h2>1. تحليل البيانات بدقة</h2>
      <p>البداية الصحيحة لأي حملة إعلانية ناجحة تكمن في تحليل البيانات بدقة. نحن في انطلاقة نستخدم أدوات تحليل متقدمة لفهم سلوك جمهورك المستهدف وتحديد أفضل الأوقات والمنصات للوصول إليهم.</p>
      
      <h2>2. الاستهداف الذكي</h2>
      <p>الاستهداف الذكي يعني الوصول إلى الأشخاص المناسبين في الوقت المناسب. نحن نستخدم تقنيات الذكاء الاصطناعي لتحديد الجمهور الأكثر احتمالاً للتفاعل مع إعلاناتك وإجراء عمليات شراء.</p>
      
      <h2>3. تحسين الإعلانات باستمرار</h2>
      <p>التحسين المستمر هو مفتاح النجاح. نحن نراقب أداء حملاتك على مدار الساعة ونجري التعديلات اللازمة لضمان تحقيق أفضل النتائج الممكنة.</p>
      
      <h2>النتائج المتوقعة</h2>
      <p>باتباع هذه الاستراتيجيات، يمكن لعملائنا تحقيق:</p>
      <ul>
        <li>زيادة في العائد على الاستثمار بنسبة تصل إلى 300%</li>
        <li>تقليل تكلفة الاكتساب بنسبة 40%</li>
        <li>زيادة معدلات التحويل بنسبة 60%</li>
      </ul>
      
      <h2>خاتمة</h2>
      <p>تحقيق عائد استثمار مرتفع ليس مجرد حلم، بل واقع يمكن تحقيقه مع الاستراتيجيات الصحيحة والأدوات المناسبة. انضم إلى منصة انطلاقة اليوم وابدأ رحلتك نحو تحقيق أرباح استثنائية من حملاتك الإعلانية.</p>
    `,
  }
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // Try to fetch the blog post from the API
  let post = await getBlogBySlug(params.slug)
  let isUsingFallback = false
  
  // If API fails, use fallback data
  if (!post) {
    const fallbackPost = fallbackBlogPosts[params.slug as keyof typeof fallbackBlogPosts]
    
    if (!fallbackPost) {
      notFound()
    }
    
    // Convert fallback post to match API format
    post = {
      _id: fallbackPost.id.toString(),
      title: fallbackPost.title,
      slug: params.slug,
      content: fallbackPost.content,
      excerpt: fallbackPost.excerpt,
      featuredImage: { url: fallbackPost.image, publicId: '' },
      author: { _id: '', username: 'admin', firstName: 'Admin', lastName: '', avatar: '' },
      category: fallbackPost.category,
      tags: [],
      status: 'published',
      views: 0,
      readTime: parseInt(fallbackPost.readTime) || 5,
      createdAt: fallbackPost.date,
      updatedAt: fallbackPost.date,
      publishedAt: fallbackPost.date
    }
    
    isUsingFallback = true
  }

  return (
    <div className="min-h-screen bg-black text-white" dir="rtl">
      <SharedHeader currentPage="blog" />

      <article className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link href="/blog" className="text-teal-400 hover:text-teal-300 flex items-center gap-2">
              <ArrowRight className="w-4 h-4" />
              العودة إلى المدونة
            </Link>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.publishedAt).toLocaleDateString("ar-SA")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                <span className="bg-teal-400/20 text-teal-400 px-3 py-1 rounded-full">{post.category}</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">{post.excerpt}</p>

            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
              <Image src={post.featuredImage?.url || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>

            <div className="flex items-center justify-between border-b border-gray-800 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">ا</span>
                </div>
                <div>
                  <p className="font-semibold">فريق انطلاقة</p>
                  <p className="text-sm text-gray-400">خبراء التسويق الرقمي</p>
                </div>
              </div>
              <button className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors">
                <Share2 className="w-5 h-5" />
                مشاركة
              </button>
            </div>
          </header>

          {/* Article Content */}
          <div
            className="prose prose-invert prose-lg max-w-none prose-headings:text-teal-400 prose-headings:font-bold prose-p:text-gray-300 prose-p:leading-relaxed prose-ul:text-gray-300 prose-li:mb-2"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Call to Action */}
          <div className="mt-16 bg-gradient-to-r from-teal-400/10 to-blue-400/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">هل أنت مستعد لتحقيق نتائج مذهلة؟</h3>
            <p className="text-gray-300 mb-6">انضم إلى آلاف العملاء الذين حققوا نجاحاً باهراً مع منصة انطلاقة</p>
            <Link
              href="/contact"
              className="bg-teal-400 text-black px-8 py-4 rounded-xl font-semibold hover:bg-teal-300 transition-colors inline-block"
            >
              ابدأ حملتك الآن
            </Link>
          </div>
        </div>
      </article>

      <SharedFooter />
    </div>
  )
}
