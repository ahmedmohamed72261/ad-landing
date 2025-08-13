"use client"

import { lazy, Suspense } from "react"

const CampaignPerformanceSection = lazy(() => import("@/components/campaign-performance-section"))
const GCCSuccessSection = lazy(() => import("@/components/gcc-success-section"))
const LaunchCompact = lazy(() => import("@/components/launch-compact"))
const TestimonialsSection = lazy(() => import("@/components/testimonials-section"))
const SocialMediaGrowthSection = lazy(() => import("@/components/social-media-growth-section"))

const LoadingFallback = () => (
  <div className="min-h-[400px] w-full flex items-center justify-center">
    <div className="text-white">جاري التحميل...</div>
  </div>
)

export default function HomeSections() {
  return (
    <>
      <Suspense fallback={<LoadingFallback />}>
        <CampaignPerformanceSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <GCCSuccessSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <LaunchCompact />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <TestimonialsSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <SocialMediaGrowthSection />
      </Suspense>
    </>
  )
}
