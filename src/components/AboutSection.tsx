import { useRef } from "react";
import { Target, Telescope, Gem } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";

const valueIcons = [Target, Telescope, Gem] as const;

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useScrollAnimation(ref);
  const { messages } = useLanguage();
  const values = messages.about.values;

  return (
    <section id="nosotros" className="py-24 md:py-32 grain" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="flex items-center justify-center">
            <div className="relative aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl border border-border shadow-[0_8px_30px_hsl(73_100%_50%_/_0.08)] md:aspect-[5/4]">
              <img
                src="/images/about-nosotros.png"
                alt={messages.about.alt}
                className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-4">{messages.about.kicker}</p>
            <p className="text-foreground text-lg leading-relaxed mb-6">{messages.about.p1}</p>
            <p className="text-muted-foreground leading-relaxed mb-8">{messages.about.p2}</p>

            <blockquote className="border-l-4 border-primary pl-6 py-2">
              <p className="italic text-foreground text-xl font-medium leading-relaxed">{messages.about.quote}</p>
            </blockquote>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {values.map(({ label, text }, i) => {
            const Icon = valueIcons[i];
            return (
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
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-4 text-muted-foreground">
          <span className="text-2xl">🇲🇽</span>
          <span className="text-2xl">🇺🇸</span>
          <span className="font-heading font-medium text-sm">{messages.about.binacional}</span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
