import useRevealOnScroll from '../hooks/useRevealOnScroll'
import PageBanner from '../components/PageBanner'
import CTASection from '../components/CTASection'
import { site } from '../config/site'

/*
 * Facts still needed from the office before these can be published (none are
 * rendered on the site until confirmed):
 *   - physical accessibility of הגעתון 26, נהריה: building entrance, elevator,
 *     accessible parking, accessible toilets
 *   - which browsers / screen readers the site was actually tested with
 *   - date of the last manual accessibility check
 *   - whether remote (phone / video) consultation is offered as an alternative
 *   - the committed response time for accessibility requests, and who the
 *     accessibility coordinator is (site.accessibility in src/config/site.js)
 */

const ADJUSTMENTS = [
  'תפריט נגישות (הכפתור הכחול): הגדלת טקסט עד 150%, ניגודיות גבוהה, ניגודיות הפוכה, גווני אפור (ניתנים לשילוב יחד), הדגשת קישורים, מעבר לפונט קריא, עצירת אנימציות והגדלת סמן העכבר — כל ההגדרות נשמרות בין ביקורים',
  'קישור דילוג לתוכן המרכזי בתחילת כל עמוד, עבור משתמשי מקלדת וקוראי מסך',
  'אפשרות לניווט באמצעות מקלדת, עם סימון מיקוד (focus) ברור ברכיבי האתר',
  'העברת מיקוד אוטומטית לתוכן העמוד עם כל מעבר דף, כך שקורא המסך מכריז על העמוד החדש',
  'כיבוד הגדרת "הפחתת תנועה" של מערכת ההפעלה — אנימציות, מעברים וגלילה חלקה מושבתים אוטומטית',
  'שימוש בתגי HTML סמנטיים (כותרות מדורגות, main, header, nav) לצורך קוראי מסך',
]

const LIMITATIONS = [
  'חלק מסרטוני הווידאו באתר עדיין ללא כתוביות. כתוביות מתווספות בהדרגה',
  'מכתבי המלצה סרוקים מוצגים כתמונות בעמוד "ממליצים", ללא טקסט חלופי מלא לתוכן המכתב',
  'רכיבים מוטמעים של צדדים שלישיים — סרטוני YouTube ומפת Google — כפופים לנגישות הפלטפורמות עצמן ולא תמיד עומדים באותו תקן',
  'קובצי השמע (MP3) בעמוד "ראיונות ברדיו" מתארחים כרגע אצל ספק חיצוני (Wix) ללא תמלול',
]

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
            <p>{site.legalName} (להלן: "המשרד") פועלת לקידום הנגישות של האתר שלנו, מתוך הבנה של חשיבות הנגישות לאנשים עם מוגבלויות. המשרד פועל להתאים את האתר להוראות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג-2013, ולתקן הישראלי ת"י 5568 (בהתבסס על WCAG 2.0) ברמה AA, וממשיך לפעול לשיפור הנגישות באופן שוטף.</p>
          </div>

          <div className="reveal">
            <h2>התאמות הנגישות באתר</h2>
            <ul>
              {ADJUSTMENTS.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>

          <div className="reveal">
            <h2>מגבלות ידועות</h2>
            <p>חרף המאמצים המתמשכים, קיימות מגבלות ידועות שטרם נפתרו במלואן:</p>
            <ul>
              {LIMITATIONS.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>

          <div className="highlight-box reveal">
            <h3>יצירת קשר בנושא נגישות</h3>
            <p>בכל שאלה, בעיה או הצעה בנוגע לנגישות האתר או המשרד, ניתן לפנות לרכז/ת הנגישות:</p>
            <p><strong>שם הרכז/ת:</strong> {site.accessibility.coordinatorName} ({site.accessibility.coordinatorTitle})</p>
            <p><strong>טלפון:</strong> <a href={site.accessibility.phone.href}>{site.accessibility.phone.display}</a></p>
            <p><strong>וואטסאפ:</strong> <a href={`https://wa.me/${site.phones.whatsapp.number}`} target="_blank" rel="noopener noreferrer">{site.phones.whatsapp.display}</a></p>
            <p><strong>פקס:</strong> {site.phones.fax.display}</p>
            <p><strong>מייל:</strong> <a href={`mailto:${site.accessibility.email}`}>{site.accessibility.email}</a></p>
            <p><strong>כתובת:</strong> {site.address.full}</p>
            <p>נשיב לכל פנייה בנושא נגישות בהקדם האפשרי.</p>
          </div>

        </div>
      </section>

      <CTASection />
    </>
  )
}
