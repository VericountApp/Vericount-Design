import logoWhite from "@/assets/logo-white.png";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-primary"
    >
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-primary-foreground/5 blur-3xl" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto fade-in">
        <img
          src={logoWhite}
          alt="Vericount"
          className="h-12 md:h-16 mx-auto mb-10 object-contain"
        />
        <h1 className="sr-only">Vericount Designsystem</h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mx-auto leading-relaxed">
          Riktlinjer, komponenter och resurser som formar Vericounts visuella identitet.
        </p>
        <button
          onClick={() => document.getElementById("brand")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-12 inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
        >
          Utforska systemet ↓
        </button>
      </div>
    </section>
  );
}
