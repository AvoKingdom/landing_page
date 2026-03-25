import { useRef, useMemo } from "react";
import { useScroll } from "motion/react";
import { StackingCard, type StackingCardItem } from "@/components/ui/stacking-card";
import imgBase from "@/assets/BASE.webp";
import imgDesarrollo from "@/assets/DESARROLLO.webp";
import imgModelo from "@/assets/MODELO.webp";
import imgEcosistema from "@/assets/ECOSISTEMA.webp";
import { useLanguage } from "@/i18n/LanguageContext";

const stageMeta: Pick<StackingCardItem, "image" | "badgeVariant">[] = [
  { image: imgBase, badgeVariant: "available" },
  { image: imgDesarrollo, badgeVariant: "development" },
  { image: imgModelo, badgeVariant: "upcoming" },
  { image: imgEcosistema, badgeVariant: "vision" },
];

const RoadmapSection = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const { messages } = useLanguage();

  const stages: StackingCardItem[] = useMemo(
    () =>
      messages.roadmap.stages.map((s, i) => ({
        title: s.title,
        badgeLabel: s.badgeLabel,
        bullets: s.bullets,
        ...stageMeta[i],
      })),
    [messages],
  );

  const n = stages.length;

  return (
    <section id="futuro" className="relative grain">
      <div className="container max-w-4xl px-4 pb-10 pt-24 text-center md:pb-14 md:pt-32">
        <p className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-primary">{messages.roadmap.kicker}</p>
        <h2 className="font-heading text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">{messages.roadmap.heading}</h2>
      </div>

      <div ref={container} className="relative pb-24">
        {stages.map((item, i) => (
          <StackingCard key={item.title} i={i} total={n} item={item} progress={scrollYProgress} targetScale={1 - (n - i) * 0.05} />
        ))}
      </div>
    </section>
  );
};

export default RoadmapSection;
