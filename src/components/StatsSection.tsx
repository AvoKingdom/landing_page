import { useRef, useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function useCountUp(target: number, visible: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
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

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useScrollAnimation(ref);

  const stat1 = useCountUp(82, visible);
  const stat2 = useCountUp(100, visible);
  const stat3 = useCountUp(1, visible, 500);

  return (
    <section className="py-24 md:py-32 grain" ref={ref}>
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {[
            { value: `${stat1}+`, label: "Empacadoras registradas" },
            { value: `${stat2}%`, label: "Información verificada" },
            { value: `${stat3}`, label: "Estado. Toda Michoacán cubierta" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-heading font-bold text-5xl md:text-6xl text-primary mb-2">{s.value}</div>
              <p className="text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-2xl mx-auto glass-card p-8 md:p-12 text-center">
          <p className="text-foreground text-lg md:text-xl italic leading-relaxed mb-6">
            "Por primera vez sé exactamente qué precio ofrece cada empacadora antes de salir a vender. Eso vale más que cualquier intermediario."
          </p>
          <p className="text-muted-foreground text-sm">
            — Productor afiliado, Tancítaro, Michoacán
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
