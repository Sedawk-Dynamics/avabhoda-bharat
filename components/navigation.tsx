'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

const navItems = [
  { href: '/services', label: 'Services' },
  { href: '/training', label: 'Training' },
  { href: '/about', label: 'About' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-sm border-b border-gray-100' : ''
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src="/logo.png"
              alt="Avabodha Logo"
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-accent transition-colors duration-150 tracking-wide"
              >
                {item.label}
              </Link>
            ))}
            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-accent transition-colors duration-150 tracking-wide cursor-pointer">
                Resources <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/resources">Blog & Resources</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/district-officers">PoSH District Officer – Directory</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-white text-base font-bold px-6 py-3 hover:bg-[#0d1b2a] transition-colors duration-200 tracking-wide shadow-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-gray-800 hover:text-accent transition-colors py-1"
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t pt-3">
                <div className="font-medium text-gray-700 mb-2">Resources</div>
                <Link
                  href="/resources"
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-gray-600 hover:text-accent transition-colors py-1 pl-4 block"
                >
                  Blog & Resources
                </Link>
                <Link
                  href="/district-officers"
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-gray-600 hover:text-accent transition-colors py-1 pl-4 block"
                >
                  PoSH District Officer – Directory
                </Link>
              </div>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center bg-accent text-white text-sm font-semibold px-5 py-3 mt-2 hover:bg-accent/90 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
