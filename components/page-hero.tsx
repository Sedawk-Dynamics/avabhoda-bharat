'use client'

import { motion } from 'framer-motion'

interface PageHeroProps {
  eyebrow: string
  title: string
  description: string
  bgPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-1/2-right'
}

export function PageHero({ eyebrow, title, description, bgPosition = 'top-right' }: PageHeroProps) {
  const getBgStyle = () => {
    const baseClasses = 'absolute w-96 h-96 rounded-full bg-accent/10 blur-3xl'
    switch (bgPosition) {
      case 'top-left':
        return `${baseClasses} top-0 left-0`
      case 'top-right':
        return `${baseClasses} top-0 right-0`
      case 'bottom-left':
        return `${baseClasses} bottom-0 left-0`
      case 'bottom-right':
        return `${baseClasses} bottom-0 right-0`
      case 'top-1/2-right':
        return `${baseClasses} top-1/2 right-0`
      default:
        return `${baseClasses} top-0 right-0`
    }
  }

  return (
    <section className="relative bg-[#0d1b2a] overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b2a] via-[#0f2540] to-[#0a1628]" />
      <div className={getBgStyle()} />
      <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-white">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-accent text-xs font-semibold uppercase tracking-widest mb-4"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-serif font-bold italic text-balance mb-6"
          style={{ fontSize: 'clamp(2.6rem, 6vw, 4.5rem)', lineHeight: 1.1 }}
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-white/70 text-base md:text-xl max-w-2xl leading-relaxed"
        >
          {description}
        </motion.p>
      </div>
    </section>
  )
}
