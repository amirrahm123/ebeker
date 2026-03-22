import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
import path from 'path'
import { fileURLToPath } from 'url'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(cors())
app.use(express.json())

// Serve admin page at /admin
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'admin.html'))
})

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '12345'

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err))

// Contact schema
const contactSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: String,
  phone: { type: String, required: true },
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
})

const Contact = mongoose.model('Contact', contactSchema)

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

// Send detailed email
async function sendEmail(data) {
  const { fname, lname, phone, email, message } = data
  const fullName = `${fname} ${lname}`.trim()

  const html = `
    <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f5f5f0;">
      <div style="background: linear-gradient(135deg, #1a3a4a 0%, #2a5a6a 50%, #1a4a5a 100%); color: white; padding: 30px; border-radius: 12px 12px 0 0; text-align: center; border-bottom: 3px solid #2dd4bf;">
        <h1 style="margin: 0; font-size: 24px;">פנייה חדשה מהאתר</h1>
        <p style="margin: 8px 0 0; opacity: 0.7; font-size: 14px;">ערן בקר — חברת עורכי דין</p>
      </div>
      <div style="background: white; padding: 25px; border-left: 1px solid #e0e0e0; border-right: 1px solid #e0e0e0;">
        <p style="color: #666; font-size: 14px; margin: 0 0 20px;">פנייה חדשה נכנסה דרך טופס צור קשר באתר. הנה הפרטים המלאים:</p>
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 14px; font-weight: bold; color: #2dd4bf; width: 120px;">שם מלא</td>
            <td style="padding: 14px; color: #333;">${fullName}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 14px; font-weight: bold; color: #2dd4bf;">טלפון</td>
            <td style="padding: 14px;"><a href="tel:${phone}" style="color: #1a4a5a; text-decoration: none;">${phone}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 14px; font-weight: bold; color: #2dd4bf;">אימייל</td>
            <td style="padding: 14px;"><a href="mailto:${email}" style="color: #1a4a5a; text-decoration: none;">${email || 'לא צוין'}</a></td>
          </tr>
          <tr>
            <td style="padding: 14px; font-weight: bold; color: #2dd4bf;">הודעה</td>
            <td style="padding: 14px; color: #333;">${message || 'לא צוין'}</td>
          </tr>
        </table>
      </div>
      <div style="background: #f0f0f0; color: #999; padding: 15px; border-radius: 0 0 12px 12px; text-align: center; font-size: 11px; border-top: 1px solid #e0e0e0;">
        נשלח אוטומטית מאתר ערן בקר חברת עורכי דין
      </div>
    </div>
  `

  await transporter.sendMail({
    from: `"אתר ערן בקר" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    subject: `פנייה חדשה מהאתר: ${fullName} - ${phone}`,
    html,
  })
  console.log('Email sent successfully')
}

// API: Save contact + send email
app.post('/api/contact', async (req, res) => {
  try {
    const contact = new Contact(req.body)
    await contact.save()

    try {
      await sendEmail(req.body)
    } catch (err) {
      console.error('Email error:', err.message)
    }

    res.json({ success: true })
  } catch (err) {
    console.error('Error saving contact:', err)
    res.status(500).json({ success: false, error: 'Failed to save' })
  }
})

// API: Get all contacts (admin)
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 })
    res.json(contacts)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch contacts' })
  }
})

// API: Admin login
app.post('/api/admin/login', (req, res) => {
  const { password } = req.body
  if (password === ADMIN_PASSWORD) {
    res.json({ success: true })
  } else {
    res.status(401).json({ success: false, error: 'סיסמה שגויה' })
  }
})

// API: Delete contact
app.delete('/api/contacts/:id', async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id)
    res.json({ success: true })
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete' })
  }
})

// Start server before DB is ready
const PORT = process.env.PORT || 3002
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
