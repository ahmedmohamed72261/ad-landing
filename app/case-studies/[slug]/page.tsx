import { caseStudies } from "@/lib/case-studies-data"
import CaseStudyClient from "./case-study-client"

type Props = {
  params: { slug: string }
}

export default function CaseStudyDetailPage({ params }: Props) {
  return <CaseStudyClient params={params} />
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }))
}
