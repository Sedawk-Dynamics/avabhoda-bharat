'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    tag: 'AWARENESS & PREVENTION',
    title: 'POSH Compliance & Advisory',
    description:
      'The first and most crucial step towards a safe & inclusive workplace is awareness. We provide IC constitution, policy drafting, SHe-Box registration, and full compliance audits.',
    link: '/services',
    linkLabel: 'Our Compliance Services',
  },
  {
    tag: 'TRAINING & SENSITIZATION',
    title: 'Employee & IC Member Training',
    description:
      'Interactive, bilingual training tailored to your organization\'s needs. One size never fits all — our workshops adapt to every audience, from factory workers to senior leadership.',
    link: '/training',
    linkLabel: 'Customised Training Sessions',
  },
  {
    tag: 'CHILD PROTECTION',
    title: 'POCSO Awareness Programs',
    description:
      'Specialized training for schools, parents, and educators on child protection and the POCSO Act — building safe environments for every child.',
    link: '/services',
    linkLabel: 'POCSO Programs',
  },
  {
    tag: 'LEGAL & ESG',
    title: 'Corporate Legal Advisory',
    description:
      'Expert legal research, ESG compliance, policy implementation, and due diligence support for corporates and startups navigating complex compliance landscapes.',
    link: '/services',
    linkLabel: 'Legal & ESG Services',
  },
]

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

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-4">What We Do</p>
          <h2 className="font-serif font-bold italic text-foreground text-balance" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', lineHeight: 1.15 }}>
            Building Safer Workplaces,<br />One Organisation at a Time
          </h2>
        </motion.div>

        {/* Services list */}
        <div className="divide-y divide-gray-100">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="grid md:grid-cols-12 gap-6 md:gap-10 py-12 group"
            >
              {/* Index + Tag */}
              <div className="md:col-span-3">
                <span className="text-sm font-semibold text-accent uppercase tracking-widest">{service.tag}</span>
              </div>

              {/* Content */}
              <div className="md:col-span-6">
                <h3 className="font-serif font-bold text-foreground text-xl md:text-2xl mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* CTA */}
              <div className="md:col-span-3 flex md:justify-end items-start">
                <div className="mt-1">
                  <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Check out our</p>                  <RedArrowLink href={service.link} label={service.linkLabel} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
