const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <img
        src="/images/HERO_AVK.webp"
        alt="Huerto de aguacates en Michoacán"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager" />
      

      {/* Gradient overlay: solid black left → transparent right */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />

      {/* Content */}
      <div className="container relative z-10 pb-20 pt-32">
        <div className="max-w-2xl">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">La información que se movía a sus espaldas,
ahora en sus manos.
            <br />
            el mejor aguacate del mundo
            <br />
            <span className="text-primary">ahora en sus manos.</span>
          </h1>

          <p className="text-muted-foreground text-base md:text-lg max-w-xl mb-10 leading-relaxed">
            AvoKingdom le da al productor de aguacate lo que antes solo tenían los intermediarios: precios reales, herramientas inteligentes y transacciones seguras. Todo en un solo lugar.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href="#planes"
              className="bg-primary text-primary-foreground font-heading font-bold text-base px-8 py-3.5 rounded-full hover:brightness-110 transition-all shadow-lg shadow-primary/20">
              
              Regístrate gratis
            </a>
            <a

              className="border border-foreground/30 text-foreground font-heading font-medium text-base px-8 py-3.5 rounded-full hover:bg-foreground/5 transition-all" href="#planes">
              
              Ver planes →
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>);

};

export default HeroSection;