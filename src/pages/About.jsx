/* eslint-disable react/prop-types -- this codebase does not use PropTypes anywhere */
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useRevealOnScroll from '../hooks/useRevealOnScroll'
import PageBanner from '../components/PageBanner'
import { site } from '../config/site'

/* ── Editable content ─────────────────────────────────────────────
   Text for the repeated items lives here so it can be edited without
   touching the layout below. */

/** Pill links under the banner: [section id, label]. */
const SECTION_LINKS = [
  ['specialties', 'תחומי התמחות'],
  ['experience', 'ניסיון מקצועי'],
  ['public-activity', 'פעילות ציבורית ומקצועית'],
  ['academic', 'פעילות אקדמית'],
  ['achievements', 'הישגים בולטים'],
  ['values', 'ערכים וחזון'],
]

/** Specialty chips. `to` links the chip to its practice page (paths from
    src/routes.meta.js); chips without `to` render as plain chips. */
const SPECIALTIES = [
  { label: 'נזיקין וביטוח', to: '/damages' },
  { label: 'רשלנות רפואית', to: '/medical-malpractice' },
  { label: 'תאונות דרכים', to: '/car-accidents' },
  { label: 'ביטוח לאומי' },
  { label: 'תאונות קטלניות' },
  { label: 'אסונות המוניים ורבי נפגעים' },
  { label: 'תביעות ביטוח' },
  { label: 'תאונות עבודה', to: '/work-accidents' },
  { label: 'נפגעי צבא וכוחות הביטחון' },
  { label: 'תביעות נגד רשויות וגופים ציבוריים' },
  { label: 'נזקי גוף מורכבים' },
  { label: 'ייפוי כוח מתמשך ואפוטרופסות', to: '/power-of-attorney' },
]

/** Public roles: the first three fill row one, the rest fill row two. */
const PUBLIC_ROLES = [
  'יו"ר פורום נזיקין וביטוח הארצי בלשכת עורכי הדין',
  'יו"ר ועדת הנזיקין, הביטוח והביטוח הלאומי במחוז חיפה',
  'מ"מ יו"ר ועד מחוז חיפה בלשכת עורכי הדין',
  'חבר המועצה הארצית של לשכת עורכי הדין',
  'נציג הלשכה בכנסת ישראל במגוון תחומים (בוועדות הרלוונטיות בכנסת)',
]

const FLAGSHIP_CASES = [
  {
    label: 'אסון מירון:',
    text: 'המשרד מוביל את ייצוג משפחות הנספים במאבק נזיקין תקדימי, שהוביל לקביעת מנגנוני פיצוי ולהכרה באחריות המדינה וגורמים נוספים, לרבות השגת סכומי פיצוי מהגבוהים שנפסקו בישראל עבור משפחות הנספים הקטינים.',
  },
  {
    label: 'תיקי אסונות לאומיים נוספים:',
    text: 'המשרד מוביל ייצוג בתיקי אסון רחבי היקף, וביניהם אסון מות הילדים בנחל התחמסון, ייצוג בתיקי אסונות התחשמלות של ילדים כתוצאה מטיפוס על עמודי חשמל, ייצוג בפרשות מורכבות של קריסת עצי אקליפטוס ברחבי הארץ, אסונות טביעה במערות המוות בחוף אכזיב ועוד מקרים טראגיים.',
  },
  {
    label: 'נפגעי 7 באוקטובר:',
    text: 'עו"ד בקר הוביל את ייצוג משפחות החטופים והנעדרים מטעם לשכת עורכי הדין בכנסת ישראל. ליווי משפטי הדוק של המשפחות בסוגיות של פיצויים, זכויות ושיקום, לרבות הובלת הליכי חקיקה תקדימיים בכנסת ישראל. עו"ד בקר היה מהגורמים המרכזיים ביותר בחקיקת חוק תגמולים לבני משפחה של חטופים ונעדרים בפעולת איבה, תשפ"ד-2023.',
  },
]

