import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import { site, whatsappLink } from '../config/site'

const EMPTY = { fname: '', lname: '', phone: '', email: '', message: '', company: '' }

/* Israeli phone: optional +972 / 0 prefix, 9–10 digits, dashes/spaces allowed. */
const PHONE_RE = /^(\+?972[-\s]?|0)?[1-9]\d{0,1}[-\s]?\d{3}[-\s]?\d{4}$/
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(values) {
  const errors = {}
  if (!values.fname.trim()) errors.fname = 'נא למלא שם פרטי'
  if (!values.lname.trim()) errors.lname = 'נא למלא שם משפחה'
  const digits = values.phone.replace(/\D/g, '')
  if (!values.phone.trim()) errors.phone = 'נא למלא מספר טלפון'
  else if (digits.length < 9 || digits.length > 12 || !PHONE_RE.test(values.phone.trim())) errors.phone = 'נא להזין מספר טלפון ישראלי תקין (9–10 ספרות)'
  if (values.email.trim() && !EMAIL_RE.test(values.email.trim())) errors.email = 'כתובת הדוא"ל אינה תקינה'
  if (!values.message.trim()) errors.message = 'נא לכתוב הודעה קצרה'
  return errors
}

const FIELD_ORDER = ['fname', 'lname', 'phone', 'email', 'message']

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const refs = useRef({})
  const successHeadingRef = useRef(null)

  useEffect(() => {
    if (status === 'success') successHeadingRef.current?.focus()
  }, [status])

  const onChange = (e) => {
    const { name, value } = e.target
    setValues(v => ({ ...v, [name]: value }))
    if (errors[name]) setErrors(er => { const n = { ...er }; delete n[name]; return n })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    const firstInvalid = FIELD_ORDER.find(f => nextErrors[f])
    if (firstInvalid) {
      refs.current[firstInvalid]?.focus()
      return
    }

    // Honeypot: bots fill the hidden "company" field. Pretend success, send nothing.
    if (values.company) {
      setStatus('success')
      return
    }

    setStatus('sending')
    try {
      const { fname, lname, phone, email, message } = values
      await emailjs.send(
        site.emailjs.serviceId,
        site.emailjs.templateId,
        { fname, lname, phone, email, message },
        { publicKey: site.emailjs.publicKey }
      )
      setStatus('success')
    } catch (err) {
      console.error('EmailJS send failed:', err?.status, err?.text || err?.message)
      setStatus('error')
    }
  }

  const reset = () => {
    setValues(EMPTY)
    setErrors({})
    setStatus('idle')
  }

  const waText = `שלום, פניתי דרך האתר.
שם: ${values.fname} ${values.lname}
טלפון: ${values.phone}
${values.message}`

  if (status === 'success') {
    return (
      <div className="form-success form-success--shown" aria-live="polite" role="status">
        <div className="check" aria-hidden="true">✅</div>
        <h4 ref={successHeadingRef} tabIndex={-1}>ההודעה התקבלה!</h4>
        <p>נחזור אליכם בהקדם האפשרי.<br />ניתן גם להתקשר ישירות ל-<a href={site.phones.office.href}>{site.phones.office.display}</a>.</p>
        <a href={whatsappLink(waText)} target="_blank" rel="noopener noreferrer" className="form-wa-btn">
          רוצים מענה מהיר? שלחו גם בוואטסאפ
        </a>
        <button type="button" className="form-submit form-submit--secondary" onClick={reset}>בקשה נוספת ←</button>
      </div>
    )
  }

  const field = (name, label, props = {}) => {
    const err = errors[name]
    const Tag = name === 'message' ? 'textarea' : 'input'
    return (
      <div className={`form-group${err ? ' has-error' : ''}`}>
        <label htmlFor={name}>{label}</label>
        {name === 'message' && <p id="message-hint" className="form-hint">אין צורך לפרט מידע רפואי מלא בשלב זה</p>}
        <Tag
          id={name}
          name={name}
          value={values[name]}
          onChange={onChange}
          ref={el => { refs.current[name] = el }}
          aria-invalid={err ? 'true' : undefined}
          aria-describedby={[err ? `${name}-error` : null, name === 'message' ? 'message-hint' : null].filter(Boolean).join(' ') || undefined}
          {...props}
        />
        {err && <p id={`${name}-error`} className="form-error">{err}</p>}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        {field('fname', 'שם פרטי', { type: 'text', placeholder: 'ישראל', autoComplete: 'given-name', required: true })}
        {field('lname', 'שם משפחה', { type: 'text', placeholder: 'ישראלי', autoComplete: 'family-name', required: true })}
      </div>
      <div className="form-row">
        {field('phone', "מס' טלפון", { type: 'tel', placeholder: '050-0000000', autoComplete: 'tel', inputMode: 'tel', required: true })}
        {field('email', 'דוא"ל (לא חובה)', { type: 'email', placeholder: 'name@example.com', autoComplete: 'email' })}
      </div>
      {field('message', 'ההודעה שלכם', { placeholder: 'ספרו לנו בקצרה על המקרה שלכם...', required: true })}

      {/* Honeypot — hidden from people, tempting for bots. */}
      <div className="form-hp" aria-hidden="true">
        <label htmlFor="company">חברה</label>
        <input type="text" id="company" name="company" value={values.company} onChange={onChange} tabIndex={-1} autoComplete="off" />
      </div>

      <div aria-live="polite">
        {status === 'error' && (
          <div className="form-alert" role="alert">
            <strong>ההודעה לא נשלחה.</strong> אפשר לנסות שוב, להתקשר אלינו ל-<a href={site.phones.office.href}>{site.phones.office.display}</a>{' '}
            או לשלוח <a href={whatsappLink(waText)} target="_blank" rel="noopener noreferrer">הודעת וואטסאפ</a>.
          </div>
        )}
      </div>

      <button type="submit" className="form-submit" disabled={status === 'sending'}>
        {status === 'sending' ? '...שולח' : 'שלחו הודעה ←'}
      </button>
      <p className="form-consent">
        בשליחת הטופס אני מאשר/ת את <Link to="/privacy">מדיניות הפרטיות</Link>
      </p>
    </form>
  )
}
