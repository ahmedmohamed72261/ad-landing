"use client"

import React from "react"

interface AutoScrollContainerProps {
  children: React.ReactNode
  className?: string
  itemClassName?: string
}

export function AutoScrollContainer({ children, className, itemClassName }: AutoScrollContainerProps) {
  return (
    <div className={`flex flex-nowrap overflow-x-auto scrollbar-hide snap-x snap-mandatory ${className}`}>
      {React.Children.map(children, (child, index) => (
        <div key={index} className={`snap-center flex-shrink-0 ${itemClassName}`}>
          {child}
        </div>
      ))}
    </div>
  )
}
