import type { Locale } from "./types";

export interface SiteMessages {
  meta: { title: string; description: string };
  common: {
    languageSwitcherAria: string;
    spanish: string;
    english: string;
  };
  nav: {
    beneficios: string;
    nosotros: string;
    planes: string;
    comoFunciona: string;
    faq: string;
    iniciarSesion: string;
    crearCuenta: string;
    menuAria: string;
  };
  hero: {
    alt: string;
    titleBefore: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  problem: {
    kicker: string;
    heading: string;
    cards: { title: string; body: string }[];
  };
  solution: {
    kicker: string;
    heading: string;
    cta: string;
    appAlt: string;
    filterTags: string[];
    features: {
      title: string;
      headline: string;
      points: string[];
      mockupRows: { name: string; price: string; gram: string }[];
    }[];
  };
  about: {
    alt: string;
    kicker: string;
    p1: string;
    p2: string;
    quote: string;
    values: { label: string; text: string }[];
    binacional: string;
  };
  pricing: {
    kicker: string;
    heading: string;
    sub: string;
    monthly: string;
    annual: string;
    saveTwoMonths: string;
    toggleAria: string;
    footnote: string;
    ctaHire: string;
    ctaComingSoon: string;
    plans: {
      name: string;
      tagline: string;
      badge: string | null;
      features: string[];
    }[];
  };
  process: {
    kicker: string;
    heading: string;
    steps: { num: string; title: string; body: string }[];
    imageAlt: string;
    stats: { label: string }[];
    testimonial: string;
    testimonialBy: string;
    cta: string;
  };
  roadmap: {
    kicker: string;
    heading: string;
    stages: {
      title: string;
      badgeLabel: string;
      bullets: string[];
    }[];
  };
  faq: {
    kicker: string;
    heading: string;
    sub: string;
    items: { q: string; a: string }[];
  };
  finalCta: {
    kicker: string;
    titleBefore: string;
    titleHighlight: string;
    titleAfter: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    foot1: string;
    foot2: string;
    foot3: string;
  };
  footer: {
    tagline: string;
    cols: { title: string; links: { label: string; href: string; external?: boolean }[] }[];
    copyright: string;
    privacy: string;
    terms: string;
    tech: string;
  };
  notFound: {
    title: string;
    back: string;
  };
}

const es: SiteMessages = {
  meta: {
    title: "AvoKingdom Solutions — Precios reales de empacadoras en Michoacán",
    description:
      "Accede a los precios reales de más de 82 empacadoras de aguacate en Michoacán. Sin intermediarios, sin engaños. Tecnología AgTech para el campo real.",
  },
  common: {
    languageSwitcherAria: "Cambiar idioma",
    spanish: "Español",
    english: "English",
  },
  nav: {
    beneficios: "Beneficios",
    nosotros: "Nosotros",
    planes: "Planes",
    comoFunciona: "Cómo funciona",
    faq: "FAQ",
    iniciarSesion: "Iniciar sesión",
    crearCuenta: "Crear cuenta",
    menuAria: "Menú",
  },
  hero: {
    alt: "Huerto de aguacates en Michoacán",
    titleBefore: "La información que se movía a sus espaldas,",
    titleHighlight: "ahora en sus manos.",
    subtitle:
      "AvoKingdom le da al productor de aguacate lo que antes solo tenían los intermediarios: precios reales, herramientas inteligentes y transacciones seguras. Todo en un solo lugar.",
    ctaPrimary: "Comenzar gratis →",
    ctaSecondary: "Ver planes",
  },
  problem: {
    kicker: "El Problema",
    heading: "El campo sabe producir. Pero el mercado lo ha tenido en la oscuridad.",
    cards: [
      {
        title: "No sabes qué precio ofrece la empacadora de al lado",
        body: "Sin información, negocias desde la debilidad. El que sabe más, siempre gana.",
      },
      {
        title: "Los intermediarios conocen el mercado mejor que tú",
        body: "Ellos tienen los datos. Tú tienes la fruta. Eso tiene que cambiar.",
      },
      {
        title: "Cuando quieres comparar, ya es tarde",
        body: "Los precios cambian cada semana. Decidir sin información actualizada te cuesta dinero.",
      },
    ],
  },
  solution: {
    kicker: "La Solución",
    heading: "AvoKingdom pone los datos en tus manos.",
    cta: "Comenzar ya",
    appAlt: "AvoKingdom app - Hecho para el campo",
    filterTags: ["Conv.", "Orgánica", "Local"],
    features: [
      {
        title: "Ranking de precios",
        headline: "Compara precios en tiempo real entre empacadoras",
        points: [
          "Ranking semanal actualizado con los mejores precios por gramaje",
          "Filtra por tipo de fruta: convencional, orgánica o local",
          "Identifica tendencias de precio para negociar mejor",
        ],
        mockupRows: [
          { name: "Empacadora Del Valle", price: "$24.30", gram: "140-160g" },
          { name: "Aguacates Premium MX", price: "$23.50", gram: "140-160g" },
          { name: "Sierra Export", price: "$22.80", gram: "140-160g" },
        ],
      },
      {
        title: "Búsqueda por región",
        headline: "Encuentra empacadoras cerca de tu huerta",
        points: [
          "Búsqueda por zona: Uruapan, Tancítaro, Peribán y más",
          "Contacto directo con empacadoras verificadas",
          "Mapa interactivo con ubicaciones y distancias",
        ],
        mockupRows: [
          { name: "Pac. Uruapan Centro", price: "$23.80", gram: "Uruapan" },
          { name: "Tancítaro Export", price: "$24.10", gram: "Tancítaro" },
          { name: "Peribán Fresh", price: "$23.00", gram: "Peribán" },
        ],
      },
      {
        title: "Hecho para el campo",
        headline: "Diseñado para funcionar donde más lo necesitas",
        points: [
          "Interfaz ligera que carga con señal intermitente",
          "Sin necesidad de descargar apps pesadas",
          "Optimizado para cualquier dispositivo móvil",
        ],
        mockupRows: [
          { name: "Carga rápida", price: "< 2s", gram: "3G/4G" },
          { name: "Sin instalación", price: "Web", gram: "Navegador" },
          { name: "Modo offline", price: "Caché", gram: "Local" },
        ],
      },
      {
        title: "Datos frescos",
        headline: "Información actualizada cada semana por nuestro equipo",
        points: [
          "Equipo dedicado a verificar precios semanalmente",
          "Alertas cuando hay cambios significativos en tu zona",
          "Historial de precios para analizar temporadas",
        ],
        mockupRows: [
          { name: "Semana 12 - Mar 2026", price: "$24.30", gram: "Actual" },
          { name: "Semana 11 - Mar 2026", price: "$23.90", gram: "Anterior" },
          { name: "Semana 10 - Feb 2026", price: "$23.10", gram: "Histórico" },
        ],
      },
    ],
  },
  about: {
    alt: "Trabajador en un huerto de aguacate con una caja llena de fruta recién cosechada",
    kicker: "Quiénes Somos",
    p1: "Somos una Startup AgTech que desarrolla tecnología sencilla, accesible y pensada 100% para el campo real: el de caminos de tierra, el de señal intermitente y el de presupuestos ajustados.",
    p2: "No vendemos drones de lujo ni robots que cuestan un ojo de la cara. Creamos soluciones que de verdad se usan, porque cuando el campo crece, crecemos todos.",
    quote: '"Tecnología que no reemplaza al agricultor, lo hace imparable."',
    values: [
      {
        label: "MISIÓN",
        text: "Facilitar acceso a precios de compra reales para que los productores tomen mejores decisiones comerciales y fortalezcan su posición en el mercado.",
      },
      {
        label: "VISIÓN",
        text: "Ser la plataforma líder en transparencia de precios para el sector aguacatero en Michoacán, empoderando a los productores con información confiable y oportuna.",
      },
      {
        label: "VALORES",
        text: "Honestidad · Responsabilidad · Productividad · Empatía",
      },
    ],
    binacional: "Operación binacional",
  },
  pricing: {
    kicker: "El Ecosistema AvoKingdom",
    heading: "Elige tu nivel. Crece con nosotros.",
    sub: "No vendemos membresías. Construimos niveles de integración dentro de un ecosistema inteligente.",
    monthly: "Mensual",
    annual: "Anual",
    saveTwoMonths: "Ahorra 2 meses",
    toggleAria: "Alternar facturación anual",
    footnote: "Todos los precios en USD. Facturación en MXN disponible. Cancela cuando quieras.",
    ctaHire: "Contratar",
    ctaComingSoon: "Próximamente",
    plans: [
      {
        name: "SEED",
        tagline: "Discover",
        badge: "GRATIS SIEMPRE",
        features: [
          "Acceso al ranking semanal de precios",
          "Ver empacadoras registradas",
          "Filtros básicos por gramaje",
          "Perfil básico",
        ],
      },
      {
        name: "SPROUT",
        tagline: "Grow",
        badge: "MÁS POPULAR",
        features: [
          "Todo lo de SEED +",
          "Ranking de empacadoras por servicio",
          "Historial de precios por empacadora",
          "Base de datos entre productores",
          "Acceso prioritario a información",
          "Beneficios de alianzas",
        ],
      },
      {
        name: "TREE",
        tagline: "Strengthen",
        badge: null,
        features: [
          "Todo lo de SPROUT +",
          "Identidad digital oficial con autenticación",
          "Determinación del volumen estatal de producción",
          "Información de volumen de compra en mercado meta",
          "Espacio de comunicación exclusiva entre productores",
          "Asistencia documental para ventas",
          "Alarmas de venta y cobro",
        ],
      },
      {
        name: "GROVE",
        tagline: "Shape the Ecosystem",
        badge: "LIDERAZGO",
        features: [
          "Todo lo de TREE +",
          "Asistencia legal en incumplimientos",
          "Gestoría regulatoria y trámites",
          "Mapa y alarma de riesgos",
          "Fecha ideal de venta — recomendación algorítmica",
          "Influencia estratégica en el ecosistema",
          "Visibilidad máxima y alianzas preferenciales",
        ],
      },
    ],
  },
  process: {
    kicker: "Cómo funciona",
    heading: "Así de simple.",
    steps: [
      {
        num: "01",
        title: "Crea tu cuenta gratis",
        body: "Regístrate en menos de 2 minutos. Sin tarjeta, sin compromisos.",
      },
      {
        num: "02",
        title: "Selecciona tu fruta y gramaje",
        body: "Filtra por Convencional, Orgánica, Loca o Aventajada. Elige el gramaje de tu cosecha.",
      },
      {
        num: "03",
        title: "Compara y decide",
        body: "Ve el ranking de precios y llama directamente a la empacadora que mejor te paga.",
      },
    ],
    imageAlt:
      "Interfaz de AvoKingdom: directorio de empacadoras en Michoacán con filtros y búsqueda",
    stats: [
      { label: "Empacadoras registradas" },
      { label: "Información verificada" },
      { label: "Estado. Toda Michoacán cubierta" },
    ],
    testimonial:
      '"Por primera vez sé exactamente qué precio ofrece cada empacadora antes de salir a vender. Eso vale más que cualquier intermediario."',
    testimonialBy: "— Productor afiliado, Tancítaro, Michoacán",
    cta: "Comenzar ahora →",
  },
  roadmap: {
    kicker: "El Futuro",
    heading: "Esto es solo el inicio.",
    stages: [
      {
        title: "ETAPA 1: BASE",
        badgeLabel: "Disponible ahora",
        bullets: [
          "Ranking de precios semanal por empacadora",
          "82 empacadoras en Michoacán",
          "Filtros por gramaje y tipo de fruta",
        ],
      },
      {
        title: "ETAPA 2: DESARROLLO",
        badgeLabel: "En desarrollo",
        bullets: [
          "Historial de precios",
          "Red de productores",
          "Identidad digital",
          "Volumen de producción estatal",
          "Información de mercado meta",
        ],
      },
      {
        title: "ETAPA 3: MODELO",
        badgeLabel: "Próximamente",
        bullets: [
          "Asistencia legal",
          "Gestoría regulatoria",
          "Mapa de riesgos",
          "Recomendación de fecha ideal de venta con algoritmo inteligente",
        ],
      },
      {
        title: "ETAPA 4: ECOSISTEMA COMPLETO",
        badgeLabel: "Visión",
        bullets: [
          "Transacciones directas comprador-productor",
          "Servicios financieros",
          "Cuadrillas y transporte",
          "Créditos para mejora de instalaciones",
        ],
      },
    ],
  },
  faq: {
    kicker: "Preguntas frecuentes",
    heading: "Resolvemos tus dudas",
    sub: "Aquí encontrarás respuestas claras sobre el servicio y cómo aprovecharlo.",
    items: [
      {
        q: "¿Qué es AvoKingdom?",
        a: "Es una plataforma donde los productores consultan precios de compra reales por empacadora, semana a semana, para decidir a quién vender con mejor información.",
      },
      {
        q: "¿Necesito tarjeta para registrarme?",
        a: "No. Puedes crear tu cuenta gratis y explorar la información sin compromiso ni pago inicial.",
      },
      {
        q: "¿De dónde salen los precios?",
        a: "Trabajamos con información verificada y actualizada sobre el comportamiento del mercado en Michoacán, presentada de forma clara para que compares opciones.",
      },
      {
        q: "¿Solo aplica para Michoacán?",
        a: "Hoy el foco es Michoacán, con cobertura estatal. El roadmap incluye más herramientas y alcance conforme crece la comunidad.",
      },
      {
        q: "¿Puedo contactar directamente a la empacadora?",
        a: "Sí. La idea es que veas el ranking y puedas contactar a quien mejor se adapte a tu cosecha y gramaje.",
      },
    ],
  },
  finalCta: {
    kicker: "Comienza hoy",
    titleBefore: "¿Listo para",
    titleHighlight: "vender con mejor información",
    titleAfter: "?",
    sub: "Únete gratis y descubre precios de compra reales por empacadora, actualizados cada semana.",
    ctaPrimary: "Únete gratis hoy",
    ctaSecondary: "Ver los planes →",
    foot1: "Sin contratos",
    foot2: "Actualizado cada semana",
    foot3: "Hecho en Michoacán 🥑",
  },
  footer: {
    tagline: "La unión hace la fuerza",
    cols: [
      {
        title: "Producto",
        links: [
          { label: "Empacadoras", href: "#solucion" },
          { label: "Planes", href: "#planes" },
          { label: "Cómo funciona", href: "#como-funciona" },
          { label: "Próximamente", href: "#futuro" },
          { label: "Preguntas Frecuentes", href: "#preguntas-frecuentes" },
        ],
      },
      {
        title: "Empresa",
        links: [
          { label: "Quiénes somos", href: "#nosotros" },
          { label: "Misión", href: "#nosotros" },
          { label: "Valores", href: "#nosotros" },
        ],
      },
      {
        title: "Contacto",
        links: [
          { label: "Avokingdom@outlook.com", href: "mailto:Avokingdom@outlook.com" },
          { label: "WhatsApp", href: "https://wa.me/524432132462", external: true },
        ],
      },
    ],
    copyright: "© 2026 AvoKingdom Solutions Corp · Todos los derechos reservados",
    privacy: "Privacidad",
    terms: "Términos",
    tech: "Tecnología al servicio del campo",
  },
  notFound: {
    title: "¡Vaya! Página no encontrada",
    back: "Volver al inicio",
  },
};

const en: SiteMessages = {
  meta: {
    title: "AvoKingdom Solutions — Real packer prices in Michoacán",
    description:
      "Access real prices from 80+ avocado packers in Michoacán. No middlemen, no guesswork. AgTech built for real farms.",
  },
  common: {
    languageSwitcherAria: "Change language",
    spanish: "Español",
    english: "English",
  },
  nav: {
    beneficios: "Benefits",
    nosotros: "About us",
    planes: "Plans",
    comoFunciona: "How it works",
    faq: "FAQ",
    iniciarSesion: "Log in",
    crearCuenta: "Create account",
    menuAria: "Menu",
  },
  hero: {
    alt: "Avocado orchard in Michoacán",
    titleBefore: "The information that moved behind your back,",
    titleHighlight: "now in your hands.",
    subtitle:
      "AvoKingdom gives avocado growers what only middlemen had before: real prices, smart tools, and secure transactions. All in one place.",
    ctaPrimary: "Start free →",
    ctaSecondary: "View plans",
  },
  problem: {
    kicker: "The problem",
    heading: "The field knows how to grow. But the market kept it in the dark.",
    cards: [
      {
        title: "You don’t know what price the packer next door is offering",
        body: "Without information, you negotiate from weakness. Whoever knows more always wins.",
      },
      {
        title: "Middlemen know the market better than you",
        body: "They have the data. You have the fruit. That has to change.",
      },
      {
        title: "By the time you want to compare, it’s already late",
        body: "Prices change every week. Deciding without up-to-date information costs you money.",
      },
    ],
  },
  solution: {
    kicker: "The solution",
    heading: "AvoKingdom puts the data in your hands.",
    cta: "Get started",
    appAlt: "AvoKingdom app — Built for the field",
    filterTags: ["Conv.", "Organic", "Local"],
    features: [
      {
        title: "Price ranking",
        headline: "Compare real-time prices across packers",
        points: [
          "Weekly ranking with the best prices by pack size",
          "Filter by fruit type: conventional, organic, or local",
          "Spot price trends to negotiate better",
        ],
        mockupRows: [
          { name: "Del Valle Packing", price: "$24.30", gram: "140-160g" },
          { name: "Premium Avocados MX", price: "$23.50", gram: "140-160g" },
          { name: "Sierra Export", price: "$22.80", gram: "140-160g" },
        ],
      },
      {
        title: "Search by region",
        headline: "Find packers near your orchard",
        points: [
          "Search by area: Uruapan, Tancítaro, Peribán, and more",
          "Direct contact with verified packers",
          "Interactive map with locations and distances",
        ],
        mockupRows: [
          { name: "Pac. Uruapan Centro", price: "$23.80", gram: "Uruapan" },
          { name: "Tancítaro Export", price: "$24.10", gram: "Tancítaro" },
          { name: "Peribán Fresh", price: "$23.00", gram: "Peribán" },
        ],
      },
      {
        title: "Built for the field",
        headline: "Designed to work where you need it most",
        points: [
          "Light UI that loads on spotty signal",
          "No need for heavy app downloads",
          "Optimized for any mobile device",
        ],
        mockupRows: [
          { name: "Fast load", price: "< 2s", gram: "3G/4G" },
          { name: "No install", price: "Web", gram: "Browser" },
          { name: "Offline mode", price: "Cache", gram: "Local" },
        ],
      },
      {
        title: "Fresh data",
        headline: "Updated every week by our team",
        points: [
          "Dedicated team verifying prices weekly",
          "Alerts when there are significant changes in your area",
          "Price history to analyze seasons",
        ],
        mockupRows: [
          { name: "Week 12 — Mar 2026", price: "$24.30", gram: "Current" },
          { name: "Week 11 — Mar 2026", price: "$23.90", gram: "Previous" },
          { name: "Week 10 — Feb 2026", price: "$23.10", gram: "History" },
        ],
      },
    ],
  },
  about: {
    alt: "Worker in an avocado orchard with a crate of freshly picked fruit",
    kicker: "Who we are",
    p1: "We’re an AgTech startup building simple, accessible technology for the real field: dirt roads, spotty signal, and tight budgets.",
    p2: "We don’t sell luxury drones or six-figure robots. We build tools people actually use—because when the field grows, we all grow.",
    quote: '"Technology that doesn’t replace the farmer—it makes them unstoppable."',
    values: [
      {
        label: "MISSION",
        text: "Make real purchase prices accessible so growers make better commercial decisions and strengthen their position in the market.",
      },
      {
        label: "VISION",
        text: "Be the leading price transparency platform for Michoacán’s avocado sector, empowering growers with reliable, timely information.",
      },
      {
        label: "VALUES",
        text: "Honesty · Responsibility · Productivity · Empathy",
      },
    ],
    binacional: "Cross-border operation",
  },
  pricing: {
    kicker: "The AvoKingdom ecosystem",
    heading: "Pick your level. Grow with us.",
    sub: "We’re not selling memberships—we’re building levels of integration inside one smart ecosystem.",
    monthly: "Monthly",
    annual: "Annual",
    saveTwoMonths: "Save 2 months",
    toggleAria: "Toggle annual billing",
    footnote: "All prices in USD. MXN billing available. Cancel anytime.",
    ctaHire: "Subscribe",
    ctaComingSoon: "Coming soon",
    plans: [
      {
        name: "SEED",
        tagline: "Discover",
        badge: "FREE FOREVER",
        features: [
          "Access to the weekly price ranking",
          "View registered packers",
          "Basic filters by pack size",
          "Basic profile",
        ],
      },
      {
        name: "SPROUT",
        tagline: "Grow",
        badge: "MOST POPULAR",
        features: [
          "Everything in SEED +",
          "Packers ranked by service",
          "Price history per packer",
          "Grower network database",
          "Priority access to information",
          "Partnership perks",
        ],
      },
      {
        name: "TREE",
        tagline: "Strengthen",
        badge: null,
        features: [
          "Everything in SPROUT +",
          "Official digital identity with authentication",
          "State production volume insights",
          "Target market purchase volume data",
          "Private channel for grower communication",
          "Document support for sales",
          "Sale and collection alerts",
        ],
      },
      {
        name: "GROVE",
        tagline: "Shape the Ecosystem",
        badge: "LEADERSHIP",
        features: [
          "Everything in TREE +",
          "Legal support for breaches",
          "Regulatory paperwork and filings",
          "Risk map and alerts",
          "Ideal sale date — algorithmic recommendation",
          "Strategic influence in the ecosystem",
          "Maximum visibility and preferred partnerships",
        ],
      },
    ],
  },
  process: {
    kicker: "How it works",
    heading: "That simple.",
    steps: [
      {
        num: "01",
        title: "Create your free account",
        body: "Sign up in under 2 minutes. No card, no commitment.",
      },
      {
        num: "02",
        title: "Choose your fruit and pack size",
        body: "Filter by Conventional, Organic, Local, or Premium. Pick your harvest size.",
      },
      {
        num: "03",
        title: "Compare and decide",
        body: "See the price ranking and call the packer that pays you best—directly.",
      },
    ],
    imageAlt: "AvoKingdom UI: packer directory in Michoacán with filters and search",
    stats: [{ label: "Registered packers" }, { label: "Verified information" }, { label: "One state. All of Michoacán covered" }],
    testimonial:
      '"For the first time I know exactly what each packer offers before I go to sell. That beats any middleman."',
    testimonialBy: "— Affiliated grower, Tancítaro, Michoacán",
    cta: "Get started now →",
  },
  roadmap: {
    kicker: "The future",
    heading: "This is only the beginning.",
    stages: [
      {
        title: "STAGE 1: BASE",
        badgeLabel: "Available now",
        bullets: [
          "Weekly price ranking per packer",
          "82 packers in Michoacán",
          "Filters by pack size and fruit type",
        ],
      },
      {
        title: "STAGE 2: DEVELOPMENT",
        badgeLabel: "In development",
        bullets: [
          "Price history",
          "Grower network",
          "Digital identity",
          "State production volume",
          "Target market insights",
        ],
      },
      {
        title: "STAGE 3: MODEL",
        badgeLabel: "Coming soon",
        bullets: ["Legal support", "Regulatory assistance", "Risk map", "Ideal sale date with smart algorithm"],
      },
      {
        title: "STAGE 4: FULL ECOSYSTEM",
        badgeLabel: "Vision",
        bullets: [
          "Direct buyer–grower transactions",
          "Financial services",
          "Crews and transport",
          "Credits for facility improvements",
        ],
      },
    ],
  },
  faq: {
    kicker: "FAQ",
    heading: "We answer your questions",
    sub: "Clear answers about the service and how to get the most out of it.",
    items: [
      {
        q: "What is AvoKingdom?",
        a: "A platform where growers see real weekly purchase prices per packer—so you can choose who to sell to with better information.",
      },
      {
        q: "Do I need a card to sign up?",
        a: "No. Create a free account and explore with no commitment or upfront payment.",
      },
      {
        q: "Where do the prices come from?",
        a: "We work with verified, updated market information for Michoacán—presented clearly so you can compare options.",
      },
      {
        q: "Is it only for Michoacán?",
        a: "Today the focus is Michoacán, statewide. The roadmap adds more tools and reach as the community grows.",
      },
      {
        q: "Can I contact the packer directly?",
        a: "Yes. See the ranking and reach out to whoever best fits your harvest and pack size.",
      },
    ],
  },
  finalCta: {
    kicker: "Start today",
    titleBefore: "Ready to",
    titleHighlight: "sell with better information",
    titleAfter: "?",
    sub: "Join free and discover real weekly purchase prices per packer.",
    ctaPrimary: "Join free today",
    ctaSecondary: "View plans →",
    foot1: "No contracts",
    foot2: "Updated weekly",
    foot3: "Made in Michoacán 🥑",
  },
  footer: {
    tagline: "Strength in unity",
    cols: [
      {
        title: "Product",
        links: [
          { label: "Packers", href: "#solucion" },
          { label: "Plans", href: "#planes" },
          { label: "How it works", href: "#como-funciona" },
          { label: "Coming soon", href: "#futuro" },
          { label: "FAQ", href: "#preguntas-frecuentes" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About us", href: "#nosotros" },
          { label: "Mission", href: "#nosotros" },
          { label: "Values", href: "#nosotros" },
        ],
      },
      {
        title: "Contact",
        links: [
          { label: "Avokingdom@outlook.com", href: "mailto:Avokingdom@outlook.com" },
          { label: "WhatsApp", href: "https://wa.me/524432132462", external: true },
        ],
      },
    ],
    copyright: "© 2026 AvoKingdom Solutions Corp · All rights reserved",
    privacy: "Privacy",
    terms: "Terms",
    tech: "Technology in service of the field",
  },
  notFound: {
    title: "Oops! Page not found",
    back: "Back to home",
  },
};

export const siteMessages: Record<Locale, SiteMessages> = {
  es,
  en,
};
