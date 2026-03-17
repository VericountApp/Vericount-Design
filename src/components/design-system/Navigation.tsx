import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";
import logoPrimary from "@/assets/logo-primary.png";

const sections = [
  { id: "hero", label: "Start" },
  { id: "brand", label: "Varumärke" },
  { id: "employer-brand", label: "Arbetsgivarvarumärke" },
  { id: "logos", label: "Logotyp" },
  { id: "brand-guidelines", label: "Varumärkesriktlinjer" },
  { id: "colors", label: "Färger" },
  { id: "typography", label: "Typografi" },
  { id: "spacing", label: "Avstånd" },
  { id: "tokens", label: "Tokens" },
  { id: "components", label: "Komponenter" },
  { id: "animations", label: "Animationer" },
  { id: "patterns", label: "Mönster" },
  { id: "accessibility", label: "Tillgänglighet" },
  { id: "icons", label: "Ikoner" },
  { id: "darkmode", label: "Mörkt läge" },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useScrollSpy(sections.map((s) => s.id));
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const Logo = ({ height = "h-7" }: { height?: string }) => (
    <img src={logoPrimary} alt="Vericount" className={cn("object-contain", height)} />
  );

  return (
    <>
      {/* ── Desktop sidebar ─────────────────────────────── */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-screen w-60 flex-col glass z-50 p-6">
        <div className="mb-8">
          <Logo />
        </div>
        <ul className="space-y-0.5 flex-1 overflow-y-auto">
          {sections.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => scrollTo(s.id)}
                className={cn(
                  "w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200",
                  activeId === s.id
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors mt-4"
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          {theme === "dark" ? "Ljust läge" : "Mörkt läge"}
        </button>
      </nav>

      {/* ── Mobile / tablet sticky top bar ──────────────── */}
      <header
        className={cn(
          "lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-sm"
            : "bg-background/70 backdrop-blur-md"
        )}
      >
        <div className="flex items-center justify-between px-4 h-14">
          {/* Compact logo */}
          <button
            onClick={() => scrollTo("hero")}
            className="transition-transform duration-200 active:scale-95"
          >
            <img src={logoPrimary} alt="Vericount" className="h-6 object-contain" />
          </button>

          {/* Right actions */}
          <div className="flex items-center gap-1">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
              aria-label="Byt tema"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-foreground hover:bg-muted/50 transition-colors"
              aria-label={mobileOpen ? "Stäng meny" : "Öppna meny"}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Active section pill */}
        {!mobileOpen && activeId && activeId !== "hero" && (
          <div className="px-4 pb-2">
            <span className="text-[11px] font-medium text-muted-foreground">
              {sections.find((s) => s.id === activeId)?.label}
            </span>
          </div>
        )}
      </header>

      {/* ── Mobile full-screen drawer ────────────────────── */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-40 transition-all duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer panel slides in from top */}
        <div
          className={cn(
            "absolute top-14 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-xl transition-transform duration-300 ease-out max-h-[calc(100vh-3.5rem)] overflow-y-auto",
            mobileOpen ? "translate-y-0" : "-translate-y-4"
          )}
        >
          <nav className="p-4">
            {/* Section groups */}
            <div className="mb-2">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60 px-3 mb-1">
                Navigera
              </p>
              <ul className="space-y-0.5">
                {sections.map((s) => (
                  <li key={s.id}>
                    <button
                      onClick={() => scrollTo(s.id)}
                      className={cn(
                        "w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150",
                        activeId === s.id
                          ? "bg-primary/10 text-primary"
                          : "text-foreground/70 hover:text-foreground hover:bg-muted/60"
                      )}
                    >
                      {s.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Theme toggle */}
            <div className="border-t border-border/40 mt-3 pt-3">
              <button
                onClick={() => { toggleTheme(); setMobileOpen(false); }}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-muted/60 transition-all"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                {theme === "dark" ? "Ljust läge" : "Mörkt läge"}
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
