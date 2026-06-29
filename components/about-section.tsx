'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Target, Eye, Award, TrendingUp } from 'lucide-react'

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                About Avabodha
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
                Building a Safer, Stronger Bharat
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Avabodha Bharat Legal Advisory & Training LLP</strong> was
                founded with a clear vision: to create safer workplaces and
                protect children through comprehensive awareness and compliance
                training.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded by <strong className="text-foreground">Jaya Ankur Singhania (LLB, FCS)</strong>, an
                experienced Independent Director, POSH Trainer, and ESG
                Practitioner, we bring deep legal expertise combined with
                practical, implementation-focused solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that compliance is not just a tick-box activity—it's
                a mindset. Through bilingual, tech-driven training and
                grassroots partnerships, we're making workplace safety and child
                protection accessible to all.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              {[
                { value: 'July 2024', label: 'Established' },
                { value: 'Mumbai', label: 'Headquartered' },
                { value: 'LLPIN: ACI-2097', label: 'Registered' },
                { value: 'Pan-India', label: 'Reach' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-muted/50 rounded-xl p-4"
                >
                  <div className="text-2xl font-bold text-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="border-2 hover:border-accent transition-all duration-300 group cursor-default">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-300">
                    <Eye className="h-6 w-6 text-accent group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">Our Vision</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      "When women feel safe at work and children feel protected
                      in society, they thrive—and so does the nation."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#0d1b2a] transition-all duration-300 group cursor-default">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#0d1b2a] transition-colors duration-300">
                    <Target className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#0d1b2a] transition-colors duration-300">Our Mission</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Raise POSH & POCSO awareness for at least one million
                      people through bilingual, tech-driven training and
                      grassroots partnerships across India.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all duration-300 group cursor-default">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-300">
                    <Award className="h-6 w-6 text-accent group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">Our Commitment</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Delivering founder-led, expert training with dual
                      capability of legal advisory and capacity-building under
                      one trusted brand.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#0d1b2a] transition-all duration-300 group cursor-default">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#0d1b2a] transition-colors duration-300">
                    <TrendingUp className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#0d1b2a] transition-colors duration-300">Our Impact</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Trusted by MNCs and listed entities as external IC
                      members, delivering measurable compliance outcomes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
