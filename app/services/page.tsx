import { Navigation } from '@/components/navigation'
import { ServicesSection } from '@/components/services-section'
import { Footer } from '@/components/footer'
import { PageHero } from '@/components/page-hero'

export const metadata = {
  title: 'Our Services | Avabodha Bharat',
  description: 'Comprehensive compliance solutions including POSH training, POCSO awareness, IC member training, and ESG advisory.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHero
        eyebrow="What We Offer"
        title="Our Services"
        description="Comprehensive compliance solutions tailored to your organizational needs"
        bgPosition="top-right"
      />
      <ServicesSection />
      <Footer />
    </main>
  )
}
