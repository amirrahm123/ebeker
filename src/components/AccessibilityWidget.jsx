import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'

const STORAGE_KEY = 'ebeker-a11y'

const fontSizes = [
  { cls: 'a11y-font-75', label: '75%' },
  { cls: 'a11y-font-90', label: '90%' },
  { cls: null, label: '100%' },
  { cls: 'a11y-font-110', label: '110%' },
  { cls: 'a11y-font-125', label: '125%' },
  { cls: 'a11y-font-150', label: '150%' },
]

const toggles = [
  { key: 'contrast', cls: 'a11y-contrast-high', label: 'ניגודיות גבוהה', icon: '◐' },
  { key: 'invert', cls: 'a11y-invert', label: 'ניגודיות הפוכה', icon: '◑' },
  { key: 'grayscale', cls: 'a11y-grayscale', label: 'גווני אפור', icon: '◒' },
  { key: 'links', cls: 'a11y-links', label: 'הדגשת קישורים', icon: '🔗' },
  { key: 'readable', cls: 'a11y-readable', label: 'פונט קריא', icon: 'Aa' },
  { key: 'noMotion', cls: 'a11y-no-motion', label: 'עצירת אנימציות', icon: '⏸' },
  { key: 'cursor', cls: 'a11y-cursor', label: 'סמן גדול', icon: '🖱' },
]

function loadSettings() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}
  } catch { return {} }
}

function saveSettings(s) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(s))
}

function applyToDOM(settings) {
  const html = document.documentElement
  fontSizes.forEach(f => { if (f.cls) html.classList.remove(f.cls) })
  toggles.forEach(t => html.classList.remove(t.cls))
  if (settings.fontSize) html.classList.add(settings.fontSize)
  toggles.forEach(t => { if (settings[t.key]) html.classList.add(t.cls) })
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false)
  const [settings, setSettings] = useState(loadSettings)

  useEffect(() => { applyToDOM(settings) }, [settings])

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') close() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, close])

  const update = (next) => {
    setSettings(next)
    saveSettings(next)
  }

  const setFontSize = (cls) => update({ ...settings, fontSize: cls })

  const toggle = (key) => update({ ...settings, [key]: !settings[key] })

  const reset = () => {
    update({})
    applyToDOM({})
  }

  const currentFontIdx = fontSizes.findIndex(f => f.cls === (settings.fontSize || null))

  return (
    <>
      <button
        className="a11y-float"
        onClick={() => setOpen(o => !o)}
        aria-label="נגישות"
        title="נגישות"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="white" aria-hidden="true">
          <circle cx="12" cy="4" r="2" />
          <path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z" />
        </svg>
      </button>

      {open && createPortal(
        <div className="a11y-overlay" onClick={(e) => { if (e.target === e.currentTarget) close() }}>
          <div className="a11y-panel" dir="rtl">
            <div className="a11y-panel-header">
              <h3>הגדרות נגישות</h3>
              <button className="a11y-panel-close" onClick={close} aria-label="סגור">&times;</button>
            </div>

            <div className="a11y-panel-body">
              <div className="a11y-section-label">גודל טקסט</div>
              <div className="a11y-font-row">
                {fontSizes.map((f, i) => (
                  <button
                    key={f.label}
                    className={`a11y-font-btn${i === currentFontIdx ? ' active' : ''}`}
                    onClick={() => setFontSize(f.cls)}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              <div className="a11y-section-label">תצוגה</div>
              <div className="a11y-toggles">
                {toggles.map(t => (
                  <button
                    key={t.key}
                    className={`a11y-option-btn${settings[t.key] ? ' active' : ''}`}
                    onClick={() => toggle(t.key)}
                  >
                    <span className="a11y-option-icon">{t.icon}</span>
                    <span>{t.label}</span>
                  </button>
                ))}
              </div>

              <button className="a11y-reset-btn" onClick={reset}>
                ↺ איפוס הגדרות
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
