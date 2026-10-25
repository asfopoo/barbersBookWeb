// English copy for the home page. es.ts must provide every key (see Dict).
const en = {
  nav: {
    features: 'Features',
    booking: 'Booking',
    howItWorks: 'How It Works',
    pricing: 'Pricing',
    download: 'Download Free',
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
    pill: 'Earnings, Bookings & Waitlist. One App.',
    line1: 'Track Every Dollar.',
    line2: 'Fill Your Chair.',
    line3: 'Grow Your Shop.',
    bodyBefore:
      'The all-in-one app for barbers: log every cut and tip, take bookings online, run your digital waitlist, and stay ahead at tax time. Try Premium free for 14 days, then',
    bodyAfter: '$4.99/mo. Cancel anytime.',
    chips: ['Earnings Tracking', 'Online Booking', 'Tax Estimate · Free', 'Digital Waitlist'],
    mock: {
      todayEarnings: "Today's Earnings",
      services: '12 services',
      tips: '$52 tips',
      nextAppt: 'Next appointment',
      nextApptValue: 'Classic Cut · 2:30 PM',
      bookedOnline: 'Booked online',
      confirmed: 'Confirmed',
      taxEstimate: 'Tax Estimate',
      setAside: '$121.75 to set aside',
      rate: '25% rate • from logged earnings',
      waitlist: 'Waitlist',
      waiting: '4 customers waiting',
      next: 'Next: Marcus J. · 5 min',
    },
  },
  key: {
    booking: {
      pill: 'Online Booking',
      title: 'Let Customers Book You Anytime',
      body: 'Share your booking link and customers pick a service and an open time on their own. Every booking lands on your calendar, and you set the rules for when and how far ahead people can book.',
      points: [
        {
          title: 'Your Own Booking Page',
          text: 'Customers see your services, prices, and open times. No app download required on their end.',
        },
        {
          title: 'Automatic Reminders',
          text: 'Customers get reminded before their appointment, with a link to cancel if plans change.',
        },
        {
          title: 'Your Booking Rules',
          text: 'Set your hours, minimum notice, booking window, and cancellation cutoff.',
        },
      ],
      today: 'Today',
      appts: [
        { time: '10:00 AM', name: 'Skin Fade', who: 'Marcus J.', tag: 'Booked online' },
        { time: '11:30 AM', name: 'Classic Cut', who: 'Andre W.', tag: 'Recurring' },
        { time: '2:30 PM', name: 'Cut + Beard', who: 'Luis R.', tag: 'Booked online' },
      ],
    },
    earnings: {
      img: '/screenshots/earnings.png',
      imgAlt: 'Earnings overview screen',
      imgTall: false,
      pill: 'Earnings & Analytics',
      title: 'See Every Dollar You Earn',
      body: 'Log each service with price, tip, service type, and payment method. View daily, weekly, and monthly earnings charts. Know your top services, best days, and exactly how your business is growing.',
      points: [
        {
          title: 'Service + Tip Breakdown',
          text: 'Track service revenue and tips separately, with payment method per transaction',
        },
        {
          title: 'Visual Analytics',
          text: 'Daily, weekly, and monthly charts make trends and growth easy to spot',
        },
        {
          title: 'Top Services & Best Days',
          text: 'Identify what drives your revenue so you can make smarter business decisions',
        },
      ],
    },
    tax: {
      pill: 'Tax Estimate',
      pillBadge: 'FREE for everyone',
      title: 'Never Get Caught Off Guard at Tax Time',
      body: "As a self-employed barber, taxes can sneak up on you. Barber's Book estimates what you owe from the earnings you log, so you know how much to put aside before the bill comes. Set your rate once and check in anytime.",
      points: [
        {
          title: 'Built From Your Real Earnings',
          text: 'Every cut and tip you log updates your estimate. You choose whether cash earnings count.',
        },
        {
          title: 'Your Rate, Your Rules',
          text: 'Set your own estimate rate. Most self-employed barbers use 25 to 30%.',
        },
        {
          title: 'Free for Everyone',
          text: 'The running tax estimate is included on every plan, including free.',
        },
      ],
      ytd: 'Year-to-date earnings',
      estimated: 'Estimated tax',
      rate: '25% rate · from logged earnings',
    },
    waitlist: {
      img: '/screenshots/waitlist.png',
      imgAlt: 'Digital Waitlist management',
      pill: 'Digital Waitlist',
      title: 'Your Customers Wait Anywhere',
      body: "No more crowded waiting areas. Customers scan your QR code or visit your shop's unique link to join the queue from anywhere. They get real-time updates on their phone. You manage everything from the app.",
      points: [
        {
          title: 'QR Code Check-In',
          text: 'Customers scan and join instantly. No app download required on their end.',
        },
        {
          title: 'Real-Time Position Updates',
          text: 'They always know where they stand in line and when to head over',
        },
        {
          title: 'SMS & Email Alerts (Premium)',
          text: 'Automatically notify customers when their turn is coming up. Never a missed appointment.',
        },
      ],
    },
  },
  features: {
    title: 'Everything You Need to Run Your Shop',
    subtitle:
      "Barber's Book is built specifically for barbers, with real earnings tracking, online booking, tax tools, and a real waitlist system.",
    free: 'Free',
    premium: 'Premium',
    legendLabel: 'Badges:',
    legendFree: '= included in the free plan',
    legendPremiumBefore: '= included in Premium (',
    legendPremiumAfter: '$4.99/mo, 14-day free trial)',
    items: [
      {
        icon: '📅',
        title: 'Online Booking',
        description:
          'Share your booking link and let customers pick a service and an open time. Every booking lands on your calendar.',
      },
      {
        icon: '🗓️',
        title: 'Appointment Calendar',
        description:
          'See your day at a glance, add appointments yourself, and mark them done when the cut is finished.',
      },
      {
        icon: '🧾',
        title: 'Tax Estimation',
        description:
          'See a running estimate of your tax bill based on the earnings you log, so you know what to set aside.',
        badge: 'free',
      },
      {
        icon: '💰',
        title: 'Earnings Tracking',
        description:
          'Log every service with price, tip, service type, and payment method. Know exactly how much you made today.',
      },
      {
        icon: '📊',
        title: 'Visual Analytics',
        description:
          'Daily, weekly, and monthly charts show your earnings trends, top services, and best-performing days.',
      },
      {
        icon: '💸',
        title: 'Expense Management',
        description:
          'Track chair rent, supplies, and other business costs by category. See your real net income automatically.',
      },
      {
        icon: '✂️',
        title: 'Service Management',
        description:
          'Create your custom service menu with prices. Log earnings for any service in seconds.',
      },
      {
        icon: '⏰',
        title: 'Digital Waitlist',
        description:
          'Customers scan your QR code to join your queue from anywhere. Manage walk-ins without the chaos.',
      },
      {
        icon: '🔁',
        title: 'Recurring Appointments',
        description:
          'Turn any booking into a standing weekly, biweekly, or monthly reservation. Set it once and stop chasing rebookings.',
        badge: 'premium',
      },
      {
        icon: '🔔',
        title: 'SMS & Email Notifications',
        description:
          "Notify customers via SMS and email when it's their turn. Keep them informed, keep them happy.",
        badge: 'premium',
      },
      {
        icon: '🎨',
        title: "Your Shop's Look",
        description:
          "Your booking page, waitlist, texts, and emails. Branded for you, not The Barber's Book.",
        badge: 'premium',
      },
      {
        icon: '🏪',
        title: 'Multi-Location',
        description:
          'Manage multiple shop locations from one account. Switch between locations instantly.',
        badge: 'premium',
      },
      {
        icon: '📤',
        title: 'Unlimited Data Export',
        description:
          'Export and backup your full earnings and expense history anytime. Your data belongs to you.',
        badge: 'premium',
      },
      {
        icon: '🕰️',
        title: 'Unlimited History',
        description:
          'Access all your metrics and earnings data forever. No 30-day cap, no auto-archive.',
        badge: 'premium',
      },
    ] as { icon: string; title: string; description: string; badge?: 'free' | 'premium' }[],
  },
  how: {
    title: 'Up and Running in Minutes',
    subtitle: "Barber's Book is built to get out of your way. Set up once, then just run your shop.",
    step: 'Step',
    steps: [
      {
        emoji: '📲',
        title: 'Download & Create Account',
        description:
          "Get Barber's Book from the App Store or Google Play. Create your free account and set up your shop profile in minutes.",
      },
      {
        emoji: '✂️',
        title: 'Add Your Services',
        description:
          'Add your services with pricing, set your hours, and grab your booking link and waitlist QR code.',
      },
      {
        emoji: '📅',
        title: 'Take Bookings & Log Every Cut',
        description:
          'Customers book online or join your waitlist. After each cut, log the service, tip, and how they paid in seconds.',
      },
      {
        emoji: '📊',
        title: 'Track, Save for Taxes & Grow',
        description:
          'Monitor daily earnings, keep an eye on your tax estimate, manage expenses, and analyze your business performance.',
      },
    ],
  },
  pricing: {
    title: 'One Plan. Everything Included.',
    subtitle:
      'Earnings tracking, online booking, tax tools, analytics, and a digital waitlist. All in one app for less than a cup of coffee a week.',
    banner: "BARBER'S BOOK PREMIUM",
    trial: '14-day free trial',
    perMonth: '/ month',
    noteBefore: 'Try Premium free for 14 days.',
    noteAfter: '$4.99/mo after, cancel anytime.',
    appStore: 'Download on the App Store',
    play: 'Get it on Google Play',
    features: [
      { text: 'Online booking page', note: 'customers book open times themselves' },
      { text: 'Recurring Appointments', note: 'weekly, biweekly, or monthly standing reservations' },
      { text: 'Tax Estimation', note: 'running estimate from your logged earnings' },
      { text: 'Earnings & tips tracking' },
      { text: 'Visual analytics', note: 'daily, weekly, monthly' },
      { text: 'Digital waitlist (unlimited customers)' },
      { text: 'Expense tracking & net income' },
      { text: 'Service management' },
      { text: 'Unlimited History', note: 'all your metrics and earnings forever' },
      { text: 'Unlimited Data Export', note: 'export and backup anytime' },
      { text: 'Multi-Location', note: 'manage multiple shop locations from one account' },
      { text: 'SMS & Email Notifications', note: "notify customers when it's their turn" },
      { text: "Your Shop's Look", note: 'your booking page, waitlist, texts, and emails branded for you' },
    ] as { text: string; note?: string }[],
  },
  testimonials: {
    title: 'Barbers Love It',
    subtitle: "From solo barbers to multi-chair shops, Barber's Book is built for how you actually work.",
    items: [
      {
        name: 'Sofia Martinez',
        role: 'Shop Owner, Miami',
        image: '👩🏽',
        text: "I used to keep a notebook for everything. Now Barber's Book tracks every service, every expense, and every tip. The earnings charts showed me my Fridays are twice as profitable, so I stopped taking Mondays off.",
      },
      {
        name: 'James Lee',
        role: 'Independent Barber, LA',
        image: '👨🏻',
        text: 'The waitlist is incredible. Customers scan my QR code from their car, wait outside, and walk in right on time. No more crowded shop. My clients love it and honestly so do I.',
      },
    ],
  },
  cta: {
    pill: '14-day free trial. No credit card required to start.',
    title: 'Ready to Run Your Shop Smarter?',
    bodyBefore:
      'Get online booking, a digital waitlist, a running tax estimate, and full earnings tracking. Try Premium free for 14 days, then',
    bodyAfter: '$4.99/mo. Cancel anytime.',
    footBefore: 'Cancel Premium anytime',
    footAfter: 'Your data is always yours',
  },
  footer: {
    tagline:
      'The all-in-one app for barbers: track earnings, take bookings, manage your waitlist, and stay on top of taxes.',
    product: 'Product',
    features: 'Features',
    booking: 'Booking',
    pricing: 'Pricing',
    download: 'Download',
    downloadHeading: 'Download',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    cookies: 'Cookie Policy',
    rights: '© 2026 eansolutions llc. All rights reserved.',
  },
}

export type Dict = typeof en
export default en
