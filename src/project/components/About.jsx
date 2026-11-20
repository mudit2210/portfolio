import React from 'react'
import { aboutNarrative } from '../data'

export default function About() {
  return (
    <section
      id="about"
      className="bg-white rounded-2xl border border-[#dfdeda] shadow-xs p-5 sm:p-6 space-y-3.5 scroll-mt-24"
    >
      <div className="flex items-baseline justify-between border-b border-[#dfdeda] pb-3">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 font-sans">
          About
        </h2>
        <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
          Overview
        </span>
      </div>

      <div className="space-y-3 text-sm sm:text-base text-zinc-600 font-light leading-relaxed pt-0.5 text-justify sm:text-left hyphens-auto">
        <p>{aboutNarrative.p1}</p>
        <p>{aboutNarrative.p2}</p>
      </div>

      {/* Highlights Sub-strip */}
      <div className="pt-3.5 border-t border-[#dfdeda] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
        <div>
          <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold block mb-1">
            Core Domains
          </span>
          <p className="text-zinc-800 font-medium">Applied Cryptography & ML</p>
        </div>
        <div>
          <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold block mb-1">
            Graduate Affiliation
          </span>
          <p className="text-zinc-800 font-medium">NTU Singapore (Cybersecurity)</p>
        </div>
        <div>
          <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold block mb-1">
            National Honor
          </span>
          <p className="text-zinc-800 font-medium">Winner, Smart India Hackathon</p>
        </div>
      </div>
    </section>
  )
}

export { About as AboutSection }
