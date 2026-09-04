import Image from "next/image";
import Link from "next/link";
import { Bath, BedDouble, Heart, MapPin, Maximize2 } from "lucide-react";
import type { Property } from "@/types/property";

const statusStyles = {
  available: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  reserved: "bg-amber-50 text-amber-700 ring-amber-600/20",
  sold: "bg-rose-50 text-rose-700 ring-rose-600/20",
};

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_8px_28px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.12)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image src={property.images[0]} alt={property.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-[1.035]" />
        <span className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.11em] ring-1 ${statusStyles[property.status]}`}>{property.status}</span>
        <button type="button" aria-label={`Save ${property.title}`} className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/95 text-[#0f172a] shadow-md transition hover:text-[#c69236]"><Heart size={19} strokeWidth={1.8} /></button>
      </div>
      <div className="p-5 sm:p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#b47b23]">Sample listing</p>
        <h3 className="mt-2 text-[19px] font-bold tracking-[-0.02em] text-[#0f172a]">{property.title}</h3>
        <p className="mt-2 flex items-center gap-1.5 text-[13px] text-slate-500"><MapPin size={15} /> {property.location.area}, {property.location.city}</p>
        <p className="mt-5 text-[22px] font-extrabold tracking-[-0.03em] text-[#bd8733]">₦{property.price.toLocaleString("en-NG")}</p>
        <div className="mt-5 flex items-center gap-4 border-y border-slate-100 py-4 text-[12px] font-medium text-slate-600">
          <span className="flex items-center gap-1.5"><BedDouble size={17} /> {property.bedrooms} Beds</span>
          <span className="flex items-center gap-1.5"><Bath size={17} /> {property.bathrooms} Baths</span>
          <span className="flex items-center gap-1.5"><Maximize2 size={15} /> {property.area} sqm</span>
        </div>
        <Link href={String(property.id).startsWith("prop-") ? `/properties/${property.slug}` : `/inspection?property=${encodeURIComponent(property.title)}`} className="mt-5 flex items-center justify-center rounded-lg bg-[#071c38] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#12345d]">{String(property.id).startsWith("prop-") ? "View Property" : "Request Inspection"}</Link>
      </div>
    </article>
  );
}
