/* eslint-disable react/prop-types -- this codebase does not use PropTypes anywhere */
import { useState, useId } from 'react'

/* Press-page card that links straight to the article in a new tab. Same look
   as the other .press-clipping cards.
   Without an excerpt the whole card is one <a>. With item.excerpt (array of
   paragraphs) the card is a <div>: image, headline and "לכתבה המלאה" are links,
   and the excerpt with its "קרא עוד" toggle sits outside them, since a button
   can't be nested inside a link. */
export default function LinkedPressCard({ item, category }) {
  const [expanded, setExpanded] = useState(false)
  const excerptId = useId()

  if (!item.excerpt) {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="press-clipping press-clipping-linked reveal"
      >
        <div className="press-img-wrap">
          <img src={item.src} alt={item.title} loading="lazy" width="400" height="220" />
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

  const [first, ...rest] = item.excerpt
  return (
    <div className="press-clipping press-clipping-linked press-clipping-excerpt reveal">
      {/* Duplicate of the headline link below, so keep it out of the tab order. */}
      <a href={item.url} target="_blank" rel="noopener noreferrer" className="press-img-wrap" tabIndex={-1} aria-hidden="true">
        <img src={item.src} alt="" loading="lazy" width="400" height="220" />
      </a>
      <div className="press-card-body">
        <span className="press-card-tag">{category}</span>
        <a href={item.url} target="_blank" rel="noopener noreferrer" className="press-card-title-link">
          <div className="press-card-title">{item.title}</div>
        </a>
        <div className="press-card-meta">{item.outlet} · {item.date}</div>
        <div id={excerptId} className={`press-card-excerpt${expanded ? ' is-expanded' : ''}`}>
          <p className="press-card-desc">{first}</p>
          {expanded && rest.map((p, i) => <p key={i} className="press-card-desc">{p}</p>)}
        </div>
        <button
          type="button"
          className="press-card-more"
          aria-expanded={expanded}
          aria-controls={excerptId}
          onClick={(e) => { e.stopPropagation(); e.preventDefault(); setExpanded((v) => !v) }}
        >
          {expanded ? 'הצג פחות' : 'קרא עוד'}
        </button>
        <a href={item.url} target="_blank" rel="noopener noreferrer" className="press-card-link">
          לכתבה המלאה &#8592;
        </a>
      </div>
    </div>
  )
}
