"use client"

import InternalPage from "@/components/internal-page"
import { caseStudies } from "@/lib/case-studies-data"
import { notFound } from "next/navigation"
import { CheckCircle2 } from "lucide-react"

type Props = {
  params: { slug: string }
}

export default function CaseStudyDetailPageClient({ params }: Props) {
  const caseStudy = caseStudies.find((cs) => cs.slug === params.slug)

  if (!caseStudy) {
    notFound()
  }

  const sections = [
    {
      title: "نبذة عن العميل",
      paragraphs: [caseStudy.aboutClient],
      icon: caseStudy.heroIcon,
    },
    {
      title: "التحديات قبل الإعلانات",
      bullets: caseStudy.challenges,
      icon: CheckCircle2, // Using a generic icon for consistency
    },
    {
      title: "الاستراتيجية الإعلانية",
      bullets: caseStudy.strategy,
      icon: CheckCircle2,
    },
    {
      title: "النتائج المحققة",
      bullets: caseStudy.results.map(result => `${result.metric}: ${result.value} - ${result.improvement}`),
      icon: CheckCircle2,
    },
    {
      title: "الخلاصة",
      paragraphs: [caseStudy.conclusion],
      icon: CheckCircle2,
    },
  ]

  return (
    <InternalPage
      title={caseStudy.clientName}
      englishTitle={caseStudy.englishTitle}
      subtitle={caseStudy.subtitle}
      breadcrumbs={[
        { label: "الرئيسية", href: "/" },
        { label: "أمثلة حملات ناجحة", href: "/case-studies" },
        { label: caseStudy.clientName },
      ]}
      heroIcon={caseStudy.heroIcon}
      sections={sections}
      cta={{ label: "ابدأ حملتك الآن", href: "/contact-us" }}
    />
  )
}
