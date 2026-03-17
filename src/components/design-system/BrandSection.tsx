import { Eye, Layers, Accessibility, Sparkles, MessageSquare, Megaphone, BookOpen, Heart, Lightbulb, Users, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const principles = [
  {
    icon: Eye,
    title: "Klarhet",
    description: "Vi gör komplext enkelt. Varje element har ett tydligt syfte.",
  },
  {
    icon: Layers,
    title: "Konsistens",
    description: "Samma upplevelse överallt. Förutsägbart och pålitligt.",
  },
  {
    icon: Accessibility,
    title: "Tillgänglighet",
    description: "Design för alla. Inkluderande utan kompromisser.",
  },
  {
    icon: Sparkles,
    title: "Elegans",
    description: "Varje pixel räknas. Skönhet i detaljerna.",
  },
];

const employerValues = [
  {
    icon: Heart,
    title: "Omtanke",
    description: "Vi bryr oss om våra kunder och kollegor, på riktigt.",
  },
  {
    icon: ShieldCheck,
    title: "Transparens",
    description: "Öppenhet i allt vi gör. Inga dolda agendor.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Vi utmanar traditionell redovisning med mod och nyfikenhet.",
  },
  {
    icon: Users,
    title: "Samarbete",
    description: "Tillsammans når vi längre. Lagandan är kärnan i allt.",
  },
];

const toneGuidelines = [
  { label: "Professionellt", desc: "Vi talar med fackkunskap och respekt. Kompetent utan att vara distanserat." },
  { label: "Modernt", desc: "Vår kommunikation speglar innovation och framåtanda, utan jargong eller buzzwords." },
  { label: "Konkret", desc: "Vi visar värde med tydliga budskap. 'Spara tid. Leverera värde.' istället för vaga löften." },
  { label: "Tryggt", desc: "Säkerhet och dataskydd genomsyrar allt vi gör. Vi bygger tillit genom transparens." },
];

const copyDos = [
  "Skriv kort och tydligt, varje ord ska bära vikt",
  "Använd aktiva verb: 'Analysera', 'Identifiera', 'Synka'",
  "Tala direkt till läsaren: 'din bokföring', 'dina kunder'",
  "Kvantifiera när möjligt: 'Sätt upp på under 2 minuter'",
  "Lyft värdet framför funktionen: 'Öka kundvärdet' före 'AI-funktion'",
];

const copyDonts = [
  "Undvik överdrifter: 'Revolutionerande', 'Världsledande'",
  "Inga utropstecken i gränssnittet",
  "Undvik passiv form: 'Rapporten genereras' → 'Generera rapport'",
  "Blanda inte svenska och engelska i samma mening",
  "Undvik intern terminologi i kundnära texter",
];

export function BrandSection() {
  return (
    <section id="brand" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">
          Varumärke
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
          Designprinciper
        </h2>
        <p className="text-muted-foreground text-lg mb-16 max-w-2xl leading-relaxed">
          Vericounts design bygger på fyra grundläggande principer som genomsyrar allt vi skapar.
        </p>

        {/* Designprinciper */}
        <div className="grid sm:grid-cols-2 gap-6 mb-20">
          {principles.map((p) => (
            <div
              key={p.title}
              className="group glass rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <p.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>

        <Separator className="mb-20" />

        {/* Arbetsgivarvarumärke */}
        <div id="employer-brand" className="mb-20">
          <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">
            Arbetsgivarvarumärke
          </p>
          <h3 className="text-2xl font-bold mb-4">Våra kärnvärden</h3>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl leading-relaxed">
            Fyra värderingar som formar kulturen på Vericount: hur vi arbetar, behandlar varandra och möter våra kunder.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {employerValues.map((v) => (
              <div
                key={v.title}
                className="group glass rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <v.icon className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>

        <Separator className="mb-20" />

        {/* Om produkten */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <BookOpen className="text-primary" size={20} />
            </div>
            <h3 className="text-2xl font-bold">Om Vericount</h3>
          </div>
          <div className="glass rounded-2xl p-8 space-y-4">
            <p className="text-lg font-medium">
              Automatiserad avstämning och kvalitetskontroll för moderna redovisningsbyråer.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Vericount är ett intelligent avstämnings- och analysverktyg byggt för svenska redovisningsbyråer.
              Plattformen erbjuder 58 automatiserade kontroller, AI-driven avvikelseanalys,
              bokslutsanalys med nyckeltal och Mino, en AI-assistent med kunskap om BFN och Skatteverket.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                { label: "Segment", value: "Svenska redovisningsbyråer" },
                { label: "Kärnlöfte", value: "Spara tid. Leverera värde." },
                { label: "Automatiserade kontroller", value: "58 st, täcker hela bokslutsprocessen" },
                { label: "Integrationer", value: "Fortnox, Spiris. Fler på gång: Björn Lundén, Bokio, Finago, Accountec" },
                { label: "Säkerhet", value: "100 % GDPR, EU-datalagring, krypterad" },
                { label: "Stöttade av", value: "EU, Arctic Business Incubator, Skellefteå kommun" },
              ].map((item) => (
                <div key={item.label} className="bg-muted/50 rounded-lg p-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{item.label}</p>
                  <p className="text-sm font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tonalitet */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <MessageSquare className="text-primary" size={20} />
            </div>
            <h3 className="text-2xl font-bold">Tonalitet</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {toneGuidelines.map((t) => (
              <Card key={t.label}>
                <CardContent className="pt-6">
                  <p className="font-semibold mb-2">{t.label}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Textriktlinjer */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Megaphone className="text-primary" size={20} />
            </div>
            <h3 className="text-2xl font-bold">Textriktlinjer</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-8">
              <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center text-xs">✓</span>
                Gör så här
              </h4>
              <ul className="space-y-3">
                {copyDos.map((d, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-0.5 shrink-0">•</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-2xl p-8">
              <h4 className="font-semibold text-destructive mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-destructive/15 flex items-center justify-center text-xs">✕</span>
                Undvik
              </h4>
              <ul className="space-y-3">
                {copyDonts.map((d, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-destructive mt-0.5 shrink-0">•</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
