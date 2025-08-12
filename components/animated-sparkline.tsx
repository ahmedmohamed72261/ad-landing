"use client"

import { useEffect, useRef } from "react"

type Props = {
  className?: string
  stroke?: string
  strokeWidth?: number
  loopMs?: number
  opacity?: number
}

/**
 * Single up-trending pink arrow with draw animation.
 */
export default function AnimatedSparkline({
  className,
  stroke = "#ec4899",
  strokeWidth = 3,
  loopMs = 3200,
  opacity = 0.95,
}: Props) {
  const pathRef = useRef<SVGPathElement | null>(null)

  useEffect(() => {
    let raf = 0
    let start = 0
    const path = pathRef.current
    if (!path) return

    const length = path.getTotalLength()
    path.style.strokeDasharray = `${length}`
    path.style.strokeDashoffset = `${length}`

    const animate = (t: number) => {
      if (!start) start = t
      const progress = ((t - start) % loopMs) / loopMs
      const dash = (1 - progress) * length
      path.style.strokeDashoffset = `${dash}`
      raf = requestAnimationFrame(animate)
    }

    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [loopMs])

  // Smooth ascending curve ending at top-right
  const d = "M2,56 C14,50 22,46 32,43 C42,40 50,36 60,32 C70,28 80,20 92,12 L100,8"

  return (
    <svg className={className} viewBox="0 0 100 60" aria-hidden="true" style={{ opacity }}>
      <defs>
        <marker id="arrowhead-pink" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 Z" fill={stroke} />
        </marker>
        <filter id="pink-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        ref={pathRef}
        d={d}
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        markerEnd="url(#arrowhead-pink)"
        filter="url(#pink-glow)"
        style={{ transition: "stroke-dashoffset 0.2s linear" }}
      />
    </svg>
  )
}
