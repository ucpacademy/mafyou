"use client";
import Hero from "@/components/Hero";
import BikeCollection from "@/components/BikeCollection";
import FounderNote from "@/components/FounderNote";
import FaqSection from "@/components/FaqSection";
import MarrakechMap from "@/components/MarrakechMap";
import SiteHeader from "@/components/SiteHeader";
import StorySlider from "@/components/StorySlider";
import { demoImageCredits } from "@/lib/bikes";
import { useLanguage } from "@/components/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();
  const steps = [
    ["01", t("steps.oneTitle"), t("steps.oneBody")],
    ["02", t("steps.twoTitle"), t("steps.twoBody")],
    ["03", t("steps.threeTitle"), t("steps.threeBody")],
  ];

  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <section id="steps" data-theme-surface aria-label={t("steps.aria")} className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:grid-cols-3 sm:px-8 sm:py-16">
          {steps.map(([number, title, description]) => (
            <div key={number} className="flex gap-4 border-t border-white/15 pt-4">
              <span className="text-xs font-semibold text-[#ff8b6c]">{number}</span>
              <div>
                <h2 className="font-semibold text-white">{title}</h2>
                <p className="mt-2 max-w-xs text-sm leading-6 text-zinc-500">{description}</p>
              </div>
            </div>
          ))}
        </section>
        <StorySlider />
        <BikeCollection />
        <FounderNote />
        <FaqSection />
        <MarrakechMap />
      </main>
      <footer data-theme-surface className="border-t border-white/10 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="text-sm text-zinc-500">
            <p>{t("footer.copyright")}</p>
            <p className="mt-2">{t("footer.location")}</p>
          </div>
          <details className="max-w-2xl text-xs text-zinc-500">
            <summary className="min-h-8 cursor-pointer text-zinc-300 underline decoration-white/30 underline-offset-4 hover:text-white">{t("footer.credits")}</summary>
            <ul className="mt-3 space-y-2 leading-5">
              {demoImageCredits.map((credit) => (
                <li key={credit.label}>
                  {credit.label}: {credit.credit} · <a href={credit.source} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">{t("footer.source")}</a>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </footer>
    </>
  );
}
