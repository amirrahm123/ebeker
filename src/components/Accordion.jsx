import { useState } from 'react'

export default function Accordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)

  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className={`accordion-item ${openIndex === i ? 'open' : ''}`}>
          <div className="accordion-header" onClick={() => setOpenIndex(openIndex === i ? -1 : i)}>
            <h3>{item.icon} {item.title}</h3>
            <span className="accordion-chevron">▼</span>
          </div>
          <div className="accordion-body">
            <div className="accordion-body-inner">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
