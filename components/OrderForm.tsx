"use client";
import { useState } from "react";
import { Bike, bikes, WHATSAPP_NUMBER } from "@/lib/bikes";

const field = "w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-orange-500";

export default function OrderForm({ bike }: { bike: Bike }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [motor, setMotor] = useState(bike.slug);
  const [qty, setQty] = useState(1);
  const [notes, setNotes] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const selected = bikes.find((b) => b.slug === motor) ?? bike;
    const text = [
      "*New order - MAFYOU*",
      `Motor type: ${selected.name} (${selected.type})`,
      `Quantity: ${qty}`,
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      `City: ${city.trim()}`,
      notes.trim() ? `Notes: ${notes.trim()}` : "",
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={submit} className="space-y-4 rounded-3xl border border-white/10 bg-zinc-900/70 p-6 sm:p-8">
      <h2 className="text-2xl font-bold">Order on WhatsApp</h2>
      <label className="block text-sm text-zinc-400">Motor type
        <select value={motor} onChange={(e) => setMotor(e.target.value)} className={field + " mt-1"}>
          {bikes.map((b) => <option key={b.slug} value={b.slug}>{b.name} - {b.type}</option>)}
        </select>
      </label>
      <label className="block text-sm text-zinc-400">Full name
        <input required value={name} onChange={(e) => setName(e.target.value)} className={field + " mt-1"} autoComplete="name" />
      </label>
      <label className="block text-sm text-zinc-400">Phone
        <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={field + " mt-1"} autoComplete="tel" />
      </label>
      <div className="grid grid-cols-2 gap-4">
        <label className="block text-sm text-zinc-400">City
          <input required value={city} onChange={(e) => setCity(e.target.value)} className={field + " mt-1"} />
        </label>
        <label className="block text-sm text-zinc-400">Quantity
          <input type="number" min={1} max={10} value={qty} onChange={(e) => setQty(Math.min(10, Math.max(1, Number(e.target.value) || 1)))} className={field + " mt-1"} />
        </label>
      </div>
      <label className="block text-sm text-zinc-400">Notes (optional)
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} className={field + " mt-1"} />
      </label>
      <button type="submit" className="w-full rounded-full bg-green-500 py-3 font-bold text-black transition hover:scale-[1.02] hover:bg-green-400">
        Send order via WhatsApp
      </button>
    </form>
  );
}
