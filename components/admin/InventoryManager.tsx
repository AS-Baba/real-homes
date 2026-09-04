"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus, X } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { getProperties, saveProperties } from "@/lib/demo-store";
import type { Property, PropertyStatus, PropertyType } from "@/types/property";

const statusStyle = { available: "bg-emerald-50 text-emerald-700", reserved: "bg-amber-50 text-amber-700", sold: "bg-rose-50 text-rose-700" };

export default function InventoryManager() {
  const [items, setItems] = useState<Property[]>([]);
  const [open, setOpen] = useState(false);
  useEffect(() => { const timer=window.setTimeout(()=>setItems(getProperties()),0); return()=>window.clearTimeout(timer); }, []);
  function commit(next: Property[]) { setItems(next); saveProperties(next); }
  function updateStatus(id: string, status: PropertyStatus) { commit(items.map(item => item.id === id ? { ...item, status } : item)); }
  function addProperty(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); const data=new FormData(event.currentTarget); const title=String(data.get("title")); const id=crypto.randomUUID();
    commit([{ id, slug:`sample-${title.toLowerCase().replace(/[^a-z0-9]+/g,"-")}-${id.slice(0,5)}`, title:`Prototype — ${title}`, type:String(data.get("type")) as PropertyType, location:{city:"Abuja",area:String(data.get("location"))}, price:Number(data.get("price")), bedrooms:Number(data.get("bedrooms")), bathrooms:Number(data.get("bathrooms")), parkingSpaces:2, area:Number(data.get("area")), status:"available", description:"A prototype property added through the Sanan inventory demonstration.", images:["/properties/14.jpeg","/properties/16.jpeg"], features:["Modern kitchen","Estate security","Dedicated parking"] }, ...items]);
    setOpen(false); event.currentTarget.reset();
  }
  return <>
    <div className="mt-6 flex justify-end"><button onClick={()=>setOpen(true)} className="flex items-center gap-2 rounded-lg bg-[#e3ad58] px-5 py-3 text-sm font-bold text-[#071c38]"><Plus size={17}/> Add Property</button></div>
    {open&&<div className="mt-5 rounded-2xl border border-[#e3ad58]/30 bg-white p-6 shadow-sm"><div className="flex items-center justify-between"><div><h2 className="text-lg font-bold">Add prototype property</h2><p className="mt-1 text-xs text-slate-400">Saved only in this browser.</p></div><button onClick={()=>setOpen(false)} aria-label="Close form"><X size={20}/></button></div><form onSubmit={addProperty} className="mt-5 grid gap-4 md:grid-cols-3"><Field label="Property name"><input name="title" required placeholder="Three Bedroom Apartment" className="form-control"/></Field><Field label="Location"><input name="location" required placeholder="Gaduwa" className="form-control"/></Field><Field label="Type"><select name="type" className="form-control"><option>Apartment</option><option>Duplex</option><option>Terrace</option><option>Villa</option><option>Bungalow</option></select></Field><Field label="Price (₦)"><input name="price" type="number" min="1" required placeholder="60000000" className="form-control"/></Field><Field label="Bedrooms"><input name="bedrooms" type="number" min="1" required defaultValue="3" className="form-control"/></Field><Field label="Bathrooms"><input name="bathrooms" type="number" min="1" required defaultValue="3" className="form-control"/></Field><Field label="Area (sqm)"><input name="area" type="number" min="1" required defaultValue="300" className="form-control"/></Field><div className="flex items-end md:col-span-2"><button type="submit" className="w-full rounded-lg bg-[#071c38] px-5 py-3.5 text-sm font-bold text-white">Add to Inventory</button></div></form></div>}
    <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"><div className="overflow-x-auto"><table className="w-full min-w-[780px] text-left"><thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500"><tr>{["Property","Location","Price","Status","Action"].map(h=><th key={h} className="px-6 py-4">{h}</th>)}</tr></thead><tbody className="divide-y divide-slate-100">{items.map(property=><tr key={property.id}><td className="px-6 py-4"><div className="flex items-center gap-3"><div className="relative h-12 w-16 overflow-hidden rounded-lg"><Image src={property.images[0]} alt="" fill sizes="64px" className="object-cover"/></div><div><p className="text-sm font-bold">{property.title}</p><p className="text-[10px] text-slate-400">{property.type} · {property.bedrooms} bedrooms</p></div></div></td><td className="px-6 py-4 text-sm text-slate-600">{property.location.area}</td><td className="px-6 py-4 text-sm font-bold">₦{(property.price/1_000_000).toFixed(0)}m</td><td className="px-6 py-4"><select value={property.status} onChange={e=>updateStatus(property.id,e.target.value as PropertyStatus)} className={`rounded-full border-0 px-3 py-1.5 text-[10px] font-bold uppercase outline-none ${statusStyle[property.status]}`}><option value="available">Available</option><option value="reserved">Reserved</option><option value="sold">Sold</option></select></td><td className="px-6 py-4"><Link href={String(property.id).startsWith("prop-") ? `/properties/${property.slug}` : "/properties"} className="text-xs font-bold text-[#b47b23]">View</Link></td></tr>)}</tbody></table></div></div>
  </>;
}

function Field({label,children}:{label:string;children:React.ReactNode}){return <label><span className="mb-2 block text-xs font-semibold text-slate-600">{label}</span>{children}</label>}
