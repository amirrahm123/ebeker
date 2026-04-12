import { useEffect, useState, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import useRevealOnScroll from '../hooks/useRevealOnScroll'
import TestimonialsCarousel from '../components/TestimonialsCarousel'
import ContactForm from '../components/ContactForm'
import ZoomViewer from '../components/ZoomViewer'
import MediaCards from '../components/MediaCards'

// Inline SVG icon content per practice area — uses currentColor so card hover
// restyles it from gold to white. Common viewBox of 0 0 40 40.
const areaIconPaths = {
  // נזיקין כללי — stick figure tilted 45° falling above 3 L-shaped stairs
  fall: (
    <>
      {/* 3 ascending stair steps (profile line) */}
      <path d="M4 34 L14 34 L14 28 L22 28 L22 22 L30 22 L30 16 L38 16" />
      {/* falling figure, body rotated ~45° */}
      <circle cx="9" cy="9" r="3" />
      <path d="M11 11 L17 18" />
      <path d="M10 13 L5 11" />
      <path d="M13 11 L17 6" />
      <path d="M17 18 L12 24" />
      <path d="M17 18 L21 24" />
    </>
  ),
  // רשלנות רפואית — doctor with stethoscope and medical cross hat
  doctor: (
    <>
      <circle cx="20" cy="9" r="5" />
      <path d="M14 6 Q20 2 26 6" />
      <path d="M20 4 L20 8" />
      <path d="M18.5 6 L21.5 6" />
      <path d="M13 14 L10 34 L30 34 L27 14 Q20 18 13 14 Z" />
      <path d="M15 20 Q15 30 20 30 Q25 30 25 20" />
      <circle cx="20" cy="31" r="2.5" />
      <circle cx="15" cy="20" r="1.5" />
      <circle cx="25" cy="20" r="1.5" />
    </>
  ),
  // ביטוח — shield
  shield: (
    <path d="M20 4 L32 8 V19 C32 27, 27 33, 20 36 C13 33, 8 27, 8 19 V8 Z" />
  ),
  // תאונות עבודה — clear ladder (2 rails, 4 rungs) with figure falling off the left
  ladder: (
    <>
      <path d="M22 5 L22 35" />
      <path d="M32 5 L32 35" />
      <path d="M22 12 L32 12" />
      <path d="M22 19 L32 19" />
      <path d="M22 26 L32 26" />
      <path d="M22 33 L32 33" />
      <circle cx="9" cy="12" r="3" />
      <path d="M11 15 L15 22" />
      <path d="M9 17 L4 19" />
      <path d="M13 18 L18 14" />
      <path d="M15 22 L11 30" />
      <path d="M15 22 L18 30" />
    </>
  ),
  // תאונות דרכים — car side view with larger wheels
  car: (
    <>
      <path d="M3 26 L3 20 L9 20 L14 11 L28 11 L33 20 L37 20 L37 26" />
      <path d="M3 26 L37 26" />
      <path d="M18 11 L18 20" />
      <circle cx="11" cy="28" r="6" />
      <circle cx="29" cy="28" r="6" />
    </>
  ),
  // תאונות ימיות — bolder anchor (strokeWidth 2.5)
  anchor: (
    <g strokeWidth="2.5">
      <circle cx="20" cy="7" r="2.8" />
      <path d="M20 10 L20 34" />
      <path d="M13 14 L27 14" />
      <path d="M6 22 C6 30, 13 35, 20 35" />
      <path d="M34 22 C34 30, 27 35, 20 35" />
    </g>
  ),
  // תאונות תלמידים — child with backpack
  student: (
    <>
      <circle cx="20" cy="7" r="4" />
      <line x1="20" y1="11" x2="20" y2="24" />
      <line x1="20" y1="15" x2="13" y2="20" />
      <line x1="20" y1="15" x2="25" y2="19" />
      <line x1="20" y1="24" x2="16" y2="34" />
      <line x1="20" y1="24" x2="24" y2="34" />
      <rect x="21" y="12" width="9" height="12" rx="2" />
      <line x1="21" y1="13" x2="20" y2="11" />
      <line x1="21" y1="23" x2="20" y2="24" />
      <line x1="22" y1="20" x2="29" y2="20" />
    </>
  ),
  // תאונות קטלניות — ambulance side view
  cpr: (
    <>
      <rect x="4" y="14" width="26" height="16" rx="2" />
      <rect x="28" y="18" width="8" height="12" rx="1" />
      <rect x="29" y="19" width="6" height="5" rx="0.5" />
      <circle cx="10" cy="30" r="4" />
      <circle cx="26" cy="30" r="4" />
      <line x1="14" y1="18" x2="14" y2="28" strokeWidth="2.5" />
      <line x1="10" y1="23" x2="18" y2="23" strokeWidth="2.5" />
      <rect x="14" y="10" width="8" height="4" rx="1" />
      <path d="M16 10 L14 7" />
      <path d="M18 10 L18 6" />
      <path d="M20 10 L22 7" />
    </>
  ),
  // מחלות מקצוע — two clear lung blobs with trachea on top
  lungs: (
    <>
      <path d="M20 5 L20 14" />
      <path d="M14 14 L26 14" />
      {/* left lung */}
      <path d="M16 14 C9 16, 6 22, 7 28 C8 34, 13 35, 16 33 Z" />
      {/* right lung */}
      <path d="M24 14 C31 16, 34 22, 33 28 C32 34, 27 35, 24 33 Z" />
    </>
  ),
  // פטור ממס הכנסה — scissors cutting a document
  scissors: (
    <>
      <rect x="18" y="8" width="16" height="22" rx="1" />
      <path d="M22 14 L30 14" />
      <path d="M22 18 L30 18" />
      <circle cx="8" cy="28" r="4" />
      <circle cx="8" cy="14" r="4" />
      <path d="M12 26 L20 16" />
      <path d="M12 16 L20 18" />
    </>
  ),
  // צוואות וירושות — document with folded corner and 3 lines
  contract: (
    <>
      <path d="M8 4 L24 4 L32 12 L32 36 L8 36 Z" />
      <path d="M24 4 L24 12 L32 12" />
      <path d="M12 20 L28 20" />
      <path d="M12 26 L28 26" />
      <path d="M12 32 L24 32" />
    </>
  ),
  // ייפוי כוח מתמשך — scales of justice
  scroll: (
    <>
      <circle cx="20" cy="6" r="2" />
      <path d="M20 8 L20 36" />
      <path d="M8 12 L32 12" />
      <path d="M8 12 L8 20" />
      <path d="M32 12 L32 20" />
      <path d="M4 20 Q8 26 12 20" />
      <path d="M28 20 Q32 26 36 20" />
      <path d="M14 36 L26 36" />
    </>
  ),
  // חקירת סיבות מוות — larger magnifying glass (strokeWidth 2.5)
  magnifier: (
    <g strokeWidth="2.5">
      <circle cx="17" cy="17" r="10" />
      <path d="M25 25 L34 34" />
    </g>
  ),
  // נכות כללית וניידות — ISA wheelchair symbol
  wheelchair: (
    <g strokeWidth="2">
      <circle cx="28" cy="5" r="3.5" />
      <line x1="28" y1="8" x2="22" y2="18" />
      <line x1="26" y1="12" x2="33" y2="15" />
      <line x1="13" y1="18" x2="26" y2="18" />
      <line x1="26" y1="18" x2="26" y2="10" />
      <line x1="13" y1="18" x2="9" y2="26" />
      <circle cx="18" cy="28" r="10" />
      <circle cx="18" cy="28" r="2" />
      <circle cx="8" cy="28" r="2.5" />
      <line x1="26" y1="10" x2="30" y2="8" />
    </g>
  ),
  // נכי צה"ל — IDF soldier with helmet and rifle
  soldier: (
    <>
      <path d="M13 10 Q13 4 20 4 Q27 4 27 10 L27 13 L13 13 Z" />
      <line x1="11" y1="13" x2="29" y2="13" />
      <circle cx="20" cy="17" r="4" />
      <rect x="15" y="21" width="10" height="10" rx="1" />
      <line x1="15" y1="24" x2="9" y2="28" />
      <line x1="25" y1="24" x2="31" y2="28" />
      <line x1="9" y1="28" x2="5" y2="33" />
      <rect x="6" y="27" width="5" height="2" rx="0.5" />
      <line x1="17" y1="31" x2="15" y2="38" />
      <line x1="23" y1="31" x2="25" y2="38" />
      <path d="M20 23 L21.5 25 L20 27 L18.5 25 Z" />
    </>
  ),
}

function AreaIcon({ iconKey, size = 56 }) {
  const content = areaIconPaths[iconKey]
  if (!content) return null
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {content}
    </svg>
  )
}

