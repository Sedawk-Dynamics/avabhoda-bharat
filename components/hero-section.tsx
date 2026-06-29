'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// ── Animated count-up hook ──────────────────────────────────────────────────
function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = 0
    const step = Math.ceil(target / (duration * 60))
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [active, target, duration])
  return count
}

// Individual animated bubble
function Bubble({ size, x, y, duration, delay, opacity }: {
  size: number; x: string; y: string; duration: number; delay: number; opacity: number
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        opacity,
        background: `radial-gradient(circle at 35% 35%,
          rgba(255,255,255,0.55) 0%,
          rgba(160,220,255,0.25) 20%,
          rgba(100,180,255,0.12) 40%,
          rgba(180,100,255,0.10) 60%,
          rgba(255,100,180,0.08) 75%,
          rgba(255,255,255,0.04) 85%,
          transparent 100%)`,
        boxShadow: `inset -${size * 0.08}px -${size * 0.08}px ${size * 0.2}px rgba(255,255,255,0.15),
                    inset ${size * 0.04}px ${size * 0.04}px ${size * 0.15}px rgba(100,200,255,0.2),
                    0 0 ${size * 0.4}px rgba(100,180,255,0.08)`,
        border: '1px solid rgba(255,255,255,0.18)',
      }}
      initial={{ y: 0, scale: 0.7, opacity: 0 }}
      animate={{
        y: [0, -18, 8, -12, 0],
        scale: [0.7, 1, 0.97, 1.02, 1],
        opacity: [0, opacity, opacity * 0.9, opacity, opacity * 0.95],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
      }}
    >
      {/* Specular highlight */}
      <div
        className="absolute rounded-full bg-white/60"
        style={{ width: size * 0.18, height: size * 0.1, top: '18%', left: '22%', filter: 'blur(1px)', transform: 'rotate(-30deg)' }}
      />
      <div
        className="absolute rounded-full bg-white/30"
        style={{ width: size * 0.08, height: size * 0.06, top: '28%', left: '32%', filter: 'blur(0.5px)' }}
      />
    </motion.div>
  )
}

// Special labeled bubbles for hero training types
function TrainingBubble({ 
  size, x, y, duration, delay, opacity, label1, label2, labelSmall 
}: {
  size: number; x: string; y: string; duration: number; delay: number; opacity: number;
  label1: string; label2: string; labelSmall: string;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none flex flex-col items-center justify-center"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        opacity,
        background: `radial-gradient(circle at 35% 35%,
          rgba(255,255,255,0.55) 0%,
          rgba(160,220,255,0.25) 20%,
          rgba(100,180,255,0.12) 40%,
          rgba(180,100,255,0.10) 60%,
          rgba(255,100,180,0.08) 75%,
          rgba(255,255,255,0.04) 85%,
          transparent 100%)`,
        boxShadow: `inset -${size * 0.08}px -${size * 0.08}px ${size * 0.2}px rgba(255,255,255,0.15),
                    inset ${size * 0.04}px ${size * 0.04}px ${size * 0.15}px rgba(100,200,255,0.2),
                    0 0 ${size * 0.4}px rgba(100,180,255,0.08)`,
        border: '1px solid rgba(255,255,255,0.22)',
      }}
      initial={{ y: 0, scale: 0.7, opacity: 0 }}
      animate={{
        y: [0, -18, 8, -12, 0],
        scale: [0.7, 1, 0.97, 1.02, 1],
        opacity: [0, opacity, opacity * 0.9, opacity, opacity * 0.95],
      }}
      transition={{ duration, delay, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
    >
      {/* Specular highlight */}
      <div className="absolute rounded-full bg-white/60" style={{ width: size * 0.18, height: size * 0.1, top: '18%', left: '22%', filter: 'blur(1px)', transform: 'rotate(-30deg)' }} />
      <div className="absolute rounded-full bg-white/30" style={{ width: size * 0.08, height: size * 0.06, top: '28%', left: '32%', filter: 'blur(0.5px)' }} />
      {/* Text label inside bubble */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <span className="text-white/90 font-serif font-bold italic leading-tight text-center" style={{ fontSize: size * 0.085 }}>
          {label1}
        </span>
        {label2 && (
          <span className="text-white/90 font-serif font-bold italic leading-tight text-center" style={{ fontSize: size * 0.085 }}>
            {label2}
          </span>
        )}
        <div className="w-6 h-px bg-accent/80 my-1" />
        <span className="text-white/70 font-sans uppercase tracking-widest text-center leading-tight" style={{ fontSize: size * 0.042 }}>
          {labelSmall}
        </span>
      </div>
    </motion.div>
  )
}



function StatCounter({ value, suffix, label, delay, active }: {
  value: number; suffix: string; label: string; delay: number; active: boolean
}) {
  const count = useCountUp(value, 1.8, active)
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
    >
      <div className="text-3xl md:text-4xl font-serif font-bold text-accent tracking-tight">
        {count}{suffix}
      </div>
      <div className="text-xs text-white/50 uppercase tracking-widest mt-1 font-sans">{label}</div>
    </motion.div>
  )
}


