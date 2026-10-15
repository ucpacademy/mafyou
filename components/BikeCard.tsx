"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import BikeArt from "./BikeArt";
import { Bike, formatPrice } from "@/lib/bikes";

export default function BikeCard({ bike, index }: { bike: Bike; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/60 p-6 backdrop-blur"
    >
      <span className="absolute right-5 top-5 rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-widest text-zinc-300">{bike.type}</span>
      <BikeArt accent={bike.accent} className="mx-auto mt-6 w-full transition duration-500 group-hover:scale-110" />
      <h3 className="mt-4 text-2xl font-bold">{bike.name}</h3>
      <p className="mt-1 text-sm text-zinc-400">{bike.tagline}</p>
      <div className="mt-6 flex items-center justify-between">
        <span className="text-lg font-semibold" style={{ color: bike.accent }}>{formatPrice(bike.price)}</span>
        <Link href={`/bikes/${bike.slug}#order`} className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-orange-500 hover:text-white">
          Book now
        </Link>
      </div>
      <Link href={`/bikes/${bike.slug}`} className="mt-4 block text-sm text-zinc-400 underline-offset-4 hover:underline">View details →</Link>
    </motion.article>
  );
}
