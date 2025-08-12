import { SharedHeader } from "@/components/shared-header"
import { SharedFooter } from "@/components/shared-footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white" dir="rtl">
      <SharedHeader currentPage="terms" />

      <main className="pt-20">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-right">شروط وأحكام الاستخدام – منصة انطلاقة</h1>
            <p className="text-gray-400 text-right">تاريخ آخر تحديث: 12 أغسطس 2025</p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-right">
            {/* Section 1 */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-teal-400">١- المقدمة</h2>
              <p className="text-gray-300 leading-relaxed">
                مرحباً بك في منصة انطلاقة، باستخدامك لموقعنا أو خدماتنا، فإنك توافق على الالتزام بالشروط والأحكام الموضحة
                أدناه. يرجى قراءتها بعناية قبل البدء باستخدام المنصة.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-teal-400">٢- التعريفات</h2>
              <div className="text-gray-300 leading-relaxed space-y-3">
                <p>
                  <strong>الموقع / المنصة:</strong> يقصد بها منصة انطلاقة وجميع الخدمات التابعة لها.
                </p>
                <p>
                  <strong>المستخدم:</strong> أي شخص يقوم بزيارة أو استخدام المنصة.
                </p>
                <p>
                  <strong>الخدمات:</strong> تشمل جميع الحلول الإعلانية وإدارة الحملات التي تقدمها انطلاقة.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-teal-400">٣- قبول الشروط</h2>
              <p className="text-gray-300 leading-relaxed">
                استخدامك للمنصة يعني موافقتك الكاملة على هذه الشروط. إذا لم توافق، يجب عليك التوقف فوراً عن استخدام
                الموقع.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-teal-400">٤- استخدام المنصة</h2>
              <div className="text-gray-300 leading-relaxed space-y-3">
                <p>• يلتزم المستخدم باستخدام المنصة للأغراض القانونية فقط.</p>
                <p>• يُمنع استخدام أي محتوى أو خدمة في أنشطة غير قانونية أو ضارة.</p>
                <p>• لا يجوز نسخ أو إعادة توزيع أي جزء من المنصة بدون إذن كتابي مسبق.</p>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-teal-400">٥- الحسابات والمسؤولية</h2>
              <div className="text-gray-300 leading-relaxed space-y-3">
                <p>• عند إنشاء حساب، يجب تقديم معلومات صحيحة ومحدثة.</p>
                <p>• المستخدم مسؤول عن سرية بيانات الدخول الخاصة به وأي نشاط يتم من خلال حسابه.</p>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-teal-400">٦- الدفع والاشتراكات</h2>
              <div className="text-gray-300 leading-relaxed space-y-3">
                <p>• بعض الخدمات مدفوعة وتتطلب الدفع المسبق أو الاشتراك.</p>
                <p>• الأسعار قابلة للتغيير مع إشعار مسبق للمستخدمين.</p>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-teal-400">٧- الملكية الفكرية</h2>
              <div className="text-gray-300 leading-relaxed space-y-3">
                <p>• جميع الحقوق الفكرية والعلامات التجارية والمحتوى على المنصة مملوكة لانطلاقة أو شركائها.</p>
                <p>• يُمنع استخدام العلامة التجارية أو المحتوى دون إذن مسبق.</p>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-teal-400">٨- حدود المسؤولية</h2>
              <div className="text-gray-300 leading-relaxed space-y-3">
                <p>
                  • انطلاقة غير مسؤولة عن أي خسائر مباشرة أو غير مباشرة ناتجة عن استخدام أو عدم القدرة على استخدام
                  المنصة.
                </p>
                <p>• المنصة تقدم خدماتها "كما هي" دون أي ضمانات مطلقة.</p>
              </div>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-teal-400">٩- التعديلات على الشروط</h2>
              <p className="text-gray-300 leading-relaxed">
                يحق لانطلاقة تعديل هذه الشروط في أي وقت، وسيتم إشعار المستخدمين بالتغييرات عبر البريد الإلكتروني أو من
                خلال الموقع.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-teal-400">١٠- القانون المطبق وحل النزاعات</h2>
              <p className="text-gray-300 leading-relaxed">
                تخضع هذه الشروط لقوانين المملكة العربية السعودية، وأي نزاع يتم حله أمام المحاكم المختصة في المملكة.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-teal-400">١١- التواصل معنا</h2>
              <div className="text-gray-300 leading-relaxed space-y-3">
                <p>للاستفسارات بخصوص الشروط والأحكام، يمكن التواصل عبر:</p>
                <p>📧 البريد الإلكتروني: legal@intilaaqah.com</p>
                <p>📞 الهاتف: +966-XXX-XXX-XXX</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <SharedFooter />
    </div>
  )
}
