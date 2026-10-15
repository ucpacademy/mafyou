"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { bikes, showroomPhoto } from "@/lib/bikes";
import { useLanguage } from "@/components/LanguageProvider";

const slides = [
  {
    eyebrowKey: "story.showroom",
    titleKey: "story.showroomTitle",
    descriptionKey: "story.showroomBody",
    image: showroomPhoto.image,
    altKey: "story.showroomAlt",
  },
  {
    eyebrowKey: "story.road",
    titleKey: "story.roadTitle",
    descriptionKey: "story.roadBody",
    image: bikes[1].image,
    altKey: "story.roadAlt",
  },
  {
    eyebrowKey: "story.city",
    titleKey: "story.cityTitle",
    descriptionKey: "story.cityBody",
    image: bikes[2].image,
    altKey: "story.cityAlt",
  },
] as const;

export default function StorySlider() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  const move = (direction: number) => {
    setActiveIndex((current) => (current + direction + slides.length) % slides.length);
  };

  return (
    <section id="experience" className="scroll-mt-8 border-y border-white/10 bg-[#181a16] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-9 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff8b6c]">{t("story.eyebrow")}</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-6xl">{t("story.title")}</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-zinc-400">{t("story.intro")}</p>
        </div>
        <div className="relative min-h-[480px] overflow-hidden bg-black sm:min-h-[580px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image src={activeSlide.image} alt={t(activeSlide.altKey)} fill sizes="(max-width: 1280px) 100vw, 1200px" className="object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,10,8,0.88)_0%,rgba(8,10,8,0.5)_54%,rgba(8,10,8,0.08)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 top-0 flex flex-col justify-end p-6 pb-24 sm:max-w-2xl sm:p-12 sm:pb-28">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff8b6c]">{t(activeSlide.eyebrowKey)} · {t("story.demo")}</p>
                <h3 className="mt-4 max-w-xl font-serif text-4xl leading-tight sm:text-6xl">{t(activeSlide.titleKey)}</h3>
                <p className="mt-4 max-w-lg text-sm leading-6 text-zinc-200 sm:text-base">{t(activeSlide.descriptionKey)}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-white/15 bg-black/35 px-5 py-4 sm:px-8">
            <div className="flex items-center gap-2" role="group" aria-label={t("story.choose")}>
              {slides.map((slide, index) => (
                <button
                  key={slide.eyebrowKey}
                  type="button"
                  aria-label={`${t("story.showSlide")} ${index + 1}: ${t(slide.eyebrowKey)}`}
                  aria-pressed={activeIndex === index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 transition-all ${activeIndex === index ? "w-10 bg-[#ff8b6c]" : "w-5 bg-white/40 hover:bg-white/80"}`}
                />
              ))}
              <span aria-live="polite" className="ml-3 text-xs tabular-nums text-white/70">0{activeIndex + 1} / 0{slides.length}</span>
            </div>
            <div className="flex gap-2">
              <button type="button" aria-label={t("story.previous")} onClick={() => move(-1)} className="grid size-11 place-items-center border border-white/35 text-xl text-white transition hover:border-white hover:bg-white/10">←</button>
              <button type="button" aria-label={t("story.next")} onClick={() => move(1)} className="grid size-11 place-items-center border border-white/35 text-xl text-white transition hover:border-white hover:bg-white/10">→</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
