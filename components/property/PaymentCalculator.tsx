"use client";

import Link from "next/link";
import { ArrowRight, Calculator, Info } from "lucide-react";
import { useMemo, useState } from "react";

const terms = [6, 12, 18, 24, 36];
const formatNaira = (value: number) => new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(value);

export default function PaymentCalculator({ price, propertyTitle }: { price: number; propertyTitle: string }) {
  const [deposit, setDeposit] = useState(Math.round(price * 0.3));
  const [months, setMonths] = useState(24);
  const safeDeposit = Math.min(Math.max(deposit || 0, 0), price);
  const balance = price - safeDeposit;
  const monthlyPayment = useMemo(() => Math.ceil(balance / months), [balance, months]);

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_14px_45px_rgba(15,23,42,0.09)]">
      <div className="bg-[#071c38] px-6 py-5 text-white"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-[#e3ad58]/15 text-[#e3ad58]"><Calculator size={21} /></span><div><p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#e3ad58]">Affordability</p><h2 className="mt-1 text-lg font-bold">Explore Payment Options</h2></div></div></div>
      <div className="p-6">
        <div className="space-y-5">
          <div><p className="text-xs font-medium text-slate-500">Property price</p><p className="mt-1 text-xl font-extrabold text-[#0f172a]">{formatNaira(price)}</p></div>
          <label className="block"><span className="text-xs font-semibold text-slate-600">Initial deposit</span><div className="mt-2 flex items-center rounded-lg border border-slate-200 px-3 focus-within:border-[#bd8733] focus-within:ring-2 focus-within:ring-[#bd8733]/10"><span className="text-sm font-bold text-slate-500">₦</span><input type="number" min={0} max={price} step={500000} value={deposit} onChange={(event) => setDeposit(Number(event.target.value))} className="w-full bg-transparent px-2 py-3 text-sm font-bold text-[#0f172a] outline-none" /></div></label>
          <label className="block"><span className="text-xs font-semibold text-slate-600">Payment period</span><select value={months} onChange={(event) => setMonths(Number(event.target.value))} className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm font-bold text-[#0f172a] outline-none focus:border-[#bd8733]">{terms.map((term) => <option key={term} value={term}>{term} months</option>)}</select></label>
        </div>
        <div className="mt-6 rounded-xl bg-[#f5f7fa] p-4"><div className="flex items-center justify-between gap-4 text-sm"><span className="text-slate-500">Balance</span><strong className="text-[#0f172a]">{formatNaira(balance)}</strong></div><div className="my-4 h-px bg-slate-200" /><p className="text-xs text-slate-500">Estimated monthly payment</p><p className="mt-1 text-2xl font-extrabold tracking-tight text-[#bd8733]">{formatNaira(monthlyPayment)}</p></div>
        <div className="mt-4 flex gap-2 text-[11px] leading-5 text-slate-500"><Info size={15} className="mt-0.5 shrink-0" /><p>Illustrative estimate only. Final commercial terms are subject to confirmation by Sanan.</p></div>
        <Link href={`/inspection?property=${encodeURIComponent(propertyTitle)}&plan=${months}`} className="group mt-6 flex items-center justify-center gap-2 rounded-lg bg-[#e3ad58] px-5 py-3.5 text-sm font-bold text-[#071c38] transition hover:bg-[#edba69]">Request This Payment Plan <ArrowRight size={17} className="transition group-hover:translate-x-1" /></Link>
      </div>
    </section>
  );
}
