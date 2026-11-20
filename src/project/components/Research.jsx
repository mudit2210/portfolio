import React, { useState } from 'react'
import { publicationsAndPatents } from '../data'

export default function Research() {
  const [copiedId, setCopiedId] = useState(null)
  const [activeFilter, setActiveFilter] = useState('All')

  const filterOptions = ['All', 'Patent', 'Peer-Reviewed Paper', 'Book Chapter']

  const filteredItems = publicationsAndPatents.filter((item) => {
    if (activeFilter === 'All') return true
    return item.type === activeFilter
  })

  const handleCopyBibtex = (id, bibtex) => {
    navigator.clipboard.writeText(bibtex)
    setCopiedId(id)
    setTimeout(() => {
      setCopiedId(null)
    }, 2000)
  }

  return (
    <section
      id="research"
      className="bg-white rounded-2xl border border-[#dfdeda] shadow-xs p-5 sm:p-6 space-y-4 scroll-mt-24"
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-[#dfdeda] pb-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 font-sans">
            Publications & Patents
          </h2>
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mt-1">
            Intellectual Property & Peer-Reviewed Papers
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setActiveFilter(opt)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors cursor-pointer ${
                activeFilter === opt
                  ? 'bg-zinc-900 text-white font-semibold'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 border border-[#dfdeda]'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="divide-y divide-[#dfdeda]">
        {filteredItems.map((item) => (
          <div key={item.id} className="py-3.5 first:pt-1 last:pb-0 space-y-1.5">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-zinc-100 border border-[#dfdeda] text-zinc-700 font-semibold">
                  {item.type} · {item.year}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-zinc-950 font-sans">
                  {item.title}
                </h3>
              </div>
              {item.doi && (
                <span className="text-xs font-mono text-zinc-400 shrink-0">
                  {item.doi}
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
              {item.authors} &mdash;{' '}
              <span className="italic font-normal text-zinc-800">{item.venue}</span>
            </p>

            <p className="text-xs text-zinc-500 font-light leading-relaxed text-justify sm:text-left hyphens-auto">
              {item.abstract}
            </p>

            {item.bibtex && (
              <div className="pt-1 flex items-center gap-3 text-xs font-mono">
                <button
                  type="button"
                  onClick={() => handleCopyBibtex(item.id, item.bibtex)}
                  className="text-zinc-600 hover:text-zinc-950 font-medium underline underline-offset-2 cursor-pointer"
                >
                  {copiedId === item.id ? '✓ Copied BibTeX' : 'Cite (BibTeX)'}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export { Research as ResearchSection }
