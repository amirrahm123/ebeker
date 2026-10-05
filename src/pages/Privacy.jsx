// DRAFT – requires review and approval by עו"ד ערן בקר before publishing.
// Written to match how the site actually works (Sept 2026) and the Privacy
// Protection Law 1981 as amended by Amendment 13 (in force since 14.8.2025).
// Facts still needed from the office (nothing below is rendered as a placeholder;
// until they are supplied the page uses neutral wording instead of invented figures):
//   1. exact legal entity name + registration number (ח.פ.) -> CONTROLLER
//   2. how long non-client inquiries are really kept -> RETENTION.notClients
//   3. the office's email provider (Google Workspace / Microsoft 365 / other) -> RECIPIENTS
//   4. the data-retention setting in GA4 admin -> RETENTION.analytics
//   5. whether a privacy contact other than עו"ד ערן בקר should be named
//
// To update: edit the data arrays below. The page renders from them, so no
// JSX changes are needed when a service, cookie or retention period changes.
import { Link } from 'react-router-dom'
import useRevealOnScroll from '../hooks/useRevealOnScroll'
import PageBanner from '../components/PageBanner'
import CTASection from '../components/CTASection'
import { site } from '../config/site'

/** Update whenever the policy text changes. */
const LAST_UPDATED = 'ספטמבר 2026'

/**
 * The database controller (בעל השליטה במאגר) as required by section 11.
 * The registration number (ח.פ.) is shown only once it is filled in below.
 */
const CONTROLLER = {
  name: site.legalName,
  registration: '', // ח.פ. / מספר רישיון — omitted from the page while empty
  contactPerson: 'עו"ד ערן בקר',
}

/** How long data is kept. Wording is deliberately generic until the office confirms exact periods. */
const RETENTION = {
  notClients: 'למשך הזמן הנדרש למטרות המפורטות לעיל',
  clients: 'כחלק מתיק הלקוח, למשך התקופה הנדרשת לפי דין ולפי כללי האתיקה החלים על עורכי דין',
  logs: 'בהתאם למדיניות ספק האחסון',
  analytics: 'בהתאם להגדרות השמירה בחשבון Google Analytics של המשרד',
}

/** What a visitor gives us directly. */
const PROVIDED_DATA = [
  'בטופס יצירת הקשר: שם פרטי, שם משפחה, מספר טלפון, כתובת דוא"ל (לא חובה) ותוכן ההודעה.',
  'אם תפנו אלינו בוואטסאפ, בטלפון, בפקס או בדוא"ל: הפרטים והתוכן שתבחרו למסור בערוץ זה.',
]

/** What is collected automatically when browsing. */
const AUTOMATIC_DATA = [
  'נתונים טכניים שכל שרת אינטרנט רושם: כתובת IP, סוג הדפדפן ומערכת ההפעלה, מועד הביקור והעמודים שנטענו. הנתונים נרשמים ביומני השרת של ספק האחסון (Vercel) לצורכי תפעול ואבטחה.',
  'נתוני שימוש סטטיסטיים (Google Analytics), ורק אם אישרתם זאת בבאנר העוגיות: עמודים שנצפו, משך הביקור, סוג המכשיר ומיקום גאוגרפי כללי. המשרד אינו משתמש בנתונים אלה כדי לזהות אתכם באופן אישי.',
  'בעת טעינת גופנים, מפה או סרטון משרתי Google, הדפדפן שלכם פונה לשרתים אלה, ו-Google מקבלת את כתובת ה-IP שלכם כחלק מהפנייה.',
]

/** Why the data is used. */
const PURPOSES = [
  'לחזור אליכם, לבחון את פנייתכם ולתאם פגישת ייעוץ ראשונית.',
  'לבחון את היתכנות הטיפול המשפטי בעניינכם ולבדוק ניגוד עניינים, כנדרש מעורכי דין.',
  'אם תבחרו להיות לקוחות המשרד: לנהל את התיק ולקיים את חובות המשרד על פי דין.',
  'לתפעל את האתר, לאבטח אותו ולשפר אותו על סמך נתוני שימוש מצרפיים.',
  'לעמוד בחובות החלות על המשרד על פי דין, ולהגן על זכויותיו המשפטיות במקרה הצורך.',
]