/** Value cards. `highlight` renders the gold card (navy text). */
const VALUES = [
  {
    title: 'מקצועיות',
    text: 'מקצועיות במשרדנו אינה סיסמא ריקה מתוכן. מקצועיות היא לא רק הידע המשפטי והניסיון הרב שיש לעורכי הדין במשרד אלא גם היכולת לנתח ולנהל כל מקרה בנחישות תוך שימוש באסטרטגיות וטקטיקות ייחודיות שפותחו ונצברו בטיפול באלפי תיקים במשרדנו.',
  },
  {
    title: 'נאמנות והגינות',
    text: 'אנו מאמינים ורואים בכללי אתיקה של לשכת עורכי הדין ושמירת האינטרס של הלקוח כערך עליון ומקפידים לייצג בנאמנות, הגינות ודיסקרטיות. תמיד נציג ללקוחותינו אמות מידה מציאותיות ככל האפשר.',
  },
  {
    title: 'יעילות',
    text: 'ערן בקר חברת עורכי דין מקפידה לנהל את ההליכים המשפטיים בדרך היעילה האפשרית, שתתאים ספציפית ללקוח עד להשגת התוצאה המיטבית.',
  },
  {
    title: 'ללא ניגוד עניינים',
    text: 'משרדנו מייצג אך ורק תובעים נפגעים ולא חברות ביטוח ולכן מראש אין חשש לניגוד אינטרסים ואנו רואים לנגד עינינו רק את טובת הלקוח.',
  },
  {
    title: 'חדשנות',
    text: 'ערן בקר - חברת עורכי דין מוכר בחשיבה משפטית חדשנית ומחוץ לקופסא, דבר המאפשר להתגבר על מכשולים שונים בדרך עד להשגת המטרה עבור הלקוח.',
  },
  {
    title: 'דירוגים',
    text: "ערן בקר חברת עורכי דין זוכה להכרה כמשרד בוטיק מוביל ומוערך בתחומי נזיקין, רשלנות רפואית ודיני ביטוח על ידי המדריכים המשפטיים המקצועיים המוכרים: Dun's 100 ו-BDI Code.",
    highlight: true,
  },
]

/* Frank Ruhl Libre is used only by the quote on this page, so it is loaded
   here rather than site-wide in index.html. */
const QUOTE_FONT_ID = 'about-quote-font'
const QUOTE_FONT_HREF = 'https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@500&display=swap'

function useQuoteFont() {
  useEffect(() => {
    if (document.getElementById(QUOTE_FONT_ID)) return
    const link = document.createElement('link')
    link.id = QUOTE_FONT_ID
    link.rel = 'stylesheet'
    link.href = QUOTE_FONT_HREF
    document.head.appendChild(link)
  }, [])
}

function SectionHeading({ children }) {
  return (
    <div className="about-heading reveal">
      <h2>{children}</h2>
      <span className="about-rule" aria-hidden="true" />
    </div>
  )
}

