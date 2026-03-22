import { useState, useEffect } from 'react'

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
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
