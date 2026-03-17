import { Check, Keyboard, Monitor, Eye } from "lucide-react";

const checks = [
  { icon: Eye, title: "Kontrast", items: ["Minst 4.5:1 för normal text", "Minst 3:1 för stor text (18px+)", "Alla interaktiva element synliga"] },
  { icon: Keyboard, title: "Tangentbord", items: ["Alla funktioner nåbara via Tab", "Synlig fokusindikator", "Logisk tabbordning"] },
  { icon: Monitor, title: "Skärmläsare", items: ["Semantisk HTML (header, main, nav)", "ARIA-attribut på interaktiva element", "Alternativtext på alla bilder"] },
];

export function AccessibilitySection() {
  return (
    <section id="accessibility" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">
          Tillgänglighet
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
          WCAG 2.1 AA
        </h2>
        <p className="text-muted-foreground text-lg mb-16 max-w-2xl leading-relaxed">
          Vi följer WCAG 2.1 AA-standarden. Tillgänglighet är inte valfritt, det är en grundprincip.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {checks.map((c) => (
            <div key={c.title} className="glass rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <c.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-4">{c.title}</h3>
              <ul className="space-y-3">
                {c.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check size={14} className="text-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Kontrastmatris */}
        <h3 className="text-lg font-semibold mb-6">Kontrastmatris</h3>
        <div className="glass rounded-2xl overflow-hidden overflow-x-auto">
          <table className="w-full text-sm min-w-[550px]">
            <thead>
              <tr className="border-b border-border">
                <th className="p-4 text-left font-medium text-muted-foreground">Kombination</th>
                <th className="p-4 text-left font-medium text-muted-foreground">Förhållande</th>
                <th className="p-4 text-left font-medium text-muted-foreground">Nivå</th>
                <th className="p-4 text-left font-medium text-muted-foreground">Förhandsvisning</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { combo: "Primär / Vit", ratio: "5.2:1", level: "AA", bg: "#27685b", fg: "#ffffff" },
                { combo: "Text / Bakgrund", ratio: "11.5:1", level: "AAA", bg: "#f9f7f5", fg: "#19342b" },
                { combo: "Accent / Vit", ratio: "3.5:1", level: "AA Stor text", bg: "#e4677c", fg: "#ffffff" },
                { combo: "Dämpad text / Bakgrund", ratio: "3.2:1", level: "AA Stor text", bg: "#f9f7f5", fg: "#5c8a7a" },
              ].map((r) => (
                <tr key={r.combo} className="hover:bg-muted/30 transition-colors">
                  <td className="p-4 font-medium">{r.combo}</td>
                  <td className="p-4 font-mono text-muted-foreground">{r.ratio}</td>
                  <td className="p-4">
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {r.level}
                    </span>
                  </td>
                  <td className="p-4">
                    <span
                      className="inline-block px-3 py-1 rounded text-xs font-medium"
                      style={{ backgroundColor: r.bg, color: r.fg }}
                    >
                      Exempel
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
