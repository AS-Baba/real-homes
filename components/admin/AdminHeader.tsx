export default function AdminHeader({ title, subtitle, action }: { title: string; subtitle: string; action?: React.ReactNode }) {
  return <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center"><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#b47b23]">Sanan operations</p><h1 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0f172a] sm:text-3xl">{title}</h1><p className="mt-2 text-sm text-slate-500">{subtitle}</p></div>{action}</header>;
}
