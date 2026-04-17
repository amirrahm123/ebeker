import useRevealOnScroll from '../hooks/useRevealOnScroll'
import PageBanner from '../components/PageBanner'
import CTASection from '../components/CTASection'

export default function AccessibilityStatement() {
  useRevealOnScroll()

  return (
    <>
      <PageBanner
        crumbs={[{ label: 'הצהרת נגישות' }]}
        title="הצהרת"
        accent="נגישות"
      />

      <section className="content-section">
        <div className="content-container" dir="rtl">
          <div className="reveal">
            <h2>מבוא</h2>
            <p>חברת עורכי הדין ערן בקר (להלן: "המשרד") פועלת לקידום הנגישות של האתר שלנו, מתוך הבנה של חשיבות הנגישות לאנשים עם מוגבלויות. האתר שלנו נבנה ומתוחזק מתוך מחויבות להתאמתו לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג-2013, ועל פי תקן ישראלי ת"י 5568 ברמה AA.</p>
          </div>

          <div className="reveal">
            <h2>התאמות הנגישות באתר</h2>
            <p>האתר מספק את האמצעים הבאים לצורך נגישות:</p>
            <ul>
              <li>תפריט נגישות המאפשר הגדלת טקסט עד 150%</li>
              <li>התאמת ניגודיות לרבות מצב ניגודיות גבוהה, גווני אפור ומצב הפוך</li>
              <li>הדגשת קישורים לטובת זיהוי קל</li>
              <li>מעבר לפונט קריא (Arial / Verdana) להקלה על אנשים עם דיסלקציה</li>
              <li>השבתת אנימציות עבור משתמשים הרגישים לתנועה</li>
              <li>הגדלת סמן העכבר</li>
              <li>תמיכה בניווט באמצעות מקלדת</li>
              <li>שימוש בתגי HTML סמנטיים לצורך קוראי מסך</li>
            </ul>
          </div>

          <div className="reveal">
            <h2>פטור / חריגים</h2>
            <p>לצד המאמצים המתמשכים להנגשת כלל התכנים, יתכנו בעמודים מסוימים רכיבים שטרם הונגשו במלואם, וזאת בשל היקף התכנים והתכיפות של העדכונים. המשרד פועל לתיקון ליקויים אלו באופן שוטף.</p>
          </div>

          <div className="highlight-box reveal">
            <h3>יצירת קשר בנושא נגישות</h3>
            <p>בכל שאלה, בעיה או הצעה בנוגע לנגישות האתר, ניתן לפנות לרכז הנגישות של המשרד:</p>
            <p><strong>שם הרכז/ת:</strong> עו"ד ערן בקר</p>
            <p><strong>טלפון:</strong> <a href="tel:049001056">04-9001056</a></p>
            <p><strong>מייל:</strong> <a href="mailto:office@ebeker.co.il">office@ebeker.co.il</a></p>
            <p><strong>כתובת:</strong> הגעתון 26, נהריה</p>
            <p>נשתדל לטפל בכל פנייה בהקדם האפשרי.</p>
          </div>

          <div className="reveal">
            <p><strong>תאריך עדכון אחרון:</strong> אפריל 2026</p>
          </div>
        </div>
      </section>

      <CTASection title="רוצים לדבר עם עורך דין?" subtitle="ייעוץ ראשוני חינם — ללא עלות וללא התחייבות" />
    </>
  )
}
