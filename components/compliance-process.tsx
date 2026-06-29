'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const campaignBadges = [
  { label: 'POSH Act', sublabel: 'Know Your Rights', color: '#6b2d8b' },
  { label: "S'TALK", sublabel: 'Speak Up Safely', color: '#2eaa5e' },
  { label: 'STAND UP', sublabel: "Don't Stand By!", color: '#e87722' },
  { label: 'SUPPORT', sublabel: 'Be an Ally', color: '#e31e24' },
  { label: 'SHAME!', sublabel: "Don't Do It", color: '#6b2d8b' },
  { label: 'IC FIRST', sublabel: 'Trust the Process', color: '#1a6eb5' },
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

export function ComplianceProcess() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-4">
              Worried there may be many more
            </p>

            <h2
              className="font-serif font-bold italic text-foreground mb-5"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.15 }}
            >
              Bubbles to Burst?
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-sm">
              There certainly are. Before you get overwhelmed, let us introduce you to the
              Avabodha Learning Center, so you can take every step at your pace.
              <span className="text-accent underline font-medium">
                {' '}Discover everything PoSH.
              </span>
            </p>

            <RedArrowLink href="/training" label="Customised Training Sessions" />
          </motion.div>

          {/* RIGHT SIDE – BUBBLES WITH THREAD CONNECTION */}
          <div className="relative w-full aspect-square max-w-lg mx-auto">

            {/* SVG THREAD CONNECTIONS */}
            <svg className="absolute inset-0 w-full h-full">
              {campaignBadges.map((_, i) => {
                if (i === campaignBadges.length - 1) return null
                return (
                  <motion.line
                    key={i}
                    x1="20%"
                    y1={`${20 + i * 12}%`}
                    x2="80%"
                    y2={`${30 + i * 10}%`}
                    stroke="#d1d5db"
                    strokeWidth="2"
                    strokeDasharray="6 6"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.1 }}
                  />
                )
              })}
            </svg>

            {/* BUBBLES */}
            <div className="absolute inset-0 grid grid-cols-3 gap-6 place-items-center">
              {campaignBadges.map((badge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.1 }}
                  className="relative"
                >
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 4 + i,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="rounded-full w-32 h-32 flex flex-col items-center justify-center text-center text-white shadow-xl"
                    style={{ backgroundColor: badge.color }}
                  >
                    <span className="font-serif font-bold italic text-sm leading-tight">
                      {badge.label}
                    </span>
                    <span className="text-[10px] opacity-80 mt-1 leading-tight">
                      {badge.sublabel}
                    </span>
                  </motion.div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}