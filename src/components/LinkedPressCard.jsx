/* eslint-disable react/prop-types -- this codebase does not use PropTypes anywhere */
/* Press-page card that links straight to the article in a new tab. Same
   look as the other .press-clipping cards. Optional extra coverage links sit
   outside the main anchor because links can't be nested. */
export default function LinkedPressCard({ item, category }) {
  return (
    <div className={`press-clipping press-clipping-linked${item.featured ? ' press-clipping-featured' : ''}`}>
      <a href={item.url} target="_blank" rel="noopener noreferrer" className="press-card-main">
        <div className="press-img-wrap">
          <img src={item.src} alt={item.title} loading="lazy" />
        </div>
        <div className="press-card-body">
          <span className="press-card-tag">{category}</span>
          <div className="press-card-title">{item.title}</div>
          <div className="press-card-meta">{item.outlet} · {item.date}</div>
          <span className="press-card-link">לכתבה המלאה &#8592;</span>
        </div>
      </a>
      {item.moreLinks && (
        <div className="mc-article-links press-card-links">
          <p className="mc-article-links-title">סיקור נוסף</p>
          <ul>
            {item.moreLinks.map((l) => (
              <li key={l.url}>
                <a href={l.url} target="_blank" rel="noopener noreferrer">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
