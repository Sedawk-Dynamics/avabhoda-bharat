'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { AnimatedCounter } from './animated-counter'

const galleryImages = [
  {
    id: 1,
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-19%20at%2015.10.33-UsXzQVGMlGeHXepUIjKwTsLxxlvWKM.jpeg',
    alt: 'Interactive training session with engaged audience',
    category: 'Corporate Training',
  },
  {
    id: 2,
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250809-WA0034-4vGah5kdZpGCk4RdJ9nIkwJLB5Ysae.jpg',
    alt: 'Large-scale industrial safety training program',
    category: 'Safety Training',
  },
  {
    id: 3,
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_3561.JPG-PgEXbXBZxFCdJFH1USA4qG4zcx6Ara.jpeg',
    alt: 'Government personnel attending compliance training',
    category: 'Government Training',
  },
  {
    id: 4,
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_3539.JPG-d78OWR2nDZSbNJh5tf7wZxlUWwF2M7.jpeg',
    alt: 'Large-scale training session with uniformed personnel',
    category: 'Institutional Training',
  },
  {
    id: 5,
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_3530.JPG-B94Uplbx7DzNMxkr1Qf0oDVM6SFs8D.jpeg',
    alt: 'Training coordinators recognizing session completion',
    category: 'Recognition Moment',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export function TrainingGallery() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.8])

  return (
    <section
      ref={containerRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-muted/30"
    >
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
              Training in Action
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Real Impact, Real Change
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Witness our training programs transforming workplaces and institutions across India. From corporate offices to government agencies, we&apos;re making a difference.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12"
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Fixed Aspect Ratio Box */}
              <div className="relative w-full aspect-[4/5] bg-muted">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 20vw"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <div>
                  <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full mb-2">
                    {image.category}
                  </span>
                  <p className="text-white text-sm font-medium">
                    {image.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section - Animated Running Stats */}
        <motion.div
          style={{ opacity }}
          className="mt-16 pt-12 border-t border-border"
        >
          {/* Desktop: Grid layout */}
          <div className="hidden md:grid grid-cols-3 gap-8">
            {[
              { value: 500, label: 'Training Sessions Conducted' },
              { value: 50000, label: 'Individuals Trained' },
              { value: 100, label: 'Organizations Impacted' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <AnimatedCounter
                  targetValue={stat.value}
                  duration={3}
                  suffix="+"
                />
                <p className="text-muted-foreground text-base mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Mobile: Horizontal scrolling carousel */}
          <div className="md:hidden overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: ['0%', '-100%'] }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'linear'
              }}
            >
              {[
                { value: 500, label: 'Training Sessions Conducted' },
                { value: 50000, label: 'Individuals Trained' },
                { value: 100, label: 'Organizations Impacted' },
                { value: 500, label: 'Training Sessions Conducted' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full text-center px-6"
                >
                  <AnimatedCounter
                    targetValue={stat.value}
                    duration={3}
                    suffix="+"
                  />
                  <p className="text-muted-foreground text-base mt-2">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6 text-lg">
            Ready to transform your organization?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule Your Training
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
