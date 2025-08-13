"use client"

import type React from "react"
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
      await sendEmail(formData)
      setSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      })
      toast({
        title: "تم إرسال الرسالة بنجاح!",
        description: "سنقوم بالرد عليك في أقرب وقت ممكن.",
        type: "success",
      })
    } catch (error) {
      console.error("Error sending email:", error)
      toast({
        title: "خطأ في إرسال الرسالة",
        description: "يرجى المحاولة مرة أخرى أو التواصل معنا عبر الهاتف.",
        type: "error",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-black text-white" dir="rtl">
        <SharedHeader currentPage="تواصل معنا" />
        
        <main className="flex min-h-[80vh] items-center justify-center">
          <div className="text-center">
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20">
              <CheckCircle2 className="h-10 w-10 text-green-400" />
            </div>
            <h1 className="mb-4 text-3xl font-bold md:text-4xl">تم إرسال رسالتك بنجاح!</h1>
            <p className="mb-8 text-lg text-gray-300">
              شكراً لك على التواصل معنا. سنقوم بالرد عليك في أقرب وقت ممكن.
            </p>
            <Button
              onClick={() => setSubmitted(false)}
              className="rounded-full bg-teal-500 px-8 py-3 text-white transition-colors hover:bg-teal-600"
            >
              إرسال رسالة أخرى
            </Button>
          </div>
        </main>

        <SharedFooter />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white" dir="rtl">
      <SharedHeader currentPage="تواصل معنا" />

      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-500/20 px-4 py-2 text-teal-400">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">تواصل معنا</span>
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              نحن هنا
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                {" "}
                لمساعدتك
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-300 md:text-xl">
              لديك أسئلة أو تحتاج مساعدة؟ فريقنا متاح دائماً للإجابة على استفساراتك وتقديم الدعم الذي تحتاجه
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="relative overflow-hidden bg-gray-950 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="mb-6 text-4xl font-bold md:text-5xl">معلومات التواصل</h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    يمكنك التواصل معنا عبر أي من الطرق التالية أو ملء النموذج وسنقوم بالرد عليك في أقرب وقت
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-500/20">
                      <Phone className="h-6 w-6 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">الهاتف</h3>
                      <p className="text-gray-300">+966 56 043 1575</p>
                      <p className="text-sm text-gray-400">متاح من الأحد إلى الخميس 9 ص - 6 م</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20">
                      <Mail className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">البريد الإلكتروني</h3>
                      <p className="text-gray-300">info@intilaqa.com</p>
                      <p className="text-sm text-gray-400">نرد خلال 24 ساعة</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20">
                      <MapPin className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">العنوان</h3>
                      <p className="text-gray-300">الرياض، المملكة العربية السعودية</p>
                      <p className="text-sm text-gray-400">مكتبنا الرئيسي</p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20">
                      <Clock className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">ساعات العمل</h3>
                      <p className="text-gray-300">الأحد - الخميس: 9:00 ص - 6:00 م</p>
                      <p className="text-sm text-gray-400">الجمعة والسبت: مغلق</p>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="rounded-2xl bg-gray-900/50 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-500/20">
                      <MessageCircle className="h-5 w-5 text-teal-400" />
                    </div>
                    <h3 className="text-lg font-semibold">دعم فني 24/7</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    للحالات الطارئة، يمكنك التواصل مع فريق الدعم الفني على مدار الساعة عبر الهاتف أو البريد الإلكتروني
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="rounded-2xl bg-gray-900/50 p-8">
                <div className="mb-6 text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal-500/20">
                    <Headphones className="h-8 w-8 text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-bold">أرسل لنا رسالة</h3>
                  <p className="text-gray-300">سنقوم بالرد عليك في أقرب وقت ممكن</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
                        الاسم الكامل *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-teal-500"
                        placeholder="أدخل اسمك الكامل"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                        البريد الإلكتروني *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-teal-500"
                        placeholder="أدخل بريدك الإلكتروني"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-300">
                        رقم الهاتف
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-teal-500"
                        placeholder="أدخل رقم هاتفك"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="mb-2 block text-sm font-medium text-gray-300">
                        اسم الشركة
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-teal-500"
                        placeholder="أدخل اسم شركتك"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-300">
                      الموضوع *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-teal-500"
                      placeholder="أدخل موضوع الرسالة"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
                      الرسالة *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-teal-500 resize-none"
                      placeholder="اكتب رسالتك هنا..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-teal-500 px-8 py-3 text-white transition-colors hover:bg-teal-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        جاري الإرسال...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        إرسال الرسالة
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-blue-600 py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">ابدأ رحلتك معنا اليوم</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
              لا تنتظر أكثر من ذلك. تواصل معنا الآن واكتشف كيف يمكن لانطلاقة أن تساعدك في تحقيق أهدافك التسويقية
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button className="rounded-full bg-white px-8 py-3 text-teal-600 transition-colors hover:bg-gray-100">
                ابدأ حملتك الإعلانية
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-2 border-white bg-transparent px-8 py-3 text-white transition-colors hover:bg-white/10"
              >
                احجز استشارة مجانية
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SharedFooter />
    </div>
  )
}
