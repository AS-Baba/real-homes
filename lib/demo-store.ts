import { inspections as seedInspections, leads as seedLeads } from "@/data/admin";
import { properties as seedProperties } from "@/data/properties";
import type { Property } from "@/types/property";

export const LEADS_KEY = "sanan-demo-leads";
export const INSPECTIONS_KEY = "sanan-demo-inspections";
export const PROPERTIES_KEY = "sanan-demo-properties";

export type DemoLead = { id: string | number; name: string; property: string; budget: string; source: string; status: string; phone?: string; email?: string };
export type DemoInspection = { id: string | number; customer: string; property: string; date: string; time: string; agent: string; status: string; phone?: string; email?: string; message?: string };

function read<T>(key: string, fallback: T[]): T[] {
  if (typeof window === "undefined") return fallback;
  try { const stored = window.localStorage.getItem(key); return stored ? JSON.parse(stored) : fallback; } catch { return fallback; }
}

export const getLeads = () => read<DemoLead>(LEADS_KEY, seedLeads);
export const getInspections = () => read<DemoInspection>(INSPECTIONS_KEY, seedInspections);
export const saveLeads = (items: DemoLead[]) => window.localStorage.setItem(LEADS_KEY, JSON.stringify(items));
export const saveInspections = (items: DemoInspection[]) => window.localStorage.setItem(INSPECTIONS_KEY, JSON.stringify(items));
export const getProperties = () => read<Property>(PROPERTIES_KEY, seedProperties);
export const saveProperties = (items: Property[]) => {
  window.localStorage.setItem(PROPERTIES_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event("sanan-properties-updated"));
};

export function addInspectionLead(inspection: DemoInspection, lead: DemoLead) {
  saveInspections([inspection, ...getInspections()]);
  saveLeads([lead, ...getLeads()]);
}
