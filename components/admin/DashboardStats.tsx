"use client";

import { Building2, CalendarDays, Home, TrendingUp, UsersRound } from "lucide-react";
import { useEffect, useState } from "react";
import { getInspections, getLeads, getProperties } from "@/lib/demo-store";

export default function DashboardStats() {
  const [counts,setCounts]=useState({properties:0,available:0,leads:0,inspections:0});
  useEffect(()=>{const load=()=>{const properties=getProperties();setCounts({properties:properties.length,available:properties.filter(p=>p.status==="available").length,leads:getLeads().length,inspections:getInspections().length})};const timer=window.setTimeout(load,0);window.addEventListener("sanan-properties-updated",load);return()=>{window.clearTimeout(timer);window.removeEventListener("sanan-properties-updated",load)}},[]);
  const stats=[{label:"Prototype Properties",value:counts.properties,change:"Current inventory",icon:Building2},{label:"Available",value:counts.available,change:"Ready for enquiry",icon:Home},{label:"Total Leads",value:counts.leads,change:"Across the pipeline",icon:UsersRound},{label:"Inspections",value:counts.inspections,change:"All requests",icon:CalendarDays}];
  return <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{stats.map(({label,value,change,icon:Icon})=><article key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="flex items-start justify-between"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#071c38]/5 text-[#071c38]"><Icon size={20}/></span><TrendingUp size={16} className="text-emerald-600"/></div><p className="mt-5 text-3xl font-extrabold text-[#0f172a]">{value}</p><p className="mt-1 text-sm font-semibold text-slate-600">{label}</p><p className="mt-3 text-xs text-slate-400">{change}</p></article>)}</div>;
}
