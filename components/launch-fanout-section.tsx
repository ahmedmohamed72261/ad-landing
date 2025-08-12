"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Youtube, X } from "lucide-react"
import { motion, useInView } from "framer-motion"

type Line = { d: string }

const iconContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
}

const iconItem = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function LaunchFanoutSection() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const hubRef = useRef<HTMLDivElement | null>(null)
  const iconRefs = useRef<(HTMLDivElement | null)[]>([])
  const [lines, setLines] = useState<Line[]>([])
  const inView = useInView(containerRef, { amount: 0.25, once: true })

  const icons = useMemo(
    () => [
      { name: "Instagram", Icon: Instagram, color: "from-pink-500 to-orange-400" },
      { name: "Facebook", Icon: Facebook, color: "from-blue-500 to-blue-600" },
      { name: "LinkedIn", Icon: Linkedin, color: "from-sky-500 to-sky-600" },
      { name: "YouTube", Icon: Youtube, color: "from-red-500 to-rose-600" },
      { name: "X", Icon: X, color: "from-gray-300 to-white" },
    ],
    [],
  )

  function updateLines() {
    const c = containerRef.current
    const hub = hubRef.current
    if (!c || !hub) {
      setLines([])
      return
    }
    const crect = c.getBoundingClientRect()
    const hrect = hub.getBoundingClientRect()
    const startX = hrect.left + hrect.width / 2 - crect.left
    const startY = hrect.top + hrect.height - crect.top

    const newLines: Line[] = []
    iconRefs.current.forEach((el) => {
      if (!el) return
      const r = el.getBoundingClientRect()
      const endX = r.left + r.width / 2 - crect.left
      const endY = r.top - crect.top
      const cx = (startX + endX) / 2
      const cy = startY + Math.max(60, Math.abs(endX - startX) * 0.35)
      const d = `M ${startX} ${startY} Q ${cx} ${cy} ${endX} ${endY}`
      newLines.push({ d })
    })
    setLines(newLines)
  }

  useEffect(() => {
    updateLines()
    const onResize = () => updateLines()
    const ro = new ResizeObserver(onResize)
    if (containerRef.current) ro.observe(containerRef.current)
    window.addEventListener("resize", onResize)
    return () => {
      ro.disconnect()
      window.removeEventListener("resize", onResize)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Recalculate after icons mount/animate into place
  useEffect(() => {
    if (!inView) return
    const t = setTimeout(updateLines, 50)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-28" dir="rtl" aria-labelledby="launch-title">
      {/* Subtle map dots + glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.25),transparent_60%)]" />
      </div>

      <div ref={containerRef} className="relative z-10 container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          {/* Hub: "انطلاقة" */}
          <div className="relative flex justify-center">
            <motion.div
              ref={hubRef}
              initial={{ opacity: 0, y: -12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative grid place-items-center rounded-2xl px-8 py-4 text-3xl md:text-4xl font-extrabold text-white"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-fuchsia-500/20 to-indigo-500/20 blur-xl" />
              <div className="absolute inset-0 rounded-2xl border border-white/15 bg-white/5" />
              <span className="relative z-10">انطلاقة</span>
              <p className="relative z-10 mt-2 text-sm md:text-base font-normal text-gray-300">
                بضغطة واحدة تصل إعلاناتك لكل المنصات
              </p>
            </motion.div>
          </div>

          {/* SVG connectors */}
          <div className="relative mt-10 md:mt-14">
            <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full" aria-hidden="true">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L6,3 Z" fill="#a78bfa" />
                </marker>
              </defs>
              {lines.map((l, i) => (
                <motion.path
                  key={i}
                  d={l.d}
                  fill="none"
                  stroke="#a78bfa"
                  strokeWidth={2.5}
                  strokeOpacity={0.8}
                  strokeLinecap="round"
                  markerEnd="url(#arrowhead)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 0.85 } : { pathLength: 0, opacity: 0 }}
                  transition={{ duration: 1.2, delay: 0.2 + i * 0.1, ease: "easeInOut" }}
                  style={{ filter: "drop-shadow(0 0 6px rgba(167,139,250,0.6))" }}
                />
              ))}
            </svg>

            {/* Icons row(s) */}
            <motion.div
              variants={iconContainer}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="relative z-10 flex flex-wrap items-center justify-center gap-4 md:gap-6"
            >
              {icons.map(({ name, Icon, color }, i) => (
                <motion.div
                  key={name}
                  ref={(el) => (iconRefs.current[i] = el)}
                  variants={iconItem}
                  className="group relative cursor-default rounded-xl p-[2px] transition-transform"
                  aria-label={name}
                  title={name}
                >
                  <div className={`absolute -inset-1 rounded-xl bg-gradient-to-r ${color} opacity-30 blur-md`} />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-gray-900/80 text-white shadow-md backdrop-blur">
                    <Icon className="h-7 w-7" />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Provided strip of platform badges */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 mt-8 md:mt-10"
            >
              <div className="mx-auto w-full max-w-4xl rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lgnyingPzv33j8RyW8a8yYdXbfurPm.png"
                  alt="منصات النشر: جوجل، إنستغرام، فيسبوك، لينكدإن، يوتيوب، ريديت، بنترست، إكس وغيرها"
                  width={954}
                  height={170}
                  unoptimized
                  className="h-auto w-full rounded-xl object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
