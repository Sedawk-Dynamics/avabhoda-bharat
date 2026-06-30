'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const galleryImages = [
  { src: '/training/posh-conclave-2024-1.jpeg', year: '2024' },
  { src: '/training/posh-conclave-2024-2.jpeg', year: '2024' },
  { src: '/training/posh-conclave-2024-3.jpeg', year: '2024' },
  { src: '/training/posh-conclave-2025-1.jpeg', year: '2025' },
  { src: '/training/posh-conclave-2025-2.jpeg', year: '2025' },
  { src: '/training/posh-conclave-2025-3.jpeg', year: '2025' },
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
              Recognised Excellence
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            POSH Conclave — Memories Revisited
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Proud milestones in our journey — Jaya Ankur Singhania recognised as an awardee for
            POSH Trainer at the National POSH Conclave, two years running.
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
                  alt={`POSH Conclave ${image.year} — Jaya Ankur Singhania, POSH Trainer awardee`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
              </div>

              {/* Year badge */}
              <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                POSH Conclave {image.year}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
