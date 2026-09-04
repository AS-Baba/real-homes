"use client";

import Link from "next/link";
import { ChevronDown, Heart, Menu, UserRound, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Buy", href: "/properties" },
  { label: "Rent", href: "/properties?listing=rent" },
  { label: "New Developments", href: "/projects" },
  { label: "Commercial", href: "/properties?type=commercial" },
  { label: "Shortlets", href: "/properties?listing=shortlet" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;
  return (
    <header className="relative z-50 bg-[#061a36] text-white">
      <div className="mx-auto flex h-[76px] max-w-[1540px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" aria-label="Sanan Homes home" className="flex shrink-0 items-center gap-2.5">
          <svg viewBox="0 0 52 52" aria-hidden="true" className="h-11 w-11 text-[#e3ad58]">
            <path d="M4 23 26 7l22 16M8 20v27h36V20M19 47V29h14v18M17 22v-7m18 7v-7M14 32h4m16 0h4" fill="none" stroke="currentColor" strokeWidth="3.3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 27h10v7H21z" fill="none" stroke="currentColor" strokeWidth="2.5" />
          </svg>
          <span className="leading-none">
            <span className="block text-[20px] font-bold tracking-[0.16em] sm:text-[22px]">SANAN</span>
            <span className="mt-1 block text-[11px] font-semibold tracking-[0.32em] text-[#e3ad58] sm:text-[12px]">HOMES</span>
          </span>
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 xl:flex">
          {navigation.map((item) => <Link key={item.label} href={item.href} className="text-[13px] font-semibold text-white/90 transition hover:text-[#e3ad58]">{item.label}</Link>)}
          <Link href="/resources" className="flex items-center gap-1.5 text-[13px] font-semibold text-white/90 transition hover:text-[#e3ad58]">Resources <ChevronDown size={14} /></Link>
        </nav>
        <div className="hidden items-center gap-7 lg:flex">
          <Link href="/saved" className="flex items-center gap-2 text-[13px] font-semibold hover:text-[#e3ad58]"><Heart size={21} strokeWidth={1.8} /> Saved</Link>
          <Link href="/sign-in" className="flex items-center gap-2 text-[13px] font-semibold hover:text-[#e3ad58]"><UserRound size={20} strokeWidth={1.8} /> Sign In</Link>
          <Link href="/properties/new" className="rounded-lg bg-[#e3ad58] px-8 py-3.5 text-[13px] font-semibold text-white shadow-sm transition hover:bg-[#efbb67]">List Property</Link>
        </div>
        <button type="button" onClick={() => setMobileOpen((open) => !open)} aria-expanded={mobileOpen} aria-controls="mobile-nav" aria-label={mobileOpen ? "Close menu" : "Open menu"} className="rounded-lg border border-white/15 p-2.5 lg:hidden">{mobileOpen ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
      <div id="mobile-nav" className={`absolute inset-x-0 top-full overflow-hidden bg-[#061a36] shadow-2xl transition-all duration-300 lg:hidden ${mobileOpen ? "max-h-[560px] border-t border-white/10 opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="mx-auto grid max-w-[1540px] gap-1 px-5 py-5 sm:px-8">
          {[...navigation, { label: "Resources", href: "/resources" }].map((item) => <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-3 text-sm font-medium text-white/90 hover:bg-white/5 hover:text-[#e3ad58]">{item.label}</Link>)}
          <div className="mt-3 grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
            <Link href="/saved" className="flex items-center justify-center gap-2 rounded-lg border border-white/15 px-3 py-3 text-sm"><Heart size={17} /> Saved</Link>
            <Link href="/sign-in" className="flex items-center justify-center gap-2 rounded-lg border border-white/15 px-3 py-3 text-sm"><UserRound size={17} /> Sign In</Link>
          </div>
          <Link href="/properties/new" className="mt-2 rounded-lg bg-[#e3ad58] px-4 py-3 text-center text-sm font-semibold">List Property</Link>
        </nav>
      </div>
    </header>
  );
}
