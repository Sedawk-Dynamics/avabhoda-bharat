import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { TrainingSection } from '@/components/training-section'
import { ComplianceProcess } from '@/components/compliance-process'
import { TestimonialsSection } from '@/components/testimonials-section'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'
import { PromoPopup } from '@/components/promo-popup'

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <TrainingSection />
      <ComplianceProcess />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <Toaster />
      <PromoPopup />
    </main>
  )
}

