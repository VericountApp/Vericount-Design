import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const durations = [
  { label: "150ms", value: "duration-150" },
  { label: "200ms", value: "duration-200" },
  { label: "300ms", value: "duration-300" },
  { label: "500ms", value: "duration-500" },
];

const easings = [
  { label: "ease", css: "ease", tw: "ease-in-out" },
  { label: "ease-in", css: "ease-in", tw: "ease-in" },
  { label: "ease-out", css: "ease-out", tw: "ease-out" },
  { label: "linear", css: "linear", tw: "ease-linear" },
];

export function AnimationsSection() {
  const [fadeKey, setFadeKey] = useState(0);
  const [scaleKey, setScaleKey] = useState(0);
  const [slideKey, setSlideKey] = useState(0);

  return (
    <section id="animations" className="py-24 md:py-32 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">
          Animationer & motion
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
          Rörelse & övergångar
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl leading-relaxed">
          Subtila animationer som ger liv åt gränssnittet utan att distrahera.
        </p>

        {/* Fade, Scale, Slide demos */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="glass rounded-2xl p-8 text-center">
            <h4 className="text-sm font-semibold mb-4">Fade in</h4>
            <div className="h-20 flex items-center justify-center mb-4">
              <div key={fadeKey} className="w-16 h-16 bg-primary/20 rounded-xl animate-fade-in" />
            </div>
            <Button size="sm" variant="outline" onClick={() => setFadeKey((k) => k + 1)}>
              Spela igen
            </Button>
            <p className="text-xs font-mono text-muted-foreground mt-3">animate-fade-in</p>
          </div>

          <div className="glass rounded-2xl p-8 text-center">
            <h4 className="text-sm font-semibold mb-4">Scale in</h4>
            <div className="h-20 flex items-center justify-center mb-4">
              <div key={scaleKey} className="w-16 h-16 bg-primary/20 rounded-xl animate-scale-in" />
            </div>
            <Button size="sm" variant="outline" onClick={() => setScaleKey((k) => k + 1)}>
              Spela igen
            </Button>
            <p className="text-xs font-mono text-muted-foreground mt-3">animate-scale-in</p>
          </div>

          <div className="glass rounded-2xl p-8 text-center">
            <h4 className="text-sm font-semibold mb-4">Slide in</h4>
            <div className="h-20 flex items-center justify-center mb-4 overflow-hidden">
              <div key={slideKey} className="w-16 h-16 bg-primary/20 rounded-xl animate-slide-in-right" />
            </div>
            <Button size="sm" variant="outline" onClick={() => setSlideKey((k) => k + 1)}>
              Spela igen
            </Button>
            <p className="text-xs font-mono text-muted-foreground mt-3">animate-slide-in-right</p>
          </div>
        </div>

        {/* Hover effects */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-6">Hover-effekter</h3>
          <div className="glass rounded-2xl p-6 sm:p-8 flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-start">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/15 rounded-xl transition-transform duration-200 hover:scale-105 cursor-pointer flex items-center justify-center text-sm text-muted-foreground">
                Scale
              </div>
              <p className="text-xs font-mono text-muted-foreground mt-2">hover:scale-105</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/15 rounded-xl transition-shadow duration-200 hover:shadow-lg cursor-pointer flex items-center justify-center text-sm text-muted-foreground">
                Shadow
              </div>
              <p className="text-xs font-mono text-muted-foreground mt-2">hover:shadow-lg</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/15 rounded-xl transition-colors duration-200 hover:bg-primary/30 cursor-pointer flex items-center justify-center text-sm text-muted-foreground">
                Color
              </div>
              <p className="text-xs font-mono text-muted-foreground mt-2">hover:bg-primary/30</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/15 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:bg-primary/30 cursor-pointer flex items-center justify-center text-sm text-muted-foreground">
                Alla
              </div>
              <p className="text-xs font-mono text-muted-foreground mt-2">Combined</p>
            </div>
          </div>
        </div>

        {/* Duration scale */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-6">Duration-skala</h3>
          <div className="glass rounded-2xl p-6 sm:p-8 flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-start">
            {durations.map((d) => (
              <div key={d.label} className="text-center">
                <div
                  className={cn(
                    "w-16 h-16 bg-primary/15 rounded-xl transition-transform hover:scale-110 cursor-pointer",
                    d.value
                  )}
                />
                <p className="text-xs font-mono text-muted-foreground mt-2">{d.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Easing curves */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Transition-kurvor</h3>
          <div className="glass rounded-2xl p-6 sm:p-8 flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-start">
            {easings.map((e) => (
              <div key={e.label} className="text-center">
                <div
                  className={cn(
                    "w-16 h-16 bg-primary/15 rounded-xl transition-transform duration-500 hover:translate-y-[-8px] cursor-pointer",
                    e.tw
                  )}
                />
                <p className="text-xs font-mono text-muted-foreground mt-2">{e.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
