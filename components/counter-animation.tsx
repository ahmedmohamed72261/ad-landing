"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

type CounterAnimationProps = {
  end: number
  duration?: number
  delay?: number
  decimals?: number
  formatValue?: (value: number) => string
  className?: string
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

export default function CounterAnimation({
  end,
  duration = 1500,
  delay = 0,
  decimals = 0,
  formatValue = (v) => v.toLocaleString("ar-EG"),
  className = "",
}: CounterAnimationProps) {
  const [value, setValue] = useState(0)
  const counterRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(counterRef, { once: true, amount: 0.5 })
  const animationStarted = useRef(false)

  useEffect(() => {
    if (!isInView || animationStarted.current) return
    animationStarted.current = true

    let raf = 0
    const startTime = performance.now() + delay

    const tick = (now: number) => {
      const t = Math.max(0, Math.min(1, (now - startTime) / duration))
      const eased = easeOutCubic(t)
      const current = end * eased
      const factor = Math.pow(10, decimals)
      setValue(Math.round(current * factor) / factor)
      if (t < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [isInView, delay, duration, end, decimals])

  return (
    <div ref={counterRef} className={className}>
      {formatValue(value)}
    </div>
  )
}