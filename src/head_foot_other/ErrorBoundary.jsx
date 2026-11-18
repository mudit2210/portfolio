import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="max-w-xl mx-auto my-16 p-8 rounded-2xl border border-red-200 bg-white text-zinc-900 text-center space-y-4 shadow-sm">
          <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-semibold">
            Rendering Error
          </span>
          <h2 className="text-xl font-bold font-sans text-zinc-950">
            An issue occurred displaying this section
          </h2>
          <p className="text-xs font-mono text-zinc-600 bg-zinc-50 p-3 rounded-lg border border-[#dfdeda] text-left overflow-x-auto">
            {this.state.error?.message || 'Unknown render error'}
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider font-semibold text-white bg-zinc-900 hover:bg-zinc-800 transition-colors cursor-pointer shadow-xs"
          >
            Reload Page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
