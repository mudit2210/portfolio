import React, { useState } from 'react'
import heroBanner from '../../assets/hero-banner.jpg'
import { personalInfo } from '../data'

export default function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopiedEmail(true)
    setTimeout(() => {
      setCopiedEmail(false)
    }, 2000)
  }

  return (
    <section
      id="hero"
      className="w-full bg-white border-b border-[#dfdeda] relative overflow-hidden animate-fade-in"
    >
      {/* 1. Cover Banner: High-Impact Quantum Dilution Cryostat (Expanded to show full height) */}
      <div className="w-full h-50 sm:h-96 md:h-[440px] lg:h-[500px] xl:h-[400px] relative overflow-hidden bg-zinc-950">
        <img
          src={heroBanner}
          alt="Quantum Computing Dilution Cryostat Core"
          className="absolute inset-0 w-full h-full object-cover object-[center_40%] brightness-100 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 2. Main Profile Content Container */}
      <div className="max-w-5xl mx-auto w-full px-6 sm:px-8 pt-7 sm:pt-9 pb-8 sm:pb-10 relative">
        {/* Top Header Block: Left Details & Right Institutional Badges */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-2">
          {/* Left Details */}
          <div className="space-y-3 max-w-2xl">
            {/* Name & Academic Credential */}
            <div className="flex flex-wrap items-baseline gap-2.5 sm:gap-3">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 font-sans leading-tight">
                {personalInfo.name}
              </h1>
            </div>

            {/* Role Headline */}
            <p className="text-lg sm:text-xl text-zinc-800 font-medium font-sans leading-snug">
              {personalInfo.role}
            </p>

            {/* Concise Narrative Bio */}
            <p className="text-sm text-zinc-600 font-light leading-relaxed pt-0.5 max-w-2xl text-justify sm:text-left hyphens-auto">
              {personalInfo.bioShort}
            </p>

            {/* Location & Interactive Contact */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-zinc-500 font-sans pt-0.5">
              <span>Nanyang Technological University, Singapore</span>
              <span>·</span>
              <span>Singapore</span>
              <span>·</span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="text-zinc-900 font-semibold hover:underline cursor-pointer inline-flex items-center gap-1"
              >
                <span>{copiedEmail ? '✓ Copied to clipboard!' : 'Contact Info'}</span>
              </button>
            </div>
          </div>

          {/* Right: Institutional Badges */}
          <div className="flex flex-row sm:flex-col gap-2.5 shrink-0 sm:pt-1">
            <a
              href="https://www.ntu.edu.sg"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl border border-[#dfdeda] bg-zinc-50/70 hover:bg-white hover:border-zinc-400 hover:shadow-xs transition-all text-xs font-sans group"
            >
              <img
                src="/ntu-logo.png"
                alt="NTU Singapore"
                className="w-4 h-4 sm:w-5 sm:h-5 rounded object-contain p-0.5"
              />
              <span className="font-semibold text-zinc-800 group-hover:text-zinc-950">
                NTU Singapore
              </span>
            </a>
            <a
              href="https://www.nttdata.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl border border-[#dfdeda] bg-zinc-50/70 hover:bg-white hover:border-zinc-400 hover:shadow-xs transition-all text-xs font-sans group"
            >
              <img
                src="/nttdata-logo.svg"
                alt="NTT DATA"
                className="w-4 h-4 sm:w-5 sm:h-5 rounded object-contain"
              />
              <span className="font-semibold text-zinc-800 group-hover:text-zinc-950">
                NTT DATA
              </span>
            </a>
          </div>
        </div>

        {/* Engineering & Research Focus Chips - In ONE LINE ONLY */}
        <div className="flex items-center gap-2 pt-1 overflow-x-auto whitespace-nowrap">
          {[
            'Post-Quantum Cryptography',
            'NIST ML-KEM',
            'Zero-Knowledge Systems',
            'Linux Server Security',
            'Geospatial Vision Transformers',
          ].map((topic) => (
            <span
              key={topic}
              className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-50 border border-[#dfdeda] text-zinc-700 hover:border-zinc-400 hover:bg-white transition-all shadow-2xs shrink-0"
            >
              {topic}
            </span>
          ))}
        </div>

        {/* Action Buttons & Socials Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#dfdeda] mt-6">
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider font-semibold text-white bg-zinc-950 hover:bg-zinc-800 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-[0.98] transition-all duration-200 ease-out shadow-xs"
            >
              <span>View Curriculum Vitae</span>
              <span className="transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>

            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider font-semibold text-zinc-800 bg-white border border-[#dfdeda] hover:bg-zinc-50 hover:border-zinc-400 hover:-translate-y-0.5 hover:shadow-xs active:translate-y-0 active:scale-[0.98] transition-all duration-200 ease-out shadow-2xs"
            >
              <span>Explore Projects</span>
              <span className="transition-transform duration-200 ease-out group-hover:translate-y-0.5">
                ↓
              </span>
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider font-semibold text-zinc-800 bg-white border border-[#dfdeda] hover:bg-zinc-50 hover:border-zinc-400 hover:-translate-y-0.5 hover:shadow-xs active:translate-y-0 active:scale-[0.98] transition-all duration-200 ease-out shadow-2xs"
            >
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Social Channels */}
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full border border-[#dfdeda] bg-white text-zinc-700 hover:text-zinc-950 hover:border-zinc-400 hover:-translate-y-0.5 hover:shadow-xs active:translate-y-0 transition-all shadow-2xs"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full border border-[#dfdeda] bg-white text-zinc-700 hover:text-zinc-950 hover:border-zinc-400 hover:-translate-y-0.5 hover:shadow-xs active:translate-y-0 transition-all shadow-2xs"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href={personalInfo.scholar}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full border border-[#dfdeda] bg-white text-zinc-700 hover:text-zinc-950 hover:border-zinc-400 hover:-translate-y-0.5 hover:shadow-xs active:translate-y-0 transition-all shadow-2xs"
              aria-label="Google Scholar"
              title="Google Scholar"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5 12 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Hero as HeroSection }
