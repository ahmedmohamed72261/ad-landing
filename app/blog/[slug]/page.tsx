import { SharedHeader } from "@/components/shared-header"
import { SharedFooter } from "@/components/shared-footer"
import { Calendar, Clock, ArrowRight, Share2, Tag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getBlogBySlug } from "@/lib/blog-service"

const blogPosts = {
 
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params
  
  // Try to fetch from API first
  let post: any = await getBlogBySlug(slug)
  
  // Fallback to static data if API fails or post not found
  if (!post) {
    post = blogPosts[slug as keyof typeof blogPosts]
    if (!post) {
      notFound()
    }
  }
  
  // Map API data structure to match our UI expectations if it's from API
  if (post._id) {
    post = {
      ...post,
      image: post.featuredImage?.url || "/placeholder.svg",
      date: post.publishedAt || post.createdAt,
      readTime: `${post.readTime || 1} دقائق`
    }
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
                <span>{new Date(post.date).toLocaleDateString("ar-SA")}</span>
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
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
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
          <div className="prose prose-invert prose-lg max-w-none prose-headings:text-teal-400 prose-headings:font-bold prose-p:text-gray-300 prose-p:leading-relaxed prose-ul:text-gray-300 prose-li:mb-2">
            {post._id ? (
              <div className="whitespace-pre-line">{post.content}</div>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            )}
          </div>

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

export async function generateStaticParams() {
  try {
    // Try to get blogs from API first
    const response = await fetch('https://ad-landing-blog-server.vercel.app/api/blogs');
    const { blogs } = await response.json();
    
    if (blogs && blogs.length > 0) {
      return blogs.map((blog: any) => ({
        slug: blog.slug,
      }));
    }
  } catch (error) {
    console.error('Error generating static params:', error);
  }
  
  // Fallback to static data if API fails
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}
