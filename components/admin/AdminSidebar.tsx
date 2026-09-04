"use client";

import Link from "next/link";
import { BarChart3, Building2, CalendarDays, LayoutDashboard, LogOut, Settings, UsersRound } from "lucide-react";
import { usePathname } from "next/navigation";

const items = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Properties", href: "/admin/properties", icon: Building2 },
  { label: "Leads & Pipeline", href: "/admin/leads", icon: UsersRound },
  { label: "Inspections", href: "/admin/inspections", icon: CalendarDays },
  { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  return (
    <aside className="bg-[#071c38] text-white lg:fixed lg:inset-y-0 lg:left-0 lg:w-64">
      <div className="flex h-[76px] items-center border-b border-white/10 px-6"><span className="text-lg font-extrabold tracking-[0.16em]">SANAN</span><span className="ml-2 rounded bg-[#e3ad58]/15 px-2 py-1 text-[9px] font-bold tracking-wider text-[#e3ad58]">ADMIN</span></div>
      <nav className="flex gap-2 overflow-x-auto p-4 lg:block lg:space-y-1 lg:overflow-visible lg:p-5">
        {items.map(({ label, href, icon: Icon }) => { const active = href === "/admin" ? pathname === href : pathname.startsWith(href); return <Link key={href} href={href} className={`flex shrink-0 items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold transition ${active ? "bg-[#e3ad58] text-[#071c38]" : "text-white/65 hover:bg-white/5 hover:text-white"}`}><Icon size={18} />{label}</Link>; })}
      </nav>
      <div className="hidden absolute inset-x-5 bottom-5 space-y-1 lg:block"><button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-white/55 hover:bg-white/5"><Settings size={18} /> Settings</button><Link href="/" className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-white/55 hover:bg-white/5"><LogOut size={18} /> Customer site</Link></div>
    </aside>
  );
}
