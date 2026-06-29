'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Anushka Khopkar',
    designation: 'HR Manager',
    organization: 'Trade & Technology Exposition Co. (India) Pvt. Ltd.',
    content:
      'I have been associated with Avabodha for the last two years. They have been very professional, and Jaya Ma\'am is cooperative and helpful. It\'s great to be associated with them.',
  },
  {
    name: 'Srishti Modi',
    designation: 'Director',
    organization: 'LESSSGO MEDIA PVT LTD',
    content:
      'Our company\'s average age is 25 so they did a very practical, easy and interactive POSH training session for both the internal committee and the team members. We love that the Avabodha team is proactive instead of reactive.',
  },
  {
    name: 'Corporate Client',
    designation: 'Head of Compliance',
    organization: 'Leading MNC',
    content:
      'Avabodha\'s approach to POSH training is refreshingly practical. The bilingual format and interactive sessions made it easy for our diverse workforce to understand their rights and responsibilities.',
  },
]

function RedArrowLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm font-semibold text-accent border-b border-accent pb-0.5 hover:opacity-70 transition-opacity group"
    >
      {label}
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent text-white flex-shrink-0 group-hover:scale-110 transition-transform">
        <ArrowRight className="w-3 h-3" />
      </span>
    </Link>
  )
}

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* ── About / Mission block ── */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-28">
          {/* Left: large red outlined circle with image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Outer red circle */}
              <div className="absolute inset-0 rounded-full border-[4px] border-accent" />
              {/* Inner photo */}
              <div className="absolute inset-6 rounded-full overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_3539.JPG-d78OWR2nDZSbNJh5tf7wZxlUWwF2M7.jpeg"
                  alt="Avabodha training session"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: mission text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 max-w-md">
              At Avabodha, we strive to create{' '}
              <span className="text-accent underline">safe</span> and{' '}
              <span className="text-accent underline">inclusive</span> workplaces. Not just because the law mandates it. But because every employee deserves to work at a place that makes them feel safe, secure, heard, and respected.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-md">
              Every member of team Avabodha is dedicated to helping organisations understand not just the word, but the spirit, that results in the effective implementation of the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013.
            </p>
            <div>
              <p className="text-sm text-gray-400 mb-3 uppercase tracking-wide">Know more</p>
              <RedArrowLink href="/about" label="About Avabodha" />
            </div>
          </motion.div>
        </div>

        {/* ── Testimonials ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">What Our Clients Say</p>
          <h2
            className="font-serif font-bold italic text-foreground text-balance"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.15 }}
          >
            Trusted by Leading Organisations
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              className="px-0 md:px-8 first:pl-0 last:pr-0 py-8 md:py-0"
            >
              <p className="text-gray-600 text-base leading-relaxed italic mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="pt-4 border-t border-gray-100">
                <div className="font-serif font-bold text-foreground text-base">{testimonial.name}</div>
                <div className="text-accent text-sm font-semibold mt-0.5">{testimonial.designation}</div>
                <div className="text-gray-400 text-sm mt-0.5">{testimonial.organization}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
