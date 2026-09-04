import AdminHeader from "@/components/admin/AdminHeader";
import LeadBoard from "@/components/admin/LeadBoard";

export default function LeadsPage() {
  return <main className="p-5 sm:p-8 lg:p-10"><AdminHeader title="Lead Pipeline" subtitle="Track every buyer from first enquiry to close. Change a status to move the lead." /><LeadBoard /></main>;
}