export default function About() {
  useRevealOnScroll()
  useQuoteFont()

  return (
    <div className="about-page" dir="rtl">
      <PageBanner
        crumbs={[{ label: 'אודות הפירמה' }]}
        title="כ-25 שנים של"
        accent="נחישות משפטית"
      />
      <nav className="about-pills" aria-label="בדף זה">
        {SECTION_LINKS.map(([id, label]) => (
          <a key={id} href={`#${id}`}>{label}</a>
        ))}
      </nav>

      {/* Intro */}
      <section className="about-section about-dark">
        <div className="about-col reveal">
          <p className="about-lead">ערן בקר - חברת עורכי דין הינו משרד בוטיק מוביל ופורץ דרך. הוא בין המשרדים הבולטים בישראל במימוש זכויות בתחום הנזיקין, הביטוח, הרשלנות הרפואית והביטוח הלאומי. מאז הקמתו במשך למעלה משני עשורים מייצג המשרד נפגעי גוף בתאונות, משפחות נספים ונפגעים בתיקים מורכבים בעלי השלכות משפטיות ותקדימיות, כלכליות וציבוריות רחבות, ובעלי פרופיל תקשורתי גבוה, תוך שילוב בין מומחיות משפטית, הבנה רפואית מעמיקה וליווי אישי לאורך כל שלבי ההליך.</p>
          <p>המשרד שהוקם בשנת 2003 הינו משרד מוביל ופורץ דרך, המשרד מתמקד בייצוג נפגעי גוף נגד המדינה חברות ביטוח, מוסדות רפואיים, המוסד לביטוח לאומי, משרד הביטחון ורשויות ציבוריות. לאורך השנים טיפל המשרד באלפי תיקים בתחומי הנזיקין, הרשלנות הרפואית והביטוח הלאומי והוביל הליכים משמעותיים שתרמו למיצוי זכויותיהם של נפגעים ומשפחותיהם גם באסונות גדולים ולאומיים.</p>
        </div>
      </section>

      {/* Ratings + negotiation / litigation */}
      <section className="about-section about-cream">
        <div className="about-wide about-stack">
          <div className="about-rating-box reveal">
            <p>המשרד מדורג מזה שנים רבות על-ידי דן אנד ברדסטריט <strong>(DUNS 100)</strong> ובי די אי קוד <strong>(BDi CODE)</strong> כאחד ממשרדי עורכי דין המובילים והמוערכים בישראל.</p>
          </div>
          <div className="about-grid-2 reveal">
            <div className="about-card about-card-navy-top">
              <p>לעו&quot;ד ערן בקר וצוות עורכי הדין, ניסיון עצום בניהול משא ומתן, עם הצד הנתבע בכלל (חברות ביטוח, רשויות מקומיות, משרדי ממשלה, מעסיקים ועוד) ועורכי הדין המייצגים כנגד בפרט.</p>
            </div>
            <div className="about-card about-card-navy-top">
              <p>לעו&quot;ד ערן בקר וצוות עורכי הדין ניסיון רב בליטיגציה בכל הערכאות המשפטיות וכן ניהול וייצוג נכים בוועדות רפואיות שליד המוסד לביטוח לאומי ומשרד הביטחון.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statement quote */}
      <section className="about-section about-dark about-quote">
        <svg className="about-quote-icon reveal" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
          <path d="M10 7H6a2 2 0 00-2 2v4h5v5H4" />
          <path d="M20 7h-4a2 2 0 00-2 2v4h5v5h-5" />
        </svg>
        <p className="reveal">בשנים האחרונות בלט עו&quot;ד בקר גם בייצוג נפגעים ומשפחות הנספים באירועים בעלי משמעות לאומית וציבורית, בהם <span className="about-gold">אסון מירון</span> ואירועי <span className="about-gold">7 באוקטובר</span> מול המדינה והמוסד לביטוח לאומי. פעילות זו מציבה אותו בחזית המאבק למיצוי זכויותיהם של נפגעי אסונות המוניים ומשפחותיהם ומחזקת את מעמדו כאחד מעורכי הדין הבולטים בישראל בתחום נזקי הגוף והאחריות הציבורית.</p>
      </section>

      {/* Specialties */}
      <section id="specialties" className="about-section about-cream">
        <SectionHeading>תחומי התמחות</SectionHeading>
        <ul className="about-chips about-grid-3 reveal">
          {SPECIALTIES.map(({ label, to }) => (
            <li key={label}>
              {to ? <Link to={to} className="about-chip">{label}</Link> : <span className="about-chip">{label}</span>}
            </li>
          ))}
        </ul>
      </section>

      {/* Professional experience */}
      <section id="experience" className="about-section about-dark">
        <SectionHeading>ניסיון מקצועי</SectionHeading>
        <div className="about-col reveal">
          <p>במשך למעלה מ־20 שנה מלווה עו&quot;ד בקר נפגעים ומשפחותיהם בתיקים מורכבים בתחומי הנזיקין, הרשלנות הרפואית והביטוח. לצד ניהול הליכים פרטניים, הוא עוסק גם בתיקים בעלי היבטים ציבוריים רחבים ובסוגיות הנוגעות למוסד לביטוח לאומי, לאחריות המדינה, גופים ציבוריים ומוסדות רפואיים.</p>
          <p>אחד התחומים המזוהים ביותר עם פעילותו הוא ייצוג נפגעים קלים וקשים בתיקים מורכבים מול המוסד לביטוח לאומי, מול חברות הביטוח בתאונות דרכים וכן ייצוג משפחות באירועים רבי נפגעים. במסגרת זו היה בשנים האחרונות ממובילי הייצוג המשפטי של משפחות הנספים באסון מירון, שנחשב לאסון האזרחי הגדול ביותר בתולדות המדינה. המשרד ליווה ומלווה משפחות רבות במאבקן המשפטי מול המדינה והגופים המעורבים ופעל למיצוי זכויותיהן ולהשגת פיצוי והכרה באחריות הגורמים הרלוונטיים.</p>
        </div>
      </section>

      {/* Professional experience, continued */}
      <section className="about-section about-sand">
        <div className="about-wide about-grid-2 reveal">
          <div className="about-card about-card-gold-top">
            <p>לאחר אירועי 7 באוקטובר ייצג עו&quot;ד בקר את משפחות החטופים והנעדרים. במסגרת זו פועל המשרד מול רשויות המדינה, ועדות ציבוריות וגורמי פיצוי שונים במטרה להבטיח מענה משפטי מלא ומיצוי זכויות עבור אוכלוסיות שנפגעו באופן חסר תקדים.</p>
          </div>
          <div className="about-card about-card-gold-top">
            <p>בנוסף, המשרד מייצג לקוחות בתיקי רשלנות רפואית מורכבים, נזקי לידה, איחור באבחון מחלות קשות, פגיעות קשות ותאונות קטלניות, ומנהל הליכים בעלי מורכבות רפואית ומשפטית גבוהה.</p>
          </div>
        </div>
      </section>

      {/* Public & professional activity */}
      <section id="public-activity" className="about-section about-dark">
        <SectionHeading>פעילות ציבורית ומקצועית</SectionHeading>
        <div className="about-col about-center reveal">
          <p>עו&quot;ד בקר נחשב לאחת הדמויות הבולטות בישראל בתחום הנזיקין והביטוח וממלא לאורך השנים שורה של תפקידים מרכזיים בלשכת עורכי הדין.</p>
          <p className="about-gold about-roles-intro">בין היתר הוא מכהן בתפקידים ציבוריים:</p>
        </div>
        <ul className="about-roles reveal">
          {PUBLIC_ROLES.map(role => <li key={role}>{role}</li>)}
        </ul>
        <div className="about-col about-center reveal">
          <p>במסגרת פעילותו הציבורית הוא מוביל דיונים מקצועיים, כנסים והשתלמויות ארציות, פועל לקידום זכויות נפגעים ומרבה להשתתף בשיח הציבורי והמשפטי סביב סוגיות הנוגעות לנזיקין, רשלנות רפואית, ביטוח, אחריות המדינה ומיצוי זכויות.</p>
        </div>
      </section>

      {/* Academic activity */}
      <section id="academic" className="about-section about-cream">
        <SectionHeading>פעילות אקדמית</SectionHeading>
        <div className="about-col reveal">
          <p>לצד פעילותו המשפטית השוטפת, עו&quot;ד בקר עוסק בהכשרת עורכי דין ובהעברת ידע מקצועי בתחומי הנזיקין, הביטוח והרשלנות הרפואית.</p>
          <p>במשך השנים ריכז, הוביל והרצה במאות השתלמויות מקצועיות, ימי עיון וכנסים ארציים לעורכי דין במסגרת לשכת עורכי הדין ופורומים מקצועיים נוספים. פעילות זו נועדה לקדם סטנדרטים מקצועיים גבוהים ולהנגיש ידע עדכני בתחומי התמחותו.</p>
          <div className="about-navy-box about-center">
            <p>כן עו&quot;ד בקר מרצה במוסדות אקדמיים כגון: <strong className="about-gold">הטכניון</strong> ו<strong className="about-gold">אוניברסיטת חיפה</strong>.</p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="about-section about-dark">
        <SectionHeading>הישגים בולטים</SectionHeading>
        <div className="about-col reveal">
          <p>במהלך הקריירה שלו היה עו&quot;ד בקר מעורב באלפי תיקים והליכים משפטיים בעלי חשיבות ציבורית רחבה, אשר השפיעו על מיצוי זכויותיהם של נפגעים ומשפחותיהם ועל השיח הציבורי סביב אחריות המדינה, גופים ציבוריים וחברות הביטוח. במסגרת עשייתו הענפה, הוביל המשרד שורה של תיקים תקדימיים אשר שינו את המציאות המשפטית והחברתית בישראל. פעילות זו כוללת הליכים מכוננים בבתי המשפט השלום, בתי המשפט המחוזיים ובבית המשפט העליון, אשר קבעו הלכות חדשות, בין היתר בנושא פרשנות המונח <span className="about-gold">&quot;תאונת דרכים&quot;</span> בהקשר של כניסה ויציאה מרכב, ובנושא <span className="about-gold">סיווג אופניים חשמליים כרכב מנועי</span>. תיקי דגל והלכות חדשות בתחום תאונות הדרכים בביהמ&quot;ש העליון. לצד אלו, המשרד עומד בחזית המאבקים המשפטיים הציבוריים המשמעותיים ביותר בישראל בעשורים האחרונים, תוך התמחות בתיקי תאונות קטלניות ואסונות מורכבים:</p>
        </div>
      </section>

      {/* Flagship cases */}
      <section className="about-section about-sand">
        <div className="about-wide about-stack">
          {FLAGSHIP_CASES.map(c => (
            <div key={c.label} className="about-card about-case reveal">
              <p><strong>{c.label}</strong> {c.text}</p>
            </div>
          ))}
          <div className="about-navy-box about-closing-box reveal">
            <p>לצד אלה, המשרד מנהל באופן שוטף תביעות רשלנות רפואית ונזקי גוף מורכבות לרבות תיקים של נכים קשים פרפלגים / קוואטרופלגים / פגיעות מוח / מונשמים / מצב וגטטיבי (Vegetative State) ועוד המסתיימות דרך קבע בפיצויים משמעותיים. לאורך השנים ביסס עו&quot;ד בקר מוניטין של <span className="about-gold">מקצועיות בלתי מתפשרת, יסודיות ומחויבות מלאה</span> למיצוי זכויות לקוחותיו בכל הערכאות.</p>
          </div>
        </div>
      </section>

      {/* Values & vision */}
      <section id="values" className="about-section about-dark">
        <SectionHeading>ערכים וחזון</SectionHeading>
        <div className="about-wide about-grid-3 reveal">
          {VALUES.map(v => (
            <div key={v.title} className={`about-value${v.highlight ? ' about-value-highlight' : ''}`}>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing call to action */}
      <section className="about-section about-cream">
        <div className="about-cta reveal">
          <h2>ייעוץ ראשוני אישי ללא התחייבות</h2>
          <span className="about-rule" aria-hidden="true" />
          <p>צרו עימנו קשר עוד היום ונשמח לסייע לכם לקבל את הפיצוי המקסימלי מהגורמים הרלוונטיים.</p>
          <div className="about-cta-buttons">
            <a className="about-btn about-btn-solid" href={site.phones.office.href} dir="ltr">{site.phones.office.display}</a>
            <a className="about-btn about-btn-outline" href="/#contact">פנו אלינו עכשיו ←</a>
          </div>
        </div>
      </section>
    </div>
  )
}