/**
 * Every third party that receives data, as section 11 requires ("to whom the
 * data will be delivered and for what purpose"). Add a row here if a new
 * service is connected to the site.
 */
const RECIPIENTS = [
  {
    name: 'EmailJS',
    where: 'ארצות הברית',
    what: 'תוכן טופס יצירת הקשר',
    why: 'העברת הפנייה בדוא"ל לתיבת המשרד. השירות עשוי לשמור עותק של ההודעה לתקופה מוגבלת בהתאם למדיניותו.',
  },
  {
    // Generic until the office names its mail provider.
    name: 'ספק הדוא"ל של המשרד',
    where: 'בהתאם לספק',
    what: 'הפנייה שהתקבלה בדוא"ל',
    why: `אחסון הפנייה בתיבת ${site.email}, שאליה ניגש צוות המשרד בלבד.`,
  },
  {
    name: 'Vercel',
    where: 'ארצות הברית (שרתים גלובליים)',
    what: 'נתונים טכניים (כתובת IP, דפדפן, מועד)',
    why: 'אחסון האתר והגשתו לגולשים, ורישום טכני לצורכי תפעול ואבטחה.',
  },
  {
    name: 'Google Analytics',
    where: 'ארצות הברית',
    what: 'נתוני שימוש סטטיסטיים. אינו מקבל את תוכן הטופס',
    why: 'מדידת השימוש באתר. פועל רק לאחר אישורכם בבאנר העוגיות.',
  },
  {
    name: 'Google (גופנים, מפות, YouTube)',
    where: 'ארצות הברית',
    what: 'כתובת IP ונתוני דפדפן',
    why: 'הצגת הגופנים באתר, מפת המשרד וסרטונים מוטמעים.',
  },
  {
    name: 'WhatsApp / Meta',
    where: 'ארצות הברית ומדינות נוספות',
    what: 'מה שתבחרו לכתוב בוואטסאפ',
    why: 'רק אם תבחרו לפנות אלינו בוואטסאפ. ההתכתבות כפופה גם למדיניות הפרטיות של WhatsApp.',
  },
]

/** Cookies and local storage. Keep in sync with src/lib/consent.js and analytics.js. */
const COOKIES = [
  {
    name: '_ga, _ga_*',
    owner: 'Google Analytics',
    purpose: 'סטטיסטיקת שימוש באתר',
    when: 'רק לאחר לחיצה על "אישור" בבאנר העוגיות',
  },
  {
    name: 'עוגיות של Google Maps / YouTube',
    owner: 'Google',
    purpose: 'הצגת מפת המשרד וסרטונים',
    when: 'המפה עשויה להציב עוגיות בעת טעינתה. סרטוני YouTube נטענים במצב פרטיות מורחב, ועוגיות נוצרות רק אם תפעילו סרטון',
  },
  {
    name: 'ebeker-consent (אחסון מקומי)',
    owner: 'האתר',
    purpose: 'זכירת בחירתכם בבאנר העוגיות',
    when: 'לאחר בחירה בבאנר. נשמר בדפדפן שלכם בלבד',
  },
  {
    name: 'ebeker-a11y (אחסון מקומי)',
    owner: 'האתר',
    purpose: 'זכירת הגדרות הנגישות שבחרתם',
    when: 'לאחר שינוי הגדרה בתפריט הנגישות. נשמר בדפדפן שלכם בלבד',
  },
]

