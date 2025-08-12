"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { SharedHeader } from "@/components/shared-header"
import { SharedFooter } from "@/components/shared-footer"

interface Breadcrumb {
  label: string
  href?: string
}

interface Section {
  title: string
  paragraphs?: string[]
  bullets?: string[]
  custom?: React.ReactNode
}

interface FAQ {
  q: string
  a: string
}

interface CTA {
  label: string
  href: string
}

interface InternalPageProps {
  title: string
  englishTitle?: string
  subtitle?: string
  breadcrumbs: Breadcrumb[]
  sections: Section[]
  faq?: FAQ[]
  cta?: CTA
  heroIcon?: React.ReactNode
  highlights?: string[]
  policyList?: string[]
}

export default function InternalPage({
  title,
  englishTitle,
  subtitle,
  breadcrumbs,
  sections,
  faq,
  cta,
}: InternalPageProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <div className="min-h-screen bg-black text-white font-tajawal">
      {/* Shared Header */}
      <SharedHeader />

      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/20 via-gray-900 to-black" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute left-10 top-20 h-72 w-72 animate-pulse rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-96 w-96 animate-pulse rounded-full bg-blue-500/10 blur-3xl delay-1000" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center">
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
                {index < breadcrumbs.length - 1 && <span className="mx-2">/</span>}
              </div>
            ))}
          </nav>

          {/* Page Header */}
          <div className="text-center max-w-4xl mx-auto">
            {englishTitle && (
              <div className="text-teal-400 text-sm font-medium mb-2 tracking-wider uppercase">{englishTitle}</div>
            )}
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">{title}</h1>
            {subtitle && <p className="text-xl text-gray-300 leading-relaxed">{subtitle}</p>}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {sections.map((section, index) => (
              <div key={index} className="space-y-6">
                <h2 className="text-3xl font-bold text-center mb-8">{section.title}</h2>

                {section.paragraphs &&
                  section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-lg text-gray-300 leading-relaxed text-center">
                      {paragraph}
                    </p>
                  ))}

                {section.bullets && (
                  <ul className="space-y-3 text-lg text-gray-300 leading-relaxed text-center list-disc list-inside">
                    {section.bullets.map((bullet, bIndex) => (
                      <li key={bIndex}>{bullet}</li>
                    ))}
                  </ul>
                )}

                {section.custom && <div className="mt-8">{section.custom}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faq && faq.length > 0 && (
        <section className="relative overflow-hidden py-16 md:py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">الأسئلة الشائعة</h2>

              <div className="space-y-6">
                {faq.map((item, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h3 className="text-xl font-semibold mb-3 text-teal-300">{item.q}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {cta && (
        <section className="relative overflow-hidden py-20 bg-black">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-purple-500/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">جاهز للبدء؟</h2>
              <p className="text-xl text-gray-300 mb-8">تواصل معنا اليوم ودعنا نساعدك في تحقيق أهدافك</p>
              <Link href={cta.href}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-lg px-8 py-4"
                >
                  {cta.label}
                  <ArrowRight className="mr-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      <SharedFooter />
    </div>
  )
}
