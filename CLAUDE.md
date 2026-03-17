# Vericount Design System

Designsystem och visuell identitetsdokumentation för Vericount.

## Arkitektur

Single-page React-app med scroll-baserad navigation. Ingen backend — allt är statisk dokumentation.

```
src/
├── pages/Index.tsx              # Huvudsida — renderar alla sektioner
├── components/
│   ├── design-system/           # Sektionskomponenter (varumärke, färger, typografi, etc.)
│   │   ├── Navigation.tsx       # Sidebar (desktop) + drawer (mobil)
│   │   ├── HeroSection.tsx      # Hero med logotyp
│   │   ├── BrandSection.tsx     # Designprinciper, tonalitet, copyguide
│   │   ├── ColorsSection.tsx    # Färgpalett med WCAG-kontrast
│   │   ├── TypographySection.tsx
│   │   ├── ComponentsSection.tsx # Showcase av 45+ UI-komponenter
│   │   └── ...                  # Se Navigation.tsx för alla sektioner
│   └── ui/                      # shadcn/ui-komponenter (rör ej direkt)
├── hooks/
│   ├── useScrollSpy.ts          # IntersectionObserver för aktiv sektion
│   └── use-mobile.tsx           # Responsiv breakpoint-hook
├── lib/utils.ts                 # cn() classname-utility
└── index.css                    # Design tokens (CSS-variabler), globala stilar
```

## Konventioner

- **Språk**: All UI-text och dokumentation på svenska
- **Stilar**: Tailwind CSS med CSS-variabler i `index.css` (HSL-format)
- **Typsnitt**: Epilogue (rubriker), Inter (brödtext)
- **Komponenter**: shadcn/ui — lägg till nya via `npx shadcn-ui@latest add <komponent>`
- **Ikoner**: Lucide React
- **Teman**: Light/dark via `next-themes` (class-baserat)

## Nyckelfiler

| Fil | Syfte |
|-----|-------|
| `src/index.css` | Design tokens, CSS-variabler (ljus + mörk) |
| `tailwind.config.ts` | Färger, animationer, typsnitt, breakpoints |
| `src/components/design-system/Navigation.tsx` | Alla sektioner definierade i `sections`-arrayen |
| `src/pages/Index.tsx` | Sektionsordning och layout |
| `components.json` | shadcn/ui-konfiguration |

## Kommandon

```sh
npm run dev      # Starta dev-server (port 8080)
npm run build    # Bygg för produktion
npm run lint     # Kör ESLint
npm run test     # Kör tester
```

## Varumärkesfärger

- **Primary** (teal): `hsl(168 45% 28%)` — huvudfärg
- **Accent** (rosa): `hsl(350 70% 65%)` — accentfärg
- **Background**: `hsl(32 24% 97%)` — varm off-white
- **Foreground**: `hsl(160 35% 15%)` — mörkgrön text
