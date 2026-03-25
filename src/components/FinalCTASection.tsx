import { BorderRotate } from "@/components/ui/animated-gradient-border";
import { useLanguage } from "@/i18n/LanguageContext";

const FinalCTASection = () => {
  const { messages } = useLanguage();
  const c = messages.finalCta;

  return (
    <section className="py-24 md:py-32 grain">
      <div className="container">
        <div className="relative mx-auto max-w-5xl px-4">
          <div
            className="pointer-events-none absolute -inset-3 -z-10 rounded-[28px] opacity-90 blur-2xl md:-inset-5 md:blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse 85% 60% at 50% 45%, hsl(73 100% 50% / 0.11) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 50% 100%, hsl(122 39% 49% / 0.07) 0%, transparent 50%)",
            }}
            aria-hidden
          />

          <div className="relative rounded-[26px] shadow-[0_0_36px_-8px_hsl(73_100%_50%_/_0.1),0_0_56px_-14px_hsl(122_39%_49%_/_0.06)]">
            <BorderRotate
              className="w-full"
              animationMode="auto-rotate"
              animationSpeed={10}
              borderRadius={24}
              borderWidth={2}
              backgroundColor="#060606"
              gradientColors={{
                primary: "#142218",
                secondary: "#2d8a45",
                accent: "#c4f000",
              }}
            >
              <div className="px-6 py-10 text-center md:px-12 md:py-14">
                <p className="mb-5 inline-flex rounded-full border border-primary/45 bg-primary/5 px-4 py-1.5 font-heading text-xs font-semibold uppercase tracking-widest text-primary">
                  {c.kicker}
                </p>

                <h2 className="font-heading text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-[2.75rem]">
                  {c.titleBefore}
                  {" "}
                  <span className="text-primary">{c.titleHighlight}</span>
                  {c.titleAfter}
                </h2>

                <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground md:text-lg">{c.sub}</p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href="#planes"
                    className="inline-flex w-full items-center justify-center rounded-full bg-primary px-10 py-4 font-heading text-lg font-bold text-primary-foreground shadow-md shadow-primary/25 transition-all hover:brightness-110 sm:w-auto"
                  >
                    {c.ctaPrimary}
                  </a>
                  <a
                    href="#planes"
                    className="inline-flex w-full items-center justify-center rounded-full border border-foreground/25 bg-transparent px-10 py-4 font-heading text-lg font-medium text-foreground transition-all hover:bg-foreground/5 sm:w-auto"
                  >
                    {c.ctaSecondary}
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                  <span>{c.foot1}</span>
                  <span className="text-border">·</span>
                  <span>{c.foot2}</span>
                  <span className="text-border">·</span>
                  <span>{c.foot3}</span>
                </div>
              </div>
            </BorderRotate>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
