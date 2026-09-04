import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { properties } from "@/data/properties";
import PropertyCard from "@/components/property/PropertyCard";

export default function FeaturedProperties() {
  return (
    <section className="bg-[#fafaf8] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-[1430px]">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#b47b23]">Curated for you</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-[-0.02em] text-[#0b1e3a] sm:text-4xl">Featured Properties</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-[15px]">Explore selected prototype properties demonstrating the Sanan buying experience.</p>
          </div>
          <Link href="/properties" className="group flex items-center gap-2 text-sm font-semibold text-[#ae7621]">View all properties <ArrowRight size={17} className="transition group-hover:translate-x-1" /></Link>
        </div>
        <div className="mt-9 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {properties.slice(0, 3).map((property) => <PropertyCard key={property.id} property={property} />)}
        </div>
      </div>
    </section>
  );
}
