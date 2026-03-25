import { useRef, useState, useEffect, useMemo } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";

function useCountUp(target: number, visible: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!visible) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [visible, target, duration]);
  return count;
}

const ProcessAndProofSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useScrollAnimation(ref);
  const { messages } = useLanguage();

  const stat1 = useCountUp(82, visible);
  const stat2 = useCountUp(100, visible);
  const stat3 = useCountUp(1, visible, 500);

  const statValues = useMemo(
    () => [
      { value: `${stat1}+`, label: messages.process.stats[0].label },
      { value: `${stat2}%`, label: messages.process.stats[1].label },
      { value: `${stat3}`, label: messages.process.stats[2].label },
    ],
    [messages, stat1, stat2, stat3],
  );

  return (
    <section id="como-funciona" className="py-24 md:py-32 grain" ref={ref}>
      <div className="container">
        <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-4 text-center">{messages.process.kicker}</p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-14 md:mb-20">{messages.process.heading}</h2>

        <div
          className={`mb-16 md:mb-24 grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-14 xl:gap-20 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="min-w-0 divide-y divide-border">
            {messages.process.steps.map((s, i) => (
              <div
                key={s.num}
                className="grid grid-cols-1 gap-4 py-10 md:grid-cols-[minmax(0,4.5rem)_minmax(0,1fr)_minmax(0,1.15fr)] md:gap-x-6 md:gap-y-2 md:items-start"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="font-heading text-4xl font-bold tabular-nums text-primary md:text-5xl md:leading-none">{s.num}</span>
                <h3 className="font-heading text-lg font-bold text-foreground md:pt-1 md:text-xl">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground md:pt-1 md:text-base">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none lg:justify-self-end">
            <div className="overflow-hidden rounded-[1.25rem] border border-border shadow-[0_12px_40px_hsl(0_0%_0%_/_0.35)]">
              <img
                src="/images/how-it-works-app.png"
                alt={messages.process.imageAlt}
                className="h-auto w-full object-cover object-top"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-3 md:gap-12 mb-16 md:mb-20">
          {statValues.map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-heading font-bold text-5xl md:text-6xl text-primary mb-2">{s.value}</div>
              <p className="text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto glass-card p-8 md:p-12 text-center">
          <p className="text-foreground text-lg md:text-xl italic leading-relaxed mb-6">{messages.process.testimonial}</p>
          <p className="text-muted-foreground text-sm">{messages.process.testimonialBy}</p>
        </div>

        <div className="text-center mt-12 md:mt-16">
          <a
            href="#planes"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-bold text-base px-8 py-3.5 rounded-full hover:brightness-110 transition-all"
          >
            {messages.process.cta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessAndProofSection;
