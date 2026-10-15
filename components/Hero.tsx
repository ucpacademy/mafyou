"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section aria-labelledby="hero-title" className="relative isolate flex min-h-[min(82svh,820px)] items-end overflow-hidden bg-[#171915]">
      <Image
        src="/bikes/sport-reference.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,10,8,0.9)_0%,rgba(8,10,8,0.66)_45%,rgba(8,10,8,0.18)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-[#111310] via-[#111310]/30 to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="mx-auto w-full max-w-7xl px-5 pb-20 pt-24 sm:px-8 sm:pb-28"
      >
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff8b6c]">MAFYOU / {t("hero.eyebrow")}</p>
        <h1 id="hero-title" className="max-w-3xl font-serif text-5xl leading-[1.02] text-white sm:text-7xl lg:text-8xl">
          {t("hero.titleFirst")}<br />{t("hero.titleSecond")} <span className="italic text-[#ff8b6c]">{t("hero.titleAccent")}</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-zinc-200 sm:text-lg">
          {t("hero.description")}
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link href="#collection" className="inline-flex min-h-12 items-center gap-5 bg-[#ff6b45] px-6 font-semibold text-[#17100d] transition hover:bg-[#ff8b6c]">
            {t("hero.findRide")} <span aria-hidden="true">↘</span>
          </Link>
          <Link href="#experience" className="inline-flex min-h-12 items-center border border-white/40 px-6 font-semibold text-white transition hover:border-white hover:bg-white/10">
            {t("hero.stepInside")}
          </Link>
        </div>
        <p className="mt-12 text-[10px] uppercase tracking-[0.18em] text-white/60">{t("hero.demo")}</p>
      </motion.div>
    </section>
  );
}
