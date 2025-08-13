"use client"

import { useState, useEffect } from "react"
import { SharedHeader } from "@/components/shared-header"
import { SharedFooter } from "@/components/shared-footer"
import { Search, Calendar, Clock, ArrowLeft, Tag, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getBlogs, getBlogCategories, type BlogPost } from "@/lib/blog-service"

// Fallback blog posts in case API fails
const fallbackBlogPosts = [
 
]

const categories = [
  
]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("الكل")
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(fallbackBlogPosts as unknown as BlogPost[])
  const [blogCategories, setBlogCategories] = useState<string[]>(categories)
  const [isLoading, setIsLoading] = useState(true)

  // Fetch blogs and categories
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await getBlogs(selectedCategory === "الكل" ? "" : selectedCategory)
        setBlogPosts(response.blogs)
        
        // Fetch categories if needed
        const categoryList = await getBlogCategories()
        if (categoryList.length > 0) {
          setBlogCategories(["الكل", ...categoryList])
        }
      } catch (error) {
        console.error('Error fetching blog data:', error)
        // Fallback data is already set as initial state
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [selectedCategory])

  const filteredPosts = blogPosts.filter((post) => {
    if (!post) return false;
    
    const matchesSearch = searchTerm ? (
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    ) : true;
    
    const matchesCategory = selectedCategory === "الكل" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  })

  // Use the first post as featured if available, otherwise null
  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null
  // All other posts are regular posts
  const regularPosts = filteredPosts.length > 1 ? filteredPosts.slice(1) : []

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
            <div className="relative min-w-[200px]">
              <div className="flex items-center gap-2 bg-gray-900 border border-gray-700 rounded-xl py-4 px-6 text-white">
                <Filter className="w-5 h-5 text-teal-400" />
                <select 
                  className="bg-transparent w-full focus:outline-none"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {blogCategories.map((category, index) => (
                    <option key={index} value={category} className="bg-gray-900 text-white">
                      {category}
                    </option>
                  ))}
                </select>
              </div>
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
                      src={featuredPost.featuredImage?.url || "/placeholder.svg"}
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
                      <span>{new Date(featuredPost.publishedAt || featuredPost.createdAt).toLocaleDateString("ar-SA")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime} دقائق</span>
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
                  key={post._id || post.slug}
                  className="bg-gray-900 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className="relative h-48">
                    <Image
                      src={post.featuredImage?.url || "/placeholder.svg"}
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
