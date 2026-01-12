"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-primary text-primary-foreground">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Bar */}
        <div className="flex items-center justify-between h-20 md:h-24">

          {/* Logo + Name */}
          <div className="flex items-center gap-4 flex-1 min-w-0">
            
            {/* Bigger Logo */}
            <div className="w-12 h-12 md:w-14 md:h-14 bg-accent rounded-xl flex items-center justify-center font-extrabold text-xl md:text-2xl text-accent-foreground shrink-0">
              TA
            </div>

            {/* Bigger Company Name */}
            <div className="leading-tight min-w-0">
              <span className="block text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide">
                Taffon Advisory
              </span>
              <span className="block text-sm sm:text-base md:text-lg opacity-80">
                Consultancy LLP
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 text-base font-semibold">
            <Link href="#services" className="hover:text-accent transition">
              Services
            </Link>
            <Link href="#gallery" className="hover:text-accent transition">
              Portfolio
            </Link>
            <Link href="#about" className="hover:text-accent transition">
              About
            </Link>
            <Link href="#contact" className="hover:text-accent transition">
              Contact
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden ml-4"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 pb-6 space-y-2 border-t border-border text-base font-medium">
            <Link href="#services" className="block py-3 hover:text-accent transition">
              Services
            </Link>
            <Link href="#gallery" className="block py-3 hover:text-accent transition">
              Portfolio
            </Link>
            <Link href="#about" className="block py-3 hover:text-accent transition">
              About
            </Link>
            <Link href="#contact" className="block py-3 hover:text-accent transition">
              Contact
            </Link>
          </div>
        )}

      </nav>
    </header>
  )
}
