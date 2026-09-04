"use client";

import { useEffect, useState } from "react";
import PropertyCard from "@/components/property/PropertyCard";
import { getProperties } from "@/lib/demo-store";
import type { Property } from "@/types/property";

export default function PropertyGrid() {
  const [items, setItems] = useState<Property[]>([]);
  useEffect(() => {
    const load = () => setItems(getProperties());
    const timer = window.setTimeout(load, 0);
    window.addEventListener("sanan-properties-updated", load);
    return () => { window.clearTimeout(timer); window.removeEventListener("sanan-properties-updated", load); };
  }, []);
  return <><p className="mt-1 text-sm text-slate-500">{items.length} prototype listings</p><div className="mt-7 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{items.map(property => <PropertyCard key={property.id} property={property} />)}</div></>;
}
