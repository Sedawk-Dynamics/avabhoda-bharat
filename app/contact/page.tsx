import { Navigation } from '@/components/navigation'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { PageHero } from '@/components/page-hero'

export const metadata = {
  title: 'Contact Us | Avabodha Bharat',
  description: 'Get in touch with Avabodha Bharat for training inquiries, compliance support, and business opportunities.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHero
        eyebrow="We're Here to Help"
        title="Get In Touch"
        description="Reach out to us for training inquiries and compliance support"
        bgPosition="bottom-left"
      />
      <ContactSection />
      <Footer />
    </main>
  )
}
