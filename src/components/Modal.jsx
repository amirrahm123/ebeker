import { useEffect } from 'react'

export default function Modal({ isOpen, onClose, children, className = '' }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      const handler = (e) => { if (e.key === 'Escape') onClose() }
      document.addEventListener('keydown', handler)
      return () => {
        document.body.style.overflow = ''
        document.removeEventListener('keydown', handler)
      }
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="modal-overlay active" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className={`modal-content ${className}`}>
        <button className="modal-close" onClick={onClose} aria-label="סגור">&times;</button>
        {children}
      </div>
    </div>
  )
}
