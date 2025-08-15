"use client"

import { useState, useEffect } from "react"
import { SharedHeader } from "@/components/shared-header"
import { SharedFooter } from "@/components/shared-footer"
import { Search, Calendar, Clock, ArrowLeft, Tag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getBlogs, type BlogPost, type BlogResponse } from "@/lib/blog-service"

// Fallback blog posts in case API fails
const fallbackBlogPosts = [
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
]

// Default categories if API fails
const defaultCategories = [
  "الكل",
  "تحسين الأداء"
]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("الكل")
  const [blogPosts, setBlogPosts] = useState(fallbackBlogPosts)
  const [isLoading, setIsLoading] = useState(true)
  const [isUsingFallback, setIsUsingFallback] = useState(false)
  const [categories, setCategories] = useState(defaultCategories)
  
  // Fetch blogs from API
  useEffect(() => {
    async function fetchBlogs() {
      try {
        setIsLoading(true)
        // If selectedCategory is not "الكل", use it for filtering
        // For API categories with objects, we need to filter by slug if available
        let categoryParam;
        if (selectedCategory !== "الكل") {
          // Try to find if we have a category with this name and get its slug
          const categoryObj = blogPosts.find(post => 
            post.category === selectedCategory
          );
          categoryParam = selectedCategory;
        }
        
        const response = await getBlogs(categoryParam)
        
        if (response && response.blogs && response.blogs.length > 0) {
          // Extract unique categories from API response
          const apiCategories = ["الكل"];
          const categoryMap = new Map();
          
          // Map API response to match our UI format
          const formattedPosts = response.blogs.map(blog => {
            // Extract category information
            let categoryName, categorySlug;
            
            if (typeof blog.category === 'object' && blog.category !== null) {
              // Handle category as object with name and slug
              // Use type assertion to avoid TypeScript errors
              const categoryObj = blog.category as { name: string; slug: string };
              categoryName = categoryObj.name;
              categorySlug = categoryObj.slug;
            } else {
              // Handle category as string
              categoryName = blog.category;
            }
            
            // Add to categories list if not already there
            if (categoryName && !categoryMap.has(categoryName)) {
              categoryMap.set(categoryName, true);
              apiCategories.push(categoryName);
            }
            
            return {
              id: parseInt(blog._id) || 0, // Convert string id to number
              title: blog.title,
              excerpt: blog.excerpt || "",
              image: blog.featuredImage?.url || "/placeholder.svg",
              date: blog.publishedAt || blog.createdAt || blog.updatedAt,
              readTime: blog.readTime ? `${blog.readTime} دقائق` : "5 دقائق",
              category: categoryName,
              categorySlug: categorySlug,
              featured: false, // Default to false since featured property doesn't exist in BlogPost type
              slug: blog.slug
            };
          });
          
          // Update categories if we got new ones from API
          if (apiCategories.length > 1) {
            setCategories(apiCategories);
          }
          
          setBlogPosts(formattedPosts);
          setIsUsingFallback(false);
        } else {
          // Use fallback data if API returns empty
          setBlogPosts(fallbackBlogPosts);
          setIsUsingFallback(true);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogPosts(fallbackBlogPosts);
        setIsUsingFallback(true);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchBlogs();
  }, [selectedCategory])

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    
    // Handle category matching for both string and object categories
    const matchesCategory = 
      selectedCategory === "الكل" || 
      post.category === selectedCategory ||
      (typeof post.category === 'object' && post.category !== null && 
        (post.category as { name?: string }).name === selectedCategory)
    
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
            {isUsingFallback && (
              <p className="text-amber-400 mt-2">نعرض حالياً محتوى احتياطي بسبب مشكلة في الاتصال بالخادم</p>
            )}
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
          
          {isLoading ? (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">جاري تحميل المقالات...</p>
            </div>
          ) : (
            filteredPosts.length === 0 ? (
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
            )
          )}
        </div>
      </section>

      <SharedFooter />
    </div>
  )
}
