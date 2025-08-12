"use client"

import { useCountUp } from "./use-count-up"
import SocialDots from "./social-dots"

export default function MetricPill({
  percent,
  label,
  className,
  withDots = true,
}: {
  percent: number
  label: string
  className?: string
  withDots?: boolean
}) {
  const v = useCountUp({ end: percent, duration: 1300, delay: 120 })
  return (
    <div
      className={
        "inline-flex items-center gap-2 rounded-xl border border-emerald-400/25 bg-emerald-500/10 px-3 py-1.5 text-emerald-300 shadow " +
        (className ?? "")
      }
    >
      {withDots && <SocialDots className="ms-0.5" size={16} />}
      <span className="text-xs text-emerald-200/90">{label}</span>
      <span className="text-sm font-semibold">{(v | 0) + "%"}</span>
    </div>
  )
}
