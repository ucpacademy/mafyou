"use client";
import { useState } from "react";
import BikeCard from "@/components/BikeCard";
import { bikes } from "@/lib/bikes";
import { useLanguage } from "@/components/LanguageProvider";
import { getBikeCopy } from "@/lib/translations";

const filters = ["All", ...new Set(bikes.map((bike) => bike.type))];

export default function BikeCollection() {
  const { locale, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleBikes = activeFilter === "All" ? bikes : bikes.filter((bike) => bike.type === activeFilter);

  return (
    <section id="collection" data-theme-surface className="mx-auto max-w-7xl scroll-mt-8 px-5 py-24 sm:px-8 sm:py-32">
      <div className="flex flex-col gap-8 border-b border-white/15 pb-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff8b6c]">{t("collection.eyebrow")}</p>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight sm:text-6xl">{t("collection.titleFirst")}<br />{t("collection.titleSecond")}</h2>
        </div>
          <p className="max-w-sm text-sm leading-6 text-zinc-400">{t("collection.intro")}</p>
      </div>
      <div className="flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
        <div role="group" aria-label="Filter bikes by type" className="flex max-w-full gap-2 overflow-x-auto pb-1">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              className={`min-h-10 shrink-0 border px-4 text-sm transition ${activeFilter === filter ? "border-[#ff6b45] bg-[#ff6b45] text-[#17100d]" : "border-white/20 text-zinc-300 hover:border-white/60 hover:text-white"}`}
            >
              {filter === "All" ? t("collection.all") : getBikeCopy(locale, bikes.find((bike) => bike.type === filter)!.slug).type}
            </button>
          ))}
        </div>
        <p aria-live="polite" className="text-xs uppercase tracking-[0.15em] text-zinc-500">{String(visibleBikes.length).padStart(2, "0")} {t("collection.count")}</p>
      </div>
      <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
        {visibleBikes.map((bike, index) => <BikeCard key={bike.slug} bike={bike} index={index} />)}
      </div>
      <p className="mt-8 text-xs leading-5 text-zinc-500">{t("collection.demo")}</p>
    </section>
  );
}
