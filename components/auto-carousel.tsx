"use client"

import React, { useEffect, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from "react"

type AutoCarouselProps = {
  children: ReactNode
  className?: string
  itemWrapperClassName?: string // width classes for each item (e.g., w-full md:w-1/2 lg:w-1/3)
  gapClassName?: string // spacing between items
  interval?: number // ms between auto-advance. default 6000
  transitionMs?: number // slide transition duration. default 600
  pauseOnHover?: boolean
}

export default function AutoCarousel({
  children,
  className,
  itemWrapperClassName = "w-full md:w-1/2 lg:w-1/3",
  gapClassName = "gap-4 md:gap-6",
  interval = 6000,
  transitionMs = 600,
  pauseOnHover = true,
}: AutoCarouselProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const [index, setIndex] = useState(0)
  const [transform, setTransform] = useState("translateX(0px)")
  const [transition, setTransition] = useState<string | undefined>(undefined)
  const [paused, setPaused] = useState(false)

  const items = useMemo(() => React.Children.toArray(children), [children])

  // Measure positions and compute transform to snap to the current index
  const updateTransform = () => {
    const track = trackRef.current
    if (!track) return
    const child = track.children[index] as HTMLElement | undefined
    if (!child) return
    const offset = child.offsetLeft
    setTransition(`transform ${transitionMs}ms cubic-bezier(0.22, 1, 0.36, 1)`)
    setTransform(`translateX(${-offset}px)`)
  }

  // Compute max start index based on visible count (container / first item width)
  const getMaxStartIndex = () => {
    const container = containerRef.current
    const track = trackRef.current
    if (!container || !track || track.children.length === 0) return Math.max(0, items.length - 1)
    const first = track.children[0] as HTMLElement
    const visible = Math.max(1, Math.round(container.clientWidth / first.clientWidth))
    return Math.max(0, items.length - visible)
  }

  // Keep index within bounds on resize
  const clampIndex = () => {
    const max = getMaxStartIndex()
    setIndex((prev) => Math.min(prev, max))
  }

  // Recalculate on index or size changes
  useLayoutEffect(() => {
    updateTransform()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, items.length])

  // Observe resize to keep layout responsive
  useEffect(() => {
    const ro = new ResizeObserver(() => {
      clampIndex()
      // Slight timeout ensures layout is settled before measuring offset
      setTimeout(updateTransform, 30)
    })
    if (containerRef.current) ro.observe(containerRef.current)
    if (trackRef.current) ro.observe(trackRef.current)
    return () => ro.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length])

  // Auto-advance timer
  useEffect(() => {
    if (paused && pauseOnHover) return
    const id = setInterval(() => {
      const max = getMaxStartIndex()
      setIndex((prev) => {
        if (prev >= max) return 0
        return prev + 1
      })
    }, interval)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interval, paused, items.length])

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className ?? ""}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {/* Left/Right gradient fades for a polished look */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black to-transparent" />

      <div
        ref={trackRef}
        className={`flex ${gapClassName} will-change-transform`}
        style={{ transform, transition }}
        aria-live="off"
      >
        {items.map((child, i) => (
          <div key={i} className={`${itemWrapperClassName} flex-shrink-0`}>
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}
