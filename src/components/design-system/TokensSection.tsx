import { useState } from "react";
import { Check, Copy } from "lucide-react";

const cssTokens = `/* Vericount Design Tokens */
:root {
  --background: 32 24% 97%;
  --foreground: 160 35% 15%;
  --primary: 168 45% 28%;
  --primary-foreground: 0 0% 100%;
  --secondary: 33 29% 94%;
  --secondary-foreground: 160 35% 15%;
  --accent: 350 70% 65%;
  --accent-foreground: 0 0% 100%;
  --muted: 31 20% 92%;
  --muted-foreground: 159 20% 45%;
  --destructive: 0 65% 55%;
  --destructive-foreground: 0 0% 100%;
  --border: 33 15% 88%;
  --input: 33 15% 88%;
  --ring: 168 45% 28%;
  --radius: 0.75rem;
}`;

const darkTokens = `/* Dark Mode Tokens */
.dark {
  --background: 160 35% 8%;
  --foreground: 33 29% 94%;
  --primary: 168 45% 45%;
  --primary-foreground: 0 0% 100%;
  --secondary: 160 20% 18%;
  --secondary-foreground: 33 29% 94%;
  --accent: 350 70% 60%;
  --accent-foreground: 0 0% 100%;
  --muted: 160 15% 20%;
  --muted-foreground: 159 15% 60%;
  --destructive: 0 65% 45%;
  --destructive-foreground: 0 0% 100%;
  --border: 160 15% 20%;
  --input: 160 15% 20%;
  --ring: 168 45% 45%;
}`;

const tailwindTokens = `// tailwind.config.ts
colors: {
  primary: {
    DEFAULT: "hsl(var(--primary))",
    foreground: "hsl(var(--primary-foreground))",
  },
  secondary: {
    DEFAULT: "hsl(var(--secondary))",
    foreground: "hsl(var(--secondary-foreground))",
  },
  accent: {
    DEFAULT: "hsl(var(--accent))",
    foreground: "hsl(var(--accent-foreground))",
  },
  destructive: {
    DEFAULT: "hsl(var(--destructive))",
    foreground: "hsl(var(--destructive-foreground))",
  },
}`;

const figmaTokens = `{
  "color": {
    "primary": { "value": "hsl(168, 45%, 28%)", "type": "color" },
    "primary-foreground": { "value": "hsl(0, 0%, 100%)", "type": "color" },
    "secondary": { "value": "hsl(33, 29%, 94%)", "type": "color" },
    "accent": { "value": "hsl(350, 70%, 65%)", "type": "color" },
    "background": { "value": "hsl(32, 24%, 97%)", "type": "color" },
    "foreground": { "value": "hsl(160, 35%, 15%)", "type": "color" },
    "muted": { "value": "hsl(31, 20%, 92%)", "type": "color" },
    "destructive": { "value": "hsl(0, 65%, 55%)", "type": "color" }
  },
  "spacing": {
    "1": { "value": "4px", "type": "spacing" },
    "2": { "value": "8px", "type": "spacing" },
    "3": { "value": "12px", "type": "spacing" },
    "4": { "value": "16px", "type": "spacing" },
    "6": { "value": "24px", "type": "spacing" },
    "8": { "value": "32px", "type": "spacing" },
    "12": { "value": "48px", "type": "spacing" },
    "16": { "value": "64px", "type": "spacing" }
  },
  "borderRadius": {
    "sm": { "value": "calc(0.75rem - 4px)", "type": "borderRadius" },
    "md": { "value": "calc(0.75rem - 2px)", "type": "borderRadius" },
    "lg": { "value": "0.75rem", "type": "borderRadius" }
  },
  "fontFamily": {
    "heading": { "value": "Epilogue, sans-serif", "type": "fontFamily" },
    "body": { "value": "Inter, sans-serif", "type": "fontFamily" }
  }
}`;

