"use client"

import React, { useEffect, useRef, useState, type ReactNode } from "react"

type Props = {
  children: ReactNode
  className?: string
  itemClassName?: string
  speed?: number // px per ms, default 0.25
  pauseOnHover?: boolean
}

export default function PingPongScrollContainer({
  children,
  className,
  itemClassName,
  speed = 0.25,
  pauseOnHover = true,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const dir = useRef<1 | -1>(1)
  const paused = useRef(false)
  const [isHover, setIsHover] = useState(false)

  useEffect(() => {
    paused.current = isHover && pauseOnHover
  }, [isHover, pauseOnHover])

  useEffect(() => {
    let raf = 0
    let last = 0

    const tick = (t: number) => {
      if (!last) last = t
      const dt = t - last
      last = t

      const c = ref.current
      if (c && !paused.current) {
        const max = c.scrollWidth - c.clientWidth
        const delta = dt * speed * dir.current
        c.scrollLeft = Math.max(0, Math.min(max, c.scrollLeft + delta))
        if (c.scrollLeft >= max - 1) dir.current = -1
        else if (c.scrollLeft <= 1) dir.current = 1
      }

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [speed])

  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={
        "flex flex-nowrap overflow-x-auto no-scrollbar snap-x snap-mandatory gap-4 " + (className ? className : "")
      }
    >
      {React.Children.map(children, (child, i) => (
        <div
          key={i}
          className={
            "snap-center flex-shrink-0 " +
            // Mobile shows 80% width card; desktop shows 1/3 columns
            "w-[82%] sm:w-[60%] md:w-[42%] lg:w-[33%] " +
            (itemClassName ? itemClassName : "")
          }
        >
          {child}
        </div>
      ))}
    </div>
  )
}
