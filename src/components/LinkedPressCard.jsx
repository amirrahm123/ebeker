/* eslint-disable react/prop-types -- this codebase does not use PropTypes anywhere */
/* Press-page card that links straight to the article in a new tab. Same look
   as the other .press-clipping cards; the whole card is the link. */
export default function LinkedPressCard({ item, category }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="press-clipping press-clipping-linked"
    >
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
  )
}
