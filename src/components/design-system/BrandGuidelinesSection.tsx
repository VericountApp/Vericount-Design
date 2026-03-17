import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logoPrimary from "@/assets/logo-primary.png";
import logoWhite from "@/assets/logo-white.png";

const colors = [
  { name: "Primär", hex: "#27685b", token: "--primary", usage: "Knappar, aktiva tillstånd, logotyp, rubriker i hero", textClass: "text-primary-foreground", bg: "bg-primary" },
  { name: "Accent", hex: "#e4677c", token: "--accent", usage: "Highlights, badges, hover-effekter, ikoner", textClass: "text-white", bg: "bg-accent" },
  { name: "Bakgrund", hex: "#f9f7f5", token: "--background", usage: "Sidans grundläggande bakgrundsfärg", textClass: "text-foreground", bg: "bg-background border border-border" },
  { name: "Sekundär", hex: "#f4f0eb", token: "--secondary", usage: "Kortbakgrunder, alternativa ytor, subtila sektioner", textClass: "text-foreground", bg: "bg-secondary border border-border" },
  { name: "Text", hex: "#19342b", token: "--foreground", usage: "All brödtext och primär textfärg", textClass: "text-primary-foreground", bg: "bg-foreground" },
  { name: "Dämpad text", hex: "#5c8a7a", token: "--muted-foreground", usage: "Sekundär text, etiketter, hjälptexter", textClass: "text-white", bg: "bg-muted-foreground" },
];

const typeScale = [
  { name: "Display", sample: "Vericount", size: "4rem / 64px", weight: "700", font: "Epilogue", usage: "Hero-rubriker", class: "font-heading text-6xl font-bold" },
  { name: "H1", sample: "Designsystem", size: "2.25rem / 36px", weight: "700", font: "Epilogue", usage: "Sidrubriker", class: "font-heading text-4xl font-bold" },
  { name: "H2", sample: "Grafisk profil", size: "1.875rem / 30px", weight: "700", font: "Epilogue", usage: "Sektionsrubriker", class: "font-heading text-3xl font-bold" },
  { name: "H3", sample: "Färgpalett", size: "1.25rem / 20px", weight: "600", font: "Epilogue", usage: "Kortrubriker", class: "font-heading text-xl font-semibold" },
  { name: "Body L", sample: "Automatiserad kvalitetskontroll för moderna redovisningsbyråer.", size: "1.125rem / 18px", weight: "400", font: "Inter", usage: "Ingress", class: "text-lg" },
  { name: "Body", sample: "Vericount erbjuder AI-driven avvikelseanalys och bokslutsanalys med nyckeltal.", size: "1rem / 16px", weight: "400", font: "Inter", usage: "Brödtext", class: "text-base" },
  { name: "Small", sample: "Använd aktiva verb och tala direkt till läsaren.", size: "0.875rem / 14px", weight: "400", font: "Inter", usage: "Etiketter, hjälptext", class: "text-sm text-muted-foreground" },
  { name: "Caption", sample: "GDPR · EU-datalagring · Krypterad", size: "0.75rem / 12px", weight: "500", font: "Inter", usage: "Taggar, mikrokopia", class: "text-xs font-medium tracking-wide uppercase text-muted-foreground" },
];

const logoRules = {
  dos: [
    "Använd alltid originala PNG-filer med full upplösning",
    "Säkerställ minst 16px frizon runt logotypen på alla sidor",
    "Använd vit variant mot mörka och primärfärgade bakgrunder",
    "Håll aspect ratio låst, sträck aldrig logotypen",
    "Minsta tillåtna bredd på wordmark: 80px",
  ],
  donts: [
    "Ändra inte logotypens färger manuellt",
    "Lägg inte till skuggor, glöd eller andra effekter",
    "Placera inte logotypen mot röriga bakgrunder",
    "Använd aldrig låg-upplösta versioner",
    "Rotera eller förvräng inte logotypen",
  ],
};

const writingRules = {
  dos: [
    "Skriv kort och tydligt, varje ord ska bära vikt",
    "Använd aktiva verb: 'Analysera', 'Identifiera', 'Synka'",
    "Tala direkt till läsaren: 'din bokföring', 'dina kunder'",
    "Kvantifiera när möjligt: 'Sätt upp på under 2 minuter'",
    "Lyft värdet framför funktionen: 'Öka kundvärdet' före 'AI-funktion'",
  ],
  donts: [
    "Undvik överdrifter: 'Revolutionerande', 'Världsledande'",
    "Inga utropstecken i gränssnittet",
    "Undvik passiv form: 'Rapporten genereras' → 'Generera rapport'",
    "Blanda inte svenska och engelska i samma mening",
    "Undvik intern terminologi i kundnära texter",
  ],
};

