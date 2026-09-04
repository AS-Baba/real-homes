import Link from "next/link";
import { ArrowRight, CircleDollarSign } from "lucide-react";
import AdminHeader from "@/components/admin/AdminHeader";
import DashboardStats from "@/components/admin/DashboardStats";
import { leads } from "@/data/admin";

export default function AdminDashboard() {
  const months=["Mar","Apr","May","Jun","Jul","Aug","Sep"];
  return <main className="p-5 sm:p-8 lg:p-10">
    <AdminHeader title="Good morning, Admin" subtitle="Here is what is happening across your property sales pipeline." />
    <DashboardStats />
    <div className="mt-6 grid gap-6 xl:grid-cols-[1.35fr_1fr]">
      <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><div className="flex items-center justify-between"><div><h2 className="text-lg font-bold">Lead activity</h2><p className="mt-1 text-xs text-slate-400">Enquiries over the last 7 months</p></div><span className="flex items-center gap-2 text-xs font-semibold text-emerald-600"><CircleDollarSign size={16}/> 117 enquiries</span></div><div className="mt-8 flex h-56 items-end gap-3 border-b border-slate-100 px-2">{[38,55,45,70,62,82,94].map((height,index)=><div key={months[index]} className="flex flex-1 flex-col items-center gap-2"><div className="w-full rounded-t-md bg-[#12345d]" style={{height:`${height}%`}}/><span className="text-[10px] text-slate-400">{months[index]}</span></div>)}</div></article>
      <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><div className="flex items-center justify-between"><h2 className="text-lg font-bold">Recent leads</h2><Link href="/admin/leads" className="flex items-center gap-1 text-xs font-bold text-[#b47b23]">View all <ArrowRight size={14}/></Link></div><div className="mt-5 divide-y divide-slate-100">{leads.slice(0,4).map(lead=><div key={lead.id} className="flex items-center gap-3 py-4"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#071c38] text-xs font-bold text-white">{lead.name.split(" ").map(name=>name[0]).slice(0,2).join("")}</span><div className="min-w-0 flex-1"><p className="truncate text-sm font-bold">{lead.name}</p><p className="truncate text-xs text-slate-400">{lead.property}</p></div><span className="rounded-full bg-amber-50 px-2 py-1 text-[9px] font-bold uppercase text-amber-700">{lead.status}</span></div>)}</div></article>
    </div>
  </main>;
}
