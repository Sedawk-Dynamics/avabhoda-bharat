'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

function RedArrowLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm font-semibold text-accent border-b border-accent pb-0.5 transition-all duration-200 group hover:text-[#0d1b2a] hover:border-[#0d1b2a] hover:gap-3 hover:scale-105 origin-left"
    >
      {label}
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent text-white flex-shrink-0 group-hover:bg-[#0d1b2a] group-hover:w-8 group-hover:h-8 transition-all duration-200">
        <ArrowRight className="w-3 h-3" />
      </span>
    </Link>
  )
}

export function TrainingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="relative bg-white overflow-hidden">

      {/* ── Block 1: Awareness ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-12">
        <div className="grid md:grid-cols-2 gap-10 items-center min-h-[320px]">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">It Begins With</p>
            <h2
              className="font-serif font-bold italic text-foreground mb-5 text-balance"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: 1.15 }}
            >
              Awareness!
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-sm">
              The first and most crucial step towards maintaining a safe &amp; inclusive workplace
              for one &amp; all is awareness. Sensitising every individual goes a long way. One size
              never fits all — that is why we offer mandatory training sessions tailored to your
              organisation&apos;s needs.
            </p>
            <p className="text-sm text-gray-400 mb-3 uppercase tracking-wide">Check out our</p>
            <RedArrowLink href="/training" label="Customised Training Sessions" />
          </motion.div>

          {/* Right: floating circle with B&W cartoon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex justify-center md:justify-end items-center"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.06 }}
              className="relative w-56 h-56 md:w-72 md:h-72 cursor-pointer"
            >
              <div className="w-full h-full rounded-full border-[3px] border-accent overflow-hidden shadow-lg">
                <img
                  src="/images/awareness-cartoon.jpg"
                  alt="Black and white cartoon illustration of a professional woman speaking at a podium"
                  className="w-full h-full object-cover object-top grayscale"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Block 2: In Case of Complaints ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">But What Do You Do</p>
            <h2
              className="font-serif font-bold italic text-foreground mb-5 text-balance"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', lineHeight: 1.15 }}
            >
              In Case Of Complaints?
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4 max-w-sm">
              Worried about{' '}
              <span className="text-accent underline">resolution</span>,{' '}
              <span className="text-accent underline">redressal</span>,{' '}
              <span className="text-accent underline">documentation</span>{' '}
              &amp; unwavering support?
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-sm">
              {"Avabodha's designated External Member on your Internal Committee is equipped to provide hand-holding support in conducting thorough, unbiased inquiries."}
            </p>
            <p className="text-sm text-gray-400 mb-3 uppercase tracking-wide">Learn more about the</p>
            <RedArrowLink href="/services" label="External Member's Roles" />
          </motion.div>

          {/* Right: Large image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center items-center"
          >
            <div className="w-full max-w-md">
              <img
                src="/images/professional-team.png"
                alt="Professional female lawyer representing POCSO and POSH compliance in a courtroom setting"
                className="w-full h-auto object-contain drop-shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  )
}
