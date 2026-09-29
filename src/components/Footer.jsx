import { Link } from 'react-router-dom'
import { site, whatsappLink } from '../config/site'
import { openCookieSettings } from '../lib/consent'

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="fl">{site.legalName}</div>
          <p>{site.address.full}</p>
          <a
            href="https://www.google.com/maps/place/?q=place_id:ChIJ-5XvUljOHRURcDRNut26I-M"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-navigate"
          >
            נווט למשרד
          </a>
          <p>מדורג DUNS 100 ו-BDi CODE — ממשרדי עורכי הדין המובילים בישראל.</p>
          <div className="footer-hours">
            <h4>שעות פעילות</h4>
            <p>א׳, ב׳, ד׳: 08:00–18:00</p>
            <p>ג׳, ה׳: 08:00–17:00</p>
            <p>ו׳–ש׳: סגור</p>
          </div>
        </div>
        <div className="footer-col">
          <h4>צור קשר</h4>
          <a href={site.phones.office.href}>{site.phones.office.display}</a>
          <a href={whatsappLink('')} target="_blank" rel="noopener">{site.phones.whatsapp.display} (וואטסאפ)</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <p>פקס: {site.phones.fax.display}</p>
          <div className="footer-social">
            <a href={site.facebook} target="_blank" rel="noopener noreferrer" aria-label="פייסבוק" className="footer-social-btn">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener" aria-label="WhatsApp" className="footer-social-btn">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.206-.242-.58-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {site.legalName}. כל הזכויות שמורות.</p>
        <p className="footer-legal">
          <Link to="/about">אודות</Link>
          <span className="footer-legal-sep" aria-hidden="true">·</span>
          <Link to="/legal-team">הצוות המשפטי</Link>
          <span className="footer-legal-sep" aria-hidden="true">·</span>
          <a href="/#areas">תחומי עיסוק</a>
          <span className="footer-legal-sep" aria-hidden="true">·</span>
          <Link to="/privacy">מדיניות פרטיות</Link>
          <span className="footer-legal-sep" aria-hidden="true">·</span>
          <Link to="/terms">תנאי שימוש</Link>
          <span className="footer-legal-sep" aria-hidden="true">·</span>
          <Link to="/accessibility">נגישות האתר</Link>
          <span className="footer-legal-sep" aria-hidden="true">·</span>
          <button type="button" className="footer-legal-btn" onClick={openCookieSettings}>הגדרות עוגיות</button>
        </p>
        <p><span>DUNS 100 · BDi CODE</span></p>
      </div>
    </footer>
  )
}
