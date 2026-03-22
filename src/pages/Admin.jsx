import { useState, useEffect, useCallback } from 'react'

const API = 'http://localhost:3002'

const styles = {
  body: { fontFamily: "'Heebo', sans-serif", background: '#0f172a', color: '#e2e8f0', minHeight: '100vh' },
  loginWrap: { display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: 20 },
  loginBox: { background: '#1e293b', borderRadius: 16, padding: 40, width: '100%', maxWidth: 400, textAlign: 'center', border: '1px solid #334155' },
  loginTitle: { fontSize: 24, marginBottom: 8, color: '#2dd4bf' },
  loginSub: { color: '#94a3b8', marginBottom: 24, fontSize: 14 },
  loginInput: { width: '100%', padding: '14px 16px', border: '1px solid #334155', borderRadius: 10, background: '#0f172a', color: '#e2e8f0', fontSize: 16, fontFamily: 'inherit', textAlign: 'center', marginBottom: 16 },
  loginBtn: { width: '100%', padding: 14, border: 'none', borderRadius: 10, background: '#2dd4bf', color: '#0f172a', fontSize: 16, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' },
  loginError: { color: '#f87171', fontSize: 14, marginTop: 12 },
  dashHeader: { background: '#1e293b', borderBottom: '1px solid #334155', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 },
  dashTitle: { fontSize: 20, color: '#2dd4bf' },
  dashInfo: { display: 'flex', alignItems: 'center', gap: 16 },
  contactCount: { background: '#2dd4bf', color: '#0f172a', padding: '4px 12px', borderRadius: 20, fontWeight: 700, fontSize: 14 },
  dashLogout: { background: 'none', border: '1px solid #475569', color: '#94a3b8', padding: '8px 16px', borderRadius: 8, cursor: 'pointer', fontFamily: 'inherit', fontSize: 13 },
  dashBody: { padding: 24, maxWidth: 1200, margin: '0 auto' },
  statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 24 },
  statCard: { background: '#1e293b', borderRadius: 12, padding: 20, border: '1px solid #334155' },
  statNum: { fontSize: 32, fontWeight: 800, color: '#2dd4bf' },
  statLabel: { color: '#94a3b8', fontSize: 14, marginTop: 4 },
  contactCard: { background: '#1e293b', borderRadius: 12, padding: 20, border: '1px solid #334155', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr auto', gap: 16, alignItems: 'center', marginBottom: 12 },
  ccName: { fontWeight: 700, fontSize: 16 },
  ccDetail: { color: '#94a3b8', fontSize: 13, marginTop: 4 },
  ccLink: { color: '#2dd4bf', textDecoration: 'none' },
  ccMessage: { color: '#cbd5e1', fontSize: 14, lineHeight: 1.5 },
  ccDate: { color: '#64748b', fontSize: 12 },
  ccActions: { display: 'flex', gap: 8 },
  ccBtnWa: { padding: '8px 12px', borderRadius: 8, border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 12, background: '#25d366', color: 'white', textDecoration: 'none' },
  ccBtnDel: { padding: '8px 12px', borderRadius: 8, border: '1px solid #475569', color: '#94a3b8', background: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 12 },
  emptyState: { textAlign: 'center', padding: '60px 20px', color: '#64748b' },
  emptyIcon: { fontSize: 48, marginBottom: 16 },
}

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(false)

  const loadContacts = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(`${API}/api/contacts`)
      const data = await res.json()
      setContacts(data)
    } catch {
      setContacts([])
    }
    setLoading(false)
  }, [])

  const doLogin = async () => {
    try {
      const res = await fetch(`${API}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      })
      if (res.ok) {
        setLoggedIn(true)
        setError('')
        loadContacts()
      } else {
        setError('סיסמה שגויה')
      }
    } catch {
      setError('שגיאת חיבור לשרת')
    }
  }

  const doLogout = () => {
    setLoggedIn(false)
    setPassword('')
    setError('')
    setContacts([])
  }

  const deleteContact = async (id) => {
    if (!window.confirm('למחוק פנייה זו?')) return
    try {
      await fetch(`${API}/api/contacts/${id}`, { method: 'DELETE' })
      loadContacts()
    } catch {
      alert('שגיאה במחיקה')
    }
  }

  const now = new Date()
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const weekStart = new Date(todayStart)
  weekStart.setDate(weekStart.getDate() - 7)
  const todayCount = contacts.filter(c => new Date(c.createdAt) >= todayStart).length
  const weekCount = contacts.filter(c => new Date(c.createdAt) >= weekStart).length

  useEffect(() => {
    document.title = 'ניהול פניות | ערן בקר'
  }, [])

  if (!loggedIn) {
    return (
      <div style={styles.body}>
        <div style={styles.loginWrap}>
          <div style={styles.loginBox}>
            <h1 style={styles.loginTitle}>ניהול פניות</h1>
            <p style={styles.loginSub}>ערן בקר — חברת עורכי דין</p>
            <input
              type="password"
              placeholder="הזינו סיסמה"
              value={password}
              onChange={e => setPassword(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && doLogin()}
              style={styles.loginInput}
            />
            <button onClick={doLogin} style={styles.loginBtn}>כניסה</button>
            {error && <div style={styles.loginError}>{error}</div>}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={styles.body}>
      <div style={styles.dashHeader}>
        <h1 style={styles.dashTitle}>ניהול פניות — ערן בקר</h1>
        <div style={styles.dashInfo}>
          <span style={styles.contactCount}>{contacts.length} פניות</span>
          <button style={styles.dashLogout} onClick={doLogout}>יציאה</button>
        </div>
      </div>
      <div style={styles.dashBody}>
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={styles.statNum}>{contacts.length}</div>
            <div style={styles.statLabel}>סה"כ פניות</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNum}>{todayCount}</div>
            <div style={styles.statLabel}>היום</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNum}>{weekCount}</div>
            <div style={styles.statLabel}>השבוע</div>
          </div>
        </div>
        <div>
          {loading ? (
            <div style={styles.emptyState}>
              <div style={styles.emptyIcon}>📭</div>
              <p>טוען פניות...</p>
            </div>
          ) : contacts.length === 0 ? (
            <div style={styles.emptyState}>
              <div style={styles.emptyIcon}>📭</div>
              <p>אין פניות עדיין</p>
            </div>
          ) : (
            contacts.map(c => {
              const date = new Date(c.createdAt)
              const dateStr = date.toLocaleDateString('he-IL') + ' ' + date.toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' })
              const fullName = `${c.fname || ''} ${c.lname || ''}`.trim()
              const waPhone = (c.phone || '').replace(/^0/, '').replace(/-/g, '')
              const waText = encodeURIComponent(`שלום ${fullName}, קיבלנו את פנייתך באתר ערן בקר חברת עורכי דין. נשמח לסייע!`)
              return (
                <div key={c._id} style={styles.contactCard}>
                  <div>
                    <div style={styles.ccName}>{fullName}</div>
                    <div style={styles.ccDetail}><a href={`tel:${c.phone}`} style={styles.ccLink}>{c.phone}</a></div>
                    {c.email && <div style={styles.ccDetail}><a href={`mailto:${c.email}`} style={styles.ccLink}>{c.email}</a></div>}
                  </div>
                  <div style={styles.ccMessage}>{c.message || '—'}</div>
                  <div style={styles.ccDate}>{dateStr}</div>
                  <div style={styles.ccActions}>
                    <a href={`https://wa.me/972${waPhone}?text=${waText}`} target="_blank" rel="noopener noreferrer" style={styles.ccBtnWa}>💬 וואטסאפ</a>
                    <button style={styles.ccBtnDel} onClick={() => deleteContact(c._id)}>🗑️</button>
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}
