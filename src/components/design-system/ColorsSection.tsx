import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface ColorInfo {
  name: string;
  hex: string;
  textHex: string;
  cssVar: string;
  contrastRatio: string;
  wcagLevel: string;
}

const colors: ColorInfo[] = [
  { name: "Primär", hex: "#27685b", textHex: "#ffffff", cssVar: "--primary", contrastRatio: "5.2:1", wcagLevel: "AA" },
  { name: "Sekundär", hex: "#f4f0eb", textHex: "#19342b", cssVar: "--secondary", contrastRatio: "10.8:1", wcagLevel: "AAA" },
  { name: "Accent", hex: "#e4677c", textHex: "#ffffff", cssVar: "--accent", contrastRatio: "3.5:1", wcagLevel: "AA Stor text" },
  { name: "Bakgrund", hex: "#f9f7f5", textHex: "#19342b", cssVar: "--background", contrastRatio: "11.5:1", wcagLevel: "AAA" },
  { name: "Kort", hex: "#ffffff", textHex: "#19342b", cssVar: "--card", contrastRatio: "12.5:1", wcagLevel: "AAA" },
  { name: "Dämpad", hex: "#efebe7", textHex: "#5c8a7a", cssVar: "--muted", contrastRatio: "3.2:1", wcagLevel: "AA Stor text" },
  { name: "Varning", hex: "#d74242", textHex: "#ffffff", cssVar: "--destructive", contrastRatio: "4.6:1", wcagLevel: "AA" },
  { name: "Ram", hex: "#e5e1dc", textHex: "", cssVar: "--border", contrastRatio: "N/A", wcagLevel: "N/A" },
];

export function ColorsSection() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopied(hex);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <section id="colors" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">Färger</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Interaktiv färgpalett</h2>
        <p className="text-muted-foreground text-lg mb-16 max-w-2xl leading-relaxed">
          Klicka på en färg för att kopiera hex-koden. Varje färg visar kontrastförhållande enligt WCAG.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {colors.map((c) => (
            <button
              key={c.name}
              onClick={() => copyColor(c.hex)}
              className="glass rounded-2xl overflow-hidden text-left group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="h-28 relative flex items-end p-4"
                style={{ backgroundColor: c.hex }}
              >
                {c.textHex && (
                  <span
                    className="text-xs font-medium opacity-80"
                    style={{ color: c.textHex }}
                  >
                    Aa
                  </span>
                )}
                <div className="absolute top-3 right-3">
                  {copied === c.hex ? (
                    <Check size={16} style={{ color: c.textHex || "#19342b" }} />
                  ) : (
                    <Copy
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: c.textHex || "#19342b" }}
                    />
                  )}
                </div>
              </div>
              <div className="p-4">
                <p className="font-medium text-sm">{c.name}</p>
                <p className="text-xs text-muted-foreground font-mono mt-1">{c.hex}</p>
                {c.wcagLevel !== "N/A" && (
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-primary font-medium">
                      {c.wcagLevel}
                    </span>
                    <span className="text-[10px] text-muted-foreground">{c.contrastRatio}</span>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
