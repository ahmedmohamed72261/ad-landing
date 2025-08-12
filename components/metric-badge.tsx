"use client"

import { useCountUp } from "./use-count-up"
import SocialDots from "./social-dots"

type Props = {
  targetPercent: number
  label?: string
  className?: string
  showDots?: boolean
}

/**
 * Clean metric badge:
 * - Count-up percentage and optional label.
 * - Removed extra arrow icon to ensure a single arrow overall (on the sparkline).
 */
export default function MetricBadge({ targetPercent, label, className, showDots = true }: Props) {
  const value = useCountUp({ end: targetPercent, duration: 1200, delay: 120 })
  return (
    <div
      className={
        "flex items-center gap-2 rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-3 py-1.5 text-emerald-300 shadow-xl " +
        (className ?? "")
      }
      aria-label={(label ? label + " " : "") + String(targetPercent) + "%"}
    >
      <div className="text-sm font-semibold leading-none">{(value | 0) + "%"}</div>
      {label ? <div className="ms-1 me-0.5 text-xs text-emerald-200/90">{label}</div> : null}
      {showDots && <SocialDots className="ms-2" size={16} />}
    </div>
  )
}
