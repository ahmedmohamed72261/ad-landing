import { SharedHeader } from "@/components/shared-header"
import { SharedFooter } from "@/components/shared-footer"

export default function PrivacyPolicyPage() {

  return (
    <div className="min-h-screen bg-black text-white" dir="rtl">
      <SharedHeader currentPage="privacy" />

      <main className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">سياسة الخصوصية</h1>
            <p className="text-lg text-gray-300">تاريخ آخر تحديث: 12 أغسطس 2025</p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-right">
            {/* مقدمة */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-teal-400">مقدمة</h2>
              <p className="leading-relaxed text-gray-300">
                في انطلاقة، نلتزم بحماية خصوصية مستخدمينا، ونسعى لضمان أمان بياناتهم أثناء استخدام خدماتنا. تهدف هذه
                السياسة إلى توضيح كيفية جمع واستخدام وحماية معلوماتك الشخصية عند زيارتك لموقعنا أو استخدامك لمنصتنا
                الإعلانية.
              </p>
            </section>

            {/* ١- المعلومات التي نقوم بجمعها */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-teal-400">١- المعلومات التي نقوم بجمعها</h2>
              <p className="mb-4 leading-relaxed text-gray-300">قد نقوم بجمع أنواع مختلفة من المعلومات، بما في ذلك:</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-teal-400"></span>
                  <span>
                    <strong className="text-white">المعلومات الشخصية:</strong> مثل الاسم، البريد الإلكتروني، رقم الهاتف،
                    وبيانات الدفع عند الاشتراك في خدماتنا.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-teal-400"></span>
                  <span>
                    <strong className="text-white">المعلومات التقنية:</strong> مثل عنوان الـ IP، نوع الجهاز، نظام
                    التشغيل، وإعدادات المتصفح.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-teal-400"></span>
                  <span>
                    <strong className="text-white">بيانات الاستخدام:</strong> مثل الصفحات التي تزورها، ومدة بقائك على
                    الموقع، وأنماط التصفح.
                  </span>
                </li>
              </ul>
            </section>

            {/* ٢- كيفية استخدام المعلومات */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-teal-400">٢- كيفية استخدام المعلومات</h2>
              <p className="mb-4 leading-relaxed text-gray-300">نستخدم المعلومات التي نجمعها للأغراض التالية:</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-teal-400"></span>
                  <span>توفير وتحسين خدماتنا.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-teal-400"></span>
                  <span>تخصيص التجربة الإعلانية بما يتناسب مع اهتماماتك.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-teal-400"></span>
                  <span>التواصل معك بشأن التحديثات أو العروض أو الدعم الفني.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-teal-400"></span>
                  <span>تحليل أداء الإعلانات وتحسين استراتيجيات الحملات.</span>
                </li>
              </ul>
            </section>

            {/* ٣- مشاركة المعلومات */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-teal-400">٣- مشاركة المعلومات</h2>
              <p className="mb-4 leading-relaxed text-gray-300">
                لا نبيع أو نؤجر بياناتك لأي طرف ثالث. قد نشارك معلوماتك مع:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-teal-400"></span>
                  <span>شركاء موثوقين يساعدوننا في تقديم الخدمات (مثل منصات الدفع أو استضافة المواقع).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-teal-400"></span>
                  <span>جهات قانونية إذا كان ذلك مطلوبًا بموجب القانون أو لحماية حقوقنا.</span>
                </li>
              </ul>
            </section>

            {/* ٤- حماية المعلومات */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-teal-400">٤- حماية المعلومات</h2>
              <p className="leading-relaxed text-gray-300">
                نستخدم تقنيات أمان متقدمة لحماية بياناتك من الوصول غير المصرح به أو التعديل أو الإفصاح أو التدمير.
              </p>
            </section>

            {/* ٥- ملفات تعريف الارتباط */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-teal-400">٥- ملفات تعريف الارتباط (Cookies)</h2>
              <p className="leading-relaxed text-gray-300">
                يستخدم موقعنا ملفات الكوكيز لتحسين تجربتك، مثل تذكر تفضيلاتك وتحليل أداء الحملات الإعلانية. يمكنك إدارة
                إعدادات الكوكيز من خلال متصفحك.
              </p>
            </section>

            {/* ٦- حقوقك */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-teal-400">٦- حقوقك</h2>
              <p className="mb-4 leading-relaxed text-gray-300">لديك الحق في:</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-teal-400"></span>
                  <span>الوصول إلى بياناتك التي نحتفظ بها.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-teal-400"></span>
                  <span>طلب تصحيح أو حذف بياناتك.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-teal-400"></span>
                  <span>سحب موافقتك على استخدام بياناتك في أي وقت.</span>
                </li>
              </ul>
            </section>

            {/* ٧- تحديثات السياسة */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-teal-400">٧- تحديثات السياسة</h2>
              <p className="leading-relaxed text-gray-300">
                قد نقوم بتحديث سياسة الخصوصية من وقت لآخر، وسيتم نشر أي تغييرات على هذه الصفحة مع تعديل تاريخ "آخر
                تحديث".
              </p>
            </section>

            {/* ٨- التواصل معنا */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-teal-400">٨- التواصل معنا</h2>
              <p className="mb-4 leading-relaxed text-gray-300">
                للاستفسارات أو طلبات الخصوصية، يمكنك التواصل معنا عبر:
              </p>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center gap-3">
                  <span>📧</span>
                  <span>
                    <strong className="text-white">البريد الإلكتروني:</strong> info@itntlqa.com
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <span>📞</span>
                  <span>
                    <strong className="text-white">الهاتف:</strong>{' '}
                    <a
                      href="https://api.whatsapp.com/send/?phone=966560431575&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%2B%D8%A3%D8%B1%D9%8A%D8%AF%2B%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%2B%D8%B9%D9%86%2B%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%2B%D8%A7%D9%86%D8%B7%D9%84%D8%A7%D9%82%D8%A9%2B%D8%A7%D9%84%D8%A5%D8%B9%D9%84%D8%A7%D9%86%D9%8A%D8%A9&type=phone_number&app_absent=0"
                      className="text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      966560431575
                    </a>
                  </span>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <SharedFooter />
    </div>
  )
}
