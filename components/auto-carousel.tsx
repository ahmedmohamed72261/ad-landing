"use client"

import React, { type ReactNode } from "react"

type AutoCarouselProps = {
  children: ReactNode
  className?: string
  itemWrapperClassName?: string
  gapClassName?: string
}

export default function AutoCarousel({
  children,
  className,
  itemWrapperClassName = "w-full md:w-1/2 lg:w-1/3",
  gapClassName = "gap-4 md:gap-6",
}: AutoCarouselProps) {
  const items = React.Children.toArray(children)

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`} aria-roledescription="carousel">
      <div className={`flex ${gapClassName} overflow-x-auto scrollbar-hide snap-x snap-mandatory`}>
        {items.map((child, i) => (
          <div key={i} className={`${itemWrapperClassName} flex-shrink-0 snap-center`}>
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}
