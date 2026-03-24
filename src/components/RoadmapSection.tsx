import { useRef } from "react";
import { useScroll } from "motion/react";
import { StackingCard, type StackingCardItem } from "@/components/ui/stacking-card";

const stages: StackingCardItem[] = [
  {
    title: "ETAPA 1: BASE",
    badge: "✅ DISPONIBLE AHORA",
    description:
      "Ranking de precios semanal por empacadora. 82 empacadoras en Michoacán. Filtros por gramaje y tipo de fruta.",
    image:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=1200&auto=format&fit=crop&q=80",
    color: "#153822",
  },
  {
    title: "ETAPA 2: DESARROLLO",
    badge: "🔄 EN DESARROLLO",
    description:
      "Historial de precios. Red de productores. Identidad digital. Volumen de producción estatal. Información de mercado meta.",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&auto=format&fit=crop&q=80",
    color: "#3d3518",
  },
  {
    title: "ETAPA 3: MODELO",
    badge: "🔜 PRÓXIMAMENTE",
    description:
      "Asistencia legal. Gestoría regulatoria. Mapa de riesgos. Recomendación de fecha ideal de venta con algoritmo inteligente.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80",
    color: "#1c1c1c",
  },
  {
    title: "ETAPA 4: ECOSISTEMA COMPLETO",
    badge: "🚀 VISIÓN",
    description:
      "Transacciones directas comprador-productor. Servicios financieros. Cuadrillas y transporte. Créditos para mejora de instalaciones.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b75a0b0d6d?w=1200&auto=format&fit=crop&q=80",
    color: "#0f2918",
  },
];

const RoadmapSection = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const n = stages.length;

  return (
    <section id="futuro" className="relative grain">
      <div className="container max-w-4xl px-4 pb-10 pt-24 text-center md:pb-14 md:pt-32">
        <p className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-primary">El Futuro</p>
        <h2 className="font-heading text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">Esto es solo el inicio.</h2>
      </div>

      <div ref={container} className="relative pb-24">
        {stages.map((item, i) => (
          <StackingCard
            key={item.title}
            i={i}
            item={item}
            progress={scrollYProgress}
            range={[i * (1 / n), 1]}
            targetScale={1 - (n - i) * 0.05}
          />
        ))}
      </div>
    </section>
  );
};

export default RoadmapSection;
