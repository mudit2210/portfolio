import React from 'react'
import { personalInfo } from '../project/data'

export default function Footer() {
  return (
    <footer className="border-t border-[#dfdeda] py-10 bg-white text-zinc-600 text-xs font-mono">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© 2026 {personalInfo.name}. Applied Cryptography & Machine Learning.</p>
        <div className="flex items-center gap-5 text-zinc-600">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-950 transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href={personalInfo.scholar}
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-950 transition-colors"
          >
            Scholar ↗
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-950 transition-colors"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </footer>
  )
}
