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
    featured: true,
    moreLinks: [
      { label: 'ynet', url: 'https://www.ynet.co.il/judaism/article/hk3kwebhxl' },
      { label: 'וואלה', url: 'https://news.walla.co.il/item/3761722' },
      { label: 'כאן חדשות', url: 'https://www.kan.org.il/content/kan-news/local/926965/' },
      { label: 'מעריב', url: 'https://www.maariv.co.il/breaking-news/article-1210540' },
    ],
  },
  {
    src: '/pics/press/press-walla-hostages-families.webp',
    title: 'הפרקליט שלקח על עצמו לדאוג למשפחות החטופים',
    outlet: 'וואלה מקומי',
    date: '20.3.2024',
    url: 'https://mekomi.walla.co.il/item/3652184',
  },
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
          <div className="press-grid reveal">
            {articles.map((a) => (
              <LinkedPressCard key={a.url} item={a} category={CATEGORY} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
