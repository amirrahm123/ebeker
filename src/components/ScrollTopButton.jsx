import { useState, useEffect } from 'react'

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Phones wait a little longer (600px) so the button doesn't crowd the reading area.
    const mq = window.matchMedia('(max-width: 768px)')
    const onScroll = () => setVisible(window.scrollY > (mq.matches ? 600 : 400))
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      id="scrollTop"
      className={visible ? 'visible' : ''}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="חזרה למעלה"
    >↑</button>
  )
}
