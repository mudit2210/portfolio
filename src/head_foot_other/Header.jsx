import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { personalInfo } from '../project/data'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isDeepDive = location.pathname.startsWith('/projects/') && location.pathname !== '/projects'

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY
          setScrolled((prev) => {
            if (!prev && currentY > 50) return true
            if (prev && currentY < 20) return false
            return prev
          })
          ticking = false
        })
        ticking = true
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Transparent floating header only on home at the very top with mobile menu closed
  const isTransparent = isHome && !scrolled && !menuOpen

  const navItems = [
    { label: 'About', href: isHome ? '#about' : '/#about' },
    { label: 'Experience', href: isHome ? '#experience' : '/#experience' },
    { label: 'Projects', href: isHome ? '#projects' : '/#projects' },
    { label: 'Research', href: isHome ? '#research' : '/#research' },
    { label: 'Education', href: isHome ? '#education' : '/#education' },
    { label: 'Skills', href: isHome ? '#skills' : '/#skills' },
    { label: 'Contact', href: isHome ? '#contact' : '/#contact' },
    { label: 'CV', href: personalInfo.resumeUrl, isExternal: true },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 pointer-events-none">
      {/* 
        GPU-Accelerated Background Glass Layer:
        Fades in/out with pure opacity for 100% stutter-free rendering.
      */}
      <div
        className={`absolute inset-0 bg-white/90 backdrop-blur-md border-b border-[#dfdeda] shadow-xs transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none ${
          isTransparent ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* 
        STATE 1: Top Hero Floating Island (Centered over Chandelier Banner)
        Active ONLY at the very top of Home. 
        Uses GPU-accelerated opacity & translateY cross-fade.
      */}
      <div
        className={`absolute inset-0 max-w-5xl mx-auto px-4 sm:px-8 lg:px-10 h-full flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isTransparent
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 px-3 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/20 text-zinc-200 shadow-sm">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.isExternal ? '_blank' : undefined}
              rel={item.isExternal ? 'noreferrer' : undefined}
              className="group text-xs sm:text-[13px] font-sans font-medium px-2.5 py-1 rounded-full whitespace-nowrap inline-flex items-center gap-1 shrink-0 text-zinc-200 hover:text-white hover:bg-white/10 transition-colors"
            >
              <span>{item.label}</span>
              {item.isExternal && (
                <span
                  className="text-[11px] leading-none select-none transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                >
                  ↗
                </span>
              )}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Hamburger for Top Transparent Hero */}
      <div
        className={`md:hidden absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 transition-opacity duration-300 ${
          isTransparent ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 text-white focus:outline-none"
          aria-label="Toggle navigation"
        >
          <div className="w-5 space-y-1 flex flex-col items-end">
            <span className="h-0.5 w-5 bg-white transition-all duration-300" />
            <span className="h-0.5 w-3.5 bg-white transition-all duration-200" />
            <span className="h-0.5 w-5 bg-white transition-all duration-300" />
          </div>
        </button>
      </div>

      {/* 
        STATE 2: Scrolled & Deep-Dive Sticky Header (Brand Left, Nav Right)
        Edge-to-edge balance across the container.
        Transitions in with pure GPU opacity & translateY (zero layout reflow).
      */}
      <div
        className={`absolute inset-0 max-w-5xl mx-auto px-4 sm:px-8 lg:px-10 h-full flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isTransparent
            ? 'opacity-0 translate-y-2 pointer-events-none'
            : 'opacity-100 translate-y-0 pointer-events-auto'
        }`}
      >
        {/* Left Slot: Brand or Back to Profile */}
        <div className="flex items-center">
          {isDeepDive ? (
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-sans font-medium transition-colors duration-200 py-1.5 px-3 rounded-full border border-[#dfdeda] bg-zinc-50 text-zinc-700 hover:text-zinc-950 hover:bg-white shadow-2xs whitespace-nowrap"
            >
              <span>←</span>
              <span>Back to Profile</span>
            </Link>
          ) : (
            <Link
              to="/"
              onClick={() => {
                if (isHome) {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
              className="font-bold text-base sm:text-lg tracking-tight text-zinc-950 hover:text-zinc-600 transition-colors duration-200 whitespace-nowrap"
            >
              {personalInfo.name}
            </Link>
          )}
        </div>

        {/* Desktop Nav Right: Edge-to-edge balance with Brand on the left */}
        <nav className="hidden md:flex items-center gap-0.5 lg:gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.isExternal ? '_blank' : undefined}
              rel={item.isExternal ? 'noreferrer' : undefined}
              className="group text-xs sm:text-[13px] font-sans font-medium px-2 sm:px-2.5 py-1 rounded-full whitespace-nowrap inline-flex items-center gap-1 shrink-0 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/80 transition-colors"
            >
              <span>{item.label}</span>
              {item.isExternal && (
                <span
                  className="text-[11px] leading-none select-none transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                >
                  ↗
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger on solid header */}
        <div className="md:hidden flex items-center justify-end">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-zinc-700 hover:text-zinc-950 focus:outline-none transition-colors duration-300"
            aria-label="Toggle navigation"
          >
            <div className="w-5 space-y-1 flex flex-col items-end">
              <span
                className={`h-0.5 transition-all duration-300 bg-zinc-900 ${
                  menuOpen ? 'w-5 rotate-45 translate-y-1.5' : 'w-5'
                }`}
              />
              <span
                className={`h-0.5 transition-all duration-200 bg-zinc-900 ${
                  menuOpen ? 'opacity-0' : 'w-3.5'
                }`}
              />
              <span
                className={`h-0.5 transition-all duration-300 bg-zinc-900 ${
                  menuOpen ? 'w-5 -rotate-45 -translate-y-1.5' : 'w-5'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden border-b border-[#dfdeda] bg-white/98 backdrop-blur-md px-6 py-6 space-y-4 shadow-lg animate-fade-in-down pointer-events-auto">
          <nav className="flex flex-col space-y-3 text-sm font-sans font-medium text-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.isExternal ? '_blank' : undefined}
                rel={item.isExternal ? 'noreferrer' : undefined}
                onClick={() => setMenuOpen(false)}
                className="text-zinc-700 hover:text-zinc-950 font-medium py-1 inline-flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                <span>{item.label}</span>
                {item.isExternal && (
                  <span className="text-xs leading-none select-none" aria-hidden="true">
                    ↗
                  </span>
                )}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
