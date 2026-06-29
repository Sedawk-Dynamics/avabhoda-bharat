import { Navigation } from '@/components/navigation'
import { BlogSection } from '@/components/blog-section'
import { Footer } from '@/components/footer'
import { PageHero } from '@/components/page-hero'

export const metadata = {
  title: 'Resources | Avabodha Bharat',
  description: 'Blog articles, case studies, and resources about POSH compliance, workplace safety, and child protection.',
}

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHero
        eyebrow="Learn & Grow"
        title="Resources & Blog"
        description="Insights, articles, and case studies on compliance and workplace safety"
        bgPosition="top-1/2-right"
      />
      <BlogSection />
      <Footer />
    </main>
  )
}
