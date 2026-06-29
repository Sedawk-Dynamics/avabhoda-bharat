import { Navigation } from '@/components/navigation'
import { TestimonialsSection } from '@/components/testimonials-section'
import { Footer } from '@/components/footer'
import { PageHero } from '@/components/page-hero'

export const metadata = {
  title: 'Testimonials | Avabodha Bharat',
  description: 'Real stories from clients who have benefited from Avabodha\'s training and compliance programs.',
}

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHero
        eyebrow="What Our Clients Say"
        title="Client Testimonials"
        description="Hear from organizations that have transformed their compliance culture"
        bgPosition="top-right"
      />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
