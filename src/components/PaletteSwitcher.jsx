import { useState, useEffect } from 'react'

const palettes = [
  { id: 'A', colors: ['#0D1B3E', '#C9A84C'], label: 'כחול זהב' },
  { id: 'B', colors: ['#FAF6F0', '#4A90D9'], label: 'קרם ותכלת' },
]

export default function PaletteSwitcher() {
  const [active, setActive] = useState('A')

  useEffect(() => {
    const saved = localStorage.getItem('ebeker-palette') || 'A'
    document.documentElement.setAttribute('data-palette', saved)
    setActive(saved)
  }, [])

  const switchPalette = (id) => {
    document.documentElement.setAttribute('data-palette', id)
    localStorage.setItem('ebeker-palette', id)
    setActive(id)
  }

  return (
    <div className="palette-switcher" style={{
      position: 'fixed', bottom: 24, left: 24, zIndex: 9999,
      display: 'flex', gap: 8, alignItems: 'center',
      background: 'rgba(13,27,62,.85)', border: '1px solid rgba(201,168,76,.2)',
      borderRadius: 40, padding: '6px 14px',
      boxShadow: '0 4px 20px rgba(0,0,0,.2)',
      backdropFilter: 'blur(12px)',
    }}>
      <span className="palette-switcher-label" style={{
        fontSize: '0.68rem', fontWeight: 700, color: 'rgba(255,255,255,.6)',
        letterSpacing: 1, marginLeft: 4,
      }}>עיצוב</span>
      {palettes.map(p => (
        <button
          key={p.id}
          title={p.label}
          onClick={() => switchPalette(p.id)}
          style={{
            width: 28, height: 28, borderRadius: '50%', cursor: 'pointer',
            background: `linear-gradient(135deg, ${p.colors[0]} 50%, ${p.colors[1]} 50%)`,
            padding: 0, outline: 'none',
            border: active === p.id ? '2px solid #fff' : '2px solid transparent',
            boxShadow: active === p.id ? '0 0 0 2px rgba(255,255,255,.3)' : 'none',
            transition: 'transform .2s, border-color .2s, box-shadow .2s',
          }}
          onMouseEnter={e => e.target.style.transform = 'scale(1.15)'}
          onMouseLeave={e => e.target.style.transform = 'scale(1)'}
        />
      ))}
    </div>
  )
}
