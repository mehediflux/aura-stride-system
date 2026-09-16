import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const links = [
  ["Product", "/features"], ["Solutions", "/solutions"], ["Pricing", "/pricing"],
  ["Integrations", "/integrations"], ["Resources", "/blog"],
] as const;

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return <Link to="/" aria-label="Nexus home" className="flex shrink-0 items-center gap-2.5">
    <span className={`grid size-8 place-items-center rounded-md font-display text-sm font-bold ${inverse ? "bg-primary-foreground/15 text-primary-foreground ring-1 ring-primary-foreground/40" : "bg-primary text-primary-foreground"}`}>N</span>
    <span className={`font-display text-lg font-semibold ${inverse ? "text-primary-foreground" : "text-foreground"}`}>Nexus</span>
  </Link>;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const onHome = path === "/";
  return <header className={`relative z-50 border-b ${onHome ? "border-primary-foreground/15 bg-primary text-primary-foreground" : "border-border bg-background/95 backdrop-blur"}`}>
    <div className="page-shell grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:grid-cols-[auto_1fr_auto]">
      <Logo inverse={onHome} />
      <nav className="hidden items-center justify-center gap-7 lg:flex">
        {links.map(([label, to], index) => <Link key={to} to={to} className={`flex items-center gap-1 text-sm transition-colors ${onHome ? "text-primary-foreground/75 hover:text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`} activeProps={{ className: onHome ? "text-primary-foreground" : "text-foreground" }}>{label}{index < 2 && <ChevronDown className="size-3" />}</Link>)}
      </nav>
      <div className="hidden items-center gap-2 lg:flex">
        <Button asChild variant={onHome ? "ghost" : "ghost"}><Link to="/login">Log in</Link></Button>
        <Button asChild variant={onHome ? "hero" : "default"}><Link to="/signup">Start free</Link></Button>
      </div>
      <Button size="icon" variant="ghost" className="lg:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <div className={`border-t px-4 py-4 lg:hidden ${onHome ? "border-primary-foreground/15" : "border-border"}`}>
      <nav className="grid gap-1">{links.map(([label,to]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm hover:bg-accent/20">{label}</Link>)}</nav>
      <div className="mt-3 grid grid-cols-2 gap-2"><Button asChild variant={onHome ? "heroOutline" : "outline"}><Link to="/login">Log in</Link></Button><Button asChild variant={onHome ? "hero" : "default"}><Link to="/signup">Start free</Link></Button></div>
    </div>}
  </header>;
}

const footerCols = [
  ["Product", [["Features","/features"],["Integrations","/integrations"],["Pricing","/pricing"],["Dashboard","/dashboard"]]],
  ["Company", [["About","/about"],["Careers","/careers"],["Contact","/contact"],["Blog","/blog"]]],
  ["Resources", [["Documentation","/docs"],["Help center","/help"],["FAQ","/faq"],["Privacy","/privacy"]]],
] as const;

export function SiteFooter() {
  return <footer className="border-t border-border bg-card"><div className="page-shell py-14">
    <div className="grid gap-10 md:grid-cols-[1.4fr_2fr]"><div><Logo/><p className="mt-4 max-w-xs text-sm text-muted-foreground">The operations system for teams that want less friction and clearer decisions.</p><form className="mt-5 flex max-w-sm gap-2"><input aria-label="Work email" type="email" placeholder="Work email" className="min-w-0 flex-1 rounded-md border border-input bg-background px-3 text-sm"/><Button>Subscribe</Button></form></div>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">{footerCols.map(([title, items]) => <div key={title}><h3 className="font-mono text-[11px] uppercase text-muted-foreground">{title}</h3><ul className="mt-4 space-y-2.5">{items.map(([label,to]) => <li key={to}><Link to={to} className="text-sm text-muted-foreground hover:text-primary">{label}</Link></li>)}</ul></div>)}</div>
    </div><div className="mt-12 flex flex-col justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row"><span>© 2026 Nexus Labs, Inc.</span><div className="flex gap-5"><Link to="/terms">Terms</Link><Link to="/privacy">Privacy</Link><span>LinkedIn · X</span></div></div>
  </div></footer>;
}