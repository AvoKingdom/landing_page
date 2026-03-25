import { useState, useEffect, useMemo } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { messages } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = useMemo(
    () => [
      { label: messages.nav.beneficios, href: "#solucion" },
      { label: messages.nav.nosotros, href: "#nosotros" },
      { label: messages.nav.planes, href: "#planes" },
      { label: messages.nav.comoFunciona, href: "#como-funciona" },
      { label: messages.nav.faq, href: "#preguntas-frecuentes" },
    ],
    [messages],
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#">
          <img src="/images/AVK_LOGO.webp" alt="AvoKingdom" className="h-9" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <span className="h-4 w-px shrink-0 bg-border" aria-hidden />
          <a href="#planes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {messages.nav.iniciarSesion}
          </a>
          <a
            href="#planes"
            className="inline-flex items-center gap-1 bg-primary text-primary-foreground font-heading font-semibold text-sm px-5 py-2.5 rounded-full hover:brightness-110 transition-all"
          >
            {messages.nav.crearCuenta} <span className="ml-1">→</span>
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-2"
          aria-label={messages.nav.menuAria}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border px-6 py-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block text-foreground text-lg font-medium"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2 border-t border-border">
            <LanguageSwitcher align="start" />
          </div>
          <a
            href="#planes"
            onClick={() => setMobileOpen(false)}
            className="block text-foreground text-lg font-medium"
          >
            {messages.nav.iniciarSesion}
          </a>
          <a
            href="#planes"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center gap-1 bg-primary text-primary-foreground font-heading font-semibold text-sm px-5 py-2.5 rounded-full"
          >
            {messages.nav.crearCuenta} →
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
