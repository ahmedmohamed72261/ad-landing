'use client'

import { useEffect, useState } from 'react'

export function LoadingOverlay() {
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => Math.min(prevProgress + 50, 100)) // Increase progress by 50% per second
      } else {
        setIsVisible(false)
      }
    }, 1000)  // Update progress every second

    return () => clearInterval(interval)
  }, [progress])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-r from-teal-500/90 to-emerald-500/90 backdrop-blur-md transition-all duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Logo container with glow effect */}
        <div className="mb-8 relative">
          <div className="w-16 h-16 relative">
            <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
            <img 
              src="/antalaqa-icon.png" 
              alt="Antalaqa Logo"
              className="w-full h-full rounded-full object-contain relative z-10"
            />
          </div>
          {/* Circular spinner around logo */}
          <div className="absolute inset-[-8px] rounded-full border-4 border-white/20 border-t-white animate-spin"></div>
        </div>

        {/* Loading text without counter */}
        <div className="text-white text-xl font-bold relative mb-4">
          <div className="overflow-hidden">
            <div className="animate-slide-up">
              جاري التحميل...
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-xs bg-white/20 rounded-full h-3 mb-4">
          <div
            className="h-full bg-teal-500 rounded-full transition-all duration-1000"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}
