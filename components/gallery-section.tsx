'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Play, X } from 'lucide-react'

const galleryVideos = [
  { src: '/training/training-video-1.mp4', label: 'Training Session', alt: 'Avabodha Bharat training session video' },
]

const galleryImages = [
  { src: '/training/posh-conclave-2024-1.jpeg', label: 'POSH Conclave 2024', alt: 'POSH Conclave 2024 — Jaya Ankur Singhania, POSH Trainer awardee' },
  { src: '/training/posh-conclave-2024-2.jpeg', label: 'POSH Conclave 2024', alt: 'POSH Conclave 2024 — Jaya Ankur Singhania, POSH Trainer awardee' },
  { src: '/training/posh-conclave-2024-3.jpeg', label: 'POSH Conclave 2024', alt: 'POSH Conclave 2024 — Jaya Ankur Singhania, POSH Trainer awardee' },
  { src: '/training/posh-conclave-2025-1.jpeg', label: 'POSH Conclave 2025', alt: 'POSH Conclave 2025 — Jaya Ankur Singhania, POSH Trainer awardee' },
  { src: '/training/posh-conclave-2025-2.jpeg', label: 'POSH Conclave 2025', alt: 'POSH Conclave 2025 — Jaya Ankur Singhania, POSH Trainer awardee' },
  { src: '/training/posh-conclave-2025-3.jpeg', label: 'POSH Conclave 2025', alt: 'POSH Conclave 2025 — Jaya Ankur Singhania, POSH Trainer awardee' },
  { src: '/training/roha-raigad-1.jpeg', label: 'Workshop — Roha, Raigad', alt: 'Avabodha Bharat workshop and training session at Roha, Raigad' },
  { src: '/training/roha-raigad-2.jpeg', label: 'Workshop — Roha, Raigad', alt: 'Avabodha Bharat workshop and training session at Roha, Raigad' },
  { src: '/training/roha-raigad-3.jpeg', label: 'Workshop — Roha, Raigad', alt: 'Avabodha Bharat workshop and training session at Roha, Raigad' },
  { src: '/training/posh-awareness-1.jpeg', label: 'POSH Awareness Session', alt: 'Avabodha Bharat POSH awareness session' },
  { src: '/training/posh-awareness-2.jpeg', label: 'POSH Awareness Session', alt: 'Avabodha Bharat POSH awareness session' },
  { src: '/training/posh-awareness-3.jpeg', label: 'POSH Awareness Session', alt: 'Avabodha Bharat POSH awareness session' },
  { src: '/training/childrens-academy-1.jpeg', label: 'POSH Training — Childrens Academy', alt: 'Avabodha Bharat POSH training session for teachers at Childrens Academy' },
  { src: '/training/childrens-academy-2.jpeg', label: 'POSH Training — Childrens Academy', alt: 'Avabodha Bharat POSH training session for teachers at Childrens Academy' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export function GallerySection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  // Close lightbox on Escape
  useEffect(() => {
    if (!activeVideo) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveVideo(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeVideo])

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold">
              Moments & Milestones
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Memories Revisited
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Proud milestones from our journey — recognition at the National POSH Conclave and
            on-site workshops delivered for clients across India.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Video tiles — auto-looping muted preview, click to play with audio */}
          {galleryVideos.map((video, index) => (
            <motion.button
              key={`video-${index}`}
              type="button"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              onClick={() => setActiveVideo(video.src)}
              aria-label={`Play video: ${video.label}`}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-left"
            >
              <div className="relative w-full aspect-3/4 bg-black">
                <video
                  src={video.src}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-accent shadow-lg transition-transform group-hover:scale-110">
                    <Play className="h-7 w-7 fill-current" />
                  </span>
                </div>
              </div>

              {/* Label badge */}
              <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                {video.label}
              </span>
            </motion.button>
          ))}

          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-full aspect-3/4 bg-muted">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
              </div>

              {/* Label badge */}
              <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                {image.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Video Lightbox — plays with audio */}
      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 p-4 animate-in fade-in duration-300"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-3xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              aria-label="Close"
              className="absolute -right-3 -top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-800 shadow-lg transition-transform hover:scale-110"
            >
              <X className="h-5 w-5" />
            </button>

            <video
              src={activeVideo}
              className="w-full rounded-lg shadow-2xl bg-black max-h-[85vh]"
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </section>
  )
}
