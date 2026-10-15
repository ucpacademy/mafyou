import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BikeDetail from "@/components/BikeDetail";
import { bikes, getBike } from "@/lib/bikes";

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
  return <BikeDetail bike={bike} />;
}
