import { useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  { icon: "📊", title: "Ranking semanal de precios", desc: "Ve qué empacadoras están pagando más esta semana. Filtrado por gramaje y tipo de fruta." },
  { icon: "🔍", title: "Búsqueda por región", desc: "Encuentra empacadoras cercanas a tu huerta. Uruapan, Tancítaro, Peribán y más." },
  { icon: "📱", title: "Diseñado para el campo real", desc: "Funciona en móvil con señal intermitente. Sin complicaciones. Sin apps pesadas." },
  { icon: "🔄", title: "Actualizado cada semana", desc: "El equipo de AvoKingdom mantiene los precios actualizados para que tú siempre decidas con información fresca." },
];

const SolutionSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useScrollAnimation(ref);

  return (
    <section id="solucion" className="py-24 md:py-32 grain" ref={ref}>
      <div className="container">
        <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-4">
          La Solución
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl max-w-2xl mb-16 leading-tight">
          AvoKingdom pone los datos en tus manos.
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {features.map((f, i) => (
            <div
              key={i}
              className={`glass-card-glow p-8 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* App mockup placeholder */}
        <div className="max-w-sm mx-auto">
          <div className="glass-card p-4 rounded-3xl">
            <div className="bg-background rounded-2xl p-4 space-y-3">
              <div className="flex gap-2 mb-4">
                {["Conv.", "Orgánica", "Loca"].map((t) => (
                  <span key={t} className="bg-primary/10 text-primary text-xs font-heading font-semibold px-3 py-1.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              {[
                { name: "Empacadora Del Valle", price: "$24.30", gram: "140-160g" },
                { name: "Aguacates Premium MX", price: "$23.50", gram: "140-160g" },
                { name: "Sierra Export", price: "$22.80", gram: "140-160g" },
                { name: "Packers Uruapan", price: "$22.00", gram: "140-160g" },
              ].map((e, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-card border border-border">
                  <div>
                    <p className="text-sm font-medium text-foreground">{e.name}</p>
                    <p className="text-xs text-muted-foreground">{e.gram}</p>
                  </div>
                  <span className="text-primary font-heading font-bold">{e.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