// Small "ביטוח לאומי" mark — two overlapping arcs (second dashed).
// Uses currentColor so it inherits the gold .area-sub color.
function BlSymbol() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: 4, flexShrink: 0 }}
    >
      <path d="M12 3 C7 3 3 7 3 12 C3 17 7 21 12 21 C17 21 21 17 21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 21 C17 21 21 17 21 12 C21 7 17 3 12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
    </svg>
  )
}

const practiceAreas = [
  {
    iconKey: 'fall', label: 'נזיקין כללי', desc: 'ייצוג נפגעי גוף בתביעות פיצויים בגין נזקי גוף מכל סוג — עם ניסיון של עשרות שנים.', to: '/damages',
    points: ['תאונות דרכים ונזקי גוף', 'נפילות ברחוב ובמקום הציבורי', 'תאונות עבודה ומחלות מקצוע', 'פיצויים על כאב וסבל, אובדן שכר ונכות'],
  },
  {
    iconKey: 'doctor', label: 'רשלנות רפואית', desc: 'תביעות כנגד בתי חולים, רופאים וגורמים רפואיים בגין טיפול רשלני שגרם לנזק.', to: '/medical-malpractice',
    points: ['אבחון שגוי או מאוחר', 'רשלנות בניתוח או בטיפול', 'חוסר במתן מידע והסכמה מדעת', 'נזק ליילוד ורשלנות בלידה'],
  },
  {
    iconKey: 'shield', label: 'ביטוח', desc: 'תביעות מול חברות ביטוח בנושאי נכות, תאונות ואובדן כושר עבודה.', to: '/insurance',
    points: ['תביעות אובדן כושר עבודה', 'ביטוח חיים ומחלות קשות', 'ביטוח תאונות אישיות', 'דחיית תביעת ביטוח'],
  },
  {
    iconKey: 'ladder', label: 'תאונות עבודה · ביטוח לאומי', desc: 'מיצוי זכויות עובדים שנפגעו בתאונת עבודה מול המוסד לביטוח לאומי וגורמים נוספים.', to: '/damages',
    points: ['הכרה בתאונת עבודה', 'קצבאות נכות מעבודה', 'תביעות נגד מעסיקים', 'ועדות רפואיות'],
  },
  {
    iconKey: 'car', label: 'תאונות דרכים', desc: 'מיצוי פיצויים מחברות הביטוח לנפגעי תאונות דרכים — גם בתיקים מורכבים.', to: '/damages',
    points: ['נפגעי גוף בתאונות דרכים', 'תביעות לפי חוק הפיצויים', 'ייצוג מול חברות ביטוח', 'תאונות קטלניות'],
  },
  {
    iconKey: 'anchor', label: 'תאונות ימיות', desc: 'מומחיות ייחודית בתביעות נפגעים בים — מדריכים, חובבים, עובדים ימיים ועוד.', to: '/marine-accidents',
    points: ['תאונות ספורט ימי', 'פגיעות בחופי רחצה', 'תאונות צלילה וגלישה', 'אחריות מפעילי פעילות ימית'],
  },
  {
    iconKey: 'student', label: 'תאונות תלמידים', desc: 'ייצוג ילדים ומשפחותיהם שנפגעו בתאונות בבית הספר או בפעילויות חינוכיות.', to: '/student-accidents',
    points: ['פגיעות בשטח בית הספר', 'טיולים ופעילויות חוץ', 'ביטוח תלמידים', 'אחריות מוסדות חינוך'],
  },
  {
    iconKey: 'cpr', label: 'נזיקין · תאונות קטלניות', desc: 'ייצוג משפחות שכולות ותובעים בתאונות שגרמו לאובדן חיים — בנחישות ובמקצועיות.', to: '/damages',
    points: ['תביעות תלויים', 'פיצוי על אובדן חיים', 'ייצוג משפחות שכולות', 'חקירת נסיבות המוות'],
  },
  {
    iconKey: 'lungs', label: 'מחלות מקצוע · ביטוח לאומי', desc: 'הכרה במחלות שנגרמו עקב תנאי עבודה ומיצוי זכויות מהמוסד לביטוח לאומי.', to: '/damages',
    points: ['מחלות ריאה תעסוקתיות', 'חשיפה לחומרים מסוכנים', 'לחץ ושחיקה בעבודה', 'ועדות רפואיות'],
  },
  {
    iconKey: 'scissors', label: 'פטור ממס הכנסה', desc: 'קבלת פטור ממס הכנסה על פיצויים ומענקים לנפגעים — חסכון כספי משמעותי.', to: '/tax-exemption',
    points: ['פטור לנכי עבודה', 'פטור לנכי תאונות דרכים', 'ערעור על החלטות', 'חישוב הטבות מס'],
  },
  {
    iconKey: 'contract', label: 'צוואות וירושות', desc: 'עריכת צוואות, ניהול עיזבונות וייצוג בסכסוכי ירושה בצורה מקצועית ורגישה.', to: '/wills',
    points: ['עריכת צוואה', 'קיום צוואה', 'סכסוכי ירושה', 'ניהול עיזבונות'],
  },
  {
    iconKey: 'scroll', label: 'ייפוי כוח מתמשך', sub: 'וצו אפוטרופסות', desc: 'ליווי משפטי מלא בהכנת מסמכים וניהול הליכים בנושאי כשרות משפטית.', to: '/power-of-attorney',
    points: ['ייפוי כוח מתמשך', 'צווי אפוטרופסות', 'הנחיות רפואיות מקדימות', 'הגנה על הזכויות שלכם'],
  },
  {
    iconKey: 'magnifier', label: 'ניהול סיכונים ומשברים ברפואה', desc: 'ייצוג משפחות בהליכי חקירת סיבות מוות בפני השופט החוקר, בסמכות חוק ייחודי.', to: '/causes-of-death',
    points: ['חקירות בפני שופט חוקר', 'בירור נסיבות מוות', 'ייצוג משפחות', 'הליכים לפי חוק חקירת סיבות מוות'],
  },
  {
    iconKey: 'wheelchair', label: 'נכות כללית וניידות · ביטוח לאומי', desc: 'ייצוג מול ועדות רפואיות לקביעת נכות ומיצוי קצבאות ניידות.', to: '/damages',
    points: ['ועדות רפואיות', 'קצבת ניידות', 'נכות כללית', 'ערעורים על החלטות'],
  },
  {
    iconKey: 'soldier', label: 'נכי צה"ל', sub: 'ומשרד הביטחון', desc: 'ייצוג חיילים ומשוחררים מול משרד הביטחון לקביעת נכות ומיצוי קצבאות.', to: '/damages',
    points: ['תביעות למשרד הביטחון', 'ועדות רפואיות צבאיות', 'קצבאות ומענקים', 'הכרה בנכות'],
  },
]

