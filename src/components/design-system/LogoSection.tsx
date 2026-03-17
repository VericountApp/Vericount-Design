import { Check, X } from "lucide-react";
import logoPrimary from "@/assets/logo-primary.png";
import logoWhite from "@/assets/logo-white.png";

const logos = [
  {
    src: logoPrimary,
    label: "Primär logotyp",
    bg: "bg-background border border-border",
    desc: "Standardvariant för ljusa bakgrunder — webb, dokument, presentationer",
  },
  {
    src: logoWhite,
    label: "Vit variant",
    bg: "bg-primary",
    desc: "För mörka och primärfärgade bakgrunder",
  },
  {
    src: logoWhite,
    label: "Mörk bakgrund",
    bg: "bg-foreground",
    desc: "För mörkgrå eller svarta ytor",
  },
];

export function LogoSection() {
  return (
    <section id="logos" className="py-24 md:py-32 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">
          Logotyp
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
          Grafisk profil
        </h2>
        <p className="text-muted-foreground text-lg mb-16 max-w-2xl leading-relaxed">
          Vericounts logotyp består av en räv/sköld-symbol kombinerad med wordmarket "Vericount". Finns i primär (teal) och vit variant.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {logos.map((l) => (
            <div key={l.label} className="glass rounded-2xl overflow-hidden">
              <div className={`${l.bg} p-8 flex items-center justify-center aspect-video`}>
                <img src={l.src} alt={l.label} className="max-h-12 object-contain" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold mb-1">{l.label}</h3>
                <p className="text-sm text-muted-foreground">{l.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Guidelines */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass rounded-2xl p-8">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Check size={18} className="text-primary" /> Gör så här
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Använd alltid originala PNG-filer med full upplösning</li>
              <li>• Behåll proportionerna (lås aspect ratio)</li>
              <li>• Säkerställ minst 16px frizon runt logotypen</li>
              <li>• Använd vit variant mot mörka och primärfärgade bakgrunder</li>
              <li>• Minsta tillåtna bredd på wordmark: 80px</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-8">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <X size={18} className="text-destructive" /> Undvik
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Ändra inte logotypens färger</li>
              <li>• Sträck eller vrid inte logotypen</li>
              <li>• Placera inte logotypen på rörig bakgrund</li>
              <li>• Lägg inte till skuggor eller effekter</li>
              <li>• Använd aldrig låg-upplösta versioner</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
