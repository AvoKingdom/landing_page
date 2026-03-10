const FinalCTASection = () => {
  return (
    <section className="py-24 md:py-32 grain">
      <div className="container text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl max-w-3xl mx-auto mb-6 leading-tight">
          El campo ya sabe producir el mejor aguacate del mundo.
        </h2>
        <p className="text-muted-foreground text-xl mb-12 max-w-xl mx-auto">
          Ahora también puede saber cuánto vale.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="#planes"
            className="bg-primary text-primary-foreground font-heading font-bold text-lg px-10 py-4 rounded-full hover:brightness-110 transition-all shadow-lg shadow-primary/20"
          >
            Únete gratis hoy
          </a>
          <a
            href="#planes"
            className="border border-foreground/30 text-foreground font-heading font-medium text-lg px-10 py-4 rounded-full hover:bg-foreground/5 transition-all"
          >
            Ver los planes →
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span>Sin contratos</span>
          <span>·</span>
          <span>Sin tarjeta</span>
          <span>·</span>
          <span>Actualizado cada semana</span>
          <span>·</span>
          <span>Hecho en Michoacán 🥑</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
