"use client";
import Image from "next/image";
import Link from "next/link";
import type { Bike } from "@/lib/bikes";
import { formatPrice } from "@/lib/bikes";
import OrderForm from "@/components/OrderForm";
import SiteHeader from "@/components/SiteHeader";
import { useLanguage } from "@/components/LanguageProvider";
import { getBikeCopy, translateSpec } from "@/lib/translations";

export default function BikeDetail({ bike }: { bike: Bike }) {
  const { locale, t } = useLanguage();
  const copy = getBikeCopy(locale, bike.slug);

  return (
    <>
      <SiteHeader />
      <main data-theme-surface className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 sm:py-12">
        <Link href="/#collection" className="inline-flex min-h-10 items-center gap-2 text-sm text-zinc-400 transition hover:text-white"><span aria-hidden="true">←</span> {t("detail.back")}</Link>
        <div className="mt-7 grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div>
            <div className="relative aspect-[4/3] overflow-hidden bg-[#1b1e19]">
              <Image src={bike.image} alt={copy.imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
              <span className="absolute left-4 top-4 bg-black/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em]">{t("detail.reference")}</span>
            </div>
            <p className="mt-3 text-xs text-zinc-500">
              {bike.imageCredit} · <a href={bike.imageSource} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">{t("detail.imageSource")}</a>
            </p>
            <div className="mt-9 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff8b6c]">{copy.type} / {t("detail.demoModel")}</p>
                <h1 className="mt-2 font-serif text-5xl leading-tight sm:text-7xl">{bike.name}</h1>
              </div>
              <p className="text-2xl font-semibold text-[#ffb39d]">{formatPrice(bike.price, locale)}</p>
            </div>
            <p className="mt-4 text-lg text-zinc-300">{copy.tagline}</p>
            <p className="mt-5 max-w-2xl leading-7 text-zinc-400">{copy.description}</p>
            <dl className="mt-8 grid grid-cols-2 border-l border-t border-white/15">
              {bike.specs.map((spec) => (
                <div key={spec.label} className="border-b border-r border-white/15 p-4 sm:p-5">
                  <dt className="text-[10px] uppercase tracking-[0.15em] text-zinc-500">{translateSpec(locale, spec.label)}</dt>
                  <dd className="mt-2 font-semibold text-white">{spec.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs leading-5 text-zinc-500">{t("detail.disclaimer")}</p>
          </div>
          <div id="order" className="scroll-mt-8 lg:sticky lg:top-6">
            <OrderForm key={bike.slug} bike={bike} />
          </div>
        </div>
      </main>
      <footer data-theme-surface className="mt-10 border-t border-white/10 px-5 py-7 text-center text-xs text-zinc-500">{t("footer.copyright")} · {t("footer.location")}</footer>
    </>
  );
}