const SECURITY = [
  'האתר מוגש בחיבור מוצפן (HTTPS) בלבד.',
  'המשרד אינו מחזיק מאגר נתונים בשרתי האתר. הפניות נשלחות ישירות לתיבת הדוא"ל של המשרד.',
  'הגישה לפניות מוגבלת לצוות המשרד, והטיפול בהן כפוף לחובת הסודיות החלה על עורכי דין ועל עובדיהם.',
  'השירותים החיצוניים שבהם האתר משתמש הם ספקים מוכרים הנוקטים אמצעי אבטחה מקובלים.',
]

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

          <div className="highlight-box reveal">
            <h3>בקצרה</h3>
            <ul>
              <li>מסירת פרטים באתר היא לפי רצונכם. אין חובה חוקית למסור אותם.</li>
              <li>הפרטים שתמסרו בטופס משמשים רק כדי לחזור אליכם ולבחון את פנייתכם. הם לא נמכרים ולא משמשים לפרסום.</li>
              <li>מומלץ לא לפרט בטופס מידע רפואי מלא. נקבל אותו בהמשך, לפי הצורך.</li>
              <li>כלי הסטטיסטיקה פועל רק אם אישרתם עוגיות, ואפשר לשנות את הבחירה בכל עת.</li>
              <li>אתם רשאים לעיין במידע עליכם ולבקש לתקנו או למחקו.</li>
            </ul>
          </div>

          <div className="reveal">
            <h2>1. מי אנחנו ועל מה חלה מדיניות זו</h2>
            <p>
              האתר מופעל על ידי {CONTROLLER.name}
              {CONTROLLER.registration ? ` (${CONTROLLER.registration})` : ''}, {site.address.full} (להלן: &quot;המשרד&quot;).
              המשרד הוא בעל השליטה במידע שנאסף באתר, כמשמעות המונח בחוק הגנת הפרטיות, התשמ&quot;א-1981.
            </p>
            <p>
              מדיניות זו מסבירה אילו פרטים נאספים באתר, לאיזו מטרה, למי הם מועברים, כמה זמן הם נשמרים ומהן זכויותיכם.
              היא חלה על השימוש באתר ועל פניות שנשלחות דרכו. היא נכתבה בהתאם לחוק הגנת הפרטיות ולתקנות שהותקנו מכוחו,
              לרבות תיקון מס&apos; 13 לחוק.
            </p>
          </div>

          <div className="reveal">
            <h2>2. אילו פרטים נאספים</h2>
            <h3>פרטים שאתם מוסרים</h3>
            <ul>{PROVIDED_DATA.map((t, i) => <li key={i}>{t}</li>)}</ul>
            <h3>פרטים שנאספים אוטומטית</h3>
            <ul>{AUTOMATIC_DATA.map((t, i) => <li key={i}>{t}</li>)}</ul>
            <p>האתר אינו דורש הרשמה, אינו מפעיל אזור אישי ואינו מבקש מספרי תעודת זהות או פרטי תשלום.</p>
          </div>

          <div className="reveal">
            <h2>3. מידע רפואי ומידע רגיש</h2>
            <p>
              המשרד עוסק בנזקי גוף, רשלנות רפואית וביטוח לאומי. לכן ייתכן שתרצו לספר בפנייה על מצבכם הרפואי,
              על פציעה או על אירוע שבו נפגעתם. מידע רפואי הוא &quot;מידע בעל רגישות מיוחדת&quot; לפי החוק.
            </p>
            <p>
              <strong>בשלב הפנייה הראשונית אין צורך לפרט מידע רפואי מלא.</strong> מספיקים תיאור קצר ופרטי התקשרות.
              המשרד יבקש מסמכים רפואיים רק אם הדבר יידרש לבחינת עניינכם, ויקבל אותם בדרך שתתואם אתכם.
              אם תבחרו לכלול מידע רגיש בפנייה, המשרד יתייחס אליו בסודיות ויעשה בו שימוש רק למטרות המפורטות במדיניות זו.
            </p>
            <p>אם אתם פונים בעניינו של אדם אחר, למשל קטין, בן משפחה או מנוח, אנא מסרו רק את המידע הנחוץ לפנייה הראשונית.</p>
          </div>

          <div className="reveal">
            <h2>4. האם חובה למסור את הפרטים</h2>
            <p>
              אין חובה חוקית למסור פרטים באתר, ומסירתם תלויה ברצונכם ובהסכמתכם.
              עם זאת, בלי שם ומספר טלפון לא נוכל לחזור אליכם בעקבות פנייה בטופס.
              אם אינכם מעוניינים למסור פרטים באתר, תוכלו לפנות למשרד ישירות בטלפון {site.phones.office.display} או להגיע למשרד.
            </p>
          </div>

          <div className="reveal">
            <h2>5. לאילו מטרות משמש המידע</h2>
            <ul>{PURPOSES.map((t, i) => <li key={i}>{t}</li>)}</ul>
            <p>
              המשרד לא ימכור את המידע, לא ישכיר אותו ולא ישתמש בו לדיוור שיווקי או לפרסום.
              אם יבקש בעתיד לשלוח אליכם דברי פרסומת, יעשה זאת רק לאחר קבלת הסכמתכם המפורשת, כנדרש בסעיף 30א לחוק התקשורת (בזק ושידורים), התשמ&quot;ב-1982.
            </p>
          </div>

          <div className="reveal">
            <h2>6. למי מועבר המידע ולאיזו מטרה</h2>
            <p>כדי שהאתר יפעל, חלק מהמידע עובר דרך שירותים חיצוניים. אלה השירותים, מה כל אחד מהם מקבל, ולשם מה:</p>
            <ul>
              {RECIPIENTS.map((r) => (
                <li key={r.name}>
                  <strong>{r.name}</strong> ({r.where}): {r.what}. {r.why}
                </li>
              ))}
            </ul>
            <p>
              מעבר לכך, המשרד לא יעביר את המידע לצד שלישי, אלא אם הדבר נדרש על פי דין, לפי צו של בית משפט או רשות מוסמכת,
              או לשם טיפול בעניינכם בהסכמתכם (למשל העברת מסמכים למומחה רפואי שמונה בתיק).
            </p>
          </div>

          <div className="reveal">
            <h2>7. העברת מידע אל מחוץ לישראל</h2>
            <p>
              חלק מהשירותים המפורטים לעיל מאחסנים או מעבדים מידע בשרתים מחוץ לישראל, בעיקר בארצות הברית.
              ההעברה נעשית בהתאם לתקנות הגנת הפרטיות (העברת מידע אל מאגרי מידע שמחוץ לגבולות המדינה), התשס&quot;א-2001,
              לשירותים המחויבים לשמירה על המידע ולאבטחתו. בשליחת פנייה דרך האתר אתם מסכימים להעברה זו.
            </p>
          </div>

          <div className="reveal">
            <h2>8. סודיות ויחסי עורך דין-לקוח</h2>
            <p>
              המשרד מתייחס לכל פנייה בסודיות, בהתאם לחובות הסודיות החלות על עורכי דין.
              עם זאת, שליחת פנייה דרך האתר אינה יוצרת יחסי עורך דין-לקוח. יחסים כאלה נוצרים רק לאחר הסכמה מפורשת בין הצדדים.
              ראו גם את <Link to="/terms">תנאי השימוש</Link>.
            </p>
          </div>

          <div className="reveal">
            <h2>9. משך שמירת המידע</h2>
            <ul>
              <li><strong>פנייה שלא הובילה לייצוג:</strong> {RETENTION.notClients}, ולאחר מכן נמחקת.</li>
              <li><strong>פנייה שהובילה לפתיחת תיק:</strong> {RETENTION.clients}.</li>
              <li><strong>יומני שרת טכניים:</strong> {RETENTION.logs}.</li>
              <li><strong>נתוני Google Analytics:</strong> {RETENTION.analytics}.</li>
            </ul>
          </div>

          <div className="reveal">
            <h2>10. אבטחת מידע</h2>
            <ul>{SECURITY.map((t, i) => <li key={i}>{t}</li>)}</ul>
            <p>
              אף מערכת אינה חסינה לחלוטין, ולכן המשרד אינו יכול להבטיח הגנה מוחלטת מפני גישה בלתי מורשית.
              אם יתרחש אירוע אבטחה שיש לו השלכה על המידע שלכם, המשרד יפעל כנדרש בדין.
            </p>
          </div>

          <div className="reveal">
            <h2>11. עוגיות (Cookies) ואחסון מקומי</h2>
            <p>
              עוגיות הן קבצים קטנים שהדפדפן שומר במכשיר שלכם. באתר נעשה שימוש ברכיבים הבאים:
            </p>
            <ul>
              {COOKIES.map((c) => (
                <li key={c.name}>
                  <strong>{c.name}</strong> ({c.owner}): {c.purpose}. {c.when}.
                </li>
              ))}
            </ul>
            <p>
              בביקור הראשון יוצג לכם באנר שבו תוכלו לאשר או לדחות עוגיות סטטיסטיקה. האתר ממשיך לפעול במלואו גם אם דחיתם.
              אפשר לשנות את הבחירה בכל עת דרך הקישור &quot;הגדרות עוגיות&quot; בתחתית כל עמוד.
              אפשר גם למחוק עוגיות ואחסון מקומי דרך הגדרות הדפדפן.
            </p>
          </div>

          <div className="reveal">
            <h2>12. זכויותיכם</h2>
            <ul>
              <li><strong>זכות עיון:</strong> לעיין במידע שנשמר עליכם אצל המשרד (סעיף 13 לחוק).</li>
              <li><strong>זכות תיקון ומחיקה:</strong> לבקש לתקן או למחוק מידע שאינו נכון, שלם, ברור או מעודכן (סעיף 14 לחוק).</li>
              <li><strong>מחיקת פנייה:</strong> לבקש שנמחק פנייה ששלחתם דרך האתר, אם לא נפתח בעקבותיה תיק ואין חובה חוקית לשמור אותה.</li>
              <li><strong>ביטול הסכמה לעוגיות:</strong> בכל עת, כמתואר בסעיף 11.</li>
            </ul>
            <p>
              לבקשה, פנו אלינו באחת הדרכים שבסעיף 15. ייתכן שנבקש לאמת את זהותכם לפני שנמסור מידע, כדי להגן על פרטיותכם.
              המשרד ישיב לבקשה בתוך המועדים הקבועים בדין. אם אינכם מרוצים מהטיפול, רשאים אתם לפנות לרשות להגנת הפרטיות במשרד המשפטים.
            </p>
          </div>

          <div className="reveal">
            <h2>13. קטינים</h2>
            <p>
              האתר מיועד לבגירים. פנייה בעניינו של קטין, למשל בנושא תאונת תלמידים, תיעשה על ידי הורה או אפוטרופוס.
            </p>
          </div>

          <div className="reveal">
            <h2>14. שינויים במדיניות</h2>
            <p>
              המשרד רשאי לעדכן מדיניות זו מעת לעת, למשל כאשר יתווסף שירות חדש לאתר.
              הנוסח המחייב הוא זה שמופיע באתר, ותאריך העדכון האחרון מצוין בתחתית העמוד.
            </p>
          </div>

          <div className="highlight-box reveal">
            <h3>15. יצירת קשר בנושא פרטיות</h3>
            <p>לכל שאלה, בקשה או תלונה בנוגע למידע שלכם, פנו אל {CONTROLLER.contactPerson}:</p>
            <p><strong>טלפון:</strong> <a href={site.phones.office.href}>{site.phones.office.display}</a></p>
            <p><strong>דוא&quot;ל:</strong> <a href={`mailto:${site.email}`}>{site.email}</a></p>
            <p><strong>פקס:</strong> {site.phones.fax.display}</p>
            <p><strong>כתובת:</strong> {site.address.full}</p>
          </div>

          <div className="reveal">
            <p>ראו גם: <Link to="/terms">תנאי השימוש</Link> · <Link to="/accessibility">הצהרת הנגישות</Link></p>
            <p><strong>תאריך עדכון אחרון:</strong> {LAST_UPDATED}</p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
