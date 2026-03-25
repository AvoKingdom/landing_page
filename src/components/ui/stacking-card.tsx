import { useRef } from "react";
import { motion, useTransform, type MotionValue } from "motion/react";
import { CheckCircle2, Clock, RefreshCw, Sparkles, type LucideIcon } from "lucide-react";
import { BorderRotate } from "@/components/ui/animated-gradient-border";

export type StageBadgeVariant = "available" | "development" | "upcoming" | "vision";

const badgeIcons: Record<StageBadgeVariant, LucideIcon> = {
  available: CheckCircle2,
  development: RefreshCw,
  upcoming: Clock,
  vision: Sparkles,
};

export interface StackingCardItem {
  title: string;
  badgeLabel: string;
  badgeVariant: StageBadgeVariant;
  bullets: string[];
  image: string;
}

interface StackingCardProps {
  i: number;
  total: number;
  item: StackingCardItem;
  progress: MotionValue<number>;
  targetScale: number;
}

const ctaBorderGradient = {
  primary: "#142218",
  secondary: "#2d8a45",
  accent: "#c4f000",
} as const;

function StageBadge({ variant, label }: { variant: StageBadgeVariant; label: string }) {
  const Icon = badgeIcons[variant];
  return (
    <span className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-primary/45 bg-primary/5 px-4 py-1.5 font-heading text-xs font-semibold uppercase tracking-widest text-primary md:mx-0">
      <Icon className="h-3.5 w-3.5 shrink-0 text-primary" strokeWidth={2} aria-hidden />
      {label}
    </span>
  );
}

export function StackingCard({ i, total, item, progress, targetScale }: StackingCardProps) {
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Un solo eje de scroll (progress del contenedor): escala de apilamiento como en el diseño original
  const scale = useTransform(progress, [i / total, 1], [1, targetScale]);

  // Parallax de imagen derivado del mismo progress (evita un useScroll extra por card)
  const imageScale = useTransform(progress, [i / total, (i + 1) / total], [1.22, 1]);

  return (
    <div
      ref={parallaxRef}
      className="sticky top-0 flex h-screen min-h-[560px] items-center justify-center py-6 md:min-h-[640px] md:py-10"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative -top-[25%] flex w-full max-w-[min(94vw,760px)] origin-top justify-center md:max-w-none md:w-[70%]"
      >
        <div
          className="pointer-events-none absolute -inset-3 -z-10 rounded-[28px] opacity-90 blur-2xl md:-inset-5 md:blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse 85% 60% at 50% 45%, hsl(73 100% 50% / 0.11) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 50% 100%, hsl(122 39% 49% / 0.07) 0%, transparent 50%)",
          }}
          aria-hidden
        />

        <div className="relative w-full rounded-[26px] shadow-[0_0_36px_-8px_hsl(73_100%_50%_/_0.1),0_0_56px_-14px_hsl(122_39%_49%_/_0.06)]">
          <BorderRotate
            className="w-full"
            animationMode="auto-rotate"
            animationSpeed={10}
            borderRadius={24}
            borderWidth={2}
            backgroundColor="#060606"
            gradientColors={ctaBorderGradient}
          >
            <div className="px-6 py-8 md:px-10 md:py-10">
              <StageBadge variant={item.badgeVariant} label={item.badgeLabel} />

              <h2 className="text-center font-heading text-xl font-bold leading-tight text-foreground md:text-left md:text-2xl">
                {item.title}
              </h2>

              <div className="mt-4 flex min-h-0 flex-1 flex-col-reverse gap-6 md:mt-5 md:flex-row md:gap-10">
                <div className="flex w-full flex-col md:w-[42%] md:pt-[4%]">
                  <ul className="space-y-2.5 text-left">
                    {item.bullets.map((line) => (
                      <li key={line} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_8px_hsl(73_100%_50%_/_0.45)]"
                          aria-hidden
                        />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative isolate h-44 w-full shrink-0 overflow-hidden rounded-xl border border-border/60 md:h-72 md:w-[58%] md:min-h-[288px]">
                  <motion.div className="relative h-full w-full" style={{ scale: imageScale }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="eager"
                      decoding="async"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </BorderRotate>
        </div>
      </motion.div>
    </div>
  );
}
