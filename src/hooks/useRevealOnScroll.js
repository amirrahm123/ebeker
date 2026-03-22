import { useEffect } from 'react'

export default function useRevealOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' })

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-reveal')
      .forEach(el => observer.observe(el))

    return () => observer.disconnect()
  })
}
