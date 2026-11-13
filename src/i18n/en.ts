// English copy for the home page. es.ts must provide every key (see Dict).
// Feature claims mirror the 4.18+ app and the store listing; Premium items
// mirror the app's subscription.premiumFeatures list.

export type Shot = 'today' | 'money' | 'schedule' | 'clients' | 'tax' | 'client'

export type IconName =
  | 'scissors'
  | 'wallet'
  | 'calendar'
  | 'users'
  | 'receipt'
  | 'clock'
  | 'link'
  | 'repeat'
  | 'history'
  | 'download'
  | 'sparkles'
  | 'message'
  | 'bell'
  | 'gift'
  | 'globe'
  | 'chart'

const en = {
  shotDir: '/app/en',
  nav: {
    features: 'Features',
    calculator: 'Calculator',
    howItWorks: 'How it works',
    pricing: 'Pricing',
    download: 'Get the app',
    home: "Barber's Book home",
  },
  badges: {
    appStoreImg:
      'https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1617926400',
    appStoreImgWhite:
      'https://tools.applemediaservices.com/api/badges/download-on-the-app-store/white/en-us?size=250x83&releaseDate=1617926400',
    appStoreAlt: 'Download on the App Store',
    playImg: 'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png',
    playAlt: 'Get it on Google Play',
  },
  hero: {
    eyebrow: 'New: the redesigned app is here',
    title1: 'Know what you',
    title2: 'really take home.',
    body: "Log a cut in seconds and Barber's Book does the math: your real take-home after the shop's cut, expenses and taxes. Plus a free booking link, a walk-in waitlist, and every client remembered.",
    priceBefore: 'Free to use. Premium is free for 14 days, then',
    priceAfter: '$4.99/mo.',
    platforms: 'iPhone, iPad and Android',
    shotAltFront: 'The Money screen showing take-home pay after shop cut, expenses and taxes',
    shotAltBack: "The Today screen showing what you made, who's next and who needs you",
    float: {
      cutLabel: 'Cut logged',
      cutValue: 'Haircut + Beard',
      cutAmount: '+$45',
      cutTip: '+$3 tip',
      taxLabel: 'Next quarterly payment',
      taxValue: 'Set aside $1,056',
      taxDate: 'JAN',
      dueLabel: 'Due for a cut',
      dueValue: 'Andre Morales',
      dueAction: 'Book',
    },
  },
  marquee: [
    'Booth renters',
    'Commission barbers',
    'Shop owners',
    'Log a cut in seconds',
    'Free booking link',
    'Walk-in waitlist',
    'Tax set-aside',
    'English y español',
  ],
  story: {
    eyebrow: 'The app',
    title: 'Your whole business, in your pocket.',
    subtitle: 'Five screens. Everything a barber needs, nothing you have to figure out.',
    chapters: [
      {
        shot: 'today' as Shot,
        tag: 'Today',
        title: 'Your day at a glance.',
        body: "Open the app and see what you made, who's up next, booking requests waiting on you, and regulars who are due back.",
        bullets: ['One tap to log a cut', 'Booking requests and walk-ins in one place', 'A daily heads-up for tomorrow'],
        alt: "The Today screen: what you made, who needs you, and who's up next",
      },
      {
        shot: 'money' as Shot,
        tag: 'Money',
        title: 'What you really keep.',
        body: "Your real take-home after the shop's cut, your expenses and taxes. Flip between week, month and year and spot your best months.",
        bullets: ['Commission, chair rent or per-cut fee', 'Services and tips side by side', 'Twelve months of history at a glance'],
        alt: 'The Money screen: take-home broken down into yours, tax, expenses and shop',
      },
      {
        shot: 'tax' as Shot,
        tag: 'Taxes',
        title: 'No surprises at tax time.',
        body: 'A running tax estimate tells you how much to set aside, with a countdown to each quarterly payment. See which services bring in the most.',
        bullets: ['Your rate, your rules', 'Quarterly payment countdown', 'Top services ranked by revenue'],
        alt: 'The tax card with the next quarterly payment and top services',
      },
      {
        shot: 'schedule' as Shot,
        tag: 'Schedule',
        title: 'A booking page that costs nothing.',
        body: 'Day, week and month views in one place. Share your free booking link so clients book themselves, approve requests, and run your walk-in line from your phone.',
        bullets: ['Free booking link for every barber', 'Approve or decline requests', 'Walk-in waitlist with a QR code'],
        alt: 'The weekly schedule with bookings across seven days',
      },
      {
        shot: 'clients' as Shot,
        tag: 'Clients',
        title: 'Remember every client.',
        body: "Visits, usual cut, notes, tips and what they've spent with you. See who is due for a cut and book or text them in one tap.",
        bullets: ['Who is due back, before they drift', 'Notes like "low skin fade, #3 on top"', 'Book or text in one tap'],
        alt: 'The Clients screen with regulars who are due for a cut',
      },
    ],
  },
  calc: {
    eyebrow: 'Take-home calculator',
    title: 'Where does your money actually go?',
    subtitle: 'Move the sliders to match a typical week. This is the same math the app runs on every cut you log.',
    services: 'Services per week',
    tips: 'Tips per week',
    payLabel: 'How you get paid',
    commission: 'Commission',
    rent: 'Chair rent',
    shopPct: "Shop's cut of services",
    rentWeek: 'Chair rent per week',
    expenses: 'Supplies and other expenses',
    taxRate: 'Tax set-aside rate',
    resultLabel: 'You take home',
    perWeek: '/ week',
    perYear: 'About {amount} a year',
    yours: 'Yours',
    tax: 'Tax set-aside',
    expensesShort: 'Expenses',
    shop: 'Shop',
    disclaimer: 'An estimate, not tax advice. Tax is set aside from what is left after the shop and your expenses.',
    cta: 'Track it for real, free',
  },
  bento: {
    eyebrow: 'Features',
    title: 'Built for how barbers actually work.',
    subtitle: "Free to use, with Premium when you're ready for more.",
    free: 'Free',
    premium: 'Premium',
    items: [
      {
        icon: 'scissors' as IconName,
        title: 'Log a cut in seconds',
        body: 'Service, price, tip and how they paid. The app does the rest of the math.',
        size: 'lg',
        visual: 'keypad',
      },
      {
        icon: 'wallet' as IconName,
        title: 'Real take-home',
        body: "After the shop's cut, expenses and taxes. Not just what came in.",
        size: 'lg',
        visual: 'bar',
      },
      {
        icon: 'link' as IconName,
        title: 'Free booking link',
        body: 'Clients pick a service and a time. No app download on their end.',
        size: 'sm',
      },
      {
        icon: 'clock' as IconName,
        title: 'Walk-in waitlist',
        body: 'Clients scan your QR code and wait anywhere, not in your shop.',
        size: 'sm',
      },
      {
        icon: 'receipt' as IconName,
        title: 'Expenses',
        body: 'Chair rent, supplies, tools. Every deductible cost in one place.',
        size: 'sm',
      },
      {
        icon: 'bell' as IconName,
        title: 'Daily schedule heads-up',
        body: "A notification with today's or tomorrow's lineup, at the time you pick.",
        size: 'sm',
      },
      {
        icon: 'users' as IconName,
        title: 'Clients due back',
        body: 'See which regulars are overdue and text or book them in one tap.',
        size: 'sm',
        badge: 'premium',
      },
      {
        icon: 'chart' as IconName,
        title: 'Tax set-aside tracking',
        body: "Log what you put away for taxes and see what's still left to save.",
        size: 'sm',
        badge: 'premium',
      },
      {
        icon: 'repeat' as IconName,
        title: 'Recurring appointments',
        body: 'Weekly, biweekly or monthly standing bookings. Set it once.',
        size: 'sm',
        badge: 'premium',
      },
      {
        icon: 'history' as IconName,
        title: 'Your full money history',
        body: "Every month and year you've logged, not just this month and last.",
        size: 'sm',
        badge: 'premium',
      },
      {
        icon: 'sparkles' as IconName,
        title: "Your shop's look",
        body: "Your booking page, waitlist, texts and emails, branded for you.",
        size: 'sm',
        badge: 'premium',
      },
      {
        icon: 'globe' as IconName,
        title: 'English y español',
        body: 'The whole app, booking page and texts work in both languages.',
        size: 'sm',
      },
    ] as {
      icon: IconName
      title: string
      body: string
      size: 'lg' | 'sm'
      visual?: 'keypad' | 'bar'
      badge?: 'premium'
    }[],
    keypad: { service: 'Haircut + Beard', tip: 'Tip', method: 'Cash', save: 'Log cut' },
  },
  how: {
    eyebrow: 'Get started',
    title: 'Set up before your next client sits down.',
    steps: [
      {
        title: 'Download and sign up',
        body: 'Free on the App Store and Google Play. Tell it how you get paid: commission, chair rent or a per-cut fee.',
      },
      {
        title: 'Add your services',
        body: 'Prices for your cuts, your hours, and you get a booking link and waitlist QR code to share.',
      },
      {
        title: 'Log every cut',
        body: 'Tap, pick the service, add the tip. Your take-home, tax estimate and client history update on their own.',
      },
    ],
  },
  pricing: {
    eyebrow: 'Pricing',
    title: 'Free to start. Cheap to grow.',
    subtitle: 'Less than a cup of coffee a week for everything. Cancel anytime.',
    freeName: 'Free',
    freePrice: '$0',
    freeNote: 'Forever. No card needed.',
    freeFeatures: [
      'Log unlimited cuts and tips',
      'Take-home after shop cut and expenses',
      'This month and last at a glance',
      'Free booking link and walk-in waitlist',
      'Client list, notes and visit history',
      'Running tax estimate',
    ],
    premiumName: 'Premium',
    trial: '14-day free trial',
    perMonth: '/ month',
    premiumNote: 'Free for 14 days, then $4.99/mo. Cancel anytime.',
    premiumLead: 'Everything in Free, plus:',
    premiumFeatures: [
      'Your full money history, every month and year',
      'Clients due back, with one-tap book or text',
      'Tax set-aside tracking',
      'Recurring appointments',
      "Your shop's look on booking page, texts and emails",
      'Texts in your words',
      'Unlimited data export',
    ],
    cta: 'Start free',
    referral: 'Invite another barber and get a free month of Premium when they start using the app.',
  },
  testimonials: {
    eyebrow: 'Barbers love it',
    title: 'From solo chairs to full shops.',
    items: [
      {
        name: 'Sofia Martinez',
        role: 'Shop Owner, Miami',
        initials: 'SM',
        text: "I used to keep a notebook for everything. Now Barber's Book tracks every service, every expense, and every tip. The earnings charts showed me my Fridays are twice as profitable, so I stopped taking Mondays off.",
      },
      {
        name: 'James Lee',
        role: 'Independent Barber, LA',
        initials: 'JL',
        text: 'The waitlist is incredible. Customers scan my QR code from their car, wait outside, and walk in right on time. No more crowded shop. My clients love it and honestly so do I.',
      },
    ],
  },
  cta: {
    title1: 'Your next cut could be',
    title2: 'the first one you track.',
    body: 'Download free. See your real take-home by the end of the day.',
    foot: 'Free to use · Cancel Premium anytime · Your data is always yours',
  },
  footer: {
    tagline:
      'The simple way for barbers to see what they really take home, keep their chair full, and remember every client.',
    product: 'Product',
    features: 'Features',
    calculator: 'Calculator',
    pricing: 'Pricing',
    downloadHeading: 'Download',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    cookies: 'Cookie Policy',
    rights: '© 2026 eansolutions llc. All rights reserved.',
    contact: 'support@thebarbersbook.com',
  },
}

export type Dict = typeof en
export default en
