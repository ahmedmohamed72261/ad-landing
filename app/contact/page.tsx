"use client"

import type React from "react"
import Head from "next/head"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Headphones,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
} from "lucide-react"
import { useState } from "react"
import { SharedHeader } from "@/components/shared-header"
import { SharedFooter } from "@/components/shared-footer"
import { sendEmail } from "@/lib/emailjs"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const success = await sendEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        subject: formData.subject,
        message: formData.message,
      })

      if (success) {
        setSubmitted(true)
        toast({
          title: "تم الإرسال بنجاح",
          description: "شكراً لتواصلك معنا. سنرد عليك خلال 24 ساعة.",
        })

        // Reset form after 3 seconds
        setTimeout(() => {
          setSubmitted(false)
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            subject: "",
            message: "",
          })
        }, 3000)
      } else {
        throw new Error("Failed to send email")
      }
    } catch (error) {
      toast({
        title: "خطأ في الإرسال",
        description: "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="min-h-screen bg-black text-white font-tajawal" dir="rtl">
        <SharedHeader currentPage="تواصل معنا" />

        <main>
          {/* Hero Section */}
          <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black">
            <div className="container mx-auto px-4 text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-500/20 px-4 py-2 text-teal-400">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">نحن هنا لمساعدتك</span>
              </div>

              <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                تواصل
                <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent"> معنا</span>
              </h1>

              <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-300 md:text-xl">
                فريقنا جاهز لمساعدتك في تحقيق أهدافك التسويقية. تواصل معنا اليوم واحصل على استشارة مجانية
              </p>
            </div>
          </section>

          {/* Contact Form & Info */}
          <section className="relative overflow-hidden bg-gray-950 py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="grid gap-12 lg:grid-cols-2">
                {/* Contact Form */}
                <div>
                  <h2 className="mb-6 text-3xl font-bold md:text-4xl">أرسل لنا رسالة</h2>
                  <p className="mb-8 text-gray-300">املأ النموذج أدناه وسيتواصل معك أحد خبرائنا خلال 24 ساعة</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium">
                          الاسم الكامل *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-400"
                          placeholder="أدخل اسمك الكامل"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium">
                          البريد الإلكتروني *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-400"
                          placeholder="example@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                          رقم الهاتف
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-400"
                          placeholder="+966 50 123 4567"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="mb-2 block text-sm font-medium">
                          اسم الشركة
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-400"
                          placeholder="اسم شركتك"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                        موضوع الرسالة *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-400"
                        placeholder="ما هو موضوع استفسارك؟"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium">
                        الرسالة *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-400 resize-none"
                        placeholder="اكتب رسالتك هنا..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting || submitted}
                      className="w-full rounded-lg bg-teal-500 px-8 py-3 text-white transition-colors hover:bg-teal-600 disabled:opacity-50"
                    >
                      {submitted ? (
                        <>
                          <CheckCircle2 className="ml-2 h-5 w-5" />
                          تم الإرسال بنجاح
                        </>
                      ) : isSubmitting ? (
                        "جاري الإرسال..."
                      ) : (
                        <>
                          <Send className="ml-2 h-5 w-5" />
                          إرسال الرسالة
                        </>
                      )}
                    </Button>
                  </form>
                </div>

                {/* Contact Info */}
                <div>
                  <h2 className="mb-6 text-3xl font-bold md:text-4xl">معلومات التواصل</h2>
                  <p className="mb-8 text-gray-300">يمكنك التواصل معنا من خلال الطرق التالية أو زيارة مكاتبنا</p>

                  <div className="space-y-6">
                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500/20">
                        <Phone className="h-6 w-6 text-teal-400" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold">الهاتف</h3>
                        <p className="text-gray-300">+966 56 043 1575</p>
                        <p className="text-gray-300">+966 56 043 1575</p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                        <Mail className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold">البريد الإلكتروني</h3>
                        <p className="text-gray-300">info@intilaqa.com</p>
                        <p className="text-gray-300">support@intilaqa.com</p>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                        <MapPin className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold">العنوان</h3>
                        <p className="text-gray-300">
                          برج المملكة، الطابق 25
                          <br />
                          طريق الملك فهد، الرياض
                          <br />
                          المملكة العربية السعودية
                        </p>
                      </div>
                    </div>

                    {/* Working Hours */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                        <Clock className="h-6 w-6 text-green-400" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold">ساعات العمل</h3>
                        <p className="text-gray-300">
                          الأحد - الخميس: 9:00 ص - 6:00 م<br />
                          الجمعة - السبت: مغلق
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Contact Buttons */}
                  <div className="mt-8 space-y-4">
                    <Button
                      className="w-full justify-start rounded-lg bg-green-600 px-6 py-3 text-white transition-colors hover:bg-green-700"
                      onClick={() =>
                        window.open(
                          "https://api.whatsapp.com/send/?phone=966560431575&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%2B%D8%A3%D8%B1%D9%8A%D8%AF%2B%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%2B%D8%B9%D9%86%2B%D8%87%D8%AF%D9%85%D8%A7%D8%AA%2B%D8%A7%D9%86%D8%B7%D9%84%D8%A7%D9%82%D8%A9%2B%D8%A7%D9%84%D8%A5%D8%B9%D9%84%D8%A7%D9%86%D9%8A%D8%A9&type=phone_number&app_absent=0",
                          "_blank",
                        )
                      }
                    >
                      <MessageCircle className="ml-2 h-5 w-5" />
                      تواصل عبر واتساب
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start rounded-lg border-2 border-gray-600 bg-transparent px-6 py-3 text-white transition-colors hover:bg-gray-800"
                      onClick={() =>
                        window.open(
                          "https://api.whatsapp.com/send/?phone=966560431575&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%2B%D8%A3%D8%B1%D9%8A%D8%AF%2B%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%2B%D8%B9%D9%86%2B%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%2B%D8%A7%D9%86%D8%B7%D9%84%D8%A7%D9%82%D8%A9%2B%D8%A7%D9%84%D8%A5%D8%B9%D9%84%D8%A7%D9%86%D9%8A%D8%A9&type=phone_number&app_absent=0",
                          "_blank",
                        )
                      }
                    >
                      <Headphones className="ml-2 h-5 w-5" />
                      طلب مكالمة هاتفية
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="relative overflow-hidden bg-gray-900 py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="mb-16 text-center">
                <h2 className="mb-6 text-4xl font-bold md:text-5xl">الأسئلة الشائعة</h2>
                <p className="mx-auto max-w-3xl text-lg text-gray-300">إجابات على أكثر الأسئلة شيوعاً حول خدماتنا</p>
              </div>

              <div className="mx-auto max-w-4xl space-y-6">
                <div className="rounded-lg bg-gray-950/50 p-6">
                  <h3 className="mb-3 text-xl font-semibold">كم يستغرق إعداد حملة إعلانية جديدة؟</h3>
                  <p className="text-gray-300">
                    عادة ما يستغرق إعداد حملة إعلانية جديدة من 3-5 أيام عمل، وذلك يشمل البحث والتحليل وإعداد المحتوى
                    والإطلاق.
                  </p>
                </div>

                <div className="rounded-lg bg-gray-950/50 p-6">
                  <h3 className="mb-3 text-xl font-semibold">هل تقدمون ضمان على النتائج؟</h3>
                  <p className="text-gray-300">
                    نعم، نقدم ضمان استرداد جزئي إذا لم تحقق حملتك الأهداف المتفق عليها خلال الشهر الأول، مع الالتزام
                    بشروط الضمان.
                  </p>
                </div>

                <div className="rounded-lg bg-gray-950/50 p-6">
                  <h3 className="mb-3 text-xl font-semibold">ما هي المنصات الإعلانية التي تدعمونها؟</h3>
                  <p className="text-gray-300">
                    ندعم جميع المنصات الرئيسية مثل جوجل، فيسبوك، إنستغرام، تويتر، لينكد إن، تيك توك، وسناب شات.
                  </p>
                </div>

                <div className="rounded-lg bg-gray-950/50 p-6">
                  <h3 className="mb-3 text-xl font-semibold">كيف يمكنني تتبع أداء حملاتي؟</h3>
                  <p className="text-gray-300">
                    نوفر لوحة تحكم شاملة تتيح لك تتبع جميع مؤشرات الأداء في الوقت الفعلي، بالإضافة إلى تقارير أسبوعية
                    وشهرية مفصلة.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-blue-600 py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
              <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">جاهز للبدء؟</h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
                احصل على استشارة مجانية اليوم واكتشف كيف يمكن لانطلاقة أن تساعدك في تحقيق أهدافك
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  className="rounded-full bg-white px-8 py-3 text-teal-600 transition-colors hover:bg-gray-100"
                  onClick={() =>
                    window.open(
                      "https://api.whatsapp.com/send/?phone=966560431575&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%2B%D8%A3%D8%B1%D9%8A%D8%AF%2B%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%2B%D8%B9%D9%86%2B%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%2B%D8%A7%D9%86%D8%B7%D9%84%D8%A7%D9%82%D8%A9%2B%D8%A7%D9%84%D8%A5%D8%B9%D9%84%D8%A7%D9%86%D9%8A%D8%A9&type=phone_number&app_absent=0",
                      "_blank",
                    )
                  }
                >
                  احجز استشارة مجانية
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-2 border-white bg-transparent px-8 py-3 text-white transition-colors hover:bg-white/10"
                  onClick={() =>
                    window.open(
                      "https://api.whatsapp.com/send/?phone=966560431575&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%2B%D8%A3%D8%B1%D9%8A%D8%AF%2B%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%2B%D8%B9%D9%86%2B%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%2B%D8%A7%D9%86%D8%B7%D9%84%D8%A7%D9%82%D8%A9%2B%D8%A7%D9%84%D8%A5%D8%B9%D9%84%D8%A7%D9%86%D9%8A%D8%A9&type=phone_number&app_absent=0",
                      "_blank",
                    )
                  }
                >
                  تصفح خدماتنا
                </Button>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <SharedFooter />
      </div>
    </>
  )
}
