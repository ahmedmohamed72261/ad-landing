"use client"

import { ArrowUpRight } from "lucide-react"
import { useCountUp } from "./use-count-up"

type Keyword = {
  label: string
  count: number
}

const KEYWORDS: Keyword[] = [
  { label: "العائد على الاستثمار", count: 24510 },
  { label: "الاستهداف الدقيق", count: 19870 },
  { label: "نسبة النقر CTR", count: 15420 },
  { label: "تكلفة الاكتساب CPA", count: 13260 },
  { label: "مرات الظهور Impressions", count: 40210 },
]

function formatNumber(n: number) {
  return n.toLocaleString("ar-EG")
}

export default function KeywordsRow() {
  const animatedValues = KEYWORDS.map((k, i) => useCountUp({ end: k.count, duration: 1100, delay: 80 + i * 120 }))

  return (
    <div dir="rtl" className="w-full overflow-x-hidden" aria-label="الكلمات المفتاحية">
      <ul className="flex flex-nowrap items-center justify-center gap-3">
        {KEYWORDS.map((k, i) => {
          const animated = animatedValues[i]
          return (
            <li key={k.label} className="flex-shrink-0">
              <div className="flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800/80 px-4 py-2 text-sm text-gray-100">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-emerald-400">
                  {formatNumber(Math.floor(animated))}
                  <ArrowUpRight className="h-3.5 w-3.5 text-emerald-400" />
                </span>
                <span className="whitespace-nowrap">{k.label}</span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
