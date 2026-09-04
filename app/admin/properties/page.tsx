import AdminHeader from "@/components/admin/AdminHeader";
import InventoryManager from "@/components/admin/InventoryManager";

export default function AdminPropertiesPage() {
  return <main className="p-5 sm:p-8 lg:p-10"><AdminHeader title="Property Inventory" subtitle="Add sample listings and update availability across the prototype." /><InventoryManager /></main>;
}
