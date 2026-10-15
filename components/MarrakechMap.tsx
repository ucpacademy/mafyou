"use client";
import { useLanguage } from "@/components/LanguageProvider";

const mapUrl = "https://www.openstreetmap.org/export/embed.html?bbox=-8.0180%2C31.6050%2C-7.9450%2C31.6520&layer=mapnik&marker=31.6295%2C-7.9811";
const mapLink = "https://www.openstreetmap.org/?mlat=31.6295&mlon=-7.9811#map=13/31.6295/-7.9811";

export default function MarrakechMap() {
  const { t } = useLanguage();

  return (
    <section id="location" data-theme-surface className="scroll-mt-8 border-t border-white/10 px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff8b6c]">{t("map.eyebrow")}</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-6xl">{t("map.title")}</h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm leading-6 text-zinc-400">{t("map.description")}</p>
            <p className="mt-3 text-xs text-zinc-500">{t("map.approximate")}</p>
          </div>
        </div>
        <div className="relative h-[320px] overflow-hidden border border-white/15 bg-[#e7e9e2] sm:h-[440px]">
          <iframe
            title={t("map.frameTitle")}
            src={mapUrl}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="size-full border-0"
          />
        </div>
        <a href={mapLink} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-10 items-center gap-2 border-b border-[#ff6b45] pb-1 text-sm font-semibold transition hover:text-[#ff8b6c]">
          {t("map.open")} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
