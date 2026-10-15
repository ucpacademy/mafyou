"use client";
import { useLanguage } from "@/components/LanguageProvider";
import type { MessageKey } from "@/lib/translations";

const questions = [
  ["faq.locationQuestion", "faq.locationAnswer"],
  ["faq.visitQuestion", "faq.visitAnswer"],
  ["faq.orderQuestion", "faq.orderAnswer"],
  ["faq.paymentQuestion", "faq.paymentAnswer"],
  ["faq.photosQuestion", "faq.photosAnswer"],
  ["faq.deliveryQuestion", "faq.deliveryAnswer"],
] as const satisfies readonly (readonly [MessageKey, MessageKey])[];

export default function FaqSection() {
  const { t } = useLanguage();

  return (
    <section id="faq" data-theme-surface className="scroll-mt-8 px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff8b6c]">{t("faq.eyebrow")}</p>
          <h2 className="mt-5 max-w-lg font-serif text-4xl leading-tight sm:text-6xl">{t("faq.title")}</h2>
        </div>
        <div>
          {questions.map(([question, answer]) => (
            <details key={question} className="group border-b border-white/15 first:border-t">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 py-4 text-start font-semibold text-white marker:hidden [&::-webkit-details-marker]:hidden">
                <span>{t(question)}</span>
                <span aria-hidden="true" className="grid size-8 shrink-0 place-items-center border border-white/20 text-lg font-normal text-[#ff8b6c] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="max-w-2xl pb-5 pe-12 text-sm leading-7 text-zinc-400">{t(answer)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
