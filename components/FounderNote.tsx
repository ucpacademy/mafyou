"use client";
import { WHATSAPP_NUMBER } from "@/lib/bikes";
import { useLanguage } from "@/components/LanguageProvider";

export default function FounderNote() {
  const { t } = useLanguage();
  return (
    <section id="founder" data-theme-surface className="scroll-mt-8 px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 border-y border-white/15 py-10 sm:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff8b6c]">{t("founder.eyebrow")}</p>
          <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight sm:text-6xl">{t("founder.title")}</h2>
        </div>
        <div className="flex flex-col items-start justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">{t("founder.note")}</p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-200 sm:text-xl">
            {t("founder.body")}
          </p>
          <p className="mt-6 text-sm text-zinc-500">{t("founder.signature")}</p>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-11 items-center gap-3 border-b border-[#ff6b45] pb-1 text-sm font-semibold text-white transition hover:text-[#ff8b6c]">
            {t("founder.contact")} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
