import {
  LayoutGrid,
  ShoppingBag,
  Package,
  Users,
  BarChart,
  HelpCircle,
  ChevronLeft,
  DollarSign,
  Eye,
  ShoppingCart,
  Star,
  Percent,
  Gift,
  Clock,
  CreditCard,
  Truck,
  MessageSquare,
  Heart,
  Tag,
  Plus,
  Zap,
  Target,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-black text-white" dir="rtl">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-950 p-6 border-l border-gray-800 flex flex-col">
        <div className="flex items-center gap-2 mb-8">
          <Zap className="h-8 w-8 text-teal-400" />
          <span className="text-2xl font-bold">إعلانات سلة</span>
        </div>
        <nav className="space-y-4 flex-1">
          <Link href="#" className="flex items-center gap-3 text-gray-300 hover:text-teal-400 transition-colors">
            <LayoutGrid className="h-5 w-5" />
            الرئيسية
          </Link>
          <Link href="#" className="flex items-center gap-3 text-gray-300 hover:text-teal-400 transition-colors">
            <ShoppingBag className="h-5 w-5" />
            المتجر وقنوات البيع
          </Link>
          <Link href="#" className="flex items-center gap-3 text-gray-300 hover:text-teal-400 transition-colors">
            <BarChart className="h-5 w-5" />
            التسويق
          </Link>
          <Link href="#" className="flex items-center gap-3 text-gray-300 hover:text-teal-400 transition-colors">
            <Package className="h-5 w-5" />
            المنتجات
          </Link>
          <Link href="#" className="flex items-center gap-3 text-gray-300 hover:text-teal-400 transition-colors">
            <ShoppingCart className="h-5 w-5" />
            الطلبات
          </Link>
          <Link href="#" className="flex items-center gap-3 text-gray-300 hover:text-teal-400 transition-colors">
            <Users className="h-5 w-5" />
            العملاء
          </Link>
          <Link href="#" className="flex items-center gap-3 text-gray-300 hover:text-teal-400 transition-colors">
            <BarChart className="h-5 w-5" />
            التقارير
          </Link>
        </nav>
        <div className="mt-auto">
          <Button
            variant="outline"
            className="w-full justify-start text-gray-300 hover:text-teal-400 border-gray-800 hover:border-teal-400 bg-transparent"
          >
            <HelpCircle className="h-5 w-5 mr-2" />
            مساعدة
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <DashboardHeader />

        {/* Dashboard Content */}
        <div className="flex-1 p-4 md:p-8 overflow-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Sales Overview Card */}
            <Card className="lg:col-span-2 bg-gray-900 border border-gray-800 text-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-semibold">ملخص أغسطس 2025</CardTitle>
                <Tabs defaultValue="daily" className="w-auto">
                  <TabsList className="bg-gray-800 text-gray-400">
                    <TabsTrigger
                      value="daily"
                      className="data-[state=active]:bg-teal-500 data-[state=active]:text-white"
                    >
                      يومي
                    </TabsTrigger>
                    <TabsTrigger
                      value="monthly"
                      className="data-[state=active]:bg-teal-500 data-[state=active]:text-white"
                    >
                      شهري
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-teal-400" />
                    <span className="text-2xl font-bold">3,834.00 ر.س</span>
                    <span className="text-sm text-gray-400">المبيعات</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="h-5 w-5 text-teal-400" />
                    <span className="text-2xl font-bold">0</span>
                    <span className="text-sm text-gray-400">الزيارات</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5 text-teal-400" />
                    <span className="text-2xl font-bold">18</span>
                    <span className="text-sm text-gray-400">الطلبات</span>
                  </div>
                </div>
                <div className="h-48 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500">
                  {/* Placeholder for the graph */}
                  <Image
                    src="https://blob.v0.dev/nnGx1.png"
                    alt="Sales Graph Placeholder"
                    width={600}
                    height={200}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <div className="flex justify-between items-center mt-4">
                  <Button variant="outline" className="bg-gray-800 text-gray-300 hover:bg-gray-700 border-gray-700">
                    المزيد من التقارير
                  </Button>
                  <Button variant="outline" className="bg-gray-800 text-gray-300 hover:bg-gray-700 border-gray-700">
                    إضافة هدف الشهر
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Transfers Card */}
            <Card className="bg-gray-900 border border-gray-800 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold flex items-center justify-between">
                  <span>تنقل سريع</span>
                  <LayoutGrid className="h-5 w-5 text-gray-400" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-gray-400" />
                    <span className="text-lg font-semibold">رصيد المتجر</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">63.11 ر.س</span>
                    <ChevronLeft className="h-4 w-4 text-gray-500" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-gray-400" />
                    <span className="text-lg font-semibold">رصيد مدفوعات الدفع الإلكتروني</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">514.02 ر.س</span>
                    <ChevronLeft className="h-4 w-4 text-gray-500" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Truck className="h-5 w-5 text-gray-400" />
                    <span className="text-lg font-semibold">رصيد مدفوعات الدفع عند الاستلام</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">287.48 ر.س</span>
                    <ChevronLeft className="h-4 w-4 text-gray-500" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-gray-400" />
                    <span className="text-lg font-semibold">الأسئلة والتقييمات</span>
                    <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">10</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">10</span>
                    <Star className="h-4 w-4 text-gray-500" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Percent className="h-5 w-5 text-gray-400" />
                    <span className="text-lg font-semibold">كوبونات التخفيض</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">6</span>
                    <ChevronLeft className="h-4 w-4 text-gray-500" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Gift className="h-5 w-5 text-gray-400" />
                    <span className="text-lg font-semibold">العروض الخاصة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">0</span>
                    <ChevronLeft className="h-4 w-4 text-gray-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Latest Orders Card */}
            <Card className="lg:col-span-2 bg-gray-900 border border-gray-800 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5 text-teal-400" />
                  أحدث الطلبات
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                  <div>
                    <p className="font-semibold">فيد التنفيذ #199016800</p>
                    <p className="text-sm text-gray-400">عايشه عبداللطيف الحادي</p>
                  </div>
                  <span className="text-lg font-bold">263.00 ر.س</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                  <div>
                    <p className="font-semibold">تم التنفيذ #198959790</p>
                    <p className="text-sm text-gray-400">خلود راشد</p>
                  </div>
                  <span className="text-lg font-bold">263.00 ر.س</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                  <div>
                    <p className="font-semibold">جاري التوصيل #198376830</p>
                    <p className="text-sm text-gray-400">نسرين العتيبي</p>
                  </div>
                  <span className="text-lg font-bold">233.00 ر.س</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                  <div>
                    <p className="font-semibold">تم التوصيل #198219370</p>
                    <p className="text-sm text-gray-400">أسماء العصيمي</p>
                  </div>
                  <span className="text-lg font-bold">233.00 ر.س</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">قيد التنفيذ #198126671</p>
                    <p className="text-sm text-gray-400">جواهر عبدالغزيز</p>
                  </div>
                  <span className="text-lg font-bold">170.00 ر.س</span>
                </div>
              </CardContent>
            </Card>

            {/* Visits in last 60 minutes Card */}
            <Card className="bg-gray-900 border border-gray-800 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Clock className="h-5 w-5 text-teal-400" />
                  الزيارات في آخر 60 دقيقة
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center text-5xl font-bold text-teal-400">0</div>
                <p className="text-center text-gray-400">عدد الزائرين للصفحات</p>
              </CardContent>
            </Card>

            {/* Abandoned Carts Card */}
            <Card className="bg-gray-900 border border-gray-800 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Heart className="h-5 w-5 text-teal-400" />
                  السلات المتروكة
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder-user.png" alt="User Avatar" />
                    <AvatarFallback>ZD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">جديد</p>
                    <p className="text-sm text-gray-400">زهراء الجميمه</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder-user.png" alt="User Avatar" />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">جديد</p>
                    <p className="text-sm text-gray-400">أحمد السالم</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Orders Card */}
            <Card className="bg-gray-900 border border-gray-800 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Tag className="h-5 w-5 text-teal-400" />
                  الطلبات السريعة
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-center items-center h-32 bg-gray-800 rounded-lg">
                  <Image
                    src="/quick-orders-icon.png"
                    alt="Quick Orders Icon"
                    width={100}
                    height={100}
                    className="opacity-50"
                  />
                </div>
                <Button
                  variant="outline"
                  className="w-full bg-gray-800 text-gray-300 hover:bg-gray-700 border-gray-700"
                >
                  <Plus className="h-4 w-4 ml-2" />
                  إضافة طلب سريع
                </Button>
              </CardContent>
            </Card>

            {/* Goal Setting Card */}
            <Card className="bg-gray-900 border border-gray-800 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Target className="h-5 w-5 text-teal-400" />
                  حدد الهدف الذي يحفز شغفك!
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-400">وضع الأهداف يساعدك على التركيز وقياس التقدم.</p>
                <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">إضافة هدف جديد</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
