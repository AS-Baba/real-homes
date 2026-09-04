import { CalendarPlus } from "lucide-react";
import AdminHeader from "@/components/admin/AdminHeader";
import InspectionTable from "@/components/admin/InspectionTable";

export default function AdminInspectionsPage() {
  return <main className="p-5 sm:p-8 lg:p-10"><AdminHeader title="Inspections" subtitle="Coordinate site visits and update requests as they progress." action={<button className="flex items-center gap-2 rounded-lg bg-[#071c38] px-5 py-3 text-sm font-bold text-white"><CalendarPlus size={17} /> New inspection</button>} /><InspectionTable /></main>;
}
