import { useState, useEffect, useRef, useCallback } from 'react'

export default function ZoomViewer({ src, onClose }) {
  const [scale, setScale] = useState(1)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const dragging = useRef(false)
  const lastPos = useRef({ x: 0, y: 0 })

  const handleWheel = useCallback((e) => {
    e.preventDefault()
    setScale(prev => Math.min(5, Math.max(0.5, prev + (e.deltaY > 0 ? -0.15 : 0.15))))
  }, [])

  const onMouseDown = (e) => {
    if (scale <= 1) return
    dragging.current = true
    lastPos.current = { x: e.clientX - pos.x, y: e.clientY - pos.y }
  }
  const onMouseMove = (e) => {
    if (!dragging.current) return
    setPos({ x: e.clientX - lastPos.current.x, y: e.clientY - lastPos.current.y })
  }
  const onMouseUp = () => { dragging.current = false }

  const onTouchStart = (e) => {
    if (scale <= 1 || e.touches.length !== 1) return
    dragging.current = true
    lastPos.current = { x: e.touches[0].clientX - pos.x, y: e.touches[0].clientY - pos.y }
  }
  const onTouchMove = (e) => {
    if (!dragging.current || e.touches.length !== 1) return
    setPos({ x: e.touches[0].clientX - lastPos.current.x, y: e.touches[0].clientY - lastPos.current.y })
  }
  const onTouchEnd = () => { dragging.current = false }

  const resetZoom = () => { setScale(1); setPos({ x: 0, y: 0 }) }

  useEffect(() => {
    const el = document.querySelector('.zoom-viewport')
    if (el) el.addEventListener('wheel', handleWheel, { passive: false })
    const esc = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', esc)
    document.body.style.overflow = 'hidden'
    return () => {
      if (el) el.removeEventListener('wheel', handleWheel)
      document.removeEventListener('keydown', esc)
      document.body.style.overflow = ''
    }
  }, [handleWheel, onClose])

  return (
    <div className="zoom-overlay">
      <div className="zoom-toolbar">
        <button className="zoom-btn" onClick={() => setScale(s => Math.min(5, s + 0.3))}>+</button>
        <span className="zoom-level">{Math.round(scale * 100)}%</span>
        <button className="zoom-btn" onClick={() => setScale(s => Math.max(0.5, s - 0.3))}>&minus;</button>
        <button className="zoom-btn" onClick={resetZoom}>&#8634;</button>
        <button className="zoom-btn zoom-btn-close" onClick={onClose}>&times;</button>
      </div>
      <div
        className="zoom-viewport"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{ cursor: scale > 1 ? (dragging.current ? 'grabbing' : 'grab') : 'zoom-in' }}
      >
        <img
          src={src}
          alt=""
          className="zoom-img"
          draggable={false}
          style={{
            transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
            transition: dragging.current ? 'none' : 'transform 0.15s ease-out',
          }}
          onDoubleClick={() => {
            if (scale > 1) resetZoom()
            else { setScale(2.5); setPos({ x: 0, y: 0 }) }
          }}
        />
      </div>
    </div>
  )
}
