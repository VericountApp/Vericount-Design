import { lazy, Suspense } from "react";
import { Navigation } from "@/components/design-system/Navigation";
import { HeroSection } from "@/components/design-system/HeroSection";
import { BrandSection } from "@/components/design-system/BrandSection";
import { LogoSection } from "@/components/design-system/LogoSection";
import { BrandGuidelinesSection } from "@/components/design-system/BrandGuidelinesSection";
import { ColorsSection } from "@/components/design-system/ColorsSection";
import { TypographySection } from "@/components/design-system/TypographySection";
import { SpacingSection } from "@/components/design-system/SpacingSection";

// Lazy-load heavy below-fold sections for faster initial load
const TokensSection = lazy(() => import("@/components/design-system/TokensSection").then(m => ({ default: m.TokensSection })));
const ComponentsSection = lazy(() => import("@/components/design-system/ComponentsSection").then(m => ({ default: m.ComponentsSection })));
const AnimationsSection = lazy(() => import("@/components/design-system/AnimationsSection").then(m => ({ default: m.AnimationsSection })));
const PatternsSection = lazy(() => import("@/components/design-system/PatternsSection").then(m => ({ default: m.PatternsSection })));
const AccessibilitySection = lazy(() => import("@/components/design-system/AccessibilitySection").then(m => ({ default: m.AccessibilitySection })));
const IconsSection = lazy(() => import("@/components/design-system/IconsSection").then(m => ({ default: m.IconsSection })));
const DarkModeSection = lazy(() => import("@/components/design-system/DarkModeSection").then(m => ({ default: m.DarkModeSection })));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="lg:ml-60">
        <HeroSection />
        <BrandSection />
        <LogoSection />
        <BrandGuidelinesSection />
        <ColorsSection />
        <TypographySection />
        <SpacingSection />
        <Suspense fallback={null}>
          <TokensSection />
          <ComponentsSection />
          <AnimationsSection />
          <PatternsSection />
          <AccessibilitySection />
          <IconsSection />
          <DarkModeSection />
        </Suspense>
        <footer className="py-20 px-6 text-center border-t border-border/60">
          <p className="text-xs text-muted-foreground/70 tracking-wide">
            © {new Date().getFullYear()} Vericount AB
          </p>
          <p className="text-[11px] text-muted-foreground/40 mt-1">
            Designsystem v1.3
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
