import useRevealOnScroll from '../hooks/useRevealOnScroll'
import PageBanner from '../components/PageBanner'
import CTASection from '../components/CTASection'

export default function Wills() {
  useRevealOnScroll()

  return (
    <>
      <PageBanner
        crumbs={[
          { label: 'תחומי עיסוק', to: '/#areas' },
          { label: 'צוואות וירושות' }
        ]}
        title="צוואות"
        accent="וירושות"
      />

      <section className="content-section">
        <div className="content-container">

          <div className="reveal">
            <h2>האם אני צריך לערוך צוואה?</h2>
            <p>הצורך לעריכת צוואה תלוי ברצונות האדם ובשאלה מי יורשיו החוקיים מחד, ומי הם שרוצה שיירשו אותו ובאיזה חלקים מאידך.</p>
            <p>לא בכל מקרה יש צורך לעריכת צוואה. לעיתים הוראות הדין לגבי היורשים על פי דין (בהיעדר צוואה), כמו גם החלוקה ביניהם, מתאימות לרצונותיו של המוריש.</p>
            <p>אך כאשר יש רצון שונה מחלוקה שווה, יש בני משפחה שמורישים להם רכוש ספציפי, יש אדם שאינו יורש על פי דין שרוצים להוריש לו — אז צוואה היא הכרחית.</p>
          </div>

          <div className="reveal">
            <h2>צו ירושה וצו קיום צוואה</h2>
            <p>לאחר פטירת אדם, ועל מנת שיורשיו יממשו את חלקם וזכויותיהם כיורשים, יש לפנות לבית המשפט המוסמך לקבלת <strong>צו ירושה</strong> או <strong>צו קיום צוואה</strong>, לפי העניין.</p>
            <p>לעו"ד ערן בקר ניסיון משפטי של כ-21 שנים בעריכת צוואות, צווי ירושה וצווי קיום צוואה.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, margin: '28px 0 40px' }} className="reveal">
            <div className="info-card">
              <h3>&#128203; עריכת צוואה</h3>
              <p>עריכת צוואה מקצועית ומדויקת על פי רצון הלקוח, עם מניעת פגמים שיכולים לפסול אותה.</p>
            </div>
            <div className="info-card">
              <h3>&#128220; צו ירושה</h3>
              <p>הגשת בקשה לצו ירושה בהיעדר צוואה — על פי הוראות חוק הירושה.</p>
            </div>
            <div className="info-card">
              <h3>&#9878;&#65039; קיום צוואה</h3>
              <p>הגשת בקשה לצו קיום צוואה בבית המשפט לענייני משפחה.</p>
            </div>
            <div className="info-card">
              <h3>&#129309; סכסוכי ירושה</h3>
              <p>ייצוג בסכסוכים בין יורשים, לרבות ערעורים על צוואות ותביעות להכרה בזכויות ירושה.</p>
            </div>
          </div>

          <div className="highlight-box reveal">
            <p>לעו"ד ערן בקר ניסיון של כ-21 שנים בעריכת צוואות, צווי ירושה וצווי קיום צוואה. ניתן לקבוע שיחת ייעוץ ראשוני ללא עלות וללא התחייבות בטלפון <a href="tel:049001056" style={{ color: 'var(--teal)', fontWeight: 700 }}>04-9001056</a>.</p>
          </div>

        </div>
      </section>

      <CTASection title="יש לכם שאלה בנושא צוואה?" subtitle="ייעוץ ראשוני ללא עלות וללא התחייבות" />
    </>
  )
}