const newsItems = [
  {
    img: '/pics/01_דף_הבית/01_dcd181_5c5efc732261430f88836392a1f161f7~mv2.jpg',
    tag: 'ביטוח לאומי · תאונות עבודה',
    title: 'מדריך גלישה לקה באירוע מוחי בים — הוכר כנפגע עבודה',
    text: 'בית הדין לעבודה קבע כי יש להכיר באירוע מוחי שנגרם למדריך גלישה כתאונת עבודה. ועדה רפואית קבעה נכות רפואית צמיתה בשיעור 64% המזכה אותו בקצבה חודשית.',
  },
  {
    img: '/pics/01_דף_הבית/02_dcd181_de7fc8d3ea464a6bbb9fc16ccb194920~mv2.jpeg',
    tag: 'פסק דין תקדימי · בית המשפט העליון',
    title: 'אופניים חשמליים אינם רכב מנועי — הלכה חדשה!',
    text: 'בית המשפט העליון קיבל את טענותינו וקבע הלכה חדשה: רוכבים שנפגעו מרכב יוכלו לתבוע פיצויים ישירות מחברות הביטוח של הרכב הפוגע. פורסם בישראל היום.',
  },
  {
    img: '/pics/01_דף_הבית/03_dcd181_1b2acefdc90d4a6baa839e1f40abbae4~mv2.jpg',
    tag: 'הרצאה · לשכת עורכי הדין חיפה',
    title: 'עו"ד ערן בקר מרצה בנושא רשלנות רפואית בפני 200 עו"ד',
    text: 'עו"ד בקר הרצה בהשתלמות "תביעות נזיקין — רשלנות רפואית בחדרי מיון" בלשכת עורכי הדין בחיפה, בריכוזו כיו"ר פורום נזיקין, ביטוח וביטוח לאומי.',
  },
  {
    img: '/pics/01_דף_הבית/04_dcd181_ec5e655e9db04fc2841312e8a4fbe6eb~mv2.jpg',
    tag: 'פיצויים · תאונות עבודה',
    title: 'כ-6.5 מיליון ₪ לתושב הצפון שנפגע במהלך עבודתו',
    text: 'בית המשפט המחוזי קיבל את דרישתנו לחשוף את כל חומר החקירה שנאסף על ידי אגף הפיקוח על העבודה — בניגוד לעמדת המדינה — ופסק פיצויים חריגים.',
  },
]

