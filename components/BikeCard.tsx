"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Bike } from "@/lib/bikes";
import { formatPrice } from "@/lib/bikes";
import { useLanguage } from "@/components/LanguageProvider";
import { getBikeCopy } from "@/lib/translations";

export default function BikeCard({ bike, index }: { bike: Bike; index: number }) {
  const { locale, t } = useLanguage();
  const copy = getBikeCopy(locale, bike.slug);
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -4 }}
      className="group flex h-full flex-col border-b border-white/15 pb-5"
    >
      <Link href={`/bikes/${bike.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-[#22251f]">
        <Image
          src={bike.image}
          alt={copy.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
        />
        <span className="absolute left-3 top-3 bg-black/70 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-white">{t("bike.demo")}</span>
        <span aria-hidden="true" className="absolute bottom-3 right-3 grid size-10 place-items-center bg-[#ff6b45] text-lg text-[#17100d]">↗</span>
      </Link>
      <div className="flex flex-1 flex-col pt-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-zinc-500">{copy.type}</p>
        <Link href={`/bikes/${bike.slug}`} className="mt-2 w-fit">
          <h3 className="font-serif text-3xl text-white transition group-hover:text-[#ff8b6c]">{bike.name}</h3>
        </Link>
        <p className="mt-2 text-sm leading-6 text-zinc-400">{copy.tagline}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-6">
          <span className="font-semibold text-[#ffb39d]">{formatPrice(bike.price, locale)}</span>
          <Link href={`/bikes/${bike.slug}#order`} className="inline-flex min-h-10 items-center gap-2 border border-white/25 px-3 text-xs font-semibold text-white transition hover:border-[#ff6b45] hover:text-[#ff8b6c]">
            {t("bike.view")} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
