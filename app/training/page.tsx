'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { TrainingGallery } from '@/components/training-gallery'
import { Footer } from '@/components/footer'
import {
  Shield,
  Users,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  Scale,
  Heart,
  Building2,
  GraduationCap,
  Briefcase,
  AlertCircle,
} from 'lucide-react'

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

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const count = useCountUp(value, 1.6, inView)
  return (
    <div ref={ref}>
      <div className="text-3xl font-serif font-bold text-white">{count}{suffix}</div>
      <div className="text-xs text-white/60 uppercase tracking-widest mt-1">{label}</div>
    </div>
  )
}

const benefits = [
  { icon: Shield, title: 'Legal Compliance', desc: 'Stay fully compliant with POSH Act 2013 and POCSO Act 2012 mandates.' },
  { icon: Users, title: 'Safe Workplace Culture', desc: 'Build a culture of respect, safety and zero tolerance for harassment.' },
  { icon: Scale, title: 'Reduced Legal Risk', desc: 'Minimize organizational liability with proper documented processes.' },
  { icon: Heart, title: 'Employee Well-being', desc: 'Boost morale, trust and retention through a genuinely safe environment.' },
  { icon: GraduationCap, title: 'Expert-led Sessions', desc: 'Trained by certified legal advisors and POSH specialists.' },
  { icon: BookOpen, title: 'Bilingual Training', desc: 'Sessions conducted in Hindi and English for wider accessibility.' },
]

const audiences = [
  { icon: Briefcase, label: 'Corporate Employees & Managers' },
  { icon: Building2, label: 'HR & Compliance Teams' },
  { icon: Users, label: 'Internal Committee Members' },
  { icon: GraduationCap, label: 'Educational Institutions' },
  { icon: Shield, label: 'Government Organisations' },
  { icon: AlertCircle, label: 'NGOs & Social Enterprises' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6, ease: 'easeOut' } }),
}

