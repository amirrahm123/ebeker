/* eslint-disable react/prop-types -- this codebase does not use PropTypes anywhere */
import { useEffect } from 'react'

/* Locks the page behind the modal. overflow:hidden alone doesn't stop iOS
   Safari from scrolling the body, so the body is pinned with position:fixed
   at the current offset and restored on close. */
function lockBodyScroll() {
  const y = window.scrollY
  const b = document.body.style
  const prev = { position: b.position, top: b.top, left: b.left, right: b.right, width: b.width, overflow: b.overflow }
  Object.assign(b, { position: 'fixed', top: `-${y}px`, left: '0', right: '0', width: '100%', overflow: 'hidden' })
  return () => {
    Object.assign(b, prev)
    window.scrollTo({ top: y, behavior: 'instant' })
  }
}

export default function Modal({ isOpen, onClose, children, className = '' }) {
  useEffect(() => {
    if (isOpen) {
      const unlock = lockBodyScroll()
      const handler = (e) => { if (e.key === 'Escape') onClose() }
      document.addEventListener('keydown', handler)
      return () => {
        unlock()
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
