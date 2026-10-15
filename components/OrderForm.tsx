"use client";
import { useState } from "react";
import type { Bike } from "@/lib/bikes";
import { formatPrice, WHATSAPP_NUMBER } from "@/lib/bikes";
import { useLanguage } from "@/components/LanguageProvider";
import { getBikeCopy } from "@/lib/translations";

const field = "mt-1 min-h-12 w-full border border-white/15 bg-[#141612] px-4 py-3 text-white outline-none transition focus:border-[#ff6b45]";

export default function OrderForm({ bike }: { bike: Bike }) {
  const { locale, t } = useLanguage();
  const copy = getBikeCopy(locale, bike.slug);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [qty, setQty] = useState(1);
  const [notes, setNotes] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `*${t("form.messageTitle")}*`,
      `${t("form.model")}: ${bike.name} (${copy.type})`,
      `${t("form.unitPrice")}: ${formatPrice(bike.price, locale)}`,
      `${t("form.quantity")}: ${qty}`,
      `${t("form.total")}: ${formatPrice(bike.price * qty, locale)}`,
      `${t("form.name")}: ${name.trim()}`,
      `${t("form.phone")}: ${phone.trim()}`,
      `${t("form.city")}: ${city.trim()}`,
      notes.trim() ? `${t("form.notes")}: ${notes.trim()}` : "",
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={submit} data-theme-surface className="border border-white/15 bg-[#1b1e19] p-5 sm:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff8b6c]">{t("form.kicker")}</p>
      <h2 className="mt-2 font-serif text-3xl">{t("form.title")}</h2>
      <div className="mt-5 border-y border-white/15 py-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-semibold">{bike.name}</p>
            <p className="mt-1 text-xs text-zinc-500">{copy.type} · {formatPrice(bike.price, locale)} {t("form.each")}</p>
          </div>
          <div className="text-end">
            <p className="text-[10px] uppercase tracking-[0.14em] text-zinc-500">{t("form.estimate")}</p>
            <p className="mt-1 font-semibold text-[#ffb39d]">{formatPrice(bike.price * qty, locale)}</p>
          </div>
        </div>
      </div>
      <div className="space-y-4 pt-4">
        <label className="block text-sm text-zinc-300">{t("form.name")}
          <input name="name" required value={name} onChange={(e) => setName(e.target.value)} className={field} autoComplete="name" />
        </label>
        <label className="block text-sm text-zinc-300">{t("form.phone")}
          <input name="phone" required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={field} autoComplete="tel" />
        </label>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <label className="block text-sm text-zinc-300">{t("form.city")}
            <input name="city" required value={city} onChange={(e) => setCity(e.target.value)} className={field} autoComplete="address-level2" />
          </label>
          <label className="block text-sm text-zinc-300">{t("form.quantity")}
            <input name="quantity" type="number" min={1} max={10} value={qty} onChange={(e) => setQty(Math.min(10, Math.max(1, Number(e.target.value) || 1)))} className={field} />
          </label>
        </div>
        <label className="block text-sm text-zinc-300">{t("form.notes")} <span className="text-zinc-500">{t("form.optional")}</span>
          <textarea name="notes" value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} className={`${field} min-h-24 resize-y`} />
        </label>
      </div>
      <button type="submit" className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-3 bg-[#8fd69a] px-5 font-bold text-[#101710] transition hover:bg-[#a9e7b2]">
        {t("form.continue")} <span aria-hidden="true">↗</span>
      </button>
      <p className="mt-3 text-center text-xs leading-5 text-zinc-500">{t("form.disclaimer")}</p>
    </form>
  );
}
