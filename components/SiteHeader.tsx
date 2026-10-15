"use client";
import Link from "next/link";
import { WHATSAPP_NUMBER } from "@/lib/bikes";
import { useLanguage } from "@/components/LanguageProvider";
import { useTheme } from "@/components/ThemeProvider";

export default function SiteHeader() {
  const { locale, setLocale, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <header data-theme-surface className="relative z-20 border-b border-white/10 bg-[#111310]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-3 sm:px-8">
        <Link href="/" aria-label="MAFYOU home" className="flex items-center gap-3">
          <span className="grid size-9 place-items-center border border-[#ff6b45] text-xs font-bold text-[#ff6b45]">M</span>
          <span>
            <span className="block text-lg font-black leading-none">MAFYOU</span>
            <span className="mt-1 block text-[9px] uppercase tracking-[0.18em] text-zinc-500">{t("header.motorcycles")}</span>
          </span>
        </Link>
        <nav aria-label={t("header.collection")} className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
          <Link href="/#collection" className="transition hover:text-white">{t("header.collection")}</Link>
          <Link href="/#experience" className="transition hover:text-white">{t("header.experience")}</Link>
          <Link href="/#founder" className="transition hover:text-white">{t("header.founder")}</Link>
        </nav>
        <div className="flex items-center gap-1.5 sm:gap-3">
          <button
            type="button"
            aria-label={theme === "dark" ? t("theme.switchLight") : t("theme.switchDark")}
            title={theme === "dark" ? t("theme.switchLight") : t("theme.switchDark")}
            onClick={toggleTheme}
            className="grid size-11 place-items-center border border-white/20 text-lg transition hover:border-[#ff6b45] hover:text-[#ff8b6c]"
          >
            <span aria-hidden="true">{theme === "dark" ? "☼" : "◐"}</span>
          </button>
          <label className="sr-only" htmlFor="language-picker">{t("language.label")}</label>
          <select
            id="language-picker"
            value={locale}
            onChange={(event) => setLocale(event.target.value as "en" | "fr" | "ar")}
            className="h-11 max-w-24 border border-white/20 bg-[#111310] px-2 text-xs font-semibold text-white outline-none focus:border-[#ff6b45]"
          >
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="ar">العربية</option>
          </select>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 border border-white/20 px-3 text-sm font-semibold transition hover:border-[#ff6b45] hover:text-[#ff8b6c] sm:px-4"
          >
            <span className="hidden sm:inline">{t("header.talk")}</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
