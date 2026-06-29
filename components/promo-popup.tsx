'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

// Shows the promo image once per browser session, 3s after the homepage loads.
// To show it only ONCE EVER (persists across sessions), swap sessionStorage for localStorage below.
const STORAGE_KEY = 'posh-conclave-2026-popup-shown'

export function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return

    const timer = setTimeout(() => {
      setIsOpen(true)
      sessionStorage.setItem(STORAGE_KEY, 'true')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="POSH Conclave 2026 announcement"
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 p-4 animate-in fade-in duration-300"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-lg animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close"
          className="absolute -right-3 -top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-800 shadow-lg transition-transform hover:scale-110"
        >
          <X className="h-5 w-5" />
        </button>

        <img
          src="/pop-up-image.jpeg"
          alt="4th National POSH Conclave & Excellence Awards 2026 — Avabodha, Associate Partner"
          className="w-full rounded-lg shadow-2xl"
        />
      </div>
    </div>
  )
}
