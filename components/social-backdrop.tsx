"use client"

import type React from "react"

import Image from "next/image"
import { cn } from "@/lib/utils"

type Props = {
  side?: "left" | "right"
  className?: string
  size?: number // base size of each icon
  opacity?: number
  blurPx?: number
}

/**
 * Subtle background cluster of social icons (faint, blurred).
 * Place it beside a card container for decorative context.
 */
export default function SocialBackdrop({ side = "left", className, size = 48, opacity = 0.08, blurPx = 6 }: Props) {
  const icons = [
    { src: "/icons/google.png", alt: "Google" },
    { src: "/icons/snapchat.png", alt: "Snapchat" },
    { src: "/icons/tiktok.png", alt: "TikTok" },
    { src: "/icons/instagram.png", alt: "Instagram" },
    { src: "/icons/youtube.png", alt: "YouTube" },
  ]

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-y-0 z-0 hidden md:block",
        side === "left" ? "-left-10 md:-left-14" : "-right-10 md:-right-14",
        className,
      )}
      aria-hidden="true"
    >
      <div className="relative h-full w-24">
        {icons.map((ic, i) => (
          <div
            key={i}
            className="absolute"
            style={
              {
                top: `${10 + i * 16}%`,
                [side]: `${(i % 3) * 10}px`,
                opacity,
                filter: `blur(${blurPx}px)`,
              } as React.CSSProperties
            }
          >
            <Image
              src={ic.src || "/placeholder.svg"}
              alt={ic.alt}
              width={size}
              height={size}
              className="rounded-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