export default function TrainingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* ── Hero Banner ── */}
      <section className="relative bg-[#0d1b2a] overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b2a] via-[#0f2540] to-[#0a1628]" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-white">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-accent text-xs font-semibold uppercase tracking-widest mb-4"
          >
            POSH &amp; POCSO Compliance Training
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-serif font-bold italic text-balance mb-6"
            style={{ fontSize: 'clamp(2.6rem, 6vw, 4.5rem)', lineHeight: 1.1 }}
          >
            Training Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white/70 text-base md:text-xl max-w-2xl leading-relaxed"
          >
            Interactive, bilingual training modules for POSH, POCSO awareness and IC member training — designed for lasting cultural impact across all industries.
          </motion.p>
        </div>
      </section>

      {/* ── Training Overview — Two Column ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-none shadow-xl aspect-[4/3]">
              <img
                src="/images/training-hero.jpg"
                alt="Professional workplace compliance training session"
                className="w-full h-full object-cover"
              />
              {/* Red accent border detail */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-accent" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-accent" />
            </div>
            {/* Floating stat badge */}
            <div className="absolute -bottom-6 -right-4 bg-accent text-white px-6 py-4 shadow-lg">
              <AnimatedStat value={50} suffix="+" label="Organisations Served" />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">Training Overview</p>
            <h2
              className="font-serif font-bold italic text-foreground mb-6 text-balance"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', lineHeight: 1.15 }}
            >
              Building Safer Workplaces, One Session at a Time
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              At Avabodha, we deliver customised compliance training that goes beyond legal obligations. Our sessions sensitise employees at all levels — creating a workplace where every individual feels safe, respected and heard.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              We combine legal expertise with engaging, interactive delivery — using real scenarios, group discussions and bilingual content to ensure maximum impact and retention.
            </p>
            <div className="space-y-3">
              {['Customised to your industry & workforce size', 'Available in Hindi & English', 'Conducted by certified POSH & POCSO experts', 'Online, offline and hybrid formats'].map((pt, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-base">{pt}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── What is POSH & POCSO ── */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">What We Cover</p>
            <h2
              className="font-serif font-bold italic text-foreground text-balance"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', lineHeight: 1.15 }}
            >
              POSH &amp; POCSO — Know the Law
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* POSH */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="border-l-4 border-accent pl-8"
            >
              <h3 className="font-serif font-bold text-foreground text-2xl mb-4">POSH Act, 2013</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                The Prevention, Prohibition and Redressal (POSH) Act mandates that every organisation with 10 or more employees constitutes an Internal Committee (IC) and conducts regular awareness training for all staff.
              </p>
              <ul className="space-y-3">
                {['Understanding sexual harassment at workplace', 'Rights and responsibilities of employees', 'IC constitution and functions', 'Complaint filing and redressal process', 'Annual compliance reporting'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* POCSO */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="border-l-4 border-gray-300 pl-8"
            >
              <h3 className="font-serif font-bold text-foreground text-2xl mb-4">POCSO Act, 2012</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                The Protection of Children from Sexual Offences (POCSO) Act is mandatory for schools, NGOs and any institution working with children. Our training equips staff to recognise, report and prevent abuse.
              </p>
              <ul className="space-y-3">
                {['Child safeguarding principles', 'Recognising signs of abuse', 'Mandatory reporting obligations', 'Creating child-safe environments', 'Staff code of conduct'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Key Benefits ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Why Train With Us</p>
            <h2
              className="font-serif font-bold italic text-foreground text-balance"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', lineHeight: 1.15 }}
            >
              Key Benefits
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group border border-gray-200 p-8 hover:border-accent transition-colors duration-300"
              >
                <b.icon className="w-6 h-6 text-accent mb-5" />
                <h3 className="font-serif font-bold text-foreground text-xl mb-2">{b.title}</h3>
                <p className="text-gray-500 text-base leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who Should Attend ── */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Target Audience</p>
              <h2
                className="font-serif font-bold italic text-foreground mb-6 text-balance"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', lineHeight: 1.15 }}
              >
                Who Should Attend?
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Our training is designed for anyone in a professional or institutional setting. Whether you are an employee, manager, HR professional or educator — our sessions are tailored to your specific role and responsibilities.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {audiences.map((a, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-center gap-3 border border-gray-200 px-5 py-4 hover:border-accent hover:bg-accent/5 transition-colors duration-200"
                >
                  <a.icon className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-base font-medium text-gray-800">{a.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── POSH Conclave 2024 — Where It Started ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 max-w-3xl"
          >
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Where It All Started</p>
            <h2
              className="font-serif font-bold italic text-foreground mb-6 text-balance"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', lineHeight: 1.15 }}
            >
              POSH Conclave 2024 — Memories Revisited
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              And it all started in 2024. A proud milestone in our journey —{' '}
              <span className="font-semibold text-foreground">Jaya Ankur Singhania</span> recognised as an
              awardee for <span className="font-semibold text-foreground">POSH Trainer</span> at the
              POSH Conclave 2024.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/training/posh-conclave-2024-1.jpeg',
              '/training/posh-conclave-2024-2.jpeg',
              '/training/posh-conclave-2024-3.jpeg',
            ].map((src, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative overflow-hidden shadow-md aspect-3/4"
              >
                <img
                  src={src}
                  alt={`POSH Conclave 2024 — Jaya Ankur Singhania, POSH Trainer awardee (${i + 1})`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 w-10 h-10 border-t-4 border-l-4 border-accent" />
                <div className="absolute bottom-3 right-3 w-10 h-10 border-b-4 border-r-4 border-accent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POSH Conclave 2025 — Memories Revisited ── */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 max-w-3xl"
          >
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">The Journey Continues</p>
            <h2
              className="font-serif font-bold italic text-foreground mb-6 text-balance"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', lineHeight: 1.15 }}
            >
              POSH Conclave 2025 — Memories Revisited
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Another proud milestone in 2025 —{' '}
              <span className="font-semibold text-foreground">Jaya Ankur Singhania</span> once again recognised as an
              awardee for <span className="font-semibold text-foreground">POSH Trainer</span> at the
              POSH Conclave 2025.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/training/posh-conclave-2025-1.jpeg',
              '/training/posh-conclave-2025-2.jpeg',
              '/training/posh-conclave-2025-3.jpeg',
            ].map((src, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative overflow-hidden shadow-md aspect-3/4"
              >
                <img
                  src={src}
                  alt={`POSH Conclave 2025 — Jaya Ankur Singhania, POSH Trainer awardee (${i + 1})`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 w-10 h-10 border-t-4 border-l-4 border-accent" />
                <div className="absolute bottom-3 right-3 w-10 h-10 border-b-4 border-r-4 border-accent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Workshop — Roha, Raigad ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 max-w-3xl"
          >
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">On-Site Workshop</p>
            <h2
              className="font-serif font-bold italic text-foreground mb-6 text-balance"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', lineHeight: 1.15 }}
            >
              Workshop &amp; Training — Roha, Raigad
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Another successful workshop and training session conducted for our client&apos;s factory
              location at <span className="font-semibold text-foreground">Roha, Raigad</span>. With more
              workshops in the pipeline, Avabodha Bharat continues its commitment to building safer,
              more aware workplaces across India.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/training/roha-raigad-1.jpeg',
              '/training/roha-raigad-2.jpeg',
              '/training/roha-raigad-3.jpeg',
            ].map((src, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative overflow-hidden shadow-md aspect-4/3"
              >
                <img
                  src={src}
                  alt={`Avabodha Bharat workshop and training session at Roha, Raigad (${i + 1})`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 w-10 h-10 border-t-4 border-l-4 border-accent" />
                <div className="absolute bottom-3 right-3 w-10 h-10 border-b-4 border-r-4 border-accent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POSH Awareness Session ── */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 max-w-3xl"
          >
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Awareness in Action</p>
            <h2
              className="font-serif font-bold italic text-foreground mb-6 text-balance"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', lineHeight: 1.15 }}
            >
              POSH Awareness Session
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Another workshop successfully delivered — Avabodha Bharat proudly contributed to this
              <span className="font-semibold text-foreground"> POSH awareness session</span>, spreading
              knowledge and building a culture of safety and respect at the workplace.
            </p>
          </motion.div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '/training/posh-awareness-1.jpeg',
              '/training/posh-awareness-2.jpeg',
              // '/training/posh-awareness-3.jpeg',
            ].map((src, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative overflow-hidden shadow-md aspect-4/3"
              >
                <img
                  src={src}
                  alt={`Avabodha Bharat POSH awareness session (${i + 1})`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 w-10 h-10 border-t-4 border-l-4 border-accent" />
                <div className="absolute bottom-3 right-3 w-10 h-10 border-b-4 border-r-4 border-accent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POSH Training — Childrens Academy ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 max-w-3xl"
          >
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Training for Educators</p>
            <h2
              className="font-serif font-bold italic text-foreground mb-6 text-balance"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', lineHeight: 1.15 }}
            >
              POSH Training — Childrens Academy
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Another successful Awareness Session Program — a{' '}
              <span className="font-semibold text-foreground">POSH Training Session</span> conducted for
              teachers at <span className="font-semibold text-foreground">Childrens Academy</span>,
              empowering educators to foster safe and respectful learning environments.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl">
            {[
              '/training/childrens-academy-1.jpeg',
              '/training/childrens-academy-2.jpeg',
            ].map((src, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative overflow-hidden shadow-md aspect-4/3"
              >
                <img
                  src={src}
                  alt={`Avabodha Bharat POSH training session for teachers at Childrens Academy (${i + 1})`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 w-10 h-10 border-t-4 border-l-4 border-accent" />
                <div className="absolute bottom-3 right-3 w-10 h-10 border-b-4 border-r-4 border-accent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <TrainingGallery />

      {/* ── CTA ── */}
      <section className="bg-[#0d1b2a] py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full border-[60px] border-accent/10 -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="font-serif font-bold italic text-white mb-6 text-balance"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.15 }}
            >
              Ready to Train Your Team?
            </h2>
            <p className="text-white/60 text-base mb-10 max-w-xl mx-auto leading-relaxed">
              Book a customised training session for your organisation. Get in touch with our team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-3 text-sm font-semibold hover:bg-accent/90 transition-colors"
              >
                Book a Training <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                Explore Services
              </Link>


            </div>
            <div className="mt-6 text-center">
              <p className="text-sm md:text-base text-white/70 font-medium tracking-wide">
                Digital Learning Powered by{' '}
                <span className="text-white font-semibold">eLearnPOSH</span>
                {' '}| Delivered with{' '}
                <span className="text-white font-semibold">Avabodha Expertise</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
