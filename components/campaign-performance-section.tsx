"use client"

import { BarChart3, Target } from "lucide-react"
import { useEffect, useRef } from "react"

type BarProps = {
  label: string
  valueText?: string
  percent: number // 0..100 width
  tone: "pink" | "indigo" | "emerald"
}

/**
 * AnimatedBar: fixed-width animated fill with moving diagonal stripes (JS-driven bg-position to avoid adding keyframes).
 */
function AnimatedBar({ label, valueText, percent, tone }: BarProps) {
  const stripesRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let raf = 0
    let start = 0
    const el = stripesRef.current
    if (!el) return

    const speed = 40 // px/s
    const loop = (t: number) => {
      if (!start) start = t
      const dt = (t - start) / 1000 // seconds
      const offset = -((dt * speed) % 16) // stripe width = 16px
      el.style.backgroundPosition = offset + "px 0px"
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])

  const base =
    tone === "pink" ? "rgba(236,72,153,0.45)" : tone === "indigo" ? "rgba(99,102,241,0.45)" : "rgba(16,185,129,0.45)"

  const glow =
    tone === "pink" ? "rgba(236,72,153,0.55)" : tone === "indigo" ? "rgba(99,102,241,0.55)" : "rgba(16,185,129,0.55)"

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-[11px] leading-none text-gray-300">{label}</span>
        {valueText ? <span className="text-[12px] font-semibold tabular-nums text-white/90">{valueText}</span> : null}
      </div>
      <div className="h-3 w-full overflow-hidden rounded-md bg-[#101419]">
        {/* Fill */}
        <div className="relative h-full" style={{ width: Math.max(0, Math.min(100, percent)) + "%" }}>
          {/* Base color */}
          <div className="absolute inset-0 rounded-md" style={{ backgroundColor: base }} />
          {/* Moving stripes */}
          <div
            ref={stripesRef}
            className="absolute inset-0 rounded-md opacity-50"
            style={{
              backgroundImage:
                "repeating-linear-gradient( 90deg, rgba(255,255,255,0.22) 0px, rgba(255,255,255,0.22) 8px, transparent 8px, transparent 16px )",
              backgroundSize: "16px 100%",
            }}
          />
          {/* Soft highlight */}
          <div
            className="absolute inset-0 rounded-md"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.22), rgba(255,255,255,0.06) 55%, rgba(0,0,0,0) 100%)",
              mixBlendMode: "overlay",
            }}
          />
          {/* Edge glow */}
          <div
            className="pointer-events-none absolute -inset-[1px] rounded-md"
            style={{ boxShadow: `0 0 14px ${glow}` }}
          />
        </div>
      </div>
    </div>
  )
}

/**
 * CampaignPerformanceSection
 * - Right: clean fixed rectangle 522 × 280 with animated lines for ROI / CTR / TARGET.
 * - Left: concise copy (unchanged).
 */
export default function CampaignPerformanceSection() {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-[#0b0f14] py-14 md:py-20"
      aria-labelledby="campaign-performance-title"
    >
      {/* Subtle background grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(0deg,transparent_24px,rgba(255,255,255,0.06)_25px),linear-gradient(90deg,transparent_24px,rgba(255,255,255,0.06)_25px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 container mx-auto grid items-center gap-10 px-4 lg:grid-cols-2">
        {/* Right: fixed-size animated rectangle (522 x 280) */}
        <div className="order-2 lg:order-2 lg:justify-self-start">
          <div className="relative mx-auto w-full max-w-[522px]">
            <div className="relative h-[280px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0f1216] p-4 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur">
              {/* Title row inside the card */}
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[12px] font-semibold text-white/85">Campaign Manager</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-gray-300">
                  Live
                </span>
              </div>

              {/* Animated lines */}
              <div className="flex h-[calc(100%-28px)] flex-col justify-center gap-4">
                <AnimatedBar label="ROI" valueText={"4.3x"} percent={72} tone="pink" />
                <AnimatedBar label="CTR" valueText={"3.1%"} percent={32} tone="indigo" />
                <AnimatedBar label="TARGET" valueText={"85%"} percent={85} tone="emerald" />
              </div>
            </div>
          </div>
        </div>

        {/* Left: Copy */}
        <div className="order-1 max-w-2xl lg:justify-self-end">
          <span className="mb-3 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs text-teal-300">
            تحسين الحملات
          </span>
          <h2 id="campaign-performance-title" className="mb-3 text-3xl font-extrabold text-white md:text-5xl">
            أداء الحملات
          </h2>
          <p className="mb-8 text-base leading-relaxed text-gray-300">
            ضبط الاستهداف والمحتوى والميزانيات لحظيًا لرفع العائد وتقليل التكلفة بقرارات مبنية على البيانات.
          </p>

          <ul className="space-y-6">
            <li className="pr-4 border-r-2 border-indigo-400/70">
              <div className="mb-1.5 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-indigo-300" />
                <h3 className="text-lg font-semibold">لوحات قياس واضحة</h3>
              </div>
              <p className="text-sm text-gray-400">CPA, ROAS, معدل التحويل — رؤية شاملة وسريعة.</p>
            </li>
            <li className="pr-4 border-r-2 border-indigo-400/70">
              <div className="mb-1.5 flex items-center gap-2">
                <Target className="h-5 w-5 text-indigo-300" />
                <h3 className="text-lg font-semibold">تحسين مستمر</h3>
              </div>
              <p className="text-sm text-gray-400">اختبارات A/B واستهداف ذكي لخفض التكلفة وزيادة الوصول.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
