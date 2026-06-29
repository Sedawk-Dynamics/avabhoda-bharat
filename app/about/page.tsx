import { Navigation } from '@/components/navigation'
import { AboutSection } from '@/components/about-section'
import { TeamSection } from '@/components/team-section'
import { Footer } from '@/components/footer'
import { PageHero } from '@/components/page-hero'

export const metadata = {
  title: 'About Us | Avabodha Bharat',
  description: 'Learn about Avabodha Bharat, our mission to impact one million lives through POSH and POCSO compliance training.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHero
        eyebrow="Our Story"
        title="About Avabodha"
        description="Building safer workplaces and protecting children through comprehensive compliance training"
        bgPosition="top-left"
      />
      <AboutSection />
      <TeamSection />
      <Footer />
    </main>
  )
}
