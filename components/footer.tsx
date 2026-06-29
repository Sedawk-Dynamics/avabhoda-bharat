import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { label: 'POSH Training', href: '/services' },
      { label: 'POCSO Awareness', href: '/services' },
      { label: 'IC Member Training', href: '/training' },
      { label: 'ESG Advisory', href: '/services' },
      { label: 'External Member Roles', href: '/services' },
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Process', href: '/about' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Contact', href: '/contact' },
    ],
    resources: [
      { label: 'Blog', href: '/resources' },
      { label: 'District Nodal Officer (DNO)', href: '/district-officers' },
    ],
  }

  return (
    <footer className="bg-[#0d1b2a] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src="/logo.png"
              alt="Avabodha Logo"
              className="h-24 w-auto mb-6"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-xs">
              Building safer workplaces for women through comprehensive POSH and POCSO compliance training.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5 text-accent" />
                <span className="text-white/60 text-sm leading-relaxed">808, 8th Floor, Kosha Kommercial Komplex, Malad East, Mumbai 400097</span>
              </div>
              {/* <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                <a href="tel:02246162728" className="text-white/60 text-sm hover:text-accent transition-colors">022-46162728</a>
              </div> */}
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                <a href="tel:8369149230" className="text-white/60 text-sm hover:text-accent transition-colors">+91 8369149230</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
                <a href="mailto:info@avabodhabharat.com" className="text-white/60 text-sm hover:text-accent transition-colors">info@avabodhabharat.com</a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white text-sm mb-6 uppercase tracking-widest">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-white/60 text-sm hover:text-accent transition-colors hover:translate-x-1 inline-block transition-transform">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white text-sm mb-6 uppercase tracking-widest">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-white/60 text-sm hover:text-accent transition-colors hover:translate-x-1 inline-block transition-transform">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-white text-sm mb-6 uppercase tracking-widest">Resources</h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-white/60 text-sm hover:text-accent transition-colors hover:translate-x-1 inline-block transition-transform">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-white/40 text-sm">
            © {currentYear} Avabodha Bharat Legal Advisory &amp; Training LLP. All rights reserved. | LLPIN: ACI-2097
          </p>
          <div className="flex items-center gap-3">
            {[
              { Icon: Facebook, href: 'https://www.facebook.com/avabodhabharat/' },
              { Icon: Twitter, href: 'https://x.com/avabodhabharat' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/avabodha-bharat-legal-advisory-and-training-llp-354227419' },
              { Icon: Instagram, href: 'https://www.instagram.com/avabodhabharat' },
            ].map(({ Icon, href }, i) => {
              const isExternal = href.startsWith('http')
              return (
                <Link
                  key={i}
                  href={href}
                  {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
                  className="w-10 h-10 bg-white/5 border border-white/10 hover:bg-accent hover:border-accent flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
