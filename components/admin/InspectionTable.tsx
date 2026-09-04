"use client";

import { useEffect, useState } from "react";
import { DemoInspection, getInspections, saveInspections } from "@/lib/demo-store";

const statuses=["Pending","Confirmed","Completed","Cancelled"];
const statusStyle: Record<string,string>={Pending:"bg-amber-50 text-amber-700",Confirmed:"bg-blue-50 text-blue-700",Completed:"bg-emerald-50 text-emerald-700",Cancelled:"bg-rose-50 text-rose-700"};
export default function InspectionTable(){
 const [items,setItems]=useState<DemoInspection[]>([]); useEffect(()=>{const timer=window.setTimeout(()=>setItems(getInspections()),0);return()=>window.clearTimeout(timer)},[]);
 function update(id:DemoInspection["id"],status:string){const next=items.map(item=>item.id===id?{...item,status}:item);setItems(next);saveInspections(next)}
 return <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"><div className="overflow-x-auto"><table className="w-full min-w-[820px] text-left"><thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500"><tr>{["Customer","Property","Date & time","Assigned agent","Status"].map(h=><th key={h} className="px-6 py-4">{h}</th>)}</tr></thead><tbody className="divide-y divide-slate-100">{items.map(item=><tr key={item.id}><td className="px-6 py-5"><p className="text-sm font-bold">{item.customer}</p>{item.phone&&<p className="mt-1 text-xs text-slate-400">{item.phone}</p>}</td><td className="px-6 py-5 text-sm text-slate-600">{item.property}</td><td className="px-6 py-5"><p className="text-sm font-semibold">{item.date}</p><p className="mt-1 text-xs text-slate-400">{item.time}</p></td><td className="px-6 py-5 text-sm text-slate-600">{item.agent}</td><td className="px-6 py-5"><select value={item.status} onChange={e=>update(item.id,e.target.value)} className={`rounded-full border-0 px-3 py-1.5 text-[10px] font-bold uppercase outline-none ${statusStyle[item.status]}`}>{statuses.map(status=><option key={status}>{status}</option>)}</select></td></tr>)}</tbody></table></div></div>;
}
