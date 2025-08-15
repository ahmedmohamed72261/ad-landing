"use client"

import Image from "next/image"
import { Facebook, Instagram, Linkedin, Youtube, X } from "lucide-react"

export default function LaunchFanoutSection() {
  const icons = [
    { name: "Instagram", Icon: Instagram, color: "from-pink-500 to-orange-400" },
    { name: "Facebook", Icon: Facebook, color: "from-blue-500 to-blue-600" },
    { name: "LinkedIn", Icon: Linkedin, color: "from-sky-500 to-sky-600" },
    { name: "YouTube", Icon: Youtube, color: "from-red-500 to-rose-600" },
    { name: "X", Icon: X, color: "from-gray-300 to-white" },
  ]

  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-28" dir="rtl" aria-labelledby="launch-title">
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.25),transparent_60%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          {/* Hub: "انطلاقة" */}
          <div className="relative flex justify-center">
            <div className="relative grid place-items-center rounded-2xl px-8 py-4 text-3xl md:text-4xl font-extrabold text-white">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-fuchsia-500/20 to-indigo-500/20 blur-xl" />
              <div className="absolute inset-0 rounded-2xl border border-white/15 bg-white/5" />
              <span className="relative z-10">انطلاقة</span>
              <p className="relative z-10 mt-2 text-sm md:text-base font-normal text-gray-300">
                بضغطة واحدة تصل إعلاناتك لكل المنصات
              </p>
            </div>
          </div>

          {/* Icons row */}
          <div className="relative z-10 mt-10 md:mt-14">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {icons.map(({ name, Icon, color }) => (
                <div
                  key={name}
                  className="group relative cursor-default rounded-xl p-[2px] transition-transform hover:scale-105"
                  aria-label={name}
                  title={name}
                >
                  <div className={`absolute -inset-1 rounded-xl bg-gradient-to-r ${color} opacity-30 blur-md`} />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-gray-900/80 text-white shadow-md backdrop-blur">
                    <Icon className="h-7 w-7" />
                  </div>
                </div>
              ))}
            </div>

            {/* Platform badges */}
            <div className="relative z-10 mt-8 md:mt-10">
              <div className="mx-auto w-full max-w-4xl rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                <Image
                  src="/antalaqa-line.jpg"
                  alt="منصات النشر: جوجل، إنستغرام، فيسبوك، لينكدإن، يوتيوب، ريديت، بنترست، إكس وغيرها"
                  width={954}
                  height={170}
                  unoptimized
                  className="h-auto w-full rounded-xl object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
