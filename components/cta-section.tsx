'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    setCount(0)
    let start = 0
    const step = Math.max(1, Math.ceil(target / (duration * 60)))
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(start)
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [active, target, duration])
  return count
}

function BubbleStat({ value, suffix, label, delay, active }: {
  value: number; suffix: string; label: string; delay: number; active: boolean
}) {
  const count = useCountUp(value, 1.8, active)
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={active ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, duration: 0.6, ease: 'backOut' }}
      className="flex flex-col items-center justify-center w-28 h-28 md:w-36 md:h-36 rounded-full border-2 border-accent/40 bg-white/5 backdrop-blur-sm hover:border-accent hover:bg-white/10 transition-all duration-300 cursor-default"
    >
      <div className="text-2xl md:text-3xl font-serif font-bold text-accent leading-none">
        {count}{suffix}
      </div>
      <div className="text-[9px] md:text-[10px] text-white/50 uppercase tracking-widest mt-1.5 text-center px-2 leading-tight">
        {label}
      </div>
    </motion.div>
  )
}

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

export function CTASection() {
  const statsRef = useRef(null)
  const isInView = useInView(statsRef, { once: true, margin: '-60px' })

  return (
    <section className="relative bg-foreground py-24 md:py-32 overflow-hidden">
      {/* Red decorative circle */}
      <div className="absolute top-12 right-12 w-40 h-40 rounded-full border-[3px] border-accent opacity-30 hidden md:block" />
      <div className="absolute bottom-12 left-12 w-24 h-24 rounded-full border-[3px] border-accent opacity-20 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-accent text-xs font-semibold uppercase tracking-widest mb-5"
          >
            Ready to Transform Your Organisation?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-serif font-bold italic text-white mb-8 text-balance"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.1 }}
          >
            Partner With Us to Build a Safer Workplace
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white/60 text-base leading-relaxed mb-10 max-w-xl"
          >
            From policy drafting to IC training, complaint handling to compliance reporting — we provide end-to-end support so your organisation can focus on what matters most.
          </motion.p>

          {/* Animated bubble stats row */}
          <div ref={statsRef} className="flex flex-wrap gap-6 mb-12">
            <BubbleStat value={50}  suffix="+" label="Organisations Served"   delay={0}    active={isInView} />
            <BubbleStat value={100} suffix="+" label="IC Members Certified"   delay={0.15} active={isInView} />
            <BubbleStat value={5}   suffix=""  label="Years Experience"       delay={0.3}  active={isInView} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-white font-semibold text-sm px-8 py-4 hover:bg-[#0d1b2a] hover:border hover:border-white/20 transition-colors tracking-wide"
            >
              Start Your Journey <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-medium text-sm px-8 py-4 hover:border-white/50 hover:bg-white/5 transition-colors tracking-wide"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
