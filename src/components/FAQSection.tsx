import { useRef } from "react";
import { ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/i18n/LanguageContext";

const FAQSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useScrollAnimation(ref);
  const { messages } = useLanguage();
  const items = messages.faq.items;

  return (
    <section id="preguntas-frecuentes" className="py-24 md:py-32 grain" ref={ref}>
      <div className="container max-w-3xl">
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="text-center">
            <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-4">{messages.faq.kicker}</p>
            <h2 className="font-heading text-3xl font-bold leading-tight text-foreground md:text-4xl">{messages.faq.heading}</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground md:text-base">{messages.faq.sub}</p>
          </div>

          <Accordion type="single" collapsible className="mt-10 w-full space-y-3">
            {items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="group overflow-hidden rounded-xl border border-border/80 bg-muted/35 shadow-sm backdrop-blur-sm data-[state=open]:border-primary/25 data-[state=open]:bg-muted/50"
              >
                <AccordionTrigger className="px-4 py-4 text-left hover:no-underline [&>svg]:hidden md:px-5">
                  <span className="flex w-full items-center justify-between gap-4">
                    <span className="font-heading text-[15px] font-semibold text-foreground md:text-base">{item.q}</span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/10 text-primary transition-colors group-data-[state=open]:border-primary/40 group-data-[state=open]:bg-primary/15">
                      <ChevronRight className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-90" aria-hidden />
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-0 text-muted-foreground md:px-5">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
