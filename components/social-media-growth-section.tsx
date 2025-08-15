"use client"

import type React from "react"

import { Instagram, Facebook, Linkedin, Youtube, X, ChevronLeft } from "lucide-react"
import { useCountUp } from "./use-count-up"

function formatSAR(n: number) {
  return n.toLocaleString("ar-EG", { maximumFractionDigits: 0 }) + " ر.س"
}

export default function SocialMediaGrowthSection() {
  // Animated metrics
  const sales = useCountUp({ end: 4000000, duration: 1200, delay: 60 })
  const orders = useCountUp({ end: 1260, duration: 1100, delay: 120 })
  const roas = useCountUp({ end: 4.3, duration: 1300, delay: 180, decimals: 2 })

  const icons = [
    { name: "Instagram", Icon: Instagram, bg: "from-pink-500 to-orange-400" },
    { name: "Facebook", Icon: Facebook, bg: "from-blue-500 to-blue-700" },
    { name: "LinkedIn", Icon: Linkedin, bg: "from-sky-500 to-sky-700" },
    { name: "YouTube", Icon: Youtube, bg: "from-red-500 to-rose-600" },
    { name: "X", Icon: X, bg: "from-gray-200 to-white" },
  ]

  return (
    <section id="social-growth" dir="rtl" className="relative overflow-hidden bg-black py-16 md:py-24">
      {/* Subtle site-colored background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6)_1px,transparent_1px)] bg-[size:18px_18px]" />
        <div className="absolute -top-24 -left-28 h-72 w-72 rounded-full bg-teal-500/12 blur-3xl" />
        <div className="absolute -bottom-28 -right-32 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          {/* Text (left) */}
          <div className="order-1 lg:order-1 lg:justify-self-start max-w-2xl">
            <span className="mb-3 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs text-teal-300">
              نمو عبر المنصات الاجتماعية
            </span>
            <h2 className="mb-3 text-3xl font-extrabold text-white md:text-5xl">نمو مبيعاتك على السوشيال</h2>
            {/* Short, professional description */}
            <p className="text-gray-300 md:text-lg">
              نربط المنصات ونضبط الاستهداف والمحتوى والميزانيات لحظيًا لزيادة المبيعات وخفض التكلفة.
            </p>

            {/* طريقة النمو (مختصرة وبسيطة) */}
            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm">
              <StepPill label="استهداف ذكي" color="teal" />
              <ArrowSep />
              <StepPill label="محتوى مُخصّص" color="indigo" />
              <ArrowSep />
              <StepPill label="تحسين مستمر" color="pink" />
            </div>
          </div>

          {/* Animated card (right), simplified + no background image */}
          <div className="order-2 lg:order-2">
            <div className="relative mx-auto aspect-[16/9] w-full max-w-2xl rounded-[20px] border border-white/10 bg-gradient-to-br from-gray-950 via-black to-black p-4 shadow-[0_16px_60px_rgba(0,0,0,0.5)]">
              {/* Minimal frame glow to match site */}
              <div className="pointer-events-none absolute -inset-0.5 rounded-[22px] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(20,184,166,0.2),rgba(236,72,153,0.15),rgba(99,102,241,0.18),rgba(20,184,166,0.2))] opacity-15 blur-xl" />

              <div className="relative h-full w-full overflow-hidden rounded-xl">
                {/* One subtle orbit ring */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

                {/* Orbiting social icons (cleaner glow, slower spin) */}
                <div className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 animate-[spin_32s_linear_infinite]">
                  <div className="absolute left-1/2 top-0 -translate-x-1/2">
                    <IconTile {...icons[0]} />
                  </div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2">
                    <IconTile {...icons[1]} />
                  </div>
                  <div className="absolute left-1/2 bottom-0 -translate-x-1/2">
                    <IconTile {...icons[2]} />
                  </div>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2">
                    <IconTile {...icons[3]} />
                  </div>
                  <div className="absolute left-[14%] top-[14%]">
                    <IconTile {...icons[4]} />
                  </div>
                </div>

                {/* Metrics (clean, aligned) */}
                <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-end justify-between gap-3">
                  <MetricCard label="المبيعات" value={formatSAR(Math.floor(sales as number))} tone="teal" />
                  <MetricCard
                    label="الطلبات"
                    value={Math.floor(orders as number).toLocaleString("ar-EG")}
                    tone="indigo"
                  />
                  <MetricCard label="ROAS" value={(roas as number).toFixed(2) + "x"} tone="pink" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StepPill({ label, color }: { label: string; color: "teal" | "indigo" | "pink" }) {
  const c =
    color === "teal"
      ? "border-emerald-400/25 bg-emerald-500/10 text-emerald-300"
      : color === "pink"
        ? "border-pink-400/25 bg-pink-500/10 text-pink-300"
        : "border-indigo-400/25 bg-indigo-500/10 text-indigo-300"
  return <span className={`inline-flex items-center rounded-xl border px-3 py-1 text-xs ${c}`}>{label}</span>
}

function ArrowSep() {
  return (
    <span className="inline-flex items-center justify-center px-1 text-gray-400" aria-hidden="true">
      <ChevronLeft className="h-4 w-4" />
    </span>
  )
}

function IconTile({
  name,
  Icon,
  bg,
}: {
  name: string
  Icon: React.ComponentType<{ className?: string }>
  bg: string
}) {
  return (
    <div className="group relative grid place-items-center">
      {/* Softer glow for professional look */}
      <div
        className={`absolute -inset-2 rounded-xl bg-gradient-to-r ${bg} opacity-25 blur-md transition-opacity group-hover:opacity-70`}
      />
      <div className="relative grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-gray-900/80 text-white shadow-md backdrop-blur transition-transform group-hover:scale-105 md:h-14 md:w-14">
        <Icon className="h-6 w-6 md:h-7 md:w-7" />
        <span className="sr-only">{name}</span>
      </div>
    </div>
  )
}

function MetricCard({
  label,
  value,
  tone = "teal",
}: {
  label: string
  value: string
  tone?: "teal" | "pink" | "indigo"
}) {
  const color =
    tone === "teal"
      ? "border-emerald-400/25 bg-emerald-500/10 text-emerald-300"
      : tone === "pink"
        ? "border-pink-400/25 bg-pink-500/10 text-pink-300"
        : "border-indigo-400/25 bg-indigo-500/10 text-indigo-300"

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 shadow ${color}`}
      aria-label={label + " " + value}
    >
      <span className="text-xs text-white/80">{label}</span>
      <span className="text-sm font-semibold tabular-nums">{value}</span>
    </div>
  )
}
