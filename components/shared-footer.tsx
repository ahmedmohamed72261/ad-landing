"use client"

import Link from "next/link"
import { Linkedin, Instagram, X, Youtube } from "lucide-react"
import FooterBadges from "@/components/footer-badges"
import Image from "next/image"

export function SharedFooter() {
  return (
    <footer className="border-t border-teal-600 bg-teal-500 py-12 text-white md:py-16" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand + socials */}
          <div className="flex flex-col items-center gap-6 md:w-1/4 md:items-start">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image
                  src="/antalaqa-logo.jpg"
                  alt="انطلاقة - منصة الإعلانات الذكية"
                  width={48}
                  height={48}
                  className="rounded-lg object-cover shadow-lg"
                  loading="lazy"
                  sizes="48px"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">انطلاقة</span>
                <span className="-mt-1 text-sm font-medium text-white/80">Intilaqa Ads Platform</span>
              </div>
            </div>

            <p className="text-center text-sm text-white/90 md:text-start">
              منصة إعلانية متكاملة لإطلاق حملاتك والوصول إلى جمهورك بدقة وفعالية
            </p>

            <div className="mt-4 flex gap-4 text-white/80">
              <a href="https://www.linkedin.com/" className="transition-colors hover:text-white" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/" className="transition-colors hover:text-white" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/" className="transition-colors hover:text-white" aria-label="X (Twitter)">
                <X className="h-6 w-6" />
              </a>
              <a href="https://www.youtube.com/" className="transition-colors hover:text-white" aria-label="Youtube">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/" className="transition-colors hover:text-white" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-4">
            {/* الصفحات التعريفية */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">الصفحات التعريفية</h3>
              <ul className="space-y-2 text-white/90">
                <li>
                  <Link href="/about" className="transition-colors hover:text-white">
                    من نحن
                  </Link>
                </li>
                <li>
                  <Link href="/about#team" className="transition-colors hover:text-white">
                    فريق العمل
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="transition-colors hover:text-white">
                    قصص نجاح
                  </Link>
                </li>
              </ul>
            </div>

            {/* الصفحات القانونية والسياسات */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">الصفحات القانونية والسياسات</h3>
              <ul className="space-y-2 text-white/90">
                <li>
                  <Link href="/legal/privacy" className="transition-colors hover:text-white">
                    سياسة الخصوصية
                  </Link>
                </li>
                <li>
                  <Link href="/legal/terms" className="transition-colors hover:text-white">
                    شروط وأحكام الاستخدام
                  </Link>
                </li>
                <li>
                  <Link href="/legal/ad-policy" className="transition-colors hover:text-white">
                    سياسة الإعلانات
                  </Link>
                </li>
                <li>
                  <Link href="/legal/refund" className="transition-colors hover:text-white">
                    سياسة استرجاع الأموال
                  </Link>
                </li>
              </ul>
            </div>

            {/* الخدمات والحلول */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">الخدمات والحلول</h3>
              <ul className="space-y-2 text-white/90">
                <li>
                  <Link href="/services/ads-management" className="transition-colors hover:text-white">
                    إدارة الحملات الإعلانية
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/influencer-ads" className="transition-colors hover:text-white">
                    إعلانات المؤثرين
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/roas-cpa-optimization" className="transition-colors hover:text-white">
                    تحسين ROAS
                  </Link>
                </li>
              </ul>
            </div>

            {/* الدعم والتواصل */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">الدعم والتواصل</h3>
              <ul className="space-y-2 text-white/90">
                <li>
                  <Link href="/support/faq" className="transition-colors hover:text-white">
                    الأسئلة الشائعة
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="transition-colors hover:text-white">
                    تواصل معنا
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="transition-colors hover:text-white">
                    المدونة
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Trust badges (Google Partner, Ministry of Commerce) */}
        <FooterBadges />

        <div className="mt-6 border-t border-white/25 pt-6 text-center text-sm text-white/90">
          {"© " + new Date().getFullYear() + " انطلاقة — جميع الحقوق محفوظة."}
        </div>
      </div>
    </footer>
  )
}
