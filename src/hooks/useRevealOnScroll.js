import { useEffect } from 'react'

const SELECTOR = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-reveal'

export default function useRevealOnScroll() {
  useEffect(() => {
    const els = document.querySelectorAll(SELECTOR)

    // Reduced motion (OS setting or the widget's "stop animations"): no
    // scroll-triggered entrance — content is simply there.
    const noMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      || document.documentElement.classList.contains('a11y-no-motion')
    if (noMotion) {
      els.forEach(el => el.classList.add('visible'))
      return
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' })

    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  })
}
