import { SharedHeader } from "@/components/shared-header"
import { SharedFooter } from "@/components/shared-footer"

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white" dir="rtl">
      <SharedHeader currentPage="legal" />

      <main className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">سياسة استرجاع الأموال</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              في انطلاقة، نلتزم بتقديم أفضل الخدمات الإعلانية وتحقيق الأهداف المتفق عليها مع عملائنا. نحن ندرك أن
              الاستثمار في الحملات الإعلانية يتطلب وضوحًا وشفافية، ولذلك وضعنا سياسة استرجاع أموال تضمن حقوق العميل في
              حال عدم تحقيق النتائج المرجوة.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Section 1 */}
            <section className="rounded-lg border border-gray-800 bg-gray-900/50 p-8">
              <h2 className="mb-6 text-2xl font-bold text-teal-400">١- شروط الاسترجاع</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  يحق للعميل طلب استرجاع المبلغ في حالة عدم تحقيق النتائج أو الأهداف الإعلانية المحددة مسبقًا في العقد أو
                  الاتفاق.
                </p>
                <p>يجب تقديم طلب الاسترجاع خلال مدة أقصاها 7 أيام تقويمية من تاريخ انتهاء الحملة الإعلانية.</p>
                <p>يجب أن تكون جميع البيانات والتقارير الداعمة متاحة عند تقديم الطلب.</p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="rounded-lg border border-gray-800 bg-gray-900/50 p-8">
              <h2 className="mb-6 text-2xl font-bold text-blue-400">٢- المستندات المطلوبة</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>عند التقدم بطلب استرجاع الأموال، يجب على العميل تقديم:</p>
                <ul className="mr-6 space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-400"></span>
                    <span>رقم الفاتورة أو نسخة من العقد.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-400"></span>
                    <span>تقرير نتائج الحملة الصادر من لوحة التحكم أو منصات الإعلانات المستخدمة.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section className="rounded-lg border border-gray-800 bg-gray-900/50 p-8">
              <h2 className="mb-6 text-2xl font-bold text-green-400">٣- مدة معالجة الاسترجاع</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>تتم مراجعة الطلب خلال 3 إلى 5 أيام عمل.</p>
                <p>يتم إخطار العميل بنتيجة المراجعة عبر البريد الإلكتروني أو وسيلة الاتصال المحددة.</p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="rounded-lg border border-gray-800 bg-gray-900/50 p-8">
              <h2 className="mb-6 text-2xl font-bold text-purple-400">٤- طريقة الاسترجاع</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>يتم تحويل المبلغ إلى نفس وسيلة الدفع التي تم استخدامها في الدفع الأولي.</p>
                <p>قد يستغرق إتمام التحويل البنكي أو عبر شركات الدفع الإلكتروني مدة إضافية حسب سياسة مزود الخدمة.</p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="rounded-lg border border-gray-800 bg-gray-900/50 p-8">
              <h2 className="mb-6 text-2xl font-bold text-red-400">٥- الحالات المستثناة من الاسترجاع</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <ul className="mr-6 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-red-400"></span>
                    <span>إذا حققت الحملة الأهداف المتفق عليها أو تجاوزتها.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-red-400"></span>
                    <span>إذا قام العميل بطلب تعديلات أو تغييرات على الحملة أثرت على النتائج النهائية.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-red-400"></span>
                    <span>في حالة وجود خلل أو تأخير ناتج عن منصات الإعلانات أو مزودين خارجيين خارج نطاق تحكمنا.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 6 */}
            <section className="rounded-lg border border-gray-800 bg-gray-900/50 p-8">
              <h2 className="mb-6 text-2xl font-bold text-yellow-400">٦- مراجعة الطلبات</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>تتم مراجعة طلبات الاسترجاع بواسطة فريق متخصص لضمان الحياد والشفافية.</p>
                <p>تتم مقارنة أداء الحملة بالأهداف الموضحة في الاتفاقية لتحديد الأهلية للاسترجاع.</p>
              </div>
            </section>
          </div>

          {/* Contact Section */}
          <div className="mt-16 rounded-lg border border-teal-600 bg-teal-900/20 p-8 text-center">
            <h3 className="mb-4 text-xl font-bold text-teal-400">للاستفسارات حول سياسة الاسترجاع</h3>
            <p className="text-gray-300">
              يمكنكم التواصل معنا عبر البريد الإلكتروني أو الهاتف للحصول على مزيد من المعلومات
            </p>
          </div>
        </div>
      </main>

      <SharedFooter />
    </div>
  )
}
