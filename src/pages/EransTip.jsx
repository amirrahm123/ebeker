import { Link } from 'react-router-dom'
import useRevealOnScroll from '../hooks/useRevealOnScroll'
import Breadcrumb from '../components/Breadcrumb'
import CTASection from '../components/CTASection'

export default function EransTip() {
  useRevealOnScroll()

  return (
    <>
      <Breadcrumb items={[{ label: 'הטיפ של ערן' }]} />

      <section className="hero">
        <div className="hero-inner">
          <p className="hero-eyebrow">הטיפ של ערן</p>
          <h1>טיפים משפטיים<span className="accent">מעו״ד ערן בקר</span></h1>
          <p className="hero-sub">תובנות, עצות וטיפים מקצועיים מעולם המשפט — ישירות מהניסיון של למעלה מ-21 שנה בתחום הנזיקין והביטוח.</p>
          <div className="hero-btns">
            <Link to="/#contact" className="btn-teal">קבעו ייעוץ חינם &#8592;</Link>
            <a href="tel:049001056" className="btn-outline-white">&#128222; 04-9001056</a>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="content-container">
          <div className="reveal">
            <h2>חזרה לשגרה בוועדות הרפואיות בעידן הפוסט קורונה</h2>
            <p>עו״ד ערן בקר מראיין בנושא חזרה לשגרה בוועדות הרפואיות בעידן הפוסט קורונה — מה השתנה, מה חשוב לדעת, ואיך להתכונן בצורה הטובה ביותר.</p>
          </div>

          <div className="reveal" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: 12, margin: '32px 0' }}>
            <iframe
              src="https://www.youtube.com/embed/YFQZ1wW_cl0"
              title='עו"ד ערן בקר מראיין בנושא חזרה לשגרה בוועדות הרפואיות בעידן הפוסט קורונה'
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', borderRadius: 12 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="highlight-box reveal">
            <h3>למה חשוב להכיר את הנושא?</h3>
            <p>ועדות רפואיות הן שלב מכריע בקביעת שיעור הנכות ובמיצוי הזכויות שלכם. הכנה נכונה לוועדה יכולה לעשות הבדל משמעותי בתוצאה הסופית. עו״ד ערן בקר מביא ניסיון עשיר בליווי נפגעים בהליכים אלה ומשתף מהידע שצבר לאורך השנים.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: 20, margin: '32px 0' }} className="reveal">
            <div className="info-card">
              <h3>&#127891; הכנה לוועדה רפואית</h3>
              <p>ליווי מקצועי והכנה מקיפה לקראת התייצבות בפני ועדה רפואית — כדי למצות את מלוא הזכויות.</p>
            </div>
            <div className="info-card">
              <h3>&#128203; מסמכים רפואיים</h3>
              <p>ריכוז ואיסוף כל המסמכים הרפואיים הנדרשים להצגה בפני הוועדה בצורה מסודרת ומקצועית.</p>
            </div>
            <div className="info-card">
              <h3>&#9878;&#65039; ייצוג משפטי</h3>
              <p>ייצוג מלא בפני הוועדה הרפואית, כולל טיעון משפטי ורפואי מבוסס ניסיון של שנים.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="רוצים לשמוע עוד טיפים?" subtitle="פנו אלינו לייעוץ ראשוני ללא עלות — נשמח לעזור." />
    </>
  )
}
