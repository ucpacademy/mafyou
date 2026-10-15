"use client";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return (
    <section ref={ref} className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-orange-600/30 blur-[140px]" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent_0_80px,rgba(255,255,255,0.04)_80px_81px)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
      </motion.div>
      <motion.div style={{ opacity }} className="px-6 text-center">
        <motion.p initial={{ opacity: 0, letterSpacing: "1em" }} animate={{ opacity: 1, letterSpacing: "0.4em" }} transition={{ duration: 1.4 }} className="mb-6 text-sm uppercase text-orange-400">
          Premium Motorbike Store
        </motion.p>
        <motion.h1 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: 0.2 }} className="bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-7xl font-black tracking-tighter text-transparent sm:text-9xl">
          MAFYOU
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }} className="mx-auto mt-6 max-w-xl text-lg text-zinc-300">
          Ride the extraordinary. Hand-picked machines, delivered with obsessive service.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="#bikes" className="rounded-full bg-orange-600 px-8 py-3 font-semibold text-white transition hover:scale-105 hover:bg-orange-500">Explore the collection</Link>
          <Link href="#story" className="rounded-full border border-white/30 px-8 py-3 font-semibold transition hover:bg-white/10">Our story</Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
