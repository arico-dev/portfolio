import { onMounted, onBeforeUnmount } from 'vue'

// Adds an `.is-visible` class to every `.reveal` element once it enters the
// viewport. Pure IntersectionObserver - no scroll listeners, honors the CSS
// reduced-motion fallback in style.css.
//
// Observes against the viewport (document), not a component-scoped ref: a
// ref bound to a `display: contents` wrapper resolves to null, which would
// silently leave `.reveal` elements at opacity 0.
export function useReveal() {
  let observer = null
  let fallbackTimer = null

  const reveal = (el) => el.classList.add('is-visible')

  const observePending = (scope) => {
    if (!scope) return
    scope.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => observer.observe(el))
  }

  onMounted(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (typeof IntersectionObserver === 'undefined' || reduce) {
      // No observer or reduced motion: reveal everything right away.
      document.querySelectorAll('.reveal').forEach(reveal)
      return
    }

    if (!observer) {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              reveal(entry.target)
              observer.unobserve(entry.target)
            }
          }
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
      )
    }

    // Each mount (i.e. each <Reveal>) (re)observes the pending elements.
    requestAnimationFrame(observePending.bind(null, document))
    // Fail-safe: never leave content hidden if the observer misbehaves.
    // Short timeout so the page degrades to fully-visible if the observer
    // stalls (e.g. first card of a section not yet intersecting).
    if (!fallbackTimer) {
      fallbackTimer = window.setTimeout(() => {
        // One fallback for the whole page; once visible everything stays.
        document.querySelectorAll('.reveal').forEach(reveal)
      }, 600)
    }
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
    if (fallbackTimer) window.clearTimeout(fallbackTimer)
  })

  return {}
}