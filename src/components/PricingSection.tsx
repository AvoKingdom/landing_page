import { useState, useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const plans = [
  {
    name: "SEED",
    icon: "🌱",
    tagline: "Discover",
    monthly: 0,
    annual: 0,
    badge: "GRATIS SIEMPRE",
    badgeColor: "bg-secondary/20 text-secondary",
    popular: false,
    features: [
      "Acceso al ranking semanal de precios",
      "Ver empacadoras registradas",
      "Filtros básicos por gramaje",
      "Perfil básico",
    ],
    ctaStyle: "border border-foreground/30 text-foreground hover:bg-foreground/5",
    ctaText: "Empezar gratis",
  },
  {
    name: "SPROUT",
    icon: "🌿",
    tagline: "Grow",
    monthly: 29,
    annual: 290,
    badge: "MÁS POPULAR",
    badgeColor: "bg-primary text-primary-foreground",
    popular: true,
    features: [
      "Todo lo de SEED +",
      "Ranking de empacadoras por servicio",
      "Historial de precios por empacadora",
      "Base de datos entre productores",
      "Acceso prioritario a información",
      "Beneficios de alianzas",
    ],
    ctaStyle: "bg-primary text-primary-foreground hover:brightness-110",
    ctaText: "Comenzar",
  },
  {
    name: "TREE",
    icon: "🌳",
    tagline: "Strengthen",
    monthly: 58,
    annual: 580,
    badge: null,
    badgeColor: "",
    popular: false,
    features: [
      "Todo lo de SPROUT +",
      "Identidad digital oficial con autenticación",
      "Determinación del volumen estatal de producción",
      "Información de volumen de compra en mercado meta",
      "Espacio de comunicación exclusiva entre productores",
      "Asistencia documental para ventas",
      "Alarmas de venta y cobro",
    ],
    ctaStyle: "border border-foreground/30 text-foreground hover:bg-foreground/5",
    ctaText: "Comenzar",
  },
  {
    name: "GROVE",
    icon: "🌲",
    tagline: "Shape the Ecosystem",
    monthly: 116,
    annual: 1160,
    badge: "LIDERAZGO",
    badgeColor: "bg-gold/20 text-gold",
    popular: false,
    features: [
      "Todo lo de TREE +",
      "Asistencia legal en incumplimientos",
      "Gestoría regulatoria y trámites",
      "Mapa y alarma de riesgos",
      "Fecha ideal de venta — recomendación algorítmica",
      "Influencia estratégica en el ecosistema",
      "Visibilidad máxima y alianzas preferenciales",
    ],
    ctaStyle: "border border-gold text-gold hover:bg-gold/10",
    ctaText: "Comenzar",
  },
];

const PricingSection = () => {
  const [annual, setAnnual] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const visible = useScrollAnimation(ref);

  return (
    <section id="planes" className="py-24 md:py-32 grain" ref={ref}>
      <div className="container">
        <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-4 text-center">
          El Ecosistema AvoKingdom
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-4">
          Elige tu nivel. Crece con nosotros.
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
          No vendemos membresías. Construimos niveles de integración dentro de un ecosistema inteligente.
        </p>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`text-sm font-medium ${!annual ? "text-foreground" : "text-muted-foreground"}`}>Mensual</span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-14 h-7 rounded-full transition-colors ${annual ? "bg-primary" : "bg-muted"}`}
            aria-label="Toggle annual billing"
          >
            <div className={`absolute top-0.5 w-6 h-6 rounded-full bg-foreground transition-transform ${annual ? "translate-x-7" : "translate-x-0.5"}`} />
          </button>
          <span className={`text-sm font-medium ${annual ? "text-foreground" : "text-muted-foreground"}`}>
            Anual <span className="text-primary text-xs font-semibold ml-1">Ahorra 2 meses</span>
          </span>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`glass-card p-6 flex flex-col transition-all duration-700 ${
                plan.popular ? "scale-[1.03] border-primary/50 shadow-lg shadow-primary/10 animate-pulse-glow" : ""
              } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{plan.icon}</span>
                {plan.badge && (
                  <span className={`text-xs font-heading font-bold px-3 py-1 rounded-full ${plan.badgeColor}`}>
                    {plan.badge}
                  </span>
                )}
              </div>

              <h3 className="font-heading font-bold text-xl text-foreground">{plan.name}</h3>
              <p className="text-xs text-muted-foreground mb-4 italic">{plan.tagline}</p>

              <div className="mb-6">
                <span className="font-heading font-bold text-3xl text-foreground">
                  ${annual ? plan.annual : plan.monthly}
                </span>
                <span className="text-muted-foreground text-sm ml-1">
                  {plan.monthly === 0 ? "/ mes" : annual ? " USD / año" : " USD / mes"}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`text-center font-heading font-semibold text-sm px-6 py-3 rounded-full transition-all ${plan.ctaStyle}`}
              >
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          Todos los precios en USD. Facturación en MXN disponible. Cancela cuando quieras.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
