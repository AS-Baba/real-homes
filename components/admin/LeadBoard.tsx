"use client";

import { Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { DemoLead, getLeads, saveLeads } from "@/lib/demo-store";

const columns = ["New", "Contacted", "Inspection", "Negotiation", "Closed"];

export default function LeadBoard() {
  const [items, setItems] = useState<DemoLead[]>([]);
  useEffect(() => {
    const timer = window.setTimeout(() => setItems(getLeads()), 0);
    return () => window.clearTimeout(timer);
  }, []);
  function updateStatus(id: DemoLead["id"], status: string) { const next=items.map(item=>item.id===id?{...item,status}:item); setItems(next); saveLeads(next); }
  return <div className="mt-8 overflow-x-auto pb-4"><div className="grid min-w-[1000px] grid-cols-5 gap-4">{columns.map(column=>{const cards=items.filter(item=>item.status===column);return <section key={column} className="rounded-2xl bg-slate-100/80 p-3"><div className="flex items-center justify-between px-1 py-2"><h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-600">{column}</h2><span className="grid h-6 min-w-6 place-items-center rounded-full bg-white px-1.5 text-[10px] font-bold">{cards.length}</span></div><div className="mt-2 space-y-3">{cards.map(lead=><article key={lead.id} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"><span className="grid h-9 w-9 place-items-center rounded-full bg-[#071c38] text-xs font-bold text-white">{lead.name[0]}</span><h3 className="mt-4 text-sm font-bold">{lead.name}</h3><p className="mt-1 text-xs text-slate-500">{lead.property}</p><p className="mt-3 text-sm font-extrabold text-[#b47b23]">{lead.budget}</p><label className="mt-4 block border-t border-slate-100 pt-3"><span className="sr-only">Update lead status</span><select value={lead.status} onChange={event=>updateStatus(lead.id,event.target.value)} className="w-full rounded-lg border border-slate-200 bg-white px-2 py-2 text-[11px] font-bold text-slate-600 outline-none">{columns.map(value=><option key={value}>{value}</option>)}</select></label><div className="mt-3 flex gap-2"><a href={`tel:${lead.phone||""}`} aria-label="Call lead" className="grid h-8 w-8 place-items-center rounded-lg bg-slate-50 text-slate-500"><Phone size={14}/></a><a href={`mailto:${lead.email||""}`} aria-label="Email lead" className="grid h-8 w-8 place-items-center rounded-lg bg-slate-50 text-slate-500"><Mail size={14}/></a><span className="ml-auto self-center text-[10px] text-slate-400">{lead.source}</span></div></article>)}</div></section>})}</div></div>;
}
