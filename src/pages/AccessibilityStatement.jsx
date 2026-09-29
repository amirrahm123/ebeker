import useRevealOnScroll from '../hooks/useRevealOnScroll'
import PageBanner from '../components/PageBanner'
import CTASection from '../components/CTASection'
import { site } from '../config/site'

/** Date of the last manual accessibility check. Update when re-checked. */
const LAST_CHECKED = 'ספטמבר 2026'

const ADJUSTMENTS = [
  'תפריט נגישות (הכפתור הכחול): הגדלת טקסט עד 150%, ניגודיות גבוהה, ניגודיות הפוכה, גווני אפור (ניתנים לשילוב יחד), הדגשת קישורים, מעבר לפונט קריא, עצירת אנימציות והגדלת סמן העכבר — כל ההגדרות נשמרות בין ביקורים',
  'קישור דילוג לתוכן המרכזי בתחילת כל עמוד, עבור משתמשי מקלדת וקוראי מסך',
  'תמיכה מלאה בניווט מקלדת, כולל טבעת מיקוד (focus) ברורה בכל רכיבי האתר',
  'העברת מיקוד אוטומטית לתוכן העמוד עם כל מעבר דף, כך שקורא המסך מכריז על העמוד החדש',
  'כיבוד הגדרת "הפחתת תנועה" של מערכת ההפעלה — אנימציות, מעברים וגלילה חלקה מושבתים אוטומטית',
  'שימוש בתגי HTML סמנטיים (כותרות מדורגות, main, header, nav) לצורך קוראי מסך',
]

const LIMITATIONS = [
  'חלק מסרטוני הווידאו באתר עדיין ללא כתוביות. כתוביות מתווספות בהדרגה — ראו הערה בקוד המקור לגבי התהליך',
  'מכתבי המלצה סרוקים מוצגים כתמונות בעמוד "ממליצים", ללא טקסט חלופי מלא לתוכן המכתב',
  'רכיבים מוטמעים של צדדים שלישיים — סרטוני YouTube ומפת Google — כפופים לנגישות הפלטפורמות עצמן ולא תמיד עומדים באותו תקן',
  'קובצי השמע (MP3) בעמוד "ראיונות ברדיו" מתארחים כרגע אצל ספק חיצוני (Wix) ללא תמלול',
]

// TODO: confirm with office — physical accessibility details for הגעתון 26, נהריה
const PHYSICAL_ACCESS = [
  'כניסה לבניין: TODO — לאמת נגישות לכיסא גלגלים בכניסה הראשית',
  'מעלית: TODO — לאמת קיום מעלית וממדיה',
  'חניה נגישה: TODO — לאמת קיום מקום חניה נגיש בסמוך למשרד',
  'שירותים נגישים: TODO — לאמת נגישות שירותים בקומת המשרד',
]

// TODO: confirm actual testing before publishing
const TESTED_WITH = [
  'Chrome + NVDA (Windows) — TODO: לאמת בפועל',
  'Safari + VoiceOver (iOS) — TODO: לאמת בפועל',
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
            <p>{site.legalName} (להלן: "המשרד") פועלת לקידום הנגישות של האתר שלנו, מתוך הבנה של חשיבות הנגישות לאנשים עם מוגבלויות. האתר נבנה ומתוחזק מתוך מחויבות לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג-2013, בהתאם לתקן הישראלי ת"י 5568 (בהתבסס על WCAG 2.0) ברמה AA. האתר עומד ברוב דרישות התקן, והמשרד ממשיך לפעול לשיפור הנגישות באופן שוטף.</p>
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

          <div className="reveal">
            <h2>נגישות פיזית — משרדי החברה</h2>
            <p>משרדי {site.shortName} ממוקמים ב{site.address.full}. פרטי הנגישות הפיזית:</p>
            <ul>
              {PHYSICAL_ACCESS.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <p>למי שמעדיף שלא להגיע פיזית, המשרד מציע חלופה של פגישת ייעוץ טלפונית או מקוונת (וידאו) — ניתן לתאם באמצעות פרטי הקשר בהמשך.</p>
          </div>

          <div className="reveal">
            <h2>דפדפנים וטכנולוגיות מסייעות שנבדקו</h2>
            <ul>
              {TESTED_WITH.map((item, i) => <li key={i}>{item}</li>)}
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
            <p>אנו מתחייבים להשיב לכל פנייה בנושא נגישות בתוך עד {site.accessibility.responseDays} ימי עסקים.</p>
          </div>

          <div className="reveal">
            <p><strong>תאריך הבדיקה האחרונה:</strong> {LAST_CHECKED}</p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
