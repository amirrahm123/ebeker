import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="fl">ערן בקר — חברת עורכי דין</div>
          <p>הגעתון 26, נהריה 2240117<br />מדורג DUNS 100 ו-BDi CODE — ממשרדי עורכי הדין המובילים בישראל.</p>
        </div>
        <div className="footer-col">
          <h4>תחומים</h4>
          <Link to="/damages">נזיקין כללי</Link>
          <Link to="/medical-malpractice">רשלנות רפואית</Link>
          <Link to="/insurance">ביטוח</Link>
          <Link to="/marine-accidents">תאונות ימיות</Link>
          <Link to="/student-accidents">תאונות תלמידים</Link>
          <Link to="/wills">צוואות וירושות</Link>
          <Link to="/power-of-attorney">ייפוי כוח מתמשך</Link>
        </div>
        <div className="footer-col">
          <h4>צור קשר</h4>
          <a href="tel:049001056">04-9001056</a>
          <a href="https://wa.me/9720522611850" target="_blank" rel="noopener">052-2611850 (וואטסאפ)</a>
          <a href="mailto:office@ebeker.co.il">office@ebeker.co.il</a>
          <p>פקס: 04-9001057</p>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p>© 2026 ערן בקר חברת עורכי דין. כל הזכויות שמורות.</p>
        <p><span>DUNS 100 · BDi CODE</span></p>
      </div>
    </footer>
  )
}
