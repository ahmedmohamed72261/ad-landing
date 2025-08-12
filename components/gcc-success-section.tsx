"use client"

import { MapPin, Languages, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import MetricPill from "./metric-pill"
import SocialBackdrop from "./social-backdrop"
import MapTarget from "./map-target"

export default function GCCSuccessSection() {
  return (
    <section className="relative overflow-hidden bg-black py-14 md:py-20" dir="rtl" aria-labelledby="gcc-title">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.18),transparent_60%)]" />
      <div className="relative z-10 container mx-auto grid items-center gap-10 px-4 lg:grid-cols-2">
        {/* Visual: Map targeting instead of chart box; NO arrow here */}
        <div className="relative order-1 lg:order-2">
          <SocialBackdrop side="right" />
          <div className="relative mx-auto w-full max-w-md md:max-w-lg">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur">
              {/* Map with pulsing location to show we can target any place */}
              <MapTarget />
              <div className="absolute top-2 right-2 md:top-3 md:right-3">
                <MetricPill percent={30} label="آخر 3 أشهر" withDots={false} />
              </div>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="order-2 max-w-2xl lg:order-1 lg:justify-self-end">
          <h2 id="gcc-title" className="mb-4 text-3xl font-extrabold text-white md:text-4xl">
            نجاحنا في السوق الخليجي
          </h2>
          <p className="mb-6 text-base leading-relaxed text-gray-300">
            خلال 3 أشهر حققنا +30% عائد على الاستثمار عبر مواءمة المحتوى المحلي والاستهداف الدقيق.
          </p>

          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <Languages className="mt-0.5 h-5 w-5 text-teal-300" />
              <div>
                <div className="font-semibold text-white">مواءمة باللهجة والأسلوب المحلي</div>
                <p className="text-sm text-gray-400">نسخ وصور تراعي الثقافة الخليجية وتزيد تقبّل العلامة.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-teal-300" />
              <div>
                <div className="font-semibold text-white">استهداف جغرافي واهتمامات دقيقة</div>
                <p className="text-sm text-gray-400">
                  تحديد الموقع على الخريطة للوصول للجمهور الصحيح في أي مدينة أو دولة.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 text-teal-300" />
              <div>
                <div className="font-semibold text-white">امتثال سياسات الإعلانات</div>
                <p className="text-sm text-gray-400">التزام بمعايير المنصات المحلية.</p>
              </div>
            </li>
          </ul>

          <div className="mt-8">
            <Button className="rounded-full bg-teal-500 px-6 text-white hover:bg-teal-600">اطلب خطة دخول</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
