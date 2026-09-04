"use client";

import Link from "next/link";
import { CalendarCheck, CheckCircle2, Clock3, MapPin } from "lucide-react";
import { FormEvent, useState } from "react";
import { addInspectionLead } from "@/lib/demo-store";

export default function InspectionPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const id = crypto.randomUUID();
    const name = String(form.get("name"));
    const property = String(form.get("property"));
    const phone = String(form.get("phone"));
    const email = String(form.get("email"));
    addInspectionLead(
      { id, customer: name, property, phone, email, date: String(form.get("date")), time: String(form.get("time")), message: String(form.get("message") || ""), agent: "Unassigned", status: "Pending" },
      { id: `lead-${id}`, name, property, phone, email, budget: "Not provided", source: "Website", status: "New" },
    );
    setSubmitted(true);
  }

  return (
    <main className="min-h-[calc(100vh-76px)] bg-[#f5f6f7] px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.1)] lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="bg-[#071c38] p-8 text-white sm:p-10">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-[#e3ad58]/15 text-[#e3ad58]"><CalendarCheck size={24} /></span>
          <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.2em] text-[#e3ad58]">Private viewing</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight">Schedule a Site Inspection</h1>
          <p className="mt-5 text-sm leading-7 text-white/65">Choose a convenient date and time. A Sanan representative will contact you to confirm your visit.</p>
          <div className="mt-10 space-y-4 border-t border-white/10 pt-7 text-sm text-white/75"><p className="flex items-center gap-3"><MapPin size={18} className="text-[#e3ad58]" /> Abuja, Nigeria</p><p className="flex items-center gap-3"><Clock3 size={18} className="text-[#e3ad58]" /> Confirmation within one business day</p></div>
        </aside>
        <section className="p-6 sm:p-10">
          {submitted ? (
            <div className="flex min-h-[500px] flex-col items-center justify-center text-center"><CheckCircle2 size={58} className="text-emerald-600" /><h2 className="mt-6 text-2xl font-bold text-[#0f172a]">Inspection Request Received</h2><p className="mt-3 max-w-md text-sm leading-6 text-slate-500">A Sanan representative will contact you to confirm the inspection. Your request is now visible in the prototype admin queue.</p><div className="mt-7 flex flex-wrap justify-center gap-3"><Link href="/properties" className="rounded-lg border border-[#071c38] px-6 py-3 text-sm font-semibold text-[#071c38]">Return to properties</Link><Link href="/admin/inspections" className="rounded-lg bg-[#071c38] px-6 py-3 text-sm font-semibold text-white">View admin queue</Link></div></div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#bd8733]">Inspection request</p><h2 className="mt-2 text-2xl font-bold text-[#0f172a]">Tell us when to meet you</h2>
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <Field label="Property" className="sm:col-span-2"><select name="property" required className="form-control"><option value="">Select a sample property</option><option>Prototype — Four Bedroom Duplex</option><option>Prototype — Five Bedroom Villa</option><option>Prototype — Four Bedroom Terrace</option></select></Field>
                <Field label="Full name"><input name="name" autoComplete="name" required placeholder="Your full name" className="form-control" /></Field>
                <Field label="Phone number"><input name="phone" type="tel" autoComplete="tel" required placeholder="+234" className="form-control" /></Field>
                <Field label="Email address" className="sm:col-span-2"><input name="email" type="email" autoComplete="email" required placeholder="you@example.com" className="form-control" /></Field>
                <Field label="Preferred date"><input name="date" type="date" required className="form-control" /></Field>
                <Field label="Preferred time"><select name="time" required className="form-control"><option value="">Select time</option><option>9:00 AM</option><option>11:00 AM</option><option>1:00 PM</option><option>3:00 PM</option></select></Field>
                <Field label="Additional message" className="sm:col-span-2"><textarea name="message" rows={4} placeholder="Anything we should know?" className="form-control resize-none" /></Field>
              </div>
              <button type="submit" className="mt-7 w-full rounded-lg bg-[#e3ad58] px-6 py-4 text-sm font-bold text-[#071c38] transition hover:bg-[#edba69]">Request Inspection</button>
              <p className="mt-4 text-center text-[11px] leading-5 text-slate-400">Prototype form — saved only in this browser for the interactive demo.</p>
            </form>
          )}
        </section>
      </div>
    </main>
  );
}

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return <label className={className}><span className="mb-2 block text-xs font-semibold text-slate-600">{label}</span>{children}</label>;
}
