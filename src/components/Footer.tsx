import { Facebook, Instagram } from "lucide-react";

const WHATSAPP_HREF = "https://wa.me/524432132462";

const linkMotion =
  "text-muted-foreground transition-all duration-200 hover:text-primary hover:translate-x-1 inline-block";

const footerLinkClass = `text-sm ${linkMotion}`;
const footerBarLinkClass = `text-xs ${linkMotion}`;

type FooterCol = {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
};

const cols: FooterCol[] = [
  {
    title: "Producto",
    links: [
      { label: "Empacadoras", href: "#solucion" },
      { label: "Planes", href: "#planes" },
      { label: "Cómo funciona", href: "#como-funciona" },
      { label: "Próximamente", href: "#futuro" },
      { label: "Preguntas Frecuentes", href: "#preguntas-frecuentes" },
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
      { label: "WhatsApp", href: WHATSAPP_HREF, external: true },
    ],
  },
];

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const Footer = () => {
  return (
    <footer className="border-t border-border py-16 grain">
      <div className="container">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          <div className="lg:col-span-1">
            <div className="mb-3">
              <img src="/images/AVK_LOGO.webp" alt="AvoKingdom" className="h-9" />
            </div>
            <p className="text-muted-foreground text-sm italic">La unión hace la fuerza</p>
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${footerLinkClass} inline-flex p-0.5 -m-0.5`}
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" strokeWidth={1.75} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${footerLinkClass} inline-flex p-0.5 -m-0.5`}
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" strokeWidth={1.75} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${footerLinkClass} inline-flex p-0.5 -m-0.5`}
                aria-label="X"
              >
                <XIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading font-semibold text-sm text-foreground mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className={footerLinkClass}
                      {...(l.external ? { target: "_blank" as const, rel: "noopener noreferrer" } : {})}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-muted-foreground">
          <p>© 2026 AvoKingdom Solutions Corp · Todos los derechos reservados</p>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 sm:justify-end">
            <a href="#" className={footerBarLinkClass}>
              Privacidad
            </a>
            <span className="text-border">·</span>
            <a href="#" className={footerBarLinkClass}>
              Términos
            </a>
            <span className="text-border">·</span>
            <span className="text-muted-foreground">Tecnología al servicio del campo</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
