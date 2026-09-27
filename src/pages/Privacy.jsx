// DRAFT – requires review by עו"ד ערן בקר before publishing
import { Link } from 'react-router-dom'
import useRevealOnScroll from '../hooks/useRevealOnScroll'
import PageBanner from '../components/PageBanner'
import CTASection from '../components/CTASection'
import { site } from '../config/site'

/** Update when the policy text changes. */
const LAST_UPDATED = 'ספטמבר 2026'

export default function Privacy() {
  useRevealOnScroll()

  return (
    <>
      <PageBanner
        crumbs={[{ label: 'מדיניות פרטיות ועוגיות' }]}
        title="מדיניות פרטיות"
        accent="ועוגיות"
      />

      <section className="content-section">
        <div className="content-container" dir="rtl">
          <div className="reveal">
            <h2>כללי</h2>
            <p>{site.legalName} (להלן: &quot;המשרד&quot;) מכבדת את פרטיות המבקרים באתר. מסמך זה מסביר אילו פרטים נאספים באתר, לאיזו מטרה, למי הם מועברים, כמה זמן הם נשמרים ומהן זכויותיכם. המדיניות כפופה לחוק הגנת הפרטיות, התשמ&quot;א-1981 ולתקנותיו.</p>
          </div>

          <div className="reveal">
            <h2>אילו פרטים נאספים</h2>
            <p>בטופס יצירת הקשר באתר אתם מתבקשים למסור שם פרטי ושם משפחה, מספר טלפון, כתובת דוא&quot;ל (לא חובה) והודעה חופשית. ההודעה עשויה לכלול, לפי בחירתכם, מידע על מצבכם הרפואי או על אירוע שבו נפגעתם. מידע כזה הוא &quot;מידע רגיש&quot; על פי חוק, ולכן אנו ממליצים לא לפרט מידע רפואי מלא בשלב הפנייה הראשונית — נוכל לקבל אותו בהמשך, בערוץ מאובטח ולפי הצורך.</p>
            <p>מלבד הטופס, האתר אינו דורש הרשמה ואינו אוסף פרטים מזהים באופן יזום.</p>
          </div>

          <div className="reveal">
            <h2>מטרת השימוש במידע</h2>
            <p>הפרטים שתמסרו בטופס ישמשו אך ורק כדי לחזור אליכם, לבחון את פנייתכם ולתאם ייעוץ ראשוני. המידע לא ישמש לדיוור שיווקי ללא הסכמתכם ולא יימכר לצדדים שלישיים.</p>
          </div>

          <div className="reveal">
            <h2>למי המידע מועבר</h2>
            <ul>
              <li><strong>EmailJS</strong> — שירות שליחת דוא&quot;ל שבסיסו בארצות הברית, המעביר את תוכן הטופס לתיבת הדוא&quot;ל של המשרד. המידע עובר דרך שרתי השירות בהתאם למדיניות הפרטיות שלו.</li>
              <li><strong>תיבת הדוא&quot;ל של המשרד</strong> ({site.email}) — שם נשמרת הפנייה ומטופלת על ידי צוות המשרד בלבד.</li>
              <li><strong>Google Analytics</strong> — כלי סטטיסטיקה של Google, הפועל <em>רק אם אישרתם עוגיות</em> בבאנר העוגיות. הוא אוסף נתוני גלישה אנונימיים (עמודים שנצפו, סוג דפדפן, מיקום כללי) ואינו מקבל את תוכן הטופס.</li>
            </ul>
            <p>מעבר לכך, המידע לא יימסר לגורם אחר אלא אם כן הדבר נדרש על פי דין או צו שיפוטי.</p>
          </div>

          <div className="reveal">
            <h2>משך שמירת המידע</h2>
            <p>פניות שלא הבשילו לייצוג נשמרות בתיבת הדוא&quot;ל של המשרד לתקופה של עד 24 חודשים ולאחר מכן נמחקות. פניות שהובילו לפתיחת תיק נשמרות כחלק מתיק הלקוח, בהתאם לכללי לשכת עורכי הדין ולחובות השמירה החלות על עורכי דין.</p>
          </div>

          <div className="reveal">
            <h2>זכויותיכם</h2>
            <p>על פי חוק הגנת הפרטיות, אתם זכאים לעיין במידע שנשמר עליכם, לבקש לתקנו אם אינו נכון או מעודכן, ולבקש את מחיקתו. לצורך כך פנו אלינו באחת הדרכים המפורטות בסעיף &quot;יצירת קשר&quot; ונשיב בתוך זמן סביר.</p>
          </div>

          <div className="reveal">
            <h2>עוגיות (Cookies) ואחסון מקומי</h2>
            <p>האתר משתמש ברכיבים הבאים בדפדפן שלכם:</p>
            <ul>
              <li><strong>עוגיות <code>_ga</code> ו-<code>_ga_*</code></strong> — של Google Analytics, לצורכי סטטיסטיקה בלבד. נוצרות <em>רק לאחר לחיצה על &quot;אישור&quot;</em> בבאנר העוגיות. ניתן לשנות את הבחירה בכל עת דרך הקישור &quot;הגדרות עוגיות&quot; בתחתית האתר.</li>
              <li><strong>סרטוני YouTube ומפת Google</strong> — מוטמעים באתר משרתי Google. סרטוני YouTube נטענים במצב פרטיות מורחב (youtube-nocookie), כך שעוגיות נוצרות רק אם תפעילו סרטון. מפת המשרד נטענת משרתי Google Maps ועשויה להציב עוגיות של Google.</li>
              <li><strong>רשומת <code>ebeker-a11y</code> באחסון המקומי</strong> — שומרת את הגדרות הנגישות שבחרתם (גודל טקסט, ניגודיות וכדומה) כדי שיישמרו בין ביקורים. הרשומה נשמרת בדפדפן שלכם בלבד ואינה נשלחת לאף גורם.</li>
              <li><strong>רשומת <code>ebeker-consent</code> באחסון המקומי</strong> — זוכרת את בחירתכם בבאנר העוגיות (אישור/דחייה) כדי שלא נציג אותו שוב.</li>
            </ul>
            <p>ניתן למחוק עוגיות ואחסון מקומי דרך הגדרות הדפדפן. האתר ימשיך לפעול גם ללא עוגיות.</p>
          </div>

          <div className="reveal">
            <h2>אבטחת מידע</h2>
            <p>האתר מוגש בחיבור מוצפן (HTTPS). עם זאת, העברת מידע באינטרנט אינה חסינה לחלוטין, ולכן מומלץ לא למסור בטופס מידע רגיש מעבר לנדרש.</p>
          </div>

          <div className="highlight-box reveal">
            <h3>יצירת קשר בנושא פרטיות</h3>
            <p>לכל שאלה או בקשה בנוגע למידע שלכם:</p>
            <p><strong>טלפון:</strong> <a href={site.phones.office.href}>{site.phones.office.display}</a></p>
            <p><strong>דוא&quot;ל:</strong> <a href={`mailto:${site.email}`}>{site.email}</a></p>
            <p><strong>כתובת:</strong> {site.address.full}</p>
          </div>

          <div className="reveal">
            <p>ראו גם: <Link to="/terms">תנאי השימוש</Link> · <Link to="/accessibility">הצהרת הנגישות</Link></p>
            <p><strong>תאריך עדכון אחרון:</strong> {LAST_UPDATED}</p>
          </div>
        </div>
      </section>

      <CTASection title="רוצים לדבר עם עורך דין?" subtitle="ייעוץ ראשוני חינם — ללא עלות וללא התחייבות" />
    </>
  )
}
