import { Link } from 'react-router-dom'
import useRevealOnScroll from '../hooks/useRevealOnScroll'
import Breadcrumb from '../components/Breadcrumb'
import CTASection from '../components/CTASection'

export default function MarineAccidents() {
  useRevealOnScroll()

  return (
    <>
      <Breadcrumb items={[
        { label: 'תחומי עיסוק', to: '/#areas' },
        { label: 'תאונות ימיות' }
      ]} />

      <section className="hero">
        <div className="hero-inner">
          <p className="hero-eyebrow">תחום עיסוק &middot; התמחות ייחודית</p>
          <h1>תאונות<span className="accent">ימיות</span></h1>
          <p className="hero-sub">מומחיות ייחודית בתביעות נפגעים בים ובכנרת — לעו"ד ערן בקר ניסיון של כ-21 שנים בתחום.</p>
          <div className="hero-btns">
            <Link to="/#contact" className="btn-teal">קבעו ייעוץ חינם &#8592;</Link>
            <a href="tel:049001056" className="btn-outline-white">&#128222; 04-9001056</a>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="content-container">

          <div className="reveal">
            <h2>תאונות בים ובכנרת</h2>
            <p>ברחבי הים ו/או הכנרת מתרחשות תאונות חמורות כתוצאה משימוש בכלי שיט ו/או השתתפות בפעילות ספורט ימי. תאונות אלו, אמנם אינן שכיחות כמו תאונות הדרכים, אך לצערנו אכן מתרחשות, גורמות לנכות קשה ולעיתים אף למוות, ודורשות ידע משפטי ייחודי וטיפול מיוחד.</p>
            <p>לעו"ד ערן בקר ניסיון משפטי של כ-21 שנים בהצלחה בייצוג נפגעים בתאונות ים ובתאונות כלי שיט — תחום הדורש התמחות ספציפית בחקיקה הימית הייחודית.</p>
          </div>

          <div className="reveal">
            <h2>סוגי הפגיעות הימיות שאנו מטפלים בהן</h2>
            <ul>
              <li>פגיעות מנפילה למים מסירה ממונעת או ג'ט סקי</li>
              <li>פגיעות בעת גרירה על גלגל (טיוב) מסירה ממונעת או ג'ט סקי</li>
              <li>פגיעות בסקי מים, ווייק בורד, בננה</li>
              <li>פגיעות ממנוע הסירה או הג'ט סקי ומהספינה</li>
              <li>פגיעות בהתנגשות בין כלי שיט</li>
              <li>תאונות של מדריכי גלישה ופעילות ימית</li>
              <li>פגיעות עובדים בסביבה ימית</li>
              <li>תאונות בחוף הים ובמתחמי נופש ימיים</li>
            </ul>
          </div>

          <div className="highlight-box reveal">
            <h3>&#9875; חשוב לדעת — חקיקה ייחודית</h3>
            <p>בתביעות אלו, מעבר לרשלנות כללית לפי דיני הנזיקין, קיימות חובות נוספות מכוח חקיקה ייחודית:</p>
            <ul style={{ marginTop: 12, marginBottom: 0 }}>
              <li><strong>תקנות הספנות (כלי שיט קטנים) 1998</strong></li>
              <li><strong>תקנות הנמלים (בטיחות בשיט) 1982</strong></li>
            </ul>
          </div>

          <div className="reveal">
            <h2>מיקום התאונה — חשיבות משפטית</h2>
            <p>מיקום התאונה עשוי להשפיע מהותית על שאלת האחריות. לפי <strong>תקנה 68 לתקנות הנמלים (בטיחות בשיט) 1983</strong>, אסור להפעיל סירה ממונעת במרחק של פחות מ-300 מטר מהחוף.</p>
            <p>בעת גרירת גלגל (טיוב), סקי מים, בננה, או ווייק בורד על ידי סירה או ג'ט סקי, חובה למנות <strong>"צופה"</strong> שיישאר בכלי השיט בנוסף למפעיל. הפרת חובה זו מהווה רשלנות המבססת תביעה.</p>
          </div>

          <div className="info-card reveal">
            <h3>&#128222; נפגעתם בתאונה ימית? פנו אלינו</h3>
            <p>ייעוץ ראשוני ללא עלות וללא התחייבות. <a href="tel:049001056" style={{ color: 'var(--teal)', fontWeight: 700 }}>04-9001056</a> | <a href="https://wa.me/9720522611850" style={{ color: 'var(--teal)', fontWeight: 700 }} target="_blank" rel="noopener noreferrer">052-2611850 (וואטסאפ)</a></p>
          </div>

        </div>
      </section>

      <CTASection title="נפגעתם בתאונה ימית?" subtitle="ייעוץ ראשוני ללא עלות וללא התחייבות — פנו אלינו היום." />
    </>
  )
}
