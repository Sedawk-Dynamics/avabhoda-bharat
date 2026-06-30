import { Navigation } from '@/components/navigation'
import { PageHero } from '@/components/page-hero'
import { GallerySection } from '@/components/gallery-section'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Gallery | Avabodha Bharat',
  description: 'Memories revisited — moments from the National POSH Conclave and our training journey, including recognition for Jaya Ankur Singhania as a POSH Trainer awardee.',
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHero
        eyebrow="Moments & Milestones"
        title="Gallery"
        description="Memories revisited — highlights from the National POSH Conclave and our training journey"
        bgPosition="bottom-left"
      />
      <GallerySection />
      <Footer />
    </main>
  )
}
