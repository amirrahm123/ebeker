import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const fname = form.fname.value
    const lname = form.lname.value
    const phone = form.phone.value
    const email = form.email.value
    const message = form.message.value

    setSending(true)

    try {
      await emailjs.send(
        'service_4gtlju6',
        'template_dpweehy',
        { fname, lname, phone, email, message },
        { publicKey: 'rkpi4VhBWiyvwO6t0' }
      )
    } catch (err) {
      console.error('EmailJS send failed:', err?.status, err?.text || err?.message, err)
    }

    const waText = `📩 פנייה חדשה מהאתר:
━━━━━━━━━━━━━━━━
👤 שם: ${fname} ${lname}
📱 טלפון: ${phone}
📧 אימייל: ${email}
━━━━━━━━━━━━━━━━
💬 הודעה:
${message}`

    window.open(`https://wa.me/9720522611850?text=${encodeURIComponent(waText)}`, '_blank')
    setSending(false)
    setSubmitted(true)
  }

  const reset = () => {
    setSubmitted(false)
  }

  if (submitted) {
    return (
      <div className="form-success" style={{ display: 'block' }}>
        <div className="check">✅</div>
        <h4>ההודעה התקבלה!</h4>
        <p>נחזור אליכם בהקדם האפשרי.<br />ניתן גם להתקשר ישירות ל-04-9001056.</p>
        <button className="form-submit" onClick={reset} style={{ marginTop: 18 }}>בקשה נוספת ←</button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="fname">שם פרטי</label>
          <input type="text" id="fname" name="fname" placeholder="ישראל" required />
        </div>
        <div className="form-group">
          <label htmlFor="lname">שם משפחה</label>
          <input type="text" id="lname" name="lname" placeholder="ישראלי" required />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone">מס' טלפון</label>
          <input type="tel" id="phone" name="phone" placeholder="050-0000000" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">דוא"ל</label>
          <input type="email" id="email" name="email" placeholder="name@example.com" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="message">ההודעה שלכם</label>
        <textarea id="message" name="message" placeholder="ספרו לנו בקצרה על המקרה שלכם..." required></textarea>
      </div>
      <button type="submit" className="form-submit" disabled={sending}>
        {sending ? '...שולח' : 'שלחו הודעה ←'}
      </button>
    </form>
  )
}
