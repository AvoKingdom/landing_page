import { useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  { num: "01", title: "Crea tu cuenta gratis", body: "Regístrate en menos de 2 minutos. Sin tarjeta, sin compromisos." },
  { num: "02", title: "Selecciona tu fruta y gramaje", body: "Filtra por Convencional, Orgánica, Loca o Aventajada. Elige el gramaje de tu cosecha." },
  { num: "03", title: "Compara y decide", body: "Ve el ranking de precios y llama directamente a la empacadora que mejor te paga." },
];

const HowItWorksSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useScrollAnimation(ref);

  return (
    <section className="py-24 md:py-32 grain" ref={ref}>
      <div className="container">
        <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-20">
          Así de simple.
        </h2>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[16.5%] right-[16.5%] h-px border-t-2 border-dashed border-primary/30" />

          {steps.map((s, i) => (
            <div
              key={i}
              className={`text-center transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border-2 border-primary mb-6 relative z-10 bg-background">
                <span className="text-primary font-heading font-bold text-2xl">{s.num}</span>
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#planes"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-bold text-base px-8 py-3.5 rounded-full hover:brightness-110 transition-all"
          >
            Comenzar ahora →
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
