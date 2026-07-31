import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import useRevealOnScroll from '../hooks/useRevealOnScroll'
import PageBanner from '../components/PageBanner'
import CTASection from '../components/CTASection'
import ZoomViewer from '../components/ZoomViewer'

const images = [
  {
    file: 'bean-pod-slip-compensation.webp',
    title: 'בת 70 שהחליקה על תרמיל פול תפוצה ב-165 אלף שקלים',
    desc: 'כתבה שהתפרסמה באתר החדשות וואלה, לאור הצלחתנו בניהול תביעה מאתגרת נגד חברת הביטוח. במקרים רבים המטופלים ע"י משרדנו בכלל ובהובלה וייצוג תאונות קלות או קטלניות השליחות היא כפולה. אנו חותרים למקסם את הפיצוי המגיע ללקוחותינו, אך גם פועלים להביא את המזיק להכרה ברשלנותו ומחדליו ובכך מקווים למנוע פגיעה באנשים נוספים בעתיד.',
    link: { label: 'וואלה', url: 'https://news.walla.co.il/item/3560494' },
  },
{ file: 'eran-medical-negligence-case.webp', title: 'אבחון מאוחר עולה ביוקר: פיצוי של 5.6 מיליון ש"ח' },
  { file: '22a.webp', title: '250,000 ש"ח לנערה שננשכה ע"י כלב ונותרה עם צלקת' },
  { file: 'סייעת בגן ילדים נפלה מכיסא ותפוצה בכ-190 אלף שקלים.webp', title: 'סייעת בגן ילדים נפלה מכיסא ותפוצה בכ-190 אלף שקלים' },
  { file: 'כ-6.5 מיליון שקלים פיצויים לתושב הצפון שנפגע באורח קשה.webp', title: 'כ-6.5 מיליון שקלים פיצויים לתושב הצפון שנפגע באורח קשה' },
  { file: 'ילדה שאיבדה שיווי משקל ונפלה בחוג בלט תפוצה ב-220 אלף שקלים.webp', title: 'ילדה שאיבדה שיווי משקל ונפלה בחוג בלט תפוצה ב-220 אלף שקלים' },
  { file: 'תושב הצפון שנפגע באצבעו יפוצה בסכום של 1.3 מיליון שקלים.webp', title: 'תושב הצפון שנפגע באצבעו יפוצה בסכום של 1.3 מיליון שקלים' },
  { file: 'יותר מ-800 אלף שקלים פיצויים לעובד שהרים מכונת כביסה.webp', title: 'יותר מ-800 אלף שקלים פיצויים לעובד שהרים מכונת כביסה' },
  { file: 'החליקה בחתונת בנה ונקבעו לה 23 אחוז נכות.webp', title: 'החליקה בחתונת בנה ונקבעו לה 23% נכות' },
  { file: 'החליקה בבריכה בעודה אוחזת את תינוקה. ינואר 2019.webp', title: 'החליקה בבריכה בעודה אוחזת את תינוקה' },
  { file: 'פיצוי חריג 30 אחוז נכות הוערכו עי ביהמש ב-1.8 מיליון שקל.webp', title: 'פיצוי חריג: 30% נכות הוערכו ע"י בית המשפט ב-1.8 מיליון שקל' },
  { file: 'עזבונו של תושב האזור שנכלד למוות במסוע יפוצה ב-2 מיליון שקלים.webp', title: 'עזבונו של תושב האזור שנכלד למוות במסוע יפוצה ב-2 מיליון שקלים' },
  { file: 'מורה שנפצעה מכדורגל תפוצה בכ-132 אלף שקל.webp', title: 'מורה שנפצעה מכדורגל תפוצה בכ-132 אלף שקל' },
  { file: 'פוליסת ביטוח - קראו ב7 עיניים. שנת 2017..webp', title: 'פוליסת ביטוח - קראו ב-7 עיניים' },
  { file: 'קבלן וחברת ביטוח - סיפור מעניין.webp', title: 'קבלן וחברת ביטוח - סיפור מעניין' },
  { file: 'יותר ממיליון שקלים פיצויים למשפחתה של אישה שקרס עליה עץ. שנת 2012.webp', title: 'יותר ממיליון שקלים פיצויים למשפחתה של אישה שקרס עליה עץ' },
  { file: 'תושב הצפון שנבהל ממעבידו ונפגע באצבע יפו.webp', title: 'תושב הצפון שנבהל ממעבידו ונפגע באצבע יפוצה בפיצויים' },
  { file: 'עיוורון בעין ימין. 2012.webp', title: 'עיוורון בעין ימין' },
  { file: 'כמה שווה אצבע מוגבלת בתנועה שנת 2012.webp', title: 'כמה שווה אצבע מוגבלת בתנועה' },
  { file: 'משפחות הטובעים באכזיב יפוצו במיליוני שקל.webp', title: 'משפחות הטובעים באכזיב יפוצו במיליוני שקל' },
  { file: 'כריתה מיותרת.webp', title: 'כריתה מיותרת' },
  { file: 'יותר מ-400 אלף שקלים פיצוי לעובד שנבהל.webp', title: 'יותר מ-400 אלף שקלים פיצוי לעובד שנבהל' },
  { file: 'פועל שאצבעו נקטעה יפוצה ביותר ממיליון שקלים.webp', title: 'פועל שאצבעו נקטעה יפוצה ביותר ממיליון שקלים' },
  { file: 'מעשה בתושב לימן ובסוס.webp', title: 'מעשה בתושב לימן ובסוס' },
  { file: 'רוקחת שנפלה מארגז תובעת מיליון שקל.webp', title: 'רוקחת שנפלה מארגז תובעת מיליון שקל' },
  { file: 'האישה התאילנדית דרשה לחלוק את הירושה עם האלמנה. שנת 2010.webp', title: 'האישה התאילנדית דרשה לחלוק את הירושה עם האלמנה' },
  { file: 'הטעות בזיהוי עלתה למשטרת ישראל ולמדינה 200 אלף שקל. שנת 2010.webp', title: 'הטעות בזיהוי עלתה למשטרת ישראל ולמדינה 200 אלף שקל' },
  { file: 'כ-850 אלף שקל פיצויים למשפחה שבנה התחשמל למוות.webp', title: 'כ-850 אלף שקל פיצויים למשפחה שבנה התחשמל למוות' },
  { file: 'נפלה בדרך לרכבת וקיבלה יותר מ-350 אלף שקלים פיצויים.webp', title: 'נפלה בדרך לרכבת וקיבלה יותר מ-350 אלף שקלים פיצויים' },
  { file: 'ננשכה על ידי כלב ותפוצה ב-250 אלף שקל. שנת 2008.webp', title: 'ננשכה על ידי כלב ותפוצה ב-250 אלף שקל' },
  { file: 'נפגעה בניתוח בשלפוחית השתן ותפוצה ב-150.webp', title: 'נפגעה בניתוח בשלפוחית השתן ותפוצה ב-150 אלף שקל' },
  { file: 'נחשפה לאזבסט, חלתה בסרטן ותובעת 2.5 מליון.webp', title: 'נחשפה לאזבסט, חלתה בסרטן ותובעת 2.5 מליון' },
  { file: 'תושב נהריה תובע 2.5 מליון שקל מקליניקה לטיפולי לייזר. שנת 2007.webp', title: 'תושב נהריה תובע 2.5 מליון שקל מקליניקה לטיפולי לייזר' },
  { file: 'השוטרים טעו בזיהוי והפכו קיבוצניק לנכה. שנת 2009.webp', title: 'השוטרים טעו בזיהוי והפכו קיבוצניק לנכה' },
  { file: 'החליק באולם שמחות ויקבל 51 אלף שקל. שנת 2007.webp', title: 'החליק באולם שמחות ויקבל 51 אלף שקל' },
  { file: '85 אלף שקל פיצוי לאישה שנפגעה במהלך הרדמה. שנת 2007.webp', title: '85 אלף שקל פיצוי לאישה שנפגעה במהלך הרדמה' },
]

