import Image from "next/image";
import { BedDouble, ChevronDown, MapPin, Search, WalletCards } from "lucide-react";

const fieldClass = "h-full w-full cursor-pointer appearance-none bg-transparent pt-5 text-[15px] font-semibold text-[#0a1d3a] outline-none";

export default function Hero() {
  return (
    <section className="relative bg-[#f8f8f7] pb-20 sm:pb-24">
      <div className="relative min-h-[560px] overflow-hidden sm:min-h-[610px] lg:min-h-[500px]">
        <Image src="/properties/22.jpg" alt="Modern luxury home at dusk" fill priority sizes="100vw" className="object-cover object-[64%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2747]/90 via-[#0b2747]/45 to-[#071b32]/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061a36]/30 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-[1540px] px-5 pb-32 pt-12 sm:px-8 sm:pt-14 lg:px-12 lg:pt-10">
          <div className="max-w-[560px] text-white">
            <h1 className="font-serif text-[48px] font-semibold leading-[1.04] tracking-[-0.025em] drop-shadow-sm sm:text-[60px] lg:text-[62px]">Find Your<br />Perfect Home</h1>
            <p className="mt-4 text-[17px] font-medium sm:text-[19px]">Premium properties. Trusted service.</p>
            <p className="mt-2 text-[16px] font-semibold text-[#efb651] sm:text-[18px]">Abuja&apos;s most trusted real estate marketplace.</p>
            <div className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#061a36]/95 px-3.5 py-2.5 text-[15px] font-semibold shadow-lg backdrop-blur-sm"><MapPin size={20} /> Abuja, Nigeria</div>
          </div>
        </div>
      </div>
      <form action="/properties" className="absolute inset-x-0 bottom-5 z-20 mx-auto grid w-[calc(100%-2.5rem)] max-w-[1430px] gap-1 rounded-xl border border-black/10 bg-white p-3 shadow-[0_12px_35px_rgba(10,29,58,0.17)] sm:bottom-7 sm:w-[calc(100%-4rem)] lg:bottom-8 lg:grid-cols-[1.15fr_1fr_1fr_1.08fr] lg:p-4">
        <FilterField label="Location" icon={<MapPin size={22} strokeWidth={1.7} />}><select name="location" aria-label="Location" defaultValue="abuja" className={fieldClass}><option value="abuja">Abuja</option><option value="guzape">Guzape</option><option value="maitama">Maitama</option><option value="asokoro">Asokoro</option></select></FilterField>
        <FilterField label="Bedrooms" icon={<BedDouble size={23} strokeWidth={1.7} />}><select name="bedrooms" aria-label="Bedrooms" defaultValue="" className={fieldClass}><option value="">Any</option><option value="1">1 Bedroom</option><option value="2">2 Bedrooms</option><option value="3">3 Bedrooms</option><option value="4">4+ Bedrooms</option></select></FilterField>
        <FilterField label="Budget" icon={<WalletCards size={22} strokeWidth={1.7} />}><select name="budget" aria-label="Budget" defaultValue="" className={fieldClass}><option value="">Any Budget</option><option value="50m">Up to ₦50M</option><option value="100m">Up to ₦100M</option><option value="250m">Up to ₦250M</option></select></FilterField>
        <button type="submit" className="flex min-h-[58px] items-center justify-center gap-3 rounded-lg bg-[#061a36] px-6 text-[15px] font-semibold text-white transition hover:bg-[#0d2d54] lg:min-h-[62px]"><Search size={22} strokeWidth={1.8} /> Search Properties</button>
      </form>
    </section>
  );
}

function FilterField({ label, icon, children }: { label: string; icon: React.ReactNode; children: React.ReactNode }) {
  return <label className="relative flex min-h-[66px] items-center gap-3 border-b border-slate-200 px-3 lg:border-b-0 lg:border-r lg:px-5"><span className="shrink-0 text-[#0a1d3a]">{icon}</span><span className="absolute left-[54px] top-2.5 text-[11px] font-medium text-slate-500 lg:left-[62px]">{label}</span><span className="min-w-0 flex-1">{children}</span><ChevronDown size={17} className="pointer-events-none absolute right-4 text-[#0a1d3a]" /></label>;
}
