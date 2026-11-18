import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * ScrollManager handles Single-Page-App scroll restoration:
 * 1. When opening deep-dives (/projects/:slug), immediately scrolls to top (0, 0).
 * 2. When navigating to hashes (e.g. /#projects), smoothly scrolls to the target section.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '')
      const scrollToTarget = () => {
        const element = document.getElementById(targetId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }

      // Timeout allows React to finish DOM rendering on cross-route transitions
      const timer = setTimeout(scrollToTarget, 60)
      return () => clearTimeout(timer)
    } else {
      // On new page transitions without a hash (e.g. entering /projects/:slug), start at top
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [pathname, hash])

  return null
}
