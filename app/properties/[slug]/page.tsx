import Image from "next/image";
import Link from "next/link";
import { Bath, BedDouble, CalendarDays, Check, MapPin, Maximize2 } from "lucide-react";
import { notFound } from "next/navigation";
import { properties } from "@/data/properties";
import PaymentCalculator from "@/components/property/PaymentCalculator";

export function generateStaticParams() {
  return properties.map(({ slug }) => ({ slug }));
}

export default async function PropertyDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = properties.find((item) => item.slug === slug);
  if (!property) notFound();

  return (
    <main className="min-h-screen bg-[#fafaf8] pb-20">
      <div className="mx-auto max-w-[1430px] px-5 py-8 sm:px-8 lg:px-12">
        <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900"><strong>Prototype — sample property.</strong> Pricing, availability and payment information are illustrative.</div>
        <div className="mt-6 grid gap-3 overflow-hidden rounded-2xl lg:grid-cols-[1.65fr_1fr]">
          <div className="relative min-h-[360px] lg:min-h-[540px]"><Image src={property.images[0]} alt={property.title} fill priority sizes="70vw" className="object-cover" /></div>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
            {property.images.slice(1, 3).map((image) => <div key={image} className="relative min-h-[180px] overflow-hidden lg:min-h-0"><Image src={image} alt="Property view" fill sizes="35vw" className="object-cover" /></div>)}
          </div>
        </div>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_390px]">
          <article>
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">{property.status}</p><h1 className="mt-2 font-serif text-3xl font-semibold text-[#0b1e3a] sm:text-4xl">{property.title}</h1><p className="mt-3 flex items-center gap-2 text-sm text-slate-500"><MapPin size={17} /> {property.location.area}, {property.location.city}</p></div>
              <p className="text-3xl font-extrabold tracking-tight text-[#bd8733]">₦{property.price.toLocaleString("en-NG")}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 border-y border-slate-200 py-5 text-sm font-semibold text-slate-600"><span className="flex items-center gap-2"><BedDouble size={20} /> {property.bedrooms} Bedrooms</span><span className="flex items-center gap-2"><Bath size={20} /> {property.bathrooms} Bathrooms</span><span className="flex items-center gap-2"><Maximize2 size={18} /> {property.area} sqm</span></div>
            <section className="mt-9"><h2 className="text-xl font-bold text-[#0f172a]">About this property</h2><p className="mt-4 max-w-3xl leading-7 text-slate-600">{property.description}</p></section>
            <section className="mt-9"><h2 className="text-xl font-bold text-[#0f172a]">Features</h2><div className="mt-5 grid gap-3 sm:grid-cols-2">{property.features.map((feature) => <span key={feature} className="flex items-center gap-3 text-sm text-slate-600"><span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-50 text-emerald-700"><Check size={14} /></span>{feature}</span>)}</div></section>
          </article>
          <aside className="h-fit lg:sticky lg:top-6">
            <PaymentCalculator price={property.price} propertyTitle={property.title} />
            <Link href={`/inspection?property=${encodeURIComponent(property.title)}`} className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-[#071c38] bg-white px-5 py-4 text-sm font-bold text-[#071c38] transition hover:bg-slate-50"><CalendarDays size={18} /> Schedule Inspection</Link>
          </aside>
        </div>
      </div>
    </main>
  );
}
