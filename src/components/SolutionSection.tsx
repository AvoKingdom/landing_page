import { useRef, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check } from "lucide-react";
import { featureIcons, FeatureCardKeyframes } from "@/components/FeatureCards";

const features = [
  {
    icon: "📊",
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
    icon: "🔍",
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
    icon: "📱",
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
    icon: "🔄",
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
];

const SolutionSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useScrollAnimation(ref);
  const [active, setActive] = useState(0);
  const [tabHovered, setTabHovered] = useState<number | null>(null);
  const f = features[active];

  return (
    <section id="solucion" className="py-24 md:py-32 grain" ref={ref}>
      <div className="container">
        <FeatureCardKeyframes />
        <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-4">
          La Solución
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl max-w-2xl mb-16 leading-tight">
          AvoKingdom pone los datos en tus manos.
        </h2>

        {/* Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {features.map((feat, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              onMouseEnter={() => setTabHovered(i)}
              onMouseLeave={() => setTabHovered(null)}
              className={`glass-card p-4 md:p-5 text-left cursor-pointer transition-all duration-300 ${
                active === i
                  ? "border-primary bg-primary/5 shadow-[0_0_25px_hsl(var(--primary)/0.15)]"
                  : "hover:border-primary/30"
              } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 mb-2">{featureIcons[i](tabHovered === i || active === i)}</div>
              <span className="font-heading font-bold text-sm text-foreground">{feat.title}</span>
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div
          className={`glass-card p-6 md:p-10 transition-all duration-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left — mockup */}
            <div className="bg-background rounded-2xl p-4 space-y-3">
              <div className="flex gap-2 mb-4">
                {["Conv.", "Orgánica", "Local"].map((t) => (
                  <span
                    key={t}
                    className="bg-primary/10 text-primary text-xs font-heading font-semibold px-3 py-1.5 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {f.mockupRows.map((e, i) => (
                <div
                  key={`${active}-${i}`}
                  className="flex items-center justify-between p-3 rounded-lg bg-card border border-border"
                >
                  <div>
                    <p className="text-sm font-medium text-foreground">{e.name}</p>
                    <p className="text-xs text-muted-foreground">{e.gram}</p>
                  </div>
                  <span className="text-primary font-heading font-bold">{e.price}</span>
                </div>
              ))}
            </div>

            {/* Right — info */}
            <div>
              <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-6 leading-tight">
                {f.headline}
              </h3>
              <ul className="space-y-4 mb-8">
                {f.points.map((point, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </span>
                    <span className="text-muted-foreground leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground font-heading font-semibold px-6 py-3 text-sm transition-colors hover:bg-primary/90"
              >
                Comenzar ya
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
