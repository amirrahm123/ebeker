import useRevealOnScroll from '../hooks/useRevealOnScroll'
import PageBanner from '../components/PageBanner'
import CTASection from '../components/CTASection'

const sectionDark = {
  background: '#0d1b3e',
  padding: '60px 40px',
  direction: 'rtl',
  textAlign: 'right',
}
const sectionLight = {
  background: '#f8f6f1',
  padding: '60px 40px',
  direction: 'rtl',
  textAlign: 'right',
}
const container = {
  maxWidth: 860,
  margin: '0 auto',
}
const headingGold = {
  color: 'var(--color-accent)',
  fontSize: 'clamp(1.5rem, 2.6vw, 2rem)',
  fontWeight: 900,
  margin: '0 0 22px',
  letterSpacing: '-0.2px',
  lineHeight: 1.25,
}
const bodyDark = {
  color: 'rgba(255,255,255,0.82)',
  fontSize: '1.02rem',
  lineHeight: 1.85,
  margin: '0 0 18px',
}
const bodyLight = {
  color: '#1a2a4a',
  fontSize: '1.02rem',
  lineHeight: 1.85,
  margin: '0 0 18px',
}
const goldCallout = {
  borderRight: '4px solid var(--color-accent)',
  background: 'rgba(201,168,76,0.08)',
  padding: '20px 24px',
  borderRadius: 4,
  margin: '24px 0',
  fontWeight: 700,
  fontSize: '1.1rem',
  lineHeight: 1.7,
}
const goldCalloutDark = { ...goldCallout, color: '#fff' }
const goldCalloutLight = { ...goldCallout, color: '#1a2a4a' }
const ctaPhoneLine = {
  color: 'rgba(255,255,255,0.78)',
  fontSize: '1rem',
  lineHeight: 1.8,
  margin: '0',
}
const phoneLink = {
  color: 'var(--color-accent)',
  fontWeight: 800,
  textDecoration: 'none',
  borderBottom: '1px solid rgba(201,168,76,0.4)',
  paddingBottom: 1,
}
const ctaBtn = {
  display: 'inline-block',
  padding: '14px 32px',
  background: 'var(--color-accent)',
  color: '#0d1b3e',
  fontWeight: 800,
  fontSize: '1rem',
  textDecoration: 'none',
  borderRadius: 4,
  letterSpacing: '0.2px',
}
const ctaWrap = { textAlign: 'center', marginTop: 8 }

