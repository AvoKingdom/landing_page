import { useRef } from "react";
import { Target, Telescope, Gem } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const values = [
  {
    Icon: Target,
    label: "MISIÓN",
    text: "Facilitar acceso a precios de compra reales para que los productores tomen mejores decisiones comerciales y fortalezcan su posición en el mercado.",
  },
  {
    Icon: Telescope,
    label: "VISIÓN",
    text: "Ser la plataforma líder en transparencia de precios para el sector aguacatero en Michoacán, empoderando a los productores con información confiable y oportuna.",
  },
  {
    Icon: Gem,
    label: "VALORES",
    text: "Honestidad · Responsabilidad · Productividad · Empatía",
  },
] as const;

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useScrollAnimation(ref);

  return (
    <section id="nosotros" className="py-24 md:py-32 grain" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left — Campo */}
          <div className="flex items-center justify-center">
            <div className="relative aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl border border-border shadow-[0_8px_30px_hsl(73_100%_50%_/_0.08)] md:aspect-[5/4]">
              <img
                src="/images/about-nosotros.png"
                alt="Trabajador en un huerto de aguacate con una caja llena de fruta recién cosechada"
                className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
                loading="lazy"
                decoding="async"
              />
            </div>
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
          {values.map(({ Icon, label, text }, i) => (
            <div
              key={label}
              className={`glass-card-glow-bottom p-8 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150 + 300}ms` }}
            >
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 ring-1 ring-primary/15">
                <Icon className="h-7 w-7 text-primary" strokeWidth={1.5} aria-hidden />
              </div>
              <h3 className="font-heading font-bold text-sm tracking-widest text-primary mb-3">{label}</h3>
              <p className="text-muted-foreground leading-relaxed">{text}</p>
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
