"use client"

import { SharedHeader } from "@/components/shared-header"
import { SharedFooter } from "@/components/shared-footer"
import { useState } from "react"
import {
  Filter,
  Star,
  Users,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
  Instagram,
  Youtube,
  TrendingUp,
} from "lucide-react"

export default function InfluencerMarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState("الكل")
  const [selectedLocation, setSelectedLocation] = useState("الكل")
  const [selectedFollowers, setSelectedFollowers] = useState("الكل")

  const categories = [
    "الكل",
    "الموضة والأزياء",
    "الطعام والطبخ",
    "التقنية",
    "الجمال والعناية",
    "السفر والسياحة",
    "الرياضة واللياقة",
    "الأعمال والمال",
    "التعليم",
    "الصحة والطب",
  ]

  const locations = ["الكل", "السعودية", "الإمارات", "مصر", "الكويت", "قطر", "البحرين", "الأردن", "لبنان"]
  const followerRanges = ["الكل", "10K-50K", "50K-100K", "100K-500K", "500K-1M", "+1M"]

  const influencers = [
    {
      id: 1,
      name: "سارة أحمد",
      category: "الموضة والأزياء",
      location: "السعودية",
      followers: "850K",
      engagement: "8.5%",
      rating: 4.9,
      price: "15,000",
      image: "/saudi-fashion-influencer.png",
      platforms: ["instagram", "tiktok"],
      specialties: ["أزياء راقية", "إكسسوارات", "مكياج"],
      completedCampaigns: 127,
      responseTime: "خلال ساعتين",
    },
    {
      id: 2,
      name: "محمد الشيف",
      category: "الطعام والطبخ",
      location: "الإمارات",
      followers: "1.2M",
      engagement: "12.3%",
      rating: 4.8,
      price: "25,000",
      image: "/arab-chef-cooking.png",
      platforms: ["instagram", "youtube"],
      specialties: ["مأكولات عربية", "حلويات", "طبخ صحي"],
      completedCampaigns: 89,
      responseTime: "خلال 4 ساعات",
    },
    {
      id: 3,
      name: "تقنية مع أحمد",
      category: "التقنية",
      location: "السعودية",
      followers: "650K",
      engagement: "9.2%",
      rating: 4.7,
      price: "18,000",
      image: "/arab-tech-reviewer.png",
      platforms: ["youtube", "instagram"],
      specialties: ["مراجعة هواتف", "تطبيقات", "ألعاب"],
      completedCampaigns: 156,
      responseTime: "خلال ساعة",
    },
    {
      id: 4,
      name: "نورا للجمال",
      category: "الجمال والعناية",
      location: "الكويت",
      followers: "420K",
      engagement: "11.8%",
      rating: 4.9,
      price: "12,000",
      image: "/beauty-influencer-arab-woman.png",
      platforms: ["instagram", "tiktok"],
      specialties: ["مكياج", "عناية بالبشرة", "تسريحات"],
      completedCampaigns: 203,
      responseTime: "خلال 3 ساعات",
    },
    {
      id: 5,
      name: "رحالة العرب",
      category: "السفر والسياحة",
      location: "الإمارات",
      followers: "780K",
      engagement: "7.4%",
      rating: 4.6,
      price: "20,000",
      image: "/arab-travel-blogger.png",
      platforms: ["instagram", "youtube"],
      specialties: ["سياحة داخلية", "فنادق", "مطاعم"],
      completedCampaigns: 94,
      responseTime: "خلال 6 ساعات",
    },
    {
      id: 6,
      name: "فتنس مع ليلى",
      category: "الرياضة واللياقة",
      location: "قطر",
      followers: "320K",
      engagement: "13.5%",
      rating: 4.8,
      price: "10,000",
      image: "/arab-woman-fitness-trainer.png",
      platforms: ["instagram", "tiktok"],
      specialties: ["تمارين منزلية", "تغذية صحية", "يوغا"],
      completedCampaigns: 178,
      responseTime: "خلال ساعة",
    },
  ]

  const filteredInfluencers = influencers.filter((influencer) => {
    const categoryMatch = selectedCategory === "الكل" || influencer.category === selectedCategory
    const locationMatch = selectedLocation === "الكل" || influencer.location === selectedLocation
    const followersMatch = selectedFollowers === "الكل" || checkFollowersRange(influencer.followers, selectedFollowers)
    return categoryMatch && locationMatch && followersMatch
  })

  function checkFollowersRange(followers: string, range: string) {
    const num = Number.parseFloat(followers.replace("K", "").replace("M", ""))
    const isK = followers.includes("K")
    const isM = followers.includes("M")

    switch (range) {
      case "10K-50K":
        return isK && num >= 10 && num <= 50
      case "50K-100K":
        return isK && num >= 50 && num <= 100
      case "100K-500K":
        return isK && num >= 100 && num <= 500
      case "500K-1M":
        return (isK && num >= 500) || (isM && num < 1)
      case "+1M":
        return isM && num >= 1
      default:
        return true
    }
  }

  return (
    <div className="min-h-screen bg-black text-white" dir="rtl">
      <SharedHeader currentPage="solutions" />

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-600/20 px-4 py-2 text-teal-400">
            <Star className="h-5 w-5" />
            <span>أكبر شبكة مؤثرين في الوطن العربي</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
            اكتشف أفضل
            <span className="block text-teal-400">المؤثرين العرب</span>
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-300 leading-relaxed">
            تواصل مع نخبة من المؤثرين المحترفين في جميع التخصصات وحقق أهدافك التسويقية بفعالية
          </p>
        </div>

        {/* Stats */}
        <div className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="rounded-lg bg-gray-900/50 p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-teal-400">500+</div>
            <div className="text-gray-300">مؤثر محترف</div>
          </div>
          <div className="rounded-lg bg-gray-900/50 p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-teal-400">50M+</div>
            <div className="text-gray-300">إجمالي المتابعين</div>
          </div>
          <div className="rounded-lg bg-gray-900/50 p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-teal-400">2000+</div>
            <div className="text-gray-300">حملة ناجحة</div>
          </div>
          <div className="rounded-lg bg-gray-900/50 p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-teal-400">95%</div>
            <div className="text-gray-300">معدل الرضا</div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-12 rounded-xl bg-gray-900/50 p-6">
          <div className="mb-6 flex items-center gap-2">
            <Filter className="h-5 w-5 text-teal-400" />
            <h3 className="text-lg font-semibold text-white">تصفية النتائج</h3>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Category Filter */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">التخصص</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-2 text-white focus:border-teal-400 focus:outline-none"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">الموقع</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-2 text-white focus:border-teal-400 focus:outline-none"
              >
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>

            {/* Followers Filter */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">عدد المتابعين</label>
              <select
                value={selectedFollowers}
                onChange={(e) => setSelectedFollowers(e.target.value)}
                className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-2 text-white focus:border-teal-400 focus:outline-none"
              >
                {followerRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Influencers Grid */}
        <div className="mb-16">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">المؤثرون المتاحون ({filteredInfluencers.length})</h2>
            <div className="flex items-center gap-2 text-gray-300">
              <span>ترتيب حسب:</span>
              <select className="rounded bg-gray-800 border border-gray-700 px-3 py-1 text-white">
                <option>الأعلى تقييماً</option>
                <option>الأكثر متابعة</option>
                <option>الأقل سعراً</option>
                <option>الأسرع استجابة</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredInfluencers.map((influencer) => (
              <div
                key={influencer.id}
                className="rounded-xl bg-gray-900/50 overflow-hidden transition-transform hover:scale-105"
              >
                {/* Profile Image */}
                <div className="relative h-64 bg-gradient-to-br from-teal-600 to-blue-600">
                  <img
                    src={influencer.image || "/placeholder.svg"}
                    alt={influencer.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    {influencer.platforms.includes("instagram") && (
                      <div className="rounded-full bg-pink-600 p-2">
                        <Instagram className="h-4 w-4 text-white" />
                      </div>
                    )}
                    {influencer.platforms.includes("youtube") && (
                      <div className="rounded-full bg-red-600 p-2">
                        <Youtube className="h-4 w-4 text-white" />
                      </div>
                    )}
                    {influencer.platforms.includes("tiktok") && (
                      <div className="rounded-full bg-black p-2">
                        <span className="text-white text-xs font-bold">TT</span>
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{influencer.rating}</span>
                      <span className="text-sm opacity-75">({influencer.completedCampaigns} حملة)</span>
                    </div>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white">{influencer.name}</h3>
                    <div className="flex items-center gap-2 text-gray-300">
                      <MapPin className="h-4 w-4" />
                      <span>{influencer.location}</span>
                      <span>•</span>
                      <span className="text-teal-400">{influencer.category}</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mb-4 grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-teal-400">{influencer.followers}</div>
                      <div className="text-xs text-gray-400">متابع</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-teal-400">{influencer.engagement}</div>
                      <div className="text-xs text-gray-400">معدل التفاعل</div>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {influencer.specialties.map((specialty, index) => (
                        <span key={index} className="rounded-full bg-teal-600/20 px-3 py-1 text-xs text-teal-400">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="mb-4 flex items-center gap-2 text-gray-300">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">يرد {influencer.responseTime}</span>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-white">{influencer.price} ر.س</div>
                      <div className="text-xs text-gray-400">للمنشور الواحد</div>
                    </div>
                    <button className="rounded-lg bg-teal-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-teal-700">
                      تواصل الآن
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">خدماتنا الشاملة</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-gray-900/50 p-6 text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal-600/20">
                <Users className="h-6 w-6 text-teal-400" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-white">إدارة الحملات</h3>
              <p className="text-gray-300">نتولى إدارة حملتك من البداية للنهاية</p>
            </div>

            <div className="rounded-xl bg-gray-900/50 p-6 text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal-600/20">
                <TrendingUp className="h-6 w-6 text-teal-400" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-white">تقارير مفصلة</h3>
              <p className="text-gray-300">تقارير شاملة عن أداء الحملة والنتائج</p>
            </div>

            <div className="rounded-xl bg-gray-900/50 p-6 text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal-600/20">
                <CheckCircle className="h-6 w-6 text-teal-400" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-white">ضمان الجودة</h3>
              <p className="text-gray-300">نضمن جودة المحتوى والالتزام بالمواعيد</p>
            </div>

            <div className="rounded-xl bg-gray-900/50 p-6 text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal-600/20">
                <MessageCircle className="h-6 w-6 text-teal-400" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-white">دعم مستمر</h3>
              <p className="text-gray-300">فريق دعم متاح 24/7 لمساعدتك</p>
            </div>
          </div>
        </div>

        {/* How it Works */}
        <div className="mb-16">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">كيف نعمل معك؟</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal-600 text-2xl font-bold text-white">
                1
              </div>
              <h3 className="mb-4 text-lg font-bold text-white">اختر المؤثر</h3>
              <p className="text-gray-300">تصفح قائمة المؤثرين واختر الأنسب لعلامتك التجارية</p>
            </div>

            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal-600 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="mb-4 text-lg font-bold text-white">حدد التفاصيل</h3>
              <p className="text-gray-300">اتفق على تفاصيل الحملة والمحتوى المطلوب</p>
            </div>

            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal-600 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="mb-4 text-lg font-bold text-white">تنفيذ الحملة</h3>
              <p className="text-gray-300">المؤثر ينشئ المحتوى وينشره حسب الاتفاق</p>
            </div>

            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal-600 text-2xl font-bold text-white">
                4
              </div>
              <h3 className="mb-4 text-lg font-bold text-white">النتائج والتقارير</h3>
              <p className="text-gray-300">احصل على تقارير مفصلة عن أداء الحملة</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 p-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">جاهز لإطلاق حملتك؟</h2>
          <p className="mb-8 text-xl text-teal-100">تواصل مع أفضل المؤثرين العرب وحقق أهدافك التسويقية</p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button className="flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-teal-600 transition-colors hover:bg-gray-100">
              ابدأ حملتك الآن
              <ArrowRight className="h-5 w-5" />
            </button>
            <a
              href="/contact"
              className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-teal-600"
            >
              تحدث مع خبير
            </a>
          </div>
        </div>
      </main>

      <SharedFooter />
    </div>
  )
}