export default function PowerOfAttorney() {
  useRevealOnScroll()

  return (
    <>
      <PageBanner
        crumbs={[
          { label: 'תחומי עיסוק', to: '/#areas' },
          { label: 'ייפוי כוח מתמשך' }
        ]}
        title="ייפוי כוח מתמשך"
        accent="וצו אפוטרופסות"
      />

      {/* Section 1 — Intro */}
      <section style={sectionDark}>
        <div style={container} className="reveal">
          <p style={bodyDark}>
            במהלך החיים עולה לעיתים הצורך למנות לאדם מישהו אחר שיטפל בענייניו בין אם באופן קבוע ובין אם באופן זמני — מהטעם שהאדם אינו כשיר לקבל החלטות או לבצע פעולות בעצמו בשל מצבו הרפואי.
          </p>
          <p style={bodyDark}>
            כדי לדעת מהו ההליך הנכון בו יש לבחור, כמו גם כדי לדייק את אילו עניינים אנו מעוניינים להפקיד בידיו של אדם אחר, חשוב להתייעץ עם עו״ד עם ניסיון רב בתחום.
          </p>
          <div style={goldCalloutDark}>
            לעו״ד ערן בקר ניסיון של כ-20 שנים בהצלחה בניהול בקשות למינוי אפוטרופוס מול בית המשפט המוסמך, וכן למשרדנו ניסיון בעריכת ייפוי כוח מתמשך — מאז שאפשרות זו חוקקה בחוק.
          </div>
          <p style={ctaPhoneLine}>
            לברור מהן האופציות העומדות בפניכם התקשרו וקבעו שיחת ייעוץ או פגישה ללא עלות וללא התחייבות{' '}
            <a href="tel:049001056" style={phoneLink}>04-9001056</a>
          </p>
        </div>
      </section>

      {/* Section 2 — ייפוי כוח מתמשך */}
      <section style={sectionLight}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>ייפוי כוח מתמשך</h2>
          <p style={bodyLight}>
            ייפוי כוח מתמשך הינו מסמך משפטי המאפשר לכל אדם בגיר, להחליט כיצד ועל ידי מי יתנהלו ענייניו בעתיד, אם יאבד את כשירותו הפיזית או הנפשית, ויהיה במצב בו לא יוכל לקבל החלטות ולבצע פעולות בעצמו.
          </p>
          <p style={bodyLight}>
            עד לפני מספר שנים הדרך לטיפול במי שלא יכול היה לקבל החלטות בענייניו הייתה באמצעות פנייה לבית משפט בבקשה למינוי אפוטרופוס. בשנת 2016 תוקן חוק הכשרות המשפטית והאפוטרופסות וניתנה האפשרות לכל אדם בגיר המסוגל לקבל החלטות לבחור מראש מי יטפל בענייניו, רכושו ובכל הקשור לגופו, פעולה זאת נעשית באמצעות עריכת ייפוי כוח מתמשך.
          </p>
          <p style={bodyLight}>
            הרציונל שגלום בעריכת ייפוי כוח מתמשך הוא שממנים מראש מיופה כוח שיהיה מוסמך לפעול בשמו של אדם, אם וכאשר יבצר ממנו לקבל החלטות או לבצע פעולות בעצמו בשל מצבו הרפואי.
          </p>
          <p style={bodyLight}>
            האדם שמבקש לערוך ייפוי כוח מתמשך, יכול לקבוע באופן כללי כי מיופה הכוח הוא האדם המוסמך לקבל בשמו החלטות עתידיות, ולהשאיר למיופה הכוח את שיקול הדעת לגבי תוכן ההחלטות, או שהוא יכול לפרט מהו רצונו לגבי תוכן ההחלטות שיתקבלו בנושאים השונים, וזאת באמצעות קביעת ׳הנחיות מקדימות׳.
          </p>
          <p style={bodyLight}>
            ייפוי כוח מתמשך יכול להיות בעניינים אישיים (כולל רפואיים) ובענייני רכוש, בכולם או בחלקם. ייפוי כוח מתמשך בעניינים אישיים מתייחס לרווחתו האישית של האדם, לצרכיו היומיומיים, למקום מגוריו, לבריאותו, לענייניו הגופניים, הנפשיים או החברתיים. ייפוי כוח מתמשך בענייני רכוש מתייחס לטיפול בכלל נכסיו, כספיו והתחייבויותיו של האדם.
          </p>
        </div>
      </section>

      {/* Section 3 — מיופה הכוח */}
      <section style={sectionDark}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>מיופה הכוח — מי יכול להיות?</h2>
          <p style={bodyDark}>
            מיופה הכוח יהיה בדרך כלל אדם אשר קרוב אלינו — בן או בת זוג, ילד/ה או בן משפחה אחר, חבר/ה שאנו סומכים עליו מאוד או כל אדם שנבחר (ישנה אפשרות למנות יותר מאדם אחד וכן אפשרי לקבוע שמיופה הכוח יידע צד ג׳ בכל פעולותיו).
          </p>
          <p style={bodyDark}>
            יש לערוך את ייפוי הכוח על גבי טפסים מיוחדים ולחתום עליהם בפני עורך דין שעבר הכשרה מיוחדת עפ״י דין. לאחר עריכת ייפוי הכוח יש להפקידו במשרדי האפוטרופוס הכללי.
          </p>
          <div style={goldCalloutDark}>
            ייפוי כוח מתמשך יקנה לכם רוגע וביטחון, בידיעה שבחרתם בעצמכם את האדם שידאג לאינטרסים שלכם — האישיים, הבריאותיים, הכלכליים באופן שאתם הייתם רוצים שהעניינים יתנהלו.
          </div>
        </div>
      </section>

      {/* Section 4 — צו מינוי אפוטרופסות */}
      <section style={sectionLight}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>צו מינוי אפוטרופסות</h2>
          <p style={bodyLight}>
            בקשה למינוי אפוטרופוס לאדם תוגש, לבית המשפט המוסמך, במקרה שהוא אינו מסוגל לדאוג לרכושו או גופו. דהיינו, לענייניו האישיים, הרכושיים או הרפואיים. אחד התנאים להגשת הבקשה למינוי אפוטרופוס הוא צירוף תעודות רפואיות המעידות על מצבו הנפשי ו/או הרפואי של האדם עבורו מתבקש המינוי (׳החסוי׳) כגון חוות דעת של רופא מומחה (לדוגמא: פסיכיאטר / גריאטר / נוירולוג) הכוללת אבחנה לגבי מסוגלות האדם לדאוג לענייניו באופן מלא / חלקי ומידת יכולתו להביע דעתו בעניין ולהבין את משמעות המינוי.
          </p>
          <p style={bodyLight}>
            בן הזוג או קרובי משפחה של אדם שאינו יכול לנהל את ענייניו כאמור, יכולים להגיש בקשה למינוי אפוטרופוס עבורו. אדם לא יכול להתמנות לאפוטרופוס, ללא הליך משפטי וללא מינוי של בית משפט/ בית הדין המוסמך. את הבקשה יש להגיש בכתב לבית המשפט לענייני משפחה או בית הדין השרעי / הדרוזי (בהתאם להשתייכותו הדתית של האדם עבורו מתבקש המינוי).
          </p>
          <div style={goldCalloutLight}>
            חשוב להדגיש כי המשיב בכל סוגי הבקשות למינוי אפוטרופוס הוא נציג היועץ המשפטי לממשלה במשרדי האפוטרופוס הכללי.
          </div>
          <div style={ctaWrap}>
            <a href="#contact" style={ctaBtn}>לייעוץ ראשוני חינם ←</a>
          </div>
        </div>
      </section>

      <CTASection title="רוצים להכין ייפוי כוח מתמשך?" subtitle="ייעוץ ראשוני ללא עלות וללא התחייבות" />
    </>
  )
}
