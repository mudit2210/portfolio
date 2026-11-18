import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-10rem)] flex items-center justify-center px-6 py-20 sm:py-28 animate-fade-in">
      <div className="max-w-md w-full bg-white rounded-2xl border border-[#dfdeda] p-8 sm:p-10 text-center shadow-xs space-y-6">
        {/* Monospace Error Badge */}
        <div className="w-14 h-14 mx-auto rounded-full bg-zinc-100 border border-[#dfdeda] flex items-center justify-center text-zinc-700 font-mono text-base font-bold shadow-2xs">
          404
        </div>

        {/* Text Header */}
        <div className="space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-semibold block">
            System Notice · Route Not Found
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 font-sans">
            Page Not Located
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
            The page or document route you requested does not exist or may have been relocated within the portfolio index.
          </p>
        </div>

        {/* Quick Recovery Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider font-semibold text-white bg-zinc-900 hover:bg-zinc-800 transition-colors shadow-xs"
          >
            <span>←</span>
            <span>Return to Profile</span>
          </Link>
          <Link
            to="/#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider font-semibold text-zinc-800 bg-zinc-50 border border-[#dfdeda] hover:bg-white hover:border-zinc-400 transition-all shadow-xs"
          >
            <span>Explore Projects</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
