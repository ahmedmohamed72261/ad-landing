"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

interface SharedHeaderProps {
  currentPage?: string
}

export function SharedHeader({ currentPage }: SharedHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "الرئيسية", href: "/" },
    { name: "خدماتنا", href: "/services", sections: [
      { name: "إدارة الحملات", href: "/services/ads-management" },
      { name: "تحسين ROAS", href: "/solutions/roas-cpa-optimization" },
    ] },
    { name: "أعمالنا", href: "/case-studies" },
    { name: "المدونة", href: "/blog" },
    { name: "من نحن", href: "/about" },
    { name: "تواصل معنا", href: "/contact" },
  ]
  
  const [activeSection, setActiveSection] = useState<string | null>(null)

  return (
    <header className="bg-teal-500 py-4 px-4 md:px-8" dir="rtl">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo (right) */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Image
              src="/antalaqa-logo.jpg"
              alt="انطلاقة - منصة الإعلانات الذكية الرائدة في المنطقة"
              width={48}
              height={48}
              className="rounded-lg object-cover shadow-lg"
              priority
              sizes="48px"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white mt-1">انطلاقة</span>
          </div>
        </div>

        {/* Desktop Nav with dropdowns */}
        <nav className="hidden lg:flex items-center gap-6 text-white">
          {navItems.map((item) => (
            <div key={item.name} className="relative group" 
              onMouseEnter={() => item.sections && setActiveSection(item.name)}
              onMouseLeave={() => setActiveSection(null)}
            >
              <Link
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-teal-100 ${
                  currentPage === item.name ? "text-teal-100 border-b-2 border-teal-100" : ""
                }`}
              >
                {item.name}
              </Link>
              
              {/* Dropdown for sections */}
              {item.sections && activeSection === item.name && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-teal-700 rounded-md shadow-lg py-1 z-50 transform opacity-100 scale-100 transition-all duration-200">
                  {item.sections.map((section) => (
                    <Link
                      key={section.name}
                      href={section.href}
                      className="block px-4 py-2 text-sm text-white hover:bg-teal-600 transition-colors"
                      onClick={() => setActiveSection(null)}
                    >
                      {section.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Actions (left) */}
        <div className="flex items-center gap-3">
          <Button
            className="rounded-lg bg-teal-700 px-6 py-2 font-medium text-white transition-colors hover:bg-teal-800"
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send/?phone=966560431575&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%2B%D8%A3%D8%B1%D9%8A%D8%AF%2B%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%2B%D8%B9%D9%86%2B%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%2B%D8%A7%D9%86%D8%B7%D9%84%D8%A7%D9%82%D8%A9%2B%D8%A7%D9%84%D8%A5%D8%B9%D9%84%D8%A7%D9%86%D9%8A%D8%A9&type=phone_number&app_absent=0",
                "_blank",
              )
            }
          >
            أطلق حملتك الان
          </Button>

          {/* Mobile toggle (placeholder) */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-teal-100"
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with collapsible sections */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 border-t border-teal-400 pt-4">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <div key={item.name} className="space-y-1">
                <div className="flex justify-between items-center">
                  <Link
                    href={item.href}
                    className={`text-sm font-medium py-2 px-4 rounded transition-colors hover:bg-teal-600 ${
                      currentPage === item.name ? "bg-teal-600 text-white" : "text-white"
                    }`}
                    onClick={() => !item.sections && setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.sections && (
                    <button 
                      onClick={() => setActiveSection(activeSection === item.name ? null : item.name)}
                      className="text-white p-2 hover:bg-teal-600 rounded"
                      aria-label="Toggle section"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className={`transition-transform ${activeSection === item.name ? 'rotate-180' : ''}`}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                  )}
                </div>
                
                {/* Mobile dropdown sections */}
                {item.sections && activeSection === item.name && (
                  <div className="pr-4 border-r border-teal-500 mr-2 space-y-1">
                    {item.sections.map((section) => (
                      <Link
                        key={section.name}
                        href={section.href}
                        className="block text-sm text-white hover:bg-teal-600 py-2 px-4 rounded transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {section.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
