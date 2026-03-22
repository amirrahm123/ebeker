import { Link } from 'react-router-dom'

export default function Breadcrumb({ items }) {
  return (
    <div className="breadcrumb">
      <div className="breadcrumb-inner">
        <Link to="/">דף הבית</Link>
        {items.map((item, i) => (
          <span key={i}>
            <span className="sep">/</span>
            {item.to ? <Link to={item.to}>{item.label}</Link> : <span className="current">{item.label}</span>}
          </span>
        ))}
      </div>
    </div>
  )
}
