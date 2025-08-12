"use client"

import Image from "next/image"

type Dot = { src: string; alt: string }

export default function SocialDots({ size = 16, className }: { size?: number; className?: string }) {
  const dots: Dot[] = [
    { src: "/icons/google.png", alt: "Google" },
    { src: "/icons/snapchat.png", alt: "Snapchat" },
    { src: "/icons/tiktok.png", alt: "TikTok" },
  ]
  return (
    <div className={"flex items-center -space-x-2 rtl:space-x-reverse " + (className ?? "")}>
      {dots.map((d, i) => (
        <div
          key={i}
          className="grid place-items-center rounded-full border border-white/15 bg-white/10 backdrop-blur"
          style={{ width: size, height: size }}
          aria-label={d.alt}
          title={d.alt}
        >
          <Image
            src={d.src || "/placeholder.svg"}
            alt={d.alt}
            width={size - 6}
            height={size - 6}
            className="rounded-full object-contain"
          />
        </div>
      ))}
    </div>
  )
}
