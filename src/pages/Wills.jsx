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
const subHeadingGold = {
  color: 'var(--color-accent)',
  fontSize: 'clamp(1.15rem, 2vw, 1.45rem)',
  fontWeight: 800,
  margin: '28px 0 16px',
  lineHeight: 1.3,
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
const experienceLine = {
  color: 'var(--color-accent)',
  fontSize: '1.15rem',
  fontWeight: 800,
  margin: '0 0 18px',
  letterSpacing: '0.1px',
}
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
const caseCard = {
  background: '#fff',
  border: '1px solid rgba(201,168,76,0.2)',
  borderRight: '4px solid var(--color-accent)',
  borderRadius: 6,
  padding: '20px 24px',
  marginBottom: 12,
  color: '#1a2a4a',
  fontSize: '0.98rem',
  lineHeight: 1.75,
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

const situations = [
  'במידה והנכם מצויים בהליכי גירושין עם בן זוגכם, כל עוד לא התגרשתם בפועל, בן הזוג יירש אתכם, במקרה של פטירה, כיורש על פי דין. על מנת למנוע מצב זה, מומלץ להזדרז ולערוך צוואה, בה תצוו את רכושכם כפי רצונכם.',
  'הנכם מנהלים מערכת יחסים בפרק ב׳ ואינכם מעוניינים כי בן/בת הזוג יירש את רכושכם.',
  'במצב קיצוני יותר, במקרים של ידועים בציבור, בעיקר אם אחד מבני הזוג נשוי לאחר.',
]

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

      {/* Section 1 — Intro */}
      <section style={sectionDark}>
        <div style={container} className="reveal">
          <p style={bodyDark}>
            הצורך בעריכת צוואה תלוי ברצונו של אדם ובשאלה מי הם יורשיו החוקיים מחד ומי הוא היה רוצה שיירש אותו, בבוא היום, ובאיזה חלקים מאידך.
          </p>
          <p style={bodyDark}>
            לא בכל מקרה יש צורך לערוך צוואה, ולעיתים הוראות החוק בדבר היורשים החוקיים (בהיעדר צוואה) כמו גם החלוקה ביניהם מתאימה לרצונו של האדם המוריש / המצווה.
          </p>
          <p style={bodyDark}>
            לאחר פטירתו של אדם, ועל-מנת שיורשיו יוכלו לממש את חלקם ואת זכויותיהם כיורשים יש לפנות לביהמ״ש המוסמך על מנת לקבל צוו ירושה או צוו לקיום צוואה עפ״י העניין.
          </p>
          <p style={experienceLine}>
            לעו״ד ערן בקר ניסיון משפטי של כ-20 שנים בעריכת צוואות וצוו ירושה וקיום צוואה.
          </p>
          <p style={ctaPhoneLine}>
            לברור מהן האופציות העומדות בפניכם התקשרו וקבעו שיחת ייעוץ או פגישה ללא עלות וללא התחייבות{' '}
            <a href="tel:049001056" style={phoneLink}>04-9001056</a>
          </p>
        </div>
      </section>

      {/* Section 2 — עריכת צוואה */}
      <section style={sectionLight}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>צוואה — עריכת צוואה</h2>
          <p style={bodyLight}>
            אדם (׳מצווה׳) אשר בבעלותו רכוש/נכסים, וברצונו להחליט עוד בחייו איך ובין מי (׳יורשים׳) יחולק רכושו לאחר מותו, צריך לערוך צוואה. כאשר מצווה כותב בחייו צוואה, בעודו בדעה צלולה, הוא יכול לחלק את רכושו כראות עיניו, לנשל את יורשיו החוקיים, להוריש את רכושו או חלקו ליורשים שאינם יורשים על פי דין, לקבוע אופן חלוקה שונה מזה הקבוע בחוק הירושה, וכיוצ״ב.
          </p>
          <p style={bodyLight}>
            רק באמצעות צוואה, הנכתבת בהתאם לכללי החוק, יכול אדם להיות בטוח כי לאחר מותו ייעשה ברכושו בדיוק לפי רצונו.
          </p>
          <div style={goldCalloutLight}>
            לעריכת צוואה משמעות גדולה לתכנון מוקדם של חלוקת הרכוש לאחר הפטירה ולה חשיבות ראשונה במעלה על מנת להימנע מסיטואציות בלתי רצויות באשר לחלוקת הרכוש בין בני משפחה שונים.
          </div>
          <h3 style={subHeadingGold}>מצבים שבהם חשוב במיוחד לערוך צוואה:</h3>
          {situations.map((s, i) => (
            <div key={i} style={caseCard}>{s}</div>
          ))}
        </div>
      </section>

      {/* Section 3 — תוקף הצוואה */}
      <section style={sectionDark}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>תוקף הצוואה ושמירתה</h2>
          <p style={bodyDark}>
            לעיתים, יורשים על פי דין שנושלו מהצוואה, מסרבים לקבל את רוע הגזירה, ופונים לבית המשפט בניסיון לפסול את הצוואה. אחת הטענות הנפוצות היא כי המצווה לא היה בדעה צלולה בעת החתימה על הצוואה. על מנת להתגבר על טענה מהסוג הזה, מומלץ להצטייד באישור רפואי בדבר מצבו הנפשי של המצווה בעת עריכת הצוואה, קל וחומר כשהמצווה קשיש, חולה, נוטל תרופות, או מאושפז בבית חולים בעת עריכת הצוואה.
          </p>
          <p style={bodyDark}>
            צוואה תקפה כל עוד אין צוואה אחרת, מאוחרת יותר. צוואה חדשה מבטלת את קודמתה, אלא אם קיים פגם בצוואה החדשה שהופך אותה לבלתי חוקית.
          </p>
          <div style={goldCalloutDark}>
            מומלץ לשמור על הצוואה במקום שמור ובטוח, ואף לשתף אדם קרוב על מקום הצוואה. הדרך הבטוחה ביותר והמומלצת ביותר היא להפקיד את הצוואה אצל הרשם לענייני ירושה, אך לא ניתן לעשות זאת באמצעות שליח, אלא על המצווה להפקיד את הצוואה בעצמו.
          </div>
        </div>
      </section>

      {/* Section 4 — צו קיום צוואה */}
      <section style={sectionLight}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>צו קיום צוואה</h2>
          <p style={bodyLight}>
            על מנת שניתן יהיה לפעול על פי הצוואה, ולחלק את העיזבון בין היורשים, יש צורך בהגשת בקשה למתן צו קיום צוואה, לרשם לענייני ירושה. בקשה זו יכול שתוגש על ידי מי מהיורשים על פיה, או על ידי כל אדם המעוניין במתן הצו. דין צו קיום הצוואה כדין פסק דין, הוא אינו מתיישן, והוא יפה כלפי כל העולם.
          </p>
        </div>
      </section>

      {/* Section 5 — ירושה על פי דין */}
      <section style={sectionDark}>
        <div style={container} className="reveal">
          <h2 style={headingGold}>ירושה על פי דין</h2>
          <p style={bodyDark}>
            כאשר אדם אינו מותיר אחריו צוואה, כל רכושו יחולק בין קרוביו בהתאם לסולם העדיפויות הקבוע בחוק הירושה. במקרה כזה (היעדר צוואה) יש להגיש בקשה למתן צו ירושה לרשם לענייני ירושה במסגרתו תקבע החלוקה של עזבון הנפטר בין בני משפחתו הזכאים עפ״י החוק. בצו הירושה אין פירוט של נכסי הנפטר אלא רק פירוט היורשים ויחס החלוקה של הרכוש (העיזבון) בין היורשים.
          </p>
          <div style={goldCalloutDark}>
            בהיעדר צוואה, זכות הראשונים בירושה מתחלקת שווה בשווה בין בן הזוג של הנפטר ובין ילדיו של הנפטר. בן הזוג מקבל מחצית מן הירושה, והילדים מתחלקים שווה בשווה במחצית הנותרת. בנוסף למחצית מכלל הרכוש זכאי בן הזוג לרשת גם את המטלטלין ואת מכונית הנוסעים של המנוח, אם הייתה לו כזו.
          </div>
          <div style={goldCalloutDark}>
            ידועים בציבור — בהיעדר צוואה, זכות הירושה של ידוע או ידועה בציבור של הנפטר שווה לזו של בני זוג נשואים אך רק אם הידועים בציבור אינם נשואים לאחרים, וכאשר מוכיח בן הזוג שנותר בחיים כי הוא והמנוח חיו כידועים בציבור, דהיינו, קיימו משק בית משותף.
          </div>
          <div style={ctaWrap}>
            <a href="#contact" style={ctaBtn}>לייעוץ ראשוני חינם ←</a>
          </div>
        </div>
      </section>

      <CTASection title="יש לכם שאלה בנושא צוואה?" subtitle="ייעוץ ראשוני ללא עלות וללא התחייבות" />
    </>
  )
}
