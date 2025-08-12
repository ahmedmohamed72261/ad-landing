"use client"

import { useEffect, useRef, useState } from "react"

type Options = {
  end: number
  duration?: number
  delay?: number
  decimals?: number
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

export function useCountUp({ end, duration = 1200, delay = 0, decimals = 0 }: Options) {
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (started.current) return
    started.current = true

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
  }, [delay, duration, end, decimals])

  return value
}
