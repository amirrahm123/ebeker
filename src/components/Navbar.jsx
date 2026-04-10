import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'

const palettes = [
  { id: 'A', colors: ['#0D1B3E', '#C9A84C'], label: 'כחול זהב' },
  { id: 'B', colors: ['#FAF6F0', '#4A90D9'], label: 'קרם ותכלת' },
  { id: 'C', colors: ['#0A0A0A', '#D4AF37'], label: 'שחור זהב' },
  { id: 'D', colors: ['#1A1A2E', '#E94560'], label: 'חצות ורוד' },
]

const practiceAreas = [
  { to: '/damages', label: 'נזיקין כללי' },
  { to: '/medical-malpractice', label: 'רשלנות רפואית' },
  { to: '/insurance', label: 'ביטוח' },
  { to: '/marine-accidents', label: 'תאונות ימיות' },
  { to: '/student-accidents', label: 'תאונות תלמידים' },
  { to: '/wills', label: 'צוואות וירושות' },
  { to: '/tax-exemption', label: 'פטור ממס הכנסה' },
  { to: '/power-of-attorney', label: 'ייפוי כוח מתמשך' },
  { to: '/causes-of-death', label: 'חקירת סיבות מוות' },
]

const pressLinks = [
  { to: '/press-tort', label: 'נזיקין וביטוח' },
  { to: '/press-insurance', label: 'ביטוח לאומי' },
  { to: '/press-defense', label: 'משרד הביטחון' },
  { to: '/press-car-accidents', label: 'תאונות רכב' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
    document.body.style.overflow = ''
  }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleMobile = () => {
    setMobileOpen(prev => {
      document.body.style.overflow = !prev ? 'hidden' : ''
      return !prev
    })
  }

  const closeMobile = () => {
    setMobileOpen(false)
    document.body.style.overflow = ''
  }

  const [activePalette, setActivePalette] = useState('A')

  useEffect(() => {
    const saved = localStorage.getItem('ebeker-palette') || 'A'
    document.documentElement.setAttribute('data-palette', saved)
    setActivePalette(saved)
  }, [])

  const switchPalette = useCallback((id) => {
    document.documentElement.setAttribute('data-palette', id)
    localStorage.setItem('ebeker-palette', id)
    setActivePalette(id)
  }, [])

  const contactLink = '/#contact'
  const newsLink = '/#news'

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <div className="nav-row nav-row-logo">
          <div className="nav-row-inner">
            <Link to="/" className="nav-logo">
              <img src="/pics/logo.avif" alt="ערן בקר - חברת עורכי דין" className="nav-logo-img" />
            </Link>
            <button className={`hamburger ${mobileOpen ? 'open' : ''}`} onClick={toggleMobile} aria-label="תפריט">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
        <div className="nav-row nav-row-links">
          <div className="nav-row-inner">
            <ul className="nav-links">
              <li><Link to="/about">אודות</Link></li>
              <li><Link to="/legal-team">הצוות המשפטי</Link></li>
              <NavDropdown label="תחומי עיסוק" href="/#areas" items={practiceAreas} />
              <NavDropdown label="מהעיתונות" href="#" items={pressLinks} />
              <li><Link to="/recommendations">ממליצים</Link></li>
              <li><Link to="/eranstip">הטיפ של ערן</Link></li>
              <li><a href={newsLink}>חדשות</a></li>
              <li><a href={contactLink}>צור קשר</a></li>
            </ul>
            <div className="nav-right">
              <div className="nav-palette">
                {palettes.map(p => (
                  <button
                    key={p.id}
                    title={p.label}
                    onClick={() => switchPalette(p.id)}
                    className={`nav-palette-btn${activePalette === p.id ? ' active' : ''}`}
                    style={{ background: `linear-gradient(135deg, ${p.colors[0]} 50%, ${p.colors[1]} 50%)` }}
                  />
                ))}
              </div>
              <a href="tel:049001056" className="nav-phone-link">04-9001056</a>
              <a href={contactLink} className="nav-cta">ייעוץ חינם</a>
            </div>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <Link to="/about" onClick={closeMobile}>אודות</Link>
        <Link to="/legal-team" onClick={closeMobile}>הצוות המשפטי</Link>
        <span className="mob-section-title">תחומי עיסוק</span>
        {practiceAreas.map(a => (
          <Link key={a.to} to={a.to} onClick={closeMobile} className="mob-sub">{a.label}</Link>
        ))}
        <span className="mob-section-title">מהעיתונות</span>
        {pressLinks.map(a => (
          <Link key={a.to} to={a.to} onClick={closeMobile} className="mob-sub">{a.label}</Link>
        ))}
        <Link to="/recommendations" onClick={closeMobile}>ממליצים</Link>
        <Link to="/eranstip" onClick={closeMobile}>הטיפ של ערן</Link>
        <a href="/#news" onClick={closeMobile}>חדשות</a>
        <a href="/#contact" onClick={closeMobile}>צור קשר</a>
        <a href="tel:049001056" onClick={closeMobile}>📞 04-9001056</a>
        <a href="/#contact" onClick={closeMobile} className="mob-cta">ייעוץ חינם</a>
        <div className="mob-palette">
          {palettes.map(p => (
            <button
              key={p.id}
              title={p.label}
              onClick={() => switchPalette(p.id)}
              className={`nav-palette-btn${activePalette === p.id ? ' active' : ''}`}
              style={{ background: `linear-gradient(135deg, ${p.colors[0]} 50%, ${p.colors[1]} 50%)` }}
            />
          ))}
        </div>
      </div>
    </>
  )
}

function NavDropdown({ label, href, items }) {
  const timeoutRef = useRef(null)
  const [open, setOpen] = useState(false)

  const onEnter = () => {
    clearTimeout(timeoutRef.current)
    setOpen(true)
  }
  const onLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 350)
  }

  return (
    <li className={`has-dropdown ${open ? 'dropdown-open' : ''}`} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <a href={href}>{label}</a>
      <div className="nav-dropdown">
        {items.map(item => (
          <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>{item.label}</Link>
        ))}
      </div>
    </li>
  )
}