function RuleList({ items, type }: { items: string[]; type: "do" | "dont" }) {
  const isDo = type === "do";
  return (
    <div className={cn("rounded-2xl p-6 md:p-8 border", isDo ? "bg-primary/5 border-primary/20" : "bg-destructive/5 border-destructive/20")}>
      <h4 className={cn("font-semibold mb-5 flex items-center gap-2 text-sm uppercase tracking-wide", isDo ? "text-primary" : "text-destructive")}>
        {isDo ? <><Check size={16} className="shrink-0" /> Gör så här</> : <><X size={16} className="shrink-0" /> Undvik</>}
      </h4>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
            <span className={cn("mt-0.5 shrink-0 text-xs font-bold", isDo ? "text-primary" : "text-destructive")}>{isDo ? "✓" : "✕"}</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BrandGuidelinesSection() {
  return (
    <section id="brand-guidelines" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto space-y-24">

        {/* Header */}
        <div>
          <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">Varumärkesriktlinjer</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Brand Guidelines</h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Riktlinjer för hur Vericounts visuella identitet används konsekvent i alla kanaler och sammanhang.
          </p>
        </div>

        {/* ── Logotyp ── */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">01 · Logotyp</p>
          <h3 className="text-2xl font-bold mb-4 tracking-tight">Grafisk profil</h3>
          <p className="text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            Logotypen är Vericounts viktigaste varumärkesidentitet och ska alltid användas korrekt.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              { src: logoPrimary, bg: "bg-background border border-border", label: "Ljus bakgrund", desc: "Standardvariant" },
              { src: logoWhite, bg: "bg-primary", label: "Primär bakgrund", desc: "På teal-bakgrund" },
              { src: logoWhite, bg: "bg-foreground", label: "Mörk bakgrund", desc: "På mörkgrön/svart" },
            ].map((v) => (
              <div key={v.label} className="rounded-2xl overflow-hidden border border-border">
                <div className={cn("p-8 flex items-center justify-center aspect-video", v.bg)}>
                  <img src={v.src} alt="Vericount logotyp" className="max-h-10 object-contain" />
                </div>
                <div className="bg-muted/40 px-4 py-3">
                  <p className="text-sm font-medium">{v.label}</p>
                  <p className="text-xs text-muted-foreground">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Clearspace */}
          <div className="glass rounded-2xl p-8 mb-8">
            <h4 className="font-semibold mb-2">Frizon</h4>
            <p className="text-muted-foreground text-sm mb-6 max-w-xl leading-relaxed">
              Logotypen ska alltid omges av en frizon minst lika stor som höjden på symbolen. Placera aldrig text eller kanter inom denna zon.
            </p>
            <div className="flex items-center justify-center p-8 border-2 border-dashed border-border rounded-xl">
              <div className="border-2 border-dashed border-accent/50 p-8 rounded-lg">
                <img src={logoPrimary} alt="Vericount" className="h-10 object-contain" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-3 text-center">Den streckade zonen illustrerar minsta frizon</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <RuleList items={logoRules.dos} type="do" />
            <RuleList items={logoRules.donts} type="dont" />
          </div>
        </div>

        {/* ── Färger ── */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">02 · Färger</p>
          <h3 className="text-2xl font-bold mb-4 tracking-tight">Färgpalett</h3>
          <p className="text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            Vericounts färgpalett är inspirerad av nordisk natur, djup skogsgrönt kombinerat med varma neutraler och en energisk accent.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {colors.map((c) => (
              <div key={c.name} className="rounded-2xl overflow-hidden border border-border">
                <div className={cn("h-24 flex items-end p-4", c.bg)}>
                  <span className={cn("font-mono text-sm font-medium", c.textClass)}>{c.hex}</span>
                </div>
                <div className="p-4 bg-card">
                  <div className="flex items-start justify-between mb-1">
                    <p className="font-semibold text-sm">{c.name}</p>
                    <code className="text-[10px] bg-muted px-1.5 py-0.5 rounded text-muted-foreground font-mono">{c.token}</code>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{c.usage}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Kontrast", desc: "All text ska ha minst 4.5:1 kontrast mot bakgrunden (WCAG AA). Vit text på primärfärg ger 7.2:1." },
              { title: "Accentfärg", desc: "Använd accenten sparsamt för att skapa fokus. Aldrig som bakgrund för stora ytor." },
              { title: "Mörkt läge", desc: "Alla tokens är definierade för båda lägen. Använd alltid CSS-tokens, aldrig hårdkodade hex-värden." },
            ].map((r) => (
              <div key={r.title} className="bg-muted/30 rounded-xl p-5 border border-border">
                <p className="font-semibold text-sm mb-2">{r.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Typografi ── */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">03 · Typografi</p>
          <h3 className="text-2xl font-bold mb-4 tracking-tight">Typsnittssystem</h3>
          <p className="text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            Epilogue för karaktär och rubriker. Inter för läsbarhet och brödtext.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              { label: "Rubriktypsnitt", name: "Epilogue", weights: "Bold 700 · Semibold 600", isHeading: true },
              { label: "Brödtexttypsnitt", name: "Inter", weights: "Regular 400 · Medium 500", isHeading: false },
            ].map((f) => (
              <div key={f.name} className="rounded-2xl border border-border bg-card p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">{f.label}</p>
                <p className={cn("text-5xl font-bold tracking-tight text-foreground leading-none mb-4", f.isHeading && "font-heading")}>{f.name}</p>
                <p className={cn("text-muted-foreground mb-6 leading-relaxed", f.isHeading && "font-heading")}>
                  AaBbCcDdEeFf<br />0123456789 !@#%&
                </p>
                <div className="border-t border-border pt-4 flex justify-between text-xs text-muted-foreground">
                  <span>Google Fonts</span>
                  <span>{f.weights}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-border overflow-hidden">
            <div className="bg-muted/50 px-6 py-3 border-b border-border">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Typografisk skala</p>
            </div>
            <div className="divide-y divide-border">
              {typeScale.map((t) => (
                <div key={t.name} className="px-6 py-5 grid md:grid-cols-[1fr_auto] gap-4 items-center">
                  <div>
                    <p className={cn(t.class, "text-foreground mb-1 leading-tight")}>{t.sample}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                      <span className="text-xs text-muted-foreground">{t.name}</span>
                      <span className="text-xs text-muted-foreground font-mono">{t.size}</span>
                      <span className="text-xs text-muted-foreground">Vikt {t.weight}</span>
                    </div>
                  </div>
                  <div className="text-right hidden md:block">
                    <span className="text-xs bg-muted px-2 py-1 rounded font-mono text-muted-foreground">{t.font}</span>
                    <p className="text-xs text-muted-foreground mt-1">{t.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Röst & ton ── */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">04 · Röst &amp; ton</p>
          <h3 className="text-2xl font-bold mb-4 tracking-tight">Kommunikationsriktlinjer</h3>
          <p className="text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            Vericounts röst är professionell, modern och konkret. Vi kommunicerar med fackkunskap men utan distans.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { label: "Professionellt", icon: "🎯", desc: "Kompetent utan att vara distanserat." },
              { label: "Modernt", icon: "⚡", desc: "Innovation och framåtanda utan jargong." },
              { label: "Konkret", icon: "📊", desc: "Siffror och fakta framför vaga löften." },
              { label: "Tryggt", icon: "🔒", desc: "Vi bygger tillit genom transparens." },
            ].map((p) => (
              <div key={p.label} className="rounded-2xl border border-border bg-card p-6">
                <span className="text-2xl mb-4 block">{p.icon}</span>
                <p className="font-semibold mb-2 text-sm">{p.label}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <RuleList items={writingRules.dos} type="do" />
            <RuleList items={writingRules.donts} type="dont" />
          </div>

          {/* Before/after */}
          <div className="rounded-2xl border border-border overflow-hidden">
            <div className="bg-muted/50 px-6 py-3 border-b border-border">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Texttransformationer</p>
            </div>
            <div className="divide-y divide-border">
              {[
                { before: "Vår revolutionerande AI-plattform automatiserar din redovisningsprocess!", after: "Spara tid på varje kunds bokslut med 58 automatiserade kontroller." },
                { before: "Rapporten genereras av systemet och kan laddas ner.", after: "Generera rapporten och ladda ned den direkt." },
                { before: "Vi erbjuder world-class redovisningslösningar.", after: "Vericount är byggt för svenska byråer som levererar kundvärde." },
              ].map((ex, i) => (
                <div key={i} className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                  <div className="px-6 py-5">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-destructive mb-2">Undvik</p>
                    <p className="text-sm text-muted-foreground line-through leading-relaxed">{ex.before}</p>
                  </div>
                  <div className="px-6 py-5">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-primary mb-2">Gör så här</p>
                    <p className="text-sm leading-relaxed">{ex.after}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
