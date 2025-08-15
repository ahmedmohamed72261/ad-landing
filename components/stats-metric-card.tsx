"use client"

import { motion } from "framer-motion"
import { useCountUp } from "./use-count-up"
import type { LucideIcon } from "lucide-react"

type StatsMetricCardProps = {
  Icon: LucideIcon
  value: number
  label: string
  delay?: number
  formatValue?: (value: number) => string
}

export default function StatsMetricCard({
  Icon,
  value,
  label,
  delay = 0,
  formatValue = (v) => v.toLocaleString("ar-EG"),
}: StatsMetricCardProps) {
  const animatedValue = useCountUp({ end: value, duration: 1200, delay: 100 + delay })

  return (
    <motion.div
      className="flex flex-col items-center text-center p-6 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-800/70 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: delay / 1000 }}
    >
      <div className="mb-4 rounded-full bg-teal-500/20 p-3">
        <Icon className="h-8 w-8 text-teal-400" />
      </div>
      <p className="mb-2 text-3xl md:text-4xl font-bold">{formatValue(animatedValue)}</p>
      <p className="text-sm md:text-base text-gray-300">{label}</p>
    </motion.div>
  )
}
