import Hero from "@/components/Hero";
import BikeCard from "@/components/BikeCard";
import Reveal from "@/components/Reveal";
import { bikes, WHATSAPP_NUMBER } from "@/lib/bikes";

const stats = [
  ["200+", "Bikes delivered"],
  ["24/7", "WhatsApp support"],
  ["2 yrs", "Warranty"],
  ["48h", "Fast delivery"],
];

export default function Home() {
  return (
    <main>
      <Hero />
      <section id="story" className="relative px-6 py-32">
        <Reveal className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-black leading-tight sm:text-6xl">
            Not just a shop.<br /><span className="text-orange-500">A way of riding.</span>
          </h2>
          <p className="mt-8 text-lg text-zinc-400">
            Every MAFYOU motorbike is inspected, tuned and delivered ready to ride. Pick your machine, send your order on WhatsApp and we handle the rest.
          </p>
        </Reveal>
      </section>
      <section id="bikes" className="mx-auto max-w-7xl px-6 pb-32">
        <Reveal><h2 className="mb-12 text-center text-4xl font-black sm:text-5xl">The Collection</h2></Reveal>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {bikes.map((b, i) => <BikeCard key={b.slug} bike={b} index={i} />)}
        </div>
      </section>
      <section className="border-y border-white/10 bg-gradient-to-r from-orange-950/40 via-black to-orange-950/40 px-6 py-24">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-10 text-center md:grid-cols-4">
          {stats.map(([n, l], i) => (
            <Reveal key={l} delay={i * 0.1}>
              <div className="text-5xl font-black text-orange-500">{n}</div>
              <div className="mt-2 text-sm uppercase tracking-widest text-zinc-400">{l}</div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="px-6 py-32 text-center">
        <Reveal>
          <h2 className="text-4xl font-black sm:text-6xl">Ready to ride?</h2>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="mt-10 inline-block rounded-full bg-green-500 px-10 py-4 font-bold text-black transition hover:scale-105">
            Chat on WhatsApp
          </a>
        </Reveal>
      </section>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-zinc-500">© MAFYOU. All rights reserved.</footer>
    </main>
  );
}
