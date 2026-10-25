import type { Dict } from './en'

// Spanish (Latin America, tuteo) copy for /es. Product terms follow the app's es.json.
const es: Dict = {
  nav: {
    features: 'Funciones',
    booking: 'Reservas',
    howItWorks: 'Cómo funciona',
    pricing: 'Precio',
    download: 'Descarga gratis',
  },
  badges: {
    appStoreImg:
      'https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/es-mx?size=250x83&releaseDate=1617926400',
    appStoreImgWhite:
      'https://tools.applemediaservices.com/api/badges/download-on-the-app-store/white/es-mx?size=250x83&releaseDate=1617926400',
    appStoreAlt: 'Descárgalo en el App Store',
    playImg: 'https://play.google.com/intl/es-419/badges/static/images/badges/es-419_badge_web_generic.png',
    playAlt: 'Disponible en Google Play',
  },
  hero: {
    pill: 'Ingresos, reservas y lista de espera. Una sola app.',
    line1: 'Controla cada dólar.',
    line2: 'Llena tu silla.',
    line3: 'Haz crecer tu negocio.',
    bodyBefore:
      'La app todo en uno para barberos: registra cada corte y propina, recibe reservas en línea, maneja tu lista de espera digital y llega preparado a la temporada de impuestos. Prueba Premium gratis por 14 días y después',
    bodyAfter: '$4.99/mes. Cancela cuando quieras.',
    chips: ['Control de ingresos', 'Reservas en línea', 'Estimado de impuestos · Gratis', 'Lista de espera digital'],
    mock: {
      todayEarnings: 'Ingresos de hoy',
      services: '12 servicios',
      tips: '$52 en propinas',
      nextAppt: 'Próxima cita',
      nextApptValue: 'Corte clásico · 2:30 PM',
      bookedOnline: 'Reservó en línea',
      confirmed: 'Confirmada',
      taxEstimate: 'Estimado de impuestos',
      setAside: '$121.75 para apartar',
      rate: 'Tasa del 25% • según tus ingresos registrados',
      waitlist: 'Lista de espera',
      waiting: '4 clientes esperando',
      next: 'Sigue: Marcus J. · 5 min',
    },
  },
  key: {
    booking: {
      pill: 'Reservas en línea',
      title: 'Que tus clientes reserven a cualquier hora',
      body: 'Comparte tu enlace de reservas y tus clientes eligen un servicio y un horario libre por su cuenta. Cada reserva llega a tu agenda, y tú pones las reglas de cuándo y con cuánta anticipación pueden reservar.',
      points: [
        {
          title: 'Tu propia página de reservas',
          text: 'Tus clientes ven tus servicios, precios y horarios libres. No tienen que descargar ninguna app.',
        },
        {
          title: 'Recordatorios automáticos',
          text: 'Tus clientes reciben un recordatorio antes de su cita, con un enlace para cancelar si cambian de planes.',
        },
        {
          title: 'Tus reglas de reserva',
          text: 'Define tu horario, el aviso mínimo, hasta cuándo se puede reservar y el límite para cancelar.',
        },
      ],
      today: 'Hoy',
      appts: [
        { time: '10:00 AM', name: 'Skin fade', who: 'Marcus J.', tag: 'Reservó en línea' },
        { time: '11:30 AM', name: 'Corte clásico', who: 'Andre W.', tag: 'Recurrente' },
        { time: '2:30 PM', name: 'Corte + barba', who: 'Luis R.', tag: 'Reservó en línea' },
      ],
    },
    earnings: {
      img: '/screenshots/es/money.webp',
      imgAlt: 'Pantalla Dinero con lo que te queda del mes',
      imgTall: true,
      pill: 'Ingresos y estadísticas',
      title: 'Mira cada dólar que ganas',
      body: 'Registra cada servicio con precio, propina, tipo de servicio y forma de pago. Ve gráficas de tus ingresos por día, semana y mes. Conoce tus mejores servicios, tus mejores días y cómo va creciendo tu negocio.',
      points: [
        {
          title: 'Servicios y propinas por separado',
          text: 'Lleva por separado lo que ganas en servicios y en propinas, con la forma de pago de cada cobro',
        },
        {
          title: 'Estadísticas visuales',
          text: 'Las gráficas por día, semana y mes te muestran tus tendencias y tu crecimiento',
        },
        {
          title: 'Mejores servicios y mejores días',
          text: 'Descubre qué te deja más dinero para tomar mejores decisiones en tu negocio',
        },
      ],
    },
    tax: {
      pill: 'Estimado de impuestos',
      pillBadge: 'GRATIS para todos',
      title: 'Que los impuestos no te tomen por sorpresa',
      body: "Como barbero independiente, los impuestos te pueden agarrar desprevenido. Barber's Book estima lo que debes según los ingresos que registras, para que sepas cuánto apartar antes de que llegue la cuenta. Pon tu tasa una vez y revísalo cuando quieras.",
      points: [
        {
          title: 'Basado en tus ingresos reales',
          text: 'Cada corte y propina que registras actualiza tu estimado. Tú decides si cuentan los ingresos en efectivo.',
        },
        {
          title: 'Tu tasa, tus reglas',
          text: 'Elige tu propia tasa. La mayoría de los barberos independientes usan entre 25 y 30%.',
        },
        {
          title: 'Gratis para todos',
          text: 'El estimado de impuestos viene en todos los planes, incluido el gratis.',
        },
      ],
      ytd: 'Ingresos en lo que va del año',
      estimated: 'Impuestos estimados',
      rate: 'Tasa del 25% · según tus ingresos registrados',
    },
    waitlist: {
      img: '/screenshots/waitlist.png',
      imgAlt: 'Manejo de la lista de espera digital',
      pill: 'Lista de espera digital',
      title: 'Tus clientes esperan desde donde quieran',
      body: 'Se acabaron las salas de espera llenas. Tus clientes escanean tu código QR o abren el enlace de tu barbería para unirse a la fila desde cualquier lugar. Reciben avisos en tiempo real en su teléfono, y tú lo manejas todo desde la app.',
      points: [
        {
          title: 'Registro con código QR',
          text: 'Tus clientes escanean y se unen al instante. No tienen que descargar ninguna app.',
        },
        {
          title: 'Su lugar en la fila en tiempo real',
          text: 'Siempre saben en qué lugar van y cuándo salir para la barbería',
        },
        {
          title: 'Avisos por SMS y correo (Premium)',
          text: 'Avisa automáticamente a tus clientes cuando se acerca su turno. Ninguna cita perdida.',
        },
      ],
    },
  },
  features: {
    title: 'Todo lo que necesitas para manejar tu barbería',
    subtitle:
      "Barber's Book está hecho especialmente para barberos, con control real de ingresos, reservas en línea, herramientas para impuestos y una lista de espera de verdad.",
    free: 'Gratis',
    premium: 'Premium',
    legendLabel: 'Etiquetas:',
    legendFree: '= incluido en el plan gratis',
    legendPremiumBefore: '= incluido en Premium (',
    legendPremiumAfter: '$4.99/mes, 14 días de prueba gratis)',
    items: [
      {
        icon: '📅',
        title: 'Reservas en línea',
        description:
          'Comparte tu enlace de reservas y deja que tus clientes elijan un servicio y un horario libre. Cada reserva llega a tu agenda.',
      },
      {
        icon: '🗓️',
        title: 'Agenda de citas',
        description:
          'Ve tu día de un vistazo, agrega citas tú mismo y márcalas como atendidas cuando termines el corte.',
      },
      {
        icon: '🧾',
        title: 'Estimado de impuestos',
        description:
          'Ve un estimado al día de lo que vas a deber en impuestos según los ingresos que registras, para que sepas cuánto apartar.',
        badge: 'free',
      },
      {
        icon: '💰',
        title: 'Control de ingresos',
        description:
          'Registra cada servicio con precio, propina, tipo de servicio y forma de pago. Ten claro cuánto ganaste hoy.',
      },
      {
        icon: '📊',
        title: 'Estadísticas visuales',
        description:
          'Gráficas por día, semana y mes con tus tendencias de ingresos, tus mejores servicios y tus mejores días.',
      },
      {
        icon: '💸',
        title: 'Control de gastos',
        description:
          'Registra la renta de silla, productos y otros gastos del negocio por categoría. Ve automáticamente tu ganancia neta real.',
      },
      {
        icon: '✂️',
        title: 'Tus servicios',
        description:
          'Crea tu menú de servicios con tus precios. Registra lo que ganas en cualquier servicio en segundos.',
      },
      {
        icon: '⏰',
        title: 'Lista de espera digital',
        description:
          'Tus clientes escanean tu código QR para unirse a tu fila desde cualquier lugar. Atiende a los que llegan sin cita sin caos.',
      },
      {
        icon: '🔁',
        title: 'Citas recurrentes',
        description:
          'Convierte cualquier reserva en una cita fija semanal, cada dos semanas o mensual. Configúrala una vez y olvídate de perseguir a tus clientes para que vuelvan a reservar.',
        badge: 'premium',
      },
      {
        icon: '🔔',
        title: 'Avisos por SMS y correo',
        description:
          'Avisa a tus clientes por SMS y correo cuando les toca. Mantenlos informados y contentos.',
        badge: 'premium',
      },
      {
        icon: '🎨',
        title: 'El estilo de tu barbería',
        description:
          "Tu página de reservas, lista de espera, mensajes y correos. Con tu marca, no la de The Barber's Book.",
        badge: 'premium',
      },
      {
        icon: '🏪',
        title: 'Varias sucursales',
        description:
          'Maneja varias barberías desde una sola cuenta. Cambia de una a otra al instante.',
        badge: 'premium',
      },
      {
        icon: '📤',
        title: 'Exportación ilimitada',
        description:
          'Exporta y respalda todo tu historial de ingresos y gastos cuando quieras. Tus datos son tuyos.',
        badge: 'premium',
      },
      {
        icon: '🕰️',
        title: 'Historial ilimitado',
        description:
          'Consulta todas tus cifras e ingresos para siempre. Sin límite de 30 días y sin archivado automático.',
        badge: 'premium',
      },
    ],
  },
  how: {
    title: 'Listo en minutos',
    subtitle: "Barber's Book está hecho para no estorbarte. Configúralo una vez y dedícate a tu barbería.",
    step: 'Paso',
    steps: [
      {
        emoji: '📲',
        title: 'Descarga la app y crea tu cuenta',
        description:
          "Descarga Barber's Book en el App Store o Google Play. Crea tu cuenta gratis y configura el perfil de tu barbería en minutos.",
      },
      {
        emoji: '✂️',
        title: 'Agrega tus servicios',
        description:
          'Agrega tus servicios con sus precios, pon tu horario y consigue tu enlace de reservas y el código QR de tu lista de espera.',
      },
      {
        emoji: '📅',
        title: 'Recibe reservas y registra cada corte',
        description:
          'Tus clientes reservan en línea o se unen a tu lista de espera. Después de cada corte, registra el servicio, la propina y cómo te pagaron en segundos.',
      },
      {
        emoji: '📊',
        title: 'Lleva tus cuentas, aparta para impuestos y crece',
        description:
          'Revisa tus ingresos del día, sigue tu estimado de impuestos, controla tus gastos y analiza cómo va tu negocio.',
      },
    ],
  },
  pricing: {
    title: 'Un solo plan. Todo incluido.',
    subtitle:
      'Control de ingresos, reservas en línea, herramientas para impuestos, estadísticas y lista de espera digital. Todo en una app por menos de lo que cuesta un café a la semana.',
    banner: "BARBER'S BOOK PREMIUM",
    trial: '14 días de prueba gratis',
    perMonth: '/ mes',
    noteBefore: 'Prueba Premium gratis por 14 días.',
    noteAfter: '$4.99/mes después, cancela cuando quieras.',
    appStore: 'Descárgalo en el App Store',
    play: 'Disponible en Google Play',
    features: [
      { text: 'Página de reservas en línea', note: 'tus clientes reservan horarios libres por su cuenta' },
      { text: 'Citas recurrentes', note: 'citas fijas semanales, cada dos semanas o mensuales' },
      { text: 'Estimado de impuestos', note: 'estimado al día según tus ingresos registrados' },
      { text: 'Control de ingresos y propinas' },
      { text: 'Estadísticas visuales', note: 'por día, semana y mes' },
      { text: 'Lista de espera digital (clientes ilimitados)' },
      { text: 'Control de gastos y ganancia neta' },
      { text: 'Manejo de servicios' },
      { text: 'Historial ilimitado', note: 'todas tus cifras e ingresos para siempre' },
      { text: 'Exportación ilimitada', note: 'exporta y respalda cuando quieras' },
      { text: 'Varias sucursales', note: 'maneja varias barberías desde una sola cuenta' },
      { text: 'Avisos por SMS y correo', note: 'avisa a tus clientes cuando les toca' },
      { text: 'El estilo de tu barbería', note: 'tu página de reservas, lista de espera, mensajes y correos con tu marca' },
    ],
  },
  testimonials: {
    title: 'A los barberos les encanta',
    subtitle: "Desde barberos independientes hasta barberías con varias sillas, Barber's Book está hecho para cómo trabajas de verdad.",
    items: [
      {
        name: 'Sofia Martinez',
        role: 'Dueña de barbería, Miami',
        image: '👩🏽',
        text: "Antes anotaba todo en una libreta. Ahora Barber's Book registra cada servicio, cada gasto y cada propina. Las gráficas de ingresos me mostraron que mis viernes dejan el doble, así que dejé de tomarme los lunes libres.",
      },
      {
        name: 'James Lee',
        role: 'Barbero independiente, Los Ángeles',
        image: '👨🏻',
        text: 'La lista de espera es increíble. Mis clientes escanean mi código QR desde el carro, esperan afuera y entran justo a tiempo. Se acabó la barbería llena. A mis clientes les encanta y, la verdad, a mí también.',
      },
    ],
  },
  cta: {
    pill: '14 días de prueba gratis. No necesitas tarjeta para empezar.',
    title: '¿Listo para manejar tu barbería de forma más inteligente?',
    bodyBefore:
      'Recibe reservas en línea, ten una lista de espera digital, un estimado de impuestos al día y control total de tus ingresos. Prueba Premium gratis por 14 días y después',
    bodyAfter: '$4.99/mes. Cancela cuando quieras.',
    footBefore: 'Cancela Premium cuando quieras',
    footAfter: 'Tus datos siempre son tuyos',
  },
  footer: {
    tagline:
      'La app todo en uno para barberos: controla tus ingresos, recibe reservas, maneja tu lista de espera y mantente al día con tus impuestos.',
    product: 'Producto',
    features: 'Funciones',
    booking: 'Reservas',
    pricing: 'Precio',
    download: 'Descargar',
    downloadHeading: 'Descarga',
    legal: 'Legal',
    privacy: 'Política de privacidad (en inglés)',
    terms: 'Términos del servicio (en inglés)',
    cookies: 'Política de cookies (en inglés)',
    rights: '© 2026 eansolutions llc. Todos los derechos reservados.',
  },
}

export default es
