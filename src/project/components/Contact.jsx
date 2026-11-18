import React from 'react'
import { personalInfo } from '../data'

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white rounded-2xl border border-[#dfdeda] shadow-xs p-5 sm:p-6 space-y-4 scroll-mt-24"
    >
      <div className="space-y-1.5 border-b border-[#dfdeda] pb-3">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 font-sans">
          Get in Touch
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed max-w-xl">
          Open to research collaborations, cryptography engineering roles, and applied AI security discussions.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-1">
        {/* Email Me Button (Original Colors: Black background & White text) */}
        <a
          href={`mailto:${personalInfo.email}`}
          className="group inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 text-white text-xs font-mono uppercase tracking-wider font-semibold rounded-full hover:bg-zinc-800 hover:-translate-y-0.5 hover:shadow-xs active:translate-y-0 active:scale-[0.98] transition-all duration-200 ease-out shadow-xs"
        >
          <span>Email Me</span>
          <span className="transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </a>

        {/* GitHub Pill (Original Colors: Pure White background & Dark text; Motion only) */}
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-1.5 px-4 py-2.5 bg-white border border-[#dfdeda] text-zinc-900 text-xs font-mono uppercase tracking-wider font-semibold rounded-full hover:border-zinc-400 hover:-translate-y-0.5 hover:shadow-xs active:translate-y-0 active:scale-[0.98] transition-all duration-200 ease-out"
        >
          <span>GitHub</span>
          <span className="transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </a>

        {/* LinkedIn Pill (Original Colors: Pure White background & Dark text; Motion only) */}
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-1.5 px-4 py-2.5 bg-white border border-[#dfdeda] text-zinc-900 text-xs font-mono uppercase tracking-wider font-semibold rounded-full hover:border-zinc-400 hover:-translate-y-0.5 hover:shadow-xs active:translate-y-0 active:scale-[0.98] transition-all duration-200 ease-out"
        >
          <span>LinkedIn</span>
          <span className="transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </a>

        {/* Google Scholar Pill (Original Colors: Pure White background & Dark text; Motion only) */}
        <a
          href={personalInfo.scholar}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-1.5 px-4 py-2.5 bg-white border border-[#dfdeda] text-zinc-900 text-xs font-mono uppercase tracking-wider font-semibold rounded-full hover:border-zinc-400 hover:-translate-y-0.5 hover:shadow-xs active:translate-y-0 active:scale-[0.98] transition-all duration-200 ease-out"
        >
          <span>Google Scholar</span>
          <span className="transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </a>
      </div>
    </section>
  )
}

export { Contact as ContactSection }
