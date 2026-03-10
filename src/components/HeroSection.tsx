import { useEffect, useRef } from "react";

const PRICES = ["$18.50", "$22.00", "$19.75", "$24.30", "$21.00", "$17.80", "$23.50", "$20.25", "$16.90", "$25.00", "$19.00", "$22.80"];

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const spawn = () => {
      const el = document.createElement("span");
      el.className = "floating-number";
      el.textContent = PRICES[Math.floor(Math.random() * PRICES.length)];
      el.style.left = `${Math.random() * 100}%`;
      el.style.fontSize = `${14 + Math.random() * 18}px`;
      el.style.animationDuration = `${8 + Math.random() * 12}s`;
      el.style.animationDelay = `${Math.random() * 2}s`;
      container.appendChild(el);
      setTimeout(() => el.remove(), 22000);
    };

    // Initial burst
    for (let i = 0; i < 15; i++) setTimeout(spawn, i * 400);
    const interval = setInterval(spawn, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain">
      <div ref={containerRef} className="absolute inset-0 overflow-hidden" />

      <div className="container relative z-10 pt-24 pb-20 text-center">
        <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight max-w-4xl mx-auto mb-6">
          ¿Cuánto te están pagando a ti...
          <br />
          <span className="text-primary">y cuánto le pagan al de junto?</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Accede a los precios reales de más de 82 empacadoras en Michoacán. Sin intermediarios. Sin engaños. Con datos de verdad.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="#planes"
            className="bg-primary text-primary-foreground font-heading font-bold text-base px-8 py-3.5 rounded-full hover:brightness-110 transition-all shadow-lg shadow-primary/20"
          >
            Regístrate gratis
          </a>
          <a
            href="#solucion"
            className="border border-foreground/30 text-foreground font-heading font-medium text-base px-8 py-3.5 rounded-full hover:bg-foreground/5 transition-all"
          >
            Ver empacadoras →
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span>✓ Sin tarjeta de crédito</span>
          <span>✓ 82 empacadoras registradas</span>
          <span>✓ Actualizado cada semana</span>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