export default function Home() {
  useRevealOnScroll()

  const [areaPopup, setAreaPopup] = useState(null)
  const [articleIndex, setArticleIndex] = useState(null)
  const [zoomImg, setZoomImg] = useState(null)
  const heroCanvasRef = useRef(null)

  // Animated hero background — diagonal gold lines + swinging scales of justice
  useEffect(() => {
    const canvas = heroCanvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf = 0
    let start = performance.now()

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = Math.floor(rect.width * dpr)
      canvas.height = Math.floor(rect.height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = (now) => {
      const t = (now - start) / 1000
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      ctx.clearRect(0, 0, w, h)

      // Diagonal gold lines: spacing 36px, every 3rd thicker
      const spacing = 36
      const diag = w + h
      for (let i = -h; i < diag; i += spacing) {
        const idx = Math.floor((i + h) / spacing)
        const isThick = idx % 3 === 0
        ctx.beginPath()
        ctx.strokeStyle = isThick ? 'rgba(201,168,76,0.18)' : 'rgba(201,168,76,0.09)'
        ctx.lineWidth = isThick ? 1.2 : 0.7
        ctx.moveTo(i, 0)
        ctx.lineTo(i + h, h)
        ctx.stroke()
      }

      // Scales of justice on the LEFT
      const cx = w * 0.25
      const cy = h * 0.62

      // Radial glow behind scales
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 260)
      glow.addColorStop(0, 'rgba(201,168,76,0.22)')
      glow.addColorStop(0.5, 'rgba(201,168,76,0.07)')
      glow.addColorStop(1, 'rgba(201,168,76,0)')
      ctx.fillStyle = glow
      ctx.beginPath()
      ctx.arc(cx, cy, 260, 0, Math.PI * 2)
      ctx.fill()

      // Animated swing
      const swing = Math.sin(t * 0.9) * 0.12 // radians
      const armLen = 110
      const beamY = cy - 70

      ctx.strokeStyle = 'rgba(201,168,76,0.85)'
      ctx.lineWidth = 2.4
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'

      // Center pole
      ctx.beginPath()
      ctx.moveTo(cx, cy - 140)
      ctx.lineTo(cx, cy + 130)
      ctx.stroke()

      // Top finial
      ctx.beginPath()
      ctx.arc(cx, cy - 144, 5, 0, Math.PI * 2)
      ctx.stroke()

      // Base
      ctx.beginPath()
      ctx.moveTo(cx - 48, cy + 130)
      ctx.lineTo(cx + 48, cy + 130)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(cx - 30, cy + 140)
      ctx.lineTo(cx + 30, cy + 140)
      ctx.stroke()

      // Beam (rotated by swing around pivot at cx, beamY)
      const cosS = Math.cos(swing)
      const sinS = Math.sin(swing)
      const lx = cx - armLen * cosS
      const ly = beamY - armLen * sinS
      const rx = cx + armLen * cosS
      const ry = beamY + armLen * sinS
      ctx.beginPath()
      ctx.moveTo(lx, ly)
      ctx.lineTo(rx, ry)
      ctx.stroke()

      // Hanging chains + pans
      const drawPan = (px, py) => {
        // chain
        ctx.beginPath()
        ctx.moveTo(px, py)
        ctx.lineTo(px, py + 56)
        ctx.stroke()
        // pan arc
        ctx.beginPath()
        ctx.moveTo(px - 36, py + 56)
        ctx.quadraticCurveTo(px, py + 92, px + 36, py + 56)
        ctx.stroke()
        // pan rim
        ctx.beginPath()
        ctx.moveTo(px - 36, py + 56)
        ctx.lineTo(px + 36, py + 56)
        ctx.stroke()
      }
      drawPan(lx, ly)
      drawPan(rx, ry)

      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  // Escape key closes modals
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') {
        if (zoomImg) setZoomImg(null)
        else if (areaPopup) setAreaPopup(null)
        else setArticleIndex(null)
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  // Lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = (areaPopup !== null || articleIndex !== null || zoomImg !== null) ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [areaPopup, articleIndex])

  const openArticle = useCallback((i) => setArticleIndex(i), [])
  const closeArticle = useCallback(() => setArticleIndex(null), [])
  const prevArticle = useCallback(() => setArticleIndex(prev => prev > 0 ? prev - 1 : newsItems.length - 1), [])
  const nextArticle = useCallback(() => setArticleIndex(prev => prev < newsItems.length - 1 ? prev + 1 : 0), [])

  const currentArticle = articleIndex !== null ? newsItems[articleIndex] : null

  return (
    <>
      {/* HERO — animated canvas background with scales of justice + gold lines */}
      <section className="hero-framed" id="home">
        <canvas ref={heroCanvasRef} className="hero-framed-canvas" aria-hidden="true" />
        <div className="hero-framed-overlay" aria-hidden="true" />

        <span className="hf-corner hf-corner-tl" aria-hidden="true" />
        <span className="hf-corner hf-corner-tr" aria-hidden="true" />
        <span className="hf-corner hf-corner-bl" aria-hidden="true" />
        <span className="hf-corner hf-corner-br" aria-hidden="true" />

        <div className="hero-framed-content">
          <p className="hero-framed-intro">נפגעתם? חליתם?</p>
          <h1 className="hero-framed-headline">
            תנו לנו להילחם בנחישות
            <br />
            <span className="accent">למיצוי כל זכויותיכם!</span>
          </h1>
          <div className="hero-framed-divider" aria-hidden="true"></div>
          <p className="hero-framed-sub">משרד בוטיק מוביל מאז 2003 &middot; נזיקין, ביטוח, רשלנות רפואית וביטוח לאומי &middot; ליווי אישי בכל תיק</p>
          <div className="hero-framed-btns">
            <a href="#contact" className="btn-hero-solid">קבעו ייעוץ חינם &#8592;</a>
            <a href="tel:049001056" className="btn-hero-ghost">&#128222; 04-9001056</a>
          </div>
        </div>
      </section>

      {/* NEWS — directly below hero */}
      <section className="section section-alt news-section" id="news">
        <div className="container">
          <div className="reveal">
            <div className="teal-rule"></div>
          </div>
          <div className="news-grid">
            {newsItems.map((item, i) => (
              <div className="news-card reveal" key={i} style={{ transitionDelay: `${i * 0.1}s`, cursor: 'pointer' }} onClick={() => openArticle(i)}>
                <div className="news-img"><img src={item.img} alt={item.title} /></div>
                <div className="news-body">
                  <p className="news-tag">{item.tag}</p>
                  <h3 className="news-title">{item.title}</h3>
                  <p className="news-text">{item.text}</p>
                  <span className="news-link">צפה בכתבה &#8592;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEDIA CARDS — סיקור תקשורתי */}
      <MediaCards />

      {/* PRACTICE AREAS */}
      <section className="section section-light" id="areas">
        <div className="container">
          <div className="areas-intro reveal">
            <div className="areas-intro-text">
              <h2 className="section-title">תחומי עיסוק</h2>
              <p className="section-sub">כיסוי משפטי מקיף לכל נפגע גוף — אנחנו כאן בכל שלב של הדרך.</p>
              <div className="teal-rule"></div>
            </div>
            <a href="#contact" className="areas-intro-cta">לייעוץ ראשוני חינם &#8592;</a>
          </div>
          <div className="areas-grid stagger-reveal">
            {practiceAreas.map((area, i) => (
              <div className="area-card" key={i} onClick={() => setAreaPopup(area)} style={{ cursor: 'pointer' }}>
                <span className="area-icon"><AreaIcon iconKey={area.iconKey} /></span>
                <div className="area-label">{area.label}</div>
                {area.sub && (
                  <div className="area-sub">
                    {area.sub === 'ביטוח לאומי' && <BlSymbol />}
                    {area.sub}
                  </div>
                )}
                <div className="area-desc">{area.desc}</div>
                <span className="area-link">למידע נוסף &#8592;</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICE AREA POPUP */}
      {areaPopup && (
        <div className="area-popup-overlay active" onClick={(e) => { if (e.target === e.currentTarget) setAreaPopup(null) }}>
          <div className="area-popup">
            <button className="area-popup-close" onClick={() => setAreaPopup(null)} aria-label="סגור">&times;</button>
            <span className="area-popup-icon"><AreaIcon iconKey={areaPopup.iconKey} size={40} /></span>
            <h3 className="area-popup-title">{areaPopup.label}</h3>
            {areaPopup.sub && (
              <div className="area-popup-sub">
                {areaPopup.sub === 'ביטוח לאומי' && <BlSymbol />}
                {areaPopup.sub}
              </div>
            )}
            <p className="area-popup-desc">{areaPopup.desc}</p>
            <ul className="area-popup-points">
              {areaPopup.points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
            <div className="area-popup-actions">
              <Link to={areaPopup.to} className="btn-teal" onClick={() => setAreaPopup(null)}>למידע המלא &#8592;</Link>
              <a
                href={`https://wa.me/9720522611850?text=${encodeURIComponent('שלום, אני מעוניין/ת בייעוץ בנושא ' + areaPopup.label)}`}
                target="_blank" rel="noopener noreferrer"
                className="btn-outline-white"
                style={{ background: 'var(--color-surface)', border: '2px solid var(--color-border)', color: 'var(--color-text)' }}
              >💬 וואטסאפ</a>
            </div>
          </div>
        </div>
      )}

      {/* ARTICLE POPUP */}
      {currentArticle && (
        <div className="article-popup-overlay" onClick={(e) => { if (e.target === e.currentTarget) closeArticle() }}>
          <div className="article-popup">
            <button className="article-popup-close" onClick={closeArticle} aria-label="סגור">&times;</button>
            <div className="article-popup-image-wrap">
              <img src={currentArticle.img} alt={currentArticle.title} className="article-popup-img" onClick={() => setZoomImg(currentArticle.img)} />
            </div>
            <div className="article-popup-footer">
              <div className="article-popup-info">
                <span className="article-popup-tag">{currentArticle.tag}</span>
                <h3 className="article-popup-title">{currentArticle.title}</h3>
              </div>
              <div className="article-popup-nav">
                <button className="article-nav-btn" onClick={nextArticle}>&#8594;</button>
                <span className="article-popup-counter">{articleIndex + 1} / {newsItems.length}</span>
                <button className="article-nav-btn" onClick={prevArticle}>&#8592;</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ZOOM VIEWER */}
      {zoomImg && <ZoomViewer src={zoomImg} onClose={() => setZoomImg(null)} />}

      {/* TESTIMONIALS */}
      <TestimonialsCarousel />

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-text reveal-right">
              <p className="section-eyebrow">אודות הפירמה</p>
              <h2 className="section-title">מעל 21 שנה של נחישות משפטית</h2>
              <div className="teal-rule" style={{ marginBottom: 28 }}></div>
              <p>ערן בקר חברת עורכי-דין הינו משרד בוטיק מוביל ומוכר שנוסד בשנת 2003, המתמחה במימוש זכויות נפגעי גוף — נזיקין, ביטוח, רשלנות רפואית וביטוח לאומי.</p>
              <p>המשרד מלווה את לקוחותיו החל משלב בדיקת היתכנות הגשת התביעה, דרך מיצוי ומימוש זכויותיהם, ניהול משא ומתן מקצועי ועיקש, וכלה בייצוג בפני הערכאות המשפטיות.</p>
              <p>לעו"ד ערן בקר תפקיד משמעותי כמרצה ורכז אקדמי בפיתוח תוכניות הכשרה לעורכי דין, כיו"ר פורום נזיקין, ביטוח וביטוח לאומי ומשנה ליו"ר לשכת עורכי הדין מחוז חיפה.</p>
              <div className="badges-row">
                <span className="badge-chip">DUNS 100</span>
                <span className="badge-chip">BDi CODE</span>
                <span className="badge-chip">מוביל בישראל</span>
                <span className="badge-chip">משרד בוטיק</span>
              </div>
              <div style={{ marginTop: 28 }}>
                <Link to="/about" className="btn-teal">קראו עוד אודות הפירמה &#8592;</Link>
              </div>
            </div>
            <div className="about-visual reveal-left" style={{ transitionDelay: '.15s' }}>
              <img src="/pics/03_הצוות_המשפטי/03_dcd181_6838d586917e45cd9c3647aa83459cbe~mv2.jpg" alt='עו"ד ערן בקר — מייסד ושותף בכיר' style={{ width: '100%', maxWidth: 350, borderRadius: 16, border: '2px solid var(--border2)', boxShadow: '0 8px 32px rgba(0,0,0,.2)' }} />
              <div className="big-text" style={{ marginTop: 16 }}>ערן בקר — חברת עורכי דין</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section section-alt" id="contact">
        <div className="container">
          <div className="reveal">
            <h2 className="section-title">צרו קשר — הייעוץ הראשון חינם</h2>
            <p className="section-sub">מלאו את הטופס ונחזור אליכם בהקדם, או התקשרו ישירות.</p>
            <div className="teal-rule"></div>
          </div>
          <div className="contact-wrap">
            <div className="contact-info-box reveal">
              <h3>פרטי המשרד</h3>
              <div className="contact-item">
                <div className="contact-icon">&#128205;</div>
                <div className="contact-detail">
                  <span className="clabel">כתובת</span>
                  <span className="cvalue">רח' הרצל 75, נהריה 22446<br />בסמוך לעיריית נהריה</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">&#128222;</div>
                <div className="contact-detail">
                  <span className="clabel">טלפון רב קווי</span>
                  <a href="tel:049001056" className="cvalue">04-9001056</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">&#128172;</div>
                <div className="contact-detail">
                  <span className="clabel">וואטסאפ</span>
                  <a href="https://wa.me/9720522611850" target="_blank" rel="noopener noreferrer" className="cvalue">052-2611850</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">&#128224;</div>
                <div className="contact-detail">
                  <span className="clabel">פקס</span>
                  <span className="cvalue">04-9001057</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">&#9993;&#65039;</div>
                <div className="contact-detail">
                  <span className="clabel">דוא"ל</span>
                  <a href="mailto:office@ebeker.co.il" className="cvalue">office@ebeker.co.il</a>
                </div>
              </div>
            </div>
            <div className="contact-form-box reveal" style={{ transitionDelay: '.15s' }}>
              <h3>שלחו הודעה</h3>
              <ContactForm />
            </div>
          </div>
          <div className="map-wrap reveal" style={{ marginTop: 48, background: '#1B3A5C', borderRadius: 16, padding: 32, boxShadow: '0 4px 24px rgba(0,0,0,.12)' }}>
            <p style={{ textAlign: 'center', marginBottom: 6, fontSize: '0.85rem', color: '#6BAAF0', fontWeight: 600, letterSpacing: 1 }}>מיקום המשרד</p>
            <h3 style={{ textAlign: 'center', marginBottom: 20, fontSize: '1.5rem', color: '#fff', fontWeight: 800 }}>המשרד שלנו</h3>
            <div style={{ width: 60, height: 3, background: '#4A90D9', borderRadius: 2, margin: '0 auto 24px' }}></div>
            <div className="map-container">
              <iframe src="https://maps.google.com/maps?q=%D7%94%D7%A8%D7%A6%D7%9C+75+%D7%A0%D7%94%D7%A8%D7%99%D7%94&t=&z=16&ie=UTF8&iwloc=&output=embed" width="100%" height="350" style={{ border: 0, borderRadius: 12 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="מפת המשרד"></iframe>
            </div>
            <p style={{ textAlign: 'center', marginTop: 16, color: '#94a3b8', fontSize: '0.95rem' }}>&#128205; רח' הרצל 75, נהריה 22446 — בסמוך לעיריית נהריה</p>
          </div>
        </div>
      </section>
    </>
  )
}
