import { useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const problems = [
  {
    icon: "👁️‍🗨️",
    title: "No sabes qué precio ofrece la empacadora de al lado",
    body: "Sin información, negocias desde la debilidad. El que sabe más, siempre gana.",
  },
  {
    icon: "🤝",
    title: "Los intermediarios conocen el mercado mejor que tú",
    body: "Ellos tienen los datos. Tú tienes la fruta. Eso tiene que cambiar.",
  },
  {
    icon: "⏱️",
    title: "Cuando quieres comparar, ya es tarde",
    body: "Los precios cambian cada semana. Decidir sin información actualizada te cuesta dinero.",
  },
];

const ProblemSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useScrollAnimation(ref);

  return (
    <section className="py-24 md:py-32 grain" ref={ref}>
      <div className="container">
        <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-4">
          El Problema
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl max-w-3xl mb-16 leading-tight">
          El campo sabe producir. Pero el mercado lo ha tenido en la oscuridad.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <div
              key={i}
              className={`glass-card-glow p-8 border-l-4 border-l-primary transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="font-heading font-bold text-lg mb-3 text-foreground">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
