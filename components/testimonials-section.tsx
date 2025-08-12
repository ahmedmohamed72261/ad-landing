"use client"

import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

type Testimonial = {
  quote: string
  author: string
  role?: string
}

const testimonials: Testimonial[] = [
  {
    quote: "إعلانات انطلاقة غيّرت طريقة إدارتنا للحملات، النتائج تضاعفت خلال أسابيع قليلة.",
    author: "أحمد",
    role: "صاحب متجر إلكتروني",
  },
  {
    quote: "منصة سهلة جدًا وواجهة احترافية، فريق الدعم سريع ومفيد في كل خطوة.",
    author: "سارة",
    role: "مديرة تسويق",
  },
  {
    quote: "بفضل الذكاء الاصطناعي وصلنا لجمهورنا المستهدف بدقة غير مسبوقة.",
    author: "خالد",
    role: "رائد أعمال",
  },
]

function Card({ t }: { t: Testimonial }) {
  return (
    <div className="relative w-full h-auto rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 md:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.3)]">
      <div className="absolute -inset-px rounded-2xl pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.12),transparent_40%)]" />
      <div className="relative">
        <div className="mx-auto mb-4 grid h-10 w-10 place-items-center rounded-lg bg-teal-500/15 text-teal-300">
          <Quote className="h-5 w-5" />
        </div>
        <p className="text-base md:text-lg leading-8 text-gray-200 min-h-[120px]">{t.quote}</p>
        <div className="mt-5 text-sm">
          <div className="font-semibold text-white">{t.author}</div>
          {t.role && <div className="text-teal-300/90">{t.role}</div>}
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section
      id="testimonials"
      dir="rtl"
      className="relative overflow-hidden bg-black py-16 md:py-24"
      aria-labelledby="testimonials-title"
    >
      {/* subtle dots/glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:18px_18px]" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1 text-sm text-teal-300">
            ماذا يقول عملاؤنا
          </span>
        </div>
        <h2 id="testimonials-title" className="text-center mt-2 mb-10 text-3xl md:text-5xl font-extrabold text-white">
          شهادات من عملاء راضين
        </h2>

        <div className="md:hidden">
          <div className="relative max-w-sm mx-auto">
            <Card t={testimonials[currentIndex]} />

            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-300 hover:bg-teal-500/30 transition-colors"
              aria-label="الشهادة السابقة"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-300 hover:bg-teal-500/30 transition-colors"
              aria-label="الشهادة التالية"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-teal-500" : "bg-white/30"
                }`}
                aria-label={`الانتقال للشهادة ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((t, i) => (
            <Card key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
