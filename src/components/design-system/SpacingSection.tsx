const spacingScale = [
  { name: "1", px: 4, tw: "p-1" },
  { name: "2", px: 8, tw: "p-2" },
  { name: "3", px: 12, tw: "p-3" },
  { name: "4", px: 16, tw: "p-4" },
  { name: "6", px: 24, tw: "p-6" },
  { name: "8", px: 32, tw: "p-8" },
  { name: "12", px: 48, tw: "p-12" },
  { name: "16", px: 64, tw: "p-16" },
];

const breakpoints = [
  { name: "sm", width: "640px", desc: "Mobil (landscape)" },
  { name: "md", width: "768px", desc: "Tablet" },
  { name: "lg", width: "1024px", desc: "Desktop" },
  { name: "xl", width: "1280px", desc: "Stor desktop" },
  { name: "2xl", width: "1400px", desc: "Container max" },
];

export function SpacingSection() {
  return (
    <section id="spacing" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">
          Spacing & layout
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
          Avstånd & rutnät
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl leading-relaxed">
          Konsekvent avståndsskala baserad på 4px-grid. Används genomgående i alla komponenter.
        </p>

        {/* Spacing scale */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-6">Avståndsskala</h3>
          <div className="glass rounded-2xl p-8 space-y-3">
            {spacingScale.map((s) => (
              <div key={s.name} className="flex items-center gap-4">
                <code className="text-xs font-mono text-muted-foreground w-10">{s.px}px</code>
                <div
                  className="bg-primary/20 rounded-sm h-6"
                  style={{ width: `${s.px * 2}px` }}
                />
                <code className="text-xs font-mono text-primary">{s.tw}</code>
              </div>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-6">12-kolumns grid</h3>
        <div className="glass rounded-2xl p-4 sm:p-8 overflow-x-auto">
            <div className="min-w-[500px]">
              <div className="grid grid-cols-12 gap-1.5 sm:gap-2 mb-4">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="h-8 sm:h-10 bg-primary/15 rounded-md flex items-center justify-center text-[10px] sm:text-xs font-mono text-muted-foreground">
                    {i + 1}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-12 gap-1.5 sm:gap-2 mb-2">
                <div className="col-span-6 h-8 sm:h-10 bg-primary/25 rounded-md flex items-center justify-center text-[10px] sm:text-xs font-mono text-primary">col-span-6</div>
                <div className="col-span-6 h-8 sm:h-10 bg-primary/25 rounded-md flex items-center justify-center text-[10px] sm:text-xs font-mono text-primary">col-span-6</div>
              </div>
              <div className="grid grid-cols-12 gap-1.5 sm:gap-2 mb-2">
                <div className="col-span-4 h-8 sm:h-10 bg-primary/25 rounded-md flex items-center justify-center text-[10px] sm:text-xs font-mono text-primary">col-span-4</div>
                <div className="col-span-8 h-8 sm:h-10 bg-primary/25 rounded-md flex items-center justify-center text-[10px] sm:text-xs font-mono text-primary">col-span-8</div>
              </div>
              <div className="grid grid-cols-12 gap-1.5 sm:gap-2">
                <div className="col-span-3 h-8 sm:h-10 bg-primary/25 rounded-md flex items-center justify-center text-[10px] sm:text-xs font-mono text-primary">3</div>
                <div className="col-span-3 h-8 sm:h-10 bg-primary/25 rounded-md flex items-center justify-center text-[10px] sm:text-xs font-mono text-primary">3</div>
                <div className="col-span-3 h-8 sm:h-10 bg-primary/25 rounded-md flex items-center justify-center text-[10px] sm:text-xs font-mono text-primary">3</div>
                <div className="col-span-3 h-8 sm:h-10 bg-primary/25 rounded-md flex items-center justify-center text-[10px] sm:text-xs font-mono text-primary">3</div>
              </div>
            </div>
          </div>
        </div>

        {/* Breakpoints */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Breakpoints</h3>
          <div className="glass rounded-2xl overflow-hidden overflow-x-auto">
            <table className="w-full text-sm min-w-[550px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left px-4 sm:px-6 py-3 font-medium text-muted-foreground">Namn</th>
                  <th className="text-left px-4 sm:px-6 py-3 font-medium text-muted-foreground">Min-bredd</th>
                  <th className="text-left px-4 sm:px-6 py-3 font-medium text-muted-foreground">Beskrivning</th>
                  <th className="text-left px-4 sm:px-6 py-3 font-medium text-muted-foreground hidden sm:table-cell">CSS</th>
                </tr>
              </thead>
              <tbody>
                {breakpoints.map((bp) => (
                  <tr key={bp.name} className="border-b border-border/50 last:border-0">
                    <td className="px-4 sm:px-6 py-3 font-mono text-primary">{bp.name}</td>
                    <td className="px-4 sm:px-6 py-3 font-mono">{bp.width}</td>
                    <td className="px-4 sm:px-6 py-3 text-muted-foreground">{bp.desc}</td>
                    <td className="px-4 sm:px-6 py-3 font-mono text-xs text-muted-foreground hidden sm:table-cell">@media (min-width: {bp.width})</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