const BASE = '/pics/04_מהעיתונות_נזיקין_וביטוח/'

// Text-led popup for items that carry desc + link. Reuses the carousel modal's
// markup and classes wholesale — no styling of its own beyond capping the image
// width so the copy, not the clipping, leads.
function ArticleModal({ item, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return createPortal(
    <div className="mc-modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="mc-modal" role="dialog" aria-modal="true">
        <div className="mc-modal-header">
          <div>
            <p className="mc-modal-cat">נזיקין וביטוח</p>
            <h3 className="mc-modal-title">{item.title}</h3>
          </div>
          <button className="mc-modal-close" onClick={onClose} aria-label="סגור">&times;</button>
        </div>
        <div className="mc-modal-body">
          <div className="mc-article-real">
            <img src={BASE + item.file} alt={item.title} className="mc-article-image" style={{ maxWidth: 300 }} />
            <p className="mc-article-desc">{item.desc}</p>
            <a href={item.link.url} target="_blank" rel="noopener noreferrer" className="mc-article-cta">
              לכתבה המלאה באתר {item.link.label} &#8592;
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default function PressTort() {
  useRevealOnScroll()
  const [lightbox, setLightbox] = useState(null)
  const [article, setArticle] = useState(null)

  return (
    <>
      <PageBanner
        crumbs={[{ label: 'מהעיתונות', to: '#' }, { label: 'נזיקין וביטוח' }]}
        title="מהעיתונות"
        accent="נזיקין וביטוח"
      />

      <section className="content-section">
        <div className="content-container">
          <div className="press-grid reveal">
            {images.map((img, i) => (
              <div
                className="press-clipping"
                key={i}
                onClick={() => (img.desc && img.link ? setArticle(img) : setLightbox(BASE + img.file))}
              >
                <div className="press-img-wrap">
                  <img src={BASE + img.file} alt={img.title} loading="lazy" />
                </div>
                <div className="press-card-body">
                  <span className="press-card-tag">נזיקין וביטוח</span>
                  <div className="press-card-title">{img.title}</div>
                  {img.desc && <p className="press-card-desc">{img.desc}</p>}
                  <span className="press-card-link">צפה בכתבה &#8592;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="רוצים לדבר עם עורך דין?" subtitle="ייעוץ ראשוני חינם — ללא עלות וללא התחייבות" />

      {lightbox && <ZoomViewer src={lightbox} onClose={() => setLightbox(null)} />}
      {article && <ArticleModal item={article} onClose={() => setArticle(null)} />}
    </>
  )
}
