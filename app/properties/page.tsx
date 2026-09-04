import { Search, SlidersHorizontal } from "lucide-react";
import PropertyGrid from "@/components/property/PropertyGrid";

export const metadata = {
  title: "Properties | Sanan Homes",
  description: "Explore prototype properties across Abuja.",
};

export default function PropertiesPage() {
  return (
    <main className="min-h-screen bg-[#fafaf8]">
      <section className="bg-[#071c38] px-5 py-14 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1430px]">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#e3ad58]">Property marketplace</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Find your next property</h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/65 sm:text-base">Browse sample listings and explore how Sanan&apos;s digital sales experience can make property discovery clearer.</p>
        </div>
      </section>
      <section className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1430px]">
          <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900"><strong>Prototype notice:</strong> Property names, prices and availability are illustrative and are not official Sanan inventory.</div>
          <form className="mt-7 grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-[1fr_1fr_1fr_auto]">
            <label className="rounded-lg border border-slate-200 px-4 py-2"><span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">Location</span><select name="location" className="mt-1 w-full bg-transparent text-sm font-semibold outline-none"><option>All Abuja</option><option>Guzape</option><option>Katampe</option><option>Mabushi</option></select></label>
            <label className="rounded-lg border border-slate-200 px-4 py-2"><span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">Property type</span><select name="type" className="mt-1 w-full bg-transparent text-sm font-semibold outline-none"><option>All types</option><option>Duplex</option><option>Villa</option><option>Terrace</option></select></label>
            <label className="rounded-lg border border-slate-200 px-4 py-2"><span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">Status</span><select name="status" className="mt-1 w-full bg-transparent text-sm font-semibold outline-none"><option>Any status</option><option>Available</option><option>Reserved</option><option>Sold</option></select></label>
            <button type="submit" className="flex min-h-14 items-center justify-center gap-2 rounded-lg bg-[#071c38] px-7 text-sm font-semibold text-white"><Search size={18} /> Search</button>
          </form>
          <div className="mt-10 flex items-center justify-between"><h2 className="text-2xl font-bold text-[#0f172a]">Available properties</h2><button type="button" className="hidden items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold sm:flex"><SlidersHorizontal size={17} /> More filters</button></div>
          <PropertyGrid />
        </div>
      </section>
    </main>
  );
}
