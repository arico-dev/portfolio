import { onMounted, onBeforeUnmount, ref } from 'vue'

// Adds a `.is-visible` class to every `.reveal` element once it enters the
// viewport. Pure IntersectionObserver - no scroll listeners, honors the CSS
// reduced-motion fallback in style.css.
export function useReveal() {
  const root = ref(null)
  let observer = null

  onMounted(() => {
    if (typeof IntersectionObserver === 'undefined') return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    // Observe within the component's own subtree only, after mount.
    requestAnimationFrame(() => {
      const scope = root.value
      if (!scope) return
      scope.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    })
    if (reduce) return
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })

  return { root }
}
