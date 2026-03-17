const typeScale = [
  { label: "H1", size: "text-5xl", weight: "font-bold", css: "font-size: 3rem; font-weight: 700; line-height: 1.1;", sample: "Rubrik ett" },
  { label: "H2", size: "text-4xl", weight: "font-bold", css: "font-size: 2.25rem; font-weight: 700; line-height: 1.2;", sample: "Rubrik två" },
  { label: "H3", size: "text-3xl", weight: "font-semibold", css: "font-size: 1.875rem; font-weight: 600; line-height: 1.3;", sample: "Rubrik tre" },
  { label: "H4", size: "text-2xl", weight: "font-semibold", css: "font-size: 1.5rem; font-weight: 600; line-height: 1.4;", sample: "Rubrik fyra" },
  { label: "H5", size: "text-xl", weight: "font-medium", css: "font-size: 1.25rem; font-weight: 500; line-height: 1.5;", sample: "Rubrik fem" },
  { label: "H6", size: "text-lg", weight: "font-medium", css: "font-size: 1.125rem; font-weight: 500; line-height: 1.5;", sample: "Rubrik sex" },
  { label: "Brödtext", size: "text-base", weight: "font-normal", css: "font-size: 1rem; font-weight: 400; line-height: 1.6;", sample: "Brödtext ser ut så här." },
  { label: "Liten", size: "text-sm", weight: "font-normal", css: "font-size: 0.875rem; font-weight: 400; line-height: 1.5;", sample: "Liten text för detaljer" },
  { label: "Etikett", size: "text-xs", weight: "font-medium", css: "font-size: 0.75rem; font-weight: 500; line-height: 1.4;", sample: "ETIKETTTEXT" },
];

export function TypographySection() {
  return (
    <section id="typography" className="py-24 md:py-32 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">Typografi</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Epilogue & Inter</h2>
        <p className="text-muted-foreground text-lg mb-16 max-w-2xl leading-relaxed">
          <strong style={{ fontFamily: "'Epilogue', sans-serif" }}>Epilogue</strong> används för rubriker, stilren och geometrisk.{" "}
          <strong>Inter</strong> används för brödtext, optimerad för läsbarhet på skärm.
        </p>

        <div className="space-y-0 glass rounded-2xl overflow-hidden divide-y divide-border">
          {typeScale.map((t) => (
            <div key={t.label} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 p-4 sm:p-6 hover:bg-muted/30 transition-colors">
              <span className="text-xs font-mono text-muted-foreground w-16 shrink-0">{t.label}</span>
              <span className={`${t.size} ${t.weight} flex-1`}>{t.sample}</span>
              <code className="hidden md:block text-[11px] text-muted-foreground font-mono max-w-[200px] truncate">
                {t.css}
              </code>
            </div>
          ))}
        </div>

        {/* Teckensnittsvikter */}
        <div className="mt-12 grid sm:grid-cols-4 gap-4">
          {[
            { w: "font-light", label: "Tunn", num: "300" },
            { w: "font-normal", label: "Normal", num: "400" },
            { w: "font-medium", label: "Medium", num: "500" },
            { w: "font-semibold", label: "Halvfet", num: "600" },
          ].map((f) => (
            <div key={f.num} className="glass rounded-xl p-6 text-center">
              <p className={`text-2xl ${f.w} mb-2`}>Aa</p>
              <p className="text-sm text-muted-foreground">{f.label}</p>
              <p className="text-xs font-mono text-muted-foreground mt-1">{f.num}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
