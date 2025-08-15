"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"

export function WhatsAppFloat() {
  const [isHovered, setIsHovered] = useState(false)

  const handleWhatsAppClick = () => {
    const whatsappUrl =
      "https://api.whatsapp.com/send/?phone=966560431575&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%2B%D8%A3%D8%B1%D9%8A%D8%AF%2B%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%2B%D8%B9%D9%86%2B%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%2B%D8%A7%D9%86%D8%B7%D9%84%D8%A7%D9%82%D8%A9%2B%D8%A7%D9%84%D8%A5%D8%B9%D9%84%D8%A7%D9%86%D9%8A%D8%A9&type=phone_number&app_absent=0"
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="fixed left-6 bottom-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:bg-green-600 hover:scale-110"
        aria-label="تواصل عبر واتساب"
      >
        {/* Pulse animation rings */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
        <div className="absolute inset-0 rounded-full bg-green-500 animate-pulse opacity-30"></div>

        {/* WhatsApp icon */}
        <MessageCircle className="h-7 w-7 relative z-10" />

        {/* Tooltip */}
        <div
          className={`absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-sm text-white shadow-lg transition-all duration-200 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
          }`}
        >
          تواصل معنا عبر واتساب
          {/* Arrow */}
          <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
      </button>
    </div>
  )
}
