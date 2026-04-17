import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const practiceAreas = [
  { to: '/damages', label: 'נזיקין כללי' },
  { to: '/medical-malpractice', label: 'רשלנות רפואית' },
  { to: '/insurance', label: 'ביטוח' },
  { to: '/work-accidents', label: 'תאונות עבודה · ביטוח לאומי' },
  { to: '/car-accidents', label: 'תאונות דרכים' },
  { to: '/marine-accidents', label: 'תאונות ימיות' },
  { to: '/student-accidents', label: 'תאונות תלמידים' },
  { to: '/occupational-diseases', label: 'מחלות מקצוע · ביטוח לאומי' },
  { to: '/tax-exemption', label: 'פטור ממס הכנסה' },
  { to: '/wills', label: 'צוואות וירושות' },
  { to: '/power-of-attorney', label: 'ייפוי כוח מתמשך' },
  { to: '/disabilities', label: 'נכות כללית וניידות · ביטוח לאומי' },
  { to: '/idf-disabilities', label: 'נכי צה"ל ומשרד הביטחון' },
]

const pressLinks = [
  { to: '/press-tort', label: 'נזיקין וביטוח' },
  { to: '/press-insurance', label: 'ביטוח לאומי' },
  { to: '/press-defense', label: 'משרד הביטחון' },
  { to: '/press-car-accidents', label: 'תאונות דרכים' },
]

const mediaLinks = [
  { to: '/media/tv', label: 'כתבות בטלוויזיה' },
  { to: '/media/radio', label: 'ראיונות ברדיו' },
  { to: '/media/lectures', label: 'הרצאות וכנסים' },
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

  const contactLink = '/#contact'

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <div className="nav-row nav-row-logo">
          <div className="nav-row-inner">
            <div className="nav-row-left">
              <a href={contactLink} className="nav-cta">ייעוץ חינם</a>
              <a href="tel:049001056" className="nav-phone-link">04-9001056</a>
            </div>
            <Link to="/" className="nav-logo">
              <img src="/pics/logo.avif" alt="ערן בקר - חברת עורכי דין" className="nav-logo-img" />
            </Link>
            <div className="nav-row-right nav-trust-items">
              <div className="nav-trust-item">
                <span className="nav-trust-num">DUNS 100</span>
                <span className="nav-trust-label">מדורג מוביל</span>
              </div>
              <div className="nav-trust-item">
                <span className="nav-trust-num">BDi CODE</span>
                <span className="nav-trust-label">מצוינות משפטית</span>
              </div>
              <div className="nav-trust-item">
                <span className="nav-trust-num" data-target="25">0+</span>
                <span className="nav-trust-label">שנות ניסיון</span>
              </div>
            </div>
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
              <NavDropdown label="תחומי עיסוק" href="/#areas" items={practiceAreas} wide />
              <NavDropdown label="מהעיתונות" href="#" items={pressLinks} />
              <li><Link to="/recommendations">ממליצים</Link></li>
              <li><Link to="/eranstip">הטיפ של ערן</Link></li>
              <NavDropdown label="מרכז מדיה" href="#" items={mediaLinks} />
              <li><a href={contactLink}>צור קשר</a></li>
            </ul>
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
        <span className="mob-section-title">מרכז מדיה</span>
        {mediaLinks.map(a => (
          <Link key={a.to} to={a.to} onClick={closeMobile} className="mob-sub">{a.label}</Link>
        ))}
        <a href="/#contact" onClick={closeMobile}>צור קשר</a>
        <a href="tel:049001056" onClick={closeMobile}>📞 04-9001056</a>
        <a href="/#contact" onClick={closeMobile} className="mob-cta">ייעוץ חינם</a>
      </div>
    </>
  )
}

function NavDropdown({ label, href, items, wide }) {
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
      <div className={`nav-dropdown${wide ? ' nav-dropdown-wide' : ''}`}>
        {items.map(item => (
          <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>{item.label}</Link>
        ))}
      </div>
    </li>
  )
}
