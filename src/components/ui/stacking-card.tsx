import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { ArrowRight } from "lucide-react";

export interface StackingCardItem {
  title: string;
  description: string;
  image: string;
  color: string;
  badge?: string;
}

interface StackingCardProps {
  i: number;
  item: StackingCardItem;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export function StackingCard({ i, item, progress, range, targetScale }: StackingCardProps) {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.35, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={parallaxRef} className="sticky top-0 flex h-[min(100dvh,900px)] min-h-[560px] items-center justify-center py-6 md:py-10">
      <motion.div
        style={{
          backgroundColor: item.color,
          scale,
          top: `calc(-4vh + ${i * 22}px)`,
        }}
        className="relative -top-[20%] flex h-[min(420px,72dvh)] w-[min(94%,760px)] origin-top flex-col overflow-hidden rounded-xl p-6 shadow-2xl md:-top-[25%] md:h-[450px] md:w-[70%] md:rounded-2xl md:p-10"
      >
        {item.badge ? (
          <span className="mb-3 inline-flex w-fit rounded-full border border-white/20 bg-black/20 px-3 py-1 font-heading text-[10px] font-bold uppercase tracking-wider text-white/95 md:text-xs">
            {item.badge}
          </span>
        ) : null}

        <h2 className="text-center font-heading text-xl font-semibold leading-tight text-white md:text-2xl">{item.title}</h2>

        <div className="mt-4 flex min-h-0 flex-1 flex-col-reverse gap-6 md:mt-5 md:flex-row md:gap-10">
          <div className="flex w-full flex-col md:w-[42%] md:pt-[6%]">
            <p className="text-sm leading-relaxed text-white/90">{item.description}</p>
            <a
              href="#planes"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white underline decoration-white/40 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
            >
              Ver más
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>

          <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-lg md:h-full md:w-[58%] md:rounded-xl">
            <motion.div className="h-full w-full" style={{ scale: imageScale }}>
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
