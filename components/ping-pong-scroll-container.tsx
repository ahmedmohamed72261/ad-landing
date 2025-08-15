"use client"

import React, { type ReactNode } from "react"

type Props = {
  children: ReactNode
  className?: string
  itemClassName?: string
}

export default function PingPongScrollContainer({ children, className, itemClassName }: Props) {
  return (
    <div className={`flex flex-nowrap overflow-x-auto no-scrollbar snap-x snap-mandatory gap-4 ${className || ""}`}>
      {React.Children.map(children, (child, i) => (
        <div
          key={i}
          className={`snap-center flex-shrink-0 w-[82%] sm:w-[60%] md:w-[42%] lg:w-[33%] ${itemClassName || ""}`}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
