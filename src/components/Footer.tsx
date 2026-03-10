const Footer = () => {
  const cols = [
    {
      title: "Producto",
      links: [
        { label: "Empacadoras", href: "#solucion" },
        { label: "Planes", href: "#planes" },
        { label: "Próximamente", href: "#futuro" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { label: "Quiénes somos", href: "#nosotros" },
        { label: "Misión", href: "#nosotros" },
        { label: "Valores", href: "#nosotros" },
      ],
    },
    {
      title: "Contacto",
      links: [
        { label: "Avokingdom@outlook.com", href: "mailto:Avokingdom@outlook.com" },
        { label: "Facebook", href: "#" },
        { label: "Instagram", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Términos", href: "#" },
        { label: "Privacidad", href: "#" },
      ],
    },
  ];

  return (
    <footer className="border-t border-border py-16 grain">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Logo */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-1.5 mb-3">
              <span className="text-2xl">🥑</span>
              <span className="font-heading font-bold text-lg text-foreground">AvoKingdom</span>
            </div>
            <p className="text-muted-foreground text-sm italic">La unión hace la fuerza</p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading font-semibold text-sm text-foreground mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 text-center text-xs text-muted-foreground">
          © 2026 AvoKingdom Solutions Corp · México 🇲🇽 · USA 🇺🇸 · Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
};

export default Footer;
