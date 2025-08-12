import { SharedHeader } from "@/components/shared-header"
import { SharedFooter } from "@/components/shared-footer"

export default function AdPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white" dir="rtl">
      <SharedHeader currentPage="legal" />

      <main className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">سياسة الإعلانات – منصة انطلاقة</h1>
            <p className="text-lg text-gray-300">تاريخ آخر تحديث: 12 أغسطس 2025</p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Section 1 */}
            <section className="rounded-lg bg-gray-900/50 p-8">
              <h2 className="mb-6 text-2xl font-bold text-teal-400">١- المقدمة</h2>
              <p className="text-right text-lg leading-relaxed text-gray-200">
                تلتزم انطلاقة بتقديم إعلانات عالية الجودة تتوافق مع القوانين المحلية والدولية، ومعايير المنصات الإعلانية
                المختلفة، مع ضمان تجربة آمنة وإيجابية للجمهور المستهدف.
              </p>
            </section>

            {/* Section 2 */}
            <section className="rounded-lg bg-gray-900/50 p-8">
              <h2 className="mb-6 text-2xl font-bold text-teal-400">٢- أهداف السياسة</h2>
              <ul className="space-y-3 text-right text-lg text-gray-200">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-teal-400"></span>
                  الحفاظ على مصداقية الإعلانات.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-teal-400"></span>
                  حماية المستخدمين من المحتوى المضلل أو غير المناسب.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-teal-400"></span>
                  ضمان توافق الحملات مع سياسات المنصات مثل Google وMeta.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="rounded-lg bg-gray-900/50 p-8">
              <h2 className="mb-6 text-2xl font-bold text-green-400">٣- أنواع الإعلانات المسموح بها</h2>
              <ul className="space-y-3 text-right text-lg text-gray-200">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-green-400"></span>
                  الإعلانات التجارية للمنتجات والخدمات المصرح بها.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-green-400"></span>
                  الحملات التوعوية والاجتماعية المصرح بها.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-green-400"></span>
                  إعلانات العروض والخصومات ضمن القوانين المطبقة.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="rounded-lg bg-gray-900/50 p-8">
              <h2 className="mb-6 text-2xl font-bold text-red-400">٤- أنواع الإعلانات الممنوعة</h2>
              <ul className="space-y-3 text-right text-lg text-gray-200">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-red-400"></span>
                  المحتوى المخالف للقوانين أو الآداب العامة.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-red-400"></span>
                  الإعلانات التي تحتوي على خطاب كراهية أو تمييز.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-red-400"></span>
                  المحتوى المضلل أو الذي يدعي مزايا غير حقيقية.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-red-400"></span>
                  الإعلانات عن المنتجات المحظورة مثل المواد المخدرة أو الأسلحة غير المرخصة.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="rounded-lg bg-gray-900/50 p-8">
              <h2 className="mb-6 text-2xl font-bold text-blue-400">٥- التزامات المعلنين</h2>
              <ul className="space-y-3 text-right text-lg text-gray-200">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-blue-400"></span>
                  تقديم معلومات دقيقة وصحيحة عن المنتج أو الخدمة.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-blue-400"></span>
                  ضمان امتلاك الحقوق لاستخدام النصوص والصور والموسيقى.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-blue-400"></span>
                  الالتزام بمعايير الجودة المحددة من قبل انطلاقة.
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="rounded-lg bg-gray-900/50 p-8">
              <h2 className="mb-6 text-2xl font-bold text-purple-400">٦- مراجعة الإعلانات</h2>
              <ul className="space-y-3 text-right text-lg text-gray-200">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-purple-400"></span>
                  يتم مراجعة جميع الإعلانات من قبل فريق انطلاقة قبل النشر.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-purple-400"></span>
                  قد يتم رفض أو تعديل أي إعلان لا يتوافق مع هذه السياسة أو سياسات المنصات الإعلانية.
                </li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="rounded-lg bg-gray-900/50 p-8">
              <h2 className="mb-6 text-2xl font-bold text-orange-400">٧- الذكاء الاصطناعي في مراجعة الإعلانات</h2>
              <ul className="space-y-3 text-right text-lg text-gray-200">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-orange-400"></span>
                  تستخدم انطلاقة أنظمة ذكاء اصطناعي متقدمة للكشف المبكر عن المخالفات.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-orange-400"></span>
                  يقوم النظام بتحليل النصوص والصور والفيديوهات لاكتشاف أي محتوى غير مناسب أو مخالف للمعايير.
                </li>
              </ul>
            </section>

            {/* Section 8 */}
            <section className="rounded-lg bg-gray-900/50 p-8">
              <h2 className="mb-6 text-2xl font-bold text-pink-400">٨- التعديلات على السياسة</h2>
              <p className="text-right text-lg leading-relaxed text-gray-200">
                يحق لانطلاقة تعديل هذه السياسة في أي وقت، وسيتم نشر التحديثات على هذه الصفحة مع تاريخ آخر تعديل.
              </p>
            </section>

            {/* Section 9 */}
            <section className="rounded-lg bg-gray-900/50 p-8">
              <h2 className="mb-6 text-2xl font-bold text-teal-400">٩- التواصل معنا</h2>
              <p className="mb-4 text-right text-lg text-gray-200">
                للاستفسار عن سياسة الإعلانات أو الإبلاغ عن إعلان مخالف، يرجى التواصل عبر:
              </p>
              <div className="space-y-3 text-right text-lg text-gray-200">
                <p className="flex items-center justify-end gap-3">
                  <span>ads-policy@intilaaqah.com</span>
                  <span>📧 البريد الإلكتروني:</span>
                </p>
                <p className="flex items-center justify-end gap-3">
                  <span>+966-XXX-XXX-XXX</span>
                  <span>📞 الهاتف:</span>
                </p>
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-lg bg-teal-600 p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold text-white">هل لديك استفسار حول سياسة الإعلانات؟</h3>
            <p className="mb-6 text-lg text-teal-100">فريقنا جاهز لمساعدتك في فهم السياسات وضمان توافق إعلاناتك</p>
            <a
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-teal-600 transition-colors hover:bg-gray-100"
            >
              تواصل معنا الآن
            </a>
          </div>
        </div>
      </main>

      <SharedFooter />
    </div>
  )
}
