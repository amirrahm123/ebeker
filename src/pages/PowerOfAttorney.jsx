import { Link } from 'react-router-dom'
import useRevealOnScroll from '../hooks/useRevealOnScroll'
import Breadcrumb from '../components/Breadcrumb'
import CTASection from '../components/CTASection'

export default function PowerOfAttorney() {
  useRevealOnScroll()

  return (
    <>
      <Breadcrumb items={[
        { label: 'תחומי עיסוק', to: '/#areas' },
        { label: 'ייפוי כוח מתמשך' }
      ]} />

      <section className="hero">
        <div className="hero-inner">
          <p className="hero-eyebrow">תחום עיסוק &middot; כשרות משפטית</p>
          <h1>ייפוי כוח מתמשך<span className="accent">וצו אפוטרופסות</span></h1>
          <p className="hero-sub">הכינו את העתיד — בחרו מי ידאג לאינטרסים שלכם כאשר לא תוכלו לעשות זאת בעצמכם.</p>
          <div className="hero-btns">
            <Link to="/#contact" className="btn-teal">קבעו ייעוץ חינם &#8592;</Link>
            <a href="tel:049001056" className="btn-outline-white">&#128222; 04-9001056</a>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="content-container">

          <div className="reveal">
            <h2>מה הוא ייפוי כוח מתמשך?</h2>
            <p>במהלך החיים עולה לעיתים הצורך למנות לאדם מישהו אחר שיטפל בענייניו — בין אם באופן קבוע ובין אם באופן זמני — מהטעם שהאדם אינו כשיר לקבל החלטות או לבצע פעולות בעצמו בשל מצבו הרפואי.</p>
            <p>ייפוי כוח מתמשך הוא מסמך משפטי שמאפשר לכם לקבוע מראש — בעודכם כשירים — מי יטפל בעניינייכם האישיים, הרפואיים והכספיים אם וכאשר לא תהיו מסוגלים לעשות זאת בעצמכם.</p>
          </div>

          <div className="reveal">
            <h2>מיהו מיופה הכוח?</h2>
            <p>מיופה הכוח יהיה בדרך כלל אדם קרוב — בן/בת זוג, ילד/ה או בן משפחה אחר, חבר/ה שסומכים עליו, או כל אדם שנבחר.</p>
            <p>יש לערוך את ייפוי הכוח על גבי <strong>טפסים מיוחדים</strong> ולחתום עליהם בפני עורך דין שעבר הכשרה מיוחדת עפ"י דין, ולאחר מכן להפקידו במשרדי האפוטרופוס הכללי.</p>
          </div>

          <div className="highlight-box reveal">
            <p>ייפוי כוח מתמשך יקנה <strong>רוגע וביטחון</strong>, בידיעה שנבחר האדם שידאג לאינטרסים האישיים, הבריאותיים והכלכליים — באופן שהממנה היה רוצה שהעניינים יתנהלו.</p>
          </div>

          <div className="reveal">
            <h2>צו מינוי אפוטרופסות</h2>
            <p>בקשה למינוי אפוטרופוס לאדם תוגש לבית המשפט המוסמך במקרה שהוא אינו מסוגל לדאוג לרכושו או גופו. בשונה מייפוי כוח מתמשך שנעשה מראש, צו אפוטרופסות ניתן על ידי בית המשפט כאשר אין ייפוי כוח בתוקף.</p>
            <p>לעו"ד ערן בקר ניסיון של כ-21 שנים בהצלחה בניהול בקשות למינוי אפוטרופוס מול בית המשפט המוסמך, וכן ניסיון בעריכת ייפוי כוח מתמשך מאז שאפשרות זו חוקקה בחוק.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, margin: '28px 0' }} className="reveal">
            <div className="info-card">
              <h3>&#128220; ייפוי כוח מתמשך</h3>
              <p>עריכה בהתאם לחוק, הכשרת מיופה הכוח, והפקדה באפוטרופוס הכללי.</p>
            </div>
            <div className="info-card">
              <h3>&#9878;&#65039; צו אפוטרופסות</h3>
              <p>הגשת בקשה למינוי אפוטרופוס בבית המשפט לענייני משפחה, כולל הכנת כל המסמכים.</p>
            </div>
            <div className="info-card">
              <h3>&#128260; החלפת אפוטרופוס</h3>
              <p>ייצוג בהליכים להחלפה, שינוי תנאים, או ביטול של אפוטרופסות קיימת.</p>
            </div>
          </div>

        </div>
      </section>

      <CTASection title="רוצים להכין ייפוי כוח מתמשך?" subtitle="ייעוץ ראשוני ללא עלות וללא התחייבות" />
    </>
  )
}
