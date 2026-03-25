import { Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const linkMotion =
  "text-muted-foreground transition-all duration-200 hover:text-primary hover:translate-x-1 inline-block";

const footerLinkClass = `text-sm ${linkMotion}`;
const footerBarLinkClass = `text-xs ${linkMotion}`;

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const Footer = () => {
  const { messages } = useLanguage();
  const cols = messages.footer.cols;

  return (
    <footer className="border-t border-border py-16 grain">
      <div className="container">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          <div className="lg:col-span-1">
            <div className="mb-3">
              <img src="/images/AVK_LOGO.webp" alt="AvoKingdom" className="h-9" />
            </div>
            <p className="text-muted-foreground text-sm italic">{messages.footer.tagline}</p>
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://www.instagram.com/avokingdom_solutions?igsh=empuMWgwazI2bjM0&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className={`${footerLinkClass} inline-flex p-0.5 -m-0.5`}
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" strokeWidth={1.75} />
              </a>
              <a
                href="https://www.facebook.com/share/1E1pKyoE9B/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className={`${footerLinkClass} inline-flex p-0.5 -m-0.5`}
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" strokeWidth={1.75} />
              </a>
              <a
                href="https://x.com/avokingdom_s?s=21&t=heiz7JaTxmz-apmB_oaXLg"
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
          <p>{messages.footer.copyright}</p>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 sm:justify-end">
            <a href="#" className={footerBarLinkClass}>
              {messages.footer.privacy}
            </a>
            <span className="text-border">·</span>
            <a href="#" className={footerBarLinkClass}>
              {messages.footer.terms}
            </a>
            <span className="text-border">·</span>
            <span className="text-muted-foreground">{messages.footer.tech}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
