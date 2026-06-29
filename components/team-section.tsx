'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Linkedin } from 'lucide-react'

const teamMembers = [
  {
    id: 1,
    name: 'Jaya Ankur Singhania',
    role: 'Founder & Chief Consulting Alchemist',
    linkedin: 'https://www.linkedin.com/in/jayaankursinghania',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jaya%20Ankur%20Singhania%20-%20Founder.JPG-zbfwyQZzYJ9zxFmzJlS7wr98jELaLR.jpeg',
    description: `Jaya Ankur Singhania is a corporate governance advisor with over 17 years of experience in legal and regulatory advisory. As the Founder of Avabodha Bharat, she works closely with corporates, institutions, and leadership teams on POSH, POCSO, and governance frameworks, positioning them as critical pillars of organisational risk management and culture. She has personally trained thousands of professionals across MNCs, listed entities, and institutions, combining legal precision with practical, context-driven delivery. Through Avabodha Bharat, she is leading a mission to sensitise one million individuals across India, focused on building safer workplaces and protected childhoods, aligned with the vision of a Viksit Bharat.`,
  },
  {
    id: 2,
    name: 'Sudhir B Sharma',
    role: 'Partner – Finance & Strategic Alliances',
    linkedin: 'https://linkedin.com/in/sudhir-sharma-9983bb182',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sudhir%20B%20Sharma%20-%20Partner-RCutLBX0ghkD6T20MP2zKnxgJFX6as.jpeg',
    description: `Sudhir B Sharma is a finance and governance expert with over 38 years of experience, including leadership roles in a Maharatna Public Sector Undertaking. As Partner at Avabodha Bharat, he leads ESG advisory, strategic alliances, and large-scale compliance engagements, bringing strong financial discipline and governance oversight to client mandates. His extensive experience enables organisations to navigate complex compliance landscapes with a focus on transparency, accountability, and sustainable value creation.`,
  },
  {
    id: 3,
    name: 'Rohit Khedekar',
    role: 'Manager – Program Delivery & Compliance',
    linkedin: '#',
    image: '/rohit.jpeg',
    description: `Rohit Khedekar manages day-to-day operations and client engagement at Avabodha Bharat with a high degree of precision and reliability. He ensures seamless coordination between training teams, legal advisors, and client organisations, enabling effective delivery of advisory and training mandates. His role is central to program execution, compliance alignment and client experience, ensuring consistency and efficiency across engagements.`,
  },
  {
    id: 4,
    name: 'Mayuri Shelar',
    role: 'Head – Finance & Revenue Operations',
    linkedin: 'http://linkedin.com/in/mayuri-shelar-177a3228b',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mayuri%20Shelar%20-%20Senior%20Accountant-1bGHVFSkat64DtWZKR4djMitjLcLLr.jpeg',
    description: `Mayuri Shelar oversees the accounting and financial operations at Avabodha Bharat. With strong analytical capabilities and a sound understanding of accounting standards, she manages revenue tracking, receivables, and financial controls across advisory and training mandates. Her role ensures financial discipline, operational efficiency, and seamless execution support.`,
  },
  {
    id: 5,
    name: 'Vinay Rathod',
    role: 'Lead – Digital Presence & Thought Leadership',
    linkedin: 'https://www.linkedin.com/in/vinay-rathod-vr',
    image: '/vinay.jpeg',
    description: `Vinay Rathod supports the operational backbone of Avabodha Bharat, managing financial records, administrative coordination and execution support. He plays a key role in ensuring seamless day-to-day functioning across advisory and training engagements. He also contributes to digital presence and knowledge outreach, supporting content dissemination and visibility initiatives.`,
  },
  {
    id: 6,
    name: 'Mansi Maru',
    role: 'Coordinator – Operations & Administration',
    linkedin: 'https://www.linkedin.com/in/mansi-maru-289a19259',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mansi%20Maru%20-%20Accounts%20and%20Admin%20Associate-sWMsIyHivaC0LstQcdCHbw2zscqMGW.jpeg',
    description: `Mansi Maru supports Avabodha Bharat's operational framework by managing client documentation, billing processes, and administrative workflows with accuracy and diligence. She ensures backend processes are streamlined, compliant, and efficiently executed, enabling strong coordination and operational excellence.`,
  },
]

export function TeamSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">
            The People Behind the Mission
          </p>

          <h2 className="font-serif font-bold italic text-foreground text-3xl md:text-4xl">
            Our Team
          </h2>
        </div>

        {/* Team */}
        <div className="space-y-20">
          {teamMembers.map((member, index) => {
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
              >

                {/* IMAGE */}
                <div className={`${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="relative aspect-[3/4] w-full max-w-xs shadow-xl group mx-auto md:mx-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-accent" />
                    <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-accent" />

                    <div className="absolute bottom-0 left-1/2 translate-y-1/2">
                      <div className="bg-accent text-white pl-6 pr-10 py-2 shadow-lg whitespace-nowrap">
                        <p className="text-xs font-semibold uppercase tracking-widest">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* TEXT */}
                <div className={`${isEven ? 'md:order-2' : 'md:order-1'} w-full max-w-2xl`}>
                  <span className="text-accent text-xs font-semibold uppercase tracking-widest mb-2 block">
                    {`0${index + 1}`}
                  </span>

                  <div className="flex items-center gap-3 mb-2">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-[#0A66C2]"
                    >
                      <Linkedin size={20} />
                    </a>

                    <h3 className="font-serif font-bold italic text-foreground text-xl md:text-2xl">
                      {member.name}
                    </h3>
                  </div>

                  <div className="w-12 h-0.5 bg-accent mb-4" />

                  <p className="text-gray-600 text-base leading-relaxed text-justify">
                    {member.description}
                  </p>
                </div>

              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
