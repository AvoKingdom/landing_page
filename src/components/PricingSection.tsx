import { useState, useRef, useMemo } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";

const planLayout = [
  {
    icon: "🌱",
    monthly: 0,
    annual: 0,
    popular: false,
    badgeColor: "bg-secondary/20 text-secondary",
    ctaStyle: "border border-foreground/30 text-foreground hover:bg-foreground/5",
  },
  {
    icon: "🌿",
    monthly: 29,
    annual: 290,
    popular: true,
    badgeColor: "bg-primary text-primary-foreground",
    ctaStyle: "bg-primary text-primary-foreground hover:brightness-110",
  },
  {
    icon: "🌳",
    monthly: 58,
    annual: 580,
    popular: false,
    badgeColor: "",
    ctaStyle: "border border-foreground/30 text-foreground hover:bg-foreground/5",
  },
  {
    icon: "🌲",
    monthly: 116,
    annual: 1160,
    popular: false,
    badgeColor: "bg-gold/20 text-gold",
    ctaStyle: "border border-gold text-gold hover:bg-gold/10",
  },
] as const;

const PricingSection = () => {
  const [annual, setAnnual] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const visible = useScrollAnimation(ref);
  const { messages, locale } = useLanguage();

  const plans = useMemo(
    () =>
      messages.pricing.plans.map((p, i) => ({
        ...p,
        ...planLayout[i],
      })),
    [messages],
  );

  return (
    <section id="planes" className="py-24 md:py-32 grain" ref={ref}>
      <div className="container">
        <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-4 text-center">{messages.pricing.kicker}</p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-4">{messages.pricing.heading}</h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">{messages.pricing.sub}</p>

        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`text-sm font-medium ${!annual ? "text-foreground" : "text-muted-foreground"}`}>{messages.pricing.monthly}</span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-14 h-7 rounded-full transition-colors ${annual ? "bg-primary" : "bg-muted"}`}
            aria-label={messages.pricing.toggleAria}
          >
            <div className={`absolute top-0.5 w-6 h-6 rounded-full bg-foreground transition-transform ${annual ? "translate-x-7" : "translate-x-0.5"}`} />
          </button>
          <span className={`text-sm font-medium ${annual ? "text-foreground" : "text-muted-foreground"}`}>
            {messages.pricing.annual} <span className="text-primary text-xs font-semibold ml-1">{messages.pricing.saveTwoMonths}</span>
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`glass-card p-6 flex flex-col transition-all duration-700 ${
                plan.popular ? "scale-[1.03] border-primary/50 shadow-lg shadow-primary/10 animate-pulse-glow" : ""
              } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{plan.icon}</span>
                {plan.badge && (
                  <span className={`text-xs font-heading font-bold px-3 py-1 rounded-full ${plan.badgeColor}`}>{plan.badge}</span>
                )}
              </div>

              <h3 className="font-heading font-bold text-xl text-foreground">{plan.name}</h3>
              <p className="text-xs text-muted-foreground mb-4 italic">{plan.tagline}</p>

              <div className="mb-6">
                <span className="font-heading font-bold text-3xl text-foreground">${annual ? plan.annual : plan.monthly}</span>
                <span className="text-muted-foreground text-sm ml-1">
                  {plan.monthly === 0
                    ? locale === "es"
                      ? "/ mes"
                      : "/ mo"
                    : annual
                      ? " USD / year"
                      : " USD / month"}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a href="#" className={`text-center font-heading font-semibold text-sm px-6 py-3 rounded-full transition-all ${plan.ctaStyle}`}>
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">{messages.pricing.footnote}</p>
      </div>
    </section>
  );
};

export default PricingSection;