const spacingTokens = `/* Spacing Scale (4px grid) */
--space-1:  0.25rem;  /*  4px */
--space-2:  0.5rem;   /*  8px */
--space-3:  0.75rem;  /* 12px */
--space-4:  1rem;     /* 16px */
--space-5:  1.25rem;  /* 20px */
--space-6:  1.5rem;   /* 24px */
--space-8:  2rem;     /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */`;

const animationTokens = `/* Animation Tokens */
--duration-fast:   150ms;
--duration-normal: 200ms;
--duration-slow:   300ms;
--duration-slower: 500ms;

--ease-default: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in:      cubic-bezier(0.4, 0, 1, 1);
--ease-out:     cubic-bezier(0, 0, 0.2, 1);
--ease-spring:  cubic-bezier(0.175, 0.885, 0.32, 1.275);

/* Tailwind utilities */
animate-fade-in        /* 0.3s ease-out */
animate-scale-in       /* 0.2s ease-out */
animate-slide-in-right /* 0.3s ease-out */
animate-slide-in-left  /* 0.3s ease-out */`;

const tabs = [
  { id: "css", label: "CSS-variabler", code: cssTokens },
  { id: "dark", label: "Mörkt läge", code: darkTokens },
  { id: "tailwind", label: "Tailwind", code: tailwindTokens },
  { id: "figma", label: "Figma (JSON)", code: figmaTokens },
  { id: "spacing", label: "Spacing", code: spacingTokens },
  { id: "animation", label: "Animationer", code: animationTokens },
];

export function TokensSection() {
  const [activeTab, setActiveTab] = useState("css");
  const [copied, setCopied] = useState(false);

  const activeCode = tabs.find((t) => t.id === activeTab)!.code;

  const copyCode = () => {
    navigator.clipboard.writeText(activeCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="tokens" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">
          Design Tokens
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
          Utvecklarresurser
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl leading-relaxed">
          Alla designtokens som CSS-variabler, Tailwind-konfiguration, Figma-tokens och mer. Kopiera och använd direkt.
        </p>

        <div className="glass rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between border-b border-border px-4">
            <div className="flex overflow-x-auto">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`px-4 py-3 text-sm font-medium transition-colors border-b-2 -mb-px whitespace-nowrap ${
                    activeTab === t.id
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <button
              onClick={copyCode}
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-md hover:bg-muted shrink-0"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? "Kopierad!" : "Kopiera"}
            </button>
          </div>
          <pre className="p-6 text-sm font-mono text-foreground/80 overflow-x-auto leading-relaxed">
            {activeCode}
          </pre>
        </div>

        {/* Extra tokens */}
        <div className="grid sm:grid-cols-3 gap-4 mt-8">
          <div className="glass rounded-xl p-6">
            <p className="text-sm font-medium mb-3">Hörnradie</p>
            <div className="flex gap-3">
              {["rounded-sm", "rounded-md", "rounded-lg", "rounded-xl"].map((r) => (
                <div key={r} className={`w-10 h-10 bg-primary/20 ${r}`} />
              ))}
            </div>
            <p className="text-xs font-mono text-muted-foreground mt-3">--radius: 0.75rem</p>
          </div>
          <div className="glass rounded-xl p-6">
            <p className="text-sm font-medium mb-3">Skuggor</p>
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-card rounded-lg shadow-sm" />
              <div className="w-10 h-10 bg-card rounded-lg shadow-md" />
              <div className="w-10 h-10 bg-card rounded-lg shadow-lg" />
            </div>
            <p className="text-xs font-mono text-muted-foreground mt-3">sm / md / lg</p>
          </div>
          <div className="glass rounded-xl p-6">
            <p className="text-sm font-medium mb-3">Fokusring</p>
            <div className="w-10 h-10 bg-card rounded-lg ring-2 ring-ring ring-offset-2 ring-offset-background" />
            <p className="text-xs font-mono text-muted-foreground mt-3">--ring: primary</p>
          </div>
        </div>
      </div>
    </section>
  );
}
