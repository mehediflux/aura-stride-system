import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Play } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CTA, DashboardPreview, FeatureGrid, IntegrationGrid, PricingCards, Steps, TrustStrip } from "@/components/saas-ui";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Nexus — The Operations OS for Modern Teams" },
    { name: "description", content: "Unify projects, analytics, automations, and team operations with Nexus." },
    { property: "og:title", content: "Nexus — The Operations OS for Modern Teams" },
    { property: "og:description", content: "Move every project forward from one connected workspace." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <main>
    <section className="grid-surface overflow-hidden bg-primary text-primary-foreground"><div className="page-shell pb-20 pt-20 sm:pt-28">
      <div className="motion-rise inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-3 py-1.5 font-mono text-[10px] uppercase"><span className="size-1.5 rounded-full bg-primary-foreground"/>Operations OS · v4.0</div>
      <h1 className="motion-rise mt-7 max-w-4xl text-5xl font-semibold leading-[.96] sm:text-7xl lg:text-[5.4rem]">Run every project from one electric core.</h1>
      <p className="motion-rise mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/75">Nexus unifies projects, analytics, automations, integrations, and team operations into a single workspace your company actually keeps open.</p>
      <div className="mt-8 flex flex-wrap gap-3"><Button asChild variant="hero" size="xl"><Link to="/signup">Start free — no card <ArrowRight/></Link></Button><Button asChild variant="heroOutline" size="xl"><Link to="/features"><Play/> Explore the platform</Link></Button></div>
      <p className="mt-5 text-sm text-primary-foreground/60">Free for 14 days · SOC 2 Type II · 99.99% uptime</p>
      <div className="mt-14"><DashboardPreview/></div>
    </div></section>
    <TrustStrip/>
    <section className="page-shell section-pad"><div className="mb-10 grid gap-5 lg:grid-cols-2"><h2 className="max-w-xl text-3xl font-semibold sm:text-5xl">One workspace. Five pillars, fully connected.</h2><p className="max-w-lg self-end text-muted-foreground">Stop stitching tools together. Nexus keeps work, data, and people moving in a single source of operational truth.</p></div><FeatureGrid/></section>
    <section className="bg-foreground text-background"><div className="page-shell section-pad grid items-center gap-12 lg:grid-cols-[1fr_420px]"><div><p className="font-mono text-[11px] uppercase text-primary">Why teams switch</p><h2 className="mt-3 max-w-xl text-3xl font-semibold sm:text-5xl">One tool instead of the fourteen you pay for.</h2><p className="mt-5 max-w-xl text-background/60">Replace scattered trackers, reports, automation tools, and integration glue with a workspace that keeps context intact.</p><ul className="mt-8 space-y-4">{["Cut tool sprawl and the handoffs that come with it.","Automate the busywork your team handles manually.","Give leadership one live operational source of truth."].map(x=><li key={x} className="flex gap-3 text-background/80"><Check className="size-5 text-primary"/>{x}</li>)}</ul></div><div className="rounded-xl bg-background/5 p-6 ring-1 ring-background/10"><p className="text-sm text-background/50">Average impact after 90 days</p><div className="mt-8 space-y-6">{[["64%","faster reporting"],["11h","saved per week"],["4→1","tools consolidated"]].map(([v,l])=><div key={l} className="flex items-end justify-between border-b border-background/10 pb-4"><strong className="font-display text-4xl">{v}</strong><span className="text-sm text-background/50">{l}</span></div>)}</div></div></div></section>
    <section className="page-shell section-pad"><p className="font-mono text-[11px] uppercase text-primary">How it works</p><h2 className="mt-3 mb-12 text-3xl font-semibold sm:text-5xl">From scattered to synchronized.</h2><Steps/></section>
    <section className="border-y border-border bg-card"><div className="page-shell section-pad grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><p className="font-mono text-[11px] uppercase text-primary">Integrations</p><h2 className="mt-3 text-3xl font-semibold sm:text-5xl">Your stack, wired together.</h2><p className="mt-5 text-muted-foreground">Connect the products your teams already trust. Map fields once and keep every system in sync.</p><Button asChild variant="link" className="mt-4 px-0"><Link to="/integrations">Browse all integrations <ArrowRight/></Link></Button></div><IntegrationGrid/></div></section>
    <section className="page-shell section-pad"><div className="mb-10 flex flex-wrap items-end justify-between gap-5"><div><p className="font-mono text-[11px] uppercase text-primary">Pricing</p><h2 className="mt-3 text-3xl font-semibold sm:text-5xl">Start clear. Scale cleanly.</h2></div><Link to="/pricing" className="text-sm text-primary">Compare every feature →</Link></div><PricingCards/></section>
    <section className="page-shell section-pad pt-0"><div className="grid gap-10 lg:grid-cols-2"><div><p className="font-mono text-[11px] uppercase text-primary">Customer signal</p><blockquote className="mt-4 text-3xl font-semibold leading-tight">“Nexus gave our teams one shared language for planning, shipping, and learning.”</blockquote><p className="mt-5 text-sm text-muted-foreground">Dana Okafor · VP Operations, Halcyon</p></div><Accordion type="single" collapsible>{[["Can we migrate existing work?","Yes. Guided importers for Jira, Asana, Notion, and spreadsheets preserve ownership and history."],["Is our data secure?","Nexus includes encryption at rest and in transit, SSO, audit logs, and regional controls."],["Does Nexus work for small teams?","Yes. Start with the free workspace and add advanced controls as your operation grows."]].map(([q,a],i)=><AccordionItem key={q} value={`q-${i}`}><AccordionTrigger>{q}</AccordionTrigger><AccordionContent className="text-muted-foreground">{a}</AccordionContent></AccordionItem>)}</Accordion></div></section>
    <CTA/>
  </main>;
}
