import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-[#f4f6f8]"><AdminSidebar /><div className="lg:pl-64">{children}</div></div>;
}
