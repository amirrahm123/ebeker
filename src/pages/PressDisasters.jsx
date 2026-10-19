import useRevealOnScroll from '../hooks/useRevealOnScroll'
import PageBanner from '../components/PageBanner'
import CTASection from '../components/CTASection'
import LinkedPressCard from '../components/LinkedPressCard'

const CATEGORY = 'אסונות'

const articles = [
  {
    src: '/pics/press/press-meron-compensation.webp',
    title: 'הסכם פיצויים דרמטי: כ-3 מיליון ש"ח לכל משפחה מנספי אסון מירון',
    outlet: 'כיכר השבת',
    date: '01.07.25',
    url: 'https://www.kikar.co.il/haredim-news/meron-disaster-compensation',
  },
  {
    src: '/pics/press/press-walla-hostages-families.webp',
    title: 'הפרקליט שלקח על עצמו לדאוג למשפחות החטופים של 7 באוקטובר',
    outlet: 'וואלה מקומי',
    date: '20.3.2024',
    url: 'https://mekomi.walla.co.il/item/3652184',
  },
]

const meronCoverage = [
  { label: 'ynet', url: 'https://www.ynet.co.il/judaism/article/hk3kwebhxl' },
  { label: 'וואלה', url: 'https://news.walla.co.il/item/3761722' },
  { label: 'כאן חדשות', url: 'https://www.kan.org.il/content/kan-news/local/926965/' },
  { label: 'מעריב', url: 'https://www.maariv.co.il/breaking-news/article-1210540' },
  { label: 'Bizzness', url: 'https://bizzness.net/4-%D7%A9%D7%A0%D7%99%D7%9D-%D7%90%D7%97%D7%A8%D7%99-%D7%9E%D7%A9%D7%A4%D7%97%D7%95%D7%AA-%D7%94%D7%A0%D7%A1%D7%A4%D7%99%D7%9D-%D7%91%D7%90%D7%A1%D7%95%D7%9F-%D7%9E%D7%99%D7%A8%D7%95%D7%9F-%D7%99/' },
]

export default function PressDisasters() {
  useRevealOnScroll()

  return (
    <>
      <PageBanner
        crumbs={[{ label: 'מהעיתונות', to: '#' }, { label: CATEGORY }]}
        title="מהעיתונות"
        accent={CATEGORY}
      />

      <section className="content-section">
        <div className="content-container">
          <div className="press-grid press-grid-pair">
            {articles.map((a) => (
              <LinkedPressCard key={a.url} item={a} category={CATEGORY} />
            ))}
          </div>

          <div className="mc-article-links press-more-coverage reveal">
            <p className="mc-article-links-title">סיקור נוסף על אסון מירון</p>
            <ul>
              {meronCoverage.map((l) => (
                <li key={l.url}>
                  <a href={l.url} target="_blank" rel="noopener noreferrer">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
