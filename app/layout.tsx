import type React from "react"
import type { Metadata } from "next"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Toaster } from "react-hot-toast"
import "./globals.css"

export const metadata: Metadata = {
  title: "انطلاقة - منصة الإعلانات الذكية الرائدة في السعودية | إدارة الحملات الإعلانية",
  description:
    "منصة إعلانية متكاملة لإطلاق حملاتك الإعلانية والوصول إلى جمهورك بدقة وفعالية. خدمات إدارة الحملات الإعلانية، تحسين ROAS، واستهداف العملاء في السعودية والخليج",
  keywords:
    "إعلانات, تسويق رقمي, حملات إعلانية, السعودية, إدارة الحملات, ROAS, استهداف العملاء, منصة إعلانية, تسويق إلكتروني, إعلانات جوجل, إعلانات فيسبوك, إعلانات انستغرام",
  authors: [{ name: "انطلاقة", url: "https://intilaqa.com" }],
  creator: "انطلاقة",
  publisher: "انطلاقة",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "انطلاقة - منصة الإعلانات الذكية الرائدة في السعودية",
    description: "منصة إعلانية متكاملة لإطلاق حملاتك الإعلانية والوصول إلى جمهورك بدقة وفعالية",
    url: "https://intilaqa.com",
    siteName: "انطلاقة",
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "انطلاقة - منصة الإعلانات الذكية",
    description: "منصة إعلانية متكاملة لإطلاق حملاتك الإعلانية والوصول إلى جمهورك بدقة وفعالية",
  },
  alternates: {
    canonical: "https://intilaqa.com",
    languages: {
      "ar-SA": "https://intilaqa.com",
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta name="theme-color" content="#14b8a6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.whatsapp.com" />
      </head>
      <body className="antialiased">
        {children}
        <WhatsAppFloat />
        <Toaster position="top-center" />
      </body>
    </html>
  )
}
