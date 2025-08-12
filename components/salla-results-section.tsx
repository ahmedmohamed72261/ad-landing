"use client"

import { ArrowDownRight, ArrowUpRight } from "lucide-react"
import { useMemo } from "react"
import { useCountUp } from "./use-count-up"
import AnimatedSparkline from "./animated-sparkline"

type Metric = {
  label: string
  amount: number // SAR value; negative allowed
  percent: number // positive percentage (as in screenshot)
}

const metricsData: Metric[] = [
  { label: "إجمالي المبيعات (شامل التخفيضات)", amount: 1220160.2, percent: 54.79 },
  { label: "كوبونات التخفيض", amount: -302537.25, percent: 51.48 },
  { label: "إجمالي المبيعات", amount: 917622.95, percent: 55.91 },
  // Skipping “تكاليف المنتجات” as it’s blank in screenshot
  { label: "الشحن", amount: -86903.22, percent: 83.75 },
  // Skipping “الضرائب” as it’s blank in screenshot
  { label: "رسوم الدفع الإلكتروني", amount: -7529.29, percent: 58.06 },
]

function formatSAR(value: number) {
  const abs = Math.abs(value)
  const parts = abs.toLocaleString("ar-EG", { maximumFractionDigits: 2 })
  return (value < 0 ? "-" : "") + parts + " ر.س"
}

function AreaChartBackground() {
  // Simple smooth area path behind the arrow
  // ViewBox: 100x60; area from bottom baseline up to a smooth line
  const d =
    "M0,50 L4,38 L8,45 L12,40 L16,36 L20,32 L24,34 L28,33 L32,35 L36,36 L40,34 L44,33 L48,34 L52,36 L56,32 L60,30 L64,28 L68,26 L72,24 L76,22 L80,19 L84,21 L88,18 L92,16 L96,14 L100,12 L100,60 L0,60 Z"

  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 60" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="area-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(56,189,248,0.35)" />
          <stop offset="100%" stopColor="rgba(56,189,248,0.08)" />
        </linearGradient>
        <pattern id="h-grid" width="100" height="10" patternUnits="userSpaceOnUse">
          <path d="M0 10 H100" stroke="rgba(255,255,255,0.12)" strokeWidth="0.4" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="100" height="60" fill="url(#h-grid)" />
      <path d={d} fill="url(#area-grad)" />
      <path d={d.replace(" L100,60 L0,60 Z", "")} fill="none" stroke="rgba(99,102,241,0.8)" strokeWidth="1.2" />
    </svg>
  )
}

function MetricRow({ m, delay = 0 }: { m: Metric; delay?: number }) {
  const amount = useCountUp({ end: Math.abs(m.amount), duration: 900, delay, decimals: 2 })
  const percent = useCountUp({ end: m.percent, duration: 1100, delay: delay + 80, decimals: 2 })
  const isNeg = m.amount < 0
  return (
    <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] p-3">
      <div className="flex items-center gap-2">
        <span
          className={
            "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold " +
            (percent >= 0 ? "bg-emerald-500/10 text-emerald-400" : "bg-rose-500/10 text-rose-400")
          }
        >
          {(percent as number).toFixed(2) + " %"}
          {percent >= 0 ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}
        </span>
        <span className="text-sm text-gray-300">{m.label}</span>
      </div>
      <div className={"text-sm font-semibold " + (isNeg ? "text-rose-400" : "text-white")}>
        {formatSAR((isNeg ? -1 : 1) * (amount as number) * (isNeg ? -1 : 1))}
      </div>
    </div>
  )
}

export default function SallaResultsSection() {
  // Average percent can subtly affect arrow draw speed (lower ms for higher growth)
  const avgPercent = useMemo(() => metricsData.reduce((a, b) => a + b.percent, 0) / metricsData.length, [])
  const loopMs = Math.max(2200, 5000 - avgPercent * 12) // a gentle relation

  return (
    <section id="salla-results" dir="rtl" className="relative overflow-hidden bg-gray-950 py-16 md:py-22">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:18px_18px]" />
      <div className="relative z-10 container mx-auto grid items-start gap-10 px-4 lg:grid-cols-2">
        {/* Chart with single pink arrow */}
        <div className="order-2 lg:order-1">
          <div className="mx-auto w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
              {/* Area lines + grid */}
              <AreaChartBackground />
              {/* Single moving pink arrow */}
              <AnimatedSparkline className="pointer-events-none absolute inset-5 md:inset-7" loopMs={loopMs} />
              {/* Top-left pill */}
              <div className="absolute right-2 top-2 md:right-3 md:top-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs text-teal-300">
                  نتائج سلة
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* KPI list */}
        <div className="order-1 max-w-2xl lg:order-2 lg:justify-self-end">
          <div className="mb-6">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">ملخص نتائج سلة</h2>
            <p className="mt-2 text-sm text-gray-400">أرقام حقيقية من لوحة المبيعات والطلبات</p>
          </div>
          <div className="space-y-3">
            {metricsData.map((m, i) => (
              <MetricRow key={m.label} m={m} delay={i * 120} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
