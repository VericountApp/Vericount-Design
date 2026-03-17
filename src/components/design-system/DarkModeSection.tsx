import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const lightTokens = [
  { name: "--background", value: "32 24% 97%" },
  { name: "--foreground", value: "160 35% 15%" },
  { name: "--primary", value: "168 45% 28%" },
  { name: "--secondary", value: "33 29% 94%" },
  { name: "--accent", value: "350 70% 65%" },
  { name: "--muted", value: "31 20% 92%" },
  { name: "--border", value: "33 15% 88%" },
];

const darkTokens = [
  { name: "--background", value: "160 35% 8%" },
  { name: "--foreground", value: "33 29% 94%" },
  { name: "--primary", value: "168 45% 45%" },
  { name: "--secondary", value: "160 20% 18%" },
  { name: "--accent", value: "350 70% 60%" },
  { name: "--muted", value: "160 15% 20%" },
  { name: "--border", value: "160 15% 20%" },
];

function PreviewCard({ mode }: { mode: "light" | "dark" }) {
  return (
    <div className={mode} data-theme-preview>
      <div className="bg-background text-foreground rounded-2xl border border-border p-6 space-y-4">
        <h4 className="font-semibold font-heading">Exempelkort</h4>
        <p className="text-sm text-muted-foreground">
          Så här ser komponenter ut i {mode === "light" ? "ljust" : "mörkt"} tema.
        </p>
        <Input placeholder="Skriv här..." className="bg-background" />
        <div className="flex gap-2">
          <Button size="sm">Primär</Button>
          <Button size="sm" variant="outline">Kontur</Button>
        </div>
        <div className="flex gap-2">
          <Badge>Standard</Badge>
          <Badge variant="secondary">Sekundär</Badge>
          <Badge variant="destructive">Varning</Badge>
        </div>
      </div>
    </div>
  );
}

export function DarkModeSection() {
  return (
    <section id="darkmode" className="py-24 md:py-32 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">
          Mörkt läge
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
          Ljust och mörkt tema
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl leading-relaxed">
          Alla komponenter stöder mörkt läge via CSS-variabler. Använd knappen i navigationen för att byta tema.
        </p>

        {/* Jämförelse sida vid sida */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-6">Jämförelse</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm font-medium mb-3 text-muted-foreground">Ljust</p>
              <PreviewCard mode="light" />
            </div>
            <div>
              <p className="text-sm font-medium mb-3 text-muted-foreground">Mörkt</p>
              <PreviewCard mode="dark" />
            </div>
          </div>
        </div>

        {/* Tokenjämförelse */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Tokenjämförelse</h3>
          <div className="glass rounded-2xl overflow-hidden overflow-x-auto">
            <table className="w-full text-sm min-w-[500px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left px-6 py-3 font-medium text-muted-foreground">Token</th>
                  <th className="text-left px-6 py-3 font-medium text-muted-foreground">Ljust</th>
                  <th className="text-left px-6 py-3 font-medium text-muted-foreground">Mörkt</th>
                  <th className="text-left px-6 py-3 font-medium text-muted-foreground">Förhandsvisning</th>
                </tr>
              </thead>
              <tbody>
                {lightTokens.map((lt, i) => (
                  <tr key={lt.name} className="border-b border-border/50 last:border-0">
                    <td className="px-6 py-3 font-mono text-xs text-primary">{lt.name}</td>
                    <td className="px-6 py-3 font-mono text-xs">{lt.value}</td>
                    <td className="px-6 py-3 font-mono text-xs">{darkTokens[i].value}</td>
                    <td className="px-6 py-3">
                      <div className="flex gap-2">
                        <div
                          className="w-6 h-6 rounded-md border border-border"
                          style={{ backgroundColor: `hsl(${lt.value})` }}
                          title="Ljust"
                        />
                        <div
                          className="w-6 h-6 rounded-md border border-border"
                          style={{ backgroundColor: `hsl(${darkTokens[i].value})` }}
                          title="Mörkt"
                        />
                      </div>
                    </td>
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
