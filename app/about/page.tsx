import { Button } from "@/components/ui/button"
import {
  CheckCircle2,
  Target,
  Users,
  Award,
  TrendingUp,
  Globe,
  Heart,
  Lightbulb,
  Shield,
  ArrowLeft,
  Sparkles,
  Star,
} from "lucide-react"
import { SharedHeader } from "@/components/shared-header"
import { SharedFooter } from "@/components/shared-footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white font-tajawal" dir="rtl">
      <SharedHeader currentPage="من نحن" />

      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-500/20 px-4 py-2 text-teal-400">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">قصتنا ورؤيتنا</span>
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              نحن
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                {" "}
                انطلاقة
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-300 md:text-xl">
              منصة إعلانية رائدة تهدف إلى تمكين الشركات والأفراد من تحقيق أهدافهم التسويقية بأحدث التقنيات وأفضل
              الممارسات
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button className="rounded-full bg-teal-500 px-8 py-3 text-white transition-colors hover:bg-teal-600">
                انضم إلى فريقنا
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-2 border-gray-600 bg-transparent px-8 py-3 text-white transition-colors hover:bg-gray-800"
              >
                تعرف على قصتنا
              </Button>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="relative overflow-hidden bg-gray-950 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="text-right">
                <h2 className="mb-6 text-4xl font-bold md:text-5xl text-right">قصتنا</h2>
                <div className="space-y-6 text-lg text-gray-300 text-right leading-relaxed">
                  <p>
                    بدأت انطلاقة كحلم بسيط لتغيير مشهد الإعلانات الرقمية في المنطقة العربية. في عام 2019، لاحظ فريقنا
                    المؤسس الحاجة الماسة لمنصة إعلانية متطورة تفهم احتياجات السوق المحلي وتقدم حلولاً مبتكرة.
                  </p>
                  <p>
                    منذ ذلك الحين، نمت انطلاقة لتصبح واحدة من أبرز المنصات الإعلانية في الشرق الأوسط، حيث ساعدنا آلاف
                    الشركات على تحقيق أهدافها التسويقية وزيادة مبيعاتها بشكل كبير.
                  </p>
                  <p>
                    اليوم، نفخر بكوننا شريك النجاح لأكثر من 60,000 متجر إلكتروني، ونواصل الابتكار لتقديم أفضل الحلول
                    الإعلانية المدعومة بالذكاء الاصطناعي.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl bg-gradient-to-br from-teal-500/20 to-blue-500/20 p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="mb-2 text-3xl font-bold text-teal-400">60K+</div>
                      <div className="text-sm text-gray-400">متجر نشط</div>
                    </div>
                    <div className="text-center">
                      <div className="mb-2 text-3xl font-bold text-blue-400">5+</div>
                      <div className="text-sm text-gray-400">سنوات خبرة</div>
                    </div>
                    <div className="text-center">
                      <div className="mb-2 text-3xl font-bold text-purple-400">95%</div>
                      <div className="text-sm text-gray-400">معدل رضا العملاء</div>
                    </div>
                    <div className="text-center">
                      <div className="mb-2 text-3xl font-bold text-green-400">40M+</div>
                      <div className="text-sm text-gray-400">ريال مبيعات</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="relative overflow-hidden bg-gray-900 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">رؤيتنا ورسالتنا</h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-300 leading-relaxed">
                نؤمن بقوة الإعلانات الذكية في تحويل الأحلام إلى واقع ملموس
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Mission */}
              <div className="rounded-2xl bg-gray-950/50 p-6 md:p-8 text-center hover:bg-gray-950/70 transition-colors">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-500/20">
                  <Target className="h-8 w-8 text-teal-400" />
                </div>
                <h3 className="mb-4 text-xl md:text-2xl font-bold">رسالتنا</h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  تمكين الشركات والأفراد من تحقيق أهدافهم التسويقية من خلال حلول إعلانية مبتكرة ومدعومة بالذكاء
                  الاصطناعي
                </p>
              </div>

              {/* Vision */}
              <div className="rounded-2xl bg-gray-950/50 p-6 md:p-8 text-center hover:bg-gray-950/70 transition-colors">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/20">
                  <Lightbulb className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="mb-4 text-xl md:text-2xl font-bold">رؤيتنا</h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  أن نكون المنصة الإعلانية الرائدة في الشرق الأوسط والمرجع الأول للشركات الساعية للنمو والتوسع
                </p>
              </div>

              {/* Values */}
              <div className="rounded-2xl bg-gray-950/50 p-6 md:p-8 text-center hover:bg-gray-950/70 transition-colors">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/20">
                  <Heart className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="mb-4 text-xl md:text-2xl font-bold">قيمنا</h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  الشفافية، الابتكار، التميز في الخدمة، والالتزام بتحقيق أفضل النتائج لعملائنا في كل حملة إعلانية
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="relative overflow-hidden bg-gray-900 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">فريق العمل</h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-300">
                فريق من الخبراء المتخصصين في مجال الإعلانات الرقمية والتسويق الإلكتروني
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* CEO */}
              <div className="group text-center">
                <div className="mb-4 relative">
                  <div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-teal-400 to-blue-400 p-1">
                    <div className="h-full w-full rounded-full bg-gray-900 flex items-center justify-center">
                      <Users className="h-12 w-12 text-teal-400" />
                    </div>
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold">سامح صبحى</h3>
                <p className="mb-2 text-teal-400">المدير التنفيذي</p>
                <p className="text-sm text-gray-400">
                  خبرة 12 سنة في إدارة الإعلانات للمشاريع الكبرى بالشرق الأوسط وأوروبا
                </p>
              </div>

              {/* Marketing Manager */}
              <div className="group text-center">
                <div className="mb-4 relative">
                  <div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 p-1">
                    <div className="h-full w-full rounded-full bg-gray-900 flex items-center justify-center">
                      <TrendingUp className="h-12 w-12 text-blue-400" />
                    </div>
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold">سارة أحمد</h3>
                <p className="mb-2 text-blue-400">مديرة التسويق</p>
                <p className="text-sm text-gray-400">متخصصة في استراتيجيات النمو</p>
              </div>

              {/* Technical Manager */}
              <div className="group text-center">
                <div className="mb-4 relative">
                  <div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 p-1">
                    <div className="h-full w-full rounded-full bg-gray-900 flex items-center justify-center">
                      <Globe className="h-12 w-12 text-purple-400" />
                    </div>
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold">محمد علي</h3>
                <p className="mb-2 text-purple-400">مدير التقنية</p>
                <p className="text-sm text-gray-400">خبير في الذكاء الاصطناعي</p>
              </div>

              {/* Customer Service Manager */}
              <div className="group text-center">
                <div className="mb-4 relative">
                  <div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-green-400 to-teal-400 p-1">
                    <div className="h-full w-full rounded-full bg-gray-900 flex items-center justify-center">
                      <Shield className="h-12 w-12 text-green-400" />
                    </div>
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold">فاطمة حسن</h3>
                <p className="mb-2 text-green-400">مديرة خدمة العملاء</p>
                <p className="text-sm text-gray-400">متخصصة في تجربة العملاء</p>
              </div>
            </div>

            {/* Team Statistics Section */}
            <div className="mt-16">
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-bold mb-4">فريقنا بالأرقام</h3>
                <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
                  نفخر بفريق عمل متخصص ومتنوع يضم خبراء في جميع مجالات التسويق الرقمي
                </p>
              </div>

              <div className="grid gap-4 md:gap-6 grid-cols-2 lg:grid-cols-4">
                <div className="text-center p-4 md:p-6 rounded-xl bg-gray-950/50 hover:bg-gray-950/70 transition-colors">
                  <div className="text-2xl md:text-3xl font-bold text-teal-400 mb-2">22</div>
                  <div className="text-gray-300 text-sm md:text-base font-medium">ميديا باير</div>
                  <div className="text-xs md:text-sm text-gray-400 mt-1">خبراء شراء الإعلانات</div>
                </div>

                <div className="text-center p-4 md:p-6 rounded-xl bg-gray-950/50 hover:bg-gray-950/70 transition-colors">
                  <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">5</div>
                  <div className="text-gray-300 text-sm md:text-base font-medium">مدير تسويق</div>
                  <div className="text-xs md:text-sm text-gray-400 mt-1">استراتيجيو التسويق</div>
                </div>

                <div className="text-center p-4 md:p-6 rounded-xl bg-gray-950/50 hover:bg-gray-950/70 transition-colors">
                  <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">15</div>
                  <div className="text-gray-300 text-sm md:text-base font-medium">كاتب محتوى</div>
                  <div className="text-xs md:text-sm text-gray-400 mt-1">صناع المحتوى الإبداعي</div>
                </div>

                <div className="text-center p-4 md:p-6 rounded-xl bg-gray-950/50 hover:bg-gray-950/70 transition-colors">
                  <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">6</div>
                  <div className="text-gray-300 text-sm md:text-base font-medium">محلل بيانات</div>
                  <div className="text-xs md:text-sm text-gray-400 mt-1">خبراء تحليل الأداء</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="relative overflow-hidden bg-gray-900 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">إنجازاتنا</h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-300">
                نفخر بالإنجازات التي حققناها والجوائز التي حصلنا عليها
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500/20">
                  <Award className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="mb-2 text-xl font-bold">أفضل منصة إعلانية</h3>
                <p className="text-gray-400">جائزة التميز الرقمي 2023</p>
              </div>

              <div className="text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20">
                  <Star className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="mb-4 text-xl font-bold">الشركة الناشئة الأسرع نمواً</h3>
                <p className="text-gray-400">مجلة الأعمال العربية 2022</p>
              </div>

              <div className="text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
                  <CheckCircle2 className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="mb-4 text-xl font-bold">شهادة الجودة ISO</h3>
                <p className="text-gray-400">معتمدة دولياً 2023</p>
              </div>

              <div className="text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/20">
                  <Users className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="mb-4 text-xl font-bold">أفضل بيئة عمل</h3>
                <p className="text-gray-400">جائزة أفضل صاحب عمل 2023</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-blue-600 py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">انضم إلى رحلة النجاح</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
              كن جزءاً من قصة نجاحنا واكتشف كيف يمكن لانطلاقة أن تساعدك في تحقيق أهدافك التسويقية
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button className="rounded-full bg-white px-8 py-3 text-teal-600 transition-colors hover:bg-gray-100">
                ابدأ رحلتك معنا
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-2 border-white bg-transparent px-8 py-3 text-white transition-colors hover:bg-white/10"
              >
                تواصل معنا
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SharedFooter />
    </div>
  )
}
