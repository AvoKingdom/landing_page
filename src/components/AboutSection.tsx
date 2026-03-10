import { useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const values = [
  { icon: "🎯", label: "MISIÓN", text: "Facilitar acceso a precios de compra reales para que los productores tomen mejores decisiones comerciales y fortalezcan su posición en el mercado." },
  { icon: "👁️", label: "VISIÓN", text: "Ser la plataforma líder en transparencia de precios para el sector aguacatero en Michoacán, empoderando a los productores con información confiable y oportuna." },
  { icon: "💎", label: "VALORES", text: "Honestidad · Responsabilidad · Productividad · Empatía" },
];

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useScrollAnimation(ref);

  return (
    <section id="nosotros" className="py-24 md:py-32 grain" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left — Avocado crown */}
          <div className="flex items-center justify-center">
            <div className="text-[120px] md:text-[180px] select-none">🥑</div>
          </div>

          {/* Right — Text */}
          <div
            className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-4">
              Quiénes Somos
            </p>
            <p className="text-foreground text-lg leading-relaxed mb-6">
              Somos una Startup AgTech que desarrolla tecnología sencilla, accesible y pensada 100% para el campo real: el de caminos de tierra, el de señal intermitente y el de presupuestos ajustados.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              No vendemos drones de lujo ni robots que cuestan un ojo de la cara. Creamos soluciones que de verdad se usan, porque cuando el campo crece, crecemos todos.
            </p>

            <blockquote className="border-l-4 border-primary pl-6 py-2">
              <p className="italic text-foreground text-xl font-medium leading-relaxed">
                "Tecnología que no reemplaza al agricultor, lo hace imparable."
              </p>
            </blockquote>
          </div>
        </div>

        {/* Value cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {values.map((v, i) => (
            <div
              key={i}
              className={`glass-card-glow p-8 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150 + 300}ms` }}
            >
              <div className="text-3xl mb-3">{v.icon}</div>
              <h3 className="font-heading font-bold text-sm tracking-widest text-primary mb-3">{v.label}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 text-muted-foreground">
          <span className="text-2xl">🇲🇽</span>
          <span className="text-2xl">🇺🇸</span>
          <span className="font-heading font-medium text-sm">Operación binacional</span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
