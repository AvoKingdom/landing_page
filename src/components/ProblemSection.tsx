import { useRef, useMemo } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";

const imageMeta = [
  { image: "/images/Precio.webp", objectPosition: "center 70%" },
  { image: "/images/Mercado.webp", objectPosition: "center" },
  { image: "/images/Tiempo.webp", objectPosition: "center" },
];

const ProblemSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useScrollAnimation(ref);
  const { messages } = useLanguage();

  const problems = useMemo(
    () => messages.problem.cards.map((c, i) => ({ ...c, ...imageMeta[i] })),
    [messages],
  );

  return (
    <section className="py-24 md:py-32 grain" ref={ref}>
      <div className="container">
        <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-4">{messages.problem.kicker}</p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl max-w-3xl mb-16 leading-tight">{messages.problem.heading}</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <div
              key={i}
              className={`glass-card-glow-bottom overflow-hidden transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: p.objectPosition || "center" }}
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-6 pt-4">
                <h3 className="font-heading font-bold text-lg mb-3 text-foreground">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
