import { Link } from 'react-router-dom'
import useRevealOnScroll from '../hooks/useRevealOnScroll'
import Breadcrumb from '../components/Breadcrumb'
import CTASection from '../components/CTASection'

export default function Insurance() {
  useRevealOnScroll()

  return (
    <>
      <Breadcrumb items={[
        { label: 'תחומי עיסוק', to: '/#areas' },
        { label: 'ביטוח' }
      ]} />

      <section className="hero">
        <div className="hero-inner">
          <p className="hero-eyebrow">תחום עיסוק &middot; דיני ביטוח</p>
          <h1>דיני<span className="accent">ביטוח</span></h1>
          <p className="hero-sub">חברת הביטוח מסרבת לשלם? אנחנו יודעים איך להילחם בשבילכם ולמצות את מה שמגיע לכם.</p>
          <div className="hero-btns">
            <Link to="/#contact" className="btn-teal">קבעו ייעוץ חינם &#8592;</Link>
            <a href="tel:049001056" className="btn-outline-white">&#128222; 04-9001056</a>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="content-container">

          <div className="reveal">
            <h2>תביעות מול חברות ביטוח</h2>
            <p>חברות הביטוח עובדות עם עורכי דין מנוסים שמטרתם להקטין את הפיצוי שיקבלו מבוטחים. כדי להתמודד בצורה שווה — אתם זקוקים לעורך דין שיש לו ניסיון מול חברות הביטוח ויודע את כל הטריקים שלהן.</p>
            <p>משרד ערן בקר מייצג תובעים בתחום דיני הביטוח עם שנות ניסיון מול כל חברות הביטוח המובילות בישראל.</p>
          </div>

          <div className="reveal">
            <h2>סוגי תביעות הביטוח שאנו מטפלים בהן</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 16, margin: '20px 0 40px' }} className="reveal">
            <div className="info-card">
              <h3>&#128663; ביטוח רכב</h3>
              <p>תביעות בגין תאונות דרכים מול חברות הביטוח — נזקי גוף ואובדן כושר עבודה.</p>
            </div>
            <div className="info-card">
              <h3>&#128188; אובדן כושר עבודה</h3>
              <p>תביעות לקבלת גמלת אובדן כושר עבודה מפוליסות ביטוח חיים ומניות.</p>
            </div>
            <div className="info-card">
              <h3>&#127973; ביטוח בריאות</h3>
              <p>תביעות מפוליסות ביטוח בריאות, כולל ניתוחים, תרופות וטיפולים.</p>
            </div>
            <div className="info-card">
              <h3>&#9855; ביטוח נכות</h3>
              <p>תביעות לקבלת פיצוי בגין נכות מתאונה או ממחלה על פי פוליסות הביטוח.</p>
            </div>
            <div className="info-card">
              <h3>&#127968; ביטוח רכוש</h3>
              <p>תביעות בגין נזק לרכוש, גניבה, שריפה וכוח עליון.</p>
            </div>
            <div className="info-card">
              <h3>&#128176; ביטוח חיים</h3>
              <p>תביעות תשלום ביטוח חיים על ידי מוטבים בגין פטירת המבוטח.</p>
            </div>
          </div>

          <div className="highlight-box reveal">
            <h3>&#9878;&#65039; מתי חברת הביטוח יכולה לסרב?</h3>
            <p>חברת הביטוח רשאית לסרב לשלם רק במקרים שהוגדרו מראש בפוליסה. סירוב שלא מוצדק על פי החוק מהווה הפרת חוזה — ועורך דין מנוסה יוכל לתבוע את מלוא הסכום בצירוף ריבית ופיצויים.</p>
          </div>

          <div className="reveal">
            <h2>כיצד אנחנו פועלים?</h2>
            <ul>
              <li>בחינת הפוליסה וזכאות על פי תנאיה</li>
              <li>הגשת תביעה מסודרת ומתועדת לחברת הביטוח</li>
              <li>ניהול משא ומתן מקצועי לקבלת הסכום המגיע</li>
              <li>הגשת תביעה משפטית בבית המשפט במידת הצורך</li>
              <li>מינוי מומחים רפואיים ואקטואריים לביסוס התביעה</li>
            </ul>
          </div>

          <div className="info-card reveal">
            <h3>&#128222; ייעוץ ראשוני חינם</h3>
            <p>חברת הביטוח מסרבת לשלם? פנו אלינו ללא עלות וללא התחייבות. <a href="tel:049001056" style={{ color: 'var(--teal)', fontWeight: 700 }}>04-9001056</a></p>
          </div>

        </div>
      </section>

      <CTASection title="חברת הביטוח לא משלמת?" subtitle="ייעוץ ראשוני ללא עלות וללא התחייבות — פנו אלינו היום" />
    </>
  )
}
