import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BikeArt from "@/components/BikeArt";
import OrderForm from "@/components/OrderForm";
import Reveal from "@/components/Reveal";
import { bikes, formatPrice, getBike } from "@/lib/bikes";

export function generateStaticParams() {
  return bikes.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: PageProps<"/bikes/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const bike = getBike(slug);
  return bike ? { title: `${bike.name} | MAFYOU`, description: bike.tagline } : {};
}

export default async function BikePage({ params }: PageProps<"/bikes/[slug]">) {
  const { slug } = await params;
  const bike = getBike(slug);
  if (!bike) notFound();
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <Link href="/" className="text-sm text-zinc-400 hover:text-white">← MAFYOU</Link>
      <div className="mt-8 grid gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="text-sm uppercase tracking-widest" style={{ color: bike.accent }}>{bike.type}</span>
          <h1 className="mt-2 text-5xl font-black sm:text-7xl">{bike.name}</h1>
          <p className="mt-4 text-xl text-zinc-300">{bike.tagline}</p>
          <BikeArt accent={bike.accent} className="my-8 w-full" />
          <p className="text-zinc-400">{bike.description}</p>
          <p className="mt-6 text-3xl font-bold" style={{ color: bike.accent }}>{formatPrice(bike.price)}</p>
          <dl className="mt-8 grid grid-cols-2 gap-4">
            {bike.specs.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/10 p-4">
                <dt className="text-xs uppercase tracking-widest text-zinc-500">{s.label}</dt>
                <dd className="mt-1 font-semibold">{s.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <div id="order" className="lg:sticky lg:top-8 lg:self-start">
          <OrderForm key={bike.slug} bike={bike} />
        </div>
      </div>
    </main>
  );
}
