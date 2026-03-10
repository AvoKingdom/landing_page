import { useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stages = [
  {
    label: "ETAPA 1: BASE",
    badge: "✅ DISPONIBLE AHORA",
    badgeColor: "bg-secondary/20 text-secondary",
    desc: "Ranking de precios semanal por empacadora. 82 empacadoras en Michoacán. Filtros por gramaje y tipo de fruta.",
  },
  {
    label: "ETAPA 2: DESARROLLO",
    badge: "🔄 EN DESARROLLO",
    badgeColor: "bg-gold/20 text-gold",
    desc: "Historial de precios. Red de productores. Identidad digital. Volumen de producción estatal. Información de mercado meta.",
  },
  {
    label: "ETAPA 3: MODELO",
    badge: "🔜 PRÓXIMAMENTE",
    badgeColor: "bg-muted text-muted-foreground",
    desc: "Asistencia legal. Gestoría regulatoria. Mapa de riesgos. Recomendación de fecha ideal de venta con algoritmo inteligente.",
  },
  {
    label: "ETAPA 4: ECOSISTEMA COMPLETO",
    badge: "🚀 VISIÓN",
    badgeColor: "border border-muted-foreground/30 text-muted-foreground",
    desc: "Transacciones directas comprador-productor. Servicios financieros. Cuadrillas y transporte. Créditos para mejora de instalaciones.",
  },
];

const RoadmapSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useScrollAnimation(ref);

  return (
    <section id="futuro" className="py-24 md:py-32 grain" ref={ref}>
      <div className="container max-w-3xl">
        <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-4 text-center">
          El Futuro
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-16">
          Esto es solo el inicio.
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {stages.map((s, i) => (
              <div
                key={i}
                className={`relative pl-12 md:pl-16 transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Dot */}
                <div className="absolute left-2 md:left-4 top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                <span className={`inline-block text-xs font-heading font-bold px-3 py-1 rounded-full mb-3 ${s.badgeColor}`}>
                  {s.badge}
                </span>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{s.label}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