const BUBBLES = [
  { size: 130, x: '70%', y: '5%',  duration: 7,  delay: 1.2, opacity: 0.70 },
  { size: 90, x: '82%', y: '55%', duration: 8, delay: 0.5, opacity: 0.65 },
  { size: 60, x: '63%', y: '68%', duration: 6, delay: 2, opacity: 0.60 },
  { size: 40, x: '55%', y: '78%', duration: 5, delay: 3, opacity: 0.55 },
  { size: 180, x: '74%', y: '28%', duration: 11, delay: 0.8, opacity: 0.75 },
  { size: 50, x: '88%', y: '20%', duration: 6, delay: 1.5, opacity: 0.50 },
  { size: 35, x: '92%', y: '72%', duration: 7, delay: 4, opacity: 0.45 },
  { size: 110, x: '59%', y: '42%', duration: 10, delay: 2.5, opacity: 0.68 },
  { size: 25, x: '76%', y: '82%', duration: 5, delay: 1, opacity: 0.40 },
]

export function HeroSection() {
  const statsRef = useRef(null)
  const isStatsInView = useInView(statsRef, { once: true, margin: '-40px' })
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0d1b2a]">
      {/* Dark navy gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b2a] via-[#0f2540] to-[#0a1628]" />

      {/* Animated Bubbles — right side */}
      <div className="absolute right-0 top-0 h-full w-[55%] hidden lg:block">
        {/* Labeled training bubbles */}
        <TrainingBubble size={200} x="50%" y="8%"   duration={8}  delay={0}    opacity={0.85} label1="POSH" label2="" labelSmall="Training" />
        <TrainingBubble size={160} x="72%" y="25%"  duration={9}  delay={0.4}  opacity={0.78} label1="POCSO" label2="" labelSmall="Training" />
        <TrainingBubble size={140} x="65%" y="58%"  duration={7}  delay={0.8}  opacity={0.72} label1="LEGAL" label2="" labelSmall="Training" />
        {/* Regular smaller bubbles */}
        {BUBBLES.map((b, i) => (
          <Bubble key={i} {...b} />
        ))}
        {/* Soft left-edge fade so bubbles blend into text side */}
        <div className="absolute inset-y-0 left-0 w-56 bg-gradient-to-r from-[#0d1b2a] to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-20 w-full">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-accent text-sm font-semibold uppercase tracking-widest mb-6 font-sans"
          >
            POSH & POCSO Compliance Training
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-serif font-bold italic text-white leading-tight text-balance mb-6"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', lineHeight: 1.1 }}
          >
            {"Let's Burst Some Bubbles"}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-lg font-sans"
          >
            To see what makes a workplace safe & inclusive. Expert POSH compliance advisory and training for organizations across India.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-white font-semibold text-sm px-7 py-4 hover:bg-accent/90 transition-colors tracking-wide"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-medium text-sm px-7 py-4 hover:border-white/60 transition-colors tracking-wide"
            >
              Explore Services
            </Link>
          </motion.div>

          {/* Stats row — count-up on enter */}
          <div ref={statsRef} className="flex flex-wrap gap-10 border-t border-white/10 pt-10">
            <StatCounter value={50}  suffix="+" label="Organizations Trained"  delay={0}    active={isStatsInView} />
            <StatCounter value={100} suffix="+" label="IC Members Certified"   delay={0.15} active={isStatsInView} />
            <StatCounter value={5}   suffix=""  label="Years Experience"       delay={0.3}  active={isStatsInView} />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-white/30 uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  )
}
