import useRevealOnScroll from '../hooks/useRevealOnScroll'
import PageBanner from '../components/PageBanner'
import CTASection from '../components/CTASection'

export default function TaxExemption() {
  useRevealOnScroll()

  return (
    <>
      <PageBanner
        crumbs={[
          { label: 'תחומי עיסוק', to: '/#areas' },
          { label: 'פטור ממס הכנסה' }
        ]}
        title="פטור ממס"
        accent="הכנסה"
      />

      <section className="content-section">
        <div className="content-container">

          <div className="reveal">
            <h2>מיהו זכאי לפטור ממס הכנסה?</h2>
            <p>החל מה-1.7.2003 תוקן סעיף 9(5) לפקודת מס הכנסה, המקנה פטור ממס עבור הכנסות של נכים. הזכאים לפטור הם:</p>
            <ul>
              <li><strong>עיוור</strong> — פטור מלא</li>
              <li><strong>נכה בשיעור של 100%</strong> — פטור מלא</li>
              <li><strong>נכה בשיעור של 90%</strong> — נכות מפגיעות באיברים לפי חישוב מיוחד</li>
              <li><strong>נכה בשיעור 89%</strong> — נכות צמיתה לפי חישוב מיוחד</li>
            </ul>
          </div>

          <div className="highlight-box reveal">
            <h3>&#9888;&#65039; חשוב לדעת</h3>
            <p>פטור מס הכנסה יחול על <strong>נכות רפואית בלבד</strong> — ולא על נכות תפקודית. בנוסף, הפטור ניתן רק אם תקופת הנכות הכוללת עולה על <strong>184 יום</strong>, עד לתקרת הכנסה המתעדכנת מידי שנה.</p>
          </div>

          <div className="reveal">
            <h2>מי שנכותו נקבעה כבר — יכול להסתמך עליה</h2>
            <p>מי שנכותו נקבעה כבר על ידי ועדה רפואית, במסגרת אחת מהתביעות הבאות, יכול להסתמך על קביעה זו גם לצורך תביעתו לקבלת פטור ממס הכנסה:</p>
            <ul>
              <li>תביעה בגין פגיעה מעבודה (ביטוח לאומי)</li>
              <li>תביעה במסגרת חוק הנכים (תגמולים ושיקום)</li>
              <li>תביעה במסגרת חוק נכי רדיפות הנאצים</li>
              <li>חוק התגמולים לנפגעי פעולות איבה</li>
              <li>חוק הפיצויים לנפגעי גזזת</li>
            </ul>
          </div>

          <div className="reveal">
            <h2>ערעור על החלטת הועדה הרפואית</h2>
            <p>על החלטת הועדה הרפואית ניתן לערער בפני ועדה רפואית לערעורים. אולם, החלטת הועדה הרפואית לערעורים היא <strong>סופית</strong> ולא ניתן לערער עליה.</p>
            <p>מי שהגיש תביעה לקבלת פטור ולא עמד בסף — יהיה רשאי להגיש תביעה במסגרת הליך של <strong>החמרת מצב</strong>, בחלוף 6 חודשים מהמועד בו נבדק על ידי הועדה הרפואית בפעם האחרונה.</p>
          </div>

          <div className="info-card reveal">
            <h3>&#128222; פנו אלינו לייעוץ</h3>
            <p>בכדי לברר האם אתם זכאים לפטור ממס הכנסה ומהם הצעדים הנדרשים, ניתן לקבוע שיחת ייעוץ ללא עלות וללא התחייבות. <a href="tel:049001056" style={{ color: 'var(--teal)', fontWeight: 700 }}>04-9001056</a></p>
          </div>

        </div>
      </section>

      <CTASection title="האם אתם זכאים לפטור ממס?" subtitle="ייעוץ ראשוני ללא עלות וללא התחייבות" />
    </>
  )
}
