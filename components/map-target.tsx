"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

type Pin = { x: number; y: number }

const PINS: Pin[] = [
  { x: 26, y: 36 }, // الخليج
  { x: 54, y: 32 }, // جنوب أوروبا/المتوسط
  { x: 70, y: 44 }, // الهند
  { x: 38, y: 52 }, // شمال أفريقيا
]

export default function MapTarget() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % PINS.length)
    }, 1800)
    return () => clearInterval(id)
  }, [])

  const pin = PINS[idx]

  return (
    <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
      <Image
        src="/images/world-map-dark.png"
        alt="خريطة العالم لعرض الاستهداف الجغرافي"
        fill
        className="object-cover"
        priority
      />
      {/* animated pulsing marker */}
      <div
        className="absolute transition-all duration-600 ease-out"
        style={{ left: pin.x + "%", top: pin.y + "%", transform: "translate(-50%, -50%)" }}
        aria-label="مؤشر موقع مستهدف"
      >
        <div className="relative h-4 w-4">
          <span className="absolute inset-0 rounded-full bg-teal-400/90 shadow-[0_0_24px_rgba(45,212,191,0.7)]" />
          <span className="absolute inset-0 animate-ping rounded-full bg-teal-400/50" />
        </div>
      </div>
      {/* faint grid vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.25)_70%)]" />
    </div>
  )
}
