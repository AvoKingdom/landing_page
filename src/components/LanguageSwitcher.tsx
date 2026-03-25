import { Check, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Locale } from "@/i18n/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type LanguageSwitcherProps = {
  className?: string;
  align?: "start" | "center" | "end";
};

const locales: { code: Locale; labelKey: "spanish" | "english" }[] = [
  { code: "es", labelKey: "spanish" },
  { code: "en", labelKey: "english" },
];

export function LanguageSwitcher({ className, align = "end" }: LanguageSwitcherProps) {
  const { locale, setLocale, messages } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        type="button"
        className={cn(
          "inline-flex items-center gap-1.5 rounded-md px-1.5 py-1 text-muted-foreground transition-colors hover:text-foreground",
          "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          className,
        )}
        aria-label={messages.common.languageSwitcherAria}
      >
        <Globe className="h-4 w-4 shrink-0" strokeWidth={1.5} aria-hidden />
        <span className="text-[11px] font-semibold uppercase tracking-[0.12em]">{locale === "es" ? "ES" : "EN"}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align} className="min-w-[9.5rem]">
        {locales.map(({ code, labelKey }) => (
          <DropdownMenuItem
            key={code}
            className="cursor-pointer gap-2"
            onSelect={(e) => {
              e.preventDefault();
              setLocale(code);
            }}
          >
            <span className="flex-1">{messages.common[labelKey]}</span>
            {locale === code ? <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={2} aria-hidden /> : null}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
