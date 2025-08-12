"use client"

import Image from "next/image"
import { Instagram, Facebook, Linkedin, Youtube, X } from "lucide-react"
import { motion } from "framer-motion"
import { useMemo } from "react"

const iconContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
}

const iconItem = {
  hidden: { opacity: 0, y: 12, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function LaunchCompact() {
  const icons = useMemo(
    () => [
      { name: "Instagram", Icon: Instagram, ring: "from-pink-500 to-orange-400" },
      { name: "Facebook", Icon: Facebook, ring: "from-blue-500 to-blue-600" },
      { name: "LinkedIn", Icon: Linkedin, ring: "from-sky-500 to-sky-600" },
      { name: "YouTube", Icon: Youtube, ring: "from-red-500 to-rose-600" },
      { name: "X", Icon: X, ring: "from-gray-300 to-white" },
    ],
    [],
  )

  return (
    <section className="relative mx-auto w-full max-w-5xl text-center" aria-labelledby="launch-title" dir="rtl">
      {/* Glow behind the title pill */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-44 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15),transparent_60%)] blur-2xl" />

      {/* Title pill */}
      <div className="mx-auto inline-flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-8 py-5 backdrop-blur">
        <h2 id="launch-title" className="text-3xl md:text-4xl font-extrabold text-white">
          انطلاقة
        </h2>
        <p className="mt-2 max-w-xl text-sm md:text-base text-gray-300">بضغطة واحدة تصل إعلاناتك لكل المنصات</p>
      </div>

      {/* Icons row with professional animations */}
      <motion.div
        variants={iconContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="mt-6 flex items-center justify-center gap-3 md:gap-4"
      >
        {icons.map(({ name, Icon, ring }, i) => (
          <motion.div
            key={name}
            variants={iconItem}
            // Subtle idle float loop
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3 + i * 0.12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            whileHover={{ scale: 1.08, rotate: 0.5 }}
            whileTap={{ scale: 0.96 }}
            role="button"
            aria-label={name}
            title={name}
            className="group relative rounded-xl cursor-default"
          >
            {/* Animated gradient ring */}
            <motion.div
              initial={{ opacity: 0.35 }}
              whileHover={{ opacity: 0.9 }}
              className={`absolute -inset-1 rounded-xl bg-gradient-to-r ${ring} blur-md`}
            />
            {/* Icon tile */}
            <div className="relative flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl border border-white/10 bg-gray-900/80 text-white shadow-md backdrop-blur transition-colors">
              <Icon className="h-6 w-6 md:h-7 md:w-7" />
            </div>
            {/* Focus accessibility */}
            <span className="sr-only">{name}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Badges panel */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.45, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto mt-6 md:mt-8 w-full max-w-5xl"
      >
        {/* Outer glow + frame */}
        <motion.div
          className="pointer-events-none absolute -inset-2 rounded-[22px] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.15),transparent_60%)] blur-xl"
          animate={{ opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <div className="rounded-2xl border border-white/10 bg-black/70 p-3 backdrop-blur">
          <div className="relative overflow-hidden rounded-xl">
            <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6)_1px,transparent_1px)] bg-[size:18px_18px]" />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lgnyingPzv33j8RyW8a8yYdXbfurPm.png"
              alt="شريط المنصات: Gmail, Google Ads, Instagram, Meta، مشاركة، LinkedIn، YouTube، Reddit، Pinterest، X"
              width={1200}
              height={220}
              unoptimized
              className="relative z-[1] h-auto w-full rounded-xl object-contain"
            />
            {/* انطلاقة icon overlay (replaces the center share icon visually) */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              aria-hidden="true"
            >
              {/* Glow */}
              <motion.div
                initial={{ opacity: 0.6, scale: 0.9 }}
                animate={{ opacity: [0.45, 0.9, 0.45], scale: [0.98, 1.02, 0.98] }}
                transition={{ duration: 3.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -inset-6 rounded-3xl bg-fuchsia-500/35 blur-2xl"
              />
              {/* Icon tile */}
              <div className="relative grid h-16 w-16 place-items-center rounded-2xl border border-white/20 bg-white shadow-[0_0_40px_rgba(168,85,247,0.65)] md:h-20 md:w-20">
                {/* Inner brand mark: rounded square */}
                <div className="h-7 w-7 rounded-[6px] bg-teal-500 md:h-9 md:w-9" />
              </div>
              <span className="sr-only">أيقونة انطلاقة</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
