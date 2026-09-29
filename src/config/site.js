/**
 * Single source of truth for firm details and third-party IDs.
 * Everything that used to be copy-pasted across components (phones, address,
 * email, GA / EmailJS IDs, canonical origin) lives here. Change it once.
 */
export const site = {
  name: 'ערן בקר – חברת עורכי דין',
  shortName: 'ערן בקר',
  legalName: 'ערן בקר חברת עורכי דין',
  tagline: 'נזיקין · ביטוח · רשלנות רפואית',
  founder: 'עו"ד ערן בקר',
  foundedYear: 2003,

  /** Canonical origin — no trailing slash. Used for canonical/og:url and the sitemap. */
  origin: 'https://www.ebeker.co.il',

  address: {
    street: 'הגעתון 26',
    city: 'נהריה',
    postalCode: '2240117',
    country: 'IL',
    /** Display string used wherever the address is printed. */
    full: 'הגעתון 26, נהריה 2240117',
    short: 'הגעתון 26, נהריה',
  },

  phones: {
    office: { display: '04-9001056', href: 'tel:049001056', e164: '+97249001056' },
    whatsapp: { display: '052-2611850', number: '9720522611850' },
    fax: { display: '04-9001057', e164: '+97249001057' },
  },

  email: 'office@ebeker.co.il',
  facebook: 'https://www.facebook.com/eranbeker',

  /** Logo path (under /public). Also used for JSON-LD. */
  logo: '/pics/logo.avif',
  /** Default Open Graph image (under /public). */
  ogImage: '/pics/eran-becker-about.webp',

  mapsEmbedUrl: 'https://www.google.com/maps?q=%D7%94%D7%92%D7%A2%D7%AA%D7%95%D7%9F+26,+%D7%A0%D7%94%D7%A8%D7%99%D7%94&output=embed',

  analytics: {
    gaMeasurementId: 'G-1VQ4L8M74D',
  },

  emailjs: {
    serviceId: 'service_4gtlju6',
    templateId: 'template_dpweehy',
    publicKey: 'rkpi4VhBWiyvwO6t0',
  },

  accessibility: {
    coordinatorName: 'עו"ד ערן בקר',
    coordinatorTitle: 'רכז הנגישות של המשרד',
    phone: { display: '04-9001056', href: 'tel:049001056' },
    email: 'office@ebeker.co.il',
    /** Promised response time, in business days. */
    responseDays: 5,
  },
}

/** Default message pre-filled in WhatsApp links. */
/* The one approved consultation phrase. Used by every CTA; do not add cost wording. */
export const CONSULT_PHRASE = 'ייעוץ ראשוני אישי ללא התחייבות'

export const WHATSAPP_DEFAULT_TEXT = 'שלום, אני מעוניין/ת בייעוץ משפטי'

/** Build a wa.me link to the office WhatsApp, optionally with pre-filled text. */
export function whatsappLink(text = WHATSAPP_DEFAULT_TEXT) {
  const base = `https://wa.me/${site.phones.whatsapp.number}`
  return text ? `${base}?text=${encodeURIComponent(text)}` : base
}

/** Page title in the site-wide format. */
export function pageTitle(title) {
  return title ? `${title} | ${site.name}` : site.name
}
